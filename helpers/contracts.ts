import { ethers, waffle } from "hardhat";
import { Signer, Contract, BigNumber } from "ethers"
import { ContractId, EthereumAddress } from "../helpers/types"
import { Vault } from '../types/Vault'
import { 
    CollateralWrapperToken,
    DebtToken,
    JumpRateModelV2,
    LendingPair,
    MockFlashBorrower,
    MockLendingPair,
    MockPriceOracle,
    MockToken,
    MockVault, PriceOracleAggregator, UUPSProxy, WrapperToken 
} from "../types";
import { DataTypes } from "../types/DataTypes";
import { LendingPairHelper } from "../types/LendingPairHelper";

export const deployContract = async<ContractType extends Contract>(
    contractName: string,
    args: any[],
    libraries?: {}
) => {
    const contract = (await (await ethers.getContractFactory(contractName, {
        libraries: {
            ...libraries
        }
    })).deploy(
        ...args
      )) as ContractType;
    
    return contract
}

export const deployDataTypesLib = async () => {
    return await deployContract<DataTypes>('DataTypes', [])
}

export const deployVault = async() => {
    return await deployContract<Vault>(ContractId.Vault, [])
}

export const deployMockToken = async() => {
    return await deployContract<MockToken>(ContractId.MockToken, [])
}

export const deployLendingPair = async () => {
    const dataTypesLib = await deployDataTypesLib()

    return await deployContract<LendingPair>(ContractId.LendingPair, [], 
    {
        DataTypes: dataTypesLib.address
    })
}

export const deployUUPSProxy = async () => {
    return await deployContract<UUPSProxy>(ContractId.UUPSProxy, [])
}

export const deployMockFlashBorrower = async () => {
    return await deployContract<MockFlashBorrower>(ContractId.MockFlashBorrower, [])
}

export const deployMockLendingPair = async () => {
    return await deployContract<MockLendingPair>(ContractId.MockLendingPair, [])
}

export const deployProxiedVault = async(vaultAddress ?: EthereumAddress) => {
    const UUPSProxy = await deployUUPSProxy();
    const pVaultAddress = vaultAddress || (await deployVault()).address
    // initialize proxy
    await UUPSProxy.initializeProxy(pVaultAddress)
    return (await ethers.getContractAt(ContractId.Vault, UUPSProxy.address)) as Vault
}

export const deployWrappedToken = async() => {
    return await deployContract<WrapperToken>(
        ContractId.WrapperToken,
        []
    )
}

export const deployDebtToken = async() => {
    return await deployContract<DebtToken>(
        ContractId.DebtToken,
        []
    )
}

export const deployCollateralWrapperToken = async() => {
    return await deployContract<CollateralWrapperToken>(
        ContractId.CollateralWrapperToken,
        []
    )
}

export const deployMockPriceOracle = async(price: BigNumber) => {
    return await deployContract<MockPriceOracle>(
        ContractId.MockPriceOracle,
        [price.toString()]
    )
}

export const deployInterestRateModel = async (
    baseRatePerYear: string,
    multiplierPerYear: string,
    jumpMultiplierPerYear: string,
    kink: string,
    owner: EthereumAddress
) => {
    return await deployContract<JumpRateModelV2>(
        ContractId.JumpRateModelV2,
        [
            baseRatePerYear,
            multiplierPerYear,
            jumpMultiplierPerYear,
            kink,
            owner
        ]
    )
}

export const deployMockVault =  async() => {
    return await deployContract<MockVault>(ContractId.MockVault, [])
}

export const deployLendingPairHelper = async(vault: Vault) => {
    return await deployContract<LendingPairHelper>(ContractId.LendingPairHelper, [vault.address])
}

export const deployPriceOracleAggregator = async(admin: EthereumAddress) => {
    return await deployContract<PriceOracleAggregator>(ContractId.PriceOracleAggregator, [admin])
}

// minimal proxy contract
export const deployERC1167LendingPair = async() => {

}