// import { HardhatRuntimeEnvironment } from "hardhat/types";
// import { DeployFunction } from "hardhat-deploy/types";
// import { ContractId } from "../helpers/types";

// import { ElementPTLiqudidationInfo } from "../helpers/constants";

// const deployLiquidationHelper: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//   const {
//     deployments: { deploy, get },
//     getNamedAccounts,
//   } = hre;
//   const { deployer } = await getNamedAccounts();

//   const {
//     BalancerV2Vault,
//     AaveV2LendingPoolAddressProvider,
//     ElementPTs,
//   } = ElementPTLiqudidationInfo;

//   const balancerPoolIds = ElementPTs.map((e) => e.balancerPTPoolId);
//   const edgePairs = ElementPTs.map((e) => e.edgePair);
//   const vault = await get(ContractId.Vault)

//   await deploy(ContractId.LiquidationHelper, {
//     from: deployer,
//     args: [AaveV2LendingPoolAddressProvider, BalancerV2Vault, vault.address, balancerPoolIds, edgePairs],
//     log: true,
//     deterministicDeployment: true,
//   });
// };

// export default deployLiquidationHelper;
// deployLiquidationHelper.tags = [`${ContractId.LiquidationHelper}`];
