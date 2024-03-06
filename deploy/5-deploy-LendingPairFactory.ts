import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId, EthereumAddress } from "../helpers/types"

const deployLendingPairFactory: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments: { deploy, get }, getNamedAccounts } = hre;
    const { deployer, blackSmithTeam } = await getNamedAccounts();

    const dataTypesLib = await get(ContractId.DataTypes)

    await deploy(ContractId.LendingPairFactory, {
      from: deployer,
      args: [blackSmithTeam],
      log: true,
      libraries: {
        [ContractId.DataTypes]: dataTypesLib.address
      }
    });
}

export default deployLendingPairFactory
deployLendingPairFactory.tags = [`${ContractId.LendingPairFactory}`]