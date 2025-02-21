// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "../interfaces/aaveV2/ILendingPoolAddressesProviderV2.sol";
import "../interfaces/aaveV2/ILendingPoolV2.sol";
import "../interfaces/IBalancerVaultV2.sol";
import "../interfaces/IBSLendingPair.sol";

contract MockLiquidationHelper {
    mapping(address => IBSLendingPair) public assetToEdgePair;
    IBalancerVaultV2 public balancerVault;
    IBSVault public immutable edgeVault;
    ILendingPoolV2 public LENDING_POOL;

    struct LiquidationParams {
        address pair;
        address collateralAsset;
        address borrowedAsset;
        address borrower;
        address initiator;
    }

    struct LiquidationCallLocalVars {
        uint256 initFlashBorrowedBalance;
        uint256 diffFlashBorrowedBalance;
        uint256 initCollateralBalance;
        uint256 diffCollateralBalance;
        uint256 flashLoanDebt;
        uint256 soldAmount;
        uint256 remainingTokens;
        uint256 borrowedAssetLeftovers;
    }

    struct LiquidateAndSwapParams {
        address pair;
        IERC20 collateralAsset;
        IERC20 borrowedAsset;
        address user;
        uint256 flashBorrowedAmount;
        uint256 premium;
        address initiator;
    }

    constructor(
        IBalancerVaultV2 _balancerVault,
        IBSVault _edgeVault,
        ILendingPoolV2 _pool,
        IBSLendingPair[] memory _edgePairs
    ) public {
        balancerVault = _balancerVault;
        LENDING_POOL = _pool;
        edgeVault = _edgeVault;

        for (uint256 i = 0; i < _edgePairs.length; i++) {
            address asset = address(_edgePairs[i].asset());
            assetToEdgePair[asset] = _edgePairs[i];
        }
    }

    function _liquidateAndSwap(LiquidateAndSwapParams memory params) internal {
        LiquidationCallLocalVars memory vars;
        vars.initCollateralBalance = params.collateralAsset.balanceOf(address(this));

        if (address(params.collateralAsset) != address(params.borrowedAsset)) {
            vars.initFlashBorrowedBalance = params.borrowedAsset.balanceOf(address(this));

            // Track leftover balance to rescue funds in case of external transfers into this contract
            vars.borrowedAssetLeftovers =
                vars.initFlashBorrowedBalance -
                params.flashBorrowedAmount;
        }

        vars.flashLoanDebt = params.flashBorrowedAmount + params.premium;

        // approve to deposit into vault
        params.borrowedAsset.approve(address(edgeVault), params.flashBorrowedAmount);

        // deposit borrwoed asset into edge vault
        edgeVault.deposit(
            params.borrowedAsset,
            address(this),
            address(this),
            params.flashBorrowedAmount
        );

        // approve pair to transfer tokens
        edgeVault.approveContract(address(this), params.pair, true, 0, 0, 0);

        // Liquidate the user position and release the underlying collateral
        IBSLendingPair(params.pair).liquidate(params.user);

        // withdraw borrowasset from edge vault
        edgeVault.withdraw(
            params.borrowedAsset,
            address(this),
            address(this),
            edgeVault.toShare(
                params.borrowedAsset,
                edgeVault.balanceOf(params.borrowedAsset, address(this)),
                true
            )
        );

        // withdraw collateral from edge vault
        uint256 collateralBalanceAfter =
            edgeVault.withdraw(
                params.collateralAsset,
                address(this),
                address(this),
                edgeVault.toShare(
                    params.collateralAsset,
                    edgeVault.balanceOf(params.collateralAsset, address(this)),
                    true
                )
            );

        // Track only collateral released, not current asset balance of the contract
        vars.diffCollateralBalance = collateralBalanceAfter - vars.initCollateralBalance;

        if (address(params.collateralAsset) != address(params.borrowedAsset)) {
            // Discover flash loan balance after the liquidation
            uint256 flashBorrowedAssetAfter = params.borrowedAsset.balanceOf(address(this));

            // Use only flash loan borrowed assets, not current asset balance of the contract
            vars.diffFlashBorrowedBalance = flashBorrowedAssetAfter - vars.borrowedAssetLeftovers;

            // Swap released collateral into the debt asset, to repay the flash loan
            vars.soldAmount = _swapTokensForExactTokens(
                address(params.collateralAsset),
                address(params.borrowedAsset),
                vars.diffCollateralBalance,
                vars.flashLoanDebt - vars.diffFlashBorrowedBalance
            );

            vars.remainingTokens = vars.diffCollateralBalance - vars.soldAmount;
        } else {
            vars.remainingTokens = vars.diffCollateralBalance - params.premium;
        }

        // Allow repay of flash loan
        params.borrowedAsset.approve(address(LENDING_POOL), vars.flashLoanDebt);

        // Transfer remaining tokens to initiator
        if (vars.remainingTokens > 0) {
            params.collateralAsset.transfer(params.initiator, vars.remainingTokens);
        }
    }

    /**
     * @dev swap Tokens on Balancer vault
     * @param assetToSwapFrom Origin asset
     * @param assetToSwapTo Destination asset
     * @param maxAmountToSwap Max amount of `assetToSwapFrom` allowed to be swapped
     * @param amountToReceive amount of `assetToSwapTo` to receive
     * @return amountToSwapped amount swapped
     */
    function _swapTokensForExactTokens(
        address assetToSwapFrom,
        address assetToSwapTo,
        uint256 maxAmountToSwap,
        uint256 amountToReceive
    ) internal returns (uint256 amountToSwapped) {
        // approve tokens to send to balancer vault to swap
        IERC20(assetToSwapFrom).approve(address(balancerVault), maxAmountToSwap);

        // purchase amountToReceive from balancer vault via swap
        amountToSwapped = balancerVault.swap(
            IBalancerVaultV2.SingleSwap({
                poolId: "",
                kind: IBalancerVaultV2.SwapKind.GIVEN_IN,
                assetIn: assetToSwapFrom,
                assetOut: assetToSwapTo,
                amount: maxAmountToSwap,
                userData: "0x00"
            }),
            IBalancerVaultV2.FundManagement({
                sender: address(this),
                fromInternalBalance: false,
                recipient: payable(address(this)),
                toInternalBalance: false
            }),
            amountToReceive,
            block.timestamp + 1 hours
        );
    }

    /**
     * @dev Decodes the information encoded in the flash loan params
     * @param params Additional variadic field to include extra params
     * @return LiquidationParams struct containing decoded params
     */
    function _decodeParams(bytes memory params) internal pure returns (LiquidationParams memory) {
        (
            address pair,
            address collateralAsset,
            address borrowedAsset,
            address borrower,
            address initiator
        ) = abi.decode(params, (address, address, address, address, address));

        return LiquidationParams(pair, collateralAsset, borrowedAsset, borrower, initiator);
    }

    /**
     * @dev This function must be called only be the LENDING_POOL and takes care of repaying
     * active debt positions, migrating collateral and incurring new V2 debt token debt.
     *
     * @param assets The array of flash loaned assets used to repay debts.
     * @param amounts The array of flash loaned asset amounts used to repay debts.
     * @param premiums The array of premiums incurred as additional debts.
     * @param initiator The address that initiated the flash loan, unused.
     * @param params The byte array containing
     */
    function executeOperation(
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata premiums,
        address initiator,
        bytes calldata params
    ) public returns (bool) {
        LiquidationParams memory decodedParams = _decodeParams(params);

        require(
            assets.length == 1 && assets[0] == decodedParams.borrowedAsset,
            "INCONSISTENT_PARAMS"
        );

        _liquidateAndSwap(
            LiquidateAndSwapParams({
                pair: decodedParams.pair,
                collateralAsset: IERC20(decodedParams.collateralAsset),
                borrowedAsset: IERC20(decodedParams.borrowedAsset),
                user: decodedParams.borrower,
                flashBorrowedAmount: amounts[0],
                premium: premiums[0],
                initiator: decodedParams.initiator
            })
        );

        return true;
    }

    /**
     * @dev This function will trigger logic to flashloan borrow and liquidate
     *
     * @param asset the asset that will be flashloaned
     * @param borrower who will be liquidated
     * @param amount of tokens to borrow & liquidate
     */
    function flashLoanToLiquidate(
        address asset,
        address borrower,
        uint256 amount
    ) public {
        IBSLendingPair pair = assetToEdgePair[asset];
        require(address(assetToEdgePair[asset]) != address(0), "Not support asset");

        uint256[] memory modes = new uint256[](1);
        modes[0] = 0;

        address[] memory assets = new address[](1);
        assets[0] = asset; // 0 = no debt (flash), 1 = stable, 2 = variable

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = amount;

        bytes memory params =
            abi.encode(address(pair), pair.collateralAsset(), asset, borrower, msg.sender);

        LENDING_POOL.flashLoan(
            address(this), // receiverAddress
            assets,
            amounts,
            modes,
            address(this), // onBehalfOf
            params,
            0 // referralCode
        );
    }
}
