// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "../interfaces/IRewardDistributorManager.sol";

contract MockRewardDistributorManager is IRewardDistributorManager {
    function activateReward(address _tokenAddr) external pure override {
        _tokenAddr;
        return;
    }

    function removeReward(address _tokenAddr, IRewardDistributor _distributor)
        external
        pure
        override
    {
        _tokenAddr;
        _distributor;
        return;
    }

    function accumulateRewards(
        address _from,
        address _to,
        uint256 _balance
    ) external pure override {
        _from;
        _to;
        _balance;
        return;
    }

    function proxiableUUID() public pure returns (bytes32) {
        return keccak256("org.edge.contracts.edgerewards.implementation");
    }
}
