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
    "admin()": FunctionFragment;
    "allPairs(uint256)": FunctionFragment;
    "createPair(address,address,address,address,address,address,tuple,tuple)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allPairs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createPair",
    values: [
      string,
      string,
      string,
      string,
      string,
      string,
      {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "NewLendingPair(address,uint256)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

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
    admin(overrides?: CallOverrides): Promise<[string]>;

    "admin()"(overrides?: CallOverrides): Promise<[string]>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createPair(
      pair: string,
      _team: string,
      _oracle: string,
      _vault: string,
      _collateralAsset: string,
      _wrappedCollateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createPair(address,address,address,address,address,address,(address,uint256,uint256,uint256,address,uint256,address),(uint256,uint256,uint256,uint256))"(
      pair: string,
      _team: string,
      _oracle: string,
      _vault: string,
      _collateralAsset: string,
      _wrappedCollateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "pause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    "paused()"(overrides?: CallOverrides): Promise<[boolean]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unpause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  "admin()"(overrides?: CallOverrides): Promise<string>;

  allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allPairs(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  createPair(
    pair: string,
    _team: string,
    _oracle: string,
    _vault: string,
    _collateralAsset: string,
    _wrappedCollateralAsset: string,
    _borrowVars: {
      borrowAsset: string;
      initialExchangeRateMantissa: BigNumberish;
      reserveFactorMantissa: BigNumberish;
      collateralFactor: BigNumberish;
      wrappedBorrowAsset: string;
      liquidationFee: BigNumberish;
      debtToken: string;
    },
    _interestRateVars: {
      baseRatePerYear: BigNumberish;
      multiplierPerYear: BigNumberish;
      jumpMultiplierPerYear: BigNumberish;
      optimal: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createPair(address,address,address,address,address,address,(address,uint256,uint256,uint256,address,uint256,address),(uint256,uint256,uint256,uint256))"(
    pair: string,
    _team: string,
    _oracle: string,
    _vault: string,
    _collateralAsset: string,
    _wrappedCollateralAsset: string,
    _borrowVars: {
      borrowAsset: string;
      initialExchangeRateMantissa: BigNumberish;
      reserveFactorMantissa: BigNumberish;
      collateralFactor: BigNumberish;
      wrappedBorrowAsset: string;
      liquidationFee: BigNumberish;
      debtToken: string;
    },
    _interestRateVars: {
      baseRatePerYear: BigNumberish;
      multiplierPerYear: BigNumberish;
      jumpMultiplierPerYear: BigNumberish;
      optimal: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "pause()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  "paused()"(overrides?: CallOverrides): Promise<boolean>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unpause()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    "admin()"(overrides?: CallOverrides): Promise<string>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createPair(
      pair: string,
      _team: string,
      _oracle: string,
      _vault: string,
      _collateralAsset: string,
      _wrappedCollateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "createPair(address,address,address,address,address,address,(address,uint256,uint256,uint256,address,uint256,address),(uint256,uint256,uint256,uint256))"(
      pair: string,
      _team: string,
      _oracle: string,
      _vault: string,
      _collateralAsset: string,
      _wrappedCollateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    "pause()"(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    "paused()"(overrides?: CallOverrides): Promise<boolean>;

    unpause(overrides?: CallOverrides): Promise<void>;

    "unpause()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
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
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    "admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createPair(
      pair: string,
      _team: string,
      _oracle: string,
      _vault: string,
      _collateralAsset: string,
      _wrappedCollateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createPair(address,address,address,address,address,address,(address,uint256,uint256,uint256,address,uint256,address),(uint256,uint256,uint256,uint256))"(
      pair: string,
      _team: string,
      _oracle: string,
      _vault: string,
      _collateralAsset: string,
      _wrappedCollateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "pause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    "paused()"(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unpause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "admin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allPairs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allPairs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createPair(
      pair: string,
      _team: string,
      _oracle: string,
      _vault: string,
      _collateralAsset: string,
      _wrappedCollateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createPair(address,address,address,address,address,address,(address,uint256,uint256,uint256,address,uint256,address),(uint256,uint256,uint256,uint256))"(
      pair: string,
      _team: string,
      _oracle: string,
      _vault: string,
      _collateralAsset: string,
      _wrappedCollateralAsset: string,
      _borrowVars: {
        borrowAsset: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      _interestRateVars: {
        baseRatePerYear: BigNumberish;
        multiplierPerYear: BigNumberish;
        jumpMultiplierPerYear: BigNumberish;
        optimal: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "pause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unpause()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
