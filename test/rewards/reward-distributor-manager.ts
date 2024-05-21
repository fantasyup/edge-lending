import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import { runTestSuite, setupAndInitLendingPair, TestVars, defaultLendingPairInitVars } from "../lib";
import { deployMockDistributorManager, deployUUPSProxy } from "../../helpers/contracts";
import { ContractId } from "../../helpers/types";

runTestSuite("RewardDistributorManager", (vars: TestVars) => {
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
            await RewardDistributorManager.connect(bob.signer).activateReward(admin.address)
        ).to.emit(RewardDistributorManager, 'AddReward')

        expect((await RewardDistributorManager.tokenRewardToDistributors(
            admin.address, 0
        ))).to.eq(bob.address)
    })

    it('removeReward', async () => {
        const {
            RewardDistributorManager,
            RewardDistributor,
            accounts: [ admin, bob ]
        } = vars

        await RewardDistributorManager.initialize(admin.address);
        await RewardDistributorManager.setDistributorStatus(bob.address, true)
        await RewardDistributorManager.connect(bob.signer).activateReward(admin.address)
        await expect(
            await RewardDistributorManager.removeReward(admin.address, bob.address)
        ).to.emit(RewardDistributorManager, 'RemoveReward')

        // @TODO include test with loop
    })

    it('acceptOwnerTransfer & commitOwnerTransfer', async () => {
        const {
            RewardDistributorManager,
            RewardDistributor,
            accounts: [ admin, bob ]
        } = vars

        await RewardDistributorManager.initialize(admin.address);

        await expect(await RewardDistributorManager["commitOwnerTransfer(address)"](
            bob.address
        )).to.emit(RewardDistributorManager, 'TransferControl')

        await expect(
            await RewardDistributorManager.connect(bob.signer).acceptOwnerTransfer()
        ).to.emit(RewardDistributorManager, 'OwnershipAccepted')

    })

    it.only('proxiableUUID & updateCode', async() => {
        const {
            RewardDistributorManager,
            accounts: [ admin, bob ]
        } = vars

        const uups = await deployUUPSProxy();
        uups.initializeProxy(RewardDistributorManager.address)
        
        const manager = await ethers.getContractAt(ContractId.RewardDistributorManager, uups.address)

        await manager.initialize(admin.address);

        const messageBytes = ethers.utils.toUtf8Bytes(
            "org.edge.contracts.edgerewards.implementation"
        );

        expect(
            await manager.proxiableUUID()
        ).to.eq(ethers.utils.keccak256(messageBytes))

        // update code
        const newManager = await deployMockDistributorManager()

        await expect(
            manager.connect(admin.signer).updateCode(newManager.address)
        ).to.not.be.reverted

        expect(
            await manager.getCodeAddress()
        ).to.eq(newManager.address)
    })

})