// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "./IDistributor.sol";

interface IEdgeRewards {
    event ApprovedDistribution(
        IDistributor distributor,
        uint256 timestamp
    );

    event AddReward(
        address tokenAddr,
        IDistributor distributor,
        uint256 timestamp
    );

  event RemoveReward(
        address tokenAddr,
        IDistributor distributor,
        uint256 timestamp
    );

    event TransferControl(address _newTeam, uint256 timestamp);

    event OwnershipAccepted(address newOwner, uint256 timestamp);

    function addReward(
        address _tokenAddr,
        IDistributor _distributor
    ) external;

    function removeReward(
        address _tokenAddr,
        IDistributor _distributor
    ) external;


}