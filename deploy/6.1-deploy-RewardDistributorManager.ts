import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId } from "../helpers/types"


const deployRewardDistributorManager: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments: { deploy, get }, getNamedAccounts } = hre;
    const { deployer, blackSmithTeam } = await getNamedAccounts();

    await deploy(ContractId.RewardDistributorManager, {
        from: deployer,
        args: [],
        log: true,
        libraries: {
        }
    });
}

export default deployRewardDistributorManager
deployRewardDistributorManager.tags = [`${ContractId.RewardDistributorManager}`]