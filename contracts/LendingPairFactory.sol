// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/security/Pausable.sol";
import "./interfaces/IPriceOracleAggregator.sol";
import "./interfaces/IInterestRateModel.sol";
import "./interfaces/IBSLendingPair.sol";
import "./interfaces/IBSWrapperToken.sol";
import "./interfaces/IDebtToken.sol";
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
        IDebtToken debtToken;
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

        // initialize wrapper borrow asset
        initializeWrapperTokens(
            pair,
            borrowConfig.wrappedBorrowAsset,
            IERC20Details(address(_borrowVars.borrowAsset)),
            "BOR",
            address(_borrowVars.borrowAsset)
        );
        // initialize wrapper collateral asset
        initializeWrapperTokens(
            pair,
            _wrappedCollateralAsset,
            IERC20Details(address(_collateralAsset)),
            "COL",
            address(_collateralAsset)
        );

        // initialize debt token
        initializeWrapperTokens(
            pair,
            borrowConfig.debtToken,
            IERC20Details(address(borrowConfig.wrappedBorrowAsset)),
            "DEB",
            address(0)
        );


        pair.initialize(
            _team,
            _oracle,
            _vault,
            _borrowVars.borrowAsset,
            borrowConfig,
            _collateralAsset,
            _wrappedCollateralAsset
        );

        newPairAddr = address(pair);
        allPairs.push(newPairAddr);

        emit NewLendingPair(newPairAddr, block.timestamp);
    }

    function initializeWrapperTokens(
        IBSLendingPair _pair,
        IBSWrapperToken _wrapperToken,
        IERC20Details _assetDetails,
        string memory _tokenType,
        address _underlying
    ) internal {
        bytes memory name = abi.encodePacked("BS-");
        name = abi.encodePacked(name, _tokenType, _assetDetails.name());
        bytes memory symbol = abi.encodePacked("BS-");
        symbol = abi.encodePacked(symbol, _assetDetails.symbol());
        // initialize wrapperToken
        IBSWrapperToken(_wrapperToken).initialize(
            _pair,
            _underlying,
            string(name),
            string(symbol)
        );
    }
}
