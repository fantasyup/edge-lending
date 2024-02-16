// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "./compound/JumpRateModelV2.sol";
import "./compound/Exponential.sol";
import "./compound/InterestRateModel.sol";
import "./interfaces/IBSLendingPair.sol";
import "./interfaces/IBSCollateralPair.sol";
import "./LendingPair.sol";


contract LendingPairFactory {

    struct NewLendingVaultIRLocalVars {
        uint256 baseRatePerYear;
        uint256 multiplierPerYear;
        uint256 jumpMultiplierPerYear;
        uint256 optimal;
    }

    function createPair(
        IBSControl _control,
        IOracle _oracle,
        IBSVault _vault,
        IERC20 _asset, 
        IERC20 _collateralAsset,
        uint256 _initialExchangeRateMantissa,
        uint256 _reserveFactorMantissa,
        NewLendingVaultIRLocalVars calldata _interestRateVars
    ) public returns (address newPairAddr){

        // create the interest rate model
        address ir = address(new JumpRateModelV2(
            _interestRateVars.baseRatePerYear,
            _interestRateVars.multiplierPerYear,
            _interestRateVars.jumpMultiplierPerYear,
            _interestRateVars.optimal,
            address(this)
        ));

        LendingPair pair = new LendingPair();

        pair.initialize(
            _control,
            _oracle,
            _vault,
            _asset, 
          _collateralAsset,
            InterestRateModel(ir),
         _initialExchangeRateMantissa,
         _reserveFactorMantissa
        );

        newPairAddr = address(pair);
    }
}