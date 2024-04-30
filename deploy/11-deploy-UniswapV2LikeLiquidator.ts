import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId } from "../helpers/types"

const deployEdgeUniswapV2LikeLiquidator: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//     if (!process.env.DEPLOY_LIQUIDATOR || hre.network.name !== "hardhat") return

//     const { deployments: { deploy, get }, getNamedAccounts } = hre;
//     const { deployer } = await getNamedAccounts();

//     const vault = await get(ContractId.Vault)

//     // we are using mainnet addresses as default
//     const uniswapRouter = process.env.UNISWAP_ROUTER || "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
//     const uniswapFactory = process.env.UNISWAP_FACTORY || "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"
    
//     await deploy(ContractId.EdgeUniswapV2LikeLiquidator, {
//         from: deployer,
//         args: [
//           vault.address,
//           uniswapFactory,
//           uniswapRouter
//         ],
//         log: true,
//         libraries: {
//         }
//     });
}

export default deployEdgeUniswapV2LikeLiquidator
// deployEdgeUniswapV2LikeLiquidator.tags = [`${ContractId.EdgeUniswapV2LikeLiquidator}`]
