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
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561003457600080fd5b506080516115fa61005060003960006106ea01526115fa6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636f307dc3116100ad5780639dc29fac116100715780639dc29fac1461022f578063a457c2d714610242578063a9059cbb14610255578063d505accf14610268578063dd62ed3e1461027b57610121565b80636f307dc3146101e457806370a08231146101f95780637ecebe001461020c5780638da5cb5b1461021f57806395d89b411461022757610121565b806323b872dd116100f457806323b872dd1461018e578063313ce567146101a15780633644e515146101b657806339509351146101be57806340c10f19146101d157610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd146101645780632016a0d214610179575b600080fd5b61012e61028e565b60405161013b9190611124565b60405180910390f35b610157610152366004610f96565b61031c565b60405161013b9190611092565b61016c610332565b60405161013b919061109d565b61018c610187366004610fc1565b610339565b005b61015761019c366004610ee6565b6104ee565b6101a9610540565b60405161013b91906114e1565b61016c610549565b6101576101cc366004610f96565b610558565b61018c6101df366004610f96565b61058f565b6101ec6105c7565b60405161013b919061107e565b61016c610207366004610e8b565b6105dc565b61016c61021a366004610e8b565b6105f7565b6101ec610612565b61012e610621565b61018c61023d366004610f96565b61062e565b610157610250366004610f96565b610662565b610157610263366004610f96565b610699565b61018c610276366004610f26565b6106a6565b61016c610289366004610eae565b6107bf565b6003805461029b9061151e565b80601f01602080910402602001604051908101604052809291908181526020018280546102c79061151e565b80156103145780601f106102e957610100808354040283529160200191610314565b820191906000526020600020905b8154815290600101906020018083116102f757829003601f168201915b505050505081565b60006103293384846107ea565b50600192915050565b6002545b90565b600c54610100900460ff1680610352575061035261089e565b806103605750600c5460ff16155b6103855760405162461bcd60e51b815260040161037c9061130a565b60405180910390fd5b600c54610100900460ff161580156103b057600c805460ff1961ff0019909116610100171660011790555b6001600160a01b0385166103d65760405162461bcd60e51b815260040161037c906112e3565b84600d60006101000a8154816001600160a01b0302191690836001600160a01b03160217905550836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561043657600080fd5b505afa15801561044a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046e9190611047565b600d805460ff60a01b1916600160a01b60ff9384168102919091179182905561049d92869286929004166108a4565b6104a6836108e4565b600c805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b0387160217905580156104e757600c805461ff00191690555b5050505050565b60006104fb84848461090a565b6001600160a01b038416600090815260016020908152604080832033808552925290912054610536918691610531908690611507565b6107ea565b5060019392505050565b60045460ff1681565b60006105536109fc565b905090565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916103299185906105319086906114ef565b600d546001600160a01b031633146105b95760405162461bcd60e51b815260040161037c90611233565b6105c38282610a30565b5050565b600c546201000090046001600160a01b031681565b6001600160a01b031660009081526020819052604090205490565b6001600160a01b03166000908152600b602052604090205490565b600d546001600160a01b031690565b6005805461029b9061151e565b600d546001600160a01b031633146106585760405162461bcd60e51b815260040161037c90611233565b6105c38282610ae4565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610329918590610531908690611507565b600061032933848461090a565b834211156106c65760405162461bcd60e51b815260040161037c9061126a565b6001600160a01b0387166000908152600b60209081526040808320549051610719927f0000000000000000000000000000000000000000000000000000000000000000928c928c928c92918c91016110a6565b604051602081830303815290604052805190602001209050600061073c82610b96565b9050600061074c82878787610bcf565b9050896001600160a01b0316816001600160a01b03161461077f5760405162461bcd60e51b815260040161037c906113a9565b6001600160a01b038a166000908152600b602052604081208054916107a383611559565b91905055506107b38a8a8a6107ea565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166108105760405162461bcd60e51b815260040161037c90611466565b6001600160a01b0382166108365760405162461bcd60e51b815260040161037c906111f1565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061089190859061109d565b60405180910390a3505050565b303b1590565b82516108b7906003906020860190610d6b565b5081516108cb906005906020850190610d6b565b506004805460ff191660ff929092169190911790555050565b61090781604051806040016040528060018152602001603160f81b815250610cc5565b50565b6001600160a01b0383166109305760405162461bcd60e51b815260040161037c90611421565b6001600160a01b0382166109565760405162461bcd60e51b815260040161037c906111ae565b6001600160a01b03831660009081526020819052604090205461097a908290611507565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546109aa9082906114ef565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061089190859061109d565b6000600754610a09610d26565b1415610a185750600654610336565b610a29600a54600854600954610d2a565b9050610336565b6001600160a01b038216610a565760405162461bcd60e51b815260040161037c906114aa565b8060026000828254610a6891906114ef565b90915550506001600160a01b03821660009081526020819052604081208054839290610a959084906114ef565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610ad890859061109d565b60405180910390a35050565b6001600160a01b038216610b0a5760405162461bcd60e51b815260040161037c906113e0565b6001600160a01b038216600090815260208190526040902054610b2e908290611507565b6001600160a01b038316600090815260208190526040902055600254610b55908290611507565b6002556040516000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610ad890859061109d565b6000610ba06109fc565b82604051602001610bb2929190611063565b604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610c115760405162461bcd60e51b815260040161037c906112a1565b8360ff16601b1480610c2657508360ff16601c145b610c425760405162461bcd60e51b815260040161037c90611367565b600060018686868660405160008152602001604052604051610c679493929190611106565b6020604051602081039080840390855afa158015610c89573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610cbc5760405162461bcd60e51b815260040161037c90611177565b95945050505050565b8151602080840191909120825191830191909120600882905560098190557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610d0c610d26565b600755610d1a818484610d2a565b600655600a5550505050565b4690565b6000838383610d37610d26565b30604051602001610d4c9594939291906110da565b6040516020818303038152906040528051906020012090509392505050565b828054610d779061151e565b90600052602060002090601f016020900481019282610d995760008555610ddf565b82601f10610db257805160ff1916838001178555610ddf565b82800160010185558215610ddf579182015b82811115610ddf578251825591602001919060010190610dc4565b50610deb929150610def565b5090565b5b80821115610deb5760008155600101610df0565b600082601f830112610e14578081fd5b813567ffffffffffffffff80821115610e2f57610e2f61158a565b604051601f8301601f19908116603f01168101908282118183101715610e5757610e5761158a565b81604052838152866020858801011115610e6f578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610e9c578081fd5b8135610ea7816115a0565b9392505050565b60008060408385031215610ec0578081fd5b8235610ecb816115a0565b91506020830135610edb816115a0565b809150509250929050565b600080600060608486031215610efa578081fd5b8335610f05816115a0565b92506020840135610f15816115a0565b929592945050506040919091013590565b600080600080600080600060e0888a031215610f40578283fd5b8735610f4b816115a0565b96506020880135610f5b816115a0565b955060408801359450606088013593506080880135610f79816115b5565b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610fa8578182fd5b8235610fb3816115a0565b946020939093013593505050565b60008060008060808587031215610fd6578384fd5b8435610fe1816115a0565b93506020850135610ff1816115a0565b9250604085013567ffffffffffffffff8082111561100d578384fd5b61101988838901610e04565b9350606087013591508082111561102e578283fd5b5061103b87828801610e04565b91505092959194509250565b600060208284031215611058578081fd5b8151610ea7816115b5565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b8181101561115057858101830151858201604001528201611134565b818111156111615783604083870101525b50601f01601f1916929092016040019392505050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526011908201527f4f4e4c595f4c454e44494e475f50414952000000000000000000000000000000604082015260600190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b6000821982111561150257611502611574565b500190565b60008282101561151957611519611574565b500390565b60028104600182168061153257607f821691505b6020821081141561155357634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561156d5761156d611574565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461090757600080fd5b60ff8116811461090757600080fdfea2646970667358221220fa1d972fd90dd4119065a35c53550e077f3749c606078f9137c6f00eab0aa61b64736f6c63430008010033";
