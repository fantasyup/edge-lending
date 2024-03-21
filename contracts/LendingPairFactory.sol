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

    address immutable public owner;

    address public lendingPairImplementation;
    address public collateralWrapperImplementation;
    address public debtTokenImplementation;
    address public borrowAssetWrapperImplementation;

    address[] public allPairs;

    event NewLendingPair(address pair, uint256 created);
    event LogicContractUpdated(address pairLogic);

    /// @notice modifier to allow only the owner to call a function
    modifier onlyOwner {
        require(msg.sender == owner, "ONLY_OWNER");
        _;
    }

    constructor(
        address _owner,
        address _pairLogic,
        address _collateralWrapperLogic,
        address _debtTokenLogic,
        address _borrowAssetWrapperLogic
    ) {
        require(_owner != address(0), "invalid owner");
        require(_pairLogic != address(0), "invalid pair logic");
        require(_collateralWrapperLogic != address(0), "invalid collateral wrapper logic");
        require(_debtTokenLogic != address(0), "invalid debt logic");
        require(_borrowAssetWrapperLogic != address(0), "invalid borrow asset logic");

        owner = _owner;
        lendingPairImplementation = _pairLogic;
        collateralWrapperImplementation = _collateralWrapperLogic;
        debtTokenImplementation = _debtTokenLogic;
        borrowAssetWrapperImplementation = _borrowAssetWrapperLogic;
    }

    /// @notice pause factory actions
    function pause() onlyOwner external {
        _pause();
    }

    /// @notice unpause vault actions
    function unpause() onlyOwner external {
        _unpause();
    }

    function updatePairImpl(address _newLogicContract) external onlyOwner {
        lendingPairImplementation = _newLogicContract;
        emit LogicContractUpdated(_newLogicContract);
    }
    
    function updateCollateralWrapperImpl(address _newLogicContract) external onlyOwner {
        collateralWrapperImplementation = _newLogicContract;
        emit LogicContractUpdated(_newLogicContract);
    }
    
    function updateDebtTokenImpl(address _newLogicContract) external onlyOwner {
        debtTokenImplementation = _newLogicContract;
        emit LogicContractUpdated(_newLogicContract);
    }
    
    function updateBorrowAssetWrapperImpl(address _newLogicContract) external onlyOwner {
        borrowAssetWrapperImplementation = _newLogicContract;
        emit LogicContractUpdated(_newLogicContract);
    }

    /// @dev creates clone using EIP 1167 minimal proxy contract
    function clone(address implementation) internal returns (address instance) {
        // solhint-disable-next-line no-inline-assembly
        assembly {
            let ptr := mload(0x40)
            mstore(ptr, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)
            mstore(add(ptr, 0x14), shl(0x60, implementation))
            mstore(add(ptr, 0x28), 0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000)
            instance := create(0, ptr, 0x37)
        }
        require(instance != address(0), "ERC1167: create failed");
    }

    struct NewLendingVaultIRLocalVars {
        uint256 baseRatePerYear;
        uint256 multiplierPerYear;
        uint256 jumpMultiplierPerYear;
        uint256 optimal;
    }

    /// @dev create interest rate model
    function createIR(
        NewLendingVaultIRLocalVars calldata _interestRateVars,
        address _team
    ) external returns (address ir) {
        ir = address(
            new JumpRateModelV2(
                _interestRateVars.baseRatePerYear,
                _interestRateVars.multiplierPerYear,
                _interestRateVars.jumpMultiplierPerYear,
                _interestRateVars.optimal,
                address(_team)
            )
        );
    }

    struct BorrowLocalVars {
        IERC20 borrowAsset;
        uint256 initialExchangeRateMantissa;
        uint256 reserveFactorMantissa;
        uint256 collateralFactor;
        uint256 liquidationFee;
    }

    /// @dev create lending pair with clones
    function createLendingPairWithProxy(
        address _team,
        IPriceOracleAggregator _oracle,
        IBSVault _vault,
        IERC20 _collateralAsset,
        BorrowLocalVars calldata _borrowVars,
        address interestRateModel
    ) external whenNotPaused returns (address newLendingPair) {
        newLendingPair = clone(lendingPairImplementation);

        // initialize wrapper borrow asset
        IBSWrapperToken wrappedBorrowAsset = IBSWrapperToken(initWrapperTokensWithProxy(
            borrowAssetWrapperImplementation,
            newLendingPair,
            address(_borrowVars.borrowAsset),
            "BOR"
        ));

        // initialize wrapper collateral asset
        IBSWrapperToken wrappedCollateralAsset = IBSWrapperToken(initWrapperTokensWithProxy(
            collateralWrapperImplementation,
            newLendingPair,
            address(_collateralAsset),
            "COL"
        ));

        // initialize debt token
        IDebtToken debtToken = IDebtToken(initWrapperTokensWithProxy(
            debtTokenImplementation,
            newLendingPair,
            address(_borrowVars.borrowAsset),
            "DEB"
        ));
        
        DataTypes.BorrowAssetConfig memory borrowConfig = DataTypes.BorrowAssetConfig(
            IInterestRateModel(interestRateModel),
            _borrowVars.initialExchangeRateMantissa,
            _borrowVars.reserveFactorMantissa,
            _borrowVars.collateralFactor,
            wrappedBorrowAsset,
            _borrowVars.liquidationFee,
            debtToken
        );

        // initialize lending pair
        IBSLendingPair(newLendingPair).initialize(
            _team,
            _oracle,
            _vault,
            _borrowVars.borrowAsset,
            borrowConfig,
            _collateralAsset,
            wrappedCollateralAsset
        );

        allPairs.push(newLendingPair);
        
        emit NewLendingPair(newLendingPair, block.timestamp);
    }

    function initWrapperTokensWithProxy(
        address implementation,
        address pair,
        address assetDetails,
        string memory symbol
    ) public returns(address wrapper){
        wrapper = clone(implementation);

        initializeWrapperTokens(
            pair,
            IBSWrapperToken(wrapper),
            IERC20Details(assetDetails),
            symbol
        );
    }

    function initializeWrapperTokens(
        address _pair,
        IBSWrapperToken _wrapperToken,
        IERC20Details _assetDetails,
        string memory _tokenType
    ) internal {
        bytes memory name = abi.encodePacked("BS-");
        name = abi.encodePacked(name, _tokenType, _assetDetails.name());
        bytes memory symbol = abi.encodePacked("BS-");
        symbol = abi.encodePacked(symbol, _assetDetails.symbol());
        // initialize wrapperToken
        IBSWrapperToken(_wrapperToken).initialize(
            _pair,
            address(_assetDetails),
            string(name),
            string(symbol)
        );
    }
}
