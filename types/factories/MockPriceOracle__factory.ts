/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockPriceOracle } from "../MockPriceOracle";

export class MockPriceOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockPriceOracle> {
    return super.deploy(overrides || {}) as Promise<MockPriceOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockPriceOracle {
    return super.attach(address) as MockPriceOracle;
  }
  connect(signer: Signer): MockPriceOracle__factory {
    return super.connect(signer) as MockPriceOracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as MockPriceOracle;
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
    ],
    name: "getPriceInETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getPriceInUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101a2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063022661471461003b57806353c92f461461006b575b600080fd5b610055600480360381019061005091906100c6565b61009b565b60405161006291906100fe565b60405180910390f35b610085600480360381019061008091906100c6565b6100a6565b60405161009291906100fe565b60405180910390f35b600060019050919050565b600060019050919050565b6000813590506100c081610155565b92915050565b6000602082840312156100d857600080fd5b60006100e6848285016100b1565b91505092915050565b6100f88161014b565b82525050565b600060208201905061011360008301846100ef565b92915050565b60006101248261012b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61015e81610119565b811461016957600080fd5b5056fea2646970667358221220c607a8093a0ee5f0b4808a1194156f4cfe72571fc937d17329c24b9dd6a6c5ea64736f6c63430008010033";
