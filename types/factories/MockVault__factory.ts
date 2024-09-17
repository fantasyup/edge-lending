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
  "0x60e060405234801561001057600080fd5b506001805462ff000019168155604080518082018252600c81526b576172705661756c7420763160a01b6020918201527fa40fef20e589d79043a3159d07cb3250ae0cc1485bcb2d436b4b7dc47d197c5c6080528151808301909252918152603160f81b9101527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660a0526100a36100ab565b60c0526100af565b4690565b60805160a05160c05161287d6100ec60003960006117d0015260008181611439015261184d015260008181611418015261182c015261287d6000f3fe608060405234801561001057600080fd5b50600436106101fa5760003560e01c80635c975abb1161011a578063d4ee1d90116100ad578063da35a26f1161007c578063da35a26f146103dc578063da5139ca146103ef578063e53b201714610402578063f18d03cc14610415578063f7888aec14610428576101fa565b8063d4ee1d901461039b578063d728e005146103a3578063d78af5f1146103b6578063d9d98ce4146103c9576101fa565b806379ba5097116100e957806379ba50971461037b5780638456cb59146103835780638da5cb5b1461038b578063c6b45dfa14610393576101fa565b80635c975abb1461033a5780635cffe9de14610342578063613255ab146103555780637372e9be14610368576101fa565b80633f4ba83a1161019257806351e0e26b1161016157806351e0e26b146102f75780635299493b1461031757806352d1902d1461032a57806354fd4d5014610332576101fa565b80633f4ba83a146102a657806346951954146102ae5780634ffe34db146102c157806350d75d25146102e2576101fa565b80631583d56c116101ce5780631583d56c146102635780631e43a7a1146102785780631fd1ffde146102805780633f21c1b414610293576101fa565b8062f5ee4d146101ff5780630284c3f51461022857806306fdde031461023b5780630b620b8114610250575b600080fd5b61021261020d366004611d55565b61043b565b60405161021f9190612126565b60405180910390f35b610212610236366004611eb9565b61044d565b61024361064c565b60405161021f91906121c4565b61021261025e366004611eb9565b610674565b610276610271366004611e48565b610850565b005b6102126108b4565b61027661028e366004611fe4565b6108ba565b6102766102a1366004611da9565b61094b565b610276610c39565b6102766102bc366004611d55565b610c6d565b6102d46102cf366004611d55565b610ca3565b60405161021f92919061274b565b6102ea610cbc565b60405161021f9190612057565b61030a610305366004611d55565b610ccc565b60405161021f919061211b565b610212610325366004611e48565b610ce1565b610212610d1c565b610243610d40565b61030a610d5d565b61030a610350366004611f4a565b610d6c565b610212610363366004611d55565b6110a0565b610276610376366004611d55565b6110bb565b610276611158565b6102766111e4565b6102ea611216565b610212611225565b6102ea611231565b61030a6103b1366004611d71565b611240565b6102766103c4366004611e1b565b611260565b6102126103d7366004611e48565b611312565b6102766103ea366004611ffc565b61133c565b6102126103fd366004611f09565b611497565b610276610410366004611d55565b611519565b610276610423366004611eb9565b611671565b610212610436366004611ea7565b611705565b60086020526000908152604090205481565b6000610457610d5d565b1561047d5760405162461bcd60e51b81526004016104749061249c565b60405180910390fd5b83336001600160a01b03821614806104bd57506001600160a01b038116600090815260076020908152604080832033845290915290205460ff1615156001145b6104d95760405162461bcd60e51b8152600401610474906124fa565b600260005414156104fc5760405162461bcd60e51b815260040161047490612682565b60026000556001600160a01b0384166105275760405162461bcd60e51b81526004016104749061239a565b61053386846000611497565b915061054a6001600160a01b038716863086611722565b6001600160a01b0380871660009081526006602090815260408083209388168352929052205461057b908390612759565b6001600160a01b038088166000818152600660209081526040808320948a16835293815283822094909455908152600a90925281208054909185918391906105c4908490612759565b92505081905550828160010160008282546105df9190612759565b92505081905550846001600160a01b0316866001600160a01b0316886001600160a01b03167f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d59878760405161063592919061274b565b60405180910390a450506001600055949350505050565b6040518060400160405280600c81526020016b576172705661756c7420763160a01b81525081565b600061067e610d5d565b1561069b5760405162461bcd60e51b81526004016104749061249c565b83336001600160a01b03821614806106db57506001600160a01b038116600090815260076020908152604080832033845290915290205460ff1615156001145b6106f75760405162461bcd60e51b8152600401610474906124fa565b6002600054141561071a5760405162461bcd60e51b815260040161047490612682565b60026000556001600160a01b0384166107455760405162461bcd60e51b81526004016104749061239a565b61074f8684610ce1565b6001600160a01b038088166000908152600660209081526040808320938a16835292905220549092506107839084906127b0565b6001600160a01b038088166000818152600660209081526040808320948b16835293815283822094909455908152600a90925281208054909184918391906107cc9084906127b0565b92505081905550838160010160008282546107e791906127b0565b9091555061080190506001600160a01b03881686856117ad565b846001600160a01b0316866001600160a01b0316886001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db878760405161063592919061274b565b6040516340c10f1960e01b81526001600160a01b038316906340c10f199061087e9030908590600401612102565b600060405180830381600087803b15801561089857600080fd5b505af11580156108ac573d6000803e3d6000fd5b505050505050565b60025481565b6003546001600160a01b031633146108e45760405162461bcd60e51b8152600401610474906126b9565b67016345785d8a0000811061090b5760405162461bcd60e51b81526004016104749061257d565b60028190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be8190610940908390612126565b60405180910390a150565b6001600160a01b0385166109715760405162461bcd60e51b8152600401610474906126dd565b6001600160a01b0386166109975760405162461bcd60e51b815260040161047490612408565b60ff83161580156109a6575081155b80156109b0575080155b15610a4457333214156109d55760405162461bcd60e51b81526004016104749061233c565b846001600160a01b0316866001600160a01b03161415610a075760405162461bcd60e51b815260040161047490612271565b6001600160a01b03851660009081526009602052604090205460ff16610a3f5760405162461bcd60e51b815260040161047490612714565b610bc5565b6000610a4e6117cc565b7fe8879d0159a5862e68322a449d14dcfb21ad39e0c3dc66f88aff16b87aa27eae86610a9a577f31d77d35dcd597e2453861d123e3d7ee551c84d42d8d97544835a74f1ccb251b610abc565b7f9d3cc82da8126179611840997002f7d09633ad258b9c11d6e1dccc7e1ad477415b6001600160a01b038a16600090815260086020526040812080548c928c928c9291610ae6836127f3565b91905055604051602001610aff96959493929190612146565b60405160208183030381529060405280519060200120604051602001610b2692919061203c565b604051602081830303815290604052805190602001209050600060018286868660405160008152602001604052604051610b6394939291906121a6565b6020604051602081039080840390855afa158015610b85573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b031614610bc25760405162461bcd60e51b815260040161047490612363565b50505b6001600160a01b038681166000818152600760209081526040808320948a168084529490915290819020805460ff1916881515179055517f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c590610c2990889061211b565b60405180910390a3505050505050565b6003546001600160a01b03163314610c635760405162461bcd60e51b8152600401610474906126b9565b610c6b611878565b565b6003546001600160a01b03163314610c975760405162461bcd60e51b8152600401610474906126b9565b610ca0816118de565b50565b600a602052600090815260409020805460019091015482565b6000610cc66119e6565b90505b90565b60096020526000908152604090205460ff1681565b6001600160a01b0382166000908152600a6020526040812060018101548154610d0a9085612791565b610d149190612771565b949350505050565b7f789f0daca1cd17baa821e8d7454225d50b9f3e7c22acb67c2b2fff4f686a128290565b604051806040016040528060018152602001603160f81b81525081565b60015462010000900460ff1690565b600060026000541415610d915760405162461bcd60e51b815260040161047490612682565b600260009081556001600160a01b0386168152600a6020526040902054841115610dcd5760405162461bcd60e51b81526004016104749061242e565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610dfe903090600401612057565b60206040518083038186803b158015610e1657600080fd5b505afa158015610e2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4e9190611e8f565b9050610e646001600160a01b03831689886117ad565b6000610e708888611312565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610ec99695949392919061208f565b602060405180830381600087803b158015610ee357600080fd5b505af1158015610ef7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1b9190611e8f565b14610f385760405162461bcd60e51b8152600401610474906122a8565b610f598930610f47848b612759565b6001600160a01b038716929190611722565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610f889190612057565b60206040518083038186803b158015610fa057600080fd5b505afa158015610fb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd89190611e8f565b610fe291906127b0565b9050818110156110045760405162461bcd60e51b815260040161047490612465565b6001600160a01b0389166000908152600a60205260408120805484929061102c908490612759565b92505081905550896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b8660405161108292919061274b565b60405180910390a46001945050505050600160005595945050505050565b6001600160a01b03166000908152600a602052604090205490565b6003546001600160a01b031633146110e55760405162461bcd60e51b8152600401610474906126b9565b6001600160a01b03811661110b5760405162461bcd60e51b815260040161047490612305565b600480546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab832906109409083904290612102565b6004546001600160a01b031633146111825760405162461bcd60e51b8152600401610474906124d3565b60048054600380546001600160a01b03199081166001600160a01b038416179091551690556040517f56a56c31bb3f318488e30872a32d64e9e9092a6a23043f6d9e9d71b2545e7172906111da906000904290612102565b60405180910390a1565b6003546001600160a01b0316331461120e5760405162461bcd60e51b8152600401610474906126b9565b610c6b611a0b565b6003546001600160a01b031681565b67016345785d8a000081565b6004546001600160a01b031681565b600760209081526000928352604080842090915290825290205460ff1681565b6003546001600160a01b0316331461128a5760405162461bcd60e51b8152600401610474906126b9565b6001600160a01b0382166112b05760405162461bcd60e51b8152600401610474906123d1565b6001600160a01b03821660009081526009602052604090819020805460ff1916831515179055517f868ef4c4efa656ac9fe74e223335211b2da76220bf70e4a05c30c6a857e89e0d9061130690849084906120e7565b60405180910390a15050565b6000670de0b6b3a76400006002548361132b9190612791565b6113359190612771565b9392505050565b600154610100900460ff1680611355575060015460ff16155b6113715760405162461bcd60e51b815260040161047490612520565b600154610100900460ff1615801561139b576001805460ff1961ff00199091166101001716811790555b6001600160a01b0382166113c15760405162461bcd60e51b8152600401610474906125a3565b67016345785d8a0000600254106113ea5760405162461bcd60e51b8152600401610474906122df565b6113f2611a6a565b61145d7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a71565b6005556002839055600380546001600160a01b0319166001600160a01b0384161790558015611492576001805461ff00191690555b505050565b6001600160a01b0383166000908152600a602052604081206001810154801561150c578154806114c78388612791565b6114d19190612771565b93508480156114f3575085826114e78387612791565b6114f19190612771565b105b1561150657611503846001612759565b93505b50611510565b8492505b50509392505050565b6002600054141561153c5760405162461bcd60e51b815260040161047490612682565b60026000556003546001600160a01b0316331461156b5760405162461bcd60e51b8152600401610474906126b9565b6040516370a0823160e01b81526000906001600160a01b038316906370a082319061159a903090600401612057565b60206040518083038186803b1580156115b257600080fd5b505afa1580156115c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ea9190611e8f565b6001600160a01b0383166000908152600a60205260408120549192509061161190836127b0565b60035490915061162e906001600160a01b038581169116836117ad565b7f891d905c747e7308f7e952ff603f2ac799bc5abc150b5792024a59b5c96273d2838260405161165f929190612102565b60405180910390a15050600160005550565b611679610d5d565b156116965760405162461bcd60e51b81526004016104749061249c565b82336001600160a01b03821614806116d657506001600160a01b038116600090815260076020908152604080832033845290915290205460ff1615156001145b6116f25760405162461bcd60e51b8152600401610474906124fa565b6116fe85858585611ab2565b5050505050565b600660209081526000928352604080842090915290825290205481565b6117a7846323b872dd60e01b8585856040516024016117439392919061206b565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bb2565b50505050565b6114928363a9059cbb60e01b8484604051602401611743929190612102565b60007f00000000000000000000000000000000000000000000000000000000000000006117f7611c41565b14156118065750600554610cc9565b6118717f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a71565b9050610cc9565b611880610d5d565b61189c5760405162461bcd60e51b81526004016104749061223a565b6001805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6118d1611c45565b6040516111da9190612057565b60006118e86119e6565b6001600160a01b0316141561190f5760405162461bcd60e51b8152600401610474906125ca565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561194857600080fd5b505afa15801561195c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119809190611e8f565b611988610d1c565b146119a55760405162461bcd60e51b8152600401610474906121f7565b6119ae81611c49565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc6119d7610d1c565b8260405161094092919061212f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b611a13610d5d565b15611a305760405162461bcd60e51b81526004016104749061249c565b6001805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586118d1611c45565b6001600055565b6000838383611a7e611c41565b30604051602001611a9395949392919061217a565b6040516020818303038152906040528051906020012090509392505050565b6001600160a01b038216611ad85760405162461bcd60e51b81526004016104749061239a565b6001600160a01b03808516600090815260066020908152604080832093871683529290522054611b099082906127b0565b6001600160a01b03858116600090815260066020908152604080832088851684529091528082209390935590841681522054611b46908290612759565b6001600160a01b0380861660008181526006602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f90611ba4908690612126565b60405180910390a450505050565b6000611c07826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611c6d9092919063ffffffff16565b8051909150156114925780806020019051810190611c259190611e73565b6114925760405162461bcd60e51b815260040161047490612638565b4690565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6060610d14848460008585611c8185611d16565b611c9d5760405162461bcd60e51b815260040161047490612601565b600080866001600160a01b03168587604051611cb99190612020565b60006040518083038185875af1925050503d8060008114611cf6576040519150601f19603f3d011682016040523d82523d6000602084013e611cfb565b606091505b5091509150611d0b828286611d1c565b979650505050505050565b3b151590565b60608315611d2b575081611335565b825115611d3b5782518084602001fd5b8160405162461bcd60e51b815260040161047491906121c4565b600060208284031215611d66578081fd5b813561133581612824565b60008060408385031215611d83578081fd5b8235611d8e81612824565b91506020830135611d9e81612824565b809150509250929050565b60008060008060008060c08789031215611dc1578182fd5b8635611dcc81612824565b95506020870135611ddc81612824565b94506040870135611dec81612839565b9350606087013560ff81168114611e01578283fd5b9598949750929560808101359460a0909101359350915050565b60008060408385031215611e2d578182fd5b8235611e3881612824565b91506020830135611d9e81612839565b60008060408385031215611e5a578182fd5b8235611e6581612824565b946020939093013593505050565b600060208284031215611e84578081fd5b815161133581612839565b600060208284031215611ea0578081fd5b5051919050565b60008060408385031215611d83578182fd5b60008060008060808587031215611ece578384fd5b8435611ed981612824565b93506020850135611ee981612824565b92506040850135611ef981612824565b9396929550929360600135925050565b600080600060608486031215611f1d578283fd5b8335611f2881612824565b9250602084013591506040840135611f3f81612839565b809150509250925092565b600080600080600060808688031215611f61578283fd5b8535611f6c81612824565b94506020860135611f7c81612824565b935060408601359250606086013567ffffffffffffffff80821115611f9f578283fd5b818801915088601f830112611fb2578283fd5b813581811115611fc0578384fd5b896020828501011115611fd1578384fd5b9699959850939650602001949392505050565b600060208284031215611ff5578081fd5b5035919050565b6000806040838503121561200e578182fd5b823591506020830135611d9e81612824565b600082516120328184602087016127c7565b9190910192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b039290921682521515602082015260400190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b95865260208601949094526001600160a01b039283166040860152911660608401521515608083015260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b60006020825282518060208401526121e38160408501602087016127c7565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b6020808252600f908201527f494e56414c49445f415050524f56450000000000000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b6020808252600c908201526b494e56414c49445f5241544560a01b604082015260600190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b6020808252600d908201526c13d3931657d0d3d395149050d5609a1b604082015260600190565b60208082526011908201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f544f5f414444524553530000000000000000000000000000604082015260600190565b6020808252600f908201527f696e76616c69645f616464726573730000000000000000000000000000000000604082015260600190565b6020808252600c908201526b24a72b20a624a22faaa9a2a960a11b604082015260600190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252600c908201526b696e76616c6964207261746560a01b604082015260600190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60208082526010908201527f494e56414c49445f434f4e545241435400000000000000000000000000000000604082015260600190565b6020808252600f908201527f4e4f545f57484954454c49535445440000000000000000000000000000000000604082015260600190565b918252602082015260400190565b6000821982111561276c5761276c61280e565b500190565b60008261278c57634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156127ab576127ab61280e565b500290565b6000828210156127c2576127c261280e565b500390565b60005b838110156127e25781810151838201526020016127ca565b838111156117a75750506000910152565b60006000198214156128075761280761280e565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610ca057600080fd5b8015158114610ca057600080fdfea2646970667358221220d9c10dd7a48e57c9ac555213632346d9ca45a2e50095efa21cd3986dcc69870c64736f6c63430008010033";
