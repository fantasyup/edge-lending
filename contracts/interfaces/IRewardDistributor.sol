// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

interface IRewardDistributor {
    function accumulateReward(
        address _tokenAddr,
        address _from,
        address _to,
        address _balance
    ) external;
}
