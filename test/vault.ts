import { ethers, waffle } from "hardhat";
import { Signer } from "ethers";
import { expect, assert } from "chai";
import {
  MockToken as BMockToken,
  UUPSProxy as BUUPSProxy,
  Vault as BVault,
  UUPSProxiable as BUUPSProxiable
} from "../types";
import { ContractId } from "../helpers/types";
import {
  deployVault,
  deployMockToken,
  deployMockFlashBorrower,
  deployProxiedVault,
} from "../helpers/contracts";
import { FlashBorrower as BFlashBorrower } from "../types/FlashBorrower";

let accounts: Signer[];
let Vault: BVault;
let MockToken: BMockToken;
let FlashBorrower: BFlashBorrower;

// users
let admin: string; // account used in deploying
let bob: string;
let alice: string;

const flashLoanRate = ethers.utils.parseUnits("0.05", 18);
const BASE = ethers.utils.parseUnits("1", 18);

describe("Vault", function () {
  before(async function () {
    accounts = await ethers.getSigners();

    ([
        admin,
        bob,
        alice
      ] = await Promise.all(accounts.slice(0, 3).map(x => x.getAddress())))

    Vault = await deployVault();
    MockToken = await deployMockToken();
    FlashBorrower = await deployMockFlashBorrower();

    await MockToken.setBalanceTo(admin, 1000000);
  });

  describe("initialize", function () {
    it("initialize fails with 0 team", async function () {
      await expect(
        Vault.initialize(flashLoanRate, ethers.constants.AddressZero)
      ).to.be.revertedWith("INVALID_TEAM");
    });

    it("initialize - correctly", async function () {
      await Vault.initialize(flashLoanRate, admin);

      expect(await Vault.flashLoanRate()).to.eq(flashLoanRate);
      expect(await Vault.blackSmithTeam()).to.eq(admin);
    });
  });

  it("proxiableUUID", async function () {
    let messageBytes = ethers.utils.toUtf8Bytes(
      "org.blacksmith.contracts.blacksmithvault.implementation"
    );
    const hash = ethers.utils.keccak256(messageBytes);
    expect((await Vault.proxiableUUID()).toString()).to.eq(hash.toString());
  });

  describe("vault actions", function () {
    const amountToDeposit = 100;

    describe("deposit", function () {
      it("deposit fails with invalid `to` address", async function () {
        await expect(
          Vault.deposit(
            MockToken.address,
            admin,
            ethers.constants.AddressZero,
            amountToDeposit
          )
        ).to.be.revertedWith("VAULT: INVALID_TO_ADDRESS");
      });

      it("deposit - correctly with correct user balance", async function () {
        // approve Vault to take 100
        await MockToken.approve(Vault.address, amountToDeposit);

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

      it("deposit fails with incorrect approve deposit", async function () {
        // await MockToken.decreaseAllowance(Vault.address, 10);
        await expect(
          Vault.deposit(MockToken.address, admin, admin, amountToDeposit)
        ).to.be.reverted;
      });
    });

    describe("transfer", function () {
      const sharesToTransfer = 5;

      it("transfer fails with invalid `to` address", async function () {
        await expect(
          Vault.transfer(
            MockToken.address,
            admin,
            ethers.constants.AddressZero,
            sharesToTransfer
          )
        ).to.be.revertedWith("VAULT: INVALID_TO_ADDRESS");
      });

      it("transfer - correctly", async function () {
        const currentBalance = (
          await Vault.balanceOf(MockToken.address, admin)
        ).toNumber();
        const remainingShareBalance = currentBalance - sharesToTransfer;
        const currentTotal = (await Vault.totals(MockToken.address)).toNumber();

        expect(await Vault.transfer(MockToken.address, admin, bob, sharesToTransfer))
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
    });

    describe("flashLoan", function () {
      it("maxFlashLoan", async function () {
        const currentTotals = (
          await Vault.totals(MockToken.address)
        ).toNumber();
        expect(
          await (await Vault.maxFlashLoan(MockToken.address)).toNumber()
        ).eq(currentTotals);
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

      it("flashLoan - correctly", async function () {
        // deposit money to FlashBorrwer
        await MockToken.setBalanceTo(FlashBorrower.address, 1000);
        // call borrow on flashBorrower
        // approve balance
        const amountToFlashLoan = amountToDeposit;
        const expectedFlashFee = flashLoanRate.mul(amountToFlashLoan).div(BASE);

        await MockToken.approve(
          Vault.address,
          amountToDeposit + expectedFlashFee.toNumber()
        );

        expect(
          await Vault.flashLoan(
            FlashBorrower.address,
            MockToken.address,
            amountToFlashLoan,
            "0x"
          )
        )
          .to.emit(Vault, "FlashLoan")
          .withArgs(
            admin,
            MockToken.address,
            amountToFlashLoan,
            expectedFlashFee,
            FlashBorrower.address
          );
      });
    });

    describe("withdraw", function () {
      it("withdraw fails with invalid `to` address", async function () {
        await expect(
          Vault.withdraw(
            MockToken.address,
            admin,
            ethers.constants.AddressZero,
            amountToDeposit
          )
        ).to.be.revertedWith("VAULT: INVALID_TO_ADDRESS");
      });

      it("user cannot withdraw more than balance", async function () {
        await expect(
          Vault.withdraw(MockToken.address, admin, admin, amountToDeposit * 7)
        ).to.be.reverted;
      });

      it("withdraw - correctly", async function () {
        const currentTotals = (
          await Vault.totals(MockToken.address)
        ).toNumber();
        const currentBalance = (
          await Vault.balanceOf(MockToken.address, admin)
        ).toNumber();
        const expectedAmountOut = await Vault.toUnderlying(
          MockToken.address,
          currentBalance
        );
        await expect(
          await Vault.withdraw(MockToken.address, admin, admin, currentBalance)
        )
          .to.emit(Vault, "Withdraw")
          .withArgs(
            MockToken.address,
            admin,
            admin,
            currentBalance,
            expectedAmountOut
          );

        expect(
          await (await Vault.balanceOf(MockToken.address, admin)).toNumber()
        ).eq(0);

        expect((await Vault.totals(MockToken.address)).toNumber()).eq(
          currentTotals - currentBalance
        );
      });
    });
  });

  describe("toShare", async function() {
    const share = 1000
    it("toShare - when total is 0", async function () {
        const output = (await Vault.toShare(bob, share)).toNumber();
        expect(output).to.eq(share)
    });
  })


  describe("admin functions", function () {
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


  describe("Upgradable Deployment", function() {
    it("updateCode", async function() {
        const newVault = await deployVault()
        const proxiedVault = await deployProxiedVault(Vault.address)

        // initialize proxiedVault
        await proxiedVault.initialize(flashLoanRate, admin);

        const currentImplAddress = await proxiedVault.getCodeAddress();
        expect(currentImplAddress).to.eq(Vault.address)

        const uuid = (await Vault.proxiableUUID()).toString()

        const receipt =  await (await proxiedVault.updateCode(newVault.address)).wait()

        assert.ok(receipt.events?.find(x => x.event === 'CodeUpdated'), 'should emit CodeUpdated event')

        // @TODO introduce grace period
        const newImplAddress = await proxiedVault.getCodeAddress()
        expect(newImplAddress).to.eq(newVault.address)        
    })

    // @TODO 
    it("test storage layout", async function() {

    })
  })



});
