/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { BorrowWrapperToken } from "../BorrowWrapperToken";

export class BorrowWrapperToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BorrowWrapperToken> {
    return super.deploy(overrides || {}) as Promise<BorrowWrapperToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BorrowWrapperToken {
    return super.attach(address) as BorrowWrapperToken;
  }
  connect(signer: Signer): BorrowWrapperToken__factory {
    return super.connect(signer) as BorrowWrapperToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BorrowWrapperToken {
    return new Contract(address, _abi, signerOrProvider) as BorrowWrapperToken;
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
      {
        internalType: "contract IRewardDistributorManager",
        name: "_manager",
        type: "address",
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
    name: "rewardManager",
    outputs: [
      {
        internalType: "contract IRewardDistributorManager",
        name: "",
        type: "address",
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
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561003457600080fd5b50608051611773610050600039600061077901526117736000f3fe608060405234801561001057600080fd5b50600436106101475760003560e01c80636f307dc3116100c85780639dc29fac1161008c578063d505accf11610066578063d505accf14610296578063dd62ed3e146102a9578063ffa1ad74146102bc57610147565b80639dc29fac1461025d578063a457c2d714610270578063a9059cbb1461028357610147565b80636f307dc31461021f57806370a08231146102275780637ecebe001461023a5780638da5cb5b1461024d57806395d89b411461025557610147565b8063313ce5671161010f578063313ce567146101c7578063362925c2146101dc5780633644e515146101f157806339509351146101f957806340c10f191461020c57610147565b806306fdde031461014c578063095ea7b31461016a5780630f4ef8a61461018a57806318160ddd1461019f57806323b872dd146101b4575b600080fd5b6101546102c4565b6040516101619190611266565b60405180910390f35b61017d610178366004611144565b610352565b60405161016191906111d4565b610192610368565b60405161016191906111a6565b6101a761037d565b60405161016191906111df565b61017d6101c2366004611094565b610384565b6101cf6103d6565b604051610161919061165a565b6101ef6101ea366004610ff9565b6103df565b005b6101a76105c8565b61017d610207366004611144565b6105d7565b6101ef61021a366004611144565b61060e565b610192610651565b6101a7610235366004610f9e565b610660565b6101a7610248366004610f9e565b61067b565b610192610696565b6101546106a5565b6101ef61026b366004611144565b6106b2565b61017d61027e366004611144565b6106f1565b61017d610291366004611144565b610728565b6101ef6102a43660046110d4565b610735565b6101a76102b7366004610fc1565b61084e565b6101a7610879565b600380546102d190611697565b80601f01602080910402602001604051908101604052809291908181526020018280546102fd90611697565b801561034a5780601f1061031f5761010080835404028352916020019161034a565b820191906000526020600020905b81548152906001019060200180831161032d57829003601f168201915b505050505081565b600061035f33848461087e565b50600192915050565b600c546201000090046001600160a01b031681565b6002545b90565b6000610391848484610932565b6001600160a01b0384166000908152600160209081526040808320338085529252909120546103cc9186916103c7908690611680565b61087e565b5060019392505050565b60045460ff1681565b600c54610100900460ff16806103f857506103f861094c565b806104065750600c5460ff16155b61042b5760405162461bcd60e51b815260040161042290611483565b60405180910390fd5b600c54610100900460ff1615801561045657600c805460ff1961ff0019909116610100171660011790555b6001600160a01b03861661047c5760405162461bcd60e51b81526004016104229061145c565b6001600160a01b0385166104a25760405162461bcd60e51b8152600401610422906113e3565b85600e60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000856001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561050457600080fd5b505afa158015610518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053c919061116f565b9050610549858583610952565b61055285610992565b50600d805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0387811691909117909155600c805475ffffffffffffffffffffffffffffffffffffffff00001916620100009285169290920291909117905580156105c057600c805461ff00191690555b505050505050565b60006105d26109b8565b905090565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161035f9185906103c7908690611668565b600e546001600160a01b031633146106385760405162461bcd60e51b815260040161042290611375565b6106436000836109ec565b61064d8282610a51565b5050565b600d546001600160a01b031681565b6001600160a01b031660009081526020819052604090205490565b6001600160a01b03166000908152600b602052604090205490565b600e546001600160a01b031690565b600580546102d190611697565b600e546001600160a01b031633146106dc5760405162461bcd60e51b815260040161042290611375565b6106e78260006109ec565b61064d8282610b05565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161035f9185906103c7908690611680565b600061035f338484610932565b834211156107555760405162461bcd60e51b8152600401610422906113ac565b6001600160a01b0387166000908152600b602090815260408083205490516107a8927f0000000000000000000000000000000000000000000000000000000000000000928c928c928c92918c91016111e8565b60405160208183030381529060405280519060200120905060006107cb82610bb7565b905060006107db82878787610bf0565b9050896001600160a01b0316816001600160a01b03161461080e5760405162461bcd60e51b815260040161042290611522565b6001600160a01b038a166000908152600b60205260408120805491610832836116d2565b91905055506108428a8a8a61087e565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600181565b6001600160a01b0383166108a45760405162461bcd60e51b8152600401610422906115df565b6001600160a01b0382166108ca5760405162461bcd60e51b815260040161042290611333565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109259085906111df565b60405180910390a3505050565b61093c83836109ec565b610947838383610ce6565b505050565b303b1590565b8251610965906003906020860190610e7e565b508151610979906005906020850190610e7e565b506004805460ff191660ff929092169190911790555050565b6109b581604051806040016040528060018152602001603160f81b815250610dd8565b50565b60006007546109c5610e39565b14156109d45750600654610381565b6109e5600a54600854600954610e3d565b9050610381565b600c54604051633b4198ef60e21b8152620100009091046001600160a01b03169063ed0663bc90610a2390859085906004016111ba565b600060405180830381600087803b158015610a3d57600080fd5b505af11580156105c0573d6000803e3d6000fd5b6001600160a01b038216610a775760405162461bcd60e51b815260040161042290611623565b8060026000828254610a899190611668565b90915550506001600160a01b03821660009081526020819052604081208054839290610ab6908490611668565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610af99085906111df565b60405180910390a35050565b6001600160a01b038216610b2b5760405162461bcd60e51b815260040161042290611559565b6001600160a01b038216600090815260208190526040902054610b4f908290611680565b6001600160a01b038316600090815260208190526040902055600254610b76908290611680565b6002556040516000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610af99085906111df565b6000610bc16109b8565b82604051602001610bd392919061118b565b604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610c325760405162461bcd60e51b81526004016104229061141a565b8360ff16601b1480610c4757508360ff16601c145b610c635760405162461bcd60e51b8152600401610422906114e0565b600060018686868660405160008152602001604052604051610c889493929190611248565b6020604051602081039080840390855afa158015610caa573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610cdd5760405162461bcd60e51b8152600401610422906112b9565b95945050505050565b6001600160a01b038316610d0c5760405162461bcd60e51b81526004016104229061159a565b6001600160a01b038216610d325760405162461bcd60e51b8152600401610422906112f0565b6001600160a01b038316600090815260208190526040902054610d56908290611680565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610d86908290611668565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906109259085906111df565b8151602080840191909120825191830191909120600882905560098190557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610e1f610e39565b600755610e2d818484610e3d565b600655600a5550505050565b4690565b6000838383610e4a610e39565b30604051602001610e5f95949392919061121c565b6040516020818303038152906040528051906020012090509392505050565b828054610e8a90611697565b90600052602060002090601f016020900481019282610eac5760008555610ef2565b82601f10610ec557805160ff1916838001178555610ef2565b82800160010185558215610ef2579182015b82811115610ef2578251825591602001919060010190610ed7565b50610efe929150610f02565b5090565b5b80821115610efe5760008155600101610f03565b600082601f830112610f27578081fd5b813567ffffffffffffffff80821115610f4257610f42611703565b604051601f8301601f19908116603f01168101908282118183101715610f6a57610f6a611703565b81604052838152866020858801011115610f82578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610faf578081fd5b8135610fba81611719565b9392505050565b60008060408385031215610fd3578081fd5b8235610fde81611719565b91506020830135610fee81611719565b809150509250929050565b600080600080600060a08688031215611010578081fd5b853561101b81611719565b9450602086013561102b81611719565b9350604086013567ffffffffffffffff80821115611047578283fd5b61105389838a01610f17565b94506060880135915080821115611068578283fd5b5061107588828901610f17565b925050608086013561108681611719565b809150509295509295909350565b6000806000606084860312156110a8578283fd5b83356110b381611719565b925060208401356110c381611719565b929592945050506040919091013590565b600080600080600080600060e0888a0312156110ee578182fd5b87356110f981611719565b9650602088013561110981611719565b9550604088013594506060880135935060808801356111278161172e565b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611156578182fd5b823561116181611719565b946020939093013593505050565b600060208284031215611180578081fd5b8151610fba8161172e565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b8181101561129257858101830151858201604001528201611276565b818111156112a35783604083870101525b50601f01601f1916929092016040019392505050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526011908201527f4f4e4c595f4c454e44494e475f50414952000000000000000000000000000000604082015260600190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b60208082526012908201527f696e76616c696420756e6465726c79696e670000000000000000000000000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b6000821982111561167b5761167b6116ed565b500190565b600082821015611692576116926116ed565b500390565b6002810460018216806116ab57607f821691505b602082108114156116cc57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156116e6576116e66116ed565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146109b557600080fd5b60ff811681146109b557600080fdfea2646970667358221220024255ef421236fc0851977d6a764f20555ef4eaaa82b60f779fca35381304f564736f6c63430008010033";
