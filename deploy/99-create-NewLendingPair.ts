import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ContractId } from '../helpers/types';
import { getLendingPairFactoryDeployment } from '../helpers/contracts';
const createLendingPair: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const lendingPairFactory = await getLendingPairFactoryDeployment();
  if (
    !process.env.LendingPairName ||
    !process.env.LendingPairSymbol ||
    !process.env.PauseGuardian ||
    !process.env.CollateralAsset ||
    !process.env.BorrowAsset ||
    !process.env.InitialExchangeRateMantissa ||
    !process.env.ReserveFactorMantissa ||
    !process.env.CollateralFactor ||
    !process.env.LiquidationFee ||
    !process.env.InterestRateModel
  ) {
    console.log('Input Error');
    return;
  }
  const _lendingPairName = process.env.LendingPairName;
  const _lendingPairSymbol = process.env.LendingPairSymbol;
  const _pauseGuardian = process.env.PauseGuardian;
  const _collateralAsset = process.env.CollateralAsset;

  const borrowAsset = process.env.BorrowAsset;
  const initialExchangeRateMantissa = process.env.InitialExchangeRateMantissa;
  const reserveFactorMantissa = process.env.ReserveFactorMantissa;
  const collateralFactor = process.env.CollateralFactor;
  const liquidationFee = process.env.LiquidationFee;
  const interestRateModel = process.env.InterestRateModel;

  const _borrowVars = {
    borrowAsset,
    initialExchangeRateMantissa,
    reserveFactorMantissa,
    collateralFactor,
    liquidationFee,
    interestRateModel,
  };

  const tx = await lendingPairFactory.createLendingPairWithProxy(
    _lendingPairName,
    _lendingPairSymbol,
    _pauseGuardian,
    _collateralAsset,
    _borrowVars,
  );

  console.log('New Lending Pair Created tx:', tx.hash);
};

export default createLendingPair;
