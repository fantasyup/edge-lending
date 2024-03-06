/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockPriceOracle } from "../MockPriceOracle";

export class MockPriceOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockPriceOracle> {
    return super.deploy(_price, overrides || {}) as Promise<MockPriceOracle>;
  }
  getDeployTransaction(
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_price, overrides || {});
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
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xd7781eb1",
        type: "bytes32",
      },
    ],
    name: "c_0xd7781eb1",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newPrice",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "viewPriceInUSD",
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
  "0x608060405234801561001057600080fd5b506040516105f83803806105f8833981810160405281019061003291906100ed565b6100647ff024522fde36cf489a496d0ed1ca65427972e91b67331657d1ef2687d9aedaf260001b6100d560201b60201c565b6100967fdb9e132e3129f22127ea50636b18f2531d15553e14fb9df5e135c5de22b1453e60001b6100d560201b60201c565b6100c87f9cd7a4797efaa528bdffee30ee94455fa118e3a03728ef7bfa4fc30817ca83dc60001b6100d560201b60201c565b8060008190555050610137565b50565b6000815190506100e781610120565b92915050565b6000602082840312156100ff57600080fd5b600061010d848285016100d8565b91505092915050565b6000819050919050565b61012981610116565b811461013457600080fd5b50565b6104b2806101466000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630226614714610051578063795363cf1461008157806391b7f5ed1461009d578063eb9d14a9146100b9575b600080fd5b61006b60048036038101906100669190610363565b6100e9565b60405161007891906103c4565b60405180910390f35b61009b6004803603810190610096919061033a565b6101da565b005b6100b760048036038101906100b2919061038c565b6101dd565b005b6100d360048036038101906100ce9190610363565b61026b565b6040516100e091906103c4565b60405180910390f35b60006101177ff88ea7395fc42e5f10743078961aa7eade033571fffd538607fc76204a5e0b1a60001b6101da565b6101437f938dadaf5b96bf5583b5123f13e3f1bec781998276ee463f49bb26f733de9b0760001b6101da565b61016f7faac25cbc443bad0cfa7d362cc0f63dc68a2e0fa01c976d4ec537cd37a2ec45b460001b6101da565b6000546000819055506101a47f70b121c575fd0410be5491d998feb953138b5a060947e862202864fe8135733c60001b6101da565b6101d07f46526324817c2db00c5ab627b43bf8d9dc00bc6ad0705f1037b191fec5c5c86260001b6101da565b6000549050919050565b50565b6102097fd2422b7fd45d777db9ccfa6d032093a0b96b513e58237dd4a13d45deeb751e0060001b6101da565b6102357f84cccdd572fb706369158ee2fc869131769dc713bba445aae3e53b7fbcdfaefe60001b6101da565b6102617fe3c4236a2557e9d3c4de514208ae18a08c4ad5f870623b8df5c5537f736b59e160001b6101da565b8060008190555050565b60006102997f09cb2776972a2f4489caa0a3eee12af29224fe45809bdf2898e2d0ec4c7899a960001b6101da565b6102c57faefb56e750b34f5855b121f5fcafe294bd5d63d3ed201e8f4d479f5e3d88dbb260001b6101da565b6102f17f5e252bddec4efca14e66b1f53efd5ed4b6722c2a78504921200e7fa4eb6353aa60001b6101da565b6000549050919050565b60008135905061030a81610437565b92915050565b60008135905061031f8161044e565b92915050565b60008135905061033481610465565b92915050565b60006020828403121561034c57600080fd5b600061035a848285016102fb565b91505092915050565b60006020828403121561037557600080fd5b600061038384828501610310565b91505092915050565b60006020828403121561039e57600080fd5b60006103ac84828501610325565b91505092915050565b6103be8161042d565b82525050565b60006020820190506103d960008301846103b5565b92915050565b60006103ea8261040d565b9050919050565b6000819050919050565b6000610406826103df565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b610440816103f1565b811461044b57600080fd5b50565b610457816103fb565b811461046257600080fd5b50565b61046e8161042d565b811461047957600080fd5b5056fea264697066735822122076df59c63143be75c86b02023b9ba5169f3721a8b3df23deffad25bd07d4a8a464736f6c63430008010033";
