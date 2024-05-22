// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../util/Initializable.sol";
import "../interfaces/IBSLendingPair.sol";
import "../interfaces/IRewardDistributor.sol";
import "../interfaces/IRewardDistributorManager.sol";
import "hardhat/console.sol";

abstract contract RewardDistributorStorageV1 is IRewardDistributor, Initializable {
    
    /// @dev PoolInfo
    struct PoolInfo {
        IERC20 receiptTokenAddr;
        uint256 lastUpdateTimestamp;
        uint256 accRewardTokenPerShare;
        uint128 allocPoint;
    }

    /// @dev
    //
    // We do some fancy math here. Basically, any point in time, the amount of reward tokens
    // entitled to a user but is pending to be distributed is:
    //
    //   pending reward = (user.amount * pool.accRewardTokenPerShare) - user.rewardDebt
    //
    // Whenever a user deposits or withdraws LP tokens to a pool. Here's what happens:
    //   1. The pool's `accRewardTokenPerShare` (and `lastUpdateTimestamp`) gets updated.
    //   2. User's pending reward gets updated
    //   3. User's `amount` gets updated.
    //   4. User's `rewardDebt` gets updated.
    //
    struct UserInfo {
        uint256 amount; // the balance of the user
        uint256 pendingReward;
        uint256 rewardDebt; // Reward debt. See explanation below.
    }

    /// @notice
    IERC20 public rewardToken;

    /// @notice poolInfo
    PoolInfo[] public poolInfo;

    /// @notice userInfo
    mapping(uint256 => mapping(address => UserInfo)) public userInfo;

    /// @notice queue for receipt tokens awaiting activation
    address[] public pendingRewardActivation;

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

contract RewardDistributor is RewardDistributorStorageV1 {
    /// @notice manager
    IRewardDistributorManager public immutable rewardDistributorManager;

    uint256 private constant SHARE_SCALE = 1e12;

    event Withdraw(
        address indexed user,
        uint256 indexed poolId, 
        uint256 amount
    );

    event AddDistribution(
        address indexed lendingPair,
        address indexed distributor,
        DistributorConfigVars vars,
        uint256 timestamp
    );

    event UpdateDistribution(
        uint256 indexed pid,
        uint256 oldAllocPoint,
        uint256 newAllocPoint,
        uint256 timestamp
    );

    event AccumulateReward(
        address indexed receiptToken,
        uint256 indexed pid,
        address from,
        address to
    );

    modifier onlyGuardian {
        require(msg.sender == guardian, "ONLY_GUARDIAN");
        _;
    }

    /// @notice create a distributor
    /// @param _rewardDistributorManager the reward distributor manager address
    constructor(address _rewardDistributorManager) {
        require(_rewardDistributorManager != address(0), "INVALID_MANAGER");
        rewardDistributorManager = IRewardDistributorManager(_rewardDistributorManager);
    }

    /// @dev intialize
    /// @param _rewardToken asset to distribute
    /// @param _amountDistributePerSecond amount to distributer per second
    /// @param _startTimestamp time to start distributing
    /// @param _guardian distributor guardian
    function initialize(
        IERC20 _rewardToken,
        uint256 _amountDistributePerSecond,
        uint256 _startTimestamp,
        address _guardian
    ) external override initializer {
        require(address(_rewardToken) != address(0), "INVALID_TOKEN");
        require(_guardian != address(0), "INVALID_GUARDIAN");
        require(_amountDistributePerSecond > 0, "INVALID_DISTRIBUTE");
        require(_startTimestamp > 0, "INVALID_TIMESTAMP");

        rewardToken = _rewardToken;
        rewardAmountDistributePerSecond = _amountDistributePerSecond;
        startTimestamp = _startTimestamp;
        guardian = _guardian;

        emit Initialized(
            _rewardToken,
            _amountDistributePerSecond,
            _startTimestamp,
            _guardian,
            block.timestamp
        );
    }

    /// @dev accumulates reward for a depositor
    /// @param _tokenAddr token to reward
    /// @param _from sender
    /// @param _to receipient
    function accumulateReward(
        address _tokenAddr,
        address _from,
        address _to
    ) external override {
        require(_tokenAddr != address(0), "INVALID_ADDR");

        uint256 pid = tokenPoolIDPair[_tokenAddr];

        updatePool(pid);

        PoolInfo memory pool = poolInfo[pid];

        if (_from != address(0)) {
            UserInfo storage user = userInfo[pid][_from];

            if (user.amount > 0) {
                user.pendingReward +=
                    ((user.amount * pool.accRewardTokenPerShare) / SHARE_SCALE) -
                    user.rewardDebt;
            }
            user.amount = IERC20(_tokenAddr).balanceOf(_from);
            user.rewardDebt = ((user.amount * pool.accRewardTokenPerShare) / SHARE_SCALE);
        }

        if (_to != address(0)) {
            UserInfo storage user = userInfo[pid][_to];
            if (user.amount > 0) {
                user.pendingReward +=
                    ((user.amount * pool.accRewardTokenPerShare) / SHARE_SCALE) -
                    user.rewardDebt;
            }
            user.amount = IERC20(_tokenAddr).balanceOf(_to);
            user.rewardDebt = ((user.amount * pool.accRewardTokenPerShare) / SHARE_SCALE);
        }

        emit AccumulateReward(_tokenAddr, pid, _from, _to);
    }

    struct DistributorConfigVars {
        uint128 collateralTokenAllocPoint;
        uint128 debtTokenAllocPoint;
        uint128 borrowAssetTokenAllocPoint;
    }

    /// @dev Add a distribution param for a lending pair
    /// @param _allocPoints specifies the allocation points
    /// @param _lendingPair the lending pair being added
    /// @param _withUpdate update existing pools
    function add(
        DistributorConfigVars calldata _allocPoints,
        IBSLendingPair _lendingPair,
        bool _withUpdate
    ) external onlyGuardian {
        if (_withUpdate) {
            massUpdatePools();
        }

        uint256 lastUpdateTimestamp =
            block.timestamp > startTimestamp ? block.timestamp : startTimestamp;

        if (_allocPoints.collateralTokenAllocPoint > 0) {
            createPool(
                _allocPoints.collateralTokenAllocPoint,
                _lendingPair.wrappedCollateralAsset(),
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
                _lendingPair.wrapperBorrowedAsset(),
                lastUpdateTimestamp
            );
        }

        emit AddDistribution(address(_lendingPair), address(this), _allocPoints, block.timestamp);
    }

    /// @notice activatePendingRewards Activate pending reward in the manger
    function activatePendingRewards() external {
        for (uint256 i = 0; i < pendingRewardActivation.length; i++) {
            rewardDistributorManager.activateReward(pendingRewardActivation[i]);
        }
        // reset storage
        delete pendingRewardActivation;
    }

    /// @notice set update allocation point for a pool
    function set(
        uint256 _pid,
        uint128 _allocPoint,
        bool _withUpdate
    ) public onlyGuardian {
        if (_withUpdate) {
            massUpdatePools();
        }

        totalAllocPoint = (totalAllocPoint - poolInfo[_pid].allocPoint) + _allocPoint;
        poolInfo[_pid].allocPoint = _allocPoint;

        emit UpdateDistribution(_pid, _allocPoint, _allocPoint, block.timestamp);
    }

    function getMultiplier(uint256 _from, uint256 _to) internal pure returns (uint256) {
        return _to - _from;
    }

    function pendingRewardToken(uint256 _pid, address _user) external view returns (uint256) {
        PoolInfo memory pool = poolInfo[_pid];
        UserInfo memory user = userInfo[_pid][_user];
        uint256 accRewardTokenPerShare = pool.accRewardTokenPerShare;
        uint256 totalSupply = pool.receiptTokenAddr.totalSupply();

        if (block.timestamp > pool.lastUpdateTimestamp && totalSupply != 0) {
            accRewardTokenPerShare = calculatePoolReward(pool, totalSupply);
        }

        return
            (((user.amount * accRewardTokenPerShare) / SHARE_SCALE) - user.rewardDebt) +
            user.pendingReward;
    }

    /// @dev return accumulated reward share for the pool
    function calculatePoolReward(PoolInfo memory pool, uint256 totalSupply)
        internal
        view
        returns (uint256 accRewardTokenPerShare)
    {
        uint256 multiplier = getMultiplier(pool.lastUpdateTimestamp, block.timestamp);
        uint256 tokenReward =
            (multiplier * rewardAmountDistributePerSecond * pool.allocPoint) / totalAllocPoint;
        accRewardTokenPerShare =
            pool.accRewardTokenPerShare +
            ((tokenReward * SHARE_SCALE) / totalSupply);
    }

    /// @notice Update reward vairables for all pools. Be careful of gas spending!
    function massUpdatePools() public {
        uint256 length = poolInfo.length;
        for (uint256 pid = 0; pid < length; ++pid) {
            updatePool(pid);
        }
    }

    /// @notice Update reward variables of the given pool to be up-to-date.
    /// @param _pid pool id
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

        pool.accRewardTokenPerShare = calculatePoolReward(pool, totalSupply);
        pool.lastUpdateTimestamp = block.timestamp;
    }

    /// @dev user to withdraw accumulated rewards from a pool
    /// @param _pid pool id
    /// @param _to address to transfer rewards to
    function withdraw(uint256 _pid, address _to) public {
        require(_to != address(0), "INVALID_TO");

        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];

        updatePool(_pid);

        uint256 pending =
            ((user.amount * pool.accRewardTokenPerShare) / SHARE_SCALE) - user.rewardDebt;
        uint256 amount = user.pendingReward + pending;
        safeTokenTransfer(_to, amount);
        user.rewardDebt = (user.amount * pool.accRewardTokenPerShare) / SHARE_SCALE;
        user.pendingReward = 0;
        // @TODO add _to
        emit Withdraw(msg.sender, _pid, amount);
    }

    // Safe token transfer function, just in case if rounding error causes pool to not have enough tokens
    function safeTokenTransfer(address _to, uint256 _amount) internal {
        uint256 balance = rewardToken.balanceOf(address(this));
        if (_amount > balance) {
            rewardToken.transfer(_to, balance);
        } else {
            rewardToken.transfer(_to, _amount);
        }
    }

    function createPool(
        uint128 _allocPoint,
        IERC20 _receiptTokenAddr,
        uint256 _lastUpdateTimestamp
    ) internal {
        require(address(_receiptTokenAddr) != address(0), "invalid_addr");
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
        pendingRewardActivation.push(address(_receiptTokenAddr));
    }
}
