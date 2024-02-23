// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "./interfaces/IBSLendingPair.sol";
import "./interfaces/IBSCollateralPair.sol";
import "./interfaces/IBSControl.sol";
import "./interfaces/IBSVault.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./compound/JumpRateModelV2.sol";
import "./compound/Exponential.sol";
import "./compound/InterestRateModel.sol";
import "./LendingPair.sol";
import "./LendingPairFactory.sol";
import "./PairConfigurationBase.sol";
import "./interfaces/IBSWrapperToken.sol";

contract Control is IBSControl, Ownable, PairConfigurationBase {

    /// @notice address of blacksmith team
    address public blackSmithteam;
    /// @notice 
    address public newBSControl;
    /// @notice
    uint256 public graceSpace;
    
    /// @notice vault used to store assets
    IBSVault public vault;

    /// @notice Factory used to create lending pairs
    LendingPairFactory public lendingPairFactory;

    /// @notice address of all lending pairs created
    address[] public allPairs;

    // pairId => pair
    mapping(address => bool) public pairs;
    
    event NewLendingPair(address pair, uint256 created);

    /**
      @dev Throws if called by any account other than a edge vault
     */
    modifier onlyVault() {
        // require(isVault[msg.sender] == true, "Only a vault may call this");
        _;
    }
    
    function initialize(
        IBSVault _vault,
        LendingPairFactory _lendingPairFactory
    ) public {
        vault = _vault;
        lendingPairFactory = _lendingPairFactory;
    }

    /**
    @notice viewNumOfPairs returns the number of pairs on the blacksmith platform
    **/
    function viewNumOfPairs() external view returns (uint256) {
        return allPairs.length;
    }
    
    function createPair(
        IOracle _oracle,
        IERC20 _asset, 
        IERC20 _collateralAsset,
        uint256 _initialExchangeRateMantissa,
        uint256 _reserveFactorMantissa,
        NewLendingVaultIRLocalVars memory _interestRateVars,
        IBSWrapperToken _wrappedBorrowAsset
    ) public returns (address newPairAddr){
        newPairAddr = lendingPairFactory.createPair(
            IBSControl(address(this)),
            _oracle,
            vault,
            _asset,
            _collateralAsset,
            _initialExchangeRateMantissa,
            _reserveFactorMantissa,
            _interestRateVars,
            _wrappedBorrowAsset
        );

        allPairs.push(newPairAddr);
        pairs[newPairAddr] = true;

        emit NewLendingPair(newPairAddr, block.timestamp);
    }

    function startUpgradeTimer(address _newControl) public onlyOwner {
        newBSControl = _newControl;
        graceSpace =  block.timestamp + 172800;
    }

    function upgradeControl(address newBSControl) public onlyOwner {
    
    }

    function transferControl(IBSControl _newControl, address[] calldata pairAddr) public onlyOwner {
        for (uint256 i = 0; i < pairAddr.length; ++i) {
            // transfer control to another pair
        }
    }

}
