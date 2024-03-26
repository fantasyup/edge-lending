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

interface MockPriceOracleInterface extends ethers.utils.Interface {
  functions: {
    "getPriceInUSD()": FunctionFragment;
    "setPrice(uint256)": FunctionFragment;
    "viewPriceInUSD()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPriceInUSD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewPriceInUSD",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getPriceInUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "viewPriceInUSD",
    data: BytesLike
  ): Result;

  events: {
    "PriceUpdated(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PriceUpdated"): EventFragment;
}

export class MockPriceOracle extends Contract {
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

  interface: MockPriceOracleInterface;

  functions: {
    getPriceInUSD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getPriceInUSD()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setPrice(
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setPrice(uint256)"(
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    viewPriceInUSD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "viewPriceInUSD()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getPriceInUSD(overrides?: CallOverrides): Promise<BigNumber>;

  "getPriceInUSD()"(overrides?: CallOverrides): Promise<BigNumber>;

  setPrice(
    _newPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setPrice(uint256)"(
    _newPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  viewPriceInUSD(overrides?: CallOverrides): Promise<BigNumber>;

  "viewPriceInUSD()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getPriceInUSD(overrides?: CallOverrides): Promise<BigNumber>;

    "getPriceInUSD()"(overrides?: CallOverrides): Promise<BigNumber>;

    setPrice(_newPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setPrice(uint256)"(
      _newPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    viewPriceInUSD(overrides?: CallOverrides): Promise<BigNumber>;

    "viewPriceInUSD()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    PriceUpdated(
      asset: null,
      newPrice: null
    ): TypedEventFilter<
      [string, BigNumber],
      { asset: string; newPrice: BigNumber }
    >;
  };

  estimateGas: {
    getPriceInUSD(overrides?: CallOverrides): Promise<BigNumber>;

    "getPriceInUSD()"(overrides?: CallOverrides): Promise<BigNumber>;

    setPrice(
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setPrice(uint256)"(
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    viewPriceInUSD(overrides?: CallOverrides): Promise<BigNumber>;

    "viewPriceInUSD()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getPriceInUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPriceInUSD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPrice(
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setPrice(uint256)"(
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    viewPriceInUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "viewPriceInUSD()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
