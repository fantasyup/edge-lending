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
  "0x6101006040523480156200001257600080fd5b506000805462ff00001916905560408051808201825260018152603160f81b6020918201528151808301909252600c82526b576172705661756c7420763160a01b9101527fa40fef20e589d79043a3159d07cb3250ae0cc1485bcb2d436b4b7dc47d197c5c60808190527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660a081905290620000d07f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8284620000e9565b60c052620000dd6200012e565b60e052506200015e9050565b6000838383620000f86200012e565b306040516020016200010f95949392919062000132565b6040516020818303038152906040528051906020012090509392505050565b4690565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b60805160a05160c05160e0516124a5620001986000396000611489015260006114b9015260006115240152600061150301526124a56000f3fe608060405234801561001057600080fd5b50600436106101d95760003560e01c80635cffe9de11610104578063d4ee1d90116100a2578063da5139ca11610071578063da5139ca14610387578063f18d03cc1461039a578063f7888aec146103ad578063f99a38c4146103c0576101d9565b8063d4ee1d9014610346578063d728e0051461034e578063d9d98ce414610361578063da35a26f14610374576101d9565b806379ba5097116100de57806379ba5097146103265780638456cb591461032e5780638da5cb5b14610336578063c6b45dfa1461033e576101d9565b80635cffe9de146102ed578063613255ab146103005780637372e9be14610313576101d9565b80633f4ba83a1161017c5780635299493b1161014b5780635299493b146102b557806352d1902d146102c857806354fd4d50146102d05780635c975abb146102d8576101d9565b80633f4ba83a14610272578063469519541461027a5780634ffe34db1461028d57806350d75d25146102a0576101d9565b80630b620b81116101b85780630b620b811461022f5780631e43a7a1146102425780631fd1ffde1461024a5780633f21c1b41461025f576101d9565b8062f5ee4d146101de5780630284c3f51461020757806306fdde031461021a575b600080fd5b6101f16101ec366004611aa8565b6103c8565b6040516101fe9190611e31565b60405180910390f35b6101f1610215366004611bdf565b6103da565b6102226105c4565b6040516101fe9190611ecf565b6101f161023d366004611bdf565b6105ec565b6101f16107be565b61025d610258366004611d0a565b6107c4565b005b61025d61026d366004611afc565b610855565b61025d610a6f565b61025d610288366004611aa8565b610aa3565b6101f161029b366004611aa8565b610ad9565b6102a8610aeb565b6040516101fe9190611d7d565b6101f16102c3366004611b6e565b610afb565b6101f1610ba4565b610222610bc8565b6102e0610be5565b6040516101fe9190611e26565b6102e06102fb366004611c70565b610bf4565b6101f161030e366004611aa8565b610eca565b61025d610321366004611aa8565b610ee5565b61025d610f82565b61025d61100e565b6102a8611040565b6101f161104f565b6102a861105b565b6102e061035c366004611ac4565b61106a565b6101f161036f366004611b6e565b61108a565b61025d610382366004611d22565b6110a3565b6101f1610395366004611c2f565b611189565b61025d6103a8366004611bdf565b611285565b6101f16103bb366004611bcd565b61134d565b61025d610aa1565b60076020526000908152604090205481565b600061040560405180604001604052806008815260200167696e20706175736560c01b81525061136a565b610415610410610be5565b6113ad565b61041d610be5565b156104435760405162461bcd60e51b815260040161043a90612132565b60405180910390fd5b83336001600160a01b038216148061048357506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b61049f5760405162461bcd60e51b815260040161043a90612190565b6001600160a01b0384166104c55760405162461bcd60e51b815260040161043a9061208d565b6104d186846000611189565b91506104e86001600160a01b0387168630866113f0565b6001600160a01b03808716600090815260046020908152604080832093881683529290522054610519908390612381565b6001600160a01b038088166000818152600460209081526040808320948a16835293815283822094909455908152600590925290205461055a908390612381565b6001600160a01b03808816600081815260056020526040908190209390935591518682169291881691907f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d59906105b39088908890612373565b60405180910390a450949350505050565b6040518060400160405280600c81526020016b576172705661756c7420763160a01b81525081565b600061061760405180604001604052806008815260200167696e20706175736560c01b81525061136a565b610622610410610be5565b61062a610be5565b156106475760405162461bcd60e51b815260040161043a90612132565b83336001600160a01b038216148061068757506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b6106a35760405162461bcd60e51b815260040161043a90612190565b6001600160a01b0384166106c95760405162461bcd60e51b815260040161043a9061208d565b6106d38684610afb565b6001600160a01b038088166000908152600460209081526040808320938a16835292905220549092506107079084906123d8565b6001600160a01b038088166000818152600460209081526040808320948b1683529381528382209490945590815260059092529020546107489084906123d8565b6001600160a01b03871660008181526005602052604090209190915561076f908584611466565b836001600160a01b0316856001600160a01b0316876001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db86866040516105b3929190612373565b60015481565b6002546001600160a01b031633146107ee5760405162461bcd60e51b815260040161043a90612318565b67016345785d8a000081106108155760405162461bcd60e51b815260040161043a90612213565b60018190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be819061084a908390611e31565b60405180910390a150565b6001600160a01b03851661087b5760405162461bcd60e51b815260040161043a9061233c565b6000610885611485565b7fe8879d0159a5862e68322a449d14dcfb21ad39e0c3dc66f88aff16b87aa27eae866108d1577f31d77d35dcd597e2453861d123e3d7ee551c84d42d8d97544835a74f1ccb251b6108f3565b7f9d3cc82da8126179611840997002f7d09633ad258b9c11d6e1dccc7e1ad477415b6001600160a01b038a16600090815260076020526040812080548c928c928c929161091d8361241b565b9190505560405160200161093696959493929190611e51565b6040516020818303038152906040528051906020012060405160200161095d929190611d62565b60405160208183030381529060405280519060200120905060006001828686866040516000815260200160405260405161099a9493929190611eb1565b6020604051602081039080840390855afa1580156109bc573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b0316146109f95760405162461bcd60e51b815260040161043a90612056565b6001600160a01b038881166000818152600660209081526040808320948c168084529490915290819020805460ff19168a1515179055517f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c590610a5d908a90611e26565b60405180910390a35050505050505050565b6002546001600160a01b03163314610a995760405162461bcd60e51b815260040161043a90612318565b610aa161154f565b565b6002546001600160a01b03163314610acd5760405162461bcd60e51b815260040161043a90612318565b610ad6816115b5565b50565b60056020526000908152604090205481565b6000610af56116bd565b90505b90565b6001600160a01b0382166000818152600560205260408082205490516370a0823160e01b8152919290916370a0823190610b39903090600401611d7d565b60206040518083038186803b158015610b5157600080fd5b505afa158015610b65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b899190611bb5565b610b9390846123b9565b610b9d9190612399565b9392505050565b7f789f0daca1cd17baa821e8d7454225d50b9f3e7c22acb67c2b2fff4f686a128290565b604051806040016040528060018152602001603160f81b81525081565b60005462010000900460ff1690565b6001600160a01b038416600090815260056020526040812054841115610c2c5760405162461bcd60e51b815260040161043a906120c4565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610c5d903090600401611d7d565b60206040518083038186803b158015610c7557600080fd5b505afa158015610c89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cad9190611bb5565b9050610cc36001600160a01b0383168988611466565b6000610ccf888861108a565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610d2896959493929190611db5565b602060405180830381600087803b158015610d4257600080fd5b505af1158015610d56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7a9190611bb5565b14610d975760405162461bcd60e51b815260040161043a90611f7c565b610db88930610da6848b612381565b6001600160a01b0387169291906113f0565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610de79190611d7d565b60206040518083038186803b158015610dff57600080fd5b505afa158015610e13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e379190611bb5565b610e4191906123d8565b905081811015610e635760405162461bcd60e51b815260040161043a906120fb565b896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b86604051610eb2929190612373565b60405180910390a45060019998505050505050505050565b6001600160a01b031660009081526005602052604090205490565b6002546001600160a01b03163314610f0f5760405162461bcd60e51b815260040161043a90612318565b6001600160a01b038116610f355760405162461bcd60e51b815260040161043a90611fd9565b600380546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab8329061084a9083904290611e0d565b6003546001600160a01b03163314610fac5760405162461bcd60e51b815260040161043a90612169565b60038054600280546001600160a01b03199081166001600160a01b038416179091551690556040517f56a56c31bb3f318488e30872a32d64e9e9092a6a23043f6d9e9d71b2545e717290611004906000904290611e0d565b60405180910390a1565b6002546001600160a01b031633146110385760405162461bcd60e51b815260040161043a90612318565b610aa16116e2565b6002546001600160a01b031681565b67016345785d8a000081565b6003546001600160a01b031681565b600660209081526000928352604080842090915290825290205460ff1681565b6000670de0b6b3a764000060015483610b9391906123b9565b600054610100900460ff16806110bc575060005460ff16155b6110d85760405162461bcd60e51b815260040161043a906121b6565b600054610100900460ff16158015611103576000805460ff1961ff0019909116610100171660011790555b6001600160a01b0382166111295760405162461bcd60e51b815260040161043a90612239565b67016345785d8a0000600154106111525760405162461bcd60e51b815260040161043a90611fb3565b6001839055600280546001600160a01b0319166001600160a01b0384161790558015611184576000805461ff00191690555b505050565b6001600160a01b0383166000908152600560205260408120548015611279576040516370a0823160e01b81526000906001600160a01b038716906370a08231906111d7903090600401611d7d565b60206040518083038186803b1580156111ef57600080fd5b505afa158015611203573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112279190611bb5565b90508061123483876123b9565b61123e9190612399565b92508380156112605750848261125483866123b9565b61125e9190612399565b105b1561127357611270836001612381565b92505b5061127d565b8391505b509392505050565b6112ae60405180604001604052806008815260200167696e20706175736560c01b81525061136a565b6112b9610410610be5565b6112c1610be5565b156112de5760405162461bcd60e51b815260040161043a90612132565b82336001600160a01b038216148061131e57506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b61133a5760405162461bcd60e51b815260040161043a90612190565b61134685858585611775565b5050505050565b600460209081526000928352604080842090915290825290205481565b610ad68160405160240161137e9190611ecf565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052611875565b610ad6816040516024016113c19190611e26565b60408051601f198184030181529190526020810180516001600160e01b03166332458eed60e01b179052611875565b611460846323b872dd60e01b85858560405160240161141193929190611d91565b60408051601f198184030181529190526020810180516001600160e01b03167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611896565b50505050565b6111848363a9059cbb60e01b8484604051602401611411929190611e0d565b60007f00000000000000000000000000000000000000000000000000000000000000006114b0611925565b14156114dd57507f0000000000000000000000000000000000000000000000000000000000000000610af8565b6115487f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611929565b9050610af8565b611557610be5565b6115735760405162461bcd60e51b815260040161043a90611f45565b6000805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6115a861196a565b6040516110049190611d7d565b60006115bf6116bd565b6001600160a01b031614156115e65760405162461bcd60e51b815260040161043a90612260565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561161f57600080fd5b505afa158015611633573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116579190611bb5565b61165f610ba4565b1461167c5760405162461bcd60e51b815260040161043a90611f02565b6116858161196e565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc6116ae610ba4565b8260405161084a929190611e3a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b61170b60405180604001604052806008815260200167696e20706175736560c01b81525061136a565b611716610410610be5565b61171e610be5565b1561173b5760405162461bcd60e51b815260040161043a90612132565b6000805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586115a861196a565b6001600160a01b03821661179b5760405162461bcd60e51b815260040161043a9061208d565b6001600160a01b038085166000908152600460209081526040808320938716835292905220546117cc9082906123d8565b6001600160a01b03858116600090815260046020908152604080832088851684529091528082209390935590841681522054611809908290612381565b6001600160a01b0380861660008181526004602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f90611867908690611e31565b60405180910390a450505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60006118eb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119929092919063ffffffff16565b80519091501561118457808060200190518101906119099190611b99565b6111845760405162461bcd60e51b815260040161043a906122ce565b4690565b6000838383611936611925565b3060405160200161194b959493929190611e85565b6040516020818303038152906040528051906020012090509392505050565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b60606119a184846000856119a9565b949350505050565b6060824710156119cb5760405162461bcd60e51b815260040161043a90612010565b6119d485611a69565b6119f05760405162461bcd60e51b815260040161043a90612297565b600080866001600160a01b03168587604051611a0c9190611d46565b60006040518083038185875af1925050503d8060008114611a49576040519150601f19603f3d011682016040523d82523d6000602084013e611a4e565b606091505b5091509150611a5e828286611a6f565b979650505050505050565b3b151590565b60608315611a7e575081610b9d565b825115611a8e5782518084602001fd5b8160405162461bcd60e51b815260040161043a9190611ecf565b600060208284031215611ab9578081fd5b8135610b9d8161244c565b60008060408385031215611ad6578081fd5b8235611ae18161244c565b91506020830135611af18161244c565b809150509250929050565b60008060008060008060c08789031215611b14578182fd5b8635611b1f8161244c565b95506020870135611b2f8161244c565b94506040870135611b3f81612461565b9350606087013560ff81168114611b54578283fd5b9598949750929560808101359460a0909101359350915050565b60008060408385031215611b80578182fd5b8235611b8b8161244c565b946020939093013593505050565b600060208284031215611baa578081fd5b8151610b9d81612461565b600060208284031215611bc6578081fd5b5051919050565b60008060408385031215611ad6578182fd5b60008060008060808587031215611bf4578384fd5b8435611bff8161244c565b93506020850135611c0f8161244c565b92506040850135611c1f8161244c565b9396929550929360600135925050565b600080600060608486031215611c43578283fd5b8335611c4e8161244c565b9250602084013591506040840135611c6581612461565b809150509250925092565b600080600080600060808688031215611c87578081fd5b8535611c928161244c565b94506020860135611ca28161244c565b935060408601359250606086013567ffffffffffffffff80821115611cc5578283fd5b818801915088601f830112611cd8578283fd5b813581811115611ce6578384fd5b896020828501011115611cf7578384fd5b9699959850939650602001949392505050565b600060208284031215611d1b578081fd5b5035919050565b60008060408385031215611d34578182fd5b823591506020830135611af18161244c565b60008251611d588184602087016123ef565b9190910192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b95865260208601949094526001600160a01b039283166040860152911660608401521515608083015260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082528251806020840152611eee8160408501602087016123ef565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b6020808252600c908201526b494e56414c49445f5241544560a01b604082015260600190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526011908201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f544f5f414444524553530000000000000000000000000000604082015260600190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252600c908201526b696e76616c6964207261746560a01b604082015260600190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60208082526010908201527f494e56414c49445f434f4e545241435400000000000000000000000000000000604082015260600190565b918252602082015260400190565b6000821982111561239457612394612436565b500190565b6000826123b457634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156123d3576123d3612436565b500290565b6000828210156123ea576123ea612436565b500390565b60005b8381101561240a5781810151838201526020016123f2565b838111156114605750506000910152565b600060001982141561242f5761242f612436565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610ad657600080fd5b8015158114610ad657600080fdfea26469706673582212203f86c3dd3ff2d5feaa363ddcfe110470892133c15f5e1484ecba8c053458f55a64736f6c63430008010033";
