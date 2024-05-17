// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../interfaces/IRewardDistributor.sol";
import "../interfaces/IBSLendingPair.sol";
import "../upgradability/UUPSProxiable.sol";
import "../interfaces/IRewardDistributorManager.sol";
import "hardhat/console.sol";

abstract contract RewardDistirbutorManagerStorageV1 is UUPSProxiable {
    /// @dev admin
    address public owner;

    /// @dev newAdmin
    address internal newOwner;

    /// @dev approvedistributions
    mapping(IRewardDistributor => bool) public approvedDistributors;

    /// @dev receipt token address => distributor
    mapping(address => IRewardDistributor[]) public tokenRewardToDistributors;
}

contract RewardDistributorManager is RewardDistirbutorManagerStorageV1, IRewardDistributorManager {
    modifier onlyOwner {
        require(owner == msg.sender, "ONLY_OWNER");
        _;
    }

    /// @notice initialize
    /// @param _owner owner to perform owner functions
    function initialize(address _owner) external initializer {
        require(_owner != address(0), "INVALID_OWNER");

        owner = _owner;

        emit Initialized(_owner, block.timestamp);
    }

    /// @dev loops through distributor contract and updates
    /// rewards for the user
    /// low gas cost is the ultimaate goal
    function accumulateRewards(
        address _from,
        address _to,
        uint256 _balance
    ) external override {
        IRewardDistributor[] memory distributors = tokenRewardToDistributors[msg.sender];
        uint256 size = distributors.length;

        console.logString("gets here");
        if (size == 0) return;
        
        /// We need to manage the size of the rewards to prevent
        /// astronomical increase in gas cost
        for (uint256 i = 0; i < size; i++) {
            distributors[i].accumulateReward(msg.sender, _from, _to, _balance);
        }
    }

    /// @dev approves a distributor contract for a token
    /// @param _distributor The distributor contract address
    /// @param _approve the status of the distributor contract
    function setDistributorStatus(IRewardDistributor _distributor, bool _approve)
        external
        onlyOwner
    {
        approvedDistributors[_distributor] = _approve;
        emit ApprovedDistributor(_distributor, block.timestamp);
    }

    /// @dev Enables a distributor contract to activate reward for a token
    /// @param _tokenAddr the token the distributor contract is adding a reward for
    function activateReward(address _tokenAddr) external override {
        require(
            approvedDistributors[IRewardDistributor(msg.sender)] == true,
            "ONLY_APPROVED_DISTRIBUTOR"
        );

        /// @TODO check if reward has been activated

        /// Note: it's possible for a distributor contract to spam the addReward
        /// function by creating minimal rewards. It's required to constantly monitor the AddReward
        /// event offchain to ensure that the addReward function is not being spammed
        /// by a partner. We could periodically set an inactive distributor status to
        /// false
        tokenRewardToDistributors[_tokenAddr].push(IRewardDistributor(msg.sender));
        emit AddReward(_tokenAddr, IRewardDistributor(msg.sender), block.timestamp);
    }

    function removeReward(address _tokenAddr, IRewardDistributor _distributor)
        external
        override
        onlyOwner
    {
        // loop throught and remove
        IRewardDistributor[] storage distributors = tokenRewardToDistributors[_tokenAddr];
        uint256 size = distributors.length;

        if (size == 1) delete distributors[0];

        if (size > 1) {
            // remove the item from the array
            // using the 2 pointer algorithm
            uint256 j = 0;
            for (uint256 i = 0; i < size; i++) {
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

    function acceptOwnerTransfer() external {
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
