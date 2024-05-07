import { deployments, ethers, getNamedAccounts, waffle } from "hardhat";
import { BigNumber, Signer, Wallet } from "ethers";
import {
    DebtToken,
    IPriceOracleAggregator,
    JumpRateModelV2,
    LendingPair as BLendingPair,
    LendingPair,
    LendingPairFactory,
    LendingPairHelper,
    MockFlashBorrower,
    MockPriceOracle,
    MockToken,
    MockVault,
    Vault as BVault,
    Vault,
    VaultFactory,
    WrapperToken,
} from "../types";
import { 
  deployMockPriceOracle,
  deployMockToken,
  getCollateralWrapperDeployment,
  getVaultDeployment,
  getDebtTokenDeployment,
  getBorrowWrapperDeployment,
  getLendingPairHelperDeployment,
  getLendingPairDeployment,
  getInterestRateModelDeployment,
  getPriceOracleAggregatorDeployment,
  deployMockFlashBorrower,
  deployMockVault,
  getLendingPairFactoryDeployment,
  getVaultFactoryDeployment
} from "../helpers/contracts";
import { EthereumAddress } from "../helpers/types";
import { 
    signDebtTokenBorrowDelegateMessage,
    signPermitMessage,
    signVaultApproveContractMessage
} from "../helpers/message";
import { assert } from "chai";

export async function makeLendingPairTestSuiteVars(
        price?: BigNumber
    ): Promise<Pick<
        TestVars,
        'Vault' | 'PriceOracleAggregator' | 'CollateralWrapperToken' | 'BorrowWrapperToken' | 'DebtToken' | 'InterestRateModel' | 'LendingPair' | 'LendingPairHelper' | 'LendingPairFactory' | 'VaultFactory'
    >> {
    return {
        Vault: await getVaultDeployment(),
        PriceOracleAggregator: await getPriceOracleAggregatorDeployment(),
        CollateralWrapperToken: await getCollateralWrapperDeployment(),
        BorrowWrapperToken: await getBorrowWrapperDeployment(),
        DebtToken: await getDebtTokenDeployment(),
        InterestRateModel: await getInterestRateModelDeployment(),
        LendingPair: await getLendingPairDeployment(),
        LendingPairHelper: await getLendingPairHelperDeployment(),
        LendingPairFactory: await getLendingPairFactoryDeployment(),
        VaultFactory: await getVaultFactoryDeployment()
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
    LendingPairFactory: LendingPairFactory,
    VaultFactory: VaultFactory,
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
    LendingPairFactory: {} as LendingPairFactory,
    VaultFactory: {} as VaultFactory
}

export function runTestSuite(title: string, tests: (arg: TestVars) => void) {
    describe(title, function() {
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
        })

        beforeEach(async () => {
            const setupTest = deployments.createFixture(async ({deployments, getNamedAccounts, ethers}, options) => {
                await deployments.fixture(); // ensure you start from a fresh deployments
                testVars.BorrowAssetMockPriceOracle = await deployMockPriceOracle(BigNumber.from(10).pow(8))
                testVars.CollateralAssetMockPriceOracle = await deployMockPriceOracle(BigNumber.from(10).pow(8))
                testVars.BorrowAsset = await deployMockToken()
                testVars.CollateralAsset = await deployMockToken()
                testVars.FlashBorrower = await deployMockFlashBorrower()
                testVars.MockVault = await deployMockVault()
            });

            await setupTest()
            const vars = await makeLendingPairTestSuiteVars()
            Object.assign(testVars, vars)
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

    const getVaultDetails = async() => ({
        name: await vault.name(),
        address: vault.address,
        chainId: (await ethers.provider.getNetwork()).chainId,
        version: await vault.version()
    })

    const approveInVaultMessage = async (account: IAccount, addressToApprove: EthereumAddress, approve: boolean) => {
        const vaultDetails = await getVaultDetails()
        const nonce = (await vault.userApprovalNonce(account.address)).toNumber()
        return await signVaultApproveContractMessage(
            account.privateKey,
            vaultDetails,
            {
                approve,
                user: account.address,
                nonce,
                contract: addressToApprove
            }
        )

    }
    const approveInVault = async(account: IAccount, addressToApprove: EthereumAddress, approve: boolean) => {
        const { v, r, s } = await approveInVaultMessage(account, addressToApprove, approve)
        return await vault.connect(account.signer).approveContract(
            account.address,
            addressToApprove,
            approve,
            v,
            r,
            s
        )
    }

    const delegateBorrowWithSignedMessage = async(debtToken: DebtToken, from: IAccount, to: IAccount, amount: number) => {
        const debtTokenDetails = { 
            name: await debtToken.name(),
            address: debtToken.address,
            chainId: (await ethers.provider.getNetwork()).chainId,
            version: '1'
        }

        const nonce = (await debtToken.userBorrowAllowanceNonce(from.address)).toNumber()
        const { v, r, s } = await signDebtTokenBorrowDelegateMessage(
            from.privateKey,
            debtTokenDetails,
            {
                from: from.address,
                to: to.address,
                amount,
                nonce
            }
        )
        return await debtToken.connect(from.signer).delegateBorrowWithSignedMessage(
            from.address,
            to.address,
            amount,
            v,
            r,
            s
        )
    }

    const permit = async(token: WrapperToken, from: IAccount, to: IAccount, amount: number) => {
        const tokenDetails = {
            name: await token.name(),
            address: token.address,
            chainId: (await ethers.provider.getNetwork()).chainId,
            version: '1'
        }
        const deadline = await (await ethers.provider.getBlock('latest')).timestamp + 200000
        const nonce = await (await token.nonces(from.address)).toNumber()
        const { v, r, s } = await signPermitMessage(
            from.privateKey,
            tokenDetails,
            {
                owner: from.address,
                spender: to.address,
                value: BigNumber.from(amount)
            },
            nonce,
            deadline
        )

        return await token.connect(from.signer).permit(
            from.address,
            to.address,
            amount,
            deadline,
            v,
            r,
            s
        )
    }

    const setAccountBalance =  async ( account: Signer,
        asset: MockToken,
        amountToDeposit: number | BigNumber
    ) => {
        const addr = await account.getAddress()
        await asset.connect(account).setBalanceTo(addr, amountToDeposit)
        await asset.connect(account).approve(vault.address, amountToDeposit)
    }

    const depositInVault = async(
        account: Signer,
        asset: MockToken,
        amountToDeposit: number | BigNumber
    ) => {
        await setAccountBalance(account, asset, amountToDeposit)
        const addr = await account.getAddress()
        await (await vault.connect(account).deposit(asset.address, addr, addr, amountToDeposit)).wait()
    }

    return {
        getVaultDetails,
        approveInVault,
        approveInVaultMessage,
        delegateBorrowWithSignedMessage,
        permit,
        setAccountBalance,
        depositInVault,
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
          
        depositBorrowAsset: async (
            account: IAccount,
            amountToDeposit: number | BigNumber,
            asset?: MockToken
        ) => {
            const assetToDeposit = asset ||  borrowAsset
            await depositInVault(account.signer, assetToDeposit, amountToDeposit)
            return await lendingPair.connect(account.signer).depositBorrowAsset(account.address, amountToDeposit)
        },
          
        depositCollateralAsset: async(
            account: IAccount,
            amountToDeposit: number | BigNumber,
            asset?: MockToken
          ) => {          
            // await depositInVault(vault, asset || collateralAsset, account.signer, amountToDeposit)  
            await depositInVault(account.signer, asset || collateralAsset, amountToDeposit)        
            return await lendingPair.connect(account.signer).depositCollateral(account.address, amountToDeposit)
          }
    }
}
  
export async function setupLendingPair(
    lendingPair: LendingPair,
    CollateralAsset: MockToken,
    BorrowAsset: MockToken,
    BorrowAssetDepositWrapperToken: WrapperToken,
    CollateralWrapperToken: WrapperToken,
    DebtWrapperToken: DebtToken
  ) {
    // collateral wrapper token
    await initializeWrapperTokens(
      lendingPair.address,
      CollateralWrapperToken,
      CollateralAsset.address
    )
  
    // borrow wrapper token
    await initializeWrapperTokens(
      lendingPair.address,
      BorrowAssetDepositWrapperToken,
      BorrowAsset.address
    )
    
    // debt token
    await initializeWrapperTokens(
      lendingPair.address,
      DebtWrapperToken,
      BorrowAsset.address
    )
  }
  
export interface LendingPairInitVars {
    initialExchangeRateMantissa: BigNumber,
    reserveFactorMantissa: BigNumber,
    collateralFactor: BigNumber,
    liquidationFee: BigNumber,
    account: IAccount,
    accountsToApproveInVault?: IAccount[]
}

export async function setupAndInitLendingPair(
    {
      Vault,
      LendingPair,
      BorrowAsset,
      CollateralAsset,
      BorrowWrapperToken,
      CollateralWrapperToken,
      DebtToken,
      PriceOracleAggregator,
      BorrowAssetMockPriceOracle,
      CollateralAssetMockPriceOracle,
      InterestRateModel,
      blackSmithTeam,
    } : TestVars,
    {
        initialExchangeRateMantissa,
        reserveFactorMantissa,
        collateralFactor,
        liquidationFee,
        account,
        accountsToApproveInVault
    }: LendingPairInitVars
  ) {
    await setupLendingPair(
      LendingPair,
      CollateralAsset,
      BorrowAsset,
      BorrowWrapperToken,
      CollateralWrapperToken,
      DebtToken
    )
  
    await LendingPair.initialize(
      "Test",
      "TST",
      BorrowAsset.address,
      CollateralAsset.address,
      {
        initialExchangeRateMantissa: initialExchangeRateMantissa,
        reserveFactorMantissa,
        collateralFactor,
        wrappedBorrowAsset: BorrowWrapperToken.address,
        liquidationFee,
        debtToken: DebtToken.address
      },
      CollateralWrapperToken.address,
      InterestRateModel.address,
      account.address
    );
  
    const helper = LendingPairHelpers(Vault, LendingPair, BorrowAsset, CollateralAsset, PriceOracleAggregator, blackSmithTeam)
    await helper.addPriceOracleForAsset(CollateralAsset, CollateralAssetMockPriceOracle);
    await helper.addPriceOracleForAsset(BorrowAsset, BorrowAssetMockPriceOracle);
  
    accountsToApproveInVault && await Promise.all(accountsToApproveInVault?.map(account => helper.approveLendingPairInVault(account, true)))
  
    return helper
  }


const initialExchangeRateMantissa =  BigNumber.from("1000000000000000000")
const reserveFactorMantissa =  BigNumber.from("500000000000000000")
// 150%
const collateralFactor = BigNumber.from(15).mul(BigNumber.from(10).pow(17))
// 0.005%
const liquidationFee = BigNumber.from(5).mul(BigNumber.from(10).pow(16))

export const defaultLendingPairInitVars = {
    initialExchangeRateMantissa,
    reserveFactorMantissa,
    collateralFactor,
    liquidationFee,
}