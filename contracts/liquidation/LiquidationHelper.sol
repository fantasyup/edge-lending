// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "./aave/FlashLoanReceiverBaseV2.sol";
import "../interfaces/aaveV2/ILendingPoolAddressesProviderV2.sol";
import "../interfaces/aaveV2/ILendingPoolV2.sol";
import "../interfaces/IBalancerVaultV2.sol";
import "../interfaces/IBSLendingPair.sol";

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

contract LiquidationHelper is FlashLoanReceiverBaseV2, Withdrawable {
    mapping(address => IBSLendingPair) public assetToEdgePair;
    mapping(address => bytes32) public balancerPoolIds;
    IBalancerVaultV2 public balancerVault;

    struct LiquidationParams {
        address pair;
        address collateralAsset;
        address borrowedAsset;
        address user;
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

    constructor(
        address _addressProvider,
        bytes32[] memory _balancerPoolIds,
        IBSLendingPair[] memory _edgePairs,
        IBalancerVaultV2 _vault
    ) public FlashLoanReceiverBaseV2(_addressProvider) {
        require(address(_vault) != address(0), "Invalid Balancer Vault");

        for (uint256 i = 0; i < _edgePairs.length; i++) {
            address asset = address(_edgePairs[i].asset());
            require(asset != address(0), "Invalid Edge Lending Pair");

            assetToEdgePair[asset] = _edgePairs[i];
            balancerPoolIds[asset] = _balancerPoolIds[i];
        }
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
        LiquidationParams memory decodedParams = _decodeParams(params);

        require(
            assets.length == 1 && assets[0] == decodedParams.borrowedAsset,
            "INCONSISTENT_PARAMS"
        );

        _liquidateAndSwap(
            decodedParams.pair,
            decodedParams.collateralAsset,
            decodedParams.borrowedAsset,
            decodedParams.user,
            amounts[0],
            premiums[0],
            initiator
        );

        // Approve the LendingPool contract allowance to *pull* the owed amount
        for (uint256 i = 0; i < assets.length; i++) {
            uint256 amountOwing = amounts[i] + premiums[i];
            IERC20(assets[i]).approve(address(LENDING_POOL), amountOwing);
        }

        return true;
    }

    /**
     * @dev
     * @param pair of edge.finance lendingPair where liquidation will occuer
     * @param collateralAsset The collateral asset to release and will be exchanged to pay the flash loan premium
     * @param borrowedAsset The asset that must be covered
     * @param user The user address with a Health Factor below 1
     * @param flashBorrowedAmount Amount of asset requested at the flash loan to liquidate the user position
     * @param premium Fee of the requested flash loan
     * @param initiator Address of the caller
     */
    function _liquidateAndSwap(
        address pair,
        address collateralAsset,
        address borrowedAsset,
        address user,
        uint256 flashBorrowedAmount,
        uint256 premium,
        address initiator
    ) internal {
        LiquidationCallLocalVars memory vars;
        vars.initCollateralBalance = IERC20(collateralAsset).balanceOf(address(this));

        if (collateralAsset != borrowedAsset) {
            vars.initFlashBorrowedBalance = IERC20(borrowedAsset).balanceOf(address(this));

            // Track leftover balance to rescue funds in case of external transfers into this contract
            vars.borrowedAssetLeftovers = vars.initFlashBorrowedBalance - flashBorrowedAmount;
        }

        vars.flashLoanDebt = flashBorrowedAmount + premium;

        // Approve LendingPool to use debt token for liquidation
        IERC20(borrowedAsset).approve(pair, flashBorrowedAmount);

        // Liquidate the user position and release the underlying collateral
        IBSLendingPair(pair).liquidate(user);

        // Discover the liquidated tokens
        uint256 collateralBalanceAfter = IERC20(collateralAsset).balanceOf(address(this));

        // Track only collateral released, not current asset balance of the contract
        vars.diffCollateralBalance = collateralBalanceAfter - vars.initCollateralBalance;

        if (collateralAsset != borrowedAsset) {
            // Discover flash loan balance after the liquidation
            uint256 flashBorrowedAssetAfter = IERC20(borrowedAsset).balanceOf(address(this));

            // Use only flash loan borrowed assets, not current asset balance of the contract
            vars.diffFlashBorrowedBalance = flashBorrowedAssetAfter - vars.borrowedAssetLeftovers;

            // Swap released collateral into the debt asset, to repay the flash loan
            vars.soldAmount = _swapTokensForExactTokens(
                collateralAsset,
                borrowedAsset,
                vars.diffCollateralBalance,
                vars.flashLoanDebt - vars.diffFlashBorrowedBalance
            );
            vars.remainingTokens = vars.diffCollateralBalance - vars.soldAmount;
        } else {
            vars.remainingTokens = vars.diffCollateralBalance - premium;
        }

        // Allow repay of flash loan
        IERC20(borrowedAsset).approve(address(LENDING_POOL), vars.flashLoanDebt);

        // Transfer remaining tokens to initiator
        if (vars.remainingTokens > 0) {
            IERC20(collateralAsset).transfer(initiator, vars.remainingTokens);
        }
    }

    /**
     * @dev swap Tokens on Balancer vault
     * @param assetToSwapFrom Origin asset
     * @param assetToSwapTo Destination asset
     * @param amountToSwap Max amount of `assetToSwapFrom` allowed to be swapped
     * @param amountToReceive Exact amount of `assetToSwapTo` to receive
     * @return amountToSwapped amount swapped
     */
    function _swapTokensForExactTokens(
        address assetToSwapFrom,
        address assetToSwapTo,
        uint256 amountToSwap,
        uint256 amountToReceive
    ) internal returns (uint256 amountToSwapped) {
        amountToSwapped = balancerVault.swap(
            IBalancerVaultV2.SingleSwap(
                balancerPoolIds[assetToSwapFrom],
                IBalancerVaultV2.SwapKind.GIVEN_IN,
                assetToSwapFrom,
                assetToSwapTo,
                amountToSwap,
                ""
            ),
            IBalancerVaultV2.FundManagement(address(this), false, payable(address(this)), false),
            amountToReceive,
            block.timestamp + 1 hours
        );
    }

    /**
     * @dev Decodes the information encoded in the flash loan params
     * @param params Additional variadic field to include extra params. Expected parameters:
     *   address collateralAsset The collateral asset to claim
     *   address borrowedAsset The asset that must be covered and will be exchanged to pay the flash loan premium
     *   address user The user address with a Health Factor below 1
     * @return LiquidationParams struct containing decoded params
     */
    function _decodeParams(bytes memory params) internal pure returns (LiquidationParams memory) {
        (address pair, address collateralAsset, address borrowedAsset, address user) =
            abi.decode(params, (address, address, address, address));

        return LiquidationParams(pair, collateralAsset, borrowedAsset, user);
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
    ) public onlyOwner {
        IBSLendingPair pair = assetToEdgePair[asset];
        require(address(assetToEdgePair[asset]) != address(0), "Not support asset");

        uint256[] memory modes = new uint256[](1);
        modes[0] = 0;

        address[] memory assets = new address[](1);
        assets[0] = asset; // 0 = no debt (flash), 1 = stable, 2 = variable

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = amount;

        bytes memory params = abi.encode(address(pair), pair.collateralAsset(), asset, borrower);

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
