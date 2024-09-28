/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockVaultUser } from "../MockVaultUser";

export class MockVaultUser__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockVaultUser> {
    return super.deploy(overrides || {}) as Promise<MockVaultUser>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockVaultUser {
    return super.attach(address) as MockVaultUser;
  }
  connect(signer: Signer): MockVaultUser__factory {
    return super.connect(signer) as MockVaultUser__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockVaultUser {
    return new Contract(address, _abi, signerOrProvider) as MockVaultUser;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IBSVault",
        name: "_vault",
        type: "address",
      },
    ],
    name: "attack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBSVault",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_approve",
        type: "address",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610220806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063d018db3e1461003b578063d80aea1514610050575b600080fd5b61004e61004936600461013e565b610063565b005b61004e61005e366004610161565b6100d0565b604051630fc8706d60e21b81526001600160a01b03821690633f21c1b49061009b903090819060019060009081908190600401610199565b600060405180830381600087803b1580156100b557600080fd5b505af11580156100c9573d6000803e3d6000fd5b5050505050565b604051630fc8706d60e21b81526001600160a01b03831690633f21c1b490610108903090859060019060009081908190600401610199565b600060405180830381600087803b15801561012257600080fd5b505af1158015610136573d6000803e3d6000fd5b505050505050565b60006020828403121561014f578081fd5b813561015a816101d2565b9392505050565b60008060408385031215610173578081fd5b823561017e816101d2565b9150602083013561018e816101d2565b809150509250929050565b6001600160a01b039687168152949095166020850152911515604084015260ff166060830152608082015260a081019190915260c00190565b6001600160a01b03811681146101e757600080fd5b5056fea26469706673582212201ee89efa0472e1ac914b9129a9cc3ae4a4e78f3dffb02cb0cb13175bc3b30b3f64736f6c63430008010033";
