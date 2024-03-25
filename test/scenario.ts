import env, { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import { deployMockToken, deployWrappedToken, getLendingPairDeployment } from "../helpers/contracts";
import {
  depositInVault,
  makeLendingPairTestSuiteVars,
  initializeWrapperTokens,
  LendingPairHelpers,
  advanceNBlocks,
  TestVars,
  runTestSuite,
} from "./lib";
import { LendingPair } from "../design/LendingPair";
import deployLendingPair from "../deploy/6-deploy-LendingPair";

const initialExchangeRateMantissa = "1000000000000000000";
const reserveFactorMantissa = "500000000000000000";
// 150%
const collateralFactor = BigNumber.from(15).mul(BigNumber.from(10).pow(17));
// 0.005%
const liquidationFee = BigNumber.from(5).mul(BigNumber.from(10).pow(16));

runTestSuite("scenarios", (vars: TestVars) => {
  it("lending pair with different decimal places borrow & collateral asset", async () => {    
    const [admin, bob, frank] = vars.accounts;
    // await Promise.all(
    //   [
    //     [6, 18],
    //     // [18, 6],
    //     // [3, 5],
    //   ].map(async ([BorrowTokenDecimalPlaces, CollateralTokenDecimalPlaces]) => {
        const BorrowTokenDecimalPlaces = 6;
        const CollateralTokenDecimalPlaces = 18;
        const {
          CollateralWrapperToken: newCollateralWrapperToken,
          DebtToken: newDebtWrapperToken,
          BorrowWrapperToken: newBorrowAssetWrapper,
          MockPriceOracle,
          Vault,
          InterestRateModel,
          LendingPair: newLendingPair
        } = vars;

        const CollateralTokenDecimal = BigNumber.from(10).pow(CollateralTokenDecimalPlaces);
        const BorrowTokenDecimal = BigNumber.from(10).pow(BorrowTokenDecimalPlaces);

        const CollateralAsset = await deployMockToken(CollateralTokenDecimalPlaces);
        const BorrowTokenWithDecimals = await deployMockToken(BorrowTokenDecimalPlaces);
        // const newBorrowAssetWrapper = await deployWrappedToken();
        // console.log(newBorrowAssetWrapper.address)
        await initializeWrapperTokens(
          newLendingPair.address,
          newBorrowAssetWrapper,
          BorrowTokenWithDecimals.address
        );

        // collateral wrapper token
        await initializeWrapperTokens(
          newLendingPair.address,
          newCollateralWrapperToken,
          CollateralAsset.address
        );

        // debt token
        await initializeWrapperTokens(
          newLendingPair.address,
          newDebtWrapperToken,
          BorrowTokenWithDecimals.address
        );

        await newLendingPair.initialize(
          "test",
          "tst",
          BorrowTokenWithDecimals.address,
          CollateralAsset.address,
          {
            initialExchangeRateMantissa: initialExchangeRateMantissa,
            reserveFactorMantissa,
            collateralFactor,
            wrappedBorrowAsset: newBorrowAssetWrapper.address,
            liquidationFee,
            debtToken: newDebtWrapperToken.address,
          },
          newCollateralWrapperToken.address,
          admin.address
        );

        const helper = LendingPairHelpers(
          Vault,
          newLendingPair,
          BorrowTokenWithDecimals,
          CollateralAsset
        );

        // approve lending pair contract
        await helper.approveLendingPairInVault(admin, true)
        await helper.approveLendingPairInVault(frank, true)
        await helper.approveLendingPairInVault(admin, true)


        // deposit 1000 asset
        await helper.depositCollateralAsset(
          frank,
          BigNumber.from(1000).mul(CollateralTokenDecimal)
        );

        await helper.depositBorrowAsset(
          bob,
          BigNumber.from(1000).mul(BorrowTokenDecimal),
          BorrowTokenWithDecimals
        );

      //   // check decimals
      //   expect(await newLendingPair.asset()).to.eq(BorrowTokenWith6Decimals.address);

      //   await expect(
      //     newLendingPair
      //       .connect(frank.signer)
      //       .borrow(BigNumber.from(672).mul(BorrowTokenDecimal), frank.address)
      //   ).to.revertedWith("BORROWING_MORE_THAN_ALLOWED");

      //   // /// frank borrows 100
      //   await newLendingPair
      //     .connect(frank.signer)
      //     .borrow(BigNumber.from(100).mul(BorrowTokenDecimal), frank.address);

      //   // collateral transfer - can not transfer more than allowed
      //   await expect(
      //     newCollateralWrapperToken
      //       .connect(frank.signer)
      //       .transfer(bob.address, BigNumber.from(1000).mul(CollateralTokenDecimal))
      //   ).to.revertedWith("EXCEEDS_ALLOWED");

      //   // can transfer some that doesn't affect loan position
      //   await newCollateralWrapperToken
      //     .connect(frank.signer)
      //     .transfer(bob.address, BigNumber.from(10).mul(CollateralTokenDecimal));

      //   // test liquidate
      //   // should not liquidate
      //   const tx = await (await newLendingPair.liquidate(frank.address)).wait();
      //   expect(tx.events?.find((x) => x.event === "Liquidate")).to.be.undefined;

      //   // increase borrow asset price to liquidate
      //   await (
      //     await MockPriceOracle.setPrice(
      //       BorrowTokenWith6Decimals.address,
      //       BigNumber.from(30000000).mul(CollateralTokenDecimal)
      //     )
      //   ).wait();

      //   await helper.depositInVault(
      //     BorrowTokenWith6Decimals,
      //     admin.signer,
      //     BigNumber.from(800).mul(BorrowTokenDecimal)
      //   );
      //   await advanceNBlocks(10);
      //   await expect(newLendingPair.liquidate(frank.address)).to.emit(newLendingPair, "Liquidate");
      // })
    // );
  });
});

// deposit
// borrow
// earn interest
// deposit
//
