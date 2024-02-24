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
    "c_0xe557ede9(bytes32)": FunctionFragment;
    "getPriceInETH(address)": FunctionFragment;
    "getPriceInUSD(address)": FunctionFragment;
    "viewPriceInETH(address)": FunctionFragment;
    "viewPriceInUSD(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_0xe557ede9",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceInETH",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceInUSD",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewPriceInETH",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewPriceInUSD",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "c_0xe557ede9",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceInETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceInUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewPriceInETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewPriceInUSD",
    data: BytesLike
  ): Result;

  events: {};
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
    c_0xe557ede9(
      c__0xe557ede9: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "c_0xe557ede9(bytes32)"(
      c__0xe557ede9: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    getPriceInETH(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "getPriceInETH(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPriceInUSD(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "getPriceInUSD(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    viewPriceInETH(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "viewPriceInETH(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    viewPriceInUSD(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "viewPriceInUSD(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  c_0xe557ede9(
    c__0xe557ede9: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "c_0xe557ede9(bytes32)"(
    c__0xe557ede9: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  getPriceInETH(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "getPriceInETH(address)"(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPriceInUSD(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "getPriceInUSD(address)"(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  viewPriceInETH(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "viewPriceInETH(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  viewPriceInUSD(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "viewPriceInUSD(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    c_0xe557ede9(
      c__0xe557ede9: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "c_0xe557ede9(bytes32)"(
      c__0xe557ede9: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getPriceInETH(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getPriceInETH(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceInUSD(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getPriceInUSD(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewPriceInETH(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "viewPriceInETH(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewPriceInUSD(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "viewPriceInUSD(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    c_0xe557ede9(
      c__0xe557ede9: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "c_0xe557ede9(bytes32)"(
      c__0xe557ede9: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceInETH(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "getPriceInETH(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPriceInUSD(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "getPriceInUSD(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    viewPriceInETH(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "viewPriceInETH(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewPriceInUSD(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "viewPriceInUSD(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_0xe557ede9(
      c__0xe557ede9: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "c_0xe557ede9(bytes32)"(
      c__0xe557ede9: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceInETH(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "getPriceInETH(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPriceInUSD(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "getPriceInUSD(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    viewPriceInETH(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "viewPriceInETH(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewPriceInUSD(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "viewPriceInUSD(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
