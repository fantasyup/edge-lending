import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import {
    DebtToken,
    IPriceOracleAggregator,
    JumpRateModelV2,
    LendingPair as BLendingPair,
    LendingPair,
    MockToken,
    Vault as BVault,
    Vault,
    WrapperToken,
} from "../types";
import { 
    deployCollateralWrapperToken,
    deployDebtToken,
  deployInterestRateModel,
  deployLendingPair,
  deployMockPriceOracle,
  deployMockToken,
  deployVault,
  deployWrappedToken
} from "../helpers/contracts";
import { EthereumAddress } from "../helpers/types";

export async function depositInVault(
    Vault: BVault,
    asset: MockToken,
    account: Signer,
    amountToDeposit: number | BigNumber
) {
    const addr = await account.getAddress()
    await asset.connect(account).setBalanceTo(addr, amountToDeposit)
    await asset.connect(account).approve(Vault.address, amountToDeposit)
    await (await Vault.connect(account).deposit(asset.address, addr, addr, amountToDeposit)).wait()
}

export async function makeLendingPairTestSuiteVars(price?: BigNumber, admin ?: EthereumAddress) {
    return {
        Vault: await deployVault(),
        LendingPair: await deployLendingPair(),
        MockPriceOracle: await deployMockPriceOracle(price || BigNumber.from(10).pow(8)),
        BorrowAsset: await deployMockToken(),
        CollateralAsset: await deployMockToken(),
        BorrowAssetDepositWrapperToken: await deployWrappedToken(),
        DebtWrapperToken: await deployDebtToken(),
        CollateralWrapperToken: await deployCollateralWrapperToken(),
        InterestRateModel: await deployInterestRateModel(
            "30000000000000000",
            "52222222222200000",
            "70",
            "1000000000000000000",
            admin || ethers.constants.AddressZero
        )
    }
}

export async function advanceNBlocks(n: number) {
    for(let i = 0; i< n; i++) {
        await ethers.provider.send('evm_mine', [])
    }
}

export async function initializeWrapperTokens(
    owner: string,
    wrapperToken: WrapperToken | DebtToken,
    underlying: string
) {
    await wrapperToken.initialize(
      owner,
      underlying,
      "DEMO",
      "DMO"
    )
}

export function LendingPairHelper(
    vault: Vault,
    lendingPair: LendingPair,
    borrowAsset: MockToken,
    collateralAsset: MockToken
) {
    return {
        depositInVault: async(
            asset: MockToken,
            account: Signer,
            amountToDeposit: number | BigNumber
        ) => {
            const addr = await account.getAddress()
            await asset.connect(account).setBalanceTo(addr, amountToDeposit)
            await asset.connect(account).approve(vault.address, amountToDeposit)
            await vault.connect(account).approveContract(lendingPair.address, true);
            await (await vault.connect(account).deposit(asset.address, addr, addr, amountToDeposit)).wait()
        },
          
        depositBorrowAsset: async (
            account: string,
            amountToDeposit: number | BigNumber,
            asset?: MockToken
        ) => {
            const signer = await ethers.getSigner(account)
            const assetToDeposit = asset ||  borrowAsset
            await depositInVault(vault, assetToDeposit, signer, amountToDeposit)
            // approve 
            await vault.connect(signer).approveContract(lendingPair.address, true);
            const userShareBalance = await (await vault.balanceOf(assetToDeposit.address, account))
            return await lendingPair.connect(signer).depositBorrowAsset(account, userShareBalance)
        },
          
        depositCollateralAsset: async(
            account: string,
            amountToDeposit: number | BigNumber,
            asset?: MockToken
          ) => {
            const signer = await ethers.getSigner(account)
          
            await depositInVault(vault, asset || collateralAsset, signer, amountToDeposit)
            // approve 
            await vault.connect(signer).approveContract(lendingPair.address, true);
          
            return await lendingPair.connect(signer).depositCollateral(account, amountToDeposit)
          }
    }
}


// export class LendingPairTestSuiteVars {
//     Vault: BVault;
//     LendingPair: BLendingPair;
//     BorrowAsset: MockToken;
//     CollateralAsset: MockToken

//     constructor(
//         vault: BVault,
//         lendingPair: BLendingPair,
//         borrowAsset: MockToken,
//         collateralAsset: MockToken
//     ) {
//         this.Vault = vault
//         this.LendingPair = lendingPair
//         this.BorrowAsset = borrowAsset
//         this.CollateralAsset = collateralAsset
//     }

//     depositBorrowAsset = async(
//         lendingPair: BLendingPair,
//         account: string,
//         amountToDeposit: number
//     )  => {
//         const signer = await ethers.getSigner(account)
        
//         await depositInVault(this.Vault, this.BorrowAsset, signer, amountToDeposit)
//         // approve 
//         await this.Vault.connect(signer).approveContract(lendingPair.address, true);
//         const userShareBalance = await (await this.Vault.balanceOf(this.BorrowAsset.address, account)).toNumber()
        
//         return await this.LendingPair.connect(signer).depositBorrowAsset(account, userShareBalance)
//     }
      
//     depositCollateralAsset = async (
//         lendingPair: BLendingPair,
//         account: string,
//         amountToDeposit: number
//     ) => {
//         const signer = await ethers.getSigner(account)
      
//         await depositInVault(this.Vault, this.CollateralAsset, signer, amountToDeposit)
//         // approve 
//         await this.Vault.connect(signer).approveContract(lendingPair.address, true);
//         return await this.LendingPair.connect(signer).depositCollateral(account, amountToDeposit)
//     }
// }


