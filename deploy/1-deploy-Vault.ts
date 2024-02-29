import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId, EthereumAddress } from "../helpers/types"

const deployVault: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments: { deploy }, getNamedAccounts } = hre;
  const { deployer, blackSmithTeam } = await getNamedAccounts();

  await deploy(ContractId.Vault, {
    from: deployer,
    args: [],
    log: true,
  });

};

export default deployVault
deployVault.tags = ['Vault']
