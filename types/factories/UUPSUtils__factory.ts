/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { UUPSUtils } from "../UUPSUtils";

export class UUPSUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UUPSUtils> {
    return super.deploy(overrides || {}) as Promise<UUPSUtils>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UUPSUtils {
    return super.attach(address) as UUPSUtils;
  }
  connect(signer: Signer): UUPSUtils__factory {
    return super.connect(signer) as UUPSUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UUPSUtils {
    return new Contract(address, _abi, signerOrProvider) as UUPSUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xd2a75b55",
        type: "bytes32",
      },
    ],
    name: "c_0xd2a75b55",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60e0610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80633c2cb230146038575b600080fd5b604e6004803603810190604a91906066565b6050565b005b50565b6000813590506060816096565b92915050565b600060208284031215607757600080fd5b60006083848285016053565b91505092915050565b6000819050919050565b609d81608c565b811460a757600080fd5b5056fea2646970667358221220922a2e2389c8180943a039db8a994e8b39a01a756f33b28f9c6a984a1f0044ad64736f6c63430008010033";
