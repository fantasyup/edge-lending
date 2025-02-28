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
        await helper.setAccountBalance(admin.signer, BorrowAsset, 10000)
        const depositVaultData = defaultAbiCoder.encode(
            ["address", "address", "int256"],
            [BorrowAsset.address, admin.address, 10000]
        )
        actions.push(LendingPairEdgeActions.VAULT_DEPOSIT)
        data.push(depositVaultData)

        // transfer in vault
        const transferVaultData = defaultAbiCoder.encode(
            ["address", "address", "int256"],
            [BorrowAsset.address, bob.address, 1]
        )
        actions.push(LendingPairEdgeActions.VAULT_TRANSFER)
        data.push(transferVaultData)

        // withdraw in vault
        const withdrawData = defaultAbiCoder.encode(
            ["address", "address", "int256"],
            [BorrowAsset.address, bob.address, 100]
        )
        actions.push(LendingPairEdgeActions.VAULT_WITHDRAW)
        data.push(withdrawData)

        await expect(LendingPair.edge(actions, data)).to.not.be.reverted
    })

    it('edge - pass parameters', async function() {
        const {
            Vault,
            CollateralAsset,
            BorrowAsset,
            LendingPair,
            BorrowWrapperToken,
            CollateralWrapperToken,
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
        const amountToDeposit = 10000

        // approve in vault
        const { v, r, s } = await helper.approveInVaultMessage(admin, LendingPair.address, true) 
        const approveContractData = defaultAbiCoder.encode(
            ["address", "address", "bool", "uint8","bytes32", "bytes32"],
            [admin.address, LendingPair.address, true, v, r, s]
        )
        actions.push(LendingPairEdgeActions.VAULT_APPROVE_CONTRACT)
        data.push(approveContractData)

        // deposit in borrow asset vault
        await helper.setAccountBalance(admin.signer, BorrowAsset, 50000)
        const depositBorrowAssetVaultData = defaultAbiCoder.encode(
            ["address", "address", "int256"],
            [BorrowAsset.address, admin.address, 10000]
        )
        actions.push(LendingPairEdgeActions.VAULT_DEPOSIT)
        data.push(depositBorrowAssetVaultData)

        // deposit borrow asset in lending pair
        const depositBorrowLendingPairData = defaultAbiCoder.encode(
            ["address", "int256"],
            [admin.address, -2]
        )
        actions.push(LendingPairEdgeActions.BORROW_ASSET_DEPOSIT)
        data.push(depositBorrowLendingPairData)
        
        // deposit in collateral asset vault
        await helper.setAccountBalance(admin.signer, CollateralAsset, 50000)
        const depositCollateralAssetVaultData = defaultAbiCoder.encode(
            ["address", "address", "int256"],
            [CollateralAsset.address, admin.address, 10000]
        )
        actions.push(LendingPairEdgeActions.VAULT_DEPOSIT)
        data.push(depositCollateralAssetVaultData)

        // deposit collateral in lending pair
        const depositCollateralLendingPairData = defaultAbiCoder.encode(
            ["address", "int256"],
            [admin.address, -2]
        )
        actions.push(LendingPairEdgeActions.COLLATERAL_DEPOSIT)
        data.push(depositCollateralLendingPairData)

        // Borrow 
        const amountToBorrow = 100
        const borrowLendingPairData = defaultAbiCoder.encode(
            ["address", "int256"],
            [admin.address, amountToBorrow]
        )
        actions.push(LendingPairEdgeActions.BORROW)
        data.push(borrowLendingPairData)

        // Repay
        const repayDepositBorrowAssetVaultData = defaultAbiCoder.encode(
            ["address", "address", "int256"],
            [BorrowAsset.address, admin.address, amountToBorrow]
        )
        actions.push(LendingPairEdgeActions.VAULT_DEPOSIT)
        data.push(repayDepositBorrowAssetVaultData)
        const repayLendingPairData = defaultAbiCoder.encode(
            ["address", "int256"],
            [admin.address, -2]
        )
        actions.push(LendingPairEdgeActions.REPAY)
        data.push(repayLendingPairData)

        // redeem
        const redeemLendingPairData = defaultAbiCoder.encode(
            ["address", "int256"],
            [admin.address, 1000]
        )

        actions.push(LendingPairEdgeActions.REDEEM)
        data.push(redeemLendingPairData)
        
        // redeem vault withdraw
        const redeemWithdrawData = defaultAbiCoder.encode(
            ["address", "address", "int256"],
            [BorrowAsset.address, admin.address, -2]
        )
        actions.push(LendingPairEdgeActions.VAULT_WITHDRAW)
        data.push(redeemWithdrawData)
        
        // withdraw collateral
        const withdrawCollateralLendingPairData = defaultAbiCoder.encode(
            ["int256"],
            [amountToDeposit]
        )

        actions.push(LendingPairEdgeActions.WITHDRAW_COLLATERAL)
        data.push(withdrawCollateralLendingPairData) 
        
        // withdraw colleral vault withdraw
        const collateralWithdrawData = defaultAbiCoder.encode(
            ["address", "address", "int256"],
            [CollateralAsset.address, admin.address, -2]
        )
        actions.push(LendingPairEdgeActions.VAULT_WITHDRAW)
        data.push(collateralWithdrawData)


        // await LendingPair.edge(actions, data);
        await expect(LendingPair.edge(actions, data)).to.not.be.reverted
        // await LendingPair.edge(secondActions, secondData)
        // await expect(LendingPair.edge(secondActions, secondData)).to.not.be.reverted

    })
})