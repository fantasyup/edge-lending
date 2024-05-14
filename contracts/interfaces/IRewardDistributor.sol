// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IRewardDistributor {
    function accumulateReward(
        address _tokenAddr,
        address _from,
        address _to,
        address _balance
    ) external;

    function initialize(
        IERC20 _rewardToken,
        uint256 _amountDistributePerSecond,
        uint256 _startTimestamp,
        address _guardian
    ) external;

}
