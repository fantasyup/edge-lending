// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../interfaces/IBSLendingPair.sol";
import "../interfaces/IRewardDistributor.sol";

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

abstract contract DistributorStorageV1 {
  /// @dev Instruct
  struct PoolInfo {
    IERC20 receiptTokenAddr;
    uint256 lastUpdateTimestamp;
    uint128 accRewardTokenPerShare;
    uint128 allocPoint;
  }

  /// @dev 
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
    //
  }

  /// @notice
  IERC20 public rewardToken;

  /// @notice 
  PoolInfo[] public poolInfo;

  /// @notice 
  mapping (uint256 => mapping (address => UserInfo)) public userInfo;

  /// @notice token -> pooil id
  mapping(address => uint256) public tokenPoolIDPair;
  
  /// @dev
  uint256 public totalAllocPoint;

  /// @notice The start timestamp 
  uint256 public startTimestamp;

    /// @notice The start timestamp 
  uint256 public endTimestamp;

  /// @notice 
  address public immutable onsen;

  /// @notice resposible for updating the alloc points
  address public guardian;

}

contract RewardDistributor is DistributorStorageV1 {

  modifier onlyGuardian {
    require(msg.sender == onsen, "ONLY_ONSEN");
    _;
  }

//   modifier onlyOnsen {
//     require(msg.sender == onsen, "ONLY_ONSEN");
//     _;
//   }

  constructor(address _onsen) {
    onsen = _onsen;
  }
  
  function initialize(
    IERC20 _rewardToken,
    uint256 _amountDistributePerSecond,
    uint256 _startTimestamp,
    address _guardian
  ) external {
    rewardToken = _rewardToken;
    startTimestamp = _startTimestamp;
    guardian = _guardian;
  }


    // handles the transfer, burn, mint functions
  /// @dev deposit
  function accumulateReward(
    address _tokenAddr,
    address _from,
    address _to,
    uint256 _balance
  ) external /*onlyEdgeRewards*/ {
    // check the from & to addresses if not address
    // update reward
    uint256 pid = tokenPoolIDPair[_tokenAddr];
    // get pool id
    updatePool(pid);

    if (from != address(0)) {
      // sub
      UserInfo storage user = userInfo[pid][_from];
      if(user.amount > 0 && user.amount <= _balance) {
        uint256 pendinRewards =
          (user.amount * pool.accRTKPerShare / 1e12) -  user.rewardDebt;
        // subtract from balance        
      }
    }

    if (to != address(0)) {
      // update this guy
      UserInfo storage user = userInfo[pid][_to];
      if(user.amount > 0) {
        uint256 pendinRewards =
          (user.amount * pool.accRTKPerShare / 1e12) -  user.rewardDebt;
      }

      // add to balance
    }

    emit AccumulateReward(msg.sender, _pid, _amount);
  }

  struct DistributorConfigVars {
      bool collateralToken;
      bool debtToken;
      bool borrowAssetToken;
  }

  function add(
      uint128 _allocPoint,
      IBSLendingPair _pair,
      bool _withUpdate
  ) public onlyGuardian {
    if (_withUpdate) {
        // massUpdatePools();
    }
    uint256 lastUpdateTimestamp =
        block.timestamp > startTimestamp ? block.timestamp : startTimestamp;
    totalAllocPoint = totalAllocPoint + _allocPoint;

        //     if (_vars.collateralToken == true) {
        //     pairToDistributor[address(_lendingPair.collateralAsset())].push(_distributor);
        // }

        // if (_vars.debtToken == true) {
        //     pairToDistributor[address(_lendingPair.debtToken())].push(_distributor);
        // }

        // if (_vars.borrowAssetToken == true) {
        //     pairToDistributor[address(_lendingPair.borrowAsset())].push(_distributor);
        // }

        // emit AddDistributor(
        //     _lendingPair,
        //     _distributor,
        //     _vars,
        //     block.timestamp
        // );

    poolInfo.push(
        PoolInfo({
            receiptTokenAddr: _receiptTokenAddr,
            allocPoint: _allocPoint,
            lastUpdateTimestamp: lastUpdateTimestamp,
            accRewardTokenPerShare: 0
        })
    );

    // get pool id
    // update edgerewards
    tokenPoolIDPair[address(_receiptTokenAddr)] = poolInfo.length - 1;
  }

  function set(
      uint256 _pid,
      uint256 _allocPoint,
      bool _withUpdate
  ) public onlyGuardian {
      if (_withUpdate) {
          // massUpdatePools();
      }
      totalAllocPoint = totalAllocPoint.sub(poolInfo[_pid].allocPoint).add(
          _allocPoint
      );
      poolInfo[_pid].allocPoint = _allocPoint;
  }
  
  function getMultiplier(uint256 _from, uint256 _to)
    public
    view
    returns (uint256)
  {
      if (_to <= bonusEndBlock) {
          return _to.sub(_from).mul(BONUS_MULTIPLIER);
      } else if (_from >= bonusEndBlock) {
          return _to.sub(_from);
      } else {
          return
              bonusEndBlock.sub(_from).mul(BONUS_MULTIPLIER).add(
                  _to.sub(bonusEndBlock)
              );
      }
  }


  function pendingRewardToken(uint256 _pid, address _user)
      external
      view
      returns (uint256)
  {
      PoolInfo storage pool = poolInfo[_pid];
      UserInfo storage user = userInfo[_pid][_user];
      uint256 accRTKPerShare = pool.accRTKPerShare;
      uint256 lpSupply = pool.lpToken.balanceOf(address(this));


      if (block.number > pool.lastRewardBlock && lpSupply != 0) {
          uint256 multiplier =
              getMultiplier(pool.lastRewardBlock, block.number);
          uint256 rtkReward =
              multiplier.mul(rtkPerBlock).mul(pool.allocPoint).div(
                  totalAllocPoint
              );
          accRTKPerShare = accRTKPerShare.add(
              rtkReward.mul(1e12).div(lpSupply)
          );
      }

      return user.amount.mul(accRTKPerShare).div(1e12).sub(user.rewardDebt);
  }


  /// @notice Update reward vairables for all pools. Be careful of gas spending!
  function massUpdatePools() public {
    uint256 length = poolInfo.length;
    for (uint256 pid = 0; pid < length; ++pid) {
        updatePool(pid);
    }
  }

  /**
    * @notice Update reward variables of the given pool to be up-to-date.
    * @param _pid pool id
    */
  function updatePool(uint256 _pid) public {
      PoolInfo storage pool = poolInfo[_pid];
      if (block.number <= pool.lastRewardBlock) {
          return;
      }
      uint256 lpSupply = pool.lpToken.balanceOf(address(this));
      if (lpSupply == 0) {
          pool.lastRewardBlock = block.number;
          return;
      }
      uint256 multiplier = getMultiplier(pool.lastRewardBlock, block.number);
      uint256 rtkReward =
          multiplier.mul(rtkPerBlock).mul(pool.allocPoint).div(
              totalAllocPoint
          );
      rtk.mint(address(this), rtkReward);
      pool.accRTKPerShare = pool.accRTKPerShare.add(
          rtkReward.mul(1e12).div(lpSupply)
      );
      pool.lastRewardBlock = block.number;
  }

  /// @dev withdraw
  function withdraw(uint256 _pid, address _to) public {
    PoolInfo storage pool = poolInfo[_pid];
    UserInfo storage user = userInfo[_pid][msg.sender];

    updatePool(_pid);

    uint256 pending = user.amount.mul(pool.accRTKPerShare).div(1e12).sub(user.rewardDebt);
    safeRTKTransfer(msg.sender, pending);
    user.rewardDebt = user.amount.mul(pool.accRTKPerShare).div(1e12);
    
    emit Withdraw(msg.sender, _pid, _amount);

  }

  // Safe sushi transfer function, just in case if rounding error causes pool to not have enough SUSHIs.
  function safeSushiTransfer(address _to, uint256 _amount) internal {
      uint256 sushiBal = sushi.balanceOf(address(this));
      if (_amount > sushiBal) {
          sushi.transfer(_to, sushiBal);
      } else {
          sushi.transfer(_to, _amount);
      }
  }

  /// allows the creator to withdraw some of the funds???
  function emergencyWithdraw(uint256 pid, address to) public {
  
  }
}
