import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import {
  IPriceOracle,
  JumpRateModelV2,
  LendingPair as BLendingPair,
  MockToken,
  Vault as BVault,
  WrapperToken,
  LendingPairHelper as BLendingPairHelper
} from "../types";
import { 
  deployInterestRateModel,
  deployLendingPair,
  deployLendingPairHelper,
  deployMockPriceOracle,
  deployMockToken,
  deployVault,
  deployWrappedToken
} from "../helpers/contracts";

// list of accounts
let accounts: Signer[];

let Vault: BVault;
let LendingPair: BLendingPair;
let MockPriceOracle: IPriceOracle;
let BorrowAsset: MockToken;
let CollateralAsset: MockToken
let BorrowAssetDepositWrapperToken: WrapperToken
let DebtWrapperToken: WrapperToken
let CollateralWrapperToken: WrapperToken
let InterestRateModel: JumpRateModelV2;
let LendingPairHelper: BLendingPairHelper

let admin: string; // account used in deploying
let bob: string;
let frank: string;
let alice: string;
let james: string;

let frankSigner: Signer;

// flash loan rate
const flashLoanRate = ethers.utils.parseUnits("0.05", 18)
const BASE = ethers.utils.parseUnits("1", 18)

async function depositInVault(
  asset: MockToken,
  account: Signer,
  amountToDeposit: number
) {
  const addr = await account.getAddress()
  await asset.connect(account).setBalanceTo(addr, amountToDeposit)
  await asset.connect(account).approve(Vault.address, amountToDeposit)
  await (await Vault.connect(account).deposit(asset.address, addr, addr, amountToDeposit)).wait()
}

async function depositBorrowAsset(
  lendingPair: BLendingPair,
  account: string,
  amountToDeposit: number
) {
  const signer = await ethers.getSigner(account)

  await depositInVault(BorrowAsset, signer, amountToDeposit)
  // approve 
  await Vault.connect(signer).approveContract(lendingPair.address, true);
  const userShareBalance = await (await Vault.balanceOf(BorrowAsset.address, account)).toNumber()

  return await LendingPair.connect(signer).depositBorrowAsset(account, userShareBalance)
}

async function depositCollateralAsset(
  lendingPair: BLendingPair,
  account: string,
  amountToDeposit: number
) {
  const signer = await ethers.getSigner(account)

  await depositInVault(CollateralAsset, signer, amountToDeposit)
  // approve 
  await Vault.connect(signer).approveContract(lendingPair.address, true);
  return await LendingPair.connect(signer).depositCollateral(account, amountToDeposit)
}

describe("LendingPair", async function () {
  before(async function () {
    accounts = await ethers.getSigners();
    frankSigner = accounts[2];
    ([
      admin,
      bob,
      frank,
      alice,
      james
    ] = await Promise.all(accounts.slice(0, 5).map(x => x.getAddress())))

    Vault = await deployVault()
    LendingPair = await deployLendingPair()
    MockPriceOracle = await deployMockPriceOracle(BigNumber.from(10).pow(18))
    BorrowAsset = await deployMockToken()
    CollateralAsset = await deployMockToken()
    BorrowAssetDepositWrapperToken = await deployWrappedToken()
    DebtWrapperToken = await deployWrappedToken()
    CollateralWrapperToken = await deployWrappedToken()
    InterestRateModel = await deployInterestRateModel(
      "30000000000000000",
      "52222222222200000",
      "70",
      "1000000000000000000",
      admin
    )
    LendingPairHelper = await deployLendingPairHelper(Vault)


    // initialize vault 
    await Vault.initialize(flashLoanRate, admin);
  });

  it("initialize", async function () {
    const initialExchangeRateMantissa = "1000000000000000000"
    const reserveFactorMantissa = "500000000000000000"
    // 150%
    const collateralFactor = BigNumber.from(15).mul(BigNumber.from(10).pow(17))
    // 0.005%
    const liquidationFee = BigNumber.from(5).mul(BigNumber.from(10).pow(16))

    await LendingPair.initialize(
      admin,
      MockPriceOracle.address,
      Vault.address,
      BorrowAsset.address,
      CollateralAsset.address,
      {
        interestRate: InterestRateModel.address,
        initialExchangeRateMantissa: initialExchangeRateMantissa,
        reserveFactorMantissa,
        collateralFactor,
        wrappedBorrowAsset: BorrowAssetDepositWrapperToken.address,
        liquidationFee,
        debtToken: DebtWrapperToken.address
      },
      CollateralWrapperToken.address
    );

  });

  describe("lending pair - dependent actions", async function() {
    const amountToDeposit = 1000

    it('depositBorrowAsset - fails without enough vault balance', async function() {
      const signer = await ethers.getSigner(bob)
      await Vault.connect(signer).approveContract(LendingPair.address, true);
      await expect(
        LendingPair.connect(signer).depositBorrowAsset(bob, amountToDeposit)
      ).to.be.revertedWith('')

    })

    it("depositBorrowAsset", async function() {
      await expect(
        LendingPair.depositBorrowAsset(ethers.constants.AddressZero, amountToDeposit)
      ).to.be.revertedWith('IDB')

      await Promise.all(
        [admin, bob].map(
          async (address) => {
            // deposit collateral asset
            await expect(
              await depositBorrowAsset(LendingPair, address, amountToDeposit)
            ).to.emit(LendingPair, "Deposit")

            // check balances of depositors
            expect(
              await (await LendingPair.principalBalance(address)).toNumber()
            ).to.eq(amountToDeposit)
            // wrapper token balance minted on deposit of borrow asset
            expect(
              await BorrowAssetDepositWrapperToken.balanceOf(address)
            ).to.eq(amountToDeposit)
          }
        )
      );

      // check that the lending pair account was properly credited with shares
      expect(
        await (await Vault.balanceOf(BorrowAsset.address, LendingPair.address)).toNumber()
      ).to.eq(amountToDeposit * 2)

      // check ERC20 balance of vault that it is properly credited
      expect(
        await (await BorrowAsset.balanceOf(Vault.address)).toNumber()
      ).to.eq(amountToDeposit * 2)

    })

    it('depositCollateral - fails without enough vault balance', async function() {
      const signer = await ethers.getSigner(bob)
      await Vault.connect(signer).approveContract(LendingPair.address, true);
      await expect(
        LendingPair.connect(signer).depositCollateral(bob, amountToDeposit)
      ).to.be.revertedWith('')

    })

    it("depositCollateral", async function() {
      await Promise.all(
        [admin, frank].map(
          async (address) => {
            // deposit collateral asset
            await expect(
              await depositCollateralAsset(LendingPair, address, amountToDeposit)
            ).to.emit(LendingPair, "Deposit")
              .withArgs(
                LendingPair.address,
                CollateralAsset.address,
                address,
                address,
                amountToDeposit
              )

            // check balances of depositors
            expect(
              await (await LendingPair.collateralOfAccount(address)).toNumber()
            ).to.eq(amountToDeposit)
          }
        )
      );

      // check that the lending pair account was properly credited with shares
      expect(
        await (await Vault.balanceOf(CollateralAsset.address, LendingPair.address)).toNumber()
      ).to.eq(amountToDeposit * 2)

      // check ERC20 balance of vault that it is properly credited
      expect(
        await (await CollateralAsset.balanceOf(Vault.address)).toNumber()
      ).to.eq(amountToDeposit * 2)
    })
    
    it("borrow - fails when you try to borrow more than allowed", async function() {
      await expect(
        LendingPair.connect(await ethers.getSigner(frank)).borrow(1000000)
      ).to.revertedWith("BORROWING_MORE_THAN_ALLOWED")
    })

    it("borrow - fails when you try to borrow more than cash available in vault", async function() {
      // deposit 1,000,000
      await depositCollateralAsset(LendingPair, alice, 1000000)
      await expect(
        LendingPair.connect(await ethers.getSigner(alice)).borrow(5000)
      ).to.revertedWith("NOT_ENOUGH_TOKEN")
    })

    it("borrow", async function(){
        // frank will like to borrow 100 of borrow asset after depositing 1000 collateral
      const sharesToBorrow = 100
      const currentFrankBorrowAssetBalance = await (await Vault.balanceOf(BorrowAsset.address, frank)).toNumber()
      const currentLendingPairBorrowAssetBalance = await (await Vault.balanceOf(BorrowAsset.address, LendingPair.address)).toNumber()
      
      const borrowLimit: any = await LendingPairHelper.viewBorrowLimit(
        [LendingPair.address], frank
      )
      // 150% of collateral is required to open borrow position
      // 1000 * 0.666
      expect(borrowLimit[0].toNumber()).to.eq(666)

      await expect(
        await LendingPair.connect(await ethers.getSigner(frank)).borrow(sharesToBorrow)
      ).to.emit(LendingPair, 'Borrow').withArgs(frank, sharesToBorrow)

      const newBorrowLimit: any = await LendingPairHelper.viewBorrowedValue(
        [LendingPair.address], frank
      )
      // (opened borrow position)
      expect(newBorrowLimit[0].toNumber()).to.eq(100)

      // check debtToken balance
      expect((await DebtWrapperToken.balanceOf(frank)).toNumber()).to.eq(sharesToBorrow);
      
      const newFrankBorrowAssetBalance = await (await Vault.balanceOf(BorrowAsset.address, frank)).toNumber()
      const newLendingPairBorrowAssetBalance = await (await Vault.balanceOf(BorrowAsset.address, LendingPair.address)).toNumber()

      expect(newFrankBorrowAssetBalance).eq(currentFrankBorrowAssetBalance + sharesToBorrow)
      expect(newLendingPairBorrowAssetBalance).eq(currentLendingPairBorrowAssetBalance - sharesToBorrow)

      const accountBorrows = await LendingPair.accountBorrows(frank)
      // check frank account borrows
      expect(
        accountBorrows.principal.toNumber()
      ).to.eq(sharesToBorrow)

      // check total borrows for the borrow asset
      await expect(
        await (await LendingPair.totalBorrows()).toNumber()
      ).to.eq(sharesToBorrow)
    })

    it("repay - fails if you are trying to pay more than owed", async function() {
      // bob has no borrows
      await expect(
        LendingPair.connect(await ethers.getSigner(bob)).repay(100)
      ).to.revertedWith("PAYING_MORE_THAN_OWED")
    })

    it("repay", async function() {
      // deposit borrow asset into vault for repay purpose
      await depositInVault(BorrowAsset, frankSigner, 10000)
      const frankVaultBalance = await (await Vault.balanceOf(BorrowAsset.address, frank)).toNumber()
      const LendingPairBalance = await (await Vault.balanceOf(BorrowAsset.address, LendingPair.address)).toNumber()
      // pay part of it 
      const currentRepayAmount = await (await LendingPair.accountBorrows(frank)).principal.toNumber()
      const partRepayAmount =  currentRepayAmount /  2

      // repay part 
      await expect(
        await LendingPair.connect(frankSigner).repay(partRepayAmount)
      ).to.emit(LendingPair, 'Repay')
        .withArgs(
          LendingPair.address,
          BorrowAsset.address,
          frank,
          frank,
          partRepayAmount
        )
      // burns half of debt tokens
      expect((await DebtWrapperToken.balanceOf(frank)).toNumber()).to.eq(partRepayAmount)

      // check current borrow balance
      const newBorrowBalance = await (await LendingPair.accountBorrows(frank)).principal.toNumber()
      expect(newBorrowBalance).to.be.eq(partRepayAmount)

      // repay everything
      await expect(
        await LendingPair.connect(frankSigner).repay(0)
      ).to.emit(LendingPair, 'Repay')

      const updatedBorrowBalance = await (await LendingPair.accountBorrows(frank)).principal.toNumber()
      expect(updatedBorrowBalance).to.be.eq(0)

      const updatedFrankVaultBalance = await (await Vault.balanceOf(BorrowAsset.address, frank)).toNumber()
      const updatedLendingPairBalance = await (await Vault.balanceOf(BorrowAsset.address, LendingPair.address)).toNumber()
      // confirm that the user account has been debited for the amount
      expect(frankVaultBalance - updatedFrankVaultBalance >= currentRepayAmount).true
      // confirm the lending pair account increases
      expect(updatedLendingPairBalance - LendingPairBalance >= currentRepayAmount).true
      // burns debt token
      expect((await DebtWrapperToken.balanceOf(frank)).toNumber()).to.eq(0)
    })

    it("redeem - fails if you are trying to redeem more than your account", async function() {
      const currentWrapperTokenBalance = await (await BorrowAssetDepositWrapperToken.balanceOf(admin)).toNumber();
      await expect(
        LendingPair.redeem(admin, currentWrapperTokenBalance * 2)
      ).to.revertedWith('')
    })

    it("redeem", async function() {
      const lendingPairVaultBalance =  (await Vault.balanceOf(BorrowAsset.address, LendingPair.address)).toNumber()
      const userVaultBalance = (await Vault.balanceOf(BorrowAsset.address, admin)).toNumber()
      // admin wants to redeem deposit wrapper token for underlying share
      const currentWrapperTokenBalance = await (await BorrowAssetDepositWrapperToken.balanceOf(admin)).toNumber();
      const partRedeem = currentWrapperTokenBalance / 2

      // part redeem
      await expect(
        await LendingPair.redeem(admin, partRedeem)
      ).to.emit(LendingPair, 'Redeem')
        .withArgs(
          LendingPair.address,
          BorrowAsset.address,
          admin,
          admin,
          partRedeem,
          partRedeem
        )
      
      const newWrapperTokenBalance = await (await BorrowAssetDepositWrapperToken.balanceOf(admin)).toNumber();
      // console.log({ newWrapperTokenBalance })
      // console.log({ currentWrapperTokenBalance })
      expect(currentWrapperTokenBalance - newWrapperTokenBalance).to.be.eq(partRedeem)

      // full redeem
      await expect(
        await LendingPair.redeem(admin, 0)
      ).to.emit(LendingPair, 'Redeem')

      const updatedWrapperTokenBalance = await (await BorrowAssetDepositWrapperToken.balanceOf(admin)).toNumber();
      expect(updatedWrapperTokenBalance).to.be.eq(0)

      // LendingPair principal balance should be 0
      expect(await (await LendingPair.principalBalance(admin)).toNumber()).to.be.eq(0)
      // borrow wrapper asset should be zero
      expect(await (await BorrowAssetDepositWrapperToken.balanceOf(admin)).toNumber()).to.be.eq(0)
      
      // LendingPair vault balance should decrease after redeem
      const updatedLendingPairVaultBalance = (await Vault.balanceOf(BorrowAsset.address, admin)).toNumber()
      expect(lendingPairVaultBalance > updatedLendingPairVaultBalance).true
      // user vault balance should increase after withdrawal
      const updatedUserVaultBalance = (await Vault.balanceOf(BorrowAsset.address, admin)).toNumber()
      expect(updatedUserVaultBalance - userVaultBalance >= currentWrapperTokenBalance).true
      // console.log({ userVaultBalance })
    })

    it('withdrawCollateral', async function() {
      const jamesSigner = await ethers.getSigner(james)
      const connectedLendingPair = LendingPair.connect(jamesSigner)
      // deposit collateral
      await depositCollateralAsset(LendingPair, james, amountToDeposit)
      // borrow
      await connectedLendingPair.borrow(10)
      // james tries to withdraw his entire collateral
      await expect(
        connectedLendingPair.withdrawCollateral(amountToDeposit)
      ).to.be.revertedWith('EXCEEDS_ALLOWED')
      // can withdraw up to half of collateral
      const jamesVaultBalance = (await Vault.balanceOf(CollateralAsset.address, james)).toNumber()
      console.log({ jamesVaultBalance })
      const lendingPairVaultBalance = (await Vault.balanceOf(CollateralAsset.address, LendingPair.address)).toNumber()
      console.log({ lendingPairVaultBalance })

      await expect(
        await connectedLendingPair.withdrawCollateral(amountToDeposit / 2)
      ).to.emit(LendingPair, 'WithdrawCollateral').withArgs(
        james,
        amountToDeposit / 2
      )

      // check balances of user
      const updatedJamesVaultBalance = (await Vault.balanceOf(CollateralAsset.address, james)).toNumber()
      console.log({ updatedJamesVaultBalance })

      const updatedLendingPairVaultBalance = (await Vault.balanceOf(CollateralAsset.address, LendingPair.address)).toNumber()
      console.log({ updatedLendingPairVaultBalance })

      // repay
      await depositInVault(BorrowAsset, jamesSigner, 100)
      await connectedLendingPair.repay(10)

      // withdrawCollateral entire collateral
      await expect(
        await connectedLendingPair.withdrawCollateral(0)
      )
      
      expect((await LendingPair.collateralOfAccount(james)).toNumber()).to.eq(0)
      expect((await CollateralWrapperToken.balanceOf(james)).toNumber()).to.eq(0)
    })

  // describe("liquidate", async function() {
  //     it("liquidate - fail", async function() {
  //       await expect(
  //         LendingPair.liquidate(admin)
  //       ).to.revertedWith("NOT_LIQUIDATE_YOURSELF") 
  //     })

  //     it("liquidate - correctly", async function() {
  //       // deposit collateral
  //       await depositCollateralAsset(LendingPair, james, amountToDeposit)
  //       // borrow
  //       await LendingPair.connect(await ethers.getSigner(james)).borrow(500)
  //       // change price 
  //       // set oracle price to half
  //       await MockPriceOracle.setPrice(BigNumber.from(5).pow(18))

  //       // liquidate
  //       await depositInVault(BorrowAsset, await ethers.getSigner(admin), 800)

  //       await LendingPair.liquidate(james)

  //       // @TODO confirm proper checks

  //     })
  //   })
  // })  

  })

});
