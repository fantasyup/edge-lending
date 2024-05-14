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

abstract contract RewardDistributorStorageV1 {

  /// @dev Instruct
  struct PoolInfo {
    IERC20 receiptTokenAddr;
    uint256 lastUpdateTimestamp;
    uint128 accRewardTokenPerShare;
    uint128 allocPoint;
  }

  /// @dev 
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
  struct UserInfo {
    uint256 amount; // the balance of the user
    uint256 rewardDebt; // Reward debt. See explanation below.
  }

  /// @notice
  IERC20 public rewardToken;

  /// @notice 
  PoolInfo[] public poolInfo;

  /// @notice 
  mapping (uint256 => mapping (address => UserInfo)) public userInfo;

  /// @notice token -> pooil id
  mapping(address => uint256) public tokenPoolIDPair;
  
  /// @dev totalAllocPoint
  uint256 public totalAllocPoint;

  /// @notice The start timestamp 
  uint256 public startTimestamp;

    /// @notice The start timestamp 
  uint256 public endTimestamp;

  /// @notice onsen
  address public immutable onsen;

  /// @notice resposible for updating the alloc points
  address public guardian;

  /// @notice rewardAmountDistributePerSecond scaled in 1e18
  uint256 public rewardAmountDistributePerSecond;

  uint256 constant internal SHARE_SCALE = 1e18;

}

contract RewardDistributor is RewardDistributorStorageV1, IRewardDistributor {

  modifier onlyGuardian {
    require(msg.sender == onsen, "ONLY_ONSEN");
    _;
  }

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
    rewardAmountDistributePerSecond = _amountDistributePerSecond;
    startTimestamp = _startTimestamp;
    guardian = _guardian;

    emit Initialized(
      
    );
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
      uint128 collateralTokenAllocPoint;
      uint128 debtTokenAllocPoint;
      uint128 borrowAssetTokenAllocPoint;
  }

  function add(
      DistributorConfigVars _allocPoints,
      IBSLendingPair _lendingPair,
      bool _withUpdate
  ) public onlyGuardian {
    if (_withUpdate) {
        // massUpdatePools();
    }

    uint256 lastUpdateTimestamp =
        block.timestamp > startTimestamp ? block.timestamp : startTimestamp;
    
    if (_allocPoints.collateralTokenAllocPoint > 0) {
      createPool(
        _allocPoints.collateralTokenAllocPoint,
        address(_lendingPair.collateralAsset()),
        lastUpdateTimestamp
      );
    }

    if (_allocPoints.debtTokenAllocPoint > 0) {
      createPool(
        _allocPoints.debtTokenAllocPoint,
        address(_lendingPair.debtToken()),
        lastUpdateTimestamp
      );
    }

    if (_allocPoints.borrowAssetTokenAllocPoint > 0) {
      createPool(
        _allocPoints.borrowAssetTokenAllocPoint,
        address(_lendingPair.borrowAsset()),
        lastUpdateTimestamp
      );
    }

    emit AddDistributor(
      _lendingPair,
      address(this),
      _vars,
      block.timestamp
    );
  }

  function createPool(
    uint128 _allocPoint,
    address _receiptTokenAddr,
    uint256 _lastUpdateTimestamp
  ) internal {
    totalAllocPoint = totalAllocPoint + _allocPoint;

    poolInfo.push(
      PoolInfo({
          receiptTokenAddr: _receiptTokenAddr,
          allocPoint: _allocPoint,
          lastUpdateTimestamp: _lastUpdateTimestamp,
          accRewardTokenPerShare: 0
      })
    );

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
    return _to - _from;
  }

  function pendingRewardToken(uint256 _pid, address _user)
      external
      view
      returns (uint256)
  {
      PoolInfo storage pool = poolInfo[_pid];
      UserInfo storage user = userInfo[_pid][_user];
      uint256 accRewardTokenPerShare = pool.accRewardTokenPerShare;
      uint256 totalSupply = pool.receiptTokenAddr.totalSupply();

      if (block.timestamp > pool.lastUpdateTimestamp && totalSupply != 0) {
          uint256 multiplier =
              getMultiplier(pool.lastUpdateTimestamp, block.timestamp);
          uint256 tokenReward =
              (multiplier * rewardAmountDistributePerSecond * pool.allocPoint) / totalAllocPoint;
          accRewardTokenPerShare = accRewardTokenPerShare + ((tokenReward * SHARE_SCALE) / totalSupply);
      }

      return ((user.amount * accRewardTokenPerShare) / SHARE_SCALE) - user.rewardDebt;
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
