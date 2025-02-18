import { task } from "hardhat/config";


task('deploypair', 'Deploy New Lending-Pair')
  .addParam('factory', "The LendingPairFactory's address")
  .addParam('pair', "The LendingPair's name")
  .setAction(async (taskArgs, hre) => {

    const PAIRS = {
      'ETH-USDC-PAIR': {
        Symbol: 'ETHUSDC',
        PauseGuardian: '0x0000000000000000000000000000000000000000',
        CollateralAsset: '0x0000000000000000000000000000000000000000',
        BorrowVars: {
          borrowAsset: '0x0000000000000000000000000000000000000000',
          initialExchangeRateMantissa: '0',
          reserveFactorMantissa: '0',
          collateralFactor: '0',
          liquidationFee: '0',
          interestRateModel: '0x0000000000000000000000000000000000000000',
        },
      },
    }

    const Pair = PAIRS['ETH-USDC-PAIR'];
    const BorrowVar = PAIRS['ETH-USDC-PAIR']['BorrowVars'];

    const borrowAsset = BorrowVar['borrowAsset']
    const initialExchangeRateMantissa =
    BorrowVar['initialExchangeRateMantissa']
    const reserveFactorMantissa =
    BorrowVar['reserveFactorMantissa']
    const collateralFactor =
    BorrowVar['collateralFactor']
    const liquidationFee =
    BorrowVar['liquidationFee']
    const interestRateModel =
    BorrowVar['interestRateModel']

    const _borrowVars = {
      borrowAsset,
      initialExchangeRateMantissa,
      reserveFactorMantissa,
      collateralFactor,
      liquidationFee,
      interestRateModel,
    }
    const lendingPairFactory = await hre.ethers.getContractFactory(
      'LendingPairFactory'
    )
  
    const lendingPairContract = await lendingPairFactory.attach(
      taskArgs['factory']
    )
    const tx = await lendingPairContract.createLendingPairWithProxy(
      taskArgs['pair'],
      Pair['Symbol'],
      Pair['PauseGuardian'],
      Pair['CollateralAsset'],
      _borrowVars
    )
    console.log('tx',tx);
  })