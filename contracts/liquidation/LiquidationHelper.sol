// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "./aave/FlashLoanReceiverBaseV2.sol";
import "../interfaces/aaveV2/ILendingPoolAddressesProviderV2.sol";
import "../interfaces/aaveV2/ILendingPoolV2.sol";
import "../interfaces/IBalancerVaultV2.sol";
import "../interfaces/IBSLendingPair.sol";
import "../interfaces/IBSVault.sol";

////////////////////////////////////////////////////////////////////////////////////////////
///
/// @title LiquidationHelper
/// @author @conlot-crypto
/// @notice Element finance Principal(EFP) token Liquidator Contract.
/// A contract that takes the flash loan from Aave.
/// Repays the debt and liquidates the collateral via the EFP pools.
/// Then uses the remaining funds to repay back the flashloan and keeps the rest as profit
/// For USDC PT/USDC, wBTC PT/wBTC, DAI PT/DAI pairs
///
////////////////////////////////////////////////////////////////////////////////////////////

contract LiquidationHelper is FlashLoanReceiverBaseV2 {
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

    struct FlashLoanParams {
        address pair;
        address collateralAsset;
        address borrowedAsset;
        address initiator;
    }

    struct LiquidateAndSwapParams {
        IBSLendingPair pair;
        IERC20 collateralAsset;
        IERC20 borrowedAsset;
        address[] borrowers;
        uint256 flashBorrowedAmount;
        address initiator;
    }

    /// @dev Balancer V2 Vault
    IBalancerVaultV2 public balancerVault;

    /// @dev edge.finanace vault
    IBSVault public immutable edgeVault;

    /// @dev params to be used for liquidating and swapping on balancer
    LiquidateAndSwapParams internal liquidateAndSwapParams;

    constructor(
        address _aaveAddressProvider,
        IBalancerVaultV2 _balancerVault,
        IBSVault _edgeVault
    ) public FlashLoanReceiverBaseV2(_aaveAddressProvider) {
        require(address(_balancerVault) != address(0), "Invalid Balancer Vault");
        require(address(_edgeVault) != address(0), "Invalid Edge Vault");

        balancerVault = _balancerVault;
        edgeVault = _edgeVault;
    }

    /**
     * @dev
     * @param params LiquidateAndSwapParams
     */
    function _liquidateAndSwap(uint256 premium) internal {
        LiquidationCallLocalVars memory vars;
        vars.initCollateralBalance = liquidateAndSwapParams.collateralAsset.balanceOf(
            address(this)
        );

        if (
            address(liquidateAndSwapParams.collateralAsset) !=
            address(liquidateAndSwapParams.borrowedAsset)
        ) {
            vars.initFlashBorrowedBalance = liquidateAndSwapParams.borrowedAsset.balanceOf(
                address(this)
            );

            // Track leftover balance to rescue funds in case of external transfers into this contract
            vars.borrowedAssetLeftovers =
                vars.initFlashBorrowedBalance -
                liquidateAndSwapParams.flashBorrowedAmount;
        }

        vars.flashLoanDebt = liquidateAndSwapParams.flashBorrowedAmount + premium;

        // approve to deposit into vault
        liquidateAndSwapParams.borrowedAsset.approve(
            address(edgeVault),
            liquidateAndSwapParams.flashBorrowedAmount
        );

        // deposit borrwoed asset into edge vault
        edgeVault.deposit(
            liquidateAndSwapParams.borrowedAsset,
            address(this),
            address(this),
            liquidateAndSwapParams.flashBorrowedAmount
        );

        // approve pair to transfer tokens
        edgeVault.approveContract(
            address(this),
            address(liquidateAndSwapParams.pair),
            true,
            0,
            0,
            0
        );

        // Liquidate the user position and release the underlying collateral
        for (uint256 i = 0; i < liquidateAndSwapParams.borrowers.length; i++) {
            liquidateAndSwapParams.pair.liquidate(liquidateAndSwapParams.borrowers[i]);
        }

        // withdraw borrowasset from edge vault
        edgeVault.withdraw(
            liquidateAndSwapParams.borrowedAsset,
            address(this),
            address(this),
            edgeVault.toShare(
                liquidateAndSwapParams.borrowedAsset,
                edgeVault.balanceOf(liquidateAndSwapParams.borrowedAsset, address(this)),
                true
            )
        );

        // withdraw collateral from edge vault
        uint256 collateralBalanceAfter =
            edgeVault.withdraw(
                liquidateAndSwapParams.collateralAsset,
                address(this),
                address(this),
                edgeVault.toShare(
                    liquidateAndSwapParams.collateralAsset,
                    edgeVault.balanceOf(liquidateAndSwapParams.collateralAsset, address(this)),
                    true
                )
            );

        // Track only collateral released, not current asset balance of the contract
        vars.diffCollateralBalance = collateralBalanceAfter - vars.initCollateralBalance;

        if (
            address(liquidateAndSwapParams.collateralAsset) !=
            address(liquidateAndSwapParams.borrowedAsset)
        ) {
            // Discover flash loan balance after the liquidation
            uint256 flashBorrowedAssetAfter =
                liquidateAndSwapParams.borrowedAsset.balanceOf(address(this));

            // Use only flash loan borrowed assets, not current asset balance of the contract
            vars.diffFlashBorrowedBalance = flashBorrowedAssetAfter - vars.borrowedAssetLeftovers;

            // Swap released collateral into the debt asset, to repay the flash loan
            vars.soldAmount = _swapTokensForExactTokens(
                address(liquidateAndSwapParams.collateralAsset),
                address(liquidateAndSwapParams.borrowedAsset),
                vars.diffCollateralBalance,
                vars.flashLoanDebt - vars.diffFlashBorrowedBalance
            );

            vars.remainingTokens = vars.diffCollateralBalance - vars.soldAmount;
        } else {
            vars.remainingTokens = vars.diffCollateralBalance - premium;
        }

        // Allow repay of flash loan
        liquidateAndSwapParams.borrowedAsset.approve(address(LENDING_POOL), vars.flashLoanDebt);

        // Transfer remaining tokens to initiator
        if (vars.remainingTokens > 0) {
            liquidateAndSwapParams.collateralAsset.transfer(
                liquidateAndSwapParams.initiator,
                vars.remainingTokens
            );
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
     * @return FlashLoanParams struct containing decoded params
     */
    function _decodeParams(bytes memory params) internal pure returns (FlashLoanParams memory) {
        (address pair, address collateralAsset, address borrowedAsset, address initiator) =
            abi.decode(params, (address, address, address, address));

        return FlashLoanParams(pair, collateralAsset, borrowedAsset, initiator);
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
    ) external override returns (bool) {
        FlashLoanParams memory decodedParams = _decodeParams(params);

        require(
            assets.length == 1 &&
                assets[0] == decodedParams.borrowedAsset &&
                decodedParams.borrowedAsset == address(liquidateAndSwapParams.borrowedAsset) &&
                decodedParams.collateralAsset == address(liquidateAndSwapParams.collateralAsset) &&
                decodedParams.initiator == liquidateAndSwapParams.initiator &&
                decodedParams.pair == address(liquidateAndSwapParams.pair),
            "INCONSISTENT_PARAMS"
        );

        _liquidateAndSwap(premiums[0]);

        delete liquidateAndSwapParams;

        return true;
    }

    /**
     * @dev This function will trigger logic to flashloan borrow and liquidate
     *
     * @param pair edge finance pair
     * @param borrowers who will be liquidated
     * @param amount of tokens to borrow & liquidate
     */
    function flashLoanToLiquidate(
        IBSLendingPair pair,
        address[] memory borrowers,
        uint256 amount
    ) public {
        require(address(pair) != address(0), "Invalid Pair");

        uint256[] memory modes = new uint256[](1);
        modes[0] = 0; // 0 = no debt (flash), 1 = stable, 2 = variable

        address[] memory assets = new address[](1);
        assets[0] = address(pair.asset());

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = amount;

        bytes memory params =
            abi.encode(address(pair), pair.collateralAsset(), pair.asset(), msg.sender);

        liquidateAndSwapParams = LiquidateAndSwapParams({
            pair: pair,
            collateralAsset: pair.collateralAsset(),
            borrowedAsset: pair.asset(),
            borrowers: borrowers,
            flashBorrowedAmount: amounts[0],
            initiator: msg.sender
        });

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
