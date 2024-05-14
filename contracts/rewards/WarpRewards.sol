// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "../interfaces/IDistributor.sol";
import "../interfaces/IBSLendingPair.sol";
import "../upgradability/UUPSProxiable.sol";

/**

1 distributor contract -> multiple lending pairs
2 edge onsen needs to keep track of the distributor for a lending pair
to invoke them when a user burns or transfer
 */

abstract contract IncentivesStorageV1 is UUPSProxiable {
    address public admin;

    /// @dev list of all distributors
    IDistributor[] public distributors;
    
    /// @dev 
    mapping(IDistributor => bool) public approvedDistributions;

    /// @dev token address => distributor
    mapping(address => IDistributor[]) tokenToDistributor;
}

contract EdgeRewards is IncentivesStorageV1 {
    
    event ApprovedDistribution(
        IDistributor distributor,
        uint256 timestamp
    );

    event AddReward

    // create new distributor contract
    // update alloc points from here

    modifier onlyAdmin {
        // @TODO
        _;
    }

    modifier onlyApprovedDistributors {
        _;
    }

    constructor(
        address _admin
    ) {
        admin = _admin;
    }

    function handleAction() external {
        // loop through the rewards for 
        // the pair and call 
        // handleAction on it
    }

    /// @dev approves a distributor contract for a lending pair
    function setDistributorStatus(IDistributor _distributor, bool _approve) external onlyAdmin {
        approvedDistributions[_distributor] = _approve;
        emit ApprovedDistribution(_distributor, block.timestamp);
    }

    function addReward(
        address _tokenAddr,
        IDistributor _distributor
    ) external onlyApprovedDistributors {
        tokenToDistributor[_tokenAddr].push(_distributor);
        emit AddReward(_tokenAddr, _distributor, block.timestamp);
    }

    function removeReward(

    ) external onlyApprovedDistributors {

    }

    function commitGuardianTransfer() external {

    }

    function acceptGuardianTransfer() external {

    }

    // function createDistributor(
    //     address _distributorGuardian,

    // ) external {

    // }

    // function addDistribution(
    //     IDistributor _distributor
    // ) external onlyApprovedDistributors {

    // }

    // function setDistribution(
    //     IDistributor _distributor

    // ) external onlyApprovedDistributors {

    // }

    // struct DistributorConfigVars {
    //     bool collateralToken;
    //     bool debtToken;
    //     bool borrowAssetToken;
    // }

    // /// @dev adds a distributor contract for a lending pair
    // function addDistributor(
    //     IDistributor _distributor,
    //     IBSLendingPair _lendingPair,
    //     DistributorConfigVars calldata _vars
    // ) external onlyAdmin {
    //     if (_vars.collateralToken == true) {
    //         pairToDistributor[address(_lendingPair.collateralAsset())].push(_distributor);
    //     }

    //     if (_vars.debtToken == true) {
    //         pairToDistributor[address(_lendingPair.debtToken())].push(_distributor);
    //     }

    //     if (_vars.borrowAssetToken == true) {
    //         pairToDistributor[address(_lendingPair.borrowAsset())].push(_distributor);
    //     }

    //     emit AddDistributor(
    //         _lendingPair,
    //         _distributor,
    //         _vars,
    //         block.timestamp
    //     );
    // }


    // /// @dev removes a distributor contract for a lending pair
    // function removeDistributor(
    //     IDistributor _distributor,
    //     IBSLendingPair _lendingPair,
    //     DistributorConfigVars calldata _vars
    // ) external {
    //     if (_vars.collateralToken == true) {
    //         // work on this 

    //     }
    // }

    /// getters
    /// 
}
