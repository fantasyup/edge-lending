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

interface DataTypesInterface extends ethers.utils.Interface {
  functions: {
    "validBorrowAssetConfig(tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "validBorrowAssetConfig",
    values: [
      {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "validBorrowAssetConfig",
    data: BytesLike
  ): Result;

  events: {};
}

export class DataTypes extends Contract {
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

  interface: DataTypesInterface;

  functions: {
    validBorrowAssetConfig(
      self: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      overrides?: CallOverrides
    ): Promise<[void]>;

    "validBorrowAssetConfig((IInterestRateModel,uint256,uint256,uint256,IBSWrapperToken,uint256,IBSWrapperToken))"(
      self: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  validBorrowAssetConfig(
    self: {
      interestRate: string;
      initialExchangeRateMantissa: BigNumberish;
      reserveFactorMantissa: BigNumberish;
      collateralFactor: BigNumberish;
      wrappedBorrowAsset: string;
      liquidationFee: BigNumberish;
      debtToken: string;
    },
    overrides?: CallOverrides
  ): Promise<void>;

  "validBorrowAssetConfig((IInterestRateModel,uint256,uint256,uint256,IBSWrapperToken,uint256,IBSWrapperToken))"(
    self: {
      interestRate: string;
      initialExchangeRateMantissa: BigNumberish;
      reserveFactorMantissa: BigNumberish;
      collateralFactor: BigNumberish;
      wrappedBorrowAsset: string;
      liquidationFee: BigNumberish;
      debtToken: string;
    },
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    validBorrowAssetConfig(
      self: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "validBorrowAssetConfig((IInterestRateModel,uint256,uint256,uint256,IBSWrapperToken,uint256,IBSWrapperToken))"(
      self: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    validBorrowAssetConfig(
      self: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validBorrowAssetConfig((IInterestRateModel,uint256,uint256,uint256,IBSWrapperToken,uint256,IBSWrapperToken))"(
      self: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    validBorrowAssetConfig(
      self: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validBorrowAssetConfig((IInterestRateModel,uint256,uint256,uint256,IBSWrapperToken,uint256,IBSWrapperToken))"(
      self: {
        interestRate: string;
        initialExchangeRateMantissa: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        collateralFactor: BigNumberish;
        wrappedBorrowAsset: string;
        liquidationFee: BigNumberish;
        debtToken: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
