/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { UpgradableProxyAndPausable } from "../UpgradableProxyAndPausable";

export class UpgradableProxyAndPausable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UpgradableProxyAndPausable> {
    return super.deploy(overrides || {}) as Promise<UpgradableProxyAndPausable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UpgradableProxyAndPausable {
    return super.attach(address) as UpgradableProxyAndPausable;
  }
  connect(signer: Signer): UpgradableProxyAndPausable__factory {
    return super.connect(signer) as UpgradableProxyAndPausable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradableProxyAndPausable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UpgradableProxyAndPausable;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xc63f9b66",
        type: "bytes32",
      },
    ],
    name: "c_0xc63f9b66",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xf938a198",
        type: "bytes32",
      },
    ],
    name: "c_0xf938a198",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initialAddress",
        type: "address",
      },
    ],
    name: "initializeProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060008060006101000a81548160ff0219169083151502179055506108068061003a6000396000f3fe6080604052600436106100435760003560e01c80634a0687ef1461005c5780634efb945f1461008557806350b1ebda146100ae5780635c975abb146100d757610052565b3661005257610050610102565b005b61005a610102565b005b34801561006857600080fd5b50610083600480360381019061007e91906105f5565b61011c565b005b34801561009157600080fd5b506100ac60048036038101906100a7919061061e565b6103f2565b005b3480156100ba57600080fd5b506100d560048036038101906100d0919061061e565b6103f5565b005b3480156100e357600080fd5b506100ec6103f8565b6040516100f9919061069c565b60405180910390f35b61010a61040e565b61011a610115610410565b6104a3565b565b6101487f77ba71d2edc010e77cb07c63711d6a2f8955a2600a003a6e167614d5dfcabbe560001b6103f2565b6101747fff87c6e2c8847592008c873fcf27b61658143e4463026209cf110ce4ef2a295960001b6103f2565b6101a07ffe81a399660f98ed09090cb688ec7b1cb121ec29b2ea926842cdcb9095c7372960001b6103f2565b6101cc7f5228792f31b6666beb0f41083fa73b8e1a13695be6f4b838e59bc555857fa75260001b6103f2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561023c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610233906106d7565b60405180910390fd5b6102687f7f0cc1ad99496162bcde265fcbc3a149265355d205c912dddf86e21b0b2352e960001b6103f2565b6102947f3489c58ade827b95978cd51a43e16bda7991437c24b8193fb08b370c31dc2e4d60001b6103f2565b6102c07f85f7ba7efa9a5308ecc8d2c3f4bd900bea57a896929fd95793a87d15f1e8d79860001b6103f2565b6102ec7f179cdd2a149e5cc807b2e6c3f62d74e88778ff096c04ea142caa970f111d2bc060001b6103f2565b600073ffffffffffffffffffffffffffffffffffffffff1661030c6104c9565b73ffffffffffffffffffffffffffffffffffffffff1614610362576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610359906106b7565b60405180910390fd5b61038e7fb84c59a809dc0e38b62721b5f837e94ad591848150dea98c4a7204a8a29cd0aa60001b6103f2565b6103ba7f2991f0b5f0f9145b12909546eeafa75ccbc41d0377be18c8a43e1e325ac98f9260001b6103f2565b6103e67f8649f2e34cac9cfc470a7d971b61b4ebb64ec5f7413728c17052583fc46cb73360001b6103f2565b6103ef8161054a565b50565b50565b50565b60008060009054906101000a900460ff16905090565b565b600061043e7f7c5327d4b77b218f600813e2b7468c29c56901119885e9437f0a4a4002064dcc60001b6103f2565b61046a7f2753586ba233afb8d9f2fa7fe9805b6ab809756f05a44eddeccccadf6058dc6760001b6103f2565b6104967f4806ed5189d2c86219e3112595b8b37c2cf94f7e4de5c49b007eb6a75c08755260001b6103f2565b61049e6104c9565b905090565b3660008037600080366000845af43d6000803e80600081146104c4573d6000f35b3d6000fd5b60006104f77faebf57411e15ce4c7e5bd228b61597a1e9b4e44016b86479800dcdafcbcd769960001b6105c8565b6105237f271987faf407395520c150a08cc92dea6edd740835a138e13658190436d9d27260001b6105c8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54905090565b6105767f6756dada430ca691f15751532a97a06b5af6a4461ecdea9be0f8ff3df0c92bb460001b6105c8565b6105a27f5da868f106a4c8fba502ca4480740233a4dbc3fdc9cf7112acadc873dd12613e60001b6105c8565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5550565b50565b6000813590506105da816107a2565b92915050565b6000813590506105ef816107b9565b92915050565b60006020828403121561060757600080fd5b6000610615848285016105cb565b91505092915050565b60006020828403121561063057600080fd5b600061063e848285016105e0565b91505092915050565b6106508161071a565b82525050565b6000610663601e836106f7565b915061066e82610750565b602082019050919050565b60006106866017836106f7565b915061069182610779565b602082019050919050565b60006020820190506106b16000830184610647565b92915050565b600060208201905081810360008301526106d081610656565b9050919050565b600060208201905081810360008301526106f081610679565b9050919050565b600082825260208201905092915050565b600061071382610730565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f5555505350726f78793a20616c726561647920696e697469616c697a65640000600082015250565b7f5555505350726f78793a207a65726f2061646472657373000000000000000000600082015250565b6107ab81610708565b81146107b657600080fd5b50565b6107c281610726565b81146107cd57600080fd5b5056fea2646970667358221220ce9167c67e43b55cfabf5f00457a6f0f1ee02ba0ff3a8ad3a66eb50476d4c53964736f6c63430008010033";
