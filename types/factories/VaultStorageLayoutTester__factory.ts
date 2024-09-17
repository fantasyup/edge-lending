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
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "whitelist",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "AllowContract",
    type: "event",
  },
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
        name: "newOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "OwnershipAccepted",
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
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RegisterProtocol",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
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
    ],
    name: "RescueFunds",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
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
    inputs: [],
    name: "MAX_FLASHLOAN_RATE",
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
    name: "acceptOwnership",
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
    name: "allowContract",
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
    ],
    name: "allowedContracts",
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
        internalType: "address",
        name: "_user",
        type: "address",
      },
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
        name: "shareOut",
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
        name: "_owner",
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
    name: "newOwner",
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
    ],
    name: "rescueFunds",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_ceil",
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
        name: "totalUnderlyingDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSharesMinted",
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
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferToNewOwner",
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
    ],
    name: "userApprovalNonce",
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
    inputs: [],
    name: "version",
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
  "0x60e060405234801561001057600080fd5b506001805462ff000019168155604080518082018252600c81526b576172705661756c7420763160a01b6020918201527fa40fef20e589d79043a3159d07cb3250ae0cc1485bcb2d436b4b7dc47d197c5c6080528151808301909252918152603160f81b9101527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660a0526100a36100ab565b60c0526100af565b4690565b60805160a05160c05161280e6100ec60003960006117610152600081816113ca01526117de0152600081816113a901526117bd015261280e6000f3fe608060405234801561001057600080fd5b50600436106101fa5760003560e01c80635cffe9de1161011a578063d728e005116100ad578063da5139ca1161007c578063da5139ca146103dc578063e53b2017146103ef578063f18d03cc14610402578063f7888aec14610415578063f99a38c414610428576101fa565b8063d728e00514610390578063d78af5f1146103a3578063d9d98ce4146103b6578063da35a26f146103c9576101fa565b80638456cb59116100e95780638456cb59146103705780638da5cb5b14610378578063c6b45dfa14610380578063d4ee1d9014610388576101fa565b80635cffe9de1461032f578063613255ab146103425780637372e9be1461035557806379ba509714610368576101fa565b806346951954116101925780635299493b116101615780635299493b1461030457806352d1902d1461031757806354fd4d501461031f5780635c975abb14610327576101fa565b8063469519541461029b5780634ffe34db146102ae57806350d75d25146102cf57806351e0e26b146102e4576101fa565b80631e43a7a1116101ce5780631e43a7a1146102635780631fd1ffde1461026b5780633f21c1b4146102805780633f4ba83a14610293576101fa565b8062f5ee4d146101ff5780630284c3f51461022857806306fdde031461023b5780630b620b8114610250575b600080fd5b61021261020d366004611ce6565b610430565b60405161021f91906120b7565b60405180910390f35b610212610236366004611e4a565b610442565b610243610641565b60405161021f9190612155565b61021261025e366004611e4a565b610669565b610212610845565b61027e610279366004611f75565b61084b565b005b61027e61028e366004611d3a565b6108dc565b61027e610bca565b61027e6102a9366004611ce6565b610bfe565b6102c16102bc366004611ce6565b610c34565b60405161021f9291906126dc565b6102d7610c4d565b60405161021f9190611fe8565b6102f76102f2366004611ce6565b610c5d565b60405161021f91906120ac565b610212610312366004611dd9565b610c72565b610212610cad565b610243610cd1565b6102f7610cee565b6102f761033d366004611edb565b610cfd565b610212610350366004611ce6565b611031565b61027e610363366004611ce6565b61104c565b61027e6110e9565b61027e611175565b6102d76111a7565b6102126111b6565b6102d76111c2565b6102f761039e366004611d02565b6111d1565b61027e6103b1366004611dac565b6111f1565b6102126103c4366004611dd9565b6112a3565b61027e6103d7366004611f8d565b6112cd565b6102126103ea366004611e9a565b611428565b61027e6103fd366004611ce6565b6114aa565b61027e610410366004611e4a565b611602565b610212610423366004611e38565b611696565b61027e610bfc565b60086020526000908152604090205481565b600061044c610cee565b156104725760405162461bcd60e51b81526004016104699061242d565b60405180910390fd5b83336001600160a01b03821614806104b257506001600160a01b038116600090815260076020908152604080832033845290915290205460ff1615156001145b6104ce5760405162461bcd60e51b81526004016104699061248b565b600260005414156104f15760405162461bcd60e51b815260040161046990612613565b60026000556001600160a01b03841661051c5760405162461bcd60e51b81526004016104699061232b565b61052886846000611428565b915061053f6001600160a01b0387168630866116b3565b6001600160a01b038087166000908152600660209081526040808320938816835292905220546105709083906126ea565b6001600160a01b038088166000818152600660209081526040808320948a16835293815283822094909455908152600a90925281208054909185918391906105b99084906126ea565b92505081905550828160010160008282546105d491906126ea565b92505081905550846001600160a01b0316866001600160a01b0316886001600160a01b03167f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d59878760405161062a9291906126dc565b60405180910390a450506001600055949350505050565b6040518060400160405280600c81526020016b576172705661756c7420763160a01b81525081565b6000610673610cee565b156106905760405162461bcd60e51b81526004016104699061242d565b83336001600160a01b03821614806106d057506001600160a01b038116600090815260076020908152604080832033845290915290205460ff1615156001145b6106ec5760405162461bcd60e51b81526004016104699061248b565b6002600054141561070f5760405162461bcd60e51b815260040161046990612613565b60026000556001600160a01b03841661073a5760405162461bcd60e51b81526004016104699061232b565b6107448684610c72565b6001600160a01b038088166000908152600660209081526040808320938a1683529290522054909250610778908490612741565b6001600160a01b038088166000818152600660209081526040808320948b16835293815283822094909455908152600a90925281208054909184918391906107c1908490612741565b92505081905550838160010160008282546107dc9190612741565b909155506107f690506001600160a01b038816868561173e565b846001600160a01b0316866001600160a01b0316886001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db878760405161062a9291906126dc565b60025481565b6003546001600160a01b031633146108755760405162461bcd60e51b81526004016104699061264a565b67016345785d8a0000811061089c5760405162461bcd60e51b81526004016104699061250e565b60028190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be81906108d19083906120b7565b60405180910390a150565b6001600160a01b0385166109025760405162461bcd60e51b81526004016104699061266e565b6001600160a01b0386166109285760405162461bcd60e51b815260040161046990612399565b60ff8316158015610937575081155b8015610941575080155b156109d557333214156109665760405162461bcd60e51b8152600401610469906122cd565b846001600160a01b0316866001600160a01b031614156109985760405162461bcd60e51b815260040161046990612202565b6001600160a01b03851660009081526009602052604090205460ff166109d05760405162461bcd60e51b8152600401610469906126a5565b610b56565b60006109df61175d565b7fe8879d0159a5862e68322a449d14dcfb21ad39e0c3dc66f88aff16b87aa27eae86610a2b577f31d77d35dcd597e2453861d123e3d7ee551c84d42d8d97544835a74f1ccb251b610a4d565b7f9d3cc82da8126179611840997002f7d09633ad258b9c11d6e1dccc7e1ad477415b6001600160a01b038a16600090815260086020526040812080548c928c928c9291610a7783612784565b91905055604051602001610a90969594939291906120d7565b60405160208183030381529060405280519060200120604051602001610ab7929190611fcd565b604051602081830303815290604052805190602001209050600060018286868660405160008152602001604052604051610af49493929190612137565b6020604051602081039080840390855afa158015610b16573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b031614610b535760405162461bcd60e51b8152600401610469906122f4565b50505b6001600160a01b038681166000818152600760209081526040808320948a168084529490915290819020805460ff1916881515179055517f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c590610bba9088906120ac565b60405180910390a3505050505050565b6003546001600160a01b03163314610bf45760405162461bcd60e51b81526004016104699061264a565b610bfc611809565b565b6003546001600160a01b03163314610c285760405162461bcd60e51b81526004016104699061264a565b610c318161186f565b50565b600a602052600090815260409020805460019091015482565b6000610c57611977565b90505b90565b60096020526000908152604090205460ff1681565b6001600160a01b0382166000908152600a6020526040812060018101548154610c9b9085612722565b610ca59190612702565b949350505050565b7f789f0daca1cd17baa821e8d7454225d50b9f3e7c22acb67c2b2fff4f686a128290565b604051806040016040528060018152602001603160f81b81525081565b60015462010000900460ff1690565b600060026000541415610d225760405162461bcd60e51b815260040161046990612613565b600260009081556001600160a01b0386168152600a6020526040902054841115610d5e5760405162461bcd60e51b8152600401610469906123bf565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610d8f903090600401611fe8565b60206040518083038186803b158015610da757600080fd5b505afa158015610dbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ddf9190611e20565b9050610df56001600160a01b038316898861173e565b6000610e0188886112a3565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610e5a96959493929190612020565b602060405180830381600087803b158015610e7457600080fd5b505af1158015610e88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eac9190611e20565b14610ec95760405162461bcd60e51b815260040161046990612239565b610eea8930610ed8848b6126ea565b6001600160a01b0387169291906116b3565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610f199190611fe8565b60206040518083038186803b158015610f3157600080fd5b505afa158015610f45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f699190611e20565b610f739190612741565b905081811015610f955760405162461bcd60e51b8152600401610469906123f6565b6001600160a01b0389166000908152600a602052604081208054849290610fbd9084906126ea565b92505081905550896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b866040516110139291906126dc565b60405180910390a46001945050505050600160005595945050505050565b6001600160a01b03166000908152600a602052604090205490565b6003546001600160a01b031633146110765760405162461bcd60e51b81526004016104699061264a565b6001600160a01b03811661109c5760405162461bcd60e51b815260040161046990612296565b600480546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab832906108d19083904290612093565b6004546001600160a01b031633146111135760405162461bcd60e51b815260040161046990612464565b60048054600380546001600160a01b03199081166001600160a01b038416179091551690556040517f56a56c31bb3f318488e30872a32d64e9e9092a6a23043f6d9e9d71b2545e71729061116b906000904290612093565b60405180910390a1565b6003546001600160a01b0316331461119f5760405162461bcd60e51b81526004016104699061264a565b610bfc61199c565b6003546001600160a01b031681565b67016345785d8a000081565b6004546001600160a01b031681565b600760209081526000928352604080842090915290825290205460ff1681565b6003546001600160a01b0316331461121b5760405162461bcd60e51b81526004016104699061264a565b6001600160a01b0382166112415760405162461bcd60e51b815260040161046990612362565b6001600160a01b03821660009081526009602052604090819020805460ff1916831515179055517f868ef4c4efa656ac9fe74e223335211b2da76220bf70e4a05c30c6a857e89e0d906112979084908490612078565b60405180910390a15050565b6000670de0b6b3a7640000600254836112bc9190612722565b6112c69190612702565b9392505050565b600154610100900460ff16806112e6575060015460ff16155b6113025760405162461bcd60e51b8152600401610469906124b1565b600154610100900460ff1615801561132c576001805460ff1961ff00199091166101001716811790555b6001600160a01b0382166113525760405162461bcd60e51b815260040161046990612534565b67016345785d8a00006002541061137b5760405162461bcd60e51b815260040161046990612270565b6113836119fb565b6113ee7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a02565b6005556002839055600380546001600160a01b0319166001600160a01b0384161790558015611423576001805461ff00191690555b505050565b6001600160a01b0383166000908152600a602052604081206001810154801561149d578154806114588388612722565b6114629190612702565b9350848015611484575085826114788387612722565b6114829190612702565b105b15611497576114948460016126ea565b93505b506114a1565b8492505b50509392505050565b600260005414156114cd5760405162461bcd60e51b815260040161046990612613565b60026000556003546001600160a01b031633146114fc5760405162461bcd60e51b81526004016104699061264a565b6040516370a0823160e01b81526000906001600160a01b038316906370a082319061152b903090600401611fe8565b60206040518083038186803b15801561154357600080fd5b505afa158015611557573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061157b9190611e20565b6001600160a01b0383166000908152600a6020526040812054919250906115a29083612741565b6003549091506115bf906001600160a01b0385811691168361173e565b7f891d905c747e7308f7e952ff603f2ac799bc5abc150b5792024a59b5c96273d283826040516115f0929190612093565b60405180910390a15050600160005550565b61160a610cee565b156116275760405162461bcd60e51b81526004016104699061242d565b82336001600160a01b038216148061166757506001600160a01b038116600090815260076020908152604080832033845290915290205460ff1615156001145b6116835760405162461bcd60e51b81526004016104699061248b565b61168f85858585611a43565b5050505050565b600660209081526000928352604080842090915290825290205481565b611738846323b872dd60e01b8585856040516024016116d493929190611ffc565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b43565b50505050565b6114238363a9059cbb60e01b84846040516024016116d4929190612093565b60007f0000000000000000000000000000000000000000000000000000000000000000611788611bd2565b14156117975750600554610c5a565b6118027f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a02565b9050610c5a565b611811610cee565b61182d5760405162461bcd60e51b8152600401610469906121cb565b6001805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611862611bd6565b60405161116b9190611fe8565b6000611879611977565b6001600160a01b031614156118a05760405162461bcd60e51b81526004016104699061255b565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156118d957600080fd5b505afa1580156118ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119119190611e20565b611919610cad565b146119365760405162461bcd60e51b815260040161046990612188565b61193f81611bda565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc611968610cad565b826040516108d19291906120c0565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6119a4610cee565b156119c15760405162461bcd60e51b81526004016104699061242d565b6001805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611862611bd6565b6001600055565b6000838383611a0f611bd2565b30604051602001611a2495949392919061210b565b6040516020818303038152906040528051906020012090509392505050565b6001600160a01b038216611a695760405162461bcd60e51b81526004016104699061232b565b6001600160a01b03808516600090815260066020908152604080832093871683529290522054611a9a908290612741565b6001600160a01b03858116600090815260066020908152604080832088851684529091528082209390935590841681522054611ad79082906126ea565b6001600160a01b0380861660008181526006602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f90611b359086906120b7565b60405180910390a450505050565b6000611b98826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611bfe9092919063ffffffff16565b8051909150156114235780806020019051810190611bb69190611e04565b6114235760405162461bcd60e51b8152600401610469906125c9565b4690565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6060610ca5848460008585611c1285611ca7565b611c2e5760405162461bcd60e51b815260040161046990612592565b600080866001600160a01b03168587604051611c4a9190611fb1565b60006040518083038185875af1925050503d8060008114611c87576040519150601f19603f3d011682016040523d82523d6000602084013e611c8c565b606091505b5091509150611c9c828286611cad565b979650505050505050565b3b151590565b60608315611cbc5750816112c6565b825115611ccc5782518084602001fd5b8160405162461bcd60e51b81526004016104699190612155565b600060208284031215611cf7578081fd5b81356112c6816127b5565b60008060408385031215611d14578081fd5b8235611d1f816127b5565b91506020830135611d2f816127b5565b809150509250929050565b60008060008060008060c08789031215611d52578182fd5b8635611d5d816127b5565b95506020870135611d6d816127b5565b94506040870135611d7d816127ca565b9350606087013560ff81168114611d92578283fd5b9598949750929560808101359460a0909101359350915050565b60008060408385031215611dbe578182fd5b8235611dc9816127b5565b91506020830135611d2f816127ca565b60008060408385031215611deb578182fd5b8235611df6816127b5565b946020939093013593505050565b600060208284031215611e15578081fd5b81516112c6816127ca565b600060208284031215611e31578081fd5b5051919050565b60008060408385031215611d14578182fd5b60008060008060808587031215611e5f578384fd5b8435611e6a816127b5565b93506020850135611e7a816127b5565b92506040850135611e8a816127b5565b9396929550929360600135925050565b600080600060608486031215611eae578283fd5b8335611eb9816127b5565b9250602084013591506040840135611ed0816127ca565b809150509250925092565b600080600080600060808688031215611ef2578283fd5b8535611efd816127b5565b94506020860135611f0d816127b5565b935060408601359250606086013567ffffffffffffffff80821115611f30578283fd5b818801915088601f830112611f43578283fd5b813581811115611f51578384fd5b896020828501011115611f62578384fd5b9699959850939650602001949392505050565b600060208284031215611f86578081fd5b5035919050565b60008060408385031215611f9f578182fd5b823591506020830135611d2f816127b5565b60008251611fc3818460208701612758565b9190910192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b039290921682521515602082015260400190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b95865260208601949094526001600160a01b039283166040860152911660608401521515608083015260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082528251806020840152612174816040850160208701612758565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b6020808252600f908201527f494e56414c49445f415050524f56450000000000000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b6020808252600c908201526b494e56414c49445f5241544560a01b604082015260600190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b6020808252600d908201526c13d3931657d0d3d395149050d5609a1b604082015260600190565b60208082526011908201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f544f5f414444524553530000000000000000000000000000604082015260600190565b6020808252600f908201527f696e76616c69645f616464726573730000000000000000000000000000000000604082015260600190565b6020808252600c908201526b24a72b20a624a22faaa9a2a960a11b604082015260600190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252600c908201526b696e76616c6964207261746560a01b604082015260600190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60208082526010908201527f494e56414c49445f434f4e545241435400000000000000000000000000000000604082015260600190565b6020808252600f908201527f4e4f545f57484954454c49535445440000000000000000000000000000000000604082015260600190565b918252602082015260400190565b600082198211156126fd576126fd61279f565b500190565b60008261271d57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561273c5761273c61279f565b500290565b6000828210156127535761275361279f565b500390565b60005b8381101561277357818101518382015260200161275b565b838111156117385750506000910152565b60006000198214156127985761279861279f565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610c3157600080fd5b8015158114610c3157600080fdfea2646970667358221220f7678ef28f24f57a8077da61fc5286c907ead65c8dfc4286e4586dde593a5a7f64736f6c63430008010033";
