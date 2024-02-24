/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { EIP712 } from "../EIP712";

export class EIP712__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): EIP712 {
    return new Contract(address, _abi, signerOrProvider) as EIP712;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x2b559a63",
        type: "bytes32",
      },
    ],
    name: "c_0x2b559a63",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];
