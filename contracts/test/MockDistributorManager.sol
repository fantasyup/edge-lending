// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "../interfaces/IRewardDistributorManager.sol";

contract MockDistributorManager is IRewardDistributorManager {

    function addReward(
        address _tokenAddr,
        IRewardDistributor _distributor
    ) external pure override{
        _tokenAddr;
        _distributor;
        return;
    }

    function removeReward(
        address _tokenAddr,
        IRewardDistributor _distributor
    ) external pure override {
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

}