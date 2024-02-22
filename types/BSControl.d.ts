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

interface BSControlInterface extends ethers.utils.Interface {
  functions: {
    "allPairs(uint256)": FunctionFragment;
    "blackSmithteam()": FunctionFragment;
    "createPair(address,address,address,uint256,uint256,tuple)": FunctionFragment;
    "graceSpace()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "lendingPairFactory()": FunctionFragment;
    "newBSControl()": FunctionFragment;
    "owner()": FunctionFragment;
    "pairs(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "startUpgradeTimer(address)": FunctionFragment;
    "transferControl(address,address[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeControl()": FunctionFragment;
    "vault()": FunctionFragment;
    "viewNumOfPairs()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allPairs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "blackSmithteam",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createPair",
    values: [
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "graceSpace",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lendingPairFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newBSControl",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pairs", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startUpgradeTimer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferControl",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeControl",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "viewNumOfPairs",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blackSmithteam",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "graceSpace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lendingPairFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newBSControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pairs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startUpgradeTimer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "viewNumOfPairs",
    data: BytesLike
  ): Result;

  events: {
    "NewLendingPair(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewLendingPair"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class BSControl extends Contract {
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

  interface: BSControlInterface;

  functions: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    blackSmithteam(overrides?: CallOverrides): Promise<[string]>;

    "blackSmithteam()"(overrides?: CallOverrides): Promise<[string]>;

    createPair(
      _oracle: string,
      _asset: string,
      _collateralAsset: string,
      _initialExchangeRateMantissa: BigNumberish,
      _reserveFactorMantissa: BigNumberish,
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createPair(address,address,address,uint256,uint256,(uint256,uint256,uint256,uint256))"(
      _oracle: string,
      _asset: string,
      _collateralAsset: string,
      _initialExchangeRateMantissa: BigNumberish,
      _reserveFactorMantissa: BigNumberish,
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    graceSpace(overrides?: CallOverrides): Promise<[BigNumber]>;

    "graceSpace()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _vault: string,
      _lendingPairFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address,address)"(
      _vault: string,
      _lendingPairFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lendingPairFactory(overrides?: CallOverrides): Promise<[string]>;

    "lendingPairFactory()"(overrides?: CallOverrides): Promise<[string]>;

    newBSControl(overrides?: CallOverrides): Promise<[string]>;

    "newBSControl()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pairs(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "pairs(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startUpgradeTimer(
      _newControl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "startUpgradeTimer(address)"(
      _newControl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferControl(
      _newControl: string,
      pairAddr: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferControl(address,address[])"(
      _newControl: string,
      pairAddr: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeControl(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "upgradeControl()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    "vault()"(overrides?: CallOverrides): Promise<[string]>;

    viewNumOfPairs(overrides?: CallOverrides): Promise<[BigNumber]>;

    "viewNumOfPairs()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allPairs(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  blackSmithteam(overrides?: CallOverrides): Promise<string>;

  "blackSmithteam()"(overrides?: CallOverrides): Promise<string>;

  createPair(
    _oracle: string,
    _asset: string,
    _collateralAsset: string,
    _initialExchangeRateMantissa: BigNumberish,
    _reserveFactorMantissa: BigNumberish,
    _interestRateVars: {
      baseRatePerYear: BigNumberish;
      multiplierPerYear: BigNumberish;
      jumpMultiplierPerYear: BigNumberish;
      optimal: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createPair(address,address,address,uint256,uint256,(uint256,uint256,uint256,uint256))"(
    _oracle: string,
    _asset: string,
    _collateralAsset: string,
    _initialExchangeRateMantissa: BigNumberish,
    _reserveFactorMantissa: BigNumberish,
    _interestRateVars: {
      baseRatePerYear: BigNumberish;
      multiplierPerYear: BigNumberish;
      jumpMultiplierPerYear: BigNumberish;
      optimal: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  graceSpace(overrides?: CallOverrides): Promise<BigNumber>;

  "graceSpace()"(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _vault: string,
    _lendingPairFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address,address)"(
    _vault: string,
    _lendingPairFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lendingPairFactory(overrides?: CallOverrides): Promise<string>;

  "lendingPairFactory()"(overrides?: CallOverrides): Promise<string>;

  newBSControl(overrides?: CallOverrides): Promise<string>;

  "newBSControl()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pairs(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "pairs(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startUpgradeTimer(
    _newControl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "startUpgradeTimer(address)"(
    _newControl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferControl(
    _newControl: string,
    pairAddr: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferControl(address,address[])"(
    _newControl: string,
    pairAddr: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeControl(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "upgradeControl()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  viewNumOfPairs(overrides?: CallOverrides): Promise<BigNumber>;

  "viewNumOfPairs()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    blackSmithteam(overrides?: CallOverrides): Promise<string>;

    "blackSmithteam()"(overrides?: CallOverrides): Promise<string>;

    createPair(
      _oracle: string,
      _asset: string,
      _collateralAsset: string,
      _initialExchangeRateMantissa: BigNumberish,
      _reserveFactorMantissa: BigNumberish,
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "createPair(address,address,address,uint256,uint256,(uint256,uint256,uint256,uint256))"(
      _oracle: string,
      _asset: string,
      _collateralAsset: string,
      _initialExchangeRateMantissa: BigNumberish,
      _reserveFactorMantissa: BigNumberish,
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    graceSpace(overrides?: CallOverrides): Promise<BigNumber>;

    "graceSpace()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _vault: string,
      _lendingPairFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address)"(
      _vault: string,
      _lendingPairFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    lendingPairFactory(overrides?: CallOverrides): Promise<string>;

    "lendingPairFactory()"(overrides?: CallOverrides): Promise<string>;

    newBSControl(overrides?: CallOverrides): Promise<string>;

    "newBSControl()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pairs(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "pairs(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    startUpgradeTimer(
      _newControl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "startUpgradeTimer(address)"(
      _newControl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferControl(
      _newControl: string,
      pairAddr: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "transferControl(address,address[])"(
      _newControl: string,
      pairAddr: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeControl(overrides?: CallOverrides): Promise<void>;

    "upgradeControl()"(overrides?: CallOverrides): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;

    viewNumOfPairs(overrides?: CallOverrides): Promise<BigNumber>;

    "viewNumOfPairs()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    NewLendingPair(
      pair: null,
      created: null
    ): TypedEventFilter<
      [string, BigNumber],
      { pair: string; created: BigNumber }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blackSmithteam(overrides?: CallOverrides): Promise<BigNumber>;

    "blackSmithteam()"(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      _oracle: string,
      _asset: string,
      _collateralAsset: string,
      _initialExchangeRateMantissa: BigNumberish,
      _reserveFactorMantissa: BigNumberish,
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createPair(address,address,address,uint256,uint256,(uint256,uint256,uint256,uint256))"(
      _oracle: string,
      _asset: string,
      _collateralAsset: string,
      _initialExchangeRateMantissa: BigNumberish,
      _reserveFactorMantissa: BigNumberish,
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    graceSpace(overrides?: CallOverrides): Promise<BigNumber>;

    "graceSpace()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _vault: string,
      _lendingPairFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address,address)"(
      _vault: string,
      _lendingPairFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lendingPairFactory(overrides?: CallOverrides): Promise<BigNumber>;

    "lendingPairFactory()"(overrides?: CallOverrides): Promise<BigNumber>;

    newBSControl(overrides?: CallOverrides): Promise<BigNumber>;

    "newBSControl()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pairs(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "pairs(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startUpgradeTimer(
      _newControl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "startUpgradeTimer(address)"(
      _newControl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferControl(
      _newControl: string,
      pairAddr: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferControl(address,address[])"(
      _newControl: string,
      pairAddr: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeControl(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "upgradeControl()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;

    viewNumOfPairs(overrides?: CallOverrides): Promise<BigNumber>;

    "viewNumOfPairs()"(overrides?: CallOverrides): Promise<BigNumber>;
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

    blackSmithteam(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "blackSmithteam()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createPair(
      _oracle: string,
      _asset: string,
      _collateralAsset: string,
      _initialExchangeRateMantissa: BigNumberish,
      _reserveFactorMantissa: BigNumberish,
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createPair(address,address,address,uint256,uint256,(uint256,uint256,uint256,uint256))"(
      _oracle: string,
      _asset: string,
      _collateralAsset: string,
      _initialExchangeRateMantissa: BigNumberish,
      _reserveFactorMantissa: BigNumberish,
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    graceSpace(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "graceSpace()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _vault: string,
      _lendingPairFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address,address)"(
      _vault: string,
      _lendingPairFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lendingPairFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lendingPairFactory()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newBSControl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "newBSControl()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pairs(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startUpgradeTimer(
      _newControl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "startUpgradeTimer(address)"(
      _newControl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferControl(
      _newControl: string,
      pairAddr: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferControl(address,address[])"(
      _newControl: string,
      pairAddr: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeControl(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "upgradeControl()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    viewNumOfPairs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "viewNumOfPairs()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
