import {HardhatUserConfig} from 'hardhat/types';
import { task } from "hardhat/config";
import "hardhat-typechain";
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import "solidity-coverage"
// import "hardhat-contract-sizer"
import "hardhat-tracer"
import "hardhat-deploy"
import 'hardhat-deploy-ethers'
// import "hardhat-gas-reporter"
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(await account.address);
  }
});

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

const INFURA_API_KEY = process.env.INFURA_API_KEY || "429eb57532b54560b1d4cc4201724bf0";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  networks: {
    hardhat: {
      accounts: {
        mnemonic: "test test test test test test test test test test test junk"
      }
    },
    kovan: {
      accounts: {
        mnemonic: process.env.MNEMONIC || "",
      },
      url: `https://kovan.infura.io/v3/${INFURA_API_KEY}`
    },
    rinkeby: {
      accounts: {
        mnemonic: process.env.MNEMONIC || ""
      },
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`
    },
  },
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500
      }
    }
  },
  typechain: {
    outDir: "types/",
    target: "ethers-v5",
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  namedAccounts: {
    deployer: 0,
    // @TODO replace with proper address
    blackSmithTeam: 1,
    // @TODO replace with proper address
    stakingContract: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd'

  },
  gasReporter: {
    enabled: true,
    // gasPrice: 110,
    // currency: 'USD',
  },
  etherscan: {
    apiKey: '3TPDHK79F94RUEIFTJ1EY24ZTKT8AFAMPS'
  },
  mocha: {
    timeout: 9000000
  }
} as HardhatUserConfig;
