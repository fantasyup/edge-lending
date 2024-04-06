// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "./interfaces/IPriceOracleAggregator.sol";
import "./interfaces/IInterestRateModel.sol";
import "./interfaces/IBSLendingPair.sol";
import "./interfaces/IBSWrapperToken.sol";
import "./interfaces/IDebtToken.sol";
import "./interest/JumpRateModelV2.sol";
import "./token/IERC20Details.sol";
import "./DataTypes.sol";

contract LendingPairFactory is Pausable {
    using Clones for address;

    address public immutable owner;

    address public lendingPairImplementation;
    address public collateralWrapperImplementation;
    address public debtTokenImplementation;
    address public borrowAssetWrapperImplementation;

    address[] public allPairs;

    mapping (address => bool) public validInterestRateModels;

    event NewLendingPair(address pair, uint256 created);
    event LogicContractUpdated(address pairLogic);
    event NewInterestRateModel(address ir, uint256 timestamp);

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

    /// @notice pause
    function pause() external onlyOwner {
        _pause();
    }

    /// @notice unpause
    function unpause() external onlyOwner {
        _unpause();
    }

    function updatePairImpl(address _newLogicContract) external onlyOwner {
        require(_newLogicContract != address(0), "INVALID_CONTRACT");
        lendingPairImplementation = _newLogicContract;
        emit LogicContractUpdated(_newLogicContract);
    }

    function updateCollateralWrapperImpl(address _newLogicContract) external onlyOwner {
        require(_newLogicContract != address(0), "INVALID_CONTRACT");
        collateralWrapperImplementation = _newLogicContract;
        emit LogicContractUpdated(_newLogicContract);
    }

    function updateDebtTokenImpl(address _newLogicContract) external onlyOwner {
        require(_newLogicContract != address(0), "INVALID_CONTRACT");
        debtTokenImplementation = _newLogicContract;
        emit LogicContractUpdated(_newLogicContract);
    }

    function updateBorrowAssetWrapperImpl(address _newLogicContract) external onlyOwner {
        require(_newLogicContract != address(0), "INVALID_CONTRACT");
        borrowAssetWrapperImplementation = _newLogicContract;
        emit LogicContractUpdated(_newLogicContract);
    }

    struct NewLendingVaultIRLocalVars {
        uint256 baseRatePerYear;
        uint256 multiplierPerYear;
        uint256 jumpMultiplierPerYear;
        uint256 optimal;
        uint256 borrowRateMaxMantissa;
        uint256 blocksPerYear;
    }

    /// @dev create interest rate model
    function createIR(NewLendingVaultIRLocalVars calldata _interestRateVars, address _team)
        external
        onlyOwner
        returns (address ir)
    {
        require(address(_team) != address(0), "invalid team");

        ir = address(
            new JumpRateModelV2(
                _interestRateVars.baseRatePerYear,
                _interestRateVars.multiplierPerYear,
                _interestRateVars.jumpMultiplierPerYear,
                _interestRateVars.optimal,
                _team,
                _interestRateVars.borrowRateMaxMantissa,
                _interestRateVars.blocksPerYear
            )
        );

        validInterestRateModels[ir] = true;

        emit NewInterestRateModel(ir, block.timestamp);
    }
    
    /// @dev disable interest rate model
    function disableIR(address ir) external onlyOwner {
        require(validInterestRateModels[ir] == true, "IR_NOT_EXIST");
        validInterestRateModels[ir] = false;
    }
    
    struct BorrowLocalVars {
        IERC20 borrowAsset;
        uint256 initialExchangeRateMantissa;
        uint256 reserveFactorMantissa;
        uint256 collateralFactor;
        uint256 liquidationFee;
        IInterestRateModel interestRateModel;
    }

    struct WrappedAssetLocalVars {
        IBSWrapperToken wrappedBorrowAsset;
        IBSWrapperToken wrappedCollateralAsset;
        IDebtToken debtToken;
    }

    /// @dev create lending pair with clones
    function createLendingPairWithProxy(
        string memory _lendingPairName,
        string memory _lendingPairSymbol,
        address _pauseGuardian,
        IERC20 _collateralAsset,
        BorrowLocalVars calldata _borrowVars
    ) external whenNotPaused returns (address newLendingPair) {
        require(
            validInterestRateModels[address(_borrowVars.interestRateModel)] == true,
            "INVALID_INTEREST_MODEL"
        );

        WrappedAssetLocalVars memory wrappedAssetLocalVars;
        
        bytes32 salt = keccak256(abi.encode(_lendingPairName, _lendingPairSymbol, allPairs.length));
        newLendingPair = lendingPairImplementation.cloneDeterministic(salt);

        // initialize wrapper borrow asset
        wrappedAssetLocalVars.wrappedBorrowAsset =
            IBSWrapperToken(
                initWrapperTokensWithProxy(
                    borrowAssetWrapperImplementation,
                    newLendingPair,
                    address(_borrowVars.borrowAsset),
                    _lendingPairName,
                    "BOR",
                    salt
                )
            );

        // initialize wrapper collateral asset
        wrappedAssetLocalVars.wrappedCollateralAsset =
            IBSWrapperToken(
                initWrapperTokensWithProxy(
                    collateralWrapperImplementation,
                    newLendingPair,
                    address(_collateralAsset),
                    _lendingPairName,
                    "COL",
                    salt
                )
            );

        // initialize debt token
        wrappedAssetLocalVars.debtToken =
            IDebtToken(
                initWrapperTokensWithProxy(
                    debtTokenImplementation,
                    newLendingPair,
                    address(_borrowVars.borrowAsset),
                    _lendingPairName,
                    "DEBT",
                    salt
                )
            );

        DataTypes.BorrowAssetConfig memory borrowConfig =
            DataTypes.BorrowAssetConfig(
                _borrowVars.initialExchangeRateMantissa,
                _borrowVars.reserveFactorMantissa,
                _borrowVars.collateralFactor,
                wrappedAssetLocalVars.wrappedBorrowAsset,
                _borrowVars.liquidationFee,
                wrappedAssetLocalVars.debtToken
            );

        // initialize lending pair
        IBSLendingPair(newLendingPair).initialize(
            _lendingPairName,
            _lendingPairSymbol,
            _borrowVars.borrowAsset,
            _collateralAsset,
            borrowConfig,
            wrappedAssetLocalVars.wrappedCollateralAsset,
            _borrowVars.interestRateModel,
            _pauseGuardian
        );
        
        allPairs.push(newLendingPair);
        emit NewLendingPair(newLendingPair, block.timestamp);
    }

    function initWrapperTokensWithProxy(
        address _implementation,
        address _pair,
        address _underlying,
        string memory _lendingPairName,
        string memory _tokenType,
        bytes32 _salt
    ) internal returns (address wrapper) {
        wrapper = _implementation.cloneDeterministic(_salt);

        initializeWrapperTokens(
            _pair,
            IBSWrapperToken(wrapper),
            IERC20Details(_underlying),
            _lendingPairName,
            _tokenType
        );
    }

    function initializeWrapperTokens(
        address _pair,
        IBSWrapperToken _wrapperToken,
        IERC20Details _underlying,
        string memory _lendingPairName,
        string memory _tokenType
    ) internal {
        bytes memory name = abi.encodePacked(_lendingPairName);
        name = abi.encodePacked(name, "-PAIR-", _tokenType);
        bytes memory symbol = abi.encodePacked(_lendingPairName);
        symbol = abi.encodePacked(name, _tokenType);
        // initialize wrapperToken
        IBSWrapperToken(_wrapperToken).initialize(
            _pair,
            address(_underlying),
            string(name),
            string(symbol)
        );
    }
}
