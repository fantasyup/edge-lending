/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { WrapperToken } from "../WrapperToken";

export class WrapperToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WrapperToken> {
    return super.deploy(overrides || {}) as Promise<WrapperToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WrapperToken {
    return super.attach(address) as WrapperToken;
  }
  connect(signer: Signer): WrapperToken__factory {
    return super.connect(signer) as WrapperToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WrapperToken {
    return new Contract(address, _abi, signerOrProvider) as WrapperToken;
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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "contract IBSLendingPair",
        name: "__owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    name: "owner",
    outputs: [
      {
        internalType: "contract IBSLendingPair",
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
        name: "owner",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [],
    name: "underlying",
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
];

const _bytecode =
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561003457600080fd5b50608051611543610050600039600061065701526115436000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636f307dc3116100ad5780639dc29fac116100715780639dc29fac1461022f578063a457c2d714610242578063a9059cbb14610255578063d505accf14610268578063dd62ed3e1461027b57610121565b80636f307dc3146101e457806370a08231146101f95780637ecebe001461020c5780638da5cb5b1461021f57806395d89b411461022757610121565b806323b872dd116100f457806323b872dd1461018e578063313ce567146101a15780633644e515146101b657806339509351146101be57806340c10f19146101d157610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd146101645780632016a0d214610179575b600080fd5b61012e61028e565b60405161013b919061107c565b60405180910390f35b610157610152366004610f0a565b61031c565b60405161013b9190610fea565b61016c610332565b60405161013b9190610ff5565b61018c610187366004610f35565b610339565b005b61015761019c366004610e55565b61045b565b6101a96104ad565b60405161013b9190611439565b61016c6104b6565b6101576101cc366004610f0a565b6104c5565b61018c6101df366004610f0a565b6104fc565b6101ec610534565b60405161013b9190610fd6565b61016c610207366004610dfa565b610549565b61016c61021a366004610dfa565b610564565b6101ec61057f565b61012e61058e565b61018c61023d366004610f0a565b61059b565b610157610250366004610f0a565b6105cf565b610157610263366004610f0a565b610606565b61018c610276366004610e95565b610613565b61016c610289366004610e1d565b61072c565b6003805461029b90611476565b80601f01602080910402602001604051908101604052809291908181526020018280546102c790611476565b80156103145780601f106102e957610100808354040283529160200191610314565b820191906000526020600020905b8154815290600101906020018083116102f757829003601f168201915b505050505081565b6000610329338484610757565b50600192915050565b6002545b90565b600c54610100900460ff1680610352575061035261080b565b806103605750600c5460ff16155b6103855760405162461bcd60e51b815260040161037c90611262565b60405180910390fd5b600c54610100900460ff161580156103b057600c805460ff1961ff0019909116610100171660011790555b6001600160a01b0385166103d65760405162461bcd60e51b815260040161037c9061123b565b600d805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03871617905561040a83836012610811565b61041383610851565b600c805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b03871602179055801561045457600c805461ff00191690555b5050505050565b6000610468848484610877565b6001600160a01b0384166000908152600160209081526040808320338085529252909120546104a391869161049e90869061145f565b610757565b5060019392505050565b60045460ff1681565b60006104c0610969565b905090565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161032991859061049e908690611447565b600d546001600160a01b031633146105265760405162461bcd60e51b815260040161037c9061118b565b610530828261099d565b5050565b600c546201000090046001600160a01b031681565b6001600160a01b031660009081526020819052604090205490565b6001600160a01b03166000908152600b602052604090205490565b600d546001600160a01b031690565b6005805461029b90611476565b600d546001600160a01b031633146105c55760405162461bcd60e51b815260040161037c9061118b565b6105308282610a53565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161032991859061049e90869061145f565b6000610329338484610877565b834211156106335760405162461bcd60e51b815260040161037c906111c2565b6001600160a01b0387166000908152600b60209081526040808320549051610686927f0000000000000000000000000000000000000000000000000000000000000000928c928c928c92918c9101610ffe565b60405160208183030381529060405280519060200120905060006106a982610b05565b905060006106b982878787610b3e565b9050896001600160a01b0316816001600160a01b0316146106ec5760405162461bcd60e51b815260040161037c90611301565b6001600160a01b038a166000908152600b60205260408120805491610710836114b1565b91905055506107208a8a8a610757565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03831661077d5760405162461bcd60e51b815260040161037c906113be565b6001600160a01b0382166107a35760405162461bcd60e51b815260040161037c90611149565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906107fe908590610ff5565b60405180910390a3505050565b303b1590565b8251610824906003906020860190610cda565b508151610838906005906020850190610cda565b506004805460ff191660ff929092169190911790555050565b61087481604051806040016040528060018152602001603160f81b815250610c34565b50565b6001600160a01b03831661089d5760405162461bcd60e51b815260040161037c90611379565b6001600160a01b0382166108c35760405162461bcd60e51b815260040161037c90611106565b6001600160a01b0383166000908152602081905260409020546108e790829061145f565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610917908290611447565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107fe908590610ff5565b6000600754610976610c95565b14156109855750600654610336565b610996600a54600854600954610c99565b9050610336565b6001600160a01b0382166109c35760405162461bcd60e51b815260040161037c90611402565b806002546109d19190611447565b6002556001600160a01b0382166000908152602081905260409020546109f8908290611447565b6001600160a01b0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610a47908590610ff5565b60405180910390a35050565b6001600160a01b038216610a795760405162461bcd60e51b815260040161037c90611338565b6001600160a01b038216600090815260208190526040902054610a9d90829061145f565b6001600160a01b038316600090815260208190526040902055600254610ac490829061145f565b6002556040516000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610a47908590610ff5565b6000610b0f610969565b82604051602001610b21929190610fbb565b604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610b805760405162461bcd60e51b815260040161037c906111f9565b8360ff16601b1480610b9557508360ff16601c145b610bb15760405162461bcd60e51b815260040161037c906112bf565b600060018686868660405160008152602001604052604051610bd6949392919061105e565b6020604051602081039080840390855afa158015610bf8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610c2b5760405162461bcd60e51b815260040161037c906110cf565b95945050505050565b8151602080840191909120825191830191909120600882905560098190557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610c7b610c95565b600755610c89818484610c99565b600655600a5550505050565b4690565b6000838383610ca6610c95565b30604051602001610cbb959493929190611032565b6040516020818303038152906040528051906020012090509392505050565b828054610ce690611476565b90600052602060002090601f016020900481019282610d085760008555610d4e565b82601f10610d2157805160ff1916838001178555610d4e565b82800160010185558215610d4e579182015b82811115610d4e578251825591602001919060010190610d33565b50610d5a929150610d5e565b5090565b5b80821115610d5a5760008155600101610d5f565b600082601f830112610d83578081fd5b813567ffffffffffffffff80821115610d9e57610d9e6114e2565b604051601f8301601f19908116603f01168101908282118183101715610dc657610dc66114e2565b81604052838152866020858801011115610dde578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610e0b578081fd5b8135610e16816114f8565b9392505050565b60008060408385031215610e2f578081fd5b8235610e3a816114f8565b91506020830135610e4a816114f8565b809150509250929050565b600080600060608486031215610e69578081fd5b8335610e74816114f8565b92506020840135610e84816114f8565b929592945050506040919091013590565b600080600080600080600060e0888a031215610eaf578283fd5b8735610eba816114f8565b96506020880135610eca816114f8565b95506040880135945060608801359350608088013560ff81168114610eed578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610f1c578182fd5b8235610f27816114f8565b946020939093013593505050565b60008060008060808587031215610f4a578384fd5b8435610f55816114f8565b93506020850135610f65816114f8565b9250604085013567ffffffffffffffff80821115610f81578384fd5b610f8d88838901610d73565b93506060870135915080821115610fa2578283fd5b50610faf87828801610d73565b91505092959194509250565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b818110156110a85785810183015185820160400152820161108c565b818111156110b95783604083870101525b50601f01601f1916929092016040019392505050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526011908201527f4f4e4c595f4c454e44494e475f50414952000000000000000000000000000000604082015260600190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b6000821982111561145a5761145a6114cc565b500190565b600082821015611471576114716114cc565b500390565b60028104600182168061148a57607f821691505b602082108114156114ab57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156114c5576114c56114cc565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461087457600080fdfea2646970667358221220f4384a8a3076ca62ab5cee8d669434e9a3a8ad83b5758e01649e443754c01bd764736f6c63430008010033";
