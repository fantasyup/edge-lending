// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../util/Initializable.sol";
import "../interfaces/IBSLendingPair.sol";
import "../interfaces/IRewardDistributor.sol";
import "../interfaces/IRewardDistributorManager.sol";

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

abstract contract RewardDistributorStorageV1 is Initializable {

  /// @dev Instruct
  struct PoolInfo {
    IERC20 receiptTokenAddr;
    uint256 lastUpdateTimestamp;
    uint256 accRewardTokenPerShare;
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
    uint256 pendingReward;
    uint256 rewardDebt; // Reward debt. See explanation below.
    uint256 lastUpdateTimestamp;
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

  /// @notice resposible for updating the alloc points
  address public guardian;

  /// @notice rewardAmountDistributePerSecond scaled in 1e18
  uint256 public rewardAmountDistributePerSecond;

}

contract RewardDistributor is RewardDistributorStorageV1, IRewardDistributor {
  /// @notice onsen
  IRewardDistributorManager public immutable rewardDistributorManager;

  uint256 constant private SHARE_SCALE = 1e12;

  event Withdraw(address user, uint256 poolId, uint256 amount);
  event AddDistributor(
    address lendingPair,
    address distributor,
    DistributorConfigVars _vars,
    uint256 timestamp
  );
  event AccumulateReward(address sender, uint256 pid, uint256 amount);

  modifier onlyGuardian {
    require(msg.sender == guardian, "ONLY_GUARDIAN");
    _;
  }

  constructor(address _rewardDistributorManager) {
    rewardDistributorManager = IRewardDistributorManager(_rewardDistributorManager);
  }
  
  function initialize(
    IERC20 _rewardToken,
    uint256 _amountDistributePerSecond,
    uint256 _startTimestamp,
    address _guardian
  ) external override {
    rewardToken = _rewardToken;
    rewardAmountDistributePerSecond = _amountDistributePerSecond;
    startTimestamp = _startTimestamp;
    guardian = _guardian;

    emit Initialized(
      block.timestamp
    );
  }

  // handles the transfer, burn, mint functions
  /// @dev deposit
  function accumulateReward(
    address _tokenAddr,
    address _from,
    address _to,
    uint256 _balance
  ) external override {
    require(msg.sender == address(rewardDistributorManager), "ONLY_MANAGER");
    
    // check the from & to addresses if not address
    // update reward
    uint256 pid = tokenPoolIDPair[_tokenAddr];
    // get pool id
    updatePool(pid);
    PoolInfo memory pool = poolInfo[pid];

    if (_from != address(0)) {
      // sub
      UserInfo storage user = userInfo[pid][_from];
      if(user.amount > 0 && user.amount <= _balance) {
        user.pendingReward += ((user.amount * pool.accRewardTokenPerShare) / SHARE_SCALE) - user.rewardDebt;
        user.amount -= _balance;
        user.rewardDebt +=
          (user.amount * pool.accRewardTokenPerShare / SHARE_SCALE);
        // subtract from balance    
      }
    }

    if (_to != address(0)) {
      // update this guy
      UserInfo storage user = userInfo[pid][_to];
      if (user.amount > 0) {
        user.pendingReward += ((user.amount * pool.accRewardTokenPerShare) / SHARE_SCALE) - user.rewardDebt;
      }
      // add to balance
      user.amount += _balance;
      user.rewardDebt +=
          (user.amount * pool.accRewardTokenPerShare / SHARE_SCALE);
    }

    emit AccumulateReward(msg.sender, pid, _balance);
  }

  function calculateUserReward() internal {

  }

  struct DistributorConfigVars {
      uint128 collateralTokenAllocPoint;
      uint128 debtTokenAllocPoint;
      uint128 borrowAssetTokenAllocPoint;
  }

  function add(
      DistributorConfigVars calldata _allocPoints,
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
        _lendingPair.collateralAsset(),
        lastUpdateTimestamp
      );
    }

    if (_allocPoints.debtTokenAllocPoint > 0) {
      createPool(
        _allocPoints.debtTokenAllocPoint,
        _lendingPair.debtToken(),
        lastUpdateTimestamp
      );
    }

    if (_allocPoints.borrowAssetTokenAllocPoint > 0) {
      createPool(
        _allocPoints.borrowAssetTokenAllocPoint,
        _lendingPair.asset(),
        lastUpdateTimestamp
      );
    }

    emit AddDistributor(
      address(_lendingPair),
      address(this),
      _allocPoints,
      block.timestamp
    );
  }

  function createPool(
    uint128 _allocPoint,
    IERC20 _receiptTokenAddr,
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

    // notify edge rewards
    rewardDistributorManager.addReward(address(_receiptTokenAddr), IRewardDistributor(address(this)));
  }

  function set(
      uint256 _pid,
      uint128 _allocPoint,
      bool _withUpdate
  ) public onlyGuardian {
      if (_withUpdate) {
          // massUpdatePools();
      }
      totalAllocPoint = (totalAllocPoint - poolInfo[_pid].allocPoint) + _allocPoint;
      poolInfo[_pid].allocPoint = _allocPoint;
  }
  
  function getMultiplier(uint256 _from, uint256 _to)
    public
    pure
    returns (uint256)
  {
    return _to - _from;
  }

  function pendingRewardToken(uint256 _pid, address _user)
      external
      view
      returns (uint256)
  {
      PoolInfo memory pool = poolInfo[_pid];
      UserInfo memory user = userInfo[_pid][_user];
      uint256 accRewardTokenPerShare = pool.accRewardTokenPerShare;
      uint256 totalSupply = pool.receiptTokenAddr.totalSupply();

      if (block.timestamp > pool.lastUpdateTimestamp && totalSupply != 0) {
          // uint256 multiplier =
          //     getMultiplier(pool.lastUpdateTimestamp, block.timestamp);
          // uint256 tokenReward =
          //     (multiplier * rewardAmountDistributePerSecond * pool.allocPoint) / totalAllocPoint;
          // accRewardTokenPerShare = accRewardTokenPerShare + ((tokenReward * SHARE_SCALE) / totalSupply);
          accRewardTokenPerShare = calculatePoolReward(pool, totalSupply);
      }

      return (((user.amount * accRewardTokenPerShare) / SHARE_SCALE) - user.rewardDebt) + user.pendingReward;
  }

  /// @dev return accumulated reward share for the pool
  function calculatePoolReward(
    PoolInfo memory pool,
    uint256 totalSupply
  ) 
    internal
    view
    returns (uint256 accRewardTokenPerShare)
  {
    uint256 multiplier =
        getMultiplier(pool.lastUpdateTimestamp, block.timestamp);
    uint256 tokenReward =
        (multiplier * rewardAmountDistributePerSecond * pool.allocPoint) / totalAllocPoint;
    accRewardTokenPerShare = accRewardTokenPerShare + ((tokenReward * SHARE_SCALE) / totalSupply);
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
      if (block.timestamp <= pool.lastUpdateTimestamp) {
          return;
      }

      uint256 totalSupply = pool.receiptTokenAddr.totalSupply();

      if (totalSupply == 0) {
          pool.lastUpdateTimestamp = block.timestamp;
          return;
      }
      // uint256 multiplier = getMultiplier(pool.lastRewardBlock, block.number);
      // uint256 rtkReward =
      //     multiplier.mul(rtkPerBlock).mul(pool.allocPoint).div(
      //         totalAllocPoint
      //     );
      // rtk.mint(address(this), rtkReward);
      // pool.accRewardTokenPerShare = pool.accRewardTokenPerShare.add(
      //     rtkReward.mul(1e12).div(lpSupply)
      // );
      pool.accRewardTokenPerShare = calculatePoolReward(pool, totalSupply);
      pool.lastUpdateTimestamp = block.timestamp;
  }

  /// @dev withdraw
  function withdraw(uint256 _pid, address _to) public {
    require(_to != address(0), "INVALID_TO");

    PoolInfo storage pool = poolInfo[_pid];
    UserInfo storage user = userInfo[_pid][msg.sender];

    updatePool(_pid);

    uint256 pending = ((user.amount * pool.accRewardTokenPerShare) / SHARE_SCALE) - user.rewardDebt;
    uint256 amount =  user.pendingReward + pending;
    safeTokenTransfer(_to, amount);
    user.rewardDebt = user.amount * pool.accRewardTokenPerShare / SHARE_SCALE;
    user.pendingReward = 0;
    // @TODO add _to
    emit Withdraw(msg.sender, _pid, amount);
  }

  // Safe sushi transfer function, just in case if rounding error causes pool to not have enough SUSHIs.
  function safeTokenTransfer(address _to, uint256 _amount) internal {
      uint256 balance = rewardToken.balanceOf(address(this));
      if (_amount > balance) {
          rewardToken.transfer(_to, balance);
      } else {
          rewardToken.transfer(_to, _amount);
      }
  }

  /// allows the creator to withdraw some of the funds???
  function emergencyWithdraw(uint256 pid, address to) public {
  
  }
}
