// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "hardhat/console.sol";
import "../interfaces/aaveV2/ILendingPoolAddressesProviderV2.sol";
import "../interfaces/aaveV2/ILendingPoolV2.sol";
import "../interfaces/IBalancerVaultV2.sol";
import "../interfaces/IBSLendingPair.sol";

contract MockLiquidationHelper {
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
        address[] borrowers;
    }

    IBalancerVaultV2 public balancerVault;
    IBSVault public immutable edgeVault;
    ILendingPoolV2 public LENDING_POOL;

    constructor(
        IBalancerVaultV2 _balancerVault,
        IBSVault _edgeVault,
        ILendingPoolV2 _pool
    ) public {
        balancerVault = _balancerVault;
        LENDING_POOL = _pool;
        edgeVault = _edgeVault;
    }

    function _liquidateAndSwap(
        uint256 flashBorrowedAmount,
        FlashLoanParams memory params,
        uint256 premium
    ) internal {
        LiquidationCallLocalVars memory vars;
        vars.initCollateralBalance = IERC20(params.collateralAsset).balanceOf(address(this));

        vars.initFlashBorrowedBalance = IERC20(params.borrowedAsset).balanceOf(address(this));

        // Track leftover balance to rescue funds in case of external transfers into this contract
        vars.borrowedAssetLeftovers = vars.initFlashBorrowedBalance - flashBorrowedAmount;

        vars.flashLoanDebt = flashBorrowedAmount + premium;

        // approve to deposit into vault
        IERC20(params.borrowedAsset).approve(address(edgeVault), flashBorrowedAmount);

        // deposit borrwoed asset into edge vault
        edgeVault.deposit(
            IERC20(params.borrowedAsset),
            address(this),
            address(this),
            flashBorrowedAmount
        );

        // approve pair to transfer tokens
        edgeVault.approveContract(address(this), address(params.pair), true, 0, 0, 0);

        // Liquidate the user position and release the underlying collateral
        for (uint256 i = 0; i < params.borrowers.length; i++) {
            IBSLendingPair(params.pair).liquidate(params.borrowers[i]);
        }

        // withdraw borrowasset from edge vault
        edgeVault.withdraw(
            IERC20(params.borrowedAsset),
            address(this),
            address(this),
            edgeVault.balanceOf(IERC20(params.borrowedAsset), address(this))
        );

        // withdraw collateral from edge vault
        uint256 collateralBalanceAfter =
            edgeVault.withdraw(
                IERC20(params.collateralAsset),
                address(this),
                address(this),
                edgeVault.balanceOf(IERC20(params.collateralAsset), address(this))
            );

        // Track only collateral released, not current asset balance of the contract
        vars.diffCollateralBalance = collateralBalanceAfter - vars.initCollateralBalance;

        // Discover flash loan balance after the liquidation
        uint256 flashBorrowedAssetAfter = IERC20(params.borrowedAsset).balanceOf(address(this));

        // Use only flash loan borrowed assets, not current asset balance of the contract
        vars.diffFlashBorrowedBalance = flashBorrowedAssetAfter - vars.borrowedAssetLeftovers;

        // Swap released collateral into the debt asset, to repay the flash loan
        vars.soldAmount = _swapTokensForExactTokens(
            params.collateralAsset,
            params.borrowedAsset,
            vars.diffCollateralBalance,
            vars.flashLoanDebt - vars.diffFlashBorrowedBalance
        );

        vars.remainingTokens = vars.diffCollateralBalance - vars.soldAmount;

        // Allow repay of flash loan
        IERC20(params.borrowedAsset).approve(address(LENDING_POOL), vars.flashLoanDebt);

        // Transfer remaining tokens to initiator
        if (vars.remainingTokens > 0) {
            IERC20(params.collateralAsset).transfer(params.initiator, vars.remainingTokens);
        }
    }

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

    function _decodeParams(bytes memory params) internal pure returns (FlashLoanParams memory) {
        (
            address pair,
            address collateralAsset,
            address borrowedAsset,
            address initiator,
            address[] memory borrowers
        ) = abi.decode(params, (address, address, address, address, address[]));

        return FlashLoanParams(pair, collateralAsset, borrowedAsset, initiator, borrowers);
    }

    function executeOperation(
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata premiums,
        address initiator,
        bytes calldata params
    ) public returns (bool) {
        FlashLoanParams memory decodedParams = _decodeParams(params);

        require(
            assets.length == 1 &&
                assets[0] == decodedParams.borrowedAsset &&
                decodedParams.borrowers.length > 0,
            "INCONSISTENT_PARAMS"
        );

        _liquidateAndSwap(amounts[0], decodedParams, premiums[0]);

        return true;
    }

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
            abi.encode(address(pair), pair.collateralAsset(), pair.asset(), msg.sender, borrowers);

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
