import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId } from "../helpers/types"


const deployRewardDistributorFactory: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments: { deploy, get }, getNamedAccounts } = hre;
    const { deployer, blackSmithTeam } = await getNamedAccounts();

    const owner = process.env.PRODUCTION ? blackSmithTeam : deployer
    const managerImplementation = await get(ContractId.RewardDistributor)

    await deploy(ContractId.RewardDistributorFactory, {
        from: deployer,
        args: [
            owner,
            managerImplementation.address,
        ],
        log: true,
        libraries: {
        }
    });
}

export default deployRewardDistributorFactory
deployRewardDistributorFactory.tags = [`${ContractId.RewardDistributorFactory}`]