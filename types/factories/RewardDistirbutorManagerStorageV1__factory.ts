/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { RewardDistirbutorManagerStorageV1 } from "../RewardDistirbutorManagerStorageV1";

export class RewardDistirbutorManagerStorageV1__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardDistirbutorManagerStorageV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RewardDistirbutorManagerStorageV1;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "uuid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    name: "CodeUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IRewardDistributor",
        name: "",
        type: "address",
      },
    ],
    name: "approvedDistributors",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCodeAddress",
    outputs: [
      {
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenRewardToDistributors",
    outputs: [
      {
        internalType: "contract IRewardDistributor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
