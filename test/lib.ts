import { deployments, ethers, waffle } from "hardhat";
import { BigNumber, Signer, Wallet } from "ethers";
import {
    DebtToken,
    IPriceOracleAggregator,
    JumpRateModelV2,
    LendingPair as BLendingPair,
    LendingPair,
    LendingPairHelper,
    MockToken,
    Vault as BVault,
    Vault,
    WrapperToken,
} from "../types";
import { 
    deployCollateralWrapperToken,
    deployDebtToken,
  deployInterestRateModel,
//   deployLendingPair,
  deployMockPriceOracle,
  deployMockToken,
  deployVault,
  deployWrappedToken,
  getCollateralWrapperDeployment,
  getVaultDeployment,
  getDebtTokenDeployment,
  getBorrowWrapperDeployment,
  getLendingPairHelperDeployment,
  getLendingPairDeployment,
  getInterestRateModelDeployment
} from "../helpers/contracts";
import { EthereumAddress, IAssetDetails } from "../helpers/types";
import { signVaultApproveContractMessage } from "../helpers/message";
import { assert } from "chai";

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

export async function makeLendingPairTestSuiteVars(
        price?: BigNumber, admin ?: EthereumAddress
    ): Promise<Omit<TestVars, 'accounts' | 'LendingPairHelper'>> {
    return {
        Vault: await getVaultDeployment(),
        MockPriceOracle: await deployMockPriceOracle(price || BigNumber.from(10).pow(8)),
        BorrowAsset: await deployMockToken(),
        CollateralAsset: await deployMockToken(),
        CollateralWrapperToken: await getCollateralWrapperDeployment(),
        BorrowWrapperToken: await getBorrowWrapperDeployment(),
        DebtToken: await getDebtTokenDeployment(),
        InterestRateModel: await getInterestRateModelDeployment(),
        LendingPair: await getLendingPairDeployment(),
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

export interface IAccount {
    address: EthereumAddress,
    signer: Signer,
    privateKey: string
}
export interface TestVars {
    BorrowAsset: MockToken,
    CollateralAsset: MockToken,
    Vault: Vault,
    CollateralWrapperToken: WrapperToken,
    BorrowWrapperToken: WrapperToken,
    DebtToken: DebtToken,
    InterestRateModel: JumpRateModelV2,
    LendingPair: LendingPair,
    LendingPairHelper: LendingPairHelper,
    MockPriceOracle: IPriceOracleAggregator,
    accounts: IAccount[] 
}

const testVars: TestVars = {
    BorrowAsset: {} as MockToken,
    CollateralAsset: {} as MockToken,
    Vault: {} as Vault,
    CollateralWrapperToken: {} as WrapperToken,
    BorrowWrapperToken: {} as WrapperToken,
    DebtToken: {} as DebtToken,
    InterestRateModel: {} as JumpRateModelV2,
    MockPriceOracle: {} as IPriceOracleAggregator,
    accounts: {} as IAccount[],
    LendingPairHelper: {} as LendingPairHelper,
    LendingPair: {} as LendingPair
}

export function runTestSuite(title: string, tests: (arg: TestVars) => void) {
    describe(title, () => {
        before(async () => {
            // we manually derive the signers address using the mnemonic
            // defined in the hardhat config
            const mnemonic = "test test test test test test test test test test test junk"
            testVars.accounts = await Promise.all((await ethers.getSigners()).map(async (signer, index) => ({ 
                address: await signer.getAddress(), 
                signer,
                privateKey: ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${index}`).privateKey
            })))
            /// @TODO asset the private key is correct to fail early
            assert.equal(
                new Wallet(testVars.accounts[0].privateKey).address, 
                testVars.accounts[0].address, 
                'invalid mmemonic or address'
            )
        })

        beforeEach(async () => {
            await deployments.fixture();
            Object.assign(testVars, await makeLendingPairTestSuiteVars(BigNumber.from(10).pow(18), testVars.accounts[0].address))
        })
        
        tests(testVars)
    })
}

export function LendingPairHelpers(
    vault: Vault,
    lendingPair: LendingPair,
    borrowAsset: MockToken,
    collateralAsset: MockToken
) {
    return {
        approveLendingPairInVault: async(
            account: IAccount,
            approve: boolean
        ) => {
            const vaultDetails = { 
                name: await vault.name(),
                address: vault.address,
                chainId: (await ethers.provider.getNetwork()).chainId,
                version: await vault.version()
            };
            console.log(vaultDetails)
            const nonce = (await vault.userApprovalNonce(account.address)).toNumber()
            console.log({ nonce })
            const {v,r,s} = await signVaultApproveContractMessage(
                account.privateKey,
                vaultDetails,
                {
                    approve,
                    user: account.address,
                    nonce,
                    contract: lendingPair.address
                }
            )

            return await vault.connect(account.signer).approveContract(
                account.address,
                lendingPair.address,
                approve,
                v,
                r,
                s
            )
        },
        depositInVault: async(
            account: Signer,
            asset: MockToken,
            amountToDeposit: number | BigNumber
        ) => {
            const addr = await account.getAddress()
            await asset.connect(account).setBalanceTo(addr, amountToDeposit)
            await asset.connect(account).approve(vault.address, amountToDeposit)
            await (await vault.connect(account).deposit(asset.address, addr, addr, amountToDeposit)).wait()
        },
          
        depositBorrowAsset: async (
            account: IAccount,
            amountToDeposit: number | BigNumber,
            asset?: MockToken
        ) => {
            const assetToDeposit = asset ||  borrowAsset
            await depositInVault(vault, assetToDeposit, account.signer, amountToDeposit)
            const userShareBalance = await (await vault.balanceOf(assetToDeposit.address, account.address))
            return await lendingPair.connect(account.signer).depositBorrowAsset(account.address, userShareBalance)
        },
          
        depositCollateralAsset: async(
            account: IAccount,
            amountToDeposit: number | BigNumber,
            asset?: MockToken
          ) => {          
            await depositInVault(vault, asset || collateralAsset, account.signer, amountToDeposit)          
            return await lendingPair.connect(account.signer).depositCollateral(account.address, amountToDeposit)
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


