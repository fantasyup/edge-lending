import { task } from "hardhat/config";
import {_PAIRS} from '../helpers/deploy/constants';
import { ContractId,  } from "../helpers/types"
import { getLendingPairFactoryDeployment } from '../helpers/contracts';
import { 
    CollateralWrapperToken,
    DebtToken,
    IPriceOracleAggregator,
    JumpRateModelV2,
    LendingPair,
    LendingPairFactory,
    MockFlashBorrower,
    MockLendingPair,
    MockPriceOracle,
    MockToken,
    MockVault, PriceOracleAggregator, RewardDistributor, RewardDistributorFactory, RewardDistributorManager, UUPSProxy, VaultFactory, VaultStorageLayoutTester, WrapperToken,
    FeeWithdrawal,
    MockUniswapV2Router02,
    MockVaultUser,
} from "../types";
import { string } from "hardhat/internal/core/params/argumentTypes";
task('deploypair', 'Deploy New Lending-Pair')
  .addParam('pair', "The LendingPair's name")
  .setAction(async (taskArgs, hre) => {

    
    const pairName: string = taskArgs['pair']
    const Pair = _PAIRS[pairName]

    const BorrowVar = Pair.BorrowVars;

    const borrowAsset = BorrowVar.borrowAsset
    const initialExchangeRateMantissa =
    BorrowVar.initialExchangeRateMantissa
    const reserveFactorMantissa =
    BorrowVar.reserveFactorMantissa
    const collateralFactor =
    BorrowVar.collateralFactor
    const liquidationFee =
    BorrowVar.liquidationFee
    const interestRateModel =
    BorrowVar.interestRateModel

    const _borrowVars = {
      borrowAsset,
      initialExchangeRateMantissa,
      reserveFactorMantissa,
      collateralFactor,
      liquidationFee,
      interestRateModel,
    }

    const lendingPairFactory = await hre.ethers.getContractFactory(
        ContractId.LendingPairFactory
      )
    const lendingPairFactoryAddress = (await hre.deployments.get(ContractId.LendingPairFactory)).address;
  
    const lendingPairContract = await lendingPairFactory.attach(
        lendingPairFactoryAddress
      )
    const accounts = await hre.ethers.getSigners();

    const tx = await (await lendingPairContract.connect(accounts[0]).createLendingPairWithProxy(
      pairName,
      Pair.Symbol,
      Pair.PauseGuardian,
      Pair.CollateralAsset,
      Pair.BorrowVars
    )).wait();

    if (tx.events[1].event === 'NewLendingPair'){
        console.log('NewLendingPair: ', tx.events[1]!.args!.pair);
    }
    console.log(`tx hash:`, `https://etherscan.io/tx/${tx.transactionHash}`);

  })