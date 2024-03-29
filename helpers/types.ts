export enum ContractId {
    Vault = 'Vault',
    MockToken = 'MockToken',
    LendingPair = 'LendingPair',
    LendingPairFactory = 'LendingPairFactory',
    Control = 'Control',
    WrapperToken = 'BorrowWrapperToken',
    UUPSProxy = 'UUPSProxy',
    MockFlashBorrower = 'MockFlashBorrower',
    MockLendingPair = 'MockLendingPair',
    UUPSProxiable = 'UUPSProxiable',
    MockPriceOracle  = 'MockPriceOracle',
    JumpRateModelV2 = 'JumpRateModelV2',
    PriceOracleAggregator = 'PriceOracleAggregator',
    MockVault = 'MockVault',
    DataTypes = 'DataTypes',
    LendingPairHelper = 'LendingPairHelper',
    DebtToken = 'DebtToken',
    CollateralWrapperToken = 'CollateralWrapperToken',
    MockChainlinkUSDAdapter = 'MockChainlinkUSDAdapter',
    VaultStorageLayoutTester = 'VaultStorageLayoutTester',
    SafeERC20 = 'SafeERC20',
    VaultFactory = 'VaultFactory'
}

export interface IAssetDetails {
    name: string,
    version: string,
    address: EthereumAddress,
    chainId: number
}

export interface IApproveMessageData {
    nonce: number,
    approve: boolean,
    user: EthereumAddress,
    contract: EthereumAddress
}

export interface IDelegateBorrowMessageData {
    from: EthereumAddress,
    to: EthereumAddress,
    amount: number,
    nonce: number
}

export enum LendingPairActions {
    Deposit = 0,
    Borrow = 1,
}

export type EthereumAddress = string;
