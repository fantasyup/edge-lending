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

interface RewardDistributorInterface extends ethers.utils.Interface {
  functions: {
    "accumulateReward(address,address,address)": FunctionFragment;
    "activatePendingRewards()": FunctionFragment;
    "add(tuple,address,bool)": FunctionFragment;
    "endTimestamp()": FunctionFragment;
    "guardian()": FunctionFragment;
    "initialize(address,uint256,uint256,address)": FunctionFragment;
    "massUpdatePools()": FunctionFragment;
    "pendingRewardActivation(uint256)": FunctionFragment;
    "pendingRewardToken(uint256,address)": FunctionFragment;
    "poolInfo(uint256)": FunctionFragment;
    "rewardAmountDistributePerSecond()": FunctionFragment;
    "rewardDistributorManager()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "set(uint256,uint128,bool)": FunctionFragment;
    "startTimestamp()": FunctionFragment;
    "tokenPoolIDPair(address)": FunctionFragment;
    "totalAllocPoint()": FunctionFragment;
    "updatePool(uint256)": FunctionFragment;
    "userInfo(uint256,address)": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accumulateReward",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "activatePendingRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "add",
    values: [
      {
        collateralTokenAllocPoint: BigNumberish;
        debtTokenAllocPoint: BigNumberish;
        borrowAssetTokenAllocPoint: BigNumberish;
      },
      string,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "endTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "massUpdatePools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRewardActivation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRewardToken",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardAmountDistributePerSecond",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardDistributorManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "startTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenPoolIDPair",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalAllocPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "accumulateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activatePendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "massUpdatePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingRewardActivation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardAmountDistributePerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardDistributorManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenPoolIDPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AccumulateReward(address,uint256,address,address)": EventFragment;
    "AddDistribution(address,address,tuple,uint256)": EventFragment;
    "Initialized(address,uint256,uint256,address,uint256)": EventFragment;
    "UpdateDistribution(uint256,uint256,uint256,uint256)": EventFragment;
    "Withdraw(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccumulateReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddDistribution"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateDistribution"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export class RewardDistributor extends Contract {
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

  interface: RewardDistributorInterface;

  functions: {
    accumulateReward(
      _tokenAddr: string,
      _from: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "accumulateReward(address,address,address)"(
      _tokenAddr: string,
      _from: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    activatePendingRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "activatePendingRewards()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    add(
      _allocPoints: {
        collateralTokenAllocPoint: BigNumberish;
        debtTokenAllocPoint: BigNumberish;
        borrowAssetTokenAllocPoint: BigNumberish;
      },
      _lendingPair: string,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "add((uint128,uint128,uint128),address,bool)"(
      _allocPoints: {
        collateralTokenAllocPoint: BigNumberish;
        debtTokenAllocPoint: BigNumberish;
        borrowAssetTokenAllocPoint: BigNumberish;
      },
      _lendingPair: string,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "endTimestamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    guardian(overrides?: CallOverrides): Promise<[string]>;

    "guardian()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address,uint256,uint256,address)"(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    massUpdatePools(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "massUpdatePools()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pendingRewardActivation(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "pendingRewardActivation(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    pendingRewardToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "pendingRewardToken(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        receiptTokenAddr: string;
        lastUpdateTimestamp: BigNumber;
        accRewardTokenPerShare: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    "poolInfo(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        receiptTokenAddr: string;
        lastUpdateTimestamp: BigNumber;
        accRewardTokenPerShare: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    rewardAmountDistributePerSecond(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "rewardAmountDistributePerSecond()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardDistributorManager(overrides?: CallOverrides): Promise<[string]>;

    "rewardDistributorManager()"(overrides?: CallOverrides): Promise<[string]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    "rewardToken()"(overrides?: CallOverrides): Promise<[string]>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "set(uint256,uint128,bool)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "startTimestamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenPoolIDPair(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokenPoolIDPair(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalAllocPoint()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updatePool(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        pendingReward: BigNumber;
        rewardDebt: BigNumber;
      }
    >;

    "userInfo(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        pendingReward: BigNumber;
        rewardDebt: BigNumber;
      }
    >;

    withdraw(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw(uint256,address)"(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accumulateReward(
    _tokenAddr: string,
    _from: string,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "accumulateReward(address,address,address)"(
    _tokenAddr: string,
    _from: string,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  activatePendingRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "activatePendingRewards()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  add(
    _allocPoints: {
      collateralTokenAllocPoint: BigNumberish;
      debtTokenAllocPoint: BigNumberish;
      borrowAssetTokenAllocPoint: BigNumberish;
    },
    _lendingPair: string,
    _withUpdate: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "add((uint128,uint128,uint128),address,bool)"(
    _allocPoints: {
      collateralTokenAllocPoint: BigNumberish;
      debtTokenAllocPoint: BigNumberish;
      borrowAssetTokenAllocPoint: BigNumberish;
    },
    _lendingPair: string,
    _withUpdate: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "endTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  guardian(overrides?: CallOverrides): Promise<string>;

  "guardian()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _rewardToken: string,
    _amountDistributePerSecond: BigNumberish,
    _startTimestamp: BigNumberish,
    _guardian: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address,uint256,uint256,address)"(
    _rewardToken: string,
    _amountDistributePerSecond: BigNumberish,
    _startTimestamp: BigNumberish,
    _guardian: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  massUpdatePools(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "massUpdatePools()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pendingRewardActivation(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "pendingRewardActivation(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  pendingRewardToken(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "pendingRewardToken(uint256,address)"(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      receiptTokenAddr: string;
      lastUpdateTimestamp: BigNumber;
      accRewardTokenPerShare: BigNumber;
      allocPoint: BigNumber;
    }
  >;

  "poolInfo(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      receiptTokenAddr: string;
      lastUpdateTimestamp: BigNumber;
      accRewardTokenPerShare: BigNumber;
      allocPoint: BigNumber;
    }
  >;

  rewardAmountDistributePerSecond(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "rewardAmountDistributePerSecond()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardDistributorManager(overrides?: CallOverrides): Promise<string>;

  "rewardDistributorManager()"(overrides?: CallOverrides): Promise<string>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  "rewardToken()"(overrides?: CallOverrides): Promise<string>;

  set(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _withUpdate: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "set(uint256,uint128,bool)"(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _withUpdate: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "startTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  tokenPoolIDPair(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "tokenPoolIDPair(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  "totalAllocPoint()"(overrides?: CallOverrides): Promise<BigNumber>;

  updatePool(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updatePool(uint256)"(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      pendingReward: BigNumber;
      rewardDebt: BigNumber;
    }
  >;

  "userInfo(uint256,address)"(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      pendingReward: BigNumber;
      rewardDebt: BigNumber;
    }
  >;

  withdraw(
    _pid: BigNumberish,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw(uint256,address)"(
    _pid: BigNumberish,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accumulateReward(
      _tokenAddr: string,
      _from: string,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "accumulateReward(address,address,address)"(
      _tokenAddr: string,
      _from: string,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    activatePendingRewards(overrides?: CallOverrides): Promise<void>;

    "activatePendingRewards()"(overrides?: CallOverrides): Promise<void>;

    add(
      _allocPoints: {
        collateralTokenAllocPoint: BigNumberish;
        debtTokenAllocPoint: BigNumberish;
        borrowAssetTokenAllocPoint: BigNumberish;
      },
      _lendingPair: string,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "add((uint128,uint128,uint128),address,bool)"(
      _allocPoints: {
        collateralTokenAllocPoint: BigNumberish;
        debtTokenAllocPoint: BigNumberish;
        borrowAssetTokenAllocPoint: BigNumberish;
      },
      _lendingPair: string,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    endTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "endTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    guardian(overrides?: CallOverrides): Promise<string>;

    "guardian()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _guardian: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,uint256,uint256,address)"(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _guardian: string,
      overrides?: CallOverrides
    ): Promise<void>;

    massUpdatePools(overrides?: CallOverrides): Promise<void>;

    "massUpdatePools()"(overrides?: CallOverrides): Promise<void>;

    pendingRewardActivation(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "pendingRewardActivation(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    pendingRewardToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingRewardToken(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        receiptTokenAddr: string;
        lastUpdateTimestamp: BigNumber;
        accRewardTokenPerShare: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    "poolInfo(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        receiptTokenAddr: string;
        lastUpdateTimestamp: BigNumber;
        accRewardTokenPerShare: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    rewardAmountDistributePerSecond(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rewardAmountDistributePerSecond()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardDistributorManager(overrides?: CallOverrides): Promise<string>;

    "rewardDistributorManager()"(overrides?: CallOverrides): Promise<string>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    "rewardToken()"(overrides?: CallOverrides): Promise<string>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "set(uint256,uint128,bool)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "startTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPoolIDPair(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenPoolIDPair(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAllocPoint()"(overrides?: CallOverrides): Promise<BigNumber>;

    updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "updatePool(uint256)"(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        pendingReward: BigNumber;
        rewardDebt: BigNumber;
      }
    >;

    "userInfo(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        pendingReward: BigNumber;
        rewardDebt: BigNumber;
      }
    >;

    withdraw(
      _pid: BigNumberish,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(uint256,address)"(
      _pid: BigNumberish,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AccumulateReward(
      receiptToken: string | null,
      pid: BigNumberish | null,
      from: null,
      to: null
    ): TypedEventFilter<
      [string, BigNumber, string, string],
      { receiptToken: string; pid: BigNumber; from: string; to: string }
    >;

    AddDistribution(
      lendingPair: string | null,
      distributor: string | null,
      vars: null,
      timestamp: null
    ): TypedEventFilter<
      [
        string,
        string,
        [BigNumber, BigNumber, BigNumber] & {
          collateralTokenAllocPoint: BigNumber;
          debtTokenAllocPoint: BigNumber;
          borrowAssetTokenAllocPoint: BigNumber;
        },
        BigNumber
      ],
      {
        lendingPair: string;
        distributor: string;
        vars: [BigNumber, BigNumber, BigNumber] & {
          collateralTokenAllocPoint: BigNumber;
          debtTokenAllocPoint: BigNumber;
          borrowAssetTokenAllocPoint: BigNumber;
        };
        timestamp: BigNumber;
      }
    >;

    Initialized(
      _rewardToken: null,
      _amountDistributePerSecond: null,
      _startTimestamp: null,
      _guardian: null,
      timestamp: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string, BigNumber],
      {
        _rewardToken: string;
        _amountDistributePerSecond: BigNumber;
        _startTimestamp: BigNumber;
        _guardian: string;
        timestamp: BigNumber;
      }
    >;

    UpdateDistribution(
      pid: BigNumberish | null,
      oldAllocPoint: null,
      newAllocPoint: null,
      timestamp: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber],
      {
        pid: BigNumber;
        oldAllocPoint: BigNumber;
        newAllocPoint: BigNumber;
        timestamp: BigNumber;
      }
    >;

    Withdraw(
      user: string | null,
      poolId: BigNumberish | null,
      amount: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; poolId: BigNumber; amount: BigNumber }
    >;
  };

  estimateGas: {
    accumulateReward(
      _tokenAddr: string,
      _from: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "accumulateReward(address,address,address)"(
      _tokenAddr: string,
      _from: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    activatePendingRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "activatePendingRewards()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    add(
      _allocPoints: {
        collateralTokenAllocPoint: BigNumberish;
        debtTokenAllocPoint: BigNumberish;
        borrowAssetTokenAllocPoint: BigNumberish;
      },
      _lendingPair: string,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "add((uint128,uint128,uint128),address,bool)"(
      _allocPoints: {
        collateralTokenAllocPoint: BigNumberish;
        debtTokenAllocPoint: BigNumberish;
        borrowAssetTokenAllocPoint: BigNumberish;
      },
      _lendingPair: string,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "endTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    guardian(overrides?: CallOverrides): Promise<BigNumber>;

    "guardian()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address,uint256,uint256,address)"(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    massUpdatePools(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "massUpdatePools()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pendingRewardActivation(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingRewardActivation(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingRewardToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingRewardToken(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "poolInfo(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardAmountDistributePerSecond(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rewardAmountDistributePerSecond()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardDistributorManager(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardDistributorManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "set(uint256,uint128,bool)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "startTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPoolIDPair(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenPoolIDPair(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAllocPoint()"(overrides?: CallOverrides): Promise<BigNumber>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updatePool(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "userInfo(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw(uint256,address)"(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accumulateReward(
      _tokenAddr: string,
      _from: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "accumulateReward(address,address,address)"(
      _tokenAddr: string,
      _from: string,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    activatePendingRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "activatePendingRewards()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    add(
      _allocPoints: {
        collateralTokenAllocPoint: BigNumberish;
        debtTokenAllocPoint: BigNumberish;
        borrowAssetTokenAllocPoint: BigNumberish;
      },
      _lendingPair: string,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "add((uint128,uint128,uint128),address,bool)"(
      _allocPoints: {
        collateralTokenAllocPoint: BigNumberish;
        debtTokenAllocPoint: BigNumberish;
        borrowAssetTokenAllocPoint: BigNumberish;
      },
      _lendingPair: string,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "endTimestamp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "guardian()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address,uint256,uint256,address)"(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    massUpdatePools(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "massUpdatePools()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pendingRewardActivation(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingRewardActivation(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingRewardToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingRewardToken(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "poolInfo(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardAmountDistributePerSecond(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardAmountDistributePerSecond()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardDistributorManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardDistributorManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "set(uint256,uint128,bool)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenPoolIDPair(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenPoolIDPair(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalAllocPoint()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updatePool(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "userInfo(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256,address)"(
      _pid: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
