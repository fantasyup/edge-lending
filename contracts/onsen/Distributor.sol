// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;


/**

- We want people to be able to accrue rewards across 
  multiple positions

- We want it to be using one single address that accrues the profit

- We want to be able to update alloc points so we can easily add new
pools to the network

- We want to be able to 

 */

/**

- create pool where we deposit x number of tokens
- with this x number of tokens
- we allocate specific % to different receipt tokens

- for user to claim rewards
- pass address of the pools where you want to claim rewards

**/

/**

We will update the userInfo on

- transfer
- mint
- burn 

*/

contract DistributorStorageV1 {
  
  /// @dev
  struct PoolInfo {
  
    uint128 accTokenPerShare;
    uint64 lastUpdateTimestamp;
    uint64 allocPoint;
    address pair;
  
  }

  struct UserInfo {
    uint256 amount; // the balance of the user
    uint256 rewardDebt; // Reward debt. See explanation below.
    
    //
    // We do some fancy math here. Basically, any point in time, the amount of SUSHIs
    // entitled to a user but is pending to be distributed is:
    //
    //   pending reward = (user.amount * pool.accSushiPerShare) - user.rewardDebt
    //
    // Whenever a user deposits or withdraws LP tokens to a pool. Here's what happens:
    //   1. The pool's `accSushiPerShare` (and `lastRewardBlock`) gets updated.
    //   2. User receives the pending reward sent to his/her address.
    //   3. User's `amount` gets updated.
    //   4. User's `rewardDebt` gets updated.
  
  }

  /// @notice 
  PoolInfo[] public poolInfo;

  /// @notice 
  mapping (uint256 => mapping (address => UserInfo)) public userInfo;
  
  /// @dev
  uint256 public totalAllocPoint;

  
}

contract Distributor is DistributorStorageV1 {

}
