import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId } from "../helpers/types"


const deployRewardDistributor: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments: { deploy, get }, getNamedAccounts } = hre;
    const { deployer, blackSmithTeam } = await getNamedAccounts();

    const vaultImplementation = await get(ContractId.Vault)

    await deploy(ContractId.VaultFactory, {
        from: deployer,
        args: [
          blackSmithTeam,
          vaultImplementation.address
        ],
        log: true,
        libraries: {
        }
    });
}

export default deployVaultFactory
deployVaultFactory.tags = [`${ContractId.VaultFactory}`]