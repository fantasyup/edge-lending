import { ethers, waffle } from "hardhat";
import { expect, assert } from "chai";
import { runTestSuite, setupAndInitLendingPair, TestVars, defaultLendingPairInitVars } from "./lib";
import { LendingPairEdgeActions } from "../helpers/types";
import { defaultAbiCoder } from "@ethersproject/abi";

runTestSuite("LendingPair - Edge", (vars: TestVars) => {
    it("edge - actions", async() => {
        const {
            Vault,
            BorrowAsset,
            LendingPair,
            accounts: [admin, bob, frank],
            LendingPairHelper,
            DebtToken
        } = vars
      
        const helper = await setupAndInitLendingPair(
            vars,
            {...defaultLendingPairInitVars, account: admin }      
        )

        const actions = []
        const data = []

        // approve in vault
        const { v, r, s } = await helper.approveInVaultMessage(admin, LendingPair.address, true) 
        const approveContractData = defaultAbiCoder.encode(
            ["address", "address", "bool", "uint8","bytes32", "bytes32"],
            [admin.address, LendingPair.address, true, v, r, s]
        )
        actions.push(LendingPairEdgeActions.VAULT_APPROVE_CONTRACT)
        data.push(approveContractData)

        // deposit in vault
        
        
        await LendingPair.edge(actions, data)

        
    })
})