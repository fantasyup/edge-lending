import { ethers, waffle } from "hardhat";
import { Signer } from "ethers";
import { expect, assert } from "chai";
import { MockToken, Vault as BVault } from "../types";

describe("Vault", async function () {
  let accounts: Signer[];
  let Vault: BVault;
  let MockToken: MockToken;

  // users
  let admin: string; // account used in deploying
  let bob: string;
  let alice: string;
  
  const flashLoanRate = ethers.utils.parseUnits("0.05", 18);
  const BASE = ethers.utils.parseUnits("1", 18);

  before(async function () {
    accounts = await ethers.getSigners();

    admin = await accounts[0].getAddress();
    bob = await accounts[1].getAddress();
    alice = await accounts[3].getAddress();

    const VaultFactory = await ethers.getContractFactory("Vault");
    const token = await ethers.getContractFactory("MockToken");

    Vault = (await VaultFactory.deploy()) as BVault;
    MockToken = (await token.deploy()) as MockToken;
  });

  it("initialize", async function () {
    await Vault.initialize(flashLoanRate, admin);

    expect(await Vault.flashLoanRate()).to.eq(flashLoanRate);
    expect(await Vault.blackSmithTeam()).to.eq(admin);
  });

  it("proxiableUUID", async function () {
    let messageBytes = ethers.utils.toUtf8Bytes(
      "org.blacksmith.contracts.blacksmithvault.implementation"
    );
    const hash = ethers.utils.keccak256(messageBytes);
    expect((await Vault.proxiableUUID()).toString()).to.eq(hash.toString());
  });

  describe("\t - vault actions", function () {
    const amountToDeposit = 100;

    it("deposit", async function () {
      await MockToken.setBalanceTo(admin, 1000);
      await MockToken.approve(Vault.address, 100);
      expect(
        await Vault.deposit(MockToken.address, admin, admin, amountToDeposit)
      )
        .to.emit(Vault, "Deposit")
        .withArgs(
          MockToken.address,
          admin,
          admin,
          amountToDeposit,
          amountToDeposit
        );

      expect(
        await (await Vault.balanceOf(MockToken.address, admin)).toNumber()
      ).eq(amountToDeposit);

      expect((await Vault.totals(MockToken.address)).toNumber()).eq(
        amountToDeposit
      );
    });

    it("transfer", async function () {
      const currentBalance = (
        await Vault.balanceOf(MockToken.address, admin)
      ).toNumber();
      const sharesToTransfer = 5;
      const remainingShareBalance = currentBalance - sharesToTransfer;
      const currentTotal = (await Vault.totals(MockToken.address)).toNumber();
      expect(await Vault.transfer(MockToken.address, bob, sharesToTransfer))
        .to.emit(Vault, "Transfer")
        .withArgs(MockToken.address, admin, bob, sharesToTransfer);

      expect(
        await (await Vault.balanceOf(MockToken.address, admin)).toNumber()
      ).eq(remainingShareBalance);

      expect(
        await (await Vault.balanceOf(MockToken.address, bob)).toNumber()
      ).eq(sharesToTransfer);

      expect((await Vault.totals(MockToken.address)).toNumber()).eq(
        currentTotal
      );
    });

    it("withdraw", async function () {
      const currentTotals = (await Vault.totals(MockToken.address)).toNumber();
      const currentBalance = (
        await Vault.balanceOf(MockToken.address, admin)
      ).toNumber();
      expect(
        await Vault.withdraw(MockToken.address, admin, admin, currentBalance)
      )
        .to.emit(Vault, "Withdraw")
        .withArgs(
          MockToken.address,
          admin,
          admin,
          currentBalance,
          currentBalance
        );

      expect(
        await (await Vault.balanceOf(MockToken.address, admin)).toNumber()
      ).eq(0);

      expect((await Vault.totals(MockToken.address)).toNumber()).eq(
        currentTotals - currentBalance
      );
    });

    it("maxFlashLoan", async function () {
      const currentTotals = (await Vault.totals(MockToken.address)).toNumber();
      expect(await (await Vault.maxFlashLoan(MockToken.address)).toNumber()).eq(
        currentTotals
      );
    });

    it("flashFee", async function () {
      const amountToFlashLoan = await Vault.totals(MockToken.address);
      const expectedFlashFee = flashLoanRate.mul(amountToFlashLoan).div(BASE);

      expect(
        await (
          await Vault.flashFee(MockToken.address, amountToFlashLoan)
        ).toNumber()
      ).eq(expectedFlashFee.toNumber());
    });
  });

  //   describe()

  describe("\t - math", function () {
    it("calculates the shares correctly", async function () {});
  });

  describe("\t - admin functions", function () {
    it("updateFlashloanRate", async function () {
      const newFlashLoanRate = ethers.utils.parseUnits("0.05", 18);

      await expect(
        Vault.connect(accounts[1]).updateFlashloanRate(newFlashLoanRate)
      ).to.be.revertedWith("ONLY_BLACK_SMITH_TEAM");

      await Vault.updateFlashloanRate(newFlashLoanRate);

      expect(await Vault.flashLoanRate()).to.eq(newFlashLoanRate);
    });

    it("transferToNewTeam", async function () {
      await expect(
        Vault.connect(accounts[1]).transferToNewTeam(alice)
      ).to.be.revertedWith("ONLY_BLACK_SMITH_TEAM");

      await expect(
        Vault.transferToNewTeam(ethers.constants.AddressZero)
      ).to.be.revertedWith("INVALID_NEW_TEAM");

      await Vault.transferToNewTeam(alice);

      expect(await Vault.blackSmithTeam()).to.eq(alice);
    });
  });
});
