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
    inputs: [],
    name: "VERSION",
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
        internalType: "address",
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
        internalType: "address",
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
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561003457600080fd5b5060805161163f6100506000396000610708015261163f6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063a457c2d711610071578063a457c2d71461024d578063a9059cbb14610260578063d505accf14610273578063dd62ed3e14610286578063ffa1ad74146102995761012c565b806370a08231146102045780637ecebe00146102175780638da5cb5b1461022a57806395d89b41146102325780639dc29fac1461023a5761012c565b8063313ce567116100f4578063313ce567146101ac5780633644e515146101c157806339509351146101c957806340c10f19146101dc5780636f307dc3146101ef5761012c565b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461016f5780632016a0d21461018457806323b872dd14610199575b600080fd5b6101396102a1565b6040516101469190611147565b60405180910390f35b61016261015d366004611041565b61032f565b60405161014691906110b5565b610177610345565b60405161014691906110c0565b610197610192366004610f18565b61034c565b005b6101626101a7366004610f9a565b610508565b6101b461055a565b604051610146919061153b565b610177610563565b6101626101d7366004611041565b610572565b6101976101ea366004611041565b6105a9565b6101f76105e1565b60405161014691906110a1565b610177610212366004610ec5565b6105f6565b610177610225366004610ec5565b610615565b6101f7610630565b61013961063f565b610197610248366004611041565b61064c565b61016261025b366004611041565b610680565b61016261026e366004611041565b6106b7565b610197610281366004610fd5565b6106c4565b610177610294366004610ee6565b6107dd565b610177610808565b600380546102ae90611578565b80601f01602080910402602001604051908101604052809291908181526020018280546102da90611578565b80156103275780601f106102fc57610100808354040283529160200191610327565b820191906000526020600020905b81548152906001019060200180831161030a57829003601f168201915b505050505081565b600061033c33848461080d565b50600192915050565b6002545b90565b600c54610100900460ff168061036557506103656108c1565b806103735750600c5460ff16155b6103985760405162461bcd60e51b815260040161038f90611364565b60405180910390fd5b600c54610100900460ff161580156103c357600c805460ff1961ff0019909116610100171660011790555b6001600160a01b0385166103e95760405162461bcd60e51b815260040161038f9061133d565b6001600160a01b03841661040f5760405162461bcd60e51b815260040161038f906112c4565b84600d60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000846001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561047157600080fd5b505afa158015610485573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a9919061106a565b90506104b68484836108c7565b6104bf84610907565b50600c805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b03871602179055801561050157600c805461ff00191690555b5050505050565b600061051584848461092d565b6001600160a01b03841660009081526001602090815260408083203380855292529091205461055091869161054b908690611561565b61080d565b5060019392505050565b60045460ff1681565b600061056d610a1f565b905090565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161033c91859061054b908690611549565b600d546001600160a01b031633146105d35760405162461bcd60e51b815260040161038f90611256565b6105dd8282610a53565b5050565b600c546201000090046001600160a01b031681565b6001600160a01b0381166000908152602081905260409020545b919050565b6001600160a01b03166000908152600b602052604090205490565b600d546001600160a01b031690565b600580546102ae90611578565b600d546001600160a01b031633146106765760405162461bcd60e51b815260040161038f90611256565b6105dd8282610b07565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161033c91859061054b908690611561565b600061033c33848461092d565b834211156106e45760405162461bcd60e51b815260040161038f9061128d565b6001600160a01b0387166000908152600b60209081526040808320549051610737927f0000000000000000000000000000000000000000000000000000000000000000928c928c928c92918c91016110c9565b604051602081830303815290604052805190602001209050600061075a82610bb9565b9050600061076a82878787610bf2565b9050896001600160a01b0316816001600160a01b03161461079d5760405162461bcd60e51b815260040161038f90611403565b6001600160a01b038a166000908152600b602052604081208054916107c1836115b3565b91905055506107d18a8a8a61080d565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600181565b6001600160a01b0383166108335760405162461bcd60e51b815260040161038f906114c0565b6001600160a01b0382166108595760405162461bcd60e51b815260040161038f90611214565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906108b49085906110c0565b60405180910390a3505050565b303b1590565b82516108da906003906020860190610d8e565b5081516108ee906005906020850190610d8e565b506004805460ff191660ff929092169190911790555050565b61092a81604051806040016040528060018152602001603160f81b815250610ce8565b50565b6001600160a01b0383166109535760405162461bcd60e51b815260040161038f9061147b565b6001600160a01b0382166109795760405162461bcd60e51b815260040161038f906111d1565b6001600160a01b03831660009081526020819052604090205461099d908290611561565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546109cd908290611549565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906108b49085906110c0565b6000600754610a2c610d49565b1415610a3b5750600654610349565b610a4c600a54600854600954610d4d565b9050610349565b6001600160a01b038216610a795760405162461bcd60e51b815260040161038f90611504565b8060026000828254610a8b9190611549565b90915550506001600160a01b03821660009081526020819052604081208054839290610ab8908490611549565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610afb9085906110c0565b60405180910390a35050565b6001600160a01b038216610b2d5760405162461bcd60e51b815260040161038f9061143a565b6001600160a01b038216600090815260208190526040902054610b51908290611561565b6001600160a01b038316600090815260208190526040902055600254610b78908290611561565b6002556040516000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610afb9085906110c0565b6000610bc3610a1f565b82604051602001610bd5929190611086565b604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610c345760405162461bcd60e51b815260040161038f906112fb565b8360ff16601b1480610c4957508360ff16601c145b610c655760405162461bcd60e51b815260040161038f906113c1565b600060018686868660405160008152602001604052604051610c8a9493929190611129565b6020604051602081039080840390855afa158015610cac573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610cdf5760405162461bcd60e51b815260040161038f9061119a565b95945050505050565b8151602080840191909120825191830191909120600882905560098190557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610d2f610d49565b600755610d3d818484610d4d565b600655600a5550505050565b4690565b6000838383610d5a610d49565b30604051602001610d6f9594939291906110fd565b6040516020818303038152906040528051906020012090509392505050565b828054610d9a90611578565b90600052602060002090601f016020900481019282610dbc5760008555610e02565b82601f10610dd557805160ff1916838001178555610e02565b82800160010185558215610e02579182015b82811115610e02578251825591602001919060010190610de7565b50610e0e929150610e12565b5090565b5b80821115610e0e5760008155600101610e13565b80356001600160a01b038116811461061057600080fd5b600082601f830112610e4e578081fd5b813567ffffffffffffffff80821115610e6957610e696115e4565b604051601f8301601f19908116603f01168101908282118183101715610e9157610e916115e4565b81604052838152866020858801011115610ea9578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610ed6578081fd5b610edf82610e27565b9392505050565b60008060408385031215610ef8578081fd5b610f0183610e27565b9150610f0f60208401610e27565b90509250929050565b60008060008060808587031215610f2d578182fd5b610f3685610e27565b9350610f4460208601610e27565b9250604085013567ffffffffffffffff80821115610f60578384fd5b610f6c88838901610e3e565b93506060870135915080821115610f81578283fd5b50610f8e87828801610e3e565b91505092959194509250565b600080600060608486031215610fae578283fd5b610fb784610e27565b9250610fc560208501610e27565b9150604084013590509250925092565b600080600080600080600060e0888a031215610fef578283fd5b610ff888610e27565b965061100660208901610e27565b955060408801359450606088013593506080880135611024816115fa565b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611053578182fd5b61105c83610e27565b946020939093013593505050565b60006020828403121561107b578081fd5b8151610edf816115fa565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b8181101561117357858101830151858201604001528201611157565b818111156111845783604083870101525b50601f01601f1916929092016040019392505050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526011908201527f4f4e4c595f4c454e44494e475f50414952000000000000000000000000000000604082015260600190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b60208082526012908201527f696e76616c696420756e6465726c79696e670000000000000000000000000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b6000821982111561155c5761155c6115ce565b500190565b600082821015611573576115736115ce565b500390565b60028104600182168061158c57607f821691505b602082108114156115ad57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156115c7576115c76115ce565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60ff8116811461092a57600080fdfea264697066735822122014742ef72a5e447124693f65c10db0d3d7c7ecb5a914f54267d13a204f19fd8864736f6c63430008010033";
