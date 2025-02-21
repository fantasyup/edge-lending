/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC20 } from "../ERC20";

export class ERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(overrides || {}) as Promise<ERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061082d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610167578063a9059cbb1461017a578063dd62ed3e1461018d576100b9565b8063395093511461013957806370a082311461014c57806395d89b411461015f576100b9565b806306fdde03146100be578063095ea7b3146100dc57806318160ddd146100fc57806323b872dd14610111578063313ce56714610124575b600080fd5b6100c66101a0565b6040516100d391906105ff565b60405180910390f35b6100ef6100ea3660046105cb565b61022e565b6040516100d391906105f4565b610104610244565b6040516100d39190610760565b6100ef61011f366004610590565b61024a565b61012c61029c565b6040516100d39190610769565b6100ef6101473660046105cb565b6102a5565b61010461015a36600461053d565b6102dc565b6100c66102fb565b6100ef6101753660046105cb565b610308565b6100ef6101883660046105cb565b61033f565b61010461019b36600461055e565b61034c565b600380546101ad906107a6565b80601f01602080910402602001604051908101604052809291908181526020018280546101d9906107a6565b80156102265780601f106101fb57610100808354040283529160200191610226565b820191906000526020600020905b81548152906001019060200180831161020957829003601f168201915b505050505081565b600061023b338484610377565b50600192915050565b60025490565b6000610257848484610434565b6001600160a01b03841660009081526001602090815260408083203380855292529091205461029291869161028d90869061078f565b610377565b5060019392505050565b60045460ff1681565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161023b91859061028d908690610777565b6001600160a01b0381166000908152602081905260409020545b919050565b600580546101ad906107a6565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161023b91859061028d90869061078f565b600061023b338484610434565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103a65760405162461bcd60e51b815260040161039d9061071c565b60405180910390fd5b6001600160a01b0382166103cc5760405162461bcd60e51b815260040161039d90610695565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610427908590610760565b60405180910390a3505050565b6001600160a01b03831661045a5760405162461bcd60e51b815260040161039d906106d7565b6001600160a01b0382166104805760405162461bcd60e51b815260040161039d90610652565b6001600160a01b0383166000908152602081905260409020546104a490829061078f565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546104d4908290610777565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610427908590610760565b80356001600160a01b03811681146102f657600080fd5b60006020828403121561054e578081fd5b61055782610526565b9392505050565b60008060408385031215610570578081fd5b61057983610526565b915061058760208401610526565b90509250929050565b6000806000606084860312156105a4578081fd5b6105ad84610526565b92506105bb60208501610526565b9150604084013590509250925092565b600080604083850312156105dd578182fd5b6105e683610526565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b8181101561062b5785810183015185820160400152820161060f565b8181111561063c5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b90815260200190565b60ff91909116815260200190565b6000821982111561078a5761078a6107e1565b500190565b6000828210156107a1576107a16107e1565b500390565b6002810460018216806107ba57607f821691505b602082108114156107db57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212206cc0c35ad8681b2a37e5d21b8be07c93360c6368bc9798e5d4e8911781c3e62f64736f6c63430008010033";
