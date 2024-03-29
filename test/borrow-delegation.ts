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
        const amountToDelegate = 50
        await helper.delegateBorrowWithSignedMessage(DebtToken, frank, alice, amountToDelegate )

        // assert that alice now has 50 
        expect(await DebtToken.borrowAllowance(frank.address, alice.address)).to.eq(amountToDelegate)
        
        const aliceBalancePriorToBorrow = await (await Vault.balanceOf(BorrowAsset.address, alice.address)).toNumber()
        // alice can now borrow using frank collateral
        const initialAmountToBorrow = 10
        await LendingPair.connect(alice.signer).borrow(initialAmountToBorrow, frank.address)

        expect(await DebtToken.borrowAllowance(frank.address, alice.address)).to.eq(amountToDelegate - initialAmountToBorrow)

        const aliceBalanceAfterBorrow = (await Vault.balanceOf(BorrowAsset.address, alice.address)).toNumber()
        // ensure that alice balance in vault increases by borrow amount
        expect(aliceBalanceAfterBorrow).to.eq(aliceBalancePriorToBorrow + initialAmountToBorrow)
        // ensure that the debt is allocated to frank
        expect((await DebtToken.balanceOf(frank.address)).toNumber()).to.gte(initialAmountToBorrow)

        // admin cannot borrow because
        // frank didn't give her borrow allowance
        await expect(LendingPair.borrow(10, frank.address)).to.be.revertedWith('')

        // alice cannot borrow more than the borrow
        // allowance frank gave her
        await expect(LendingPair.connect(alice.signer).borrow(100, frank.address)).to.revertedWith('')        
    })
})
