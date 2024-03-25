export enum ContractId {
    Vault = 'Vault',
    MockToken = 'MockToken',
    LendingPair = 'LendingPair',
    LendingPairFactory = 'LendingPairFactory',
    Control = 'Control',
    WrapperToken = 'WrapperToken',
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
    SafeERC20 = 'SafeERC20'
}

export interface ITokenDetails {
    name: string,
    address: EthereumAddress,
    chainId: number
}

export interface IApproveMessageData {
    nonce: number,
    approve: boolean,
    user: EthereumAddress,
}
export type EthereumAddress = string;
