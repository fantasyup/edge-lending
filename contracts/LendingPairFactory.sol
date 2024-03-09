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

    address public pairLogic;
    address immutable public admin;

    address[] public allPairs;

    event NewLendingPair(address pair, uint256 created);
    event LogicContractUpdated(address pairLogic);

    /// @notice modifier to allow only blacksmith team to call a function
    modifier onlyAdmin {
        require(msg.sender == admin, "ONLY_ADMIN");
        _;
    }

    constructor(address _admin, address _pairLogic) {
        admin = _admin;
        pairLogic = _pairLogic;
    }

    /// @notice pause factory actions
    function pause() onlyAdmin external {
        _pause();
    }

    /// @notice unpause vault actions
    function unpause() onlyAdmin external {
        _unpause();
    }

    function updatePairLogicContract(address _newLogicContract) external onlyAdmin {
        pairLogic = _newLogicContract;
        emit LogicContractUpdated(_newLogicContract);
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

    /// @dev creates lending pair clone using EIP 1167 minimal proxy contract
    function createLendingPairClone() internal returns (address result) {
        bytes20 targetBytes = bytes20(pairLogic);
        assembly {
            let clone := mload(0x40)
            mstore(clone, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)
            mstore(add(clone, 0x14), targetBytes)
            mstore(add(clone, 0x28), 0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000)
            result := create(0, clone, 0x37)
        }
    }

    /// @dev create pair with clone
    function createPairWithClone(
        address _team,
        IPriceOracleAggregator _oracle,
        IBSVault _vault,
        IERC20 _collateralAsset,
        IBSWrapperToken _wrappedCollateralAsset,
        BorrowLocalVars calldata _borrowVars,
        NewLendingVaultIRLocalVars calldata _interestRateVars
    ) external whenNotPaused returns (address newPairAddr) {
        IBSLendingPair newLendingPair = IBSLendingPair(createLendingPairClone());
        createPair(
            newLendingPair,
            _team,
            _oracle,
            _vault,
            _collateralAsset,
            _wrappedCollateralAsset,
            _borrowVars,
            _interestRateVars
        );
        newPairAddr = address(newLendingPair);
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
    ) public whenNotPaused returns (address newPairAddr) {
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
