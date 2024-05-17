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
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
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
  "0x608060405234801561001057600080fd5b50610f8f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806368651ad71161008c57806394869891116100665780639486989114610195578063a73f18e6146101a8578063c4d66de8146101bb578063ec4aa8ef146101ce576100df565b806368651ad714610172578063707a7ab3146101855780638da5cb5b1461018d576100df565b806350d75d25116100bd57806350d75d25146101355780635129785d1461014a57806352d1902d1461015d576100df565b8063165d21c9146100e457806346951954146100f95780634d1c5d991461010c575b600080fd5b6100f76100f2366004610b9f565b6101e1565b005b6100f7610107366004610b3c565b6103bc565b61011f61011a366004610b3c565b6103f8565b60405161012c9190610cc6565b60405180910390f35b61013d61040d565b60405161012c9190610c4b565b6100f7610158366004610b3c565b61041c565b6101656104cb565b60405161012c9190610cd1565b61013d610180366004610bd7565b6104ef565b6100f7610527565b61013d6105cd565b6100f76101a3366004610b3c565b6105e2565b6100f76101b6366004610c1a565b610685565b6100f76101c9366004610b3c565b610717565b6100f76101dc366004610b5f565b61081c565b6000546201000090046001600160a01b0316331461021a5760405162461bcd60e51b815260040161021190610ed7565b60405180910390fd5b6001600160a01b038216600090815260036020526040902080546001811415610278578160008154811061025e57634e487b7160e01b600052603260045260246000fd5b600091825260209091200180546001600160a01b03191690555b600181111561037b576000805b8281101561037857856001600160a01b03168482815481106102b757634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031614610366578381815481106102f157634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b031684838154811061032f57634e487b7160e01b600052603260045260246000fd5b600091825260209091200180546001600160a01b0319166001600160a01b0392909216919091179055610363600183610efb565b91505b8061037081610f13565b915050610285565b50505b7f4135b7aca60a5b6a43f87366115670fb99df685ec911e1f47432e055890247c58484426040516103ae93929190610c89565b60405180910390a150505050565b6000546201000090046001600160a01b031633146103ec5760405162461bcd60e51b815260040161021190610ed7565b6103f581610972565b50565b60026020526000908152604090205460ff1681565b6000610417610a7a565b905090565b3360009081526002602052604090205460ff1615156001146104505760405162461bcd60e51b815260040161021190610e69565b6001600160a01b03811660009081526003602090815260408083208054600181018255908452919092200180546001600160a01b0319163390811790915590517fbaa8134d057f38ffff73248ae9edf1012783d074fbae40443077bf53fc57b9ec916104c0918491904290610c89565b60405180910390a150565b7f06a2baf25dcc6bde37ee1a8a68478698509d83158827d0d58c698f328ce5bbae90565b6003602052816000526040600020818154811061050b57600080fd5b6000918252602090912001546001600160a01b03169150829050565b6001546001600160a01b031633146105515760405162461bcd60e51b815260040161021190610dbe565b600180546000805475ffffffffffffffffffffffffffffffffffffffff000019166001600160a01b03831662010000021781556001600160a01b03199091169091556040517f56a56c31bb3f318488e30872a32d64e9e9092a6a23043f6d9e9d71b2545e7172916105c3914290610cad565b60405180910390a1565b6000546201000090046001600160a01b031681565b6000546201000090046001600160a01b031633146106125760405162461bcd60e51b815260040161021190610ed7565b6001600160a01b0381166106385760405162461bcd60e51b815260040161021190610d87565b600180546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab832906104c09083904290610cad565b6000546201000090046001600160a01b031633146106b55760405162461bcd60e51b815260040161021190610ed7565b6001600160a01b03821660009081526002602052604090819020805460ff1916831515179055517f7d9ee230d6dc7ce0abe2298021887143863391cf480c8b4fb4ccc23a6e12c84e9061070b9084904290610cad565b60405180910390a15050565b600054610100900460ff1680610730575060005460ff16155b61074c5760405162461bcd60e51b815260040161021190610de5565b600054610100900460ff16158015610777576000805460ff1961ff0019909116610100171660011790555b6001600160a01b03821661079d5760405162461bcd60e51b815260040161021190610e42565b6000805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b038516021790556040517f25ff68dd81b34665b5ba7e553ee5511bf6812e12adb4a7e2c0d9e26b3099ce79906107fe9084904290610cad565b60405180910390a18015610818576000805461ff00191690555b5050565b3360009081526003602090815260408083208054825181850281018501909352808352919290919083018282801561087d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161085f575b505050505090506000815190506108b46040518060400160405280600981526020016867657473206865726560b81b815250610a9f565b806108c057505061096d565b60005b81811015610969578281815181106108eb57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663e0723e3a338888886040518563ffffffff1660e01b81526004016109249493929190610c5f565b600060405180830381600087803b15801561093e57600080fd5b505af1158015610952573d6000803e3d6000fd5b50505050808061096190610f13565b9150506108c3565b5050505b505050565b600061097c610a7a565b6001600160a01b031614156109a35760405162461bcd60e51b815260040161021190610ea0565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156109dc57600080fd5b505afa1580156109f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a149190610c02565b610a1c6104cb565b14610a395760405162461bcd60e51b815260040161021190610d44565b610a4281610af7565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc610a6b6104cb565b826040516104c0929190610cda565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6103f581604051602401610ab39190610cf1565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663104c13eb60e21b179052610b1b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600060208284031215610b4d578081fd5b8135610b5881610f44565b9392505050565b600080600060608486031215610b73578182fd5b8335610b7e81610f44565b92506020840135610b8e81610f44565b929592945050506040919091013590565b60008060408385031215610bb1578182fd5b8235610bbc81610f44565b91506020830135610bcc81610f44565b809150509250929050565b60008060408385031215610be9578182fd5b8235610bf481610f44565b946020939093013593505050565b600060208284031215610c13578081fd5b5051919050565b60008060408385031215610c2c578182fd5b8235610c3781610f44565b915060208301358015158114610bcc578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b039485168152928416602084015292166040820152606081019190915260800190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b6000602080835283518082850152825b81811015610d1d57858101830151858201604001528201610d01565b81811115610d2e5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b60208082526019908201527f4f4e4c595f415050524f5645445f4449535452494255544f5200000000000000604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60008219821115610f0e57610f0e610f2e565b500190565b6000600019821415610f2757610f27610f2e565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146103f557600080fdfea264697066735822122099e97e25ce09abc23da8f32cb8d2707d8715af752577e4daa46228055c834d9664736f6c63430008010033";
