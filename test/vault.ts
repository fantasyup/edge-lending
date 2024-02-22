import { ethers, waffle } from "hardhat";
import { Signer } from "ethers";
import { expect, assert } from "chai";
import { MockToken, Vault as BVault } from "../types"

describe("Vault", async function () {
  let accounts: Signer[];
  // let 
  let Vault: BVault
  let MockToken: MockToken
  let userAcc: string
  let anotherUserAcc: string
  let thirdUser: string

  const flashLoanRate = ethers.utils.parseUnits('0.05', 18)
  const BASE = ethers.utils.parseUnits('1', 18)

  before(async function () {
    accounts = await ethers.getSigners();

    userAcc = await accounts[0].getAddress()
    anotherUserAcc = await accounts[1].getAddress()
    thirdUser = await accounts[3].getAddress()

    const VaultFactory = await ethers.getContractFactory('Vault');
    const token = await ethers.getContractFactory('MockToken');

    Vault = await VaultFactory.deploy() as BVault;
    MockToken = await token.deploy() as MockToken;

  });

  it("initialize", async function () {
    await Vault.initialize(flashLoanRate, userAcc)

    expect(await Vault.flashLoanRate()).to.eq(flashLoanRate);
    expect(await Vault.blackSmithTeam()).to.eq(userAcc);
  });

  it("proxiableUUID", async function() {
    let messageBytes = ethers.utils.toUtf8Bytes("org.blacksmith.contracts.blacksmithvault.implementation");
    const hash = ethers.utils.keccak256(messageBytes)
    expect(
      (await Vault.proxiableUUID()).toString()
    ).to.eq(hash.toString())
  })

  describe('\t - vault actions', function() {
    const amountToDeposit = 100

    it("deposit", async function() {
      await MockToken.setBalanceTo(userAcc, 1000)
      await MockToken.approve(Vault.address, 100)
      expect(
        await Vault.deposit(MockToken.address, userAcc, userAcc, amountToDeposit)
      ).to.emit(Vault, 'Deposit')
      .withArgs(MockToken.address, userAcc, userAcc, amountToDeposit, amountToDeposit)

      expect(
        await (await Vault.balanceOf(MockToken.address, userAcc)).toNumber()
      ).eq(amountToDeposit)

      expect(
        (await Vault.totals(MockToken.address)).toNumber()
      ).eq(amountToDeposit)
    })

    it("transfer", async function() {
      const currentBalance = (await Vault.balanceOf(MockToken.address, userAcc)).toNumber()
      const sharesToTransfer = 5
      const remainingShareBalance = currentBalance - sharesToTransfer
      const currentTotal = (await Vault.totals(MockToken.address)).toNumber()
      expect(
        await Vault.transfer(MockToken.address, anotherUserAcc, sharesToTransfer)
      ).to.emit(Vault, 'Transfer')
      .withArgs(MockToken.address, userAcc, anotherUserAcc, sharesToTransfer)

      expect(
        await (await Vault.balanceOf(MockToken.address, userAcc)).toNumber()
      ).eq(remainingShareBalance)

      expect(
        await (await Vault.balanceOf(MockToken.address, anotherUserAcc)).toNumber()
      ).eq(sharesToTransfer)

      expect(
        (await Vault.totals(MockToken.address)).toNumber()
      ).eq(currentTotal)
    })

    it("withdraw", async function() {
      const currentTotals = (await Vault.totals(MockToken.address)).toNumber()
      const currentBalance = (await Vault.balanceOf(MockToken.address, userAcc)).toNumber()
      expect(
        await Vault.withdraw(MockToken.address, userAcc, userAcc, currentBalance)
      ).to.emit(Vault, 'Withdraw')
      .withArgs(MockToken.address, userAcc, userAcc, currentBalance, currentBalance)

      expect(
        await (await Vault.balanceOf(MockToken.address, userAcc)).toNumber()
      ).eq(0)

      expect(
        (await Vault.totals(MockToken.address)).toNumber()
      ).eq(currentTotals - currentBalance)
    })

    it("maxFlashLoan", async function() {
      const currentTotals = (await Vault.totals(MockToken.address)).toNumber()      
      expect(
        await (await Vault.maxFlashLoan(MockToken.address)).toNumber()
      ).eq(currentTotals)
    })

    it("flashFee", async function() {
      const amountToFlashLoan = (await Vault.totals(MockToken.address))
      const expectedFlashFee = flashLoanRate.mul(amountToFlashLoan).div(BASE)

      expect(
        await (await Vault.flashFee(MockToken.address, amountToFlashLoan)).toNumber()
      ).eq(expectedFlashFee.toNumber())
    })
  })

  describe('\t - math', function() {
    it("calculates the shares correctly", async function() {
      
    })
  })

  describe('\t - admin functions', function() {
    it("updateFlashloanRate", async function() {
      const newFlashLoanRate = ethers.utils.parseUnits('0.05', 18)

      await expect(
        Vault.connect(accounts[1]).updateFlashloanRate(newFlashLoanRate)
      ).to.be.revertedWith('ONLY_BLACK_SMITH_TEAM')

      await Vault.updateFlashloanRate(newFlashLoanRate)

      expect(await Vault.flashLoanRate()).to.eq(newFlashLoanRate);
    })
    
    it("transferToNewTeam", async function() {
      await expect(
        Vault.connect(accounts[1]).transferToNewTeam(thirdUser)
      ).to.be.revertedWith('ONLY_BLACK_SMITH_TEAM')

      await expect(
        Vault.transferToNewTeam(ethers.constants.AddressZero)
      ).to.be.revertedWith('INVALID_NEW_TEAM')

      await Vault.transferToNewTeam(thirdUser)

      expect(await Vault.blackSmithTeam()).to.eq(thirdUser);

    })
  })

});
