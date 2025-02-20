import {PAIRS} from '../types';
export const _PAIRS: PAIRS = {
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