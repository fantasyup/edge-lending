/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockUniswapV2Router02 } from "../MockUniswapV2Router02";

export class MockUniswapV2Router02__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockUniswapV2Router02> {
    return super.deploy(overrides || {}) as Promise<MockUniswapV2Router02>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockUniswapV2Router02 {
    return super.attach(address) as MockUniswapV2Router02;
  }
  connect(signer: Signer): MockUniswapV2Router02__factory {
    return super.connect(signer) as MockUniswapV2Router02__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockUniswapV2Router02 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockUniswapV2Router02;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610460806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806338ed173914610030575b600080fd5b61004361003e36600461030d565b610059565b60405161005091906103e6565b60405180910390f35b60608484600081811061007c57634e487b7160e01b600052603260045260246000fd5b905060200201602081019061009191906102cc565b6001600160a01b03166323b872dd33308a6040518463ffffffff1660e01b81526004016100c0939291906103a9565b602060405180830381600087803b1580156100da57600080fd5b505af11580156100ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011291906102ed565b508484600281811061013457634e487b7160e01b600052603260045260246000fd5b905060200201602081019061014991906102cc565b6001600160a01b031663a9059cbb84896040518363ffffffff1660e01b81526004016101769291906103cd565b602060405180830381600087803b15801561019057600080fd5b505af11580156101a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c891906102ed565b508367ffffffffffffffff8111156101f057634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610219578160200160208202803683370190505b509050868160008151811061023e57634e487b7160e01b600052603260045260246000fd5b602002602001018181525050868160018151811061026c57634e487b7160e01b600052603260045260246000fd5b602002602001018181525050868160028151811061029a57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250509695505050505050565b80356001600160a01b03811681146102c757600080fd5b919050565b6000602082840312156102dd578081fd5b6102e6826102b0565b9392505050565b6000602082840312156102fe578081fd5b815180151581146102e6578182fd5b60008060008060008060a08789031215610325578182fd5b8635955060208701359450604087013567ffffffffffffffff8082111561034a578384fd5b818901915089601f83011261035d578384fd5b81358181111561036b578485fd5b8a6020808302850101111561037e578485fd5b602083019650809550505050610396606088016102b0565b9150608087013590509295509295509295565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b8181101561041e57835183529284019291840191600101610402565b5090969550505050505056fea2646970667358221220ce1f5db5d4435d956a4e9e10fb02da2d2158923ffc8d67af7a7d9cbbea49442864736f6c63430008010033";
