// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "./compound/JumpRateModelV2.sol";
import "./interfaces/IInterestRateModel.sol";
import "./interfaces/IBSLendingPair.sol";
import "./LendingPair.sol";
import "./interfaces/IBSWrapperToken.sol";

contract LendingPairFactory {
    struct NewLendingVaultIRLocalVars {
        uint256 baseRatePerYear;
        uint256 multiplierPerYear;
        uint256 jumpMultiplierPerYear;
        uint256 optimal;
    }

    address[] public allPairs;

    event NewLendingPair(address pair, uint256 created);

    // expensive
    function createPair(
        address _team,
        IPriceOracle _oracle,
        IBSVault _vault,
        IERC20 _asset,
        IERC20 _collateralAsset,
        uint256 _initialExchangeRateMantissa,
        uint256 _reserveFactorMantissa,
        NewLendingVaultIRLocalVars calldata _interestRateVars,
        IBSWrapperToken _wrappedBorrowAsset
    ) public returns (address newPairAddr) {
        // create the interest rate model
        address ir =
            address(
                new JumpRateModelV2(
                    _interestRateVars.baseRatePerYear,
                    _interestRateVars.multiplierPerYear,
                    _interestRateVars.jumpMultiplierPerYear,
                    _interestRateVars.optimal,
                    address(_team)
                )
            );

        LendingPair pair = new LendingPair();

        pair.initialize(
            _team,
            _oracle,
            _vault,
            _asset,
            _collateralAsset,
            IInterestRateModel(ir),
            _initialExchangeRateMantissa,
            _reserveFactorMantissa,
            _wrappedBorrowAsset
        );

        newPairAddr = address(pair);
        allPairs.push(newPairAddr);

        emit NewLendingPair(newPairAddr, block.timestamp);
    }
}
