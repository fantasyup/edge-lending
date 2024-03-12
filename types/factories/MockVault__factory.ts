/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockVault } from "../MockVault";

export class MockVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockVault> {
    return super.deploy(overrides || {}) as Promise<MockVault>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockVault {
    return super.attach(address) as MockVault;
  }
  connect(signer: Signer): MockVault__factory {
    return super.connect(signer) as MockVault__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockVault {
    return new Contract(address, _abi, signerOrProvider) as MockVault;
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
        internalType: "contract MockToken",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addProfit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
  "0x608060405234801561001057600080fd5b506000805462ff000019169055611dd48061002c6000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806352d1902d116100e3578063d728e0051161008c578063da5139ca11610066578063da5139ca14610311578063f18d03cc14610324578063f7888aec1461033757610198565b8063d728e005146102d8578063d9d98ce4146102eb578063da35a26f146102fe57610198565b80635cffe9de116100bd5780635cffe9de146102aa578063613255ab146102bd5780638456cb59146102d057610198565b806352d1902d146102855780635b6435611461028d5780635c975abb1461029557610198565b80633f4ba83a116101455780634ffe34db1161011f5780634ffe34db1461024a57806350d75d251461025d5780635299493b1461027257610198565b80633f4ba83a1461021c5780634098da3514610224578063469519541461023757610198565b80631583d56c116101765780631583d56c146101ee5780631e43a7a1146102015780631fd1ffde1461020957610198565b80630284c3f51461019d5780630b620b81146101c65780630ff9b2ce146101d9575b600080fd5b6101b06101ab36600461165a565b61034a565b6040516101bd9190611891565b60405180910390f35b6101b06101d436600461165a565b6104fb565b6101ec6101e7366004611568565b610699565b005b6101ec6101fc3660046115e9565b61074c565b6101b06107b0565b6101ec610217366004611785565b6107b6565b6101ec610815565b6101ec6102323660046115bc565b610849565b6101ec610245366004611568565b6108de565b6101b0610258366004611568565b610914565b610265610926565b6040516101bd91906117dd565b6101b06102803660046115e9565b610935565b6101b06109e0565b610265610a04565b61029d610a13565b6040516101bd9190611886565b61029d6102b83660046116eb565b610a22565b6101b06102cb366004611568565b610cf8565b6101ec610d13565b61029d6102e6366004611584565b610d45565b6101b06102f93660046115e9565b610d65565b6101ec61030c36600461179d565b610d7e565b6101b061031f3660046116aa565b610e48565b6101ec61033236600461165a565b610f44565b6101b0610345366004611648565b610fd8565b6000610354610a13565b1561037a5760405162461bcd60e51b815260040161037190611aee565b60405180910390fd5b83336001600160a01b03821614806103ba57506001600160a01b038116600090815260056020908152604080832033845290915290205460ff1615156001145b6103d65760405162461bcd60e51b815260040161037190611b25565b6001600160a01b0384166103fc5760405162461bcd60e51b8152600401610371906119cc565b61040886846000610e48565b915061041f6001600160a01b038716863086610ff5565b6001600160a01b03808716600090815260036020908152604080832093881683529290522054610450908390611ccb565b6001600160a01b038088166000818152600360209081526040808320948a168352938152838220949094559081526004909252902054610491908390611ccb565b6001600160a01b03808816600081815260046020526040908190209390935591518682169291881691907f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d59906104ea9088908890611cbd565b60405180910390a450949350505050565b6000610505610a13565b156105225760405162461bcd60e51b815260040161037190611aee565b83336001600160a01b038216148061056257506001600160a01b038116600090815260056020908152604080832033845290915290205460ff1615156001145b61057e5760405162461bcd60e51b815260040161037190611b25565b6001600160a01b0384166105a45760405162461bcd60e51b8152600401610371906119cc565b6105ae8684610935565b6001600160a01b038088166000908152600360209081526040808320938a16835292905220549092506105e2908490611d22565b6001600160a01b038088166000818152600360209081526040808320948b168352938152838220949094559081526004909252902054610623908490611d22565b6001600160a01b03871660008181526004602052604090209190915561064a908584611080565b836001600160a01b0316856001600160a01b0316876001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db86866040516104ea929190611cbd565b6002546001600160a01b031633146106c35760405162461bcd60e51b815260040161037190611a03565b6001600160a01b0381166106e95760405162461bcd60e51b815260040161037190611ba8565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383161790556040517fdd51fcfc616de6986ba5d6aebb0ac078ebeadcf86bfd394691ffd06d4fdec478906107419083906117dd565b60405180910390a150565b6040516340c10f1960e01b81526001600160a01b038316906340c10f199061077a903090859060040161186d565b600060405180830381600087803b15801561079457600080fd5b505af11580156107a8573d6000803e3d6000fd5b505050505050565b60015481565b6002546001600160a01b031633146107e05760405162461bcd60e51b815260040161037190611a03565b60018190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be8190610741908390611891565b6002546001600160a01b0316331461083f5760405162461bcd60e51b815260040161037190611a03565b61084761109f565b565b6001600160a01b03821661086f5760405162461bcd60e51b815260040161037190611995565b3360008181526005602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c5906108d2908590611886565b60405180910390a35050565b6002546001600160a01b031633146109085760405162461bcd60e51b815260040161037190611a03565b6109118161110f565b50565b60046020526000908152604090205481565b6000610930611217565b905090565b6001600160a01b03821660008181526004602081905260408083205490516370a0823160e01b81529293909290916370a0823191610975913091016117dd565b60206040518083038186803b15801561098d57600080fd5b505afa1580156109a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c59190611630565b6109cf9084611d03565b6109d99190611ce3565b9392505050565b7f1774786f6b0badbc03e7ed32b3437e72a205175f1503e8d1772f98c98fd0cb3690565b6002546001600160a01b031681565b60005462010000900460ff1690565b6001600160a01b038416600090815260046020526040812054841115610a5a5760405162461bcd60e51b815260040161037190611a80565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610a8b9030906004016117dd565b60206040518083038186803b158015610aa357600080fd5b505afa158015610ab7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adb9190611630565b9050610af16001600160a01b0383168988611080565b6000610afd8888610d65565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610b5696959493929190611815565b602060405180830381600087803b158015610b7057600080fd5b505af1158015610b84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba89190611630565b14610bc55760405162461bcd60e51b81526004016103719061195e565b610be68930610bd4848b611ccb565b6001600160a01b038716929190610ff5565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610c1591906117dd565b60206040518083038186803b158015610c2d57600080fd5b505afa158015610c41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c659190611630565b610c6f9190611d22565b905081811015610c915760405162461bcd60e51b815260040161037190611ab7565b896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b86604051610ce0929190611cbd565b60405180910390a45060019998505050505050505050565b6001600160a01b031660009081526004602052604090205490565b6002546001600160a01b03163314610d3d5760405162461bcd60e51b815260040161037190611a03565b61084761123c565b600560209081526000928352604080842090915290825290205460ff1681565b6000670de0b6b3a7640000600154836109cf9190611d03565b600054610100900460ff1680610d97575060005460ff16155b610db35760405162461bcd60e51b815260040161037190611b4b565b600054610100900460ff16158015610dde576000805460ff1961ff0019909116610100171660011790555b6001600160a01b038216610e045760405162461bcd60e51b815260040161037190611c16565b60018390556002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384161790558015610e43576000805461ff00191690555b505050565b6001600160a01b0383166000908152600460205260408120548015610f38576040516370a0823160e01b81526000906001600160a01b038716906370a0823190610e969030906004016117dd565b60206040518083038186803b158015610eae57600080fd5b505afa158015610ec2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee69190611630565b905080610ef38387611d03565b610efd9190611ce3565b9250838015610f1f57508482610f138386611d03565b610f1d9190611ce3565b105b15610f3257610f2f836001611ccb565b92505b50610f3c565b8391505b509392505050565b610f4c610a13565b15610f695760405162461bcd60e51b815260040161037190611aee565b82336001600160a01b0382161480610fa957506001600160a01b038116600090815260056020908152604080832033845290915290205460ff1615156001145b610fc55760405162461bcd60e51b815260040161037190611b25565b610fd18585858561129b565b5050505050565b600360209081526000928352604080842090915290825290205481565b61107a846323b872dd60e01b858585604051602401611016939291906117f1565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261139b565b50505050565b610e438363a9059cbb60e01b848460405160240161101692919061186d565b6110a7610a13565b6110c35760405162461bcd60e51b815260040161037190611927565b6000805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6110f861142a565b60405161110591906117dd565b60405180910390a1565b6000611119611217565b6001600160a01b031614156111405760405162461bcd60e51b815260040161037190611bdf565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561117957600080fd5b505afa15801561118d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b19190611630565b6111b96109e0565b146111d65760405162461bcd60e51b8152600401610371906118e4565b6111df8161142e565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc6112086109e0565b8260405161074192919061189a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b611244610a13565b156112615760405162461bcd60e51b815260040161037190611aee565b6000805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110f861142a565b6001600160a01b0382166112c15760405162461bcd60e51b8152600401610371906119cc565b6001600160a01b038085166000908152600360209081526040808320938716835292905220546112f2908290611d22565b6001600160a01b0385811660009081526003602090815260408083208885168452909152808220939093559084168152205461132f908290611ccb565b6001600160a01b0380861660008181526003602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f9061138d908690611891565b60405180910390a450505050565b60006113f0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114529092919063ffffffff16565b805190915015610e43578080602001905181019061140e9190611614565b610e435760405162461bcd60e51b815260040161037190611c73565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b60606114618484600085611469565b949350505050565b60608247101561148b5760405162461bcd60e51b815260040161037190611a3a565b61149485611529565b6114b05760405162461bcd60e51b815260040161037190611c3c565b600080866001600160a01b031685876040516114cc91906117c1565b60006040518083038185875af1925050503d8060008114611509576040519150601f19603f3d011682016040523d82523d6000602084013e61150e565b606091505b509150915061151e82828661152f565b979650505050505050565b3b151590565b6060831561153e5750816109d9565b82511561154e5782518084602001fd5b8160405162461bcd60e51b815260040161037191906118b1565b600060208284031215611579578081fd5b81356109d981611d7b565b60008060408385031215611596578081fd5b82356115a181611d7b565b915060208301356115b181611d7b565b809150509250929050565b600080604083850312156115ce578182fd5b82356115d981611d7b565b915060208301356115b181611d90565b600080604083850312156115fb578182fd5b823561160681611d7b565b946020939093013593505050565b600060208284031215611625578081fd5b81516109d981611d90565b600060208284031215611641578081fd5b5051919050565b60008060408385031215611596578182fd5b6000806000806080858703121561166f578182fd5b843561167a81611d7b565b9350602085013561168a81611d7b565b9250604085013561169a81611d7b565b9396929550929360600135925050565b6000806000606084860312156116be578283fd5b83356116c981611d7b565b92506020840135915060408401356116e081611d90565b809150509250925092565b600080600080600060808688031215611702578081fd5b853561170d81611d7b565b9450602086013561171d81611d7b565b935060408601359250606086013567ffffffffffffffff80821115611740578283fd5b818801915088601f830112611753578283fd5b813581811115611761578384fd5b896020828501011115611772578384fd5b9699959850939650602001949392505050565b600060208284031215611796578081fd5b5035919050565b600080604083850312156117af578182fd5b8235915060208301356115b181611d7b565b600082516117d3818460208701611d39565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b60006020825282518060208401526118d0816040850160208701611d39565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b60208082526017908201527f5661756c743a2043616e6e6f7420617070726f76652030000000000000000000604082015260600190565b60208082526019908201527f5641554c543a20494e56414c49445f544f5f4144445245535300000000000000604082015260600190565b60208082526015908201527f4f4e4c595f424c41434b5f534d4954485f5445414d0000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526010908201527f494e56414c49445f4e45575f5445414d00000000000000000000000000000000604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252600c908201526b494e56414c49445f5445414d60a01b604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b918252602082015260400190565b60008219821115611cde57611cde611d65565b500190565b600082611cfe57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611d1d57611d1d611d65565b500290565b600082821015611d3457611d34611d65565b500390565b60005b83811015611d54578181015183820152602001611d3c565b8381111561107a5750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461091157600080fd5b801515811461091157600080fdfea2646970667358221220a6d11728433099bce2d4ded6b3d1f8776849530b746301bfa3ee3914ff039c2e64736f6c63430008010033";
