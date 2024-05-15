// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "./IRewardDistributor.sol";

interface IRewardDistributorManager {
    event ApprovedDistribution(
        IRewardDistributor distributor,
        uint256 timestamp
    );

    event AddReward(
        address tokenAddr,
        IRewardDistributor distributor,
        uint256 timestamp
    );

  event RemoveReward(
        address tokenAddr,
        IRewardDistributor distributor,
        uint256 timestamp
    );

    event TransferControl(address _newTeam, uint256 timestamp);

    event OwnershipAccepted(address newOwner, uint256 timestamp);

    function addReward(
        address _tokenAddr,
        IRewardDistributor _distributor
    ) external;

    function removeReward(
        address _tokenAddr,
        IRewardDistributor _distributor
    ) external;


}