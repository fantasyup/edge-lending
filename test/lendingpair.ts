import { ethers, waffle } from "hardhat";
import { Signer } from "ethers";
import { expect, assert } from "chai";
import {
  Control as BSControl,
  IPriceOracle,
  JumpRateModelV2,
  LendingPair as BLendingPair,
  MockToken,
  Vault as BVault,
  WrapperToken,
} from "../types";
import { deployControl, deployInterestRateModel, deployLendingPair, deployMockPriceOracle, deployMockToken, deployVault, deployWrappedToken } from "../helpers/contracts";

// list of accounts
let accounts: Signer[];

let Vault: BVault;
let LendingPair: BLendingPair;
let Control: BSControl;
let MockPriceOracle: IPriceOracle;
let BorrowAsset: MockToken;
let CollateralAsset: MockToken;
let BorrowAssetDepositWrapperToken: WrapperToken;
let InterestRateModel: JumpRateModelV2;

let admin: string; // account used in deploying
let bob: string;
let frank: string;
let frankSigner: Signer;
let alice: string;

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

// let depositBorrowAsset: any
// let depositCollateralAsset: any

describe("LendingPair", async function () {
  before(async function () {
    accounts = await ethers.getSigners();
    frankSigner = accounts[2];
    ([
      admin,
      bob,
      frank,
      alice
    ] = await Promise.all(accounts.slice(0, 4).map(x => x.getAddress())))

    Control = await deployControl()
    Vault = await deployVault()
    LendingPair = await deployLendingPair()
    MockPriceOracle = await deployMockPriceOracle()
    BorrowAsset = await deployMockToken()
    CollateralAsset = await deployMockToken()
    BorrowAssetDepositWrapperToken = await deployWrappedToken()
    InterestRateModel = await deployInterestRateModel(
      "30000000000000000",
      "52222222222200000",
      "70",
      "1000000000000000000",
      admin
    )

    // initialize vault 
    await Vault.initialize(flashLoanRate, admin);
  });

  it("initialize", async function () {
    const initialExchangeRateMantissa = "1000000000000000000"
    const reserveFactorMantissa = "500000000000000000"

    await LendingPair.initialize(
      Control.address,
      MockPriceOracle.address,
      Vault.address,
      BorrowAsset.address,
      CollateralAsset.address,
      InterestRateModel.address,
      initialExchangeRateMantissa,
      reserveFactorMantissa,
      BorrowAssetDepositWrapperToken.address
    );

  });

  describe("lending pair actions", async function() {
    const amountToDeposit = 1000

    it("depositBorrowAsset", async function() {
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
          }
        )
      );

      // check admin lending pair deposit credited properly
      expect(
        await (await LendingPair.principalBalance(admin)).toNumber()
      ).to.eq(amountToDeposit)

      // wrapper token balance minted on deposit of borrow asset
      expect(
        await BorrowAssetDepositWrapperToken.balanceOf(admin)
      ).to.eq(amountToDeposit)

      // check that the lending pair account was properly credited with shares
      expect(
        await (await Vault.balanceOf(BorrowAsset.address, LendingPair.address)).toNumber()
      ).to.eq(amountToDeposit * 2)

      // check ERC20 balance of vault that it is properly credited
      expect(
        await (await BorrowAsset.balanceOf(Vault.address)).toNumber()
      ).to.eq(amountToDeposit * 2)
    })

    it("depositCollateral", async function() {
      await Promise.all(
        [admin, frank].map(
          async (address) => {
            // deposit collateral asset
            await expect(
              await depositCollateralAsset(LendingPair, address, amountToDeposit)
            ).to.emit(LendingPair, "Deposit")

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

    it("borrow", async function() {
      // frank will like to borrow 100 of borrow asset after depositing 1000 collateral
      const sharesToBorrow = 100
      const currentFrankBorrowAssetBalance = await (await Vault.balanceOf(BorrowAsset.address, frank)).toNumber()
      const currentLendingPairBorrowAssetBalance = await (await Vault.balanceOf(BorrowAsset.address, LendingPair.address)).toNumber()
      
      await expect(
        await LendingPair.connect(await ethers.getSigner(frank)).borrow(sharesToBorrow)
      ).to.emit(LendingPair, 'Borrow').withArgs(frank, sharesToBorrow)
      
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

      // pay part of it 
      const partRepayAmount = await (await LendingPair.accountBorrows(frank)).principal.toNumber() /  2

      // repay part 
      await expect(
        await LendingPair.connect(frankSigner).repay(partRepayAmount)
      ).to.emit(LendingPair, 'Repay').withArgs(LendingPair.address,BorrowAsset.address, frank, frank, partRepayAmount)

      // check 

      // repay everything
      await expect(
        await LendingPair.connect(frankSigner).repay(0)
      ).to.emit(LendingPair, 'Repay')
      


    })



  })  

});
