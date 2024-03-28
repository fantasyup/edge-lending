import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import { runTestSuite, setupAndInitLendingPair, TestVars } from "./lib";

const initialExchangeRateMantissa = BigNumber.from("1000000000000000000")
const reserveFactorMantissa = BigNumber.from("500000000000000000")
  // 150%
const collateralFactor = BigNumber.from(15).mul(BigNumber.from(10).pow(17))
// 0.005%
const liquidationFee = BigNumber.from(5).mul(BigNumber.from(10).pow(16))

runTestSuite("Borrow Delegation", (vars: TestVars) => {
    it('borrow delegation', async() => {
        const {
            Vault,
            BorrowAsset,
            LendingPair,
            accounts: [admin, bob, frank, alice],
            LendingPairHelper,
            DebtToken
        } = vars
      
        const helper = await setupAndInitLendingPair(
            vars,
            {
                account: admin,
                initialExchangeRateMantissa,
                reserveFactorMantissa,
                collateralFactor,
                liquidationFee,
                accountsToApproveInVault: [admin, bob, frank]
            }
        )
        
        // frank deposit collateral
        await helper.depositCollateralAsset(frank, 1000)
        // bob deposits borrow asset
        await helper.depositBorrowAsset(bob, 1000)
        
        // frank approves alice to be able to borrow on his
        // behalf

        // we want alice to be
        // able to borrow using frank collateral


    
    })

})
