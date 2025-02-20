import { task } from "hardhat/config";
import {_PAIRS} from '../helpers/deploy/constants';
import { ContractId,  } from "../helpers/types"

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
      
    const tx = await lendingPairContract.createLendingPairWithProxy(
      pairName,
      Pair.Symbol,
      Pair.PauseGuardian,
      Pair.CollateralAsset,
      _borrowVars
    )
    console.log('tx',tx);
  })