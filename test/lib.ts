import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import {
    IPriceOracle,
    JumpRateModelV2,
    LendingPair as BLendingPair,
    MockToken,
    Vault as BVault,
    WrapperToken,
} from "../types";
import { 
  deployInterestRateModel,
  deployLendingPair,
  deployMockPriceOracle,
  deployMockToken,
  deployVault,
  deployWrappedToken
} from "../helpers/contracts";


export async function depositInVault(
    Vault: BVault,
    asset: MockToken,
    account: Signer,
    amountToDeposit: number
) {
    const addr = await account.getAddress()
    await asset.connect(account).setBalanceTo(addr, amountToDeposit)
    await asset.connect(account).approve(Vault.address, amountToDeposit)
    await (await Vault.connect(account).deposit(asset.address, addr, addr, amountToDeposit)).wait()
}
// interface IMakeTestSuiteVars {
// }
export async function makeLendingPairTestSuiteVars(price?: BigNumber) {
    return {
        Vault: await deployVault(),
        LendingPair: await deployLendingPair(),
        MockPriceOracle: await deployMockPriceOracle(price || BigNumber.from(10).pow(8)),
        BorrowAsset: await deployMockToken(),
        CollateralAsset: await deployMockToken(),
        BorrowAssetDepositWrapperToken: await deployWrappedToken(),
        DebtWrapperToken: await deployWrappedToken(),
        CollateralWrapperToken: await deployWrappedToken()
    }
}

export class LendingPairTestHelper {
    Vault: BVault;
    LendingPair: BLendingPair;
    BorrowAsset: MockToken;
    CollateralAsset: MockToken

    constructor(
        vault: BVault,
        lendingPair: BLendingPair,
        borrowAsset: MockToken,
        collateralAsset: MockToken
    ) {
        this.Vault = vault
        this.LendingPair = lendingPair
        this.BorrowAsset = borrowAsset
        this.CollateralAsset = collateralAsset
    }

    depositBorrowAsset = async(
        lendingPair: BLendingPair,
        account: string,
        amountToDeposit: number
    )  => {
        const signer = await ethers.getSigner(account)
        
        await depositInVault(this.Vault, this.BorrowAsset, signer, amountToDeposit)
        // approve 
        await this.Vault.connect(signer).approveContract(lendingPair.address, true);
        const userShareBalance = await (await this.Vault.balanceOf(this.BorrowAsset.address, account)).toNumber()
        
        return await this.LendingPair.connect(signer).depositBorrowAsset(account, userShareBalance)
    }
      
    depositCollateralAsset = async (
        lendingPair: BLendingPair,
        account: string,
        amountToDeposit: number
    ) => {
        const signer = await ethers.getSigner(account)
      
        await depositInVault(this.Vault, this.CollateralAsset, signer, amountToDeposit)
        // approve 
        await this.Vault.connect(signer).approveContract(lendingPair.address, true);
        return await this.LendingPair.connect(signer).depositCollateral(account, amountToDeposit)
    }
}


