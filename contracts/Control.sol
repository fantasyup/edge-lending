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

contract BSControl is IBSControl, Ownable, Exponential {

    address public edgeTeam;
    address public newEdgeControl;
    uint256 public graceSpace;
    
    IBSVault public vault;
    LendingPairFactory public lendingPairFactory;
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
        // instantiate the contracts
        // Oracle = UniswapLPOracleFactoryI(_oracle);
        // WVLPF = EdgeVaultLPFactoryI(_WVLPF);
        // WVSCF = EdgeVaultSCFactoryI(_WVSCF);
        // edgeTeam = _edgeTeam;
    }

    /**
    @notice viewNumOfPairs returns the number of pairs on the blacksmith platform
    **/
    function viewNumOfPairs() external view returns (uint256) {
        return allPairs.length;
    }

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
        newPairAddr = lendingPairFactory.createPair(

        );

        allPairs.push(newPairAddr);
        pairs[newPairAddr] = true;

        emit NewLendingPair(newPairAddr, block.timestamp);
    }

    function startUpgradeTimer(address _newControl) public onlyOwner {
        _newControl = _newControl;
        graceSpace =  block.timestamp + 172800;
    }


    function upgradeControl() public onlyOwner {

    }

    function transferControl(IBSControl _newControl, address[] calldata pairAddr) public onlyOwner {
        for (uint256 i = 0; i < pairAddr.length; ++i) {

        }
    }

}
