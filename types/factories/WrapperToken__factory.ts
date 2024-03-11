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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "denormalizeAmount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "normalizeAmount",
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
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561003457600080fd5b5060805161186561005060003960006107cf01526118656000f3fe608060405234801561001057600080fd5b50600436106101475760003560e01c806370a08231116100c857806395d89b411161008c578063a9059cbb11610066578063a9059cbb146102a1578063d505accf146102b4578063dd62ed3e146102c757610147565b806395d89b41146102735780639dc29fac1461027b578063a457c2d71461028e57610147565b806370a082311461021f57806374cd7594146102325780637ecebe00146102455780638da5cb5b146102585780638dc3311d1461026057610147565b8063313ce5671161010f578063313ce567146101c75780633644e515146101dc57806339509351146101e457806340c10f19146101f75780636f307dc31461020a57610147565b806306fdde031461014c578063095ea7b31461016a57806318160ddd1461018a5780632016a0d21461019f57806323b872dd146101b4575b600080fd5b6101546102da565b604051610161919061121c565b60405180910390f35b61017d610178366004611076565b610368565b604051610161919061118a565b61019261037e565b6040516101619190611195565b6101b26101ad3660046110a1565b610385565b005b61017d6101c2366004610fc6565b61053a565b6101cf61058d565b60405161016191906115d9565b610192610596565b61017d6101f2366004611076565b6105a5565b6101b2610205366004611076565b6105dc565b610212610614565b6040516101619190611176565b61019261022d366004610f72565b610629565b610192610240366004611127565b610648565b610192610253366004610f72565b6106ae565b6102126106c9565b61019261026e366004611127565b6106d8565b610154610706565b6101b2610289366004611076565b610713565b61017d61029c366004611076565b610747565b61017d6102af366004611076565b61077e565b6101b26102c2366004611006565b61078b565b6101926102d5366004610f8e565b6108a4565b600380546102e79061178f565b80601f01602080910402602001604051908101604052809291908181526020018280546103139061178f565b80156103605780601f1061033557610100808354040283529160200191610360565b820191906000526020600020905b81548152906001019060200180831161034357829003601f168201915b505050505081565b60006103753384846108cf565b50600192915050565b6002545b90565b600c54610100900460ff168061039e575061039e610983565b806103ac5750600c5460ff16155b6103d15760405162461bcd60e51b81526004016103c890611402565b60405180910390fd5b600c54610100900460ff161580156103fc57600c805460ff1961ff0019909116610100171660011790555b6001600160a01b0385166104225760405162461bcd60e51b81526004016103c8906113db565b84600d60006101000a8154816001600160a01b0302191690836001600160a01b03160217905550836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561048257600080fd5b505afa158015610496573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ba919061113f565b600d805460ff60a01b1916600160a01b60ff938416810291909117918290556104e99286928692900416610989565b6104f2836109c9565b600c805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b03871602179055801561053357600c805461ff00191690555b5050505050565b60006105478484846109ef565b6001600160a01b03841660009081526001602090815260408083203380855292529091205461058291869161057d908690611755565b6108cf565b5060015b9392505050565b60045460ff1681565b60006105a0610ae1565b905090565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161037591859061057d9086906115e7565b600d546001600160a01b031633146106065760405162461bcd60e51b81526004016103c89061132b565b6106108282610b15565b5050565b600c546201000090046001600160a01b031681565b6001600160a01b0381166000908152602081905260409020545b919050565b600d54600090600160a01b900460ff16601281106106885761066b60128261176c565b61067690600a611665565b6106809084611736565b915050610643565b61069381601261176c565b61069e90600a611665565b61068090846115ff565b50919050565b6001600160a01b03166000908152600b602052604090205490565b600d546001600160a01b031690565b600d54600090600160a01b900460ff16601281106106fb5761069360128261176c565b61066b81601261176c565b600580546102e79061178f565b600d546001600160a01b0316331461073d5760405162461bcd60e51b81526004016103c89061132b565b6106108282610bcb565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161037591859061057d908690611755565b60006103753384846109ef565b834211156107ab5760405162461bcd60e51b81526004016103c890611362565b6001600160a01b0387166000908152600b602090815260408083205490516107fe927f0000000000000000000000000000000000000000000000000000000000000000928c928c928c92918c910161119e565b604051602081830303815290604052805190602001209050600061082182610c7d565b9050600061083182878787610cb6565b9050896001600160a01b0316816001600160a01b0316146108645760405162461bcd60e51b81526004016103c8906114a1565b6001600160a01b038a166000908152600b60205260408120805491610888836117c4565b91905055506108988a8a8a6108cf565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166108f55760405162461bcd60e51b81526004016103c89061155e565b6001600160a01b03821661091b5760405162461bcd60e51b81526004016103c8906112e9565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610976908590611195565b60405180910390a3505050565b303b1590565b825161099c906003906020860190610e52565b5081516109b0906005906020850190610e52565b506004805460ff191660ff929092169190911790555050565b6109ec81604051806040016040528060018152602001603160f81b815250610dac565b50565b6001600160a01b038316610a155760405162461bcd60e51b81526004016103c890611519565b6001600160a01b038216610a3b5760405162461bcd60e51b81526004016103c8906112a6565b6001600160a01b038316600090815260208190526040902054610a5f908290611755565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610a8f9082906115e7565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610976908590611195565b6000600754610aee610e0d565b1415610afd5750600654610382565b610b0e600a54600854600954610e11565b9050610382565b6001600160a01b038216610b3b5760405162461bcd60e51b81526004016103c8906115a2565b80600254610b4991906115e7565b6002556001600160a01b038216600090815260208190526040902054610b709082906115e7565b6001600160a01b0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610bbf908590611195565b60405180910390a35050565b6001600160a01b038216610bf15760405162461bcd60e51b81526004016103c8906114d8565b6001600160a01b038216600090815260208190526040902054610c15908290611755565b6001600160a01b038316600090815260208190526040902055600254610c3c908290611755565b6002556040516000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610bbf908590611195565b6000610c87610ae1565b82604051602001610c9992919061115b565b604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610cf85760405162461bcd60e51b81526004016103c890611399565b8360ff16601b1480610d0d57508360ff16601c145b610d295760405162461bcd60e51b81526004016103c89061145f565b600060018686868660405160008152602001604052604051610d4e94939291906111fe565b6020604051602081039080840390855afa158015610d70573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610da35760405162461bcd60e51b81526004016103c89061126f565b95945050505050565b8151602080840191909120825191830191909120600882905560098190557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610df3610e0d565b600755610e01818484610e11565b600655600a5550505050565b4690565b6000838383610e1e610e0d565b30604051602001610e339594939291906111d2565b6040516020818303038152906040528051906020012090509392505050565b828054610e5e9061178f565b90600052602060002090601f016020900481019282610e805760008555610ec6565b82601f10610e9957805160ff1916838001178555610ec6565b82800160010185558215610ec6579182015b82811115610ec6578251825591602001919060010190610eab565b50610ed2929150610ed6565b5090565b5b80821115610ed25760008155600101610ed7565b600082601f830112610efb578081fd5b813567ffffffffffffffff80821115610f1657610f166117f5565b604051601f8301601f19908116603f01168101908282118183101715610f3e57610f3e6117f5565b81604052838152866020858801011115610f56578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610f83578081fd5b81356105868161180b565b60008060408385031215610fa0578081fd5b8235610fab8161180b565b91506020830135610fbb8161180b565b809150509250929050565b600080600060608486031215610fda578081fd5b8335610fe58161180b565b92506020840135610ff58161180b565b929592945050506040919091013590565b600080600080600080600060e0888a031215611020578283fd5b873561102b8161180b565b9650602088013561103b8161180b565b95506040880135945060608801359350608088013561105981611820565b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611088578182fd5b82356110938161180b565b946020939093013593505050565b600080600080608085870312156110b6578384fd5b84356110c18161180b565b935060208501356110d18161180b565b9250604085013567ffffffffffffffff808211156110ed578384fd5b6110f988838901610eeb565b9350606087013591508082111561110e578283fd5b5061111b87828801610eeb565b91505092959194509250565b600060208284031215611138578081fd5b5035919050565b600060208284031215611150578081fd5b815161058681611820565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b818110156112485785810183015185820160400152820161122c565b818111156112595783604083870101525b50601f01601f1916929092016040019392505050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526011908201527f4f4e4c595f4c454e44494e475f50414952000000000000000000000000000000604082015260600190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b600082198211156115fa576115fa6117df565b500190565b60008261161a57634e487b7160e01b81526012600452602481fd5b500490565b80825b6001808611611631575061165c565b818704821115611643576116436117df565b8086161561165057918102915b9490941c938002611622565b94509492505050565b600061058660001960ff85168460008261168157506001610586565b8161168e57506000610586565b81600181146116a457600281146116ae576116db565b6001915050610586565b60ff8411156116bf576116bf6117df565b6001841b9150848211156116d5576116d56117df565b50610586565b5060208310610133831016604e8410600b841016171561170e575081810a83811115611709576117096117df565b610586565b61171b848484600161161f565b80860482111561172d5761172d6117df565b02949350505050565b6000816000190483118215151615611750576117506117df565b500290565b600082821015611767576117676117df565b500390565b600060ff821660ff841680821015611786576117866117df565b90039392505050565b6002810460018216806117a357607f821691505b602082108114156106a857634e487b7160e01b600052602260045260246000fd5b60006000198214156117d8576117d86117df565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146109ec57600080fd5b60ff811681146109ec57600080fdfea264697066735822122041ed500ef6b4995b226091d508940b944e669329f2b46d26fd245298d9b5e23b64736f6c63430008010033";
