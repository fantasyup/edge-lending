import { deployments, ethers, getNamedAccounts, waffle } from "hardhat";
import { BigNumber, Signer, Wallet } from "ethers";
import {
    DebtToken,
    IPriceOracleAggregator,
    JumpRateModelV2,
    LendingPair as BLendingPair,
    LendingPair,
    LendingPairHelper,
    MockFlashBorrower,
    MockPriceOracle,
    MockToken,
    MockVault,
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
  getInterestRateModelDeployment,
  getPriceOracleAggregatorDeployment,
  deployMockFlashBorrower,
  deployMockVault
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
        price?: BigNumber
    ): Promise<Pick<TestVars, 'Vault' | 'PriceOracleAggregator' | 'CollateralWrapperToken' | 'BorrowWrapperToken' | 'DebtToken' | 'InterestRateModel' | 'LendingPair' | 'LendingPairHelper'>> {
    return {
        Vault: await getVaultDeployment(),
        PriceOracleAggregator: await getPriceOracleAggregatorDeployment(),
        CollateralWrapperToken: await getCollateralWrapperDeployment(),
        BorrowWrapperToken: await getBorrowWrapperDeployment(),
        DebtToken: await getDebtTokenDeployment(),
        InterestRateModel: await getInterestRateModelDeployment(),
        LendingPair: await getLendingPairDeployment(),
        LendingPairHelper: await getLendingPairHelperDeployment()
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
    MockVault: MockVault,
    Vault: Vault,
    CollateralWrapperToken: WrapperToken,
    BorrowWrapperToken: WrapperToken,
    DebtToken: DebtToken,
    InterestRateModel: JumpRateModelV2,
    LendingPair: LendingPair,
    LendingPairHelper: LendingPairHelper,
    PriceOracleAggregator: IPriceOracleAggregator,
    accounts: IAccount[],
    blackSmithTeam: IAccount,
    BorrowAssetMockPriceOracle: MockPriceOracle,
    CollateralAssetMockPriceOracle: MockPriceOracle,
    FlashBorrower: MockFlashBorrower,

}

const testVars: TestVars = {
    BorrowAsset: {} as MockToken,
    CollateralAsset: {} as MockToken,
    MockVault: {} as MockVault,
    Vault: {} as Vault,
    CollateralWrapperToken: {} as WrapperToken,
    BorrowWrapperToken: {} as WrapperToken,
    DebtToken: {} as DebtToken,
    InterestRateModel: {} as JumpRateModelV2,
    PriceOracleAggregator: {} as IPriceOracleAggregator,
    BorrowAssetMockPriceOracle: {} as MockPriceOracle,
    CollateralAssetMockPriceOracle: {} as MockPriceOracle,
    accounts: {} as IAccount[],
    LendingPairHelper: {} as LendingPairHelper,
    LendingPair: {} as LendingPair,
    blackSmithTeam: {} as IAccount,
    FlashBorrower: {} as MockFlashBorrower,
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
            assert.equal(
                new Wallet(testVars.accounts[0].privateKey).address, 
                testVars.accounts[0].address, 
                'invalid mnemonic or address'
            )

            const { blackSmithTeam } = await getNamedAccounts()
            // address used in performing admin actions in InterestRateModel
            testVars.blackSmithTeam  = testVars.accounts.find(x => x.address.toLowerCase() === blackSmithTeam.toLowerCase()) as IAccount
            // do this here because of some unusual race condition
            // in the deployments code
            testVars.BorrowAssetMockPriceOracle = await deployMockPriceOracle(BigNumber.from(10).pow(8))
            testVars.CollateralAssetMockPriceOracle = await deployMockPriceOracle(BigNumber.from(10).pow(8))
            testVars.BorrowAsset = await deployMockToken()
            testVars.CollateralAsset = await deployMockToken()
            testVars.FlashBorrower = await deployMockFlashBorrower()
            testVars.MockVault = await deployMockVault()
        })

        beforeEach(async () => {
            await deployments.fixture();
            Object.assign(testVars, await makeLendingPairTestSuiteVars())
        })
        
        tests(testVars)
    })
}

export function LendingPairHelpers(
    vault: Vault,
    lendingPair: LendingPair,
    borrowAsset: MockToken,
    collateralAsset: MockToken,
    oracleAggregator: IPriceOracleAggregator,
    team: IAccount
) {

    const approveInVault = async(account: IAccount, addressToApprove: EthereumAddress, approve: boolean) => {
        const vaultDetails = { 
            name: await vault.name(),
            address: vault.address,
            chainId: (await ethers.provider.getNetwork()).chainId,
            version: await vault.version()
        };
        const nonce = (await vault.userApprovalNonce(account.address)).toNumber()
        const { v, r, s } = await signVaultApproveContractMessage(
            account.privateKey,
            vaultDetails,
            {
                approve,
                user: account.address,
                nonce,
                contract: addressToApprove
            }
        )

        return await vault.connect(account.signer).approveContract(
            account.address,
            addressToApprove,
            approve,
            v,
            r,
            s
        )
    }

    return {
        approveInVault,
        addPriceOracleForAsset: async(
            asset: MockToken,
            priceOracle: MockPriceOracle
        ) => {
            return await oracleAggregator.connect(team.signer).updateOracleForAsset(
                asset.address,
                priceOracle.address
            )
        },
        approveLendingPairInVault: async(
            account: IAccount,
            approve: boolean
        ) => {
            return approveInVault(account, lendingPair.address, approve)
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


