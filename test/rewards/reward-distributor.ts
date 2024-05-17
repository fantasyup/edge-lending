import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import { runTestSuite, setupAndInitLendingPair, TestVars, defaultLendingPairInitVars } from "../lib";
import { deployMockDistributorManager, deployUUPSProxy } from "../../helpers/contracts";

function currentTimestamp() {
    return Math.floor(Date.now() / 1000)
}

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
        bob.address
      )
    ).to.emit(RewardDistributor, 'Initialized')


  })

  it('add', async () => {
    const {
        RewardDistributor,
        BorrowAsset,
        accounts: [admin, bob, kyle]
      } = vars

      await
  })

})