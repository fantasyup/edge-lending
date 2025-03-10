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

interface LiquidationHelperInterface extends ethers.utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "LENDING_POOL()": FunctionFragment;
    "balancerVault()": FunctionFragment;
    "executeOperation(address[],uint256[],uint256[],address,bytes)": FunctionFragment;
    "flashLoanToLiquidate(address,address[],uint256)": FunctionFragment;
    "edgeVault()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LENDING_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balancerVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeOperation",
    values: [string[], BigNumberish[], BigNumberish[], string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "flashLoanToLiquidate",
    values: [string, string[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "edgeVault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LENDING_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balancerVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "flashLoanToLiquidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "edgeVault", data: BytesLike): Result;

  events: {};
}

export class LiquidationHelper extends Contract {
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

  interface: LiquidationHelperInterface;

  functions: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<[string]>;

    LENDING_POOL(overrides?: CallOverrides): Promise<[string]>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<[string]>;

    balancerVault(overrides?: CallOverrides): Promise<[string]>;

    "balancerVault()"(overrides?: CallOverrides): Promise<[string]>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    flashLoanToLiquidate(
      pair: string,
      borrowers: string[],
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "flashLoanToLiquidate(address,address[],uint256)"(
      pair: string,
      borrowers: string[],
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    edgeVault(overrides?: CallOverrides): Promise<[string]>;

    "edgeVault()"(overrides?: CallOverrides): Promise<[string]>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

  LENDING_POOL(overrides?: CallOverrides): Promise<string>;

  "LENDING_POOL()"(overrides?: CallOverrides): Promise<string>;

  balancerVault(overrides?: CallOverrides): Promise<string>;

  "balancerVault()"(overrides?: CallOverrides): Promise<string>;

  executeOperation(
    assets: string[],
    amounts: BigNumberish[],
    premiums: BigNumberish[],
    initiator: string,
    params: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "executeOperation(address[],uint256[],uint256[],address,bytes)"(
    assets: string[],
    amounts: BigNumberish[],
    premiums: BigNumberish[],
    initiator: string,
    params: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  flashLoanToLiquidate(
    pair: string,
    borrowers: string[],
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "flashLoanToLiquidate(address,address[],uint256)"(
    pair: string,
    borrowers: string[],
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  edgeVault(overrides?: CallOverrides): Promise<string>;

  "edgeVault()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

    LENDING_POOL(overrides?: CallOverrides): Promise<string>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<string>;

    balancerVault(overrides?: CallOverrides): Promise<string>;

    "balancerVault()"(overrides?: CallOverrides): Promise<string>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    flashLoanToLiquidate(
      pair: string,
      borrowers: string[],
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "flashLoanToLiquidate(address,address[],uint256)"(
      pair: string,
      borrowers: string[],
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    edgeVault(overrides?: CallOverrides): Promise<string>;

    "edgeVault()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<BigNumber>;

    LENDING_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<BigNumber>;

    balancerVault(overrides?: CallOverrides): Promise<BigNumber>;

    "balancerVault()"(overrides?: CallOverrides): Promise<BigNumber>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    flashLoanToLiquidate(
      pair: string,
      borrowers: string[],
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "flashLoanToLiquidate(address,address[],uint256)"(
      pair: string,
      borrowers: string[],
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    edgeVault(overrides?: CallOverrides): Promise<BigNumber>;

    "edgeVault()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ADDRESSES_PROVIDER()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LENDING_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balancerVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "balancerVault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    flashLoanToLiquidate(
      pair: string,
      borrowers: string[],
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "flashLoanToLiquidate(address,address[],uint256)"(
      pair: string,
      borrowers: string[],
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    edgeVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "edgeVault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
