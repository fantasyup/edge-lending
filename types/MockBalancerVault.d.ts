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

interface MockBalancerVaultInterface extends ethers.utils.Interface {
  functions: {
    "swap(tuple,tuple,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swap",
    values: [
      {
        poolId: BytesLike;
        kind: BigNumberish;
        assetIn: string;
        assetOut: string;
        amount: BigNumberish;
        userData: BytesLike;
      },
      {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
      },
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export class MockBalancerVault extends Contract {
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

  interface: MockBalancerVaultInterface;

  functions: {
    swap(
      singleSwap: {
        poolId: BytesLike;
        kind: BigNumberish;
        assetIn: string;
        assetOut: string;
        amount: BigNumberish;
        userData: BytesLike;
      },
      funds: {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
      },
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)"(
      singleSwap: {
        poolId: BytesLike;
        kind: BigNumberish;
        assetIn: string;
        assetOut: string;
        amount: BigNumberish;
        userData: BytesLike;
      },
      funds: {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
      },
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  swap(
    singleSwap: {
      poolId: BytesLike;
      kind: BigNumberish;
      assetIn: string;
      assetOut: string;
      amount: BigNumberish;
      userData: BytesLike;
    },
    funds: {
      sender: string;
      fromInternalBalance: boolean;
      recipient: string;
      toInternalBalance: boolean;
    },
    limit: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)"(
    singleSwap: {
      poolId: BytesLike;
      kind: BigNumberish;
      assetIn: string;
      assetOut: string;
      amount: BigNumberish;
      userData: BytesLike;
    },
    funds: {
      sender: string;
      fromInternalBalance: boolean;
      recipient: string;
      toInternalBalance: boolean;
    },
    limit: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    swap(
      singleSwap: {
        poolId: BytesLike;
        kind: BigNumberish;
        assetIn: string;
        assetOut: string;
        amount: BigNumberish;
        userData: BytesLike;
      },
      funds: {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
      },
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)"(
      singleSwap: {
        poolId: BytesLike;
        kind: BigNumberish;
        assetIn: string;
        assetOut: string;
        amount: BigNumberish;
        userData: BytesLike;
      },
      funds: {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
      },
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    swap(
      singleSwap: {
        poolId: BytesLike;
        kind: BigNumberish;
        assetIn: string;
        assetOut: string;
        amount: BigNumberish;
        userData: BytesLike;
      },
      funds: {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
      },
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)"(
      singleSwap: {
        poolId: BytesLike;
        kind: BigNumberish;
        assetIn: string;
        assetOut: string;
        amount: BigNumberish;
        userData: BytesLike;
      },
      funds: {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
      },
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swap(
      singleSwap: {
        poolId: BytesLike;
        kind: BigNumberish;
        assetIn: string;
        assetOut: string;
        amount: BigNumberish;
        userData: BytesLike;
      },
      funds: {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
      },
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)"(
      singleSwap: {
        poolId: BytesLike;
        kind: BigNumberish;
        assetIn: string;
        assetOut: string;
        amount: BigNumberish;
        userData: BytesLike;
      },
      funds: {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
      },
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
