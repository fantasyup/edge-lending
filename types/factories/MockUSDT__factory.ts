/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockUSDT } from "../MockUSDT";

export class MockUSDT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockUSDT> {
    return super.deploy(overrides || {}) as Promise<MockUSDT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockUSDT {
    return super.attach(address) as MockUSDT;
  }
  connect(signer: Signer): MockUSDT__factory {
    return super.connect(signer) as MockUSDT__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockUSDT {
    return new Contract(address, _abi, signerOrProvider) as MockUSDT;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x66705b12",
        type: "bytes32",
      },
    ],
    name: "c_0x66705b12",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060d58061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806305a3d69014602d575b600080fd5b60436004803603810190603f9190605b565b6045565b005b50565b600081359050605581608b565b92915050565b600060208284031215606c57600080fd5b60006078848285016048565b91505092915050565b6000819050919050565b6092816081565b8114609c57600080fd5b5056fea264697066735822122039430700d9ddcdd0da28f1eda954102fe1eacd546c9fae75cc549a790b7313d964736f6c63430008010033";
