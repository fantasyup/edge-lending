import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import {
    IPriceOracleAggregator,
    JumpRateModelV2,
    LendingPair as BLendingPair,
    MockToken,
    Vault as BVault,
    WrapperToken,
    LendingPairHelper as BLendingPairHelper,
    DebtToken,
    LendingPairFactory as BLendingPairFactory,
} from "../types";
import { 
    deployInterestRateModel,
    deployLendingPairFactory
} from "../helpers/contracts"
import { makeLendingPairTestSuiteVars } from "./lib";

// list of accounts
let accounts: Signer[];

let admin: string; // account used in deploying
let bob: string;
let frank: string;

let Vault: BVault;
let LendingPair: BLendingPair;
let MockPriceOracle: IPriceOracleAggregator;
let BorrowAsset: MockToken;
let CollateralAsset: MockToken
let BorrowAssetDepositWrapperToken: WrapperToken
let DebtWrapperToken: DebtToken
let CollateralWrapperToken: WrapperToken
let InterestRateModel: JumpRateModelV2;
let LendingPairHelper: BLendingPairHelper

let LendingPairFactory: BLendingPairFactory

describe("LendingPairFactory", function() {

    before(async function() {
        accounts = await ethers.getSigners();

        ([
            admin,
            bob,
            frank,
        ] = await Promise.all(accounts.slice(0, 10).map(x => x.getAddress())));

        ({
            Vault,
            LendingPair,
            MockPriceOracle,
            BorrowAsset,
            CollateralAsset,
            CollateralWrapperToken,
            BorrowAssetDepositWrapperToken,
            DebtWrapperToken,
        } = await makeLendingPairTestSuiteVars());

        LendingPairFactory = await deployLendingPairFactory(
            admin,
            LendingPair.address,
            CollateralWrapperToken.address,
            DebtWrapperToken.address,
            BorrowAssetDepositWrapperToken.address
        )
    })

    it("createIR", async function() {
        await expect(
            LendingPairFactory.createIR(
                {
                    baseRatePerYear: "30000000000000000",
                    multiplierPerYear: "52222222222200000",
                    jumpMultiplierPerYear: "70",
                    optimal: "1000000000000000000",
                },
                admin
            )
        ).to.not.be.reverted
    })

    it("createPair", async function() {
        const interestRateModel = await deployInterestRateModel(
            "30000000000000000",
            "52222222222200000",
            "70",
            "1000000000000000000",
            admin
          )
        
        const liquidationFee = BigNumber.from(5).mul(BigNumber.from(10).pow(16))
        const collateralFactor = BigNumber.from(15).mul(BigNumber.from(10).pow(17))

        await expect(
            LendingPairFactory.createLendingPairWithProxy(
                admin,
                MockPriceOracle.address,
                Vault.address,
                CollateralAsset.address,
                {
                    borrowAsset: BorrowAsset.address,
                    initialExchangeRateMantissa: "1000000000000000000",
                    reserveFactorMantissa: "500000000000000000",
                    collateralFactor,
                    liquidationFee
                },
                interestRateModel.address
            )
        ).to.not.be.reverted

        const pairAddress = await LendingPairFactory.allPairs(0)

        const lendingPair = LendingPair.attach(pairAddress)

        // confirm data provided is correct
        await expect(await lendingPair.collateralAsset()).eq(CollateralAsset.address)
        await expect(await lendingPair.asset()).eq(BorrowAsset.address)
        await expect(await lendingPair.vault()).eq(Vault.address)
        await expect(await lendingPair.interestRate()).eq(interestRateModel.address)

        await expect(await (await lendingPair.liquidationFee()).toString()).eq(liquidationFee.toString())
        await expect(await (await lendingPair.collateralFactor()).toString()).eq(collateralFactor.toString())
    })

})
