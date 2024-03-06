import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId } from "../helpers/types"

const deployLendingPair: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments: { deploy }, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();

  // deploy library with deterministic set to true
  const DataTypesLib = await deploy(ContractId.DataTypes, {
    from: deployer,
    args: [],
    deterministicDeployment: true
  })

  await deploy(ContractId.LendingPair, {
    from: deployer,
    args: [],
    log: true,
    libraries: {
      [ContractId.DataTypes]: DataTypesLib.address
    }
  });

};

export default deployLendingPair
deployLendingPair.tags = ['LendingPair']
