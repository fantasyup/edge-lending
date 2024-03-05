// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "./interfaces/IInterestRateModel.sol";
import "./interfaces/IBSWrapperToken.sol";

library DataTypes {
    struct BorrowAssetConfig {
        IInterestRateModel interestRate;
        uint256 initialExchangeRateMantissa;
        uint256 borrowRateMaxMantissa;
        uint256 reserveFactorMantissa;
        uint256 collateralFactor;
        IBSWrapperToken wrappedBorrowAsset;
        uint256 liquidationFee;
        IBSWrapperToken debtToken;
    }
}