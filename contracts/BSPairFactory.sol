// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "./interfaces/IBSLendingPair.sol";
import "./interfaces/IBSCollateralPair.sol";
import "./BSPair.sol";


contract BSPairFactory {

    event NewLendingVault(address lendingPair, uint256 created);
    event NewCollateralVault(address lendingPair, uint256 created);
    event NewBSPair(address pair, uint256 created);

    // @TODO missing oracle
    function createPair(
        IBSVault _vault
    ) public returns (address newPairAddr){
        BSPair pair = new BSPair();

        pair.initialize(
            IBSControl(address(this)), 
            _lendingPair, 
            _collateralPair
        );

        newPairAddr = address(pair);

        allPairs.push(newPairAddr);
        pairs[newPairAddr] = true;

        emit NewBSPair(newPairAddr, block.timestamp);
    }

    struct NewLendingVaultIRLocalVars {
        uint256 _baseRatePerYear;
        uint256 _multiplierPerYear;
        uint256 _jumpMultiplierPerYear;
        uint256 _optimal;
    }

    function newLendingVault(
        IBSVault _vault,
        IERC20 _asset,
        uint256 _initialExchangeRateMantissa,
        uint256 _reserveFactorMantissa,
        NewLendingVaultIRLocalVars _interestRateVars
    ) public returns (address lendingVaultAddr) {
        // create the interest rate model
        InterestRateModel ir = new JumpRateModelV2(
            _interestRateVars.baseRatePerYear,
            _interestRateVars.multiplierPerYear,
            _interestRateVars.jumpMultiplierPerYear,
            _interestRateVars.optimal,
            address(this)
        );

        // create
        BSLendingPair pair = new BSLendingPair();
        // init pair
        pair.initialize(
            IBSControl(address(this)),
            vault,
            _asset,
            ir,
            _initialExchangeRateMantissa,
            _reserveFactorMantissa
        );

        lendingVaultAddr = address(pair);

        emit NewLendingVault(lendingVaultAddr, block.timestamp);
    }

    function createNewCollateralVault(
        IERC20 _collateral
    ) public returns (address collateralVaultAddr) {
        BSCollateralPair pair = new BSCollateralPair();
        pair.initialize(_collateral, IBSControl(address(this)), vault);
        collateralVaultAddr = address(pair);
        emit NewCollateralVault(collateralVaultAddr, block.timestamp);
    }
}