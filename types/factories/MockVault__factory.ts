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
  "0x608060405234801561001057600080fd5b506000805462ff000019169055611e0e8061002c6000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806352d1902d116100e3578063d728e0051161008c578063da5139ca11610066578063da5139ca14610311578063f18d03cc14610324578063f7888aec1461033757610198565b8063d728e005146102d8578063d9d98ce4146102eb578063da35a26f146102fe57610198565b80635cffe9de116100bd5780635cffe9de146102aa578063613255ab146102bd5780638456cb59146102d057610198565b806352d1902d146102855780635b6435611461028d5780635c975abb1461029557610198565b80633f4ba83a116101455780634ffe34db1161011f5780634ffe34db1461024a57806350d75d251461025d5780635299493b1461027257610198565b80633f4ba83a1461021c5780634098da3514610224578063469519541461023757610198565b80631583d56c116101765780631583d56c146101ee5780631e43a7a1146102015780631fd1ffde1461020957610198565b80630284c3f51461019d5780630b620b81146101c65780630ff9b2ce146101d9575b600080fd5b6101b06101ab366004611694565b61034a565b6040516101bd91906118cb565b60405180910390f35b6101b06101d4366004611694565b6104fb565b6101ec6101e73660046115a2565b610699565b005b6101ec6101fc366004611623565b61075c565b6101b06107c0565b6101ec6102173660046117bf565b6107c6565b6101ec61082c565b6101ec6102323660046115f6565b610867565b6101ec6102453660046115a2565b6108fc565b6101b06102583660046115a2565b610939565b61026561094b565b6040516101bd9190611817565b6101b0610280366004611623565b61095a565b6101b0610a03565b610265610a27565b61029d610a3d565b6040516101bd91906118c0565b61029d6102b8366004611725565b610a4c565b6101b06102cb3660046115a2565b610d22565b6101ec610d3d565b61029d6102e63660046115be565b610d76565b6101b06102f9366004611623565b610d96565b6101ec61030c3660046117d7565b610daf565b6101b061031f3660046116e4565b610e82565b6101ec610332366004611694565b610f7e565b6101b0610345366004611682565b611012565b6000610354610a3d565b1561037a5760405162461bcd60e51b815260040161037190611b28565b60405180910390fd5b83336001600160a01b03821614806103ba57506001600160a01b038116600090815260046020908152604080832033845290915290205460ff1615156001145b6103d65760405162461bcd60e51b815260040161037190611b5f565b6001600160a01b0384166103fc5760405162461bcd60e51b815260040161037190611a06565b61040886846000610e82565b915061041f6001600160a01b03871686308661102f565b6001600160a01b03808716600090815260026020908152604080832093881683529290522054610450908390611d05565b6001600160a01b038088166000818152600260209081526040808320948a168352938152838220949094559081526003909252902054610491908390611d05565b6001600160a01b03808816600081815260036020526040908190209390935591518682169291881691907f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d59906104ea9088908890611cf7565b60405180910390a450949350505050565b6000610505610a3d565b156105225760405162461bcd60e51b815260040161037190611b28565b83336001600160a01b038216148061056257506001600160a01b038116600090815260046020908152604080832033845290915290205460ff1615156001145b61057e5760405162461bcd60e51b815260040161037190611b5f565b6001600160a01b0384166105a45760405162461bcd60e51b815260040161037190611a06565b6105ae868461095a565b6001600160a01b038088166000908152600260209081526040808320938a16835292905220549092506105e2908490611d5c565b6001600160a01b038088166000818152600260209081526040808320948b168352938152838220949094559081526003909252902054610623908490611d5c565b6001600160a01b03871660008181526003602052604090209190915561064a9085846110ba565b836001600160a01b0316856001600160a01b0316876001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db86866040516104ea929190611cf7565b600054630100000090046001600160a01b031633146106ca5760405162461bcd60e51b815260040161037190611a3d565b6001600160a01b0381166106f05760405162461bcd60e51b815260040161037190611be2565b6000805476ffffffffffffffffffffffffffffffffffffffff000000191663010000006001600160a01b038416021790556040517fdd51fcfc616de6986ba5d6aebb0ac078ebeadcf86bfd394691ffd06d4fdec47890610751908390611817565b60405180910390a150565b6040516340c10f1960e01b81526001600160a01b038316906340c10f199061078a90309085906004016118a7565b600060405180830381600087803b1580156107a457600080fd5b505af11580156107b8573d6000803e3d6000fd5b505050505050565b60015481565b600054630100000090046001600160a01b031633146107f75760405162461bcd60e51b815260040161037190611a3d565b60018190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be81906107519083906118cb565b600054630100000090046001600160a01b0316331461085d5760405162461bcd60e51b815260040161037190611a3d565b6108656110d9565b565b6001600160a01b03821661088d5760405162461bcd60e51b8152600401610371906119cf565b3360008181526004602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c5906108f09085906118c0565b60405180910390a35050565b600054630100000090046001600160a01b0316331461092d5760405162461bcd60e51b815260040161037190611a3d565b61093681611149565b50565b60036020526000908152604090205481565b6000610955611251565b905090565b6001600160a01b0382166000818152600360205260408082205490516370a0823160e01b8152919290916370a0823190610998903090600401611817565b60206040518083038186803b1580156109b057600080fd5b505afa1580156109c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e8919061166a565b6109f29084611d3d565b6109fc9190611d1d565b9392505050565b7f1774786f6b0badbc03e7ed32b3437e72a205175f1503e8d1772f98c98fd0cb3690565b600054630100000090046001600160a01b031681565b60005462010000900460ff1690565b6001600160a01b038416600090815260036020526040812054841115610a845760405162461bcd60e51b815260040161037190611aba565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610ab5903090600401611817565b60206040518083038186803b158015610acd57600080fd5b505afa158015610ae1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b05919061166a565b9050610b1b6001600160a01b03831689886110ba565b6000610b278888610d96565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610b809695949392919061184f565b602060405180830381600087803b158015610b9a57600080fd5b505af1158015610bae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd2919061166a565b14610bef5760405162461bcd60e51b815260040161037190611998565b610c108930610bfe848b611d05565b6001600160a01b03871692919061102f565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610c3f9190611817565b60206040518083038186803b158015610c5757600080fd5b505afa158015610c6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8f919061166a565b610c999190611d5c565b905081811015610cbb5760405162461bcd60e51b815260040161037190611af1565b896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b86604051610d0a929190611cf7565b60405180910390a45060019998505050505050505050565b6001600160a01b031660009081526003602052604090205490565b600054630100000090046001600160a01b03163314610d6e5760405162461bcd60e51b815260040161037190611a3d565b610865611276565b600460209081526000928352604080842090915290825290205460ff1681565b6000670de0b6b3a7640000600154836109f29190611d3d565b600054610100900460ff1680610dc8575060005460ff16155b610de45760405162461bcd60e51b815260040161037190611b85565b600054610100900460ff16158015610e0f576000805460ff1961ff0019909116610100171660011790555b6001600160a01b038216610e355760405162461bcd60e51b815260040161037190611c50565b60018390556000805476ffffffffffffffffffffffffffffffffffffffff000000191663010000006001600160a01b038516021790558015610e7d576000805461ff00191690555b505050565b6001600160a01b0383166000908152600360205260408120548015610f72576040516370a0823160e01b81526000906001600160a01b038716906370a0823190610ed0903090600401611817565b60206040518083038186803b158015610ee857600080fd5b505afa158015610efc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f20919061166a565b905080610f2d8387611d3d565b610f379190611d1d565b9250838015610f5957508482610f4d8386611d3d565b610f579190611d1d565b105b15610f6c57610f69836001611d05565b92505b50610f76565b8391505b509392505050565b610f86610a3d565b15610fa35760405162461bcd60e51b815260040161037190611b28565b82336001600160a01b0382161480610fe357506001600160a01b038116600090815260046020908152604080832033845290915290205460ff1615156001145b610fff5760405162461bcd60e51b815260040161037190611b5f565b61100b858585856112d5565b5050505050565b600260209081526000928352604080842090915290825290205481565b6110b4846323b872dd60e01b8585856040516024016110509392919061182b565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526113d5565b50505050565b610e7d8363a9059cbb60e01b84846040516024016110509291906118a7565b6110e1610a3d565b6110fd5760405162461bcd60e51b815260040161037190611961565b6000805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611132611464565b60405161113f9190611817565b60405180910390a1565b6000611153611251565b6001600160a01b0316141561117a5760405162461bcd60e51b815260040161037190611c19565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156111b357600080fd5b505afa1580156111c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111eb919061166a565b6111f3610a03565b146112105760405162461bcd60e51b81526004016103719061191e565b61121981611468565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc611242610a03565b826040516107519291906118d4565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b61127e610a3d565b1561129b5760405162461bcd60e51b815260040161037190611b28565b6000805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611132611464565b6001600160a01b0382166112fb5760405162461bcd60e51b815260040161037190611a06565b6001600160a01b0380851660009081526002602090815260408083209387168352929052205461132c908290611d5c565b6001600160a01b03858116600090815260026020908152604080832088851684529091528082209390935590841681522054611369908290611d05565b6001600160a01b0380861660008181526002602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f906113c79086906118cb565b60405180910390a450505050565b600061142a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661148c9092919063ffffffff16565b805190915015610e7d5780806020019051810190611448919061164e565b610e7d5760405162461bcd60e51b815260040161037190611cad565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b606061149b84846000856114a3565b949350505050565b6060824710156114c55760405162461bcd60e51b815260040161037190611a74565b6114ce85611563565b6114ea5760405162461bcd60e51b815260040161037190611c76565b600080866001600160a01b0316858760405161150691906117fb565b60006040518083038185875af1925050503d8060008114611543576040519150601f19603f3d011682016040523d82523d6000602084013e611548565b606091505b5091509150611558828286611569565b979650505050505050565b3b151590565b606083156115785750816109fc565b8251156115885782518084602001fd5b8160405162461bcd60e51b815260040161037191906118eb565b6000602082840312156115b3578081fd5b81356109fc81611db5565b600080604083850312156115d0578081fd5b82356115db81611db5565b915060208301356115eb81611db5565b809150509250929050565b60008060408385031215611608578182fd5b823561161381611db5565b915060208301356115eb81611dca565b60008060408385031215611635578182fd5b823561164081611db5565b946020939093013593505050565b60006020828403121561165f578081fd5b81516109fc81611dca565b60006020828403121561167b578081fd5b5051919050565b600080604083850312156115d0578182fd5b600080600080608085870312156116a9578182fd5b84356116b481611db5565b935060208501356116c481611db5565b925060408501356116d481611db5565b9396929550929360600135925050565b6000806000606084860312156116f8578283fd5b833561170381611db5565b925060208401359150604084013561171a81611dca565b809150509250925092565b60008060008060006080868803121561173c578081fd5b853561174781611db5565b9450602086013561175781611db5565b935060408601359250606086013567ffffffffffffffff8082111561177a578283fd5b818801915088601f83011261178d578283fd5b81358181111561179b578384fd5b8960208285010111156117ac578384fd5b9699959850939650602001949392505050565b6000602082840312156117d0578081fd5b5035919050565b600080604083850312156117e9578182fd5b8235915060208301356115eb81611db5565b6000825161180d818460208701611d73565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b600060208252825180602084015261190a816040850160208701611d73565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b60208082526017908201527f5661756c743a2043616e6e6f7420617070726f76652030000000000000000000604082015260600190565b60208082526019908201527f5641554c543a20494e56414c49445f544f5f4144445245535300000000000000604082015260600190565b60208082526015908201527f4f4e4c595f424c41434b5f534d4954485f5445414d0000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526010908201527f494e56414c49445f4e45575f5445414d00000000000000000000000000000000604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252600c908201526b494e56414c49445f5445414d60a01b604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b918252602082015260400190565b60008219821115611d1857611d18611d9f565b500190565b600082611d3857634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611d5757611d57611d9f565b500290565b600082821015611d6e57611d6e611d9f565b500390565b60005b83811015611d8e578181015183820152602001611d76565b838111156110b45750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461093657600080fd5b801515811461093657600080fdfea26469706673582212208a505ed4d903c4be872dfbe8e746c03f704cde025652b7a64897dce55e9f046864736f6c63430008010033";
