import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import {
    IPriceOracleAggregator,
    JumpRateModelV2,
    LendingPair as BLendingPair,
    MockToken,
    Vault as BVault,
    WrapperToken,
    LendingPairHelper as BLendingPairHelper,
    DebtToken,
  } from "../types";
import deployLendingPairFactory from "../deploy/7-deploy-LendingPairFactory";

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

let LendingPairFactory

describe("LendingPairFactory", function() {

    before(async function() {
        accounts = await ethers.getSigners();

        ([
            admin,
            bob,
            frank,
        ] = await Promise.all(accounts.slice(0, 10).map(x => x.getAddress())))


        // LendingPairFactory = await deployLendingPairFactory(

        // )
    })

    it("createIR", async function() {

    })

    it("createPair", async function() {

    })

})
