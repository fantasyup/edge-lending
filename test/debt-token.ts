import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import { DebtToken as BDebtToken } from "../types";
import { deployDebtToken } from "../helpers/contracts";

let accounts: Signer[];

let admin: string; // account used in deploying
let bob: string;
let frank: string;
let DebtToken: BDebtToken

describe("DebtToken", async function () {
    before(async function() {
        accounts = await ethers.getSigners();
        ([
            admin,
            bob,
            frank,
          ] = await Promise.all(accounts.slice(0, 5).map(x => x.getAddress())))
          DebtToken = await deployDebtToken()
          // admin owner
          await DebtToken.initialize(ethers.constants.AddressZero, 'Test', 'TST')
    })

    it("mint", async function() {
        await DebtToken.mint(admin, 1000)
    })

    it("mint - fails if not owner", async function() {
        await expect(
            DebtToken.connect(await ethers.getSigner(bob)).mint(admin, 1000)
        ).to.be.reverted
    })

    it("burn", async function() {
        await DebtToken.burn(admin, 100)
    })

    it("burn - fails if not owner", async function() {
        await expect(
            DebtToken.connect(await ethers.getSigner(bob)).burn(admin, 1000)
        ).to.be.reverted
    })

    it("transfer", async function() {
        await expect(
            DebtToken.transfer(bob, 1)
        ).revertedWith('TRANSFER_NOT_SUPPORTED')
    })

    it("approve", async function() {
        await expect(
            DebtToken.approve(bob, 1)
        ).revertedWith('APPROVAL_NOT_SUPPORTED')
    })

    it("allowance", async function() {
        await expect(
            DebtToken.allowance(bob, bob)
        ).revertedWith('ALLOWANCE_NOT_SUPPORTED')
    })

    it("transferFrom", async function() {
        await expect(
            DebtToken.transferFrom(bob, bob, 1)
        ).revertedWith('TRANSFER_NOT_SUPPORTED')
    })

    it("increaseAllowance", async function() {
        await expect(
            DebtToken.increaseAllowance(bob, 1)
        ).revertedWith('ALLOWANCE_NOT_SUPPORTED')
    })

    it("decreaseAllowance", async function() {
        await expect(
            DebtToken.increaseAllowance(bob, 1)
        ).revertedWith('ALLOWANCE_NOT_SUPPORTED')
    })

})