import { ethers, waffle } from "hardhat";
import { Signer } from "ethers";
import { expect, assert } from "chai";
import {
  Control as BSControl,
  IOracle,
  JumpRateModelV2,
  LendingPair as BLendingPair,
  MockToken,
  Vault as BVault,
} from "../types";

describe("LendingPair", async function () {
  let accounts: Signer[];
  // let
  let Vault: BVault;
  // let MockToken: MockToken
  let LendingPair: BLendingPair;
  let Control: BSControl;
  let MockPriceOracle: IOracle;
  let borrowAsset: MockToken;
  let collateralAsset: MockToken;
  let wrappedToken: MockToken;
  let interestRateModel: JumpRateModelV2;

  let userAcc: string;
  let anotherUserAcc: string;
  let thirdUser: string;

  // fake users used in testing
  let alice: string
  let bob: string
  let frank: string

  const flashLoanRate = ethers.utils.parseUnits("0.05", 18);
  const BASE = ethers.utils.parseUnits("1", 18);


  async function depositLendingPair(account: string, asset: MockToken, amountToDeposit: number) {
    await asset.setBalanceTo(account, amountToDeposit)
    await asset.approve(Vault.address, amountToDeposit)
    await Vault.deposit(asset.address, account, account, amountToDeposit)
    
    // deposit borrow asset
    await Vault.lendingPairTransfer(
        asset.address,
        LendingPair.address,
        amountToDeposit
    )
  }

  before(async function () {
    // initialize
    accounts = await ethers.getSigners();

    userAcc = await accounts[0].getAddress();
    anotherUserAcc = await accounts[1].getAddress();
    thirdUser = await accounts[3].getAddress();

    const VaultFactory = await ethers.getContractFactory("Vault");
    const LendingPairFactory = await ethers.getContractFactory("LendingPair");
    const ControlFactory = await ethers.getContractFactory("Control");
    const MockPriceOracleFactory = await ethers.getContractFactory(
      "MockPriceOracle"
    );
    const InterestRateFactory = await ethers.getContractFactory(
      "JumpRateModelV2"
    );
    const WrapperToken = await ethers.getContractFactory("WrapperToken")
    const token = await ethers.getContractFactory("MockToken");

    Vault = (await VaultFactory.deploy()) as BVault;
    await Vault.initialize(flashLoanRate, userAcc);

    borrowAsset = (await token.deploy()) as MockToken;
    collateralAsset = (await token.deploy()) as MockToken;
    wrappedToken = (await WrapperToken.deploy()) as MockToken
    Control = (await ControlFactory.deploy()) as BSControl;
    
    interestRateModel = (await InterestRateFactory.deploy(
      "30000000000000000",
      "52222222222200000",
      "70",
      "1000000000000000000",
      Control.address
    )) as JumpRateModelV2

    MockPriceOracle = (await MockPriceOracleFactory.deploy()) as IOracle;
    LendingPair = (await LendingPairFactory.deploy()) as BLendingPair;
  });

  it("initialize", async function () {
    await LendingPair.initialize(
      Control.address,
      MockPriceOracle.address,
      Vault.address,
      borrowAsset.address,
      collateralAsset.address,
      interestRateModel.address,
      "1000000000000000000",
      "500000000000000000",
      wrappedToken.address
    );
  });

  describe("- actions", async function() {
    const amountToDeposit = 1000

    it("deposit", async function() {
        // we have to deposit into the lending pair
        // via the vault
        // borrow asset
        await depositLendingPair(userAcc, borrowAsset, amountToDeposit)
        /// collateral asset
        await depositLendingPair(userAcc, collateralAsset, amountToDeposit)


        // console.log(
        //     (await LendingPair.borrowBalancePrior(userAcc)).toNumber()
        // )

        // // borrow $10
        await LendingPair["borrow(uint256)"](10);


        // console.log(
        //     (await LendingPair.accountBorrows(userAcc)).principal.toNumber()
        // )

        // move time to increase interest rate
        // await 
        // repay

        // await borrowAsset.approve()
        await LendingPair["repay(uint256)"](0);

        // withdraw

        await LendingPair.redeem(userAcc, userAcc, 5)

        

        // await borrowAsset.setBalanceTo(userAcc, amountToDeposit)
        // await borrowAsset.approve(Vault.address, amountToDeposit)
        // await Vault.deposit(borrowAsset.address, userAcc, userAcc, amountToDeposit)
        
        // // deposit borrow asset
        // await Vault.lendingPairTransfer(
        //     borrowAsset.address,
        //     LendingPair.address,
        //     amountToDeposit
        // )

        // // deposit collateral
        // await collateralAsset.setBalanceTo(userAcc, amountToDeposit)
        // await collateralAsset.approve(Vault.address, amountToDeposit)
        // await Vault.deposit(collateralAsset.address, userAcc, userAcc, amountToDeposit)

    })

    it("borrow", async function() {

    })



  })

});
