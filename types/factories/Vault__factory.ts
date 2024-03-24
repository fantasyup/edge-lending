/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Vault } from "../Vault";

export class Vault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _version: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vault> {
    return super.deploy(_name, _version, overrides || {}) as Promise<Vault>;
  }
  getDeployTransaction(
    _name: string,
    _version: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _version, overrides || {});
  }
  attach(address: string): Vault {
    return super.attach(address) as Vault;
  }
  connect(signer: Signer): Vault__factory {
    return super.connect(signer) as Vault__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vault {
    return new Contract(address, _abi, signerOrProvider) as Vault;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_version",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferToOwner",
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
  "0x6101006040523480156200001257600080fd5b506040516200251d3803806200251d8339810160408190526200003591620001a9565b6000805462ff0000191690558051602080830191909120835191840191909120608081905260a082905283918391620000907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8284620000ad565b60c0526200009d620000f2565b60e0525062000252945050505050565b6000838383620000bc620000f2565b30604051602001620000d395949392919062000210565b6040516020818303038152906040528051906020012090509392505050565b4690565b600082601f83011262000107578081fd5b81516001600160401b03808211156200012457620001246200023c565b604051601f8301601f19908116603f011681019082821181831017156200014f576200014f6200023c565b816040528381526020925086838588010111156200016b578485fd5b8491505b838210156200018e57858201830151818301840152908201906200016f565b838211156200019f57848385830101525b9695505050505050565b60008060408385031215620001bc578182fd5b82516001600160401b0380821115620001d3578384fd5b620001e186838701620000f6565b93506020850151915080821115620001f7578283fd5b506200020685828601620000f6565b9150509250929050565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b634e487b7160e01b600052604160045260246000fd5b60805160a05160c05160e0516122916200028c60003960006112ca015260006112fa015260006113650152600061134401526122916000f3fe608060405234801561001057600080fd5b50600436106101ad5760003560e01c80635cffe9de116100ee578063c6b45dfa11610097578063da35a26f11610071578063da35a26f14610323578063da5139ca14610336578063f18d03cc14610349578063f7888aec1461035c576101ad565b8063c6b45dfa146102f5578063d728e005146102fd578063d9d98ce414610310576101ad565b8063812d504d116100c8578063812d504d146102d25780638456cb59146102e55780638da5cb5b146102ed576101ad565b80635cffe9de146102a4578063613255ab146102b757806379ba5097146102ca576101ad565b80633f4ba83a1161015b57806350d75d251161013557806350d75d251461025f5780635299493b1461027457806352d1902d146102875780635c975abb1461028f576101ad565b80633f4ba83a1461023157806346951954146102395780634ffe34db1461024c576101ad565b80631e43a7a11161018c5780631e43a7a1146102015780631fd1ffde146102095780633f21c1b41461021e576101ad565b8062f5ee4d146101b25780630284c3f5146101db5780630b620b81146101ee575b600080fd5b6101c56101c0366004611894565b61036f565b6040516101d29190611c1d565b60405180910390f35b6101c56101e93660046119cb565b610381565b6101c56101fc3660046119cb565b610532565b6101c56106d0565b61021c610217366004611af6565b6106d6565b005b61021c61022c3660046118e8565b610767565b61021c610981565b61021c610247366004611894565b6109b5565b6101c561025a366004611894565b6109eb565b6102676109fd565b6040516101d29190611b69565b6101c561028236600461195a565b610a0d565b6101c5610ab6565b610297610ada565b6040516101d29190611c12565b6102976102b2366004611a5c565b610ae9565b6101c56102c5366004611894565b610dbf565b61021c610dda565b61021c6102e0366004611894565b610e66565b61021c610f03565b610267610f35565b6101c5610f44565b61029761030b3660046118b0565b610f50565b6101c561031e36600461195a565b610f70565b61021c610331366004611b0e565b610f89565b6101c5610344366004611a1b565b61106f565b61021c6103573660046119cb565b61116b565b6101c561036a3660046119b9565b6111ff565b60076020526000908152604090205481565b600061038b610ada565b156103b15760405162461bcd60e51b81526004016103a890611ee7565b60405180910390fd5b83336001600160a01b03821614806103f157506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b61040d5760405162461bcd60e51b81526004016103a890611f45565b6001600160a01b0384166104335760405162461bcd60e51b81526004016103a890611dc5565b61043f8684600061106f565b91506104566001600160a01b03871686308661121c565b6001600160a01b0380871660009081526004602090815260408083209388168352929052205461048790839061216d565b6001600160a01b038088166000818152600460209081526040808320948a1683529381528382209490945590815260059092529020546104c890839061216d565b6001600160a01b03808816600081815260056020526040908190209390935591518682169291881691907f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d5990610521908890889061215f565b60405180910390a450949350505050565b600061053c610ada565b156105595760405162461bcd60e51b81526004016103a890611ee7565b83336001600160a01b038216148061059957506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b6105b55760405162461bcd60e51b81526004016103a890611f45565b6001600160a01b0384166105db5760405162461bcd60e51b81526004016103a890611dc5565b6105e58684610a0d565b6001600160a01b038088166000908152600460209081526040808320938a16835292905220549092506106199084906121c4565b6001600160a01b038088166000818152600460209081526040808320948b16835293815283822094909455908152600590925290205461065a9084906121c4565b6001600160a01b0387166000818152600560205260409020919091556106819085846112a7565b836001600160a01b0316856001600160a01b0316876001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db868660405161052192919061215f565b60015481565b6002546001600160a01b031633146107005760405162461bcd60e51b81526004016103a890612104565b67016345785d8a000081106107275760405162461bcd60e51b81526004016103a890611fff565b60018190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be819061075c908390611c1d565b60405180910390a150565b6001600160a01b03851661078d5760405162461bcd60e51b81526004016103a890612128565b60006107976112c6565b7fb52f1cbe9a31a717236ad5da4ac3c9a26dd80fcbb896c0129a17e5abf00209cb866107e3577f31d77d35dcd597e2453861d123e3d7ee551c84d42d8d97544835a74f1ccb251b610805565b7f9d3cc82da8126179611840997002f7d09633ad258b9c11d6e1dccc7e1ad477415b6001600160a01b038a16600090815260076020526040812080548c928c928c929161082f83612207565b9190505560405160200161084896959493929190611c3d565b6040516020818303038152906040528051906020012060405160200161086f929190611b4e565b6040516020818303038152906040528051906020012090506000600182868686604051600081526020016040526040516108ac9493929190611c9d565b6020604051602081039080840390855afa1580156108ce573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b03161461090b5760405162461bcd60e51b81526004016103a890611e42565b6001600160a01b038881166000818152600660209081526040808320948c168084529490915290819020805460ff19168a1515179055517f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c59061096f908a90611c12565b60405180910390a35050505050505050565b6002546001600160a01b031633146109ab5760405162461bcd60e51b81526004016103a890612104565b6109b3611390565b565b6002546001600160a01b031633146109df5760405162461bcd60e51b81526004016103a890612104565b6109e8816113f6565b50565b60056020526000908152604090205481565b6000610a076114fe565b90505b90565b6001600160a01b0382166000818152600560205260408082205490516370a0823160e01b8152919290916370a0823190610a4b903090600401611b69565b60206040518083038186803b158015610a6357600080fd5b505afa158015610a77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9b91906119a1565b610aa590846121a5565b610aaf9190612185565b9392505050565b7f1774786f6b0badbc03e7ed32b3437e72a205175f1503e8d1772f98c98fd0cb3690565b60005462010000900460ff1690565b6001600160a01b038416600090815260056020526040812054841115610b215760405162461bcd60e51b81526004016103a890611e79565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610b52903090600401611b69565b60206040518083038186803b158015610b6a57600080fd5b505afa158015610b7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba291906119a1565b9050610bb86001600160a01b03831689886112a7565b6000610bc48888610f70565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610c1d96959493929190611ba1565b602060405180830381600087803b158015610c3757600080fd5b505af1158015610c4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6f91906119a1565b14610c8c5760405162461bcd60e51b81526004016103a890611d68565b610cad8930610c9b848b61216d565b6001600160a01b03871692919061121c565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610cdc9190611b69565b60206040518083038186803b158015610cf457600080fd5b505afa158015610d08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2c91906119a1565b610d3691906121c4565b905081811015610d585760405162461bcd60e51b81526004016103a890611eb0565b896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b86604051610da792919061215f565b60405180910390a45060019998505050505050505050565b6001600160a01b031660009081526005602052604090205490565b6003546001600160a01b03163314610e045760405162461bcd60e51b81526004016103a890611f1e565b60038054600280546001600160a01b03199081166001600160a01b038416179091551690556040517f56a56c31bb3f318488e30872a32d64e9e9092a6a23043f6d9e9d71b2545e717290610e5c906000904290611bf9565b60405180910390a1565b6002546001600160a01b03163314610e905760405162461bcd60e51b81526004016103a890612104565b6001600160a01b038116610eb65760405162461bcd60e51b81526004016103a890611fc8565b600380546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab8329061075c9083904290611bf9565b6002546001600160a01b03163314610f2d5760405162461bcd60e51b81526004016103a890612104565b6109b3611523565b6002546001600160a01b031681565b67016345785d8a000081565b600660209081526000928352604080842090915290825290205460ff1681565b6000670de0b6b3a764000060015483610aa591906121a5565b600054610100900460ff1680610fa2575060005460ff16155b610fbe5760405162461bcd60e51b81526004016103a890611f6b565b600054610100900460ff16158015610fe9576000805460ff1961ff0019909116610100171660011790555b6001600160a01b03821661100f5760405162461bcd60e51b81526004016103a890612025565b67016345785d8a0000600154106110385760405162461bcd60e51b81526004016103a890611d9f565b6001839055600280546001600160a01b0319166001600160a01b038416179055801561106a576000805461ff00191690555b505050565b6001600160a01b038316600090815260056020526040812054801561115f576040516370a0823160e01b81526000906001600160a01b038716906370a08231906110bd903090600401611b69565b60206040518083038186803b1580156110d557600080fd5b505afa1580156110e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110d91906119a1565b90508061111a83876121a5565b6111249190612185565b92508380156111465750848261113a83866121a5565b6111449190612185565b105b156111595761115683600161216d565b92505b50611163565b8391505b509392505050565b611173610ada565b156111905760405162461bcd60e51b81526004016103a890611ee7565b82336001600160a01b03821614806111d057506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b6111ec5760405162461bcd60e51b81526004016103a890611f45565b6111f885858585611582565b5050505050565b600460209081526000928352604080842090915290825290205481565b6112a1846323b872dd60e01b85858560405160240161123d93929190611b7d565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611682565b50505050565b61106a8363a9059cbb60e01b848460405160240161123d929190611bf9565b60007f00000000000000000000000000000000000000000000000000000000000000006112f1611711565b141561131e57507f0000000000000000000000000000000000000000000000000000000000000000610a0a565b6113897f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611715565b9050610a0a565b611398610ada565b6113b45760405162461bcd60e51b81526004016103a890611d31565b6000805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6113e9611756565b604051610e5c9190611b69565b60006114006114fe565b6001600160a01b031614156114275760405162461bcd60e51b81526004016103a89061204c565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561146057600080fd5b505afa158015611474573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149891906119a1565b6114a0610ab6565b146114bd5760405162461bcd60e51b81526004016103a890611cee565b6114c68161175a565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc6114ef610ab6565b8260405161075c929190611c26565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b61152b610ada565b156115485760405162461bcd60e51b81526004016103a890611ee7565b6000805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113e9611756565b6001600160a01b0382166115a85760405162461bcd60e51b81526004016103a890611dc5565b6001600160a01b038085166000908152600460209081526040808320938716835292905220546115d99082906121c4565b6001600160a01b0385811660009081526004602090815260408083208885168452909152808220939093559084168152205461161690829061216d565b6001600160a01b0380861660008181526004602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f90611674908690611c1d565b60405180910390a450505050565b60006116d7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661177e9092919063ffffffff16565b80519091501561106a57808060200190518101906116f59190611985565b61106a5760405162461bcd60e51b81526004016103a8906120ba565b4690565b6000838383611722611711565b30604051602001611737959493929190611c71565b6040516020818303038152906040528051906020012090509392505050565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b606061178d8484600085611795565b949350505050565b6060824710156117b75760405162461bcd60e51b81526004016103a890611dfc565b6117c085611855565b6117dc5760405162461bcd60e51b81526004016103a890612083565b600080866001600160a01b031685876040516117f89190611b32565b60006040518083038185875af1925050503d8060008114611835576040519150601f19603f3d011682016040523d82523d6000602084013e61183a565b606091505b509150915061184a82828661185b565b979650505050505050565b3b151590565b6060831561186a575081610aaf565b82511561187a5782518084602001fd5b8160405162461bcd60e51b81526004016103a89190611cbb565b6000602082840312156118a5578081fd5b8135610aaf81612238565b600080604083850312156118c2578081fd5b82356118cd81612238565b915060208301356118dd81612238565b809150509250929050565b60008060008060008060c08789031215611900578182fd5b863561190b81612238565b9550602087013561191b81612238565b9450604087013561192b8161224d565b9350606087013560ff81168114611940578283fd5b9598949750929560808101359460a0909101359350915050565b6000806040838503121561196c578182fd5b823561197781612238565b946020939093013593505050565b600060208284031215611996578081fd5b8151610aaf8161224d565b6000602082840312156119b2578081fd5b5051919050565b600080604083850312156118c2578182fd5b600080600080608085870312156119e0578384fd5b84356119eb81612238565b935060208501356119fb81612238565b92506040850135611a0b81612238565b9396929550929360600135925050565b600080600060608486031215611a2f578283fd5b8335611a3a81612238565b9250602084013591506040840135611a518161224d565b809150509250925092565b600080600080600060808688031215611a73578081fd5b8535611a7e81612238565b94506020860135611a8e81612238565b935060408601359250606086013567ffffffffffffffff80821115611ab1578283fd5b818801915088601f830112611ac4578283fd5b813581811115611ad2578384fd5b896020828501011115611ae3578384fd5b9699959850939650602001949392505050565b600060208284031215611b07578081fd5b5035919050565b60008060408385031215611b20578182fd5b8235915060208301356118dd81612238565b60008251611b448184602087016121db565b9190910192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b95865260208601949094526001600160a01b039283166040860152911660608401521515608083015260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082528251806020840152611cda8160408501602087016121db565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b6020808252600c908201526b494e56414c49445f5241544560a01b604082015260600190565b60208082526019908201527f5641554c543a20494e56414c49445f544f5f4144445245535300000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526011908201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604082015260600190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526010908201527f494e56414c49445f4e45575f5445414d00000000000000000000000000000000604082015260600190565b6020808252600c908201526b696e76616c6964207261746560a01b604082015260600190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60208082526010908201527f494e56414c49445f434f4e545241435400000000000000000000000000000000604082015260600190565b918252602082015260400190565b6000821982111561218057612180612222565b500190565b6000826121a057634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156121bf576121bf612222565b500290565b6000828210156121d6576121d6612222565b500390565b60005b838110156121f65781810151838201526020016121de565b838111156112a15750506000910152565b600060001982141561221b5761221b612222565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146109e857600080fd5b80151581146109e857600080fdfea2646970667358221220b55541a69f72c244b306a47f83a5d32ec91c549457d4e59dc380254ac5cd2d4b64736f6c63430008010033";
