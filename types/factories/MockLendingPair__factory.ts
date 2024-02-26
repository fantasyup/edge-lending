/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockLendingPair } from "../MockLendingPair";

export class MockLendingPair__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockLendingPair> {
    return super.deploy(overrides || {}) as Promise<MockLendingPair>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockLendingPair {
    return super.attach(address) as MockLendingPair;
  }
  connect(signer: Signer): MockLendingPair__factory {
    return super.connect(signer) as MockLendingPair__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockLendingPair {
    return new Contract(address, _abi, signerOrProvider) as MockLendingPair;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610235806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806352d1902d1461003b5780638340f54914610059575b600080fd5b610043610089565b6040516100509190610155565b60405180910390f35b610073600480360381019061006e91906100e8565b6100b1565b6040516100809190610170565b60405180910390f35b60007fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6905090565b6000600190509392505050565b6000813590506100cd816101d1565b92915050565b6000813590506100e2816101e8565b92915050565b6000806000606084860312156100fd57600080fd5b600061010b868287016100be565b935050602061011c868287016100be565b925050604061012d868287016100d3565b9150509250925092565b6101408161019d565b82525050565b61014f816101c7565b82525050565b600060208201905061016a6000830184610137565b92915050565b60006020820190506101856000830184610146565b92915050565b6000610196826101a7565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6101da8161018b565b81146101e557600080fd5b50565b6101f1816101c7565b81146101fc57600080fd5b5056fea2646970667358221220b7dcb641a001369b55a7b61f03fb80edd04f32f5a7d61b2894b4fc329ff0e30764736f6c63430008010033";
