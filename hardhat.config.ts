import {HardhatUserConfig} from 'hardhat/types';
import { task } from "hardhat/config";
import "hardhat-typechain";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage"
// import "hardhat-contract-sizer"
import "hardhat-tracer"
import "hardhat-deploy"
import 'hardhat-deploy-ethers'
import { ethers } from 'ethers';
// import "hardhat-gas-reporter"

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  networks: {
    hardhat: {
      mnemonic: "test test test test test test test test test test test junk"
    }
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
  mocha: {
    timeout: 9000000
  }
};
