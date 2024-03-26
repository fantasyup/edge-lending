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

interface IPriceOracleAggregatorInterface extends ethers.utils.Interface {
  functions: {
    "getPriceInUSD(address)": FunctionFragment;
    "updateOracleForAsset(address,address)": FunctionFragment;
    "viewPriceInUSD(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPriceInUSD",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOracleForAsset",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewPriceInUSD",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPriceInUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOracleForAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewPriceInUSD",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPriceOracleAggregator extends Contract {
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

  interface: IPriceOracleAggregatorInterface;

  functions: {
    getPriceInUSD(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateOracleForAsset(
      _asset: string,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateOracleForAsset(address,address)"(
      _asset: string,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    viewPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "viewPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getPriceInUSD(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "getPriceInUSD(address)"(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateOracleForAsset(
    _asset: string,
    _oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateOracleForAsset(address,address)"(
    _asset: string,
    _oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  viewPriceInUSD(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "viewPriceInUSD(address)"(
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateOracleForAsset(
      _asset: string,
      _oracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateOracleForAsset(address,address)"(
      _asset: string,
      _oracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    viewPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "viewPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getPriceInUSD(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateOracleForAsset(
      _asset: string,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateOracleForAsset(address,address)"(
      _asset: string,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    viewPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "viewPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPriceInUSD(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateOracleForAsset(
      _asset: string,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateOracleForAsset(address,address)"(
      _asset: string,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    viewPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "viewPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
