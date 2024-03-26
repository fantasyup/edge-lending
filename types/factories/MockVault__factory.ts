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
  "0x6101006040523480156200001257600080fd5b5060408051808201825260048152630776172760e41b602080830191825283518085019094526001808552603160f81b918501919091526000805462ff0000191690558251929392849284926200006c9290919062000134565b5080516200008290600290602084019062000134565b508051602080830191909120835191840191909120608081905260a0829052620000ce7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8284620000eb565b60c052620000db62000130565b60e0525062000243945050505050565b6000838383620000fa62000130565b3060405160200162000111959493929190620001da565b6040516020818303038152906040528051906020012090509392505050565b4690565b828054620001429062000206565b90600052602060002090601f016020900481019282620001665760008555620001b1565b82601f106200018157805160ff1916838001178555620001b1565b82800160010185558215620001b1579182015b82811115620001b157825182559160200191906001019062000194565b50620001bf929150620001c3565b5090565b5b80821115620001bf5760008155600101620001c4565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b6002810460018216806200021b57607f821691505b602082108114156200023d57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161243e6200027d600039600061143c0152600061146c015260006114d7015260006114b6015261243e6000f3fe608060405234801561001057600080fd5b50600436106101d95760003560e01c80635c975abb11610104578063c6b45dfa116100a2578063da35a26f11610071578063da35a26f14610387578063da5139ca1461039a578063f18d03cc146103ad578063f7888aec146103c0576101d9565b8063c6b45dfa14610351578063d4ee1d9014610359578063d728e00514610361578063d9d98ce414610374576101d9565b80637372e9be116100de5780637372e9be1461032657806379ba5097146103395780638456cb59146103415780638da5cb5b14610349576101d9565b80635c975abb146102eb5780635cffe9de14610300578063613255ab14610313576101d9565b80633f21c1b41161017c57806350d75d251161014b57806350d75d25146102b35780635299493b146102c857806352d1902d146102db57806354fd4d50146102e3576101d9565b80633f21c1b4146102725780633f4ba83a14610285578063469519541461028d5780634ffe34db146102a0576101d9565b80630b620b81116101b85780630b620b811461022f5780631583d56c146102425780631e43a7a1146102575780631fd1ffde1461025f576101d9565b8062f5ee4d146101de5780630284c3f51461020757806306fdde031461021a575b600080fd5b6101f16101ec366004611a06565b6103d3565b6040516101fe9190611d8f565b60405180910390f35b6101f1610215366004611b3d565b6103e5565b610222610596565b6040516101fe9190611e2d565b6101f161023d366004611b3d565b610624565b610255610250366004611acc565b6107c2565b005b6101f1610826565b61025561026d366004611c68565b61082c565b610255610280366004611a5a565b6108bd565b610255610ad7565b61025561029b366004611a06565b610b0b565b6101f16102ae366004611a06565b610b41565b6102bb610b53565b6040516101fe9190611cdb565b6101f16102d6366004611acc565b610b63565b6101f1610c0c565b610222610c30565b6102f3610c3d565b6040516101fe9190611d84565b6102f361030e366004611bce565b610c4c565b6101f1610321366004611a06565b610f22565b610255610334366004611a06565b610f3d565b610255610fda565b610255611066565b6102bb611098565b6101f16110a7565b6102bb6110b3565b6102f361036f366004611a22565b6110c2565b6101f1610382366004611acc565b6110e2565b610255610395366004611c80565b6110fb565b6101f16103a8366004611b8d565b6111e1565b6102556103bb366004611b3d565b6112dd565b6101f16103ce366004611b2b565b611371565b60096020526000908152604090205481565b60006103ef610c3d565b156104155760405162461bcd60e51b815260040161040c90612090565b60405180910390fd5b83336001600160a01b038216148061045557506001600160a01b038116600090815260086020908152604080832033845290915290205460ff1615156001145b6104715760405162461bcd60e51b815260040161040c906120ee565b6001600160a01b0384166104975760405162461bcd60e51b815260040161040c90611feb565b6104a3868460006111e1565b91506104ba6001600160a01b03871686308661138e565b6001600160a01b038087166000908152600660209081526040808320938816835292905220546104eb9083906122df565b6001600160a01b038088166000818152600660209081526040808320948a16835293815283822094909455908152600790925290205461052c9083906122df565b6001600160a01b03808816600081815260076020526040908190209390935591518682169291881691907f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d599061058590889088906122d1565b60405180910390a450949350505050565b600180546105a390612379565b80601f01602080910402602001604051908101604052809291908181526020018280546105cf90612379565b801561061c5780601f106105f15761010080835404028352916020019161061c565b820191906000526020600020905b8154815290600101906020018083116105ff57829003601f168201915b505050505081565b600061062e610c3d565b1561064b5760405162461bcd60e51b815260040161040c90612090565b83336001600160a01b038216148061068b57506001600160a01b038116600090815260086020908152604080832033845290915290205460ff1615156001145b6106a75760405162461bcd60e51b815260040161040c906120ee565b6001600160a01b0384166106cd5760405162461bcd60e51b815260040161040c90611feb565b6106d78684610b63565b6001600160a01b038088166000908152600660209081526040808320938a168352929052205490925061070b908490612336565b6001600160a01b038088166000818152600660209081526040808320948b16835293815283822094909455908152600790925290205461074c908490612336565b6001600160a01b038716600081815260076020526040902091909155610773908584611419565b836001600160a01b0316856001600160a01b0316876001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db86866040516105859291906122d1565b6040516340c10f1960e01b81526001600160a01b038316906340c10f19906107f09030908590600401611d6b565b600060405180830381600087803b15801561080a57600080fd5b505af115801561081e573d6000803e3d6000fd5b505050505050565b60035481565b6004546001600160a01b031633146108565760405162461bcd60e51b815260040161040c90612276565b67016345785d8a0000811061087d5760405162461bcd60e51b815260040161040c90612171565b60038190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be81906108b2908390611d8f565b60405180910390a150565b6001600160a01b0385166108e35760405162461bcd60e51b815260040161040c9061229a565b60006108ed611438565b7fe8879d0159a5862e68322a449d14dcfb21ad39e0c3dc66f88aff16b87aa27eae86610939577f31d77d35dcd597e2453861d123e3d7ee551c84d42d8d97544835a74f1ccb251b61095b565b7f9d3cc82da8126179611840997002f7d09633ad258b9c11d6e1dccc7e1ad477415b6001600160a01b038a16600090815260096020526040812080548c928c928c9291610985836123b4565b9190505560405160200161099e96959493929190611daf565b604051602081830303815290604052805190602001206040516020016109c5929190611cc0565b604051602081830303815290604052805190602001209050600060018286868660405160008152602001604052604051610a029493929190611e0f565b6020604051602081039080840390855afa158015610a24573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b031614610a615760405162461bcd60e51b815260040161040c90611fb4565b6001600160a01b038881166000818152600860209081526040808320948c168084529490915290819020805460ff19168a1515179055517f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c590610ac5908a90611d84565b60405180910390a35050505050505050565b6004546001600160a01b03163314610b015760405162461bcd60e51b815260040161040c90612276565b610b09611502565b565b6004546001600160a01b03163314610b355760405162461bcd60e51b815260040161040c90612276565b610b3e81611568565b50565b60076020526000908152604090205481565b6000610b5d611670565b90505b90565b6001600160a01b0382166000818152600760205260408082205490516370a0823160e01b8152919290916370a0823190610ba1903090600401611cdb565b60206040518083038186803b158015610bb957600080fd5b505afa158015610bcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf19190611b13565b610bfb9084612317565b610c0591906122f7565b9392505050565b7f789f0daca1cd17baa821e8d7454225d50b9f3e7c22acb67c2b2fff4f686a128290565b600280546105a390612379565b60005462010000900460ff1690565b6001600160a01b038416600090815260076020526040812054841115610c845760405162461bcd60e51b815260040161040c90612022565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610cb5903090600401611cdb565b60206040518083038186803b158015610ccd57600080fd5b505afa158015610ce1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d059190611b13565b9050610d1b6001600160a01b0383168988611419565b6000610d2788886110e2565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610d8096959493929190611d13565b602060405180830381600087803b158015610d9a57600080fd5b505af1158015610dae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd29190611b13565b14610def5760405162461bcd60e51b815260040161040c90611eda565b610e108930610dfe848b6122df565b6001600160a01b03871692919061138e565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610e3f9190611cdb565b60206040518083038186803b158015610e5757600080fd5b505afa158015610e6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8f9190611b13565b610e999190612336565b905081811015610ebb5760405162461bcd60e51b815260040161040c90612059565b896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b86604051610f0a9291906122d1565b60405180910390a45060019998505050505050505050565b6001600160a01b031660009081526007602052604090205490565b6004546001600160a01b03163314610f675760405162461bcd60e51b815260040161040c90612276565b6001600160a01b038116610f8d5760405162461bcd60e51b815260040161040c90611f37565b600580546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab832906108b29083904290611d6b565b6005546001600160a01b031633146110045760405162461bcd60e51b815260040161040c906120c7565b60058054600480546001600160a01b03199081166001600160a01b038416179091551690556040517f56a56c31bb3f318488e30872a32d64e9e9092a6a23043f6d9e9d71b2545e71729061105c906000904290611d6b565b60405180910390a1565b6004546001600160a01b031633146110905760405162461bcd60e51b815260040161040c90612276565b610b09611695565b6004546001600160a01b031681565b67016345785d8a000081565b6005546001600160a01b031681565b600860209081526000928352604080842090915290825290205460ff1681565b6000670de0b6b3a764000060035483610bfb9190612317565b600054610100900460ff1680611114575060005460ff16155b6111305760405162461bcd60e51b815260040161040c90612114565b600054610100900460ff1615801561115b576000805460ff1961ff0019909116610100171660011790555b6001600160a01b0382166111815760405162461bcd60e51b815260040161040c90612197565b67016345785d8a0000600354106111aa5760405162461bcd60e51b815260040161040c90611f11565b6003839055600480546001600160a01b0319166001600160a01b03841617905580156111dc576000805461ff00191690555b505050565b6001600160a01b03831660009081526007602052604081205480156112d1576040516370a0823160e01b81526000906001600160a01b038716906370a082319061122f903090600401611cdb565b60206040518083038186803b15801561124757600080fd5b505afa15801561125b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127f9190611b13565b90508061128c8387612317565b61129691906122f7565b92508380156112b8575084826112ac8386612317565b6112b691906122f7565b105b156112cb576112c88360016122df565b92505b506112d5565b8391505b509392505050565b6112e5610c3d565b156113025760405162461bcd60e51b815260040161040c90612090565b82336001600160a01b038216148061134257506001600160a01b038116600090815260086020908152604080832033845290915290205460ff1615156001145b61135e5760405162461bcd60e51b815260040161040c906120ee565b61136a858585856116f4565b5050505050565b600660209081526000928352604080842090915290825290205481565b611413846323b872dd60e01b8585856040516024016113af93929190611cef565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526117f4565b50505050565b6111dc8363a9059cbb60e01b84846040516024016113af929190611d6b565b60007f0000000000000000000000000000000000000000000000000000000000000000611463611883565b141561149057507f0000000000000000000000000000000000000000000000000000000000000000610b60565b6114fb7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611887565b9050610b60565b61150a610c3d565b6115265760405162461bcd60e51b815260040161040c90611ea3565b6000805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61155b6118c8565b60405161105c9190611cdb565b6000611572611670565b6001600160a01b031614156115995760405162461bcd60e51b815260040161040c906121be565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156115d257600080fd5b505afa1580156115e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061160a9190611b13565b611612610c0c565b1461162f5760405162461bcd60e51b815260040161040c90611e60565b611638816118cc565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc611661610c0c565b826040516108b2929190611d98565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b61169d610c3d565b156116ba5760405162461bcd60e51b815260040161040c90612090565b6000805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861155b6118c8565b6001600160a01b03821661171a5760405162461bcd60e51b815260040161040c90611feb565b6001600160a01b0380851660009081526006602090815260408083209387168352929052205461174b908290612336565b6001600160a01b038581166000908152600660209081526040808320888516845290915280822093909355908416815220546117889082906122df565b6001600160a01b0380861660008181526006602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f906117e6908690611d8f565b60405180910390a450505050565b6000611849826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118f09092919063ffffffff16565b8051909150156111dc57808060200190518101906118679190611af7565b6111dc5760405162461bcd60e51b815260040161040c9061222c565b4690565b6000838383611894611883565b306040516020016118a9959493929190611de3565b6040516020818303038152906040528051906020012090509392505050565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b60606118ff8484600085611907565b949350505050565b6060824710156119295760405162461bcd60e51b815260040161040c90611f6e565b611932856119c7565b61194e5760405162461bcd60e51b815260040161040c906121f5565b600080866001600160a01b0316858760405161196a9190611ca4565b60006040518083038185875af1925050503d80600081146119a7576040519150601f19603f3d011682016040523d82523d6000602084013e6119ac565b606091505b50915091506119bc8282866119cd565b979650505050505050565b3b151590565b606083156119dc575081610c05565b8251156119ec5782518084602001fd5b8160405162461bcd60e51b815260040161040c9190611e2d565b600060208284031215611a17578081fd5b8135610c05816123e5565b60008060408385031215611a34578081fd5b8235611a3f816123e5565b91506020830135611a4f816123e5565b809150509250929050565b60008060008060008060c08789031215611a72578182fd5b8635611a7d816123e5565b95506020870135611a8d816123e5565b94506040870135611a9d816123fa565b9350606087013560ff81168114611ab2578283fd5b9598949750929560808101359460a0909101359350915050565b60008060408385031215611ade578182fd5b8235611ae9816123e5565b946020939093013593505050565b600060208284031215611b08578081fd5b8151610c05816123fa565b600060208284031215611b24578081fd5b5051919050565b60008060408385031215611a34578182fd5b60008060008060808587031215611b52578384fd5b8435611b5d816123e5565b93506020850135611b6d816123e5565b92506040850135611b7d816123e5565b9396929550929360600135925050565b600080600060608486031215611ba1578283fd5b8335611bac816123e5565b9250602084013591506040840135611bc3816123fa565b809150509250925092565b600080600080600060808688031215611be5578283fd5b8535611bf0816123e5565b94506020860135611c00816123e5565b935060408601359250606086013567ffffffffffffffff80821115611c23578283fd5b818801915088601f830112611c36578283fd5b813581811115611c44578384fd5b896020828501011115611c55578384fd5b9699959850939650602001949392505050565b600060208284031215611c79578081fd5b5035919050565b60008060408385031215611c92578182fd5b823591506020830135611a4f816123e5565b60008251611cb681846020870161234d565b9190910192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b95865260208601949094526001600160a01b039283166040860152911660608401521515608083015260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082528251806020840152611e4c81604085016020870161234d565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b6020808252600c908201526b494e56414c49445f5241544560a01b604082015260600190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526011908201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f544f5f414444524553530000000000000000000000000000604082015260600190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252600c908201526b696e76616c6964207261746560a01b604082015260600190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60208082526010908201527f494e56414c49445f434f4e545241435400000000000000000000000000000000604082015260600190565b918252602082015260400190565b600082198211156122f2576122f26123cf565b500190565b60008261231257634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615612331576123316123cf565b500290565b600082821015612348576123486123cf565b500390565b60005b83811015612368578181015183820152602001612350565b838111156114135750506000910152565b60028104600182168061238d57607f821691505b602082108114156123ae57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156123c8576123c86123cf565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610b3e57600080fd5b8015158114610b3e57600080fdfea264697066735822122059b7db5bff92e1c79a3bbe461043edd7db4c87d53e49d92a2b604d7b9b6d0c9b64736f6c63430008010033";
