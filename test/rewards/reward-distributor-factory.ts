import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import { runTestSuite, setupAndInitLendingPair, TestVars, defaultLendingPairInitVars, currentTimestamp } from "../lib";
import { deployMockDistributorManager, deployUUPSProxy } from "../../helpers/contracts";
import { ContractId } from "../../helpers/types";
import { RewardDistributor } from "../../types";

runTestSuite("RewardDistributorFactory", (vars: TestVars) => {

    it("setDistributorImplementation", async () => {
        const {
            RewardDistributorFactory,
            accounts: [admin, bob]
        } = vars

        await expect(
            RewardDistributorFactory.connect(bob.signer).setDistributorImplementation(ethers.constants.AddressZero)
        ).to.revertedWith('ONLY_OWNER') 
        
        await expect(
            RewardDistributorFactory.setDistributorImplementation(ethers.constants.AddressZero)
        ).to.revertedWith('INVALID_IMPL')

        await expect(
            await RewardDistributorFactory.setDistributorImplementation(bob.address)
        ).to.emit(RewardDistributorFactory, 'NewImpl')

    })

    it('createRewardDistributor', async() => {
        const {
            RewardDistributorFactory,
            BorrowAsset,
            accounts: [admin, bob]
        } = vars
        
        const startTimestamp = currentTimestamp();

        const tx = await(await RewardDistributorFactory.createRewardDistributor(
            BorrowAsset.address,
            10,
            startTimestamp,
            bob.address
        )).wait()

       const distributor = await ethers.getContractAt(
           ContractId.RewardDistributor, 
           tx.events![1]!.args!.distributor
        ) as RewardDistributor

        expect(
           await distributor.guardian()
        ).to.eq(bob.address)

        expect(
            await (await distributor.startTimestamp()).toNumber()
        ).to.eq(startTimestamp)
    })


})