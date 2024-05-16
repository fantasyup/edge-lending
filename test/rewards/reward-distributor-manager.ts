import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import { runTestSuite, setupAndInitLendingPair, TestVars, defaultLendingPairInitVars } from "../lib";

runTestSuite("RewardDistributionManager", (vars: TestVars) => {
    it("initialize", async () => {
        const {
            RewardDistributorManager,
            accounts: [ admin, bob ]
        } = vars

        await expect(
            RewardDistributorManager.initialize(ethers.constants.AddressZero)
        ).to.be.reverted

        await expect(await RewardDistributorManager["initialize(address)"](bob.address)).to.emit(RewardDistributorManager, 'Initialized')

        expect(await RewardDistributorManager.owner()).to.eq(bob.address)
    })

    it("setDistributorStatus", async () => {
        const {
            RewardDistributorManager,
            RewardDistributor,
            accounts: [ admin, bob ]
        } = vars

        await RewardDistributorManager.initialize(admin.address);

        await expect(
            RewardDistributorManager.connect(bob.signer).setDistributorStatus(RewardDistributor.address, true)
        ).to.be.revertedWith("ONLY_OWNER")
        
        await expect(await RewardDistributorManager.setDistributorStatus(RewardDistributor.address, true)).to.emit(RewardDistributorManager, 'ApprovedDistributor');

        expect(await RewardDistributorManager.approvedDistributors(RewardDistributor.address)).to.eq(true)
    })

    it("activateReward", async () => {
        const {
            RewardDistributorManager,
            RewardDistributor,
            accounts: [ admin, bob ]
        } = vars

        await RewardDistributorManager.initialize(admin.address);
        await RewardDistributorManager.setDistributorStatus(bob.address, true)

        await expect(
            RewardDistributorManager.activateReward(admin.address)
        ).to.be.revertedWith('ONLY_APPROVED_DISTRIBUTOR')
        
        await expect(
            await RewardDistributorManager.connect(bob.address).activateReward(admin.address)
        ).to.emit(RewardDistributorManager, 'AddReward')

        expect((await RewardDistributorManager.tokenRewardToDistributors(
            admin.address, 0
        )).length).to.eq(bob.address)
    })

    it('removeReward', async () => {
        const {
            RewardDistributorManager,
            RewardDistributor,
            accounts: [ admin, bob ]
        } = vars


    })


    describe('upgrade', async() => {

    })


})