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

import "./BSLendingPair.sol";
import "./BSCollateralPair.sol";
import "./BSPair.sol";

contract BSControl is IBSControl, Ownable, Exponential {

    address public edgeTeam;
    address public newEdgeControl;
    uint256 public graceSpace;
    
    IBSVault public vault;
    address[] public allPairs;
    // pairId => pair
    mapping(address => bool) public pairs;

    /**
      @dev Throws if called by any account other than a edge vault
     */
    modifier onlyVault() {
        // require(isVault[msg.sender] == true, "Only a vault may call this");
        _;
    }
    
    function initialize(
        IBSVault _vault
    ) public {
        vault = _vault;
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

    // @TODO missing oracle
    function createPair(
        IBSLendingPair _lendingPair,
        IBSCollateralPair _collateralPair
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

    /**
    @notice startUpgradeTimer starts a two day timer signaling that this contract will soon be updated to a new version
    @param _newEdgeControl is the address of the new Edge control contract being upgraded to
    **/
    function startUpgradeTimer(address _newEdgeControl) public onlyOwner {
        newEdgeControl = _newEdgeControl;
        graceSpace = now.add(172800);
    }

    /**
    @notice upgradeEdge is used to upgrade the Edge platform to use a new version of the EdgeControl contract
    **/
    function upgradeEdge() public onlyOwner {
        // require(now >= graceSpace, "you cant ugrade yet, less than two days");
        // require(newEdgeControl != address(0), "no new edge control set");

        // Oracle.transferOwnership(newEdgeControl);

        // uint256 numVaults = lpVaults.length;
        // uint256 numSCVaults = scVaults.length;

        // for (uint256 i = 0; i < numVaults; ++i) {
        //     EdgeVaultLPI vault = EdgeVaultLPI(lpVaults[i]);
        //     vault.updateEdgeControl(newEdgeControl);
        // }

        // for (uint256 i = 0; i < numSCVaults; ++i) {
        //     EdgeVaultSCI vault = EdgeVaultSCI(scVaults[i]);
        //     vault.updateEdgeControl(newEdgeControl);
        // }
    }

    function transferControl(IBSControl _newControl, address[] pairAddr) public onlyOwner {
        for (uint256 i = 0; i < pairAddr.length; ++i) {

        }
    }

}
