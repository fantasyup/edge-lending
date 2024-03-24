/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IBSLendingPairInterface extends ethers.utils.Interface {
  functions: {
    "accountInterestIndex(address)": FunctionFragment;
    "asset()": FunctionFragment;
    "borrowBalancePrior(address)": FunctionFragment;
    "borrowIndex()": FunctionFragment;
    "calcBorrowLimit(uint256)": FunctionFragment;
    "collateralAsset()": FunctionFragment;
    "collateralOfAccount(address)": FunctionFragment;
    "debtToken()": FunctionFragment;
    "depositBorrowAsset(address,uint256)": FunctionFragment;
    "depositCollateral(address,uint256)": FunctionFragment;
    "getMaxWithdrawAllowed(address)": FunctionFragment;
    "initialize(address,address,tuple,address,address)": FunctionFragment;
    "oracle()": FunctionFragment;
    "redeem(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountInterestIndex",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "asset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrowBalancePrior",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calcBorrowLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collateralOfAccount",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "debtToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositBorrowAsset",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositCollateral",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxWithdrawAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      string,
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accountInterestIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowBalancePrior",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcBorrowLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralOfAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debtToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositBorrowAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxWithdrawAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;

  events: {
    "ActionPaused(uint8,uint256)": EventFragment;
    "ActionUnPaused(uint8,uint256)": EventFragment;
    "Borrow(address,uint256)": EventFragment;
    "Deposit(address,address,address,address,uint256)": EventFragment;
    "FlashLoan(address,address,address,uint256,uint256)": EventFragment;
    "InterestAccrued(address,uint256,uint256,uint256,uint256)": EventFragment;
    "InterestShortCircuit(uint256)": EventFragment;
    "Liquidate(address,address,address,uint256,address)": EventFragment;
    "Redeem(address,address,address,address,uint256,uint256)": EventFragment;
    "Repay(address,address,address,address,uint256)": EventFragment;
    "ReserveWithdraw(address,uint256)": EventFragment;
    "WithdrawCollateral(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ActionPaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ActionUnPaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FlashLoan"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InterestAccrued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InterestShortCircuit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Liquidate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawCollateral"): EventFragment;
}

export class IBSLendingPair extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IBSLendingPairInterface;

  functions: {
    accountInterestIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "accountInterestIndex(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    asset(overrides?: CallOverrides): Promise<[string]>;

    "asset()"(overrides?: CallOverrides): Promise<[string]>;

    borrowBalancePrior(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "borrowBalancePrior(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    borrowIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    "borrowIndex()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    calcBorrowLimit(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "calcBorrowLimit(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collateralAsset(overrides?: CallOverrides): Promise<[string]>;

    "collateralAsset()"(overrides?: CallOverrides): Promise<[string]>;

    collateralOfAccount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "collateralOfAccount(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    debtToken(overrides?: CallOverrides): Promise<[string]>;

    "debtToken()"(overrides?: CallOverrides): Promise<[string]>;

    depositBorrowAsset(
      _tokenReceipeint: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "depositBorrowAsset(address,uint256)"(
      _tokenReceipeint: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositCollateral(
      _tokenReceipeint: string,
      _vaultShareAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "depositCollateral(address,uint256)"(
      _tokenReceipeint: string,
      _vaultShareAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMaxWithdrawAllowed(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "getMaxWithdrawAllowed(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _asset: string,
      _collateralAsset: string,
      borrowConfig: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _wrappedCollateralAsset: string,
      _pauseGuardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address,address,(address,uint256,uint256,uint256,address,uint256,address),address,address)"(
      _asset: string,
      _collateralAsset: string,
      borrowConfig: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _wrappedCollateralAsset: string,
      _pauseGuardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    "oracle()"(overrides?: CallOverrides): Promise<[string]>;

    redeem(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeem(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accountInterestIndex(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "accountInterestIndex(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  asset(overrides?: CallOverrides): Promise<string>;

  "asset()"(overrides?: CallOverrides): Promise<string>;

  borrowBalancePrior(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "borrowBalancePrior(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

  "borrowIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

  calcBorrowLimit(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calcBorrowLimit(uint256)"(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collateralAsset(overrides?: CallOverrides): Promise<string>;

  "collateralAsset()"(overrides?: CallOverrides): Promise<string>;

  collateralOfAccount(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "collateralOfAccount(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  debtToken(overrides?: CallOverrides): Promise<string>;

  "debtToken()"(overrides?: CallOverrides): Promise<string>;

  depositBorrowAsset(
    _tokenReceipeint: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "depositBorrowAsset(address,uint256)"(
    _tokenReceipeint: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositCollateral(
    _tokenReceipeint: string,
    _vaultShareAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "depositCollateral(address,uint256)"(
    _tokenReceipeint: string,
    _vaultShareAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMaxWithdrawAllowed(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "getMaxWithdrawAllowed(address)"(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _asset: string,
    _collateralAsset: string,
    borrowConfig: {
      interestRate: string;
      initialExchangeRateMantissa: BigNumberish;
      reserveFactorMantissa: BigNumberish;
      collateralFactor: BigNumberish;
      wrappedBorrowAsset: string;
      liquidationFee: BigNumberish;
      debtToken: string;
    },
    _wrappedCollateralAsset: string,
    _pauseGuardian: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address,address,(address,uint256,uint256,uint256,address,uint256,address),address,address)"(
    _asset: string,
    _collateralAsset: string,
    borrowConfig: {
      interestRate: string;
      initialExchangeRateMantissa: BigNumberish;
      reserveFactorMantissa: BigNumberish;
      collateralFactor: BigNumberish;
      wrappedBorrowAsset: string;
      liquidationFee: BigNumberish;
      debtToken: string;
    },
    _wrappedCollateralAsset: string,
    _pauseGuardian: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  oracle(overrides?: CallOverrides): Promise<string>;

  "oracle()"(overrides?: CallOverrides): Promise<string>;

  redeem(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeem(address,uint256)"(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accountInterestIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "accountInterestIndex(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    asset(overrides?: CallOverrides): Promise<string>;

    "asset()"(overrides?: CallOverrides): Promise<string>;

    borrowBalancePrior(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowBalancePrior(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

    "borrowIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

    calcBorrowLimit(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcBorrowLimit(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralAsset(overrides?: CallOverrides): Promise<string>;

    "collateralAsset()"(overrides?: CallOverrides): Promise<string>;

    collateralOfAccount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collateralOfAccount(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtToken(overrides?: CallOverrides): Promise<string>;

    "debtToken()"(overrides?: CallOverrides): Promise<string>;

    depositBorrowAsset(
      _tokenReceipeint: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositBorrowAsset(address,uint256)"(
      _tokenReceipeint: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositCollateral(
      _tokenReceipeint: string,
      _vaultShareAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositCollateral(address,uint256)"(
      _tokenReceipeint: string,
      _vaultShareAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getMaxWithdrawAllowed(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMaxWithdrawAllowed(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _asset: string,
      _collateralAsset: string,
      borrowConfig: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _wrappedCollateralAsset: string,
      _pauseGuardian: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,(address,uint256,uint256,uint256,address,uint256,address),address,address)"(
      _asset: string,
      _collateralAsset: string,
      borrowConfig: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _wrappedCollateralAsset: string,
      _pauseGuardian: string,
      overrides?: CallOverrides
    ): Promise<void>;

    oracle(overrides?: CallOverrides): Promise<string>;

    "oracle()"(overrides?: CallOverrides): Promise<string>;

    redeem(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "redeem(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ActionPaused(
      action: null,
      timestamp: null
    ): TypedEventFilter<
      [number, BigNumber],
      { action: number; timestamp: BigNumber }
    >;

    ActionUnPaused(
      action: null,
      timestamp: null
    ): TypedEventFilter<
      [number, BigNumber],
      { action: number; timestamp: BigNumber }
    >;

    Borrow(
      borrower: string | null,
      amount: null
    ): TypedEventFilter<
      [string, BigNumber],
      { borrower: string; amount: BigNumber }
    >;

    Deposit(
      pair: string | null,
      asset: string | null,
      tokenReceipeint: string | null,
      user: null,
      amount: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber],
      {
        pair: string;
        asset: string;
        tokenReceipeint: string;
        user: string;
        amount: BigNumber;
      }
    >;

    FlashLoan(
      target: string | null,
      initiator: string | null,
      asset: string | null,
      amount: null,
      premium: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        target: string;
        initiator: string;
        asset: string;
        amount: BigNumber;
        premium: BigNumber;
      }
    >;

    InterestAccrued(
      pair: string | null,
      accrualBlockNumber: null,
      borrowIndex: null,
      totalBorrows: null,
      totalReserves: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        pair: string;
        accrualBlockNumber: BigNumber;
        borrowIndex: BigNumber;
        totalBorrows: BigNumber;
        totalReserves: BigNumber;
      }
    >;

    InterestShortCircuit(
      blockNumber: null
    ): TypedEventFilter<[BigNumber], { blockNumber: BigNumber }>;

    Liquidate(
      pair: string | null,
      asset: string | null,
      user: string | null,
      liquidatedCollateralAmount: null,
      liquidator: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, string],
      {
        pair: string;
        asset: string;
        user: string;
        liquidatedCollateralAmount: BigNumber;
        liquidator: string;
      }
    >;

    Redeem(
      pair: string | null,
      asset: string | null,
      user: string | null,
      to: null,
      amount: null,
      amountofWrappedBurned: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber, BigNumber],
      {
        pair: string;
        asset: string;
        user: string;
        to: string;
        amount: BigNumber;
        amountofWrappedBurned: BigNumber;
      }
    >;

    Repay(
      pair: string | null,
      asset: string | null,
      beneficiary: string | null,
      repayer: null,
      amount: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber],
      {
        pair: string;
        asset: string;
        beneficiary: string;
        repayer: string;
        amount: BigNumber;
      }
    >;

    ReserveWithdraw(
      user: null,
      shares: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; shares: BigNumber }
    >;

    WithdrawCollateral(
      account: null,
      amount: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    accountInterestIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "accountInterestIndex(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    asset(overrides?: CallOverrides): Promise<BigNumber>;

    "asset()"(overrides?: CallOverrides): Promise<BigNumber>;

    borrowBalancePrior(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowBalancePrior(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

    "borrowIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

    calcBorrowLimit(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcBorrowLimit(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralAsset(overrides?: CallOverrides): Promise<BigNumber>;

    "collateralAsset()"(overrides?: CallOverrides): Promise<BigNumber>;

    collateralOfAccount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collateralOfAccount(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtToken(overrides?: CallOverrides): Promise<BigNumber>;

    "debtToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    depositBorrowAsset(
      _tokenReceipeint: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "depositBorrowAsset(address,uint256)"(
      _tokenReceipeint: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositCollateral(
      _tokenReceipeint: string,
      _vaultShareAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "depositCollateral(address,uint256)"(
      _tokenReceipeint: string,
      _vaultShareAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMaxWithdrawAllowed(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "getMaxWithdrawAllowed(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _asset: string,
      _collateralAsset: string,
      borrowConfig: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _wrappedCollateralAsset: string,
      _pauseGuardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address,address,(address,uint256,uint256,uint256,address,uint256,address),address,address)"(
      _asset: string,
      _collateralAsset: string,
      borrowConfig: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _wrappedCollateralAsset: string,
      _pauseGuardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    "oracle()"(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeem(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accountInterestIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "accountInterestIndex(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "asset()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowBalancePrior(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "borrowBalancePrior(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "borrowIndex()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calcBorrowLimit(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calcBorrowLimit(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "collateralAsset()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralOfAccount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collateralOfAccount(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debtToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "debtToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositBorrowAsset(
      _tokenReceipeint: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "depositBorrowAsset(address,uint256)"(
      _tokenReceipeint: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositCollateral(
      _tokenReceipeint: string,
      _vaultShareAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "depositCollateral(address,uint256)"(
      _tokenReceipeint: string,
      _vaultShareAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMaxWithdrawAllowed(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "getMaxWithdrawAllowed(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _asset: string,
      _collateralAsset: string,
      borrowConfig: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _wrappedCollateralAsset: string,
      _pauseGuardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,(address,uint256,uint256,uint256,address,uint256,address),address,address)"(
      _asset: string,
      _collateralAsset: string,
      borrowConfig: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _wrappedCollateralAsset: string,
      _pauseGuardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "oracle()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeem(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
