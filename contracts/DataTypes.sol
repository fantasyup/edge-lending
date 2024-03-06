// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "./interfaces/IInterestRateModel.sol";
import "./interfaces/IBSWrapperToken.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title DataTypes
/// @author @samparsky
////////////////////////////////////////////////////////////////////////////////////////////

library DataTypes {
    struct BorrowAssetConfig {
        IInterestRateModel interestRate;
        uint256 initialExchangeRateMantissa;
        uint256 reserveFactorMantissa;
        uint256 collateralFactor;
        IBSWrapperToken wrappedBorrowAsset;
        uint256 liquidationFee;
        IBSWrapperToken debtToken;
    }

    function validBorrowAssetConfig(BorrowAssetConfig calldata self) external pure {
        require(address(self.interestRate) != address(0), "IR");
        require(self.initialExchangeRateMantissa > 0, "IE");
        require(self.reserveFactorMantissa > 0, "IF");
        require(self.collateralFactor > 0, "IC");
        require(self.liquidationFee > 0, "IL");
        require(address(self.wrappedBorrowAsset) != address(0), "IWB");
        require(address(self.debtToken) != address(0), "IDB");
    }
}
