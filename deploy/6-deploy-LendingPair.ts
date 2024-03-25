import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ContractId } from "../helpers/types"
import { BigNumber } from '@ethersproject/bignumber';

const deployLendingPair: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments: { deploy, get }, getNamedAccounts } = hre;
  const { deployer, blackSmithTeam } = await getNamedAccounts();

  // deploy library with deterministic set to true
  const DataTypesLib = await deploy(ContractId.DataTypes, {
    from: deployer,
    args: [],
    deterministicDeployment: true
  })

  // deploy library with deterministic set to true
  const SafeERC20Lib = await deploy(ContractId.SafeERC20, {
    from: deployer,
    args: [],
    deterministicDeployment: true
  })

  const vault = await get(ContractId.Vault)
  const oracle = await get(ContractId.PriceOracleAggregator)
  const feeWithdrawalAddr = blackSmithTeam
  /// @TODO update to share
  const feeshare = BigNumber.from(10).pow(18)
  const interestRateModel = await get(ContractId.JumpRateModelV2)

  await deploy(ContractId.LendingPair, {
    from: deployer,
    args: [
      vault.address,
      oracle.address,
      feeWithdrawalAddr,
      feeshare,
      interestRateModel.address
    ],
    log: true,
    libraries: {
      [ContractId.DataTypes]: DataTypesLib.address,
      [ContractId.SafeERC20]: SafeERC20Lib.address
    }
  });

};

export default deployLendingPair
deployLendingPair.tags = ['LendingPair']
