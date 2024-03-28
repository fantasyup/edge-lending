import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId } from "../helpers/types"

const deployLendingPairFactory: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments: { deploy, get }, getNamedAccounts } = hre;
    const { deployer, blackSmithTeam } = await getNamedAccounts();

    const dataTypesLib = await get(ContractId.DataTypes)
    const lendingPairImplementation = await get(ContractId.LendingPair)
    const debtTokenImplementation = await get(ContractId.DebtToken)
    const collateralWrapperImplementation = await get(ContractId.CollateralWrapperToken)
    const borrowWrapperImpl = await get(ContractId.WrapperToken)
    
    // deploy library with deterministic set to true
    const ClonesLib = await deploy('Clones', {
      from: deployer,
      args: [],
      deterministicDeployment: true
    })


    await deploy(ContractId.LendingPairFactory, {
      from: deployer,
      args: [
        blackSmithTeam,
        lendingPairImplementation.address,
        collateralWrapperImplementation.address,
        debtTokenImplementation.address,
        borrowWrapperImpl.address
      ],
      log: true,
      libraries: {
        [ContractId.DataTypes]: dataTypesLib.address,
        'Clones': ClonesLib.address
      }
    });
}

export default deployLendingPairFactory
deployLendingPairFactory.tags = [`${ContractId.LendingPairFactory}`]
