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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface InterestRateModelInterface extends ethers.utils.Interface {
  functions: {
    "c_0x8a09ea5b(bytes32)": FunctionFragment;
    "getBorrowRate(uint256,uint256,uint256)": FunctionFragment;
    "getSupplyRate(uint256,uint256,uint256,uint256)": FunctionFragment;
    "isInterestRateModel()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_0x8a09ea5b",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowRate",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplyRate",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isInterestRateModel",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "c_0x8a09ea5b",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplyRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInterestRateModel",
    data: BytesLike
  ): Result;

  events: {};
}

export class InterestRateModel extends Contract {
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

  interface: InterestRateModelInterface;

  functions: {
    c_0x8a09ea5b(
      c__0x8a09ea5b: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "c_0x8a09ea5b(bytes32)"(
      c__0x8a09ea5b: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getBorrowRate(uint256,uint256,uint256)"(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getSupplyRate(uint256,uint256,uint256,uint256)"(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isInterestRateModel(overrides?: CallOverrides): Promise<[boolean]>;

    "isInterestRateModel()"(overrides?: CallOverrides): Promise<[boolean]>;
  };

  c_0x8a09ea5b(
    c__0x8a09ea5b: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "c_0x8a09ea5b(bytes32)"(
    c__0x8a09ea5b: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  getBorrowRate(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBorrowRate(uint256,uint256,uint256)"(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSupplyRate(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish,
    reserveFactorMantissa: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getSupplyRate(uint256,uint256,uint256,uint256)"(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish,
    reserveFactorMantissa: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;

  "isInterestRateModel()"(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    c_0x8a09ea5b(
      c__0x8a09ea5b: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "c_0x8a09ea5b(bytes32)"(
      c__0x8a09ea5b: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBorrowRate(uint256,uint256,uint256)"(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSupplyRate(uint256,uint256,uint256,uint256)"(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;

    "isInterestRateModel()"(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    c_0x8a09ea5b(
      c__0x8a09ea5b: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "c_0x8a09ea5b(bytes32)"(
      c__0x8a09ea5b: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBorrowRate(uint256,uint256,uint256)"(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSupplyRate(uint256,uint256,uint256,uint256)"(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInterestRateModel(overrides?: CallOverrides): Promise<BigNumber>;

    "isInterestRateModel()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    c_0x8a09ea5b(
      c__0x8a09ea5b: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "c_0x8a09ea5b(bytes32)"(
      c__0x8a09ea5b: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBorrowRate(uint256,uint256,uint256)"(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSupplyRate(uint256,uint256,uint256,uint256)"(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInterestRateModel(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isInterestRateModel()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
