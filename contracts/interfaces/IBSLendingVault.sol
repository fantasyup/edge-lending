// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

interface IBSLendingVault {
    /**
     * Emitted on addPair
     *
     * @param vault The vault being interacted with
     **/
    event NewPair(
        address indexed vault,
        address indexed pair,
        address indexed interestRateModel,
        uint256 initialExchangeRateMantissa,
        uint256 reserveFactorMantissa
    );

    /**
     * Emitted on deposit
     *
     * @param pair The pair being interacted with
     * @param asset The asset deposited in the pair
     * @param tokenReceipeint The user the receives the bsTokens
     * @param user The user that made the deposit
     * @param amount The amount deposited
     **/
    event Deposit(
        address indexed pair,
        address indexed asset,
        address indexed tokenReceipeint,
        address user,
        uint256 amount
    );

    /**
     * Emitted on withdraw
     *
     * @param pair The pair being interacted with
     * @param asset The asset withdraw in the pair
     * @param user The user that's making the withdrawal
     * @param to The user the receives the withdrawn tokens
     * @param amount The amount being withdrawn
     **/
    event Withdraw(
        address indexed pair,
        address indexed asset,
        address indexed user,
        address to,
        uint256 amount,
        uint256 amountofWrappedBurned
    );

    /**
     * Emitted on repay
     *
     * @param pair The pair being interacted with
     * @param asset The asset repaid in the pair
     * @param beneficiary The user that's getting their debt reduced
     * @param repayer The user that's providing the funds
     * @param amount The amount being repaid
     **/
    event Repay(
        address indexed pair,
        address indexed asset,
        address indexed beneficiary,
        address repayer,
        uint256 amount
    );

    /**
     * Emitted on liquidation
     *
     * @param pair The pair being interacted with
     * @param asset The asset that getting liquidated
     * @param user The user that's getting liquidated
     * @param amountOfDebtToCover The amount of debt the liquidator is repay
     * @param liquidatedCollateralAmount The of collateral transferred to the liquidator
     * @param liquidator The liquidator
     **/
    event Liquidate(
        address indexed pair,
        address indexed asset,
        address indexed user,
        uint256 amountOfDebtToCover,
        uint256 liquidatedCollateralAmount,
        address liquidator
    );

    /**
     * @dev Emitted on flashLoan
     * @param target The address of the flash loan receiver contract
     * @param initiator The address initiating the flash loan
     * @param asset The address of the asset being flash borrowed
     * @param amount The amount flash borrowed
     * @param premium The fee flash borrowed
     **/
    event FlashLoan(
        address indexed target,
        address indexed initiator,
        address indexed asset,
        uint256 amount,
        uint256 premium
    );

    /**
     * @dev Emitted on interest accrued
     * @param accrualBlockNumber
     * @param borrowIndex
     * @param totalBorrows
     * @param totalReserves
     **/
    event InterestAccrued(
        address indexed pair,
        uint256 accrualBlockNumber,
        uint256 borrowIndex,
        uint256 totalBorrows,
        uint256 totalReserves
    );

    function _deposit(
        IBSPair _pair,
        address _depositor,
        address _tokenReceipeint,
        uint256 _amount
    ) external;

    function depositWithPermit() external returns (uint256);

    function withdraw() external;

    function withdrawWithPermit() external;

    function borrow() external returns (uint256);

    function liquidate() external;

    function updatePriceOracle() external returns (address);
}
