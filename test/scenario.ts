import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import { deployLendingPair, deployMockToken, deployWrappedToken } from '../helpers/contracts';
import {
    depositInVault,
    makeLendingPairTestSuiteVars,
    initializeWrapperTokens,
    LendingPairHelper,
    advanceNBlocks
} from './lib'

let lendingPairTestHelper
let accounts: Signer[];

let admin: string; // account used in deploying
let bob: string;
let frank: string;
let alice: string;
let james: string;

const initialExchangeRateMantissa = "1000000000000000000"
const reserveFactorMantissa = "500000000000000000"
  // 150%
const collateralFactor = BigNumber.from(15).mul(BigNumber.from(10).pow(17))
// 0.005%
const liquidationFee = BigNumber.from(5).mul(BigNumber.from(10).pow(16))


describe("scenarios", async function () {
    before(async function() {
        accounts = await ethers.getSigners();
        ([
            admin,
            bob,
            frank,
            alice,
            james,
        ] = await Promise.all(accounts.slice(0, 10).map(x => x.getAddress())))
    })

    it("lending pair with different decimal places borrow & collateral asset", async function() {
        await Promise.all(
            [
                [6, 18],
                [18, 6],
                [3, 5]
            ].map(async([ BorrowTokenDecimalPlaces, CollateralTokenDecimalPlaces]) => {
                const frankSigner = await ethers.getSigner(frank);
                const {
                  CollateralWrapperToken: newCollateralWrapperToken,
                  DebtWrapperToken: newDebtWrapperToken,
                  MockPriceOracle,
                  Vault,
                  InterestRateModel
                } = await makeLendingPairTestSuiteVars(undefined, admin)

                const CollateralTokenDecimal = BigNumber.from(10).pow(CollateralTokenDecimalPlaces)
                const BorrowTokenDecimal = BigNumber.from(10).pow(BorrowTokenDecimalPlaces)
        
                const CollateralAsset = await deployMockToken(CollateralTokenDecimalPlaces);
                const BorrowTokenWith6Decimals = await deployMockToken(BorrowTokenDecimalPlaces);
                const newBorrowAssetWrapper = await deployWrappedToken()
                const newLendingPair = await deployLendingPair()
          
                await initializeWrapperTokens(
                  newLendingPair.address,
                  newBorrowAssetWrapper,
                  BorrowTokenWith6Decimals.address
                )
          
                // collateral wrapper token
                await initializeWrapperTokens(
                  newLendingPair.address,
                  newCollateralWrapperToken,
                  CollateralAsset.address
                )
                
                // debt token
                await initializeWrapperTokens(
                  newLendingPair.address,
                  newDebtWrapperToken,
                  BorrowTokenWith6Decimals.address
                )
          
                await newLendingPair.initialize(
                  admin,
                  MockPriceOracle.address,
                  Vault.address,
                  BorrowTokenWith6Decimals.address,
                  {
                    interestRate: InterestRateModel.address,
                    initialExchangeRateMantissa: initialExchangeRateMantissa,
                    reserveFactorMantissa,
                    collateralFactor,
                    wrappedBorrowAsset: newBorrowAssetWrapper.address,
                    liquidationFee, 
                    debtToken: newDebtWrapperToken.address
                  },
                  CollateralAsset.address,
                  newCollateralWrapperToken.address
                );
        
                const helper = LendingPairHelper(Vault, newLendingPair, BorrowTokenWith6Decimals, CollateralAsset)
                // deposit 1000 asset
                await helper.depositCollateralAsset(frank, BigNumber.from(1000).mul(CollateralTokenDecimal) )
                await helper.depositBorrowAsset(bob, BigNumber.from(1000).mul(BorrowTokenDecimal), BorrowTokenWith6Decimals)
          
                // check decimals
                expect(await newLendingPair.asset()).to.eq(BorrowTokenWith6Decimals.address)
          
                await expect(
                  newLendingPair.connect(await ethers.getSigner(frank)).borrow( BigNumber.from(672).mul(BorrowTokenDecimal) )
                ).to.revertedWith("BORROWING_MORE_THAN_ALLOWED")
                
                // /// frank borrows 100
                await newLendingPair.connect(frankSigner).borrow(BigNumber.from(100).mul(BorrowTokenDecimal))
        
                // collateral transfer - can not transfer more than allowed
                await expect(
                    newCollateralWrapperToken.connect(frankSigner).transfer(bob, BigNumber.from(1000).mul(CollateralTokenDecimal))
                ).to.revertedWith('EXCEEDS_ALLOWED')
        
                // can transfer some that doesn't affect loan position
                await newCollateralWrapperToken.connect(frankSigner).transfer(bob, BigNumber.from(10).mul(CollateralTokenDecimal))
        
                // test liquidate
                // should not liquidate
                const tx = await (await newLendingPair.liquidate(frank)).wait()
                expect(tx.events?.find(x => x.event === 'Liquidate')).to.be.undefined
        
                // increase borrow asset price to liquidate
                await (await MockPriceOracle.setPrice(BorrowTokenWith6Decimals.address, BigNumber.from(30000000).mul(CollateralTokenDecimal))).wait()
        
                await helper.depositInVault(BorrowTokenWith6Decimals, await ethers.getSigner(admin), BigNumber.from(800).mul(BorrowTokenDecimal))
                await advanceNBlocks(10)
                await expect(newLendingPair.liquidate(frank)).to.emit(newLendingPair, 'Liquidate')
            })
        )
      })
})

// deposit
// borrow
// earn interest
// deposit
// 