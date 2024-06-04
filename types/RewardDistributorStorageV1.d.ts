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

interface RewardDistributorStorageV1Interface extends ethers.utils.Interface {
  functions: {
    "accumulateReward(address,address)": FunctionFragment;
    "endTimestamp()": FunctionFragment;
    "guardian()": FunctionFragment;
    "initialize(address,uint256,uint256,uint256,address)": FunctionFragment;
    "pendingRewardActivation(uint256)": FunctionFragment;
    "poolInfo(uint256)": FunctionFragment;
    "rewardAmountDistributePerSecond()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "startTimestamp()": FunctionFragment;
    "tokenPoolIDPair(address)": FunctionFragment;
    "totalAllocPoint()": FunctionFragment;
    "userInfo(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accumulateReward",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "endTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRewardActivation",
    values: [BigNumberish]
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
    functionFragment: "rewardToken",
    values?: undefined
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
    functionFragment: "userInfo",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "accumulateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingRewardActivation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardAmountDistributePerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;

  events: {
    "Initialized(address,uint256,uint256,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export class RewardDistributorStorageV1 extends Contract {
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

  interface: RewardDistributorStorageV1Interface;

  functions: {
    accumulateReward(
      _tokenAddr: string,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "accumulateReward(address,address)"(
      _tokenAddr: string,
      _user: string,
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
      _endTimestamp: BigNumberish,
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address,uint256,uint256,uint256,address)"(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _endTimestamp: BigNumberish,
      _guardian: string,
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

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    "rewardToken()"(overrides?: CallOverrides): Promise<[string]>;

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
  };

  accumulateReward(
    _tokenAddr: string,
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "accumulateReward(address,address)"(
    _tokenAddr: string,
    _user: string,
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
    _endTimestamp: BigNumberish,
    _guardian: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address,uint256,uint256,uint256,address)"(
    _rewardToken: string,
    _amountDistributePerSecond: BigNumberish,
    _startTimestamp: BigNumberish,
    _endTimestamp: BigNumberish,
    _guardian: string,
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

  rewardToken(overrides?: CallOverrides): Promise<string>;

  "rewardToken()"(overrides?: CallOverrides): Promise<string>;

  startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "startTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  tokenPoolIDPair(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "tokenPoolIDPair(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  "totalAllocPoint()"(overrides?: CallOverrides): Promise<BigNumber>;

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

  callStatic: {
    accumulateReward(
      _tokenAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "accumulateReward(address,address)"(
      _tokenAddr: string,
      _user: string,
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
      _endTimestamp: BigNumberish,
      _guardian: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,uint256,uint256,uint256,address)"(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _endTimestamp: BigNumberish,
      _guardian: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pendingRewardActivation(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "pendingRewardActivation(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

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

    rewardToken(overrides?: CallOverrides): Promise<string>;

    "rewardToken()"(overrides?: CallOverrides): Promise<string>;

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
  };

  filters: {
    Initialized(
      _rewardToken: string | null,
      _amountDistributePerSecond: null,
      _startTimestamp: null,
      _endTimestamp: null,
      _guardian: null,
      timestamp: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, string, BigNumber],
      {
        _rewardToken: string;
        _amountDistributePerSecond: BigNumber;
        _startTimestamp: BigNumber;
        _endTimestamp: BigNumber;
        _guardian: string;
        timestamp: BigNumber;
      }
    >;
  };

  estimateGas: {
    accumulateReward(
      _tokenAddr: string,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "accumulateReward(address,address)"(
      _tokenAddr: string,
      _user: string,
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
      _endTimestamp: BigNumberish,
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address,uint256,uint256,uint256,address)"(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _endTimestamp: BigNumberish,
      _guardian: string,
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

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardToken()"(overrides?: CallOverrides): Promise<BigNumber>;

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
  };

  populateTransaction: {
    accumulateReward(
      _tokenAddr: string,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "accumulateReward(address,address)"(
      _tokenAddr: string,
      _user: string,
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
      _endTimestamp: BigNumberish,
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address,uint256,uint256,uint256,address)"(
      _rewardToken: string,
      _amountDistributePerSecond: BigNumberish,
      _startTimestamp: BigNumberish,
      _endTimestamp: BigNumberish,
      _guardian: string,
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

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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
  };
}
