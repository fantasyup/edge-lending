// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../interfaces/IRewardDistributor.sol";
import "../interfaces/IBSLendingPair.sol";
import "../upgradability/UUPSProxiable.sol";
import "../interfaces/IEdgeRewards.sol";

/**

1 distributor contract -> multiple lending pairs
2 edge onsen needs to keep track of the distributor for a lending pair
to invoke them when a user burns or transfer
 */

abstract contract RewardsStorageV1 is UUPSProxiable {
    /// @dev admin 
    address public owner;

    /// @dev newAdmin
    address internal newOwner;
    
    /// @dev approvedistributions
    mapping(IRewardDistributor => bool) public approvedDistributions;

    /// @dev receipt token address => distributor
    mapping(address => IRewardDistributor[]) tokenToDistributors;
}

contract EdgeRewards is RewardsStorageV1, IEdgeRewards {

    modifier onlyApprovedDistributors(IRewardDistributor _distributor) {
        require(approvedDistributions[_distributor] == true, "ONLY_APPROVED_DISTRIBUTOR");
        _;
    }

    modifier onlyOwner {
        require(owner == msg.sender, "ONLY_OWNER");
        _;
    }

    constructor(
        address _owner
    ) {
        owner = _owner;
    }

    /// @dev loops through distributor contract and updates 
    /// rewards for the user
    /// low gas cost is the ultimaate goal
    function accumulateRewards(
        address _tokenAddr,
        address _from,
        address _to,
        uint256 _balance
    ) external {
        // loop through the rewards for 
        // the pair and call 
        // handleAction on it
        IRewardDistributor[] memory distributors = tokenToDistributors[_tokenAddr];
        uint256 size = distributors.length;

        if (size == 0) return;

        for(uint256 i = 0; i < size; i++) {
            distributors[i].accumulateReward(_tokenAddr, _from, _to, _balance);
        }

    }

    /// @dev approves a distributor contract for a lending pair
    function setDistributorStatus(IRewardDistributor _distributor, bool _approve) external onlyOwner {
        approvedDistributions[_distributor] = _approve;
        emit ApprovedDistribution(_distributor, block.timestamp);
    }

    function addReward(
        address _tokenAddr,
        IRewardDistributor _distributor
    ) external override onlyApprovedDistributors(_distributor) {
        tokenToDistributors[_tokenAddr].push(_distributor);
        emit AddReward(_tokenAddr, _distributor, block.timestamp);
    }

    struct DistributorConfigVars {
        bool collateralToken;
        bool debtToken;
        bool borrowAssetToken;
    }

    function removeReward(
        address _tokenAddr,
        IRewardDistributor _distributor
    ) external override onlyOwner {
        // loop throught and remove
        IRewardDistributor[] storage distributors = tokenToDistributors[_tokenAddr];
        uint256 size = tokenToDistributors[_tokenAddr].length;

        if (size == 1) delete distributors[0];

        if (size > 1) {
            // remove the item from the array
            // using the 2 pointer algorithm
            uint256 j = 0;
            for (uint256 i = 0; i < size; i++ ) {
                if (address(distributors[i]) != _tokenAddr) {
                    distributors[j] = distributors[i];
                    j += 1;
                }
            }
        }

        emit RemoveReward(_tokenAddr, _distributor, block.timestamp);
    }

    function commitOwnerTransfer(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "INVALID_NEW_OWNER");
        newOwner = _newOwner;
        emit TransferControl(_newOwner, block.timestamp);
    }

    function acceptGuardianTransfer() external {
        require(msg.sender == newOwner, "invalid owner");
        owner = newOwner;
        newOwner = address(0);
        emit OwnershipAccepted(newOwner, block.timestamp);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // UUPSProxiable
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function proxiableUUID() public pure override returns (bytes32) {
        return keccak256("org.edge.contracts.edgerewards.implementation");
    }

    function updateCode(address newAddress) external override onlyOwner {
        _updateCodeAddress(newAddress);
    }

}
