import { ethers, waffle } from "hardhat";
import { Signer, Contract } from "ethers"
import { ContractId, EthereumAddress } from "../helpers/types"
import { Vault } from '../types/Vault'
import { LendingPair, MockFlashBorrower, MockLendingPair, MockToken, UUPSProxy } from "../types";

export const deployContract = async<ContractType extends Contract>(
    contractName: string,
    args: any[]
) => {
    const contract = (await (await ethers.getContractFactory(contractName)).deploy(
        ...args
      )) as ContractType;
    
    return contract
}

export const deployVault = async() => {
    return await deployContract<Vault>(ContractId.Vault, [])
}

export const deployMockToken = async() => {
    return await deployContract<MockToken>(ContractId.MockToken, [])
}

export const deployLendingPair = async () => {
    return await deployContract<LendingPair>(ContractId.LendingPair, [])
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