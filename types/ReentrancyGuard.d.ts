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

interface ReentrancyGuardInterface extends ethers.utils.Interface {
  functions: {
    "c_0x6b12c86e(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_0x6b12c86e",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "c_0x6b12c86e",
    data: BytesLike
  ): Result;

  events: {};
}

export class ReentrancyGuard extends Contract {
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

  interface: ReentrancyGuardInterface;

  functions: {
    c_0x6b12c86e(
      c__0x6b12c86e: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "c_0x6b12c86e(bytes32)"(
      c__0x6b12c86e: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  c_0x6b12c86e(
    c__0x6b12c86e: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "c_0x6b12c86e(bytes32)"(
    c__0x6b12c86e: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    c_0x6b12c86e(
      c__0x6b12c86e: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "c_0x6b12c86e(bytes32)"(
      c__0x6b12c86e: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    c_0x6b12c86e(
      c__0x6b12c86e: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "c_0x6b12c86e(bytes32)"(
      c__0x6b12c86e: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_0x6b12c86e(
      c__0x6b12c86e: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "c_0x6b12c86e(bytes32)"(
      c__0x6b12c86e: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
