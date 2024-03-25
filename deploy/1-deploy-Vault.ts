import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId } from "../helpers/types"

const deployVault: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments: { deploy }, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();

  await deploy(ContractId.Vault, {
    from: deployer,
    args: ["edge", "1"],
    log: true,
  });
};

export default deployVault
deployVault.tags = ['Vault']
