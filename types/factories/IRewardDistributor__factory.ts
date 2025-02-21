/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IRewardDistributor } from "../IRewardDistributor";

export class IRewardDistributor__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRewardDistributor {
    return new Contract(address, _abi, signerOrProvider) as IRewardDistributor;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountDistributePerSecond",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_startTimestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_endTimestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_guardian",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "accumulateReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "endTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountDistributePerSecond",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTimestamp",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_guardian",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
