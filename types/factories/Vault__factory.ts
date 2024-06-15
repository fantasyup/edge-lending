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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vault> {
    return super.deploy(overrides || {}) as Promise<Vault>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
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
  "0x6101006040523480156200001257600080fd5b506000805462ff00001916905560408051808201825260018152603160f81b6020918201528151808301909252600c82526b576172705661756c7420763160a01b9101527fa40fef20e589d79043a3159d07cb3250ae0cc1485bcb2d436b4b7dc47d197c5c60808190527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660a081905290620000d07f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8284620000e9565b60c052620000dd6200012e565b60e052506200015e9050565b6000838383620000f86200012e565b306040516020016200010f95949392919062000132565b6040516020818303038152906040528051906020012090509392505050565b4690565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b60805160a05160c05160e051612492620001986000396000611476015260006114a601526000611511015260006114f001526124926000f3fe608060405234801561001057600080fd5b50600436106101ce5760003560e01c80635c975abb11610104578063c6b45dfa116100a2578063da35a26f11610071578063da35a26f14610369578063da5139ca1461037c578063f18d03cc1461038f578063f7888aec146103a2576101ce565b8063c6b45dfa14610333578063d4ee1d901461033b578063d728e00514610343578063d9d98ce414610356576101ce565b80637372e9be116100de5780637372e9be1461030857806379ba50971461031b5780638456cb59146103235780638da5cb5b1461032b576101ce565b80635c975abb146102cd5780635cffe9de146102e2578063613255ab146102f5576101ce565b80633f4ba83a1161017157806350d75d251161014b57806350d75d25146102955780635299493b146102aa57806352d1902d146102bd57806354fd4d50146102c5576101ce565b80633f4ba83a14610267578063469519541461026f5780634ffe34db14610282576101ce565b80630b620b81116101ad5780630b620b81146102245780631e43a7a1146102375780631fd1ffde1461023f5780633f21c1b414610254576101ce565b8062f5ee4d146101d35780630284c3f5146101fc57806306fdde031461020f575b600080fd5b6101e66101e1366004611a95565b6103b5565b6040516101f39190611e1e565b60405180910390f35b6101e661020a366004611bcc565b6103c7565b6102176105b1565b6040516101f39190611ebc565b6101e6610232366004611bcc565b6105d9565b6101e66107ab565b61025261024d366004611cf7565b6107b1565b005b610252610262366004611ae9565b610842565b610252610a5c565b61025261027d366004611a95565b610a90565b6101e6610290366004611a95565b610ac6565b61029d610ad8565b6040516101f39190611d6a565b6101e66102b8366004611b5b565b610ae8565b6101e6610b91565b610217610bb5565b6102d5610bd2565b6040516101f39190611e13565b6102d56102f0366004611c5d565b610be1565b6101e6610303366004611a95565b610eb7565b610252610316366004611a95565b610ed2565b610252610f6f565b610252610ffb565b61029d61102d565b6101e661103c565b61029d611048565b6102d5610351366004611ab1565b611057565b6101e6610364366004611b5b565b611077565b610252610377366004611d0f565b611090565b6101e661038a366004611c1c565b611176565b61025261039d366004611bcc565b611272565b6101e66103b0366004611bba565b61133a565b60076020526000908152604090205481565b60006103f260405180604001604052806008815260200167696e20706175736560c01b815250611357565b6104026103fd610bd2565b61139a565b61040a610bd2565b156104305760405162461bcd60e51b81526004016104279061211f565b60405180910390fd5b83336001600160a01b038216148061047057506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b61048c5760405162461bcd60e51b81526004016104279061217d565b6001600160a01b0384166104b25760405162461bcd60e51b81526004016104279061207a565b6104be86846000611176565b91506104d56001600160a01b0387168630866113dd565b6001600160a01b0380871660009081526004602090815260408083209388168352929052205461050690839061236e565b6001600160a01b038088166000818152600460209081526040808320948a16835293815283822094909455908152600590925290205461054790839061236e565b6001600160a01b03808816600081815260056020526040908190209390935591518682169291881691907f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d59906105a09088908890612360565b60405180910390a450949350505050565b6040518060400160405280600c81526020016b576172705661756c7420763160a01b81525081565b600061060460405180604001604052806008815260200167696e20706175736560c01b815250611357565b61060f6103fd610bd2565b610617610bd2565b156106345760405162461bcd60e51b81526004016104279061211f565b83336001600160a01b038216148061067457506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b6106905760405162461bcd60e51b81526004016104279061217d565b6001600160a01b0384166106b65760405162461bcd60e51b81526004016104279061207a565b6106c08684610ae8565b6001600160a01b038088166000908152600460209081526040808320938a16835292905220549092506106f49084906123c5565b6001600160a01b038088166000818152600460209081526040808320948b1683529381528382209490945590815260059092529020546107359084906123c5565b6001600160a01b03871660008181526005602052604090209190915561075c908584611453565b836001600160a01b0316856001600160a01b0316876001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db86866040516105a0929190612360565b60015481565b6002546001600160a01b031633146107db5760405162461bcd60e51b815260040161042790612305565b67016345785d8a000081106108025760405162461bcd60e51b815260040161042790612200565b60018190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be8190610837908390611e1e565b60405180910390a150565b6001600160a01b0385166108685760405162461bcd60e51b815260040161042790612329565b6000610872611472565b7fe8879d0159a5862e68322a449d14dcfb21ad39e0c3dc66f88aff16b87aa27eae866108be577f31d77d35dcd597e2453861d123e3d7ee551c84d42d8d97544835a74f1ccb251b6108e0565b7f9d3cc82da8126179611840997002f7d09633ad258b9c11d6e1dccc7e1ad477415b6001600160a01b038a16600090815260076020526040812080548c928c928c929161090a83612408565b9190505560405160200161092396959493929190611e3e565b6040516020818303038152906040528051906020012060405160200161094a929190611d4f565b6040516020818303038152906040528051906020012090506000600182868686604051600081526020016040526040516109879493929190611e9e565b6020604051602081039080840390855afa1580156109a9573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b0316146109e65760405162461bcd60e51b815260040161042790612043565b6001600160a01b038881166000818152600660209081526040808320948c168084529490915290819020805460ff19168a1515179055517f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c590610a4a908a90611e13565b60405180910390a35050505050505050565b6002546001600160a01b03163314610a865760405162461bcd60e51b815260040161042790612305565b610a8e61153c565b565b6002546001600160a01b03163314610aba5760405162461bcd60e51b815260040161042790612305565b610ac3816115a2565b50565b60056020526000908152604090205481565b6000610ae26116aa565b90505b90565b6001600160a01b0382166000818152600560205260408082205490516370a0823160e01b8152919290916370a0823190610b26903090600401611d6a565b60206040518083038186803b158015610b3e57600080fd5b505afa158015610b52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b769190611ba2565b610b8090846123a6565b610b8a9190612386565b9392505050565b7f789f0daca1cd17baa821e8d7454225d50b9f3e7c22acb67c2b2fff4f686a128290565b604051806040016040528060018152602001603160f81b81525081565b60005462010000900460ff1690565b6001600160a01b038416600090815260056020526040812054841115610c195760405162461bcd60e51b8152600401610427906120b1565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610c4a903090600401611d6a565b60206040518083038186803b158015610c6257600080fd5b505afa158015610c76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9a9190611ba2565b9050610cb06001600160a01b0383168988611453565b6000610cbc8888611077565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610d1596959493929190611da2565b602060405180830381600087803b158015610d2f57600080fd5b505af1158015610d43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d679190611ba2565b14610d845760405162461bcd60e51b815260040161042790611f69565b610da58930610d93848b61236e565b6001600160a01b0387169291906113dd565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610dd49190611d6a565b60206040518083038186803b158015610dec57600080fd5b505afa158015610e00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e249190611ba2565b610e2e91906123c5565b905081811015610e505760405162461bcd60e51b8152600401610427906120e8565b896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b86604051610e9f929190612360565b60405180910390a45060019998505050505050505050565b6001600160a01b031660009081526005602052604090205490565b6002546001600160a01b03163314610efc5760405162461bcd60e51b815260040161042790612305565b6001600160a01b038116610f225760405162461bcd60e51b815260040161042790611fc6565b600380546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab832906108379083904290611dfa565b6003546001600160a01b03163314610f995760405162461bcd60e51b815260040161042790612156565b60038054600280546001600160a01b03199081166001600160a01b038416179091551690556040517f56a56c31bb3f318488e30872a32d64e9e9092a6a23043f6d9e9d71b2545e717290610ff1906000904290611dfa565b60405180910390a1565b6002546001600160a01b031633146110255760405162461bcd60e51b815260040161042790612305565b610a8e6116cf565b6002546001600160a01b031681565b67016345785d8a000081565b6003546001600160a01b031681565b600660209081526000928352604080842090915290825290205460ff1681565b6000670de0b6b3a764000060015483610b8091906123a6565b600054610100900460ff16806110a9575060005460ff16155b6110c55760405162461bcd60e51b8152600401610427906121a3565b600054610100900460ff161580156110f0576000805460ff1961ff0019909116610100171660011790555b6001600160a01b0382166111165760405162461bcd60e51b815260040161042790612226565b67016345785d8a00006001541061113f5760405162461bcd60e51b815260040161042790611fa0565b6001839055600280546001600160a01b0319166001600160a01b0384161790558015611171576000805461ff00191690555b505050565b6001600160a01b0383166000908152600560205260408120548015611266576040516370a0823160e01b81526000906001600160a01b038716906370a08231906111c4903090600401611d6a565b60206040518083038186803b1580156111dc57600080fd5b505afa1580156111f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112149190611ba2565b90508061122183876123a6565b61122b9190612386565b925083801561124d5750848261124183866123a6565b61124b9190612386565b105b156112605761125d83600161236e565b92505b5061126a565b8391505b509392505050565b61129b60405180604001604052806008815260200167696e20706175736560c01b815250611357565b6112a66103fd610bd2565b6112ae610bd2565b156112cb5760405162461bcd60e51b81526004016104279061211f565b82336001600160a01b038216148061130b57506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b6113275760405162461bcd60e51b81526004016104279061217d565b61133385858585611762565b5050505050565b600460209081526000928352604080842090915290825290205481565b610ac38160405160240161136b9190611ebc565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052611862565b610ac3816040516024016113ae9190611e13565b60408051601f198184030181529190526020810180516001600160e01b03166332458eed60e01b179052611862565b61144d846323b872dd60e01b8585856040516024016113fe93929190611d7e565b60408051601f198184030181529190526020810180516001600160e01b03167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611883565b50505050565b6111718363a9059cbb60e01b84846040516024016113fe929190611dfa565b60007f000000000000000000000000000000000000000000000000000000000000000061149d611912565b14156114ca57507f0000000000000000000000000000000000000000000000000000000000000000610ae5565b6115357f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611916565b9050610ae5565b611544610bd2565b6115605760405162461bcd60e51b815260040161042790611f32565b6000805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611595611957565b604051610ff19190611d6a565b60006115ac6116aa565b6001600160a01b031614156115d35760405162461bcd60e51b81526004016104279061224d565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561160c57600080fd5b505afa158015611620573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116449190611ba2565b61164c610b91565b146116695760405162461bcd60e51b815260040161042790611eef565b6116728161195b565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc61169b610b91565b82604051610837929190611e27565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6116f860405180604001604052806008815260200167696e20706175736560c01b815250611357565b6117036103fd610bd2565b61170b610bd2565b156117285760405162461bcd60e51b81526004016104279061211f565b6000805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611595611957565b6001600160a01b0382166117885760405162461bcd60e51b81526004016104279061207a565b6001600160a01b038085166000908152600460209081526040808320938716835292905220546117b99082906123c5565b6001600160a01b038581166000908152600460209081526040808320888516845290915280822093909355908416815220546117f690829061236e565b6001600160a01b0380861660008181526004602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f90611854908690611e1e565b60405180910390a450505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60006118d8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661197f9092919063ffffffff16565b80519091501561117157808060200190518101906118f69190611b86565b6111715760405162461bcd60e51b8152600401610427906122bb565b4690565b6000838383611923611912565b30604051602001611938959493929190611e72565b6040516020818303038152906040528051906020012090509392505050565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b606061198e8484600085611996565b949350505050565b6060824710156119b85760405162461bcd60e51b815260040161042790611ffd565b6119c185611a56565b6119dd5760405162461bcd60e51b815260040161042790612284565b600080866001600160a01b031685876040516119f99190611d33565b60006040518083038185875af1925050503d8060008114611a36576040519150601f19603f3d011682016040523d82523d6000602084013e611a3b565b606091505b5091509150611a4b828286611a5c565b979650505050505050565b3b151590565b60608315611a6b575081610b8a565b825115611a7b5782518084602001fd5b8160405162461bcd60e51b81526004016104279190611ebc565b600060208284031215611aa6578081fd5b8135610b8a81612439565b60008060408385031215611ac3578081fd5b8235611ace81612439565b91506020830135611ade81612439565b809150509250929050565b60008060008060008060c08789031215611b01578182fd5b8635611b0c81612439565b95506020870135611b1c81612439565b94506040870135611b2c8161244e565b9350606087013560ff81168114611b41578283fd5b9598949750929560808101359460a0909101359350915050565b60008060408385031215611b6d578182fd5b8235611b7881612439565b946020939093013593505050565b600060208284031215611b97578081fd5b8151610b8a8161244e565b600060208284031215611bb3578081fd5b5051919050565b60008060408385031215611ac3578182fd5b60008060008060808587031215611be1578384fd5b8435611bec81612439565b93506020850135611bfc81612439565b92506040850135611c0c81612439565b9396929550929360600135925050565b600080600060608486031215611c30578283fd5b8335611c3b81612439565b9250602084013591506040840135611c528161244e565b809150509250925092565b600080600080600060808688031215611c74578081fd5b8535611c7f81612439565b94506020860135611c8f81612439565b935060408601359250606086013567ffffffffffffffff80821115611cb2578283fd5b818801915088601f830112611cc5578283fd5b813581811115611cd3578384fd5b896020828501011115611ce4578384fd5b9699959850939650602001949392505050565b600060208284031215611d08578081fd5b5035919050565b60008060408385031215611d21578182fd5b823591506020830135611ade81612439565b60008251611d458184602087016123dc565b9190910192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b95865260208601949094526001600160a01b039283166040860152911660608401521515608083015260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082528251806020840152611edb8160408501602087016123dc565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b6020808252600c908201526b494e56414c49445f5241544560a01b604082015260600190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526011908201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f544f5f414444524553530000000000000000000000000000604082015260600190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252600c908201526b696e76616c6964207261746560a01b604082015260600190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60208082526010908201527f494e56414c49445f434f4e545241435400000000000000000000000000000000604082015260600190565b918252602082015260400190565b6000821982111561238157612381612423565b500190565b6000826123a157634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156123c0576123c0612423565b500290565b6000828210156123d7576123d7612423565b500390565b60005b838110156123f75781810151838201526020016123df565b8381111561144d5750506000910152565b600060001982141561241c5761241c612423565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610ac357600080fd5b8015158114610ac357600080fdfea2646970667358221220272c45e006c61775f9230fe468db2d3c4fcfdea03a042099a4cc374da85b173464736f6c63430008010033";
