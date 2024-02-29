import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId, EthereumAddress } from "../helpers/types"

const deployPriceOracle: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments: { deploy }, getNamedAccounts } = hre;
  const { deployer, blackSmithTeam } = await getNamedAccounts();

  await deploy(ContractId.PriceOracle, {
    from: deployer,
    args: [blackSmithTeam],
    log: true,
  });

};

export default deployPriceOracle
deployPriceOracle.tags = ['PriceOracle']
