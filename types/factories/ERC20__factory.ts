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
  "0x608060405234801561001057600080fd5b5061112d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610ce6565b60405180910390f35b6100e660048036038101906100e19190610b9d565b610304565b6040516100f39190610ccb565b60405180910390f35b61010461031b565b6040516101119190610d88565b60405180910390f35b610134600480360381019061012f9190610b4e565b610325565b6040516101419190610ccb565b60405180910390f35b6101526103cf565b60405161015f9190610da3565b60405180910390f35b610182600480360381019061017d9190610b9d565b6103e2565b60405161018f9190610ccb565b60405180910390f35b6101b260048036038101906101ad9190610ae9565b610480565b6040516101bf9190610d88565b60405180910390f35b6101d06104c8565b6040516101dd9190610ce6565b60405180910390f35b61020060048036038101906101fb9190610b9d565b610556565b60405161020d9190610ccb565b60405180910390f35b610230600480360381019061022b9190610b9d565b6105f4565b60405161023d9190610ccb565b60405180910390f35b610260600480360381019061025b9190610b12565b61060b565b60405161026d9190610d88565b60405180910390f35b6003805461028390610eec565b80601f01602080910402602001604051908101604052809291908181526020018280546102af90610eec565b80156102fc5780601f106102d1576101008083540402835291602001916102fc565b820191906000526020600020905b8154815290600101906020018083116102df57829003601f168201915b505050505081565b6000610311338484610692565b6001905092915050565b6000600254905090565b600061033284848461085d565b6103c4843384600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103bf9190610e30565b610692565b600190509392505050565b600460009054906101000a900460ff1681565b6000610476338484600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104719190610dda565b610692565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600580546104d590610eec565b80601f016020809104026020016040519081016040528092919081815260200182805461050190610eec565b801561054e5780601f106105235761010080835404028352916020019161054e565b820191906000526020600020905b81548152906001019060200180831161053157829003601f168201915b505050505081565b60006105ea338484600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105e59190610e30565b610692565b6001905092915050565b600061060133848461085d565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f990610d68565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610772576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076990610d28565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108509190610d88565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c490610d48565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561093d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093490610d08565b60405180910390fd5b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546109879190610e30565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610a139190610dda565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ab29190610d88565b60405180910390a3505050565b600081359050610ace816110c9565b92915050565b600081359050610ae3816110e0565b92915050565b600060208284031215610afb57600080fd5b6000610b0984828501610abf565b91505092915050565b60008060408385031215610b2557600080fd5b6000610b3385828601610abf565b9250506020610b4485828601610abf565b9150509250929050565b600080600060608486031215610b6357600080fd5b6000610b7186828701610abf565b9350506020610b8286828701610abf565b9250506040610b9386828701610ad4565b9150509250925092565b60008060408385031215610bb057600080fd5b6000610bbe85828601610abf565b9250506020610bcf85828601610ad4565b9150509250929050565b610be281610e76565b82525050565b6000610bf382610dbe565b610bfd8185610dc9565b9350610c0d818560208601610eb9565b610c1681610f7c565b840191505092915050565b6000610c2e602383610dc9565b9150610c3982610f8d565b604082019050919050565b6000610c51602283610dc9565b9150610c5c82610fdc565b604082019050919050565b6000610c74602583610dc9565b9150610c7f8261102b565b604082019050919050565b6000610c97602483610dc9565b9150610ca28261107a565b604082019050919050565b610cb681610ea2565b82525050565b610cc581610eac565b82525050565b6000602082019050610ce06000830184610bd9565b92915050565b60006020820190508181036000830152610d008184610be8565b905092915050565b60006020820190508181036000830152610d2181610c21565b9050919050565b60006020820190508181036000830152610d4181610c44565b9050919050565b60006020820190508181036000830152610d6181610c67565b9050919050565b60006020820190508181036000830152610d8181610c8a565b9050919050565b6000602082019050610d9d6000830184610cad565b92915050565b6000602082019050610db86000830184610cbc565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610de582610ea2565b9150610df083610ea2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e2557610e24610f1e565b5b828201905092915050565b6000610e3b82610ea2565b9150610e4683610ea2565b925082821015610e5957610e58610f1e565b5b828203905092915050565b6000610e6f82610e82565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015610ed7578082015181840152602081019050610ebc565b83811115610ee6576000848401525b50505050565b60006002820490506001821680610f0457607f821691505b60208210811415610f1857610f17610f4d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6110d281610e64565b81146110dd57600080fd5b50565b6110e981610ea2565b81146110f457600080fd5b5056fea264697066735822122057aa65f36a4059ccce88dbe83e7d0a77ffdf2d3444344d46786f010582229e2464736f6c63430008010033";
