import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId, EthereumAddress } from "../helpers/types"

const deployVaultProxy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments: { deploy }, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();

  await deploy(ContractId.UUPSProxy, {
    from: deployer,
    args: [],
    log: true,
  });

};

export default deployVaultProxy
deployVaultProxy.tags = ['VaultProxy']
