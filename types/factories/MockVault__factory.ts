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
  "0x6101006040523480156200001257600080fd5b506000805462ff00001916905560408051808201825260018152603160f81b6020918201528151808301909252600c82526b576172705661756c7420763160a01b9101527fa40fef20e589d79043a3159d07cb3250ae0cc1485bcb2d436b4b7dc47d197c5c60808190527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660a081905290620000d07f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8284620000e9565b60c052620000dd6200012e565b60e052506200015e9050565b6000838383620000f86200012e565b306040516020016200010f95949392919062000132565b6040516020818303038152906040528051906020012090509392505050565b4690565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b60805160a05160c05160e0516125146200019860003960006114f801526000611528015260006115930152600061157201526125146000f3fe608060405234801561001057600080fd5b50600436106101d95760003560e01c80635c975abb11610104578063c6b45dfa116100a2578063da35a26f11610071578063da35a26f14610387578063da5139ca1461039a578063f18d03cc146103ad578063f7888aec146103c0576101d9565b8063c6b45dfa14610351578063d4ee1d9014610359578063d728e00514610361578063d9d98ce414610374576101d9565b80637372e9be116100de5780637372e9be1461032657806379ba5097146103395780638456cb59146103415780638da5cb5b14610349576101d9565b80635c975abb146102eb5780635cffe9de14610300578063613255ab14610313576101d9565b80633f21c1b41161017c57806350d75d251161014b57806350d75d25146102b35780635299493b146102c857806352d1902d146102db57806354fd4d50146102e3576101d9565b80633f21c1b4146102725780633f4ba83a14610285578063469519541461028d5780634ffe34db146102a0576101d9565b80630b620b81116101b85780630b620b811461022f5780631583d56c146102425780631e43a7a1146102575780631fd1ffde1461025f576101d9565b8062f5ee4d146101de5780630284c3f51461020757806306fdde031461021a575b600080fd5b6101f16101ec366004611b17565b6103d3565b6040516101fe9190611ea0565b60405180910390f35b6101f1610215366004611c4e565b6103e5565b6102226105cf565b6040516101fe9190611f3e565b6101f161023d366004611c4e565b6105f7565b610255610250366004611bdd565b6107c9565b005b6101f161082d565b61025561026d366004611d79565b610833565b610255610280366004611b6b565b6108c4565b610255610ade565b61025561029b366004611b17565b610b12565b6101f16102ae366004611b17565b610b48565b6102bb610b5a565b6040516101fe9190611dec565b6101f16102d6366004611bdd565b610b6a565b6101f1610c13565b610222610c37565b6102f3610c54565b6040516101fe9190611e95565b6102f361030e366004611cdf565b610c63565b6101f1610321366004611b17565b610f39565b610255610334366004611b17565b610f54565b610255610ff1565b61025561107d565b6102bb6110af565b6101f16110be565b6102bb6110ca565b6102f361036f366004611b33565b6110d9565b6101f1610382366004611bdd565b6110f9565b610255610395366004611d91565b611112565b6101f16103a8366004611c9e565b6111f8565b6102556103bb366004611c4e565b6112f4565b6101f16103ce366004611c3c565b6113bc565b60076020526000908152604090205481565b600061041060405180604001604052806008815260200167696e20706175736560c01b8152506113d9565b61042061041b610c54565b61141c565b610428610c54565b1561044e5760405162461bcd60e51b8152600401610445906121a1565b60405180910390fd5b83336001600160a01b038216148061048e57506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b6104aa5760405162461bcd60e51b8152600401610445906121ff565b6001600160a01b0384166104d05760405162461bcd60e51b8152600401610445906120fc565b6104dc868460006111f8565b91506104f36001600160a01b03871686308661145f565b6001600160a01b038087166000908152600460209081526040808320938816835292905220546105249083906123f0565b6001600160a01b038088166000818152600460209081526040808320948a1683529381528382209490945590815260059092529020546105659083906123f0565b6001600160a01b03808816600081815260056020526040908190209390935591518682169291881691907f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d59906105be90889088906123e2565b60405180910390a450949350505050565b6040518060400160405280600c81526020016b576172705661756c7420763160a01b81525081565b600061062260405180604001604052806008815260200167696e20706175736560c01b8152506113d9565b61062d61041b610c54565b610635610c54565b156106525760405162461bcd60e51b8152600401610445906121a1565b83336001600160a01b038216148061069257506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b6106ae5760405162461bcd60e51b8152600401610445906121ff565b6001600160a01b0384166106d45760405162461bcd60e51b8152600401610445906120fc565b6106de8684610b6a565b6001600160a01b038088166000908152600460209081526040808320938a1683529290522054909250610712908490612447565b6001600160a01b038088166000818152600460209081526040808320948b168352938152838220949094559081526005909252902054610753908490612447565b6001600160a01b03871660008181526005602052604090209190915561077a9085846114d5565b836001600160a01b0316856001600160a01b0316876001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db86866040516105be9291906123e2565b6040516340c10f1960e01b81526001600160a01b038316906340c10f19906107f79030908590600401611e7c565b600060405180830381600087803b15801561081157600080fd5b505af1158015610825573d6000803e3d6000fd5b505050505050565b60015481565b6002546001600160a01b0316331461085d5760405162461bcd60e51b815260040161044590612387565b67016345785d8a000081106108845760405162461bcd60e51b815260040161044590612282565b60018190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be81906108b9908390611ea0565b60405180910390a150565b6001600160a01b0385166108ea5760405162461bcd60e51b8152600401610445906123ab565b60006108f46114f4565b7fe8879d0159a5862e68322a449d14dcfb21ad39e0c3dc66f88aff16b87aa27eae86610940577f31d77d35dcd597e2453861d123e3d7ee551c84d42d8d97544835a74f1ccb251b610962565b7f9d3cc82da8126179611840997002f7d09633ad258b9c11d6e1dccc7e1ad477415b6001600160a01b038a16600090815260076020526040812080548c928c928c929161098c8361248a565b919050556040516020016109a596959493929190611ec0565b604051602081830303815290604052805190602001206040516020016109cc929190611dd1565b604051602081830303815290604052805190602001209050600060018286868660405160008152602001604052604051610a099493929190611f20565b6020604051602081039080840390855afa158015610a2b573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b031614610a685760405162461bcd60e51b8152600401610445906120c5565b6001600160a01b038881166000818152600660209081526040808320948c168084529490915290819020805460ff19168a1515179055517f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c590610acc908a90611e95565b60405180910390a35050505050505050565b6002546001600160a01b03163314610b085760405162461bcd60e51b815260040161044590612387565b610b106115be565b565b6002546001600160a01b03163314610b3c5760405162461bcd60e51b815260040161044590612387565b610b4581611624565b50565b60056020526000908152604090205481565b6000610b6461172c565b90505b90565b6001600160a01b0382166000818152600560205260408082205490516370a0823160e01b8152919290916370a0823190610ba8903090600401611dec565b60206040518083038186803b158015610bc057600080fd5b505afa158015610bd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf89190611c24565b610c029084612428565b610c0c9190612408565b9392505050565b7f789f0daca1cd17baa821e8d7454225d50b9f3e7c22acb67c2b2fff4f686a128290565b604051806040016040528060018152602001603160f81b81525081565b60005462010000900460ff1690565b6001600160a01b038416600090815260056020526040812054841115610c9b5760405162461bcd60e51b815260040161044590612133565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610ccc903090600401611dec565b60206040518083038186803b158015610ce457600080fd5b505afa158015610cf8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1c9190611c24565b9050610d326001600160a01b03831689886114d5565b6000610d3e88886110f9565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610d9796959493929190611e24565b602060405180830381600087803b158015610db157600080fd5b505af1158015610dc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de99190611c24565b14610e065760405162461bcd60e51b815260040161044590611feb565b610e278930610e15848b6123f0565b6001600160a01b03871692919061145f565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610e569190611dec565b60206040518083038186803b158015610e6e57600080fd5b505afa158015610e82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea69190611c24565b610eb09190612447565b905081811015610ed25760405162461bcd60e51b81526004016104459061216a565b896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b86604051610f219291906123e2565b60405180910390a45060019998505050505050505050565b6001600160a01b031660009081526005602052604090205490565b6002546001600160a01b03163314610f7e5760405162461bcd60e51b815260040161044590612387565b6001600160a01b038116610fa45760405162461bcd60e51b815260040161044590612048565b600380546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab832906108b99083904290611e7c565b6003546001600160a01b0316331461101b5760405162461bcd60e51b8152600401610445906121d8565b60038054600280546001600160a01b03199081166001600160a01b038416179091551690556040517f56a56c31bb3f318488e30872a32d64e9e9092a6a23043f6d9e9d71b2545e717290611073906000904290611e7c565b60405180910390a1565b6002546001600160a01b031633146110a75760405162461bcd60e51b815260040161044590612387565b610b10611751565b6002546001600160a01b031681565b67016345785d8a000081565b6003546001600160a01b031681565b600660209081526000928352604080842090915290825290205460ff1681565b6000670de0b6b3a764000060015483610c029190612428565b600054610100900460ff168061112b575060005460ff16155b6111475760405162461bcd60e51b815260040161044590612225565b600054610100900460ff16158015611172576000805460ff1961ff0019909116610100171660011790555b6001600160a01b0382166111985760405162461bcd60e51b8152600401610445906122a8565b67016345785d8a0000600154106111c15760405162461bcd60e51b815260040161044590612022565b6001839055600280546001600160a01b0319166001600160a01b03841617905580156111f3576000805461ff00191690555b505050565b6001600160a01b03831660009081526005602052604081205480156112e8576040516370a0823160e01b81526000906001600160a01b038716906370a0823190611246903090600401611dec565b60206040518083038186803b15801561125e57600080fd5b505afa158015611272573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112969190611c24565b9050806112a38387612428565b6112ad9190612408565b92508380156112cf575084826112c38386612428565b6112cd9190612408565b105b156112e2576112df8360016123f0565b92505b506112ec565b8391505b509392505050565b61131d60405180604001604052806008815260200167696e20706175736560c01b8152506113d9565b61132861041b610c54565b611330610c54565b1561134d5760405162461bcd60e51b8152600401610445906121a1565b82336001600160a01b038216148061138d57506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b6113a95760405162461bcd60e51b8152600401610445906121ff565b6113b5858585856117e4565b5050505050565b600460209081526000928352604080842090915290825290205481565b610b45816040516024016113ed9190611f3e565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526118e4565b610b45816040516024016114309190611e95565b60408051601f198184030181529190526020810180516001600160e01b03166332458eed60e01b1790526118e4565b6114cf846323b872dd60e01b85858560405160240161148093929190611e00565b60408051601f198184030181529190526020810180516001600160e01b03167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611905565b50505050565b6111f38363a9059cbb60e01b8484604051602401611480929190611e7c565b60007f000000000000000000000000000000000000000000000000000000000000000061151f611994565b141561154c57507f0000000000000000000000000000000000000000000000000000000000000000610b67565b6115b77f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611998565b9050610b67565b6115c6610c54565b6115e25760405162461bcd60e51b815260040161044590611fb4565b6000805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6116176119d9565b6040516110739190611dec565b600061162e61172c565b6001600160a01b031614156116555760405162461bcd60e51b8152600401610445906122cf565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561168e57600080fd5b505afa1580156116a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c69190611c24565b6116ce610c13565b146116eb5760405162461bcd60e51b815260040161044590611f71565b6116f4816119dd565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc61171d610c13565b826040516108b9929190611ea9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b61177a60405180604001604052806008815260200167696e20706175736560c01b8152506113d9565b61178561041b610c54565b61178d610c54565b156117aa5760405162461bcd60e51b8152600401610445906121a1565b6000805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116176119d9565b6001600160a01b03821661180a5760405162461bcd60e51b8152600401610445906120fc565b6001600160a01b0380851660009081526004602090815260408083209387168352929052205461183b908290612447565b6001600160a01b038581166000908152600460209081526040808320888516845290915280822093909355908416815220546118789082906123f0565b6001600160a01b0380861660008181526004602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f906118d6908690611ea0565b60405180910390a450505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600061195a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611a019092919063ffffffff16565b8051909150156111f357808060200190518101906119789190611c08565b6111f35760405162461bcd60e51b81526004016104459061233d565b4690565b60008383836119a5611994565b306040516020016119ba959493929190611ef4565b6040516020818303038152906040528051906020012090509392505050565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6060611a108484600085611a18565b949350505050565b606082471015611a3a5760405162461bcd60e51b81526004016104459061207f565b611a4385611ad8565b611a5f5760405162461bcd60e51b815260040161044590612306565b600080866001600160a01b03168587604051611a7b9190611db5565b60006040518083038185875af1925050503d8060008114611ab8576040519150601f19603f3d011682016040523d82523d6000602084013e611abd565b606091505b5091509150611acd828286611ade565b979650505050505050565b3b151590565b60608315611aed575081610c0c565b825115611afd5782518084602001fd5b8160405162461bcd60e51b81526004016104459190611f3e565b600060208284031215611b28578081fd5b8135610c0c816124bb565b60008060408385031215611b45578081fd5b8235611b50816124bb565b91506020830135611b60816124bb565b809150509250929050565b60008060008060008060c08789031215611b83578182fd5b8635611b8e816124bb565b95506020870135611b9e816124bb565b94506040870135611bae816124d0565b9350606087013560ff81168114611bc3578283fd5b9598949750929560808101359460a0909101359350915050565b60008060408385031215611bef578182fd5b8235611bfa816124bb565b946020939093013593505050565b600060208284031215611c19578081fd5b8151610c0c816124d0565b600060208284031215611c35578081fd5b5051919050565b60008060408385031215611b45578182fd5b60008060008060808587031215611c63578384fd5b8435611c6e816124bb565b93506020850135611c7e816124bb565b92506040850135611c8e816124bb565b9396929550929360600135925050565b600080600060608486031215611cb2578283fd5b8335611cbd816124bb565b9250602084013591506040840135611cd4816124d0565b809150509250925092565b600080600080600060808688031215611cf6578283fd5b8535611d01816124bb565b94506020860135611d11816124bb565b935060408601359250606086013567ffffffffffffffff80821115611d34578283fd5b818801915088601f830112611d47578283fd5b813581811115611d55578384fd5b896020828501011115611d66578384fd5b9699959850939650602001949392505050565b600060208284031215611d8a578081fd5b5035919050565b60008060408385031215611da3578182fd5b823591506020830135611b60816124bb565b60008251611dc781846020870161245e565b9190910192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b95865260208601949094526001600160a01b039283166040860152911660608401521515608083015260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082528251806020840152611f5d81604085016020870161245e565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b6020808252600c908201526b494e56414c49445f5241544560a01b604082015260600190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526011908201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f544f5f414444524553530000000000000000000000000000604082015260600190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252600c908201526b696e76616c6964207261746560a01b604082015260600190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60208082526010908201527f494e56414c49445f434f4e545241435400000000000000000000000000000000604082015260600190565b918252602082015260400190565b60008219821115612403576124036124a5565b500190565b60008261242357634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615612442576124426124a5565b500290565b600082821015612459576124596124a5565b500390565b60005b83811015612479578181015183820152602001612461565b838111156114cf5750506000910152565b600060001982141561249e5761249e6124a5565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610b4557600080fd5b8015158114610b4557600080fdfea264697066735822122097d31bbe062ca1c4a486981a1a6521a419330a677f1c2be2d3d86b72a3d5e59e64736f6c63430008010033";
