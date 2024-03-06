// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/security/Pausable.sol";
import "./interfaces/IPriceOracleAggregator.sol";
import "./interfaces/IInterestRateModel.sol";
import "./interfaces/IBSLendingPair.sol";
import "./interfaces/IBSWrapperToken.sol";
import "./compound/JumpRateModelV2.sol";
import "./LendingPair.sol";
import "./DataTypes.sol";

contract LendingPairFactory is Pausable {

    address immutable public admin;

    address[] public allPairs;

    event NewLendingPair(address pair, uint256 created);

    /// @notice modifier to allow only blacksmith team to call a function
    modifier onlyAdmin {
        require(msg.sender == admin, "ONLY_ADMIN");
        _;
    }

    constructor(address _admin) {
        admin = _admin;
    }

    /// @notice pause factory actions
    function pause() onlyAdmin external {
        _pause();
    }

    /// @notice unpause vault actions
    function unpause() onlyAdmin external {
        _unpause();
    }

    struct NewLendingVaultIRLocalVars {
        uint256 baseRatePerYear;
        uint256 multiplierPerYear;
        uint256 jumpMultiplierPerYear;
        uint256 optimal;
    }

    struct BorrowLocalVars {
        IERC20 borrowAsset;
        uint256 initialExchangeRateMantissa;
        uint256 reserveFactorMantissa;
        uint256 collateralFactor;
        IBSWrapperToken wrappedBorrowAsset;
        uint256 liquidationFee;
        IBSWrapperToken debtToken;
    }

    function createPair(
        IBSLendingPair pair,
        address _team,
        IPriceOracleAggregator _oracle,
        IBSVault _vault,
        IERC20 _collateralAsset,
        IBSWrapperToken _wrappedCollateralAsset,
        BorrowLocalVars calldata _borrowVars,
        NewLendingVaultIRLocalVars calldata _interestRateVars
    ) external whenNotPaused returns (address newPairAddr) {
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

        DataTypes.BorrowAssetConfig memory borrowConfig = DataTypes.BorrowAssetConfig(
            IInterestRateModel(ir),
            _borrowVars.initialExchangeRateMantissa,
            _borrowVars.reserveFactorMantissa,
            _borrowVars.collateralFactor,
            _borrowVars.wrappedBorrowAsset,
            _borrowVars.liquidationFee,
            _borrowVars.debtToken
        );

        pair.initialize(
            _team,
            _oracle,
            _vault,
            _borrowVars.borrowAsset,
            _collateralAsset,
            borrowConfig,
            _wrappedCollateralAsset
        );

        newPairAddr = address(pair);
        allPairs.push(newPairAddr);

        emit NewLendingPair(newPairAddr, block.timestamp);
    }
}
