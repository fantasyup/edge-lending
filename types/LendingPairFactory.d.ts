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

interface LendingPairFactoryInterface extends ethers.utils.Interface {
  functions: {
    "allPairs(uint256)": FunctionFragment;
    "borrowAssetWrapperImplementation()": FunctionFragment;
    "collateralWrapperImplementation()": FunctionFragment;
    "createIR(tuple,address)": FunctionFragment;
    "createLendingPairWithProxy(string,string,address,address,tuple)": FunctionFragment;
    "debtTokenImplementation()": FunctionFragment;
    "disableIR(address)": FunctionFragment;
    "lendingPairImplementation()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "rewardDistributionManager()": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateBorrowAssetWrapperImpl(address)": FunctionFragment;
    "updateCollateralWrapperImpl(address)": FunctionFragment;
    "updateDebtTokenImpl(address)": FunctionFragment;
    "updatePairImpl(address)": FunctionFragment;
    "updateRewardManager(address)": FunctionFragment;
    "validInterestRateModels(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allPairs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowAssetWrapperImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collateralWrapperImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createIR",
    values: [
      {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
        borrowRateMaxMantissa: BigNumberish;
        blocksPerYear: BigNumberish;
      },
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createLendingPairWithProxy",
    values: [
      string,
      string,
      string,
      string,
      {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        liquidationFee: BigNumberish;
        interestRateModel: string;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "debtTokenImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "disableIR", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lendingPairImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardDistributionManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateBorrowAssetWrapperImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCollateralWrapperImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDebtTokenImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePairImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewardManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "validInterestRateModels",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowAssetWrapperImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralWrapperImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createIR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createLendingPairWithProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "debtTokenImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "disableIR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lendingPairImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardDistributionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateBorrowAssetWrapperImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCollateralWrapperImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDebtTokenImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePairImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRewardManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validInterestRateModels",
    data: BytesLike
  ): Result;

  events: {
    "LogicContractUpdated(address)": EventFragment;
    "NewInterestRateModel(address,uint256)": EventFragment;
    "NewLendingPair(address,uint256)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogicContractUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewInterestRateModel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewLendingPair"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export class LendingPairFactory extends Contract {
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

  interface: LendingPairFactoryInterface;

  functions: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    borrowAssetWrapperImplementation(
      overrides?: CallOverrides
    ): Promise<[string]>;

    "borrowAssetWrapperImplementation()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    collateralWrapperImplementation(
      overrides?: CallOverrides
    ): Promise<[string]>;

    "collateralWrapperImplementation()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    createIR(
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
        borrowRateMaxMantissa: BigNumberish;
        blocksPerYear: BigNumberish;
      },
      _team: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createIR((uint256,uint256,uint256,uint256,uint256,uint256),address)"(
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
        borrowRateMaxMantissa: BigNumberish;
        blocksPerYear: BigNumberish;
      },
      _team: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createLendingPairWithProxy(
      _lendingPairName: string,
      _lendingPairSymbol: string,
      _pauseGuardian: string,
      _collateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        liquidationFee: BigNumberish;
        interestRateModel: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createLendingPairWithProxy(string,string,address,address,(address,uint256,uint256,uint256,uint256,address))"(
      _lendingPairName: string,
      _lendingPairSymbol: string,
      _pauseGuardian: string,
      _collateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        liquidationFee: BigNumberish;
        interestRateModel: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    debtTokenImplementation(overrides?: CallOverrides): Promise<[string]>;

    "debtTokenImplementation()"(overrides?: CallOverrides): Promise<[string]>;

    disableIR(
      ir: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "disableIR(address)"(
      ir: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lendingPairImplementation(overrides?: CallOverrides): Promise<[string]>;

    "lendingPairImplementation()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "pause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    "paused()"(overrides?: CallOverrides): Promise<[boolean]>;

    rewardDistributionManager(overrides?: CallOverrides): Promise<[string]>;

    "rewardDistributionManager()"(overrides?: CallOverrides): Promise<[string]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unpause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateBorrowAssetWrapperImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateBorrowAssetWrapperImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateCollateralWrapperImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateCollateralWrapperImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateDebtTokenImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateDebtTokenImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePairImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updatePairImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRewardManager(
      _newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateRewardManager(address)"(
      _newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validInterestRateModels(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "validInterestRateModels(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allPairs(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  borrowAssetWrapperImplementation(overrides?: CallOverrides): Promise<string>;

  "borrowAssetWrapperImplementation()"(
    overrides?: CallOverrides
  ): Promise<string>;

  collateralWrapperImplementation(overrides?: CallOverrides): Promise<string>;

  "collateralWrapperImplementation()"(
    overrides?: CallOverrides
  ): Promise<string>;

  createIR(
    _interestRateVars: {
      baseRatePerYear: BigNumberish;
      multiplierPerYear: BigNumberish;
      jumpMultiplierPerYear: BigNumberish;
      optimal: BigNumberish;
      borrowRateMaxMantissa: BigNumberish;
      blocksPerYear: BigNumberish;
    },
    _team: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createIR((uint256,uint256,uint256,uint256,uint256,uint256),address)"(
    _interestRateVars: {
      baseRatePerYear: BigNumberish;
      multiplierPerYear: BigNumberish;
      jumpMultiplierPerYear: BigNumberish;
      optimal: BigNumberish;
      borrowRateMaxMantissa: BigNumberish;
      blocksPerYear: BigNumberish;
    },
    _team: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createLendingPairWithProxy(
    _lendingPairName: string,
    _lendingPairSymbol: string,
    _pauseGuardian: string,
    _collateralAsset: string,
    _borrowVars: {
      borrowAsset: string;
      initialExchangeRateMantissa: BigNumberish;
      reserveFactorMantissa: BigNumberish;
      collateralFactor: BigNumberish;
      liquidationFee: BigNumberish;
      interestRateModel: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createLendingPairWithProxy(string,string,address,address,(address,uint256,uint256,uint256,uint256,address))"(
    _lendingPairName: string,
    _lendingPairSymbol: string,
    _pauseGuardian: string,
    _collateralAsset: string,
    _borrowVars: {
      borrowAsset: string;
      initialExchangeRateMantissa: BigNumberish;
      reserveFactorMantissa: BigNumberish;
      collateralFactor: BigNumberish;
      liquidationFee: BigNumberish;
      interestRateModel: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  debtTokenImplementation(overrides?: CallOverrides): Promise<string>;

  "debtTokenImplementation()"(overrides?: CallOverrides): Promise<string>;

  disableIR(
    ir: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "disableIR(address)"(
    ir: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lendingPairImplementation(overrides?: CallOverrides): Promise<string>;

  "lendingPairImplementation()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "pause()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  "paused()"(overrides?: CallOverrides): Promise<boolean>;

  rewardDistributionManager(overrides?: CallOverrides): Promise<string>;

  "rewardDistributionManager()"(overrides?: CallOverrides): Promise<string>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unpause()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateBorrowAssetWrapperImpl(
    _newLogicContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateBorrowAssetWrapperImpl(address)"(
    _newLogicContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateCollateralWrapperImpl(
    _newLogicContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateCollateralWrapperImpl(address)"(
    _newLogicContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateDebtTokenImpl(
    _newLogicContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateDebtTokenImpl(address)"(
    _newLogicContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePairImpl(
    _newLogicContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updatePairImpl(address)"(
    _newLogicContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRewardManager(
    _newManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateRewardManager(address)"(
    _newManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validInterestRateModels(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "validInterestRateModels(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    borrowAssetWrapperImplementation(
      overrides?: CallOverrides
    ): Promise<string>;

    "borrowAssetWrapperImplementation()"(
      overrides?: CallOverrides
    ): Promise<string>;

    collateralWrapperImplementation(overrides?: CallOverrides): Promise<string>;

    "collateralWrapperImplementation()"(
      overrides?: CallOverrides
    ): Promise<string>;

    createIR(
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
        borrowRateMaxMantissa: BigNumberish;
        blocksPerYear: BigNumberish;
      },
      _team: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createIR((uint256,uint256,uint256,uint256,uint256,uint256),address)"(
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
        borrowRateMaxMantissa: BigNumberish;
        blocksPerYear: BigNumberish;
      },
      _team: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createLendingPairWithProxy(
      _lendingPairName: string,
      _lendingPairSymbol: string,
      _pauseGuardian: string,
      _collateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        liquidationFee: BigNumberish;
        interestRateModel: string;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "createLendingPairWithProxy(string,string,address,address,(address,uint256,uint256,uint256,uint256,address))"(
      _lendingPairName: string,
      _lendingPairSymbol: string,
      _pauseGuardian: string,
      _collateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        liquidationFee: BigNumberish;
        interestRateModel: string;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    debtTokenImplementation(overrides?: CallOverrides): Promise<string>;

    "debtTokenImplementation()"(overrides?: CallOverrides): Promise<string>;

    disableIR(ir: string, overrides?: CallOverrides): Promise<void>;

    "disableIR(address)"(ir: string, overrides?: CallOverrides): Promise<void>;

    lendingPairImplementation(overrides?: CallOverrides): Promise<string>;

    "lendingPairImplementation()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    "pause()"(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    "paused()"(overrides?: CallOverrides): Promise<boolean>;

    rewardDistributionManager(overrides?: CallOverrides): Promise<string>;

    "rewardDistributionManager()"(overrides?: CallOverrides): Promise<string>;

    unpause(overrides?: CallOverrides): Promise<void>;

    "unpause()"(overrides?: CallOverrides): Promise<void>;

    updateBorrowAssetWrapperImpl(
      _newLogicContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateBorrowAssetWrapperImpl(address)"(
      _newLogicContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCollateralWrapperImpl(
      _newLogicContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateCollateralWrapperImpl(address)"(
      _newLogicContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateDebtTokenImpl(
      _newLogicContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateDebtTokenImpl(address)"(
      _newLogicContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePairImpl(
      _newLogicContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updatePairImpl(address)"(
      _newLogicContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRewardManager(
      _newManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateRewardManager(address)"(
      _newManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    validInterestRateModels(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "validInterestRateModels(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    LogicContractUpdated(
      pairLogic: null
    ): TypedEventFilter<[string], { pairLogic: string }>;

    NewInterestRateModel(
      ir: null,
      timestamp: null
    ): TypedEventFilter<
      [string, BigNumber],
      { ir: string; timestamp: BigNumber }
    >;

    NewLendingPair(
      pair: null,
      created: null
    ): TypedEventFilter<
      [string, BigNumber],
      { pair: string; created: BigNumber }
    >;

    Paused(account: null): TypedEventFilter<[string], { account: string }>;

    Unpaused(account: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowAssetWrapperImplementation(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowAssetWrapperImplementation()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralWrapperImplementation(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collateralWrapperImplementation()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createIR(
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
        borrowRateMaxMantissa: BigNumberish;
        blocksPerYear: BigNumberish;
      },
      _team: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createIR((uint256,uint256,uint256,uint256,uint256,uint256),address)"(
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
        borrowRateMaxMantissa: BigNumberish;
        blocksPerYear: BigNumberish;
      },
      _team: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createLendingPairWithProxy(
      _lendingPairName: string,
      _lendingPairSymbol: string,
      _pauseGuardian: string,
      _collateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        liquidationFee: BigNumberish;
        interestRateModel: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createLendingPairWithProxy(string,string,address,address,(address,uint256,uint256,uint256,uint256,address))"(
      _lendingPairName: string,
      _lendingPairSymbol: string,
      _pauseGuardian: string,
      _collateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        liquidationFee: BigNumberish;
        interestRateModel: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    debtTokenImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    "debtTokenImplementation()"(overrides?: CallOverrides): Promise<BigNumber>;

    disableIR(
      ir: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "disableIR(address)"(
      ir: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lendingPairImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    "lendingPairImplementation()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "pause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    "paused()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardDistributionManager(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardDistributionManager()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unpause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateBorrowAssetWrapperImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateBorrowAssetWrapperImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateCollateralWrapperImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateCollateralWrapperImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateDebtTokenImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateDebtTokenImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePairImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updatePairImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRewardManager(
      _newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateRewardManager(address)"(
      _newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validInterestRateModels(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validInterestRateModels(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allPairs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowAssetWrapperImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "borrowAssetWrapperImplementation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralWrapperImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collateralWrapperImplementation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createIR(
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
        borrowRateMaxMantissa: BigNumberish;
        blocksPerYear: BigNumberish;
      },
      _team: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createIR((uint256,uint256,uint256,uint256,uint256,uint256),address)"(
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
        borrowRateMaxMantissa: BigNumberish;
        blocksPerYear: BigNumberish;
      },
      _team: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createLendingPairWithProxy(
      _lendingPairName: string,
      _lendingPairSymbol: string,
      _pauseGuardian: string,
      _collateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        liquidationFee: BigNumberish;
        interestRateModel: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createLendingPairWithProxy(string,string,address,address,(address,uint256,uint256,uint256,uint256,address))"(
      _lendingPairName: string,
      _lendingPairSymbol: string,
      _pauseGuardian: string,
      _collateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        liquidationFee: BigNumberish;
        interestRateModel: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    debtTokenImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "debtTokenImplementation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    disableIR(
      ir: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "disableIR(address)"(
      ir: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lendingPairImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lendingPairImplementation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "pause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardDistributionManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardDistributionManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unpause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateBorrowAssetWrapperImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateBorrowAssetWrapperImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateCollateralWrapperImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateCollateralWrapperImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateDebtTokenImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateDebtTokenImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePairImpl(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updatePairImpl(address)"(
      _newLogicContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRewardManager(
      _newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateRewardManager(address)"(
      _newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validInterestRateModels(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validInterestRateModels(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
