import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import { runTestSuite, setupAndInitLendingPair, TestVars, defaultLendingPairInitVars, advanceNBlocks, currentTimestamp } from "../lib";
import { deployMockDistributorManager, deployUUPSProxy } from "../../helpers/contracts";
import { ContractId } from "../../helpers/types";

runTestSuite("RewardDistributor", (vars: TestVars) => {
  it('initialize', async () => {
      const {
        RewardDistributor,
        BorrowAsset,
        accounts: [admin, bob, kyle]
      } = vars

    // @TODO include test for require checks
    await expect(
      await RewardDistributor.initialize(
        BorrowAsset.address,
        100,
        currentTimestamp(),
        currentTimestamp() + 120, 
        bob.address
      )
    ).to.emit(RewardDistributor, 'Initialized')

  })

  it('add & set', async () => {
    const {
        LendingPair,
        RewardDistributor,
        BorrowAsset,
        accounts: [admin, bob, kyle]
    } = vars

    await RewardDistributor.initialize(
        BorrowAsset.address,
        100,
        currentTimestamp(),
        currentTimestamp() + 180,
        admin.address
    )

    const helper = await setupAndInitLendingPair(
        vars,
        {...defaultLendingPairInitVars, account: admin }
    )

    const allocPoints = {
        collateralTokenAllocPoint: 1,
        debtTokenAllocPoint: 1,
        borrowAssetTokenAllocPoint: 1
    }

    await expect(
        await RewardDistributor.add(
        allocPoints,
        LendingPair.address,
        false
        )
    ).to.emit(RewardDistributor, 'AddDistribution')

    await expect(
        RewardDistributor.add(
        allocPoints,
        LendingPair.address,
        false
        )
    ).to.revertedWith('token_exists')

    await expect(
        await (await RewardDistributor.poolInfo(0)).allocPoint.toNumber()
    ).to.eq(1)

    await expect(
        await (await RewardDistributor.poolInfo(1)).allocPoint.toNumber()
    ).to.eq(1)
    
    await expect(
        await (await RewardDistributor.poolInfo(2)).allocPoint.toNumber()
    ).to.eq(1)

    expect(await RewardDistributor.getTokenPoolID(await LendingPair.wrappedCollateralAsset())).to.eq(0)
    expect(await RewardDistributor.getTokenPoolID(await LendingPair.debtToken())).to.eq(1)
    expect(await RewardDistributor.getTokenPoolID(await LendingPair.wrapperBorrowedAsset())).to.eq(2)
    
    const totalAllocPoints = () => Object.values(allocPoints).reduce((a, b) => a + b, 0)
    expect((await RewardDistributor.totalAllocPoint()).toNumber()).to.eq(totalAllocPoints())
    
    // set
    allocPoints.collateralTokenAllocPoint = 10

    await expect(
        await RewardDistributor.set(0, 10, false)
    ).to.emit(RewardDistributor, 'UpdateDistribution')

    await expect(
        await (await RewardDistributor.poolInfo(0)).allocPoint.toNumber()
    ).to.eq(allocPoints.collateralTokenAllocPoint)

    expect(await (await RewardDistributor["totalAllocPoint()"]()).toNumber()).to.eq(totalAllocPoints())
  })

  it('should not accumulate reward if current time < startTimestamp', async () => {
    const {
        LendingPair,
        RewardDistributor,
        RewardDistributorManager,
        BorrowAsset,
        accounts: [admin, bob, kyle]
    } = vars

    const helper = await setupAndInitLendingPair(
        vars,
        {...defaultLendingPairInitVars, account: admin, accountsToApproveInVault: [admin, kyle] }
    )
    
    await RewardDistributorManager.initialize(admin.address);
    const endSeconds = 500
    await RewardDistributor.initialize(
        BorrowAsset.address,
        100,
        currentTimestamp() + endSeconds,
        currentTimestamp() + endSeconds + 10,
        admin.address
    )

    // credit the reward distributor address with tokens
    await BorrowAsset.setBalanceTo(RewardDistributor.address, 1_000_000_000);

    const allocPoints = {
        collateralTokenAllocPoint: 1,
        debtTokenAllocPoint: 1,
        borrowAssetTokenAllocPoint: 1
    }

    await RewardDistributor.add(
        allocPoints,
        LendingPair.address,
        false
    )

    // approve distributor on manager
    await RewardDistributorManager["setDistributorStatus(address,bool)"](
        RewardDistributor.address, 
        true
    )

    const amountToDeposit = 1000
    await helper.depositCollateralAsset(kyle, amountToDeposit)

    // activate rewards
    await RewardDistributor.activatePendingRewards();
    await advanceNBlocks(2)

    // call accumulate rewards
    await RewardDistributor["accumulateReward(address,address)"](
        await LendingPair.wrappedCollateralAsset(),
        kyle.address
    )
    
    const kylePendingReward = await (await RewardDistributor.pendingRewardToken(0, kyle.address)).toNumber()
    expect(kylePendingReward).to.eq(0)
  })

  it('reward calculation', async () => {
    const {
        LendingPair,
        RewardDistributor,
        RewardDistributorManager,
        BorrowAsset,
        accounts: [admin, bob, kyle]
    } = vars

    const helper = await setupAndInitLendingPair(
        vars,
        {...defaultLendingPairInitVars, account: admin, accountsToApproveInVault: [admin, kyle] }
    )
    
    await RewardDistributorManager.initialize(admin.address);
    const endSeconds = 500
    await RewardDistributor.initialize(
        BorrowAsset.address,
        100,
        currentTimestamp(),
        currentTimestamp() + endSeconds,
        admin.address
    )

    // credit the reward distributor address with tokens
    await BorrowAsset.setBalanceTo(RewardDistributor.address, 1_000_000_000);

    const allocPoints = {
        collateralTokenAllocPoint: 1,
        debtTokenAllocPoint: 1,
        borrowAssetTokenAllocPoint: 1
    }

    await RewardDistributor.add(
        allocPoints,
        LendingPair.address,
        false
    )
    
    // should reject a
    await expect(
        RewardDistributor.activatePendingRewards()
    ).to.be.revertedWith("ONLY_APPROVED_DISTRIBUTOR")

    // approve distributor on manager
    await RewardDistributorManager["setDistributorStatus(address,bool)"](RewardDistributor.address, true)
    // activate rewards
    await RewardDistributor.activatePendingRewards();
    
    // confirm that the rewards have been activated
    expect(await RewardDistributorManager.tokenRewardToDistributors(
        await LendingPair.wrapperBorrowedAsset(),
        0
    )).to.eq(RewardDistributor.address)

    expect(await RewardDistributorManager.tokenRewardToDistributors(
        await LendingPair["wrappedCollateralAsset()"](),
        0
    )).to.eq(RewardDistributor.address)
    
    expect(await RewardDistributorManager.tokenRewardToDistributors(
        await LendingPair.debtToken(),
        0
    )).to.eq(RewardDistributor.address)


    // kyle deposits borrow asset
    // helper.depositBorrowAsset(kyle, 1000)
    const amountToDeposit = 1000
    await helper.depositCollateralAsset(kyle, amountToDeposit)

    await advanceNBlocks(10)
    
    const pending = await (await RewardDistributor.pendingRewardToken(0, kyle.address)).toNumber()
    // console.log({ pending })


    // split advance and check pending
    const wrappedCollateralAsset = await ethers.getContractAt(
        ContractId.MockToken,
        await LendingPair.wrappedCollateralAsset()
    )

    await wrappedCollateralAsset.connect(kyle.signer).transfer(bob.address, amountToDeposit / 2)
    
    await advanceNBlocks(10)

    const bobPending = await (await RewardDistributor.pendingRewardToken(0, bob.address)).toNumber()
    // console.log({ bobPending })

    const kylePendingT = await (await RewardDistributor.pendingRewardToken(0, kyle.address)).toNumber()
    // console.log({ kylePendingT })

    // console.log({ kylePendingT })

    const kylePending = await (await RewardDistributor.userInfo(0, kyle.address))
    // console.log(kylePending.amount.toNumber(), ' ',  kylePending.pendingReward.toNumber())
    // console.log((await wrappedCollateralAsset.balanceOf(kyle.address)).toString())

    // kyle withdraws
    await expect(
        await RewardDistributor.connect(kyle.signer).withdraw(0, kyle.address)
    ).to.emit(RewardDistributor, 'Withdraw')

    // check balance of kyle
    // console.log((await BorrowAsset["balanceOf(address)"](kyle.address)).toNumber())

    expect(
        (await RewardDistributor.pendingRewardToken(0, kyle.address)).toNumber()
    ).to.eq(0)

    // stop accumulating after end timestamp
    await advanceNBlocks(endSeconds)

    // call accumulate rewards
    await RewardDistributor.accumulateReward(await LendingPair.wrappedCollateralAsset(), kyle.address)
    const expectedRewards = (await RewardDistributor.pendingRewardToken(0, kyle.address)).toNumber()
    // call again shouldn't change expected rewards
    await RewardDistributor.accumulateReward(await LendingPair.wrappedCollateralAsset(), kyle.address)
    const newExpectedRewards = ((await RewardDistributor.pendingRewardToken(0, kyle.address)).toNumber())
    // the expected rewards shouldn't change after endTimestamp
    expect(expectedRewards).to.eq(newExpectedRewards)

  })
  
  it('reward calculation - should allocate previous rewards', async () => {
    const {
        LendingPair,
        RewardDistributor,
        RewardDistributorManager,
        BorrowAsset,
        accounts: [admin, bob, kyle]
    } = vars

    const helper = await setupAndInitLendingPair(
        vars,
        {...defaultLendingPairInitVars, account: admin, accountsToApproveInVault: [admin, kyle] }
    )
    
    await RewardDistributorManager.initialize(admin.address);
    const endSeconds = 500
    await RewardDistributor.initialize(
        BorrowAsset.address,
        100,
        currentTimestamp(),
        currentTimestamp() + endSeconds,
        admin.address
    )

    // credit the reward distributor address with tokens
    await BorrowAsset.setBalanceTo(RewardDistributor.address, 1_000_000_000);

    const allocPoints = {
        collateralTokenAllocPoint: 1,
        debtTokenAllocPoint: 1,
        borrowAssetTokenAllocPoint: 1
    }

    await RewardDistributor.add(
        allocPoints,
        LendingPair.address,
        false
    )

    // approve distributor on manager
    await RewardDistributorManager["setDistributorStatus(address,bool)"](
        RewardDistributor.address, 
        true
    )

    const amountToDeposit = 1000
    await helper.depositCollateralAsset(kyle, amountToDeposit)

    // activate rewards
    await RewardDistributor.activatePendingRewards();

    await advanceNBlocks(10)

    // call accumulate rewards
    await RewardDistributor["accumulateReward(address,address)"](
        await LendingPair.wrappedCollateralAsset(),
        kyle.address
    )
    
    const expectedPendingReward = 566
    const kylePendingReward = await (await RewardDistributor.pendingRewardToken(0, kyle.address)).toNumber()
    expect(kylePendingReward).to.eq(expectedPendingReward)
  })

})