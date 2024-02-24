/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Exponential } from "../Exponential";

export class Exponential__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Exponential> {
    return super.deploy(overrides || {}) as Promise<Exponential>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Exponential {
    return super.attach(address) as Exponential;
  }
  connect(signer: Signer): Exponential__factory {
    return super.connect(signer) as Exponential__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Exponential {
    return new Contract(address, _abi, signerOrProvider) as Exponential;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x4a27d295",
        type: "bytes32",
      },
    ],
    name: "c_0x4a27d295",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060d58061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063cd2d109614602d575b600080fd5b60436004803603810190603f9190605b565b6045565b005b50565b600081359050605581608b565b92915050565b600060208284031215606c57600080fd5b60006078848285016048565b91505092915050565b6000819050919050565b6092816081565b8114609c57600080fd5b5056fea2646970667358221220627dea6e243729c209075817b645e93dc431a269ed944f178ef637c956cc952f64736f6c63430008010033";
