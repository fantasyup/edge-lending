/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { RewardDistributorManager } from "../RewardDistributorManager";

export class RewardDistributorManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardDistributorManager> {
    return super.deploy(overrides || {}) as Promise<RewardDistributorManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RewardDistributorManager {
    return super.attach(address) as RewardDistributorManager;
  }
  connect(signer: Signer): RewardDistributorManager__factory {
    return super.connect(signer) as RewardDistributorManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardDistributorManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RewardDistributorManager;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IRewardDistributor",
        name: "distributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AddReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IRewardDistributor",
        name: "distributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "ApprovedDistributor",
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
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Initialized",
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
        name: "tokenAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IRewardDistributor",
        name: "distributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "RemoveReward",
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
    inputs: [],
    name: "acceptOwnerTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "accumulateRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "activateReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRewardDistributor",
        name: "",
        type: "address",
      },
    ],
    name: "approvedDistributors",
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
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "commitOwnerTransfer",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
      {
        internalType: "contract IRewardDistributor",
        name: "_distributor",
        type: "address",
      },
    ],
    name: "removeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRewardDistributor",
        name: "_distributor",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approve",
        type: "bool",
      },
    ],
    name: "setDistributorStatus",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenRewardToDistributors",
    outputs: [
      {
        internalType: "contract IRewardDistributor",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611012806100206000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806368651ad71161008c57806394869891116100665780639486989114610195578063a73f18e6146101a8578063c4d66de8146101bb578063ed0663bc146101ce576100df565b806368651ad714610172578063707a7ab3146101855780638da5cb5b1461018d576100df565b806350d75d25116100bd57806350d75d25146101355780635129785d1461014a57806352d1902d1461015d576100df565b8063165d21c9146100e457806346951954146100f95780634d1c5d991461010c575b600080fd5b6100f76100f2366004610c75565b6101e1565b005b6100f7610107366004610c1a565b6103c6565b61011f61011a366004610c1a565b610402565b60405161012c9190610d66565b60405180910390f35b61013d610417565b60405161012c9190610cfb565b6100f7610158366004610c1a565b610426565b610165610559565b60405161012c9190610d71565b61013d610180366004610c87565b61057d565b6100f76105b5565b61013d61065b565b6100f76101a3366004610c1a565b610670565b6100f76101b6366004610cca565b61071e565b6100f76101c9366004610c1a565b6107a4565b6100f76101dc366004610c3d565b6108a8565b6000546201000090046001600160a01b0316331461021a5760405162461bcd60e51b815260040161021190610f5b565b60405180910390fd5b6001600160a01b03821660009081526003602090815260408083208054825181850281018501909352808352909390929091610298918590859083018282801561028d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161026f575b505050505085610a55565b90508060001914156102ac575050506103c2565b826102b8600184610f7f565b815481106102d657634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b031683828154811061031457634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508280548061036057634e487b7160e01b600052603160045260246000fd5b600082815260209020810160001990810180546001600160a01b03191690550190556040517f4135b7aca60a5b6a43f87366115670fb99df685ec911e1f47432e055890247c5906103b690879087904290610d29565b60405180910390a15050505b5050565b6000546201000090046001600160a01b031633146103f65760405162461bcd60e51b815260040161021190610f5b565b6103ff81610ac9565b50565b60026020526000908152604090205460ff1681565b6000610421610bd1565b905090565b3360009081526002602052604090205460ff16151560011461045a5760405162461bcd60e51b815260040161021190610eed565b6001600160a01b038116600090815260036020908152604091829020805483518184028101840190945280845290926104d592909184918301828280156104ca57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116104ac575b505050505033610a55565b600019146104f55760405162461bcd60e51b815260040161021190610e0b565b80546001810182556000828152602090200180546001600160a01b031916339081179091556040517fbaa8134d057f38ffff73248ae9edf1012783d074fbae40443077bf53fc57b9ec9161054d918591904290610d29565b60405180910390a15050565b7f06a2baf25dcc6bde37ee1a8a68478698509d83158827d0d58c698f328ce5bbae90565b6003602052816000526040600020818154811061059957600080fd5b6000918252602090912001546001600160a01b03169150829050565b6001546001600160a01b031633146105df5760405162461bcd60e51b815260040161021190610e42565b600180546000805475ffffffffffffffffffffffffffffffffffffffff000019166001600160a01b03831662010000021781556001600160a01b03199091169091556040517f56a56c31bb3f318488e30872a32d64e9e9092a6a23043f6d9e9d71b2545e717291610651914290610d4d565b60405180910390a1565b6000546201000090046001600160a01b031681565b6000546201000090046001600160a01b031633146106a05760405162461bcd60e51b815260040161021190610f5b565b6001600160a01b0381166106c65760405162461bcd60e51b815260040161021190610dd4565b600180546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab832906107139083904290610d4d565b60405180910390a150565b6000546201000090046001600160a01b0316331461074e5760405162461bcd60e51b815260040161021190610f5b565b6001600160a01b03821660009081526002602052604090819020805460ff1916831515179055517f7d9ee230d6dc7ce0abe2298021887143863391cf480c8b4fb4ccc23a6e12c84e9061054d9084904290610d4d565b600054610100900460ff16806107bd575060005460ff16155b6107d95760405162461bcd60e51b815260040161021190610e69565b600054610100900460ff16158015610804576000805460ff1961ff0019909116610100171660011790555b6001600160a01b03821661082a5760405162461bcd60e51b815260040161021190610ec6565b6000805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b038516021790556040517f25ff68dd81b34665b5ba7e553ee5511bf6812e12adb4a7e2c0d9e26b3099ce799061088b9084904290610d4d565b60405180910390a180156103c2576000805461ff00191690555050565b3360009081526003602090815260408083208054825181850281018501909352808352919290919083018282801561090957602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116108eb575b50508351939450505081151590506109225750506103c2565b60005b81811015610a4e5782818151811061094d57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663e2949bac33876040518363ffffffff1660e01b8152600401610982929190610d0f565b600060405180830381600087803b15801561099c57600080fd5b505af11580156109b0573d6000803e3d6000fd5b505050508281815181106109d457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663e2949bac33866040518363ffffffff1660e01b8152600401610a09929190610d0f565b600060405180830381600087803b158015610a2357600080fd5b505af1158015610a37573d6000803e3d6000fd5b505050508080610a4690610f96565b915050610925565b5050505050565b81516000199060005b81811015610ac157836001600160a01b0316858281518110610a9057634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03161415610aaf57809250610ac1565b80610ab981610f96565b915050610a5e565b505092915050565b6000610ad3610bd1565b6001600160a01b03161415610afa5760405162461bcd60e51b815260040161021190610f24565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b3357600080fd5b505afa158015610b47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6b9190610cb2565b610b73610559565b14610b905760405162461bcd60e51b815260040161021190610d91565b610b9981610bf6565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc610bc2610559565b82604051610713929190610d7a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b600060208284031215610c2b578081fd5b8135610c3681610fc7565b9392505050565b60008060408385031215610c4f578081fd5b8235610c5a81610fc7565b91506020830135610c6a81610fc7565b809150509250929050565b60008060408385031215610c4f578182fd5b60008060408385031215610c99578182fd5b8235610ca481610fc7565b946020939093013593505050565b600060208284031215610cc3578081fd5b5051919050565b60008060408385031215610cdc578182fd5b8235610ce781610fc7565b915060208301358015158114610c6a578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b60208082526012908201527f4449535452494255544f525f4558495354530000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b60208082526019908201527f4f4e4c595f415050524f5645445f4449535452494255544f5200000000000000604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b600082821015610f9157610f91610fb1565b500390565b6000600019821415610faa57610faa610fb1565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146103ff57600080fdfea2646970667358221220cca62baaf59cb0b8ef77eecf997937ba5d251ddd4649a8f0a25cb76c5a1537ef64736f6c63430008010033";
