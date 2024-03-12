/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { VaultStorageLayoutTester } from "../VaultStorageLayoutTester";

export class VaultStorageLayoutTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VaultStorageLayoutTester> {
    return super.deploy(overrides || {}) as Promise<VaultStorageLayoutTester>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VaultStorageLayoutTester {
    return super.attach(address) as VaultStorageLayoutTester;
  }
  connect(signer: Signer): VaultStorageLayoutTester__factory {
    return super.connect(signer) as VaultStorageLayoutTester__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VaultStorageLayoutTester {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VaultStorageLayoutTester;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "allowed",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "uuid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    name: "CodeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
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
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "FlashLoan",
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
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newTeam",
        type: "address",
      },
    ],
    name: "TransferControl",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "UpdateFlashLoanRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
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
        name: "shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "approveContract",
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
      {
        internalType: "address",
        name: "",
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
    name: "blackSmithTeam",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
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
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
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
        internalType: "contract IERC3156FlashBorrower",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
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
    name: "flashLoanRate",
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
    name: "getCodeAddress",
    outputs: [
      {
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_flashLoanRate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_blackSmithTeam",
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
        name: "_token",
        type: "address",
      },
    ],
    name: "maxFlashLoan",
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
    name: "pause",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_roundUp",
        type: "bool",
      },
    ],
    name: "toShare",
    outputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
    ],
    name: "toUnderlying",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "totals",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newTeam",
        type: "address",
      },
    ],
    name: "transferToNewTeam",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newRate",
        type: "uint256",
      },
    ],
    name: "updateFlashloanRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userApprovedContracts",
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
    inputs: [],
    name: "validateStorageLayout",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506000805462ff000019169055611d658061002c6000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c80635b643561116100e3578063d9d98ce41161008c578063f18d03cc11610066578063f18d03cc14610311578063f7888aec14610324578063f99a38c41461033757610198565b8063d9d98ce4146102d8578063da35a26f146102eb578063da5139ca146102fe57610198565b8063613255ab116100bd578063613255ab146102aa5780638456cb59146102bd578063d728e005146102c557610198565b80635b6435611461027a5780635c975abb146102825780635cffe9de1461029757610198565b80634098da351161014557806350d75d251161011f57806350d75d251461024a5780635299493b1461025f57806352d1902d1461027257610198565b80634098da351461021157806346951954146102245780634ffe34db1461023757610198565b80631e43a7a1116101765780631e43a7a1146101ee5780631fd1ffde146101f65780633f4ba83a1461020957610198565b80630284c3f51461019d5780630b620b81146101c65780630ff9b2ce146101d9575b600080fd5b6101b06101ab3660046115eb565b61033f565b6040516101bd9190611822565b60405180910390f35b6101b06101d43660046115eb565b6104f0565b6101ec6101e73660046114f9565b61068e565b005b6101b0610741565b6101ec610204366004611716565b610747565b6101ec6107a6565b6101ec61021f36600461154d565b6107da565b6101ec6102323660046114f9565b61086f565b6101b06102453660046114f9565b6108a5565b6102526108b7565b6040516101bd919061176e565b6101b061026d36600461157a565b6108c6565b6101b0610971565b610252610995565b61028a6109a4565b6040516101bd9190611817565b61028a6102a536600461167c565b6109b3565b6101b06102b83660046114f9565b610c89565b6101ec610ca4565b61028a6102d3366004611515565b610cd6565b6101b06102e636600461157a565b610cf6565b6101ec6102f936600461172e565b610d0f565b6101b061030c36600461163b565b610dd9565b6101ec61031f3660046115eb565b610ed5565b6101b06103323660046115d9565b610f69565b6101ec6107d8565b60006103496109a4565b1561036f5760405162461bcd60e51b815260040161036690611a7f565b60405180910390fd5b83336001600160a01b03821614806103af57506001600160a01b038116600090815260056020908152604080832033845290915290205460ff1615156001145b6103cb5760405162461bcd60e51b815260040161036690611ab6565b6001600160a01b0384166103f15760405162461bcd60e51b81526004016103669061195d565b6103fd86846000610dd9565b91506104146001600160a01b038716863086610f86565b6001600160a01b03808716600090815260036020908152604080832093881683529290522054610445908390611c5c565b6001600160a01b038088166000818152600360209081526040808320948a168352938152838220949094559081526004909252902054610486908390611c5c565b6001600160a01b03808816600081815260046020526040908190209390935591518682169291881691907f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d59906104df9088908890611c4e565b60405180910390a450949350505050565b60006104fa6109a4565b156105175760405162461bcd60e51b815260040161036690611a7f565b83336001600160a01b038216148061055757506001600160a01b038116600090815260056020908152604080832033845290915290205460ff1615156001145b6105735760405162461bcd60e51b815260040161036690611ab6565b6001600160a01b0384166105995760405162461bcd60e51b81526004016103669061195d565b6105a386846108c6565b6001600160a01b038088166000908152600360209081526040808320938a16835292905220549092506105d7908490611cb3565b6001600160a01b038088166000818152600360209081526040808320948b168352938152838220949094559081526004909252902054610618908490611cb3565b6001600160a01b03871660008181526004602052604090209190915561063f908584611011565b836001600160a01b0316856001600160a01b0316876001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db86866040516104df929190611c4e565b6002546001600160a01b031633146106b85760405162461bcd60e51b815260040161036690611994565b6001600160a01b0381166106de5760405162461bcd60e51b815260040161036690611b39565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383161790556040517fdd51fcfc616de6986ba5d6aebb0ac078ebeadcf86bfd394691ffd06d4fdec4789061073690839061176e565b60405180910390a150565b60015481565b6002546001600160a01b031633146107715760405162461bcd60e51b815260040161036690611994565b60018190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be8190610736908390611822565b6002546001600160a01b031633146107d05760405162461bcd60e51b815260040161036690611994565b6107d8611030565b565b6001600160a01b0382166108005760405162461bcd60e51b815260040161036690611926565b3360008181526005602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c590610863908590611817565b60405180910390a35050565b6002546001600160a01b031633146108995760405162461bcd60e51b815260040161036690611994565b6108a2816110a0565b50565b60046020526000908152604090205481565b60006108c16111a8565b905090565b6001600160a01b03821660008181526004602081905260408083205490516370a0823160e01b81529293909290916370a08231916109069130910161176e565b60206040518083038186803b15801561091e57600080fd5b505afa158015610932573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095691906115c1565b6109609084611c94565b61096a9190611c74565b9392505050565b7f1774786f6b0badbc03e7ed32b3437e72a205175f1503e8d1772f98c98fd0cb3690565b6002546001600160a01b031681565b60005462010000900460ff1690565b6001600160a01b0384166000908152600460205260408120548411156109eb5760405162461bcd60e51b815260040161036690611a11565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610a1c90309060040161176e565b60206040518083038186803b158015610a3457600080fd5b505afa158015610a48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6c91906115c1565b9050610a826001600160a01b0383168988611011565b6000610a8e8888610cf6565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610ae7969594939291906117a6565b602060405180830381600087803b158015610b0157600080fd5b505af1158015610b15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3991906115c1565b14610b565760405162461bcd60e51b8152600401610366906118ef565b610b778930610b65848b611c5c565b6001600160a01b038716929190610f86565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610ba6919061176e565b60206040518083038186803b158015610bbe57600080fd5b505afa158015610bd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf691906115c1565b610c009190611cb3565b905081811015610c225760405162461bcd60e51b815260040161036690611a48565b896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b86604051610c71929190611c4e565b60405180910390a45060019998505050505050505050565b6001600160a01b031660009081526004602052604090205490565b6002546001600160a01b03163314610cce5760405162461bcd60e51b815260040161036690611994565b6107d86111cd565b600560209081526000928352604080842090915290825290205460ff1681565b6000670de0b6b3a7640000600154836109609190611c94565b600054610100900460ff1680610d28575060005460ff16155b610d445760405162461bcd60e51b815260040161036690611adc565b600054610100900460ff16158015610d6f576000805460ff1961ff0019909116610100171660011790555b6001600160a01b038216610d955760405162461bcd60e51b815260040161036690611ba7565b60018390556002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384161790558015610dd4576000805461ff00191690555b505050565b6001600160a01b0383166000908152600460205260408120548015610ec9576040516370a0823160e01b81526000906001600160a01b038716906370a0823190610e2790309060040161176e565b60206040518083038186803b158015610e3f57600080fd5b505afa158015610e53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7791906115c1565b905080610e848387611c94565b610e8e9190611c74565b9250838015610eb057508482610ea48386611c94565b610eae9190611c74565b105b15610ec357610ec0836001611c5c565b92505b50610ecd565b8391505b509392505050565b610edd6109a4565b15610efa5760405162461bcd60e51b815260040161036690611a7f565b82336001600160a01b0382161480610f3a57506001600160a01b038116600090815260056020908152604080832033845290915290205460ff1615156001145b610f565760405162461bcd60e51b815260040161036690611ab6565b610f628585858561122c565b5050505050565b600360209081526000928352604080842090915290825290205481565b61100b846323b872dd60e01b858585604051602401610fa793929190611782565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261132c565b50505050565b610dd48363a9059cbb60e01b8484604051602401610fa79291906117fe565b6110386109a4565b6110545760405162461bcd60e51b8152600401610366906118b8565b6000805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6110896113bb565b604051611096919061176e565b60405180910390a1565b60006110aa6111a8565b6001600160a01b031614156110d15760405162461bcd60e51b815260040161036690611b70565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561110a57600080fd5b505afa15801561111e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114291906115c1565b61114a610971565b146111675760405162461bcd60e51b815260040161036690611875565b611170816113bf565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc611199610971565b8260405161073692919061182b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6111d56109a4565b156111f25760405162461bcd60e51b815260040161036690611a7f565b6000805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110896113bb565b6001600160a01b0382166112525760405162461bcd60e51b81526004016103669061195d565b6001600160a01b03808516600090815260036020908152604080832093871683529290522054611283908290611cb3565b6001600160a01b038581166000908152600360209081526040808320888516845290915280822093909355908416815220546112c0908290611c5c565b6001600160a01b0380861660008181526003602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f9061131e908690611822565b60405180910390a450505050565b6000611381826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113e39092919063ffffffff16565b805190915015610dd4578080602001905181019061139f91906115a5565b610dd45760405162461bcd60e51b815260040161036690611c04565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b60606113f284846000856113fa565b949350505050565b60608247101561141c5760405162461bcd60e51b8152600401610366906119cb565b611425856114ba565b6114415760405162461bcd60e51b815260040161036690611bcd565b600080866001600160a01b0316858760405161145d9190611752565b60006040518083038185875af1925050503d806000811461149a576040519150601f19603f3d011682016040523d82523d6000602084013e61149f565b606091505b50915091506114af8282866114c0565b979650505050505050565b3b151590565b606083156114cf57508161096a565b8251156114df5782518084602001fd5b8160405162461bcd60e51b81526004016103669190611842565b60006020828403121561150a578081fd5b813561096a81611d0c565b60008060408385031215611527578081fd5b823561153281611d0c565b9150602083013561154281611d0c565b809150509250929050565b6000806040838503121561155f578182fd5b823561156a81611d0c565b9150602083013561154281611d21565b6000806040838503121561158c578182fd5b823561159781611d0c565b946020939093013593505050565b6000602082840312156115b6578081fd5b815161096a81611d21565b6000602082840312156115d2578081fd5b5051919050565b60008060408385031215611527578182fd5b60008060008060808587031215611600578182fd5b843561160b81611d0c565b9350602085013561161b81611d0c565b9250604085013561162b81611d0c565b9396929550929360600135925050565b60008060006060848603121561164f578283fd5b833561165a81611d0c565b925060208401359150604084013561167181611d21565b809150509250925092565b600080600080600060808688031215611693578081fd5b853561169e81611d0c565b945060208601356116ae81611d0c565b935060408601359250606086013567ffffffffffffffff808211156116d1578283fd5b818801915088601f8301126116e4578283fd5b8135818111156116f2578384fd5b896020828501011115611703578384fd5b9699959850939650602001949392505050565b600060208284031215611727578081fd5b5035919050565b60008060408385031215611740578182fd5b82359150602083013561154281611d0c565b60008251611764818460208701611cca565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b6000602082528251806020840152611861816040850160208701611cca565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b60208082526017908201527f5661756c743a2043616e6e6f7420617070726f76652030000000000000000000604082015260600190565b60208082526019908201527f5641554c543a20494e56414c49445f544f5f4144445245535300000000000000604082015260600190565b60208082526015908201527f4f4e4c595f424c41434b5f534d4954485f5445414d0000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526010908201527f494e56414c49445f4e45575f5445414d00000000000000000000000000000000604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252600c908201526b494e56414c49445f5445414d60a01b604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b918252602082015260400190565b60008219821115611c6f57611c6f611cf6565b500190565b600082611c8f57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611cae57611cae611cf6565b500290565b600082821015611cc557611cc5611cf6565b500390565b60005b83811015611ce5578181015183820152602001611ccd565b8381111561100b5750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146108a257600080fd5b80151581146108a257600080fdfea2646970667358221220fdbbe3ea1f07f21b6c8475506b9b994109ff441d7ec289a1086e90d17addeb8f64736f6c63430008010033";
