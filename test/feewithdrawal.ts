import { ethers } from "hardhat";
import { expect } from "chai";

import { runTestSuite, TestVars } from "./lib";
import { deployUUPSProxy, deployContract } from "../helpers/contracts";
import { ContractId } from "../helpers/types";
import { FeeWithdrawal } from "../types";

runTestSuite("FeeWithdrawal", async (vars: TestVars) => {
    it('proxiableUUID & updateCode', async () => {
        const {
            FeeWithdrawal,
            accounts: [admin, blackSmithTeam]
        } = vars;

        const uups = await deployUUPSProxy();
        await uups.initializeProxy(FeeWithdrawal.address);
        const proxiedFeeWithdrawl = await ethers.getContractAt(
            ContractId.FeeWithdrawal,
            uups.address
        );
        await proxiedFeeWithdrawl.initialize(admin.address);

        // check current impl
        expect(await proxiedFeeWithdrawl.getCodeAddress()).to.eq(FeeWithdrawal.address)

        // check proxiable UUID string
        let msgBytes = ethers.utils.toUtf8Bytes(
            "org.edge.contracts.edgehelper.feewithdrawal"
        )
        const hash = ethers.utils.keccak256(msgBytes);
        expect(
            (await proxiedFeeWithdrawl.proxiableUUID()).toString()
        ).to.eq(hash.toString());

        // check updateCode
        const newFeeWithdrawl = await deployContract<FeeWithdrawal>(ContractId.FeeWithdrawal, [
            admin.address,
            await FeeWithdrawal.vault(),
            await FeeWithdrawal.receiver(),
            await FeeWithdrawal.edgeToken(),
            await FeeWithdrawal.WETH(),
            await FeeWithdrawal.uniswapRouter()
        ])

        await proxiedFeeWithdrawl.updateCode(newFeeWithdrawl.address)
        expect(await proxiedFeeWithdrawl.getCodeAddress()).to.eq(newFeeWithdrawl.address);
    })
})
