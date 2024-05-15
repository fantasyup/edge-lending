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
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardDistributorManager> {
    return super.deploy(
      _owner,
      overrides || {}
    ) as Promise<RewardDistributorManager>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
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
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "ApprovedDistribution",
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
    name: "acceptGuardianTransfer",
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
      {
        internalType: "contract IRewardDistributor",
        name: "_distributor",
        type: "address",
      },
    ],
    name: "addReward",
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
    name: "approvedDistributions",
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
  "0x608060405234801561001057600080fd5b50604051610d16380380610d1683398101604081905261002f9161005c565b600080546001600160a01b03909216620100000262010000600160b01b031990921691909117905561008a565b60006020828403121561006d578081fd5b81516001600160a01b0381168114610083578182fd5b9392505050565b610c7d806100996000396000f3fe608060405234801561001057600080fd5b50600436106100b95760003560e01c806352d1902d11610081578063948698911161005b578063948698911461015c578063a73f18e61461016f578063ec4aa8ef14610182576100b9565b806352d1902d1461011f5780637e831d17146101345780638da5cb5b14610154576100b9565b80630e463dc2146100be578063165d21c9146100c857806340b47e1a146100db57806346951954146100ee57806350d75d2514610101575b600080fd5b6100c6610195565b005b6100c66100d636600461098f565b610244565b6100c66100e936600461098f565b610416565b6100c66100fc36600461092c565b6104d6565b610109610512565b6040516101169190610a10565b60405180910390f35b610127610521565b6040516101169190610a96565b61014761014236600461092c565b610545565b6040516101169190610a8b565b61010961055a565b6100c661016a36600461092c565b61056f565b6100c661017d3660046109df565b61061d565b6100c661019036600461094f565b6106af565b6001546001600160a01b031633146101c85760405162461bcd60e51b81526004016101bf90610b30565b60405180910390fd5b600180546000805475ffffffffffffffffffffffffffffffffffffffff000019166001600160a01b03831662010000021781556001600160a01b03199091169091556040517f56a56c31bb3f318488e30872a32d64e9e9092a6a23043f6d9e9d71b2545e71729161023a914290610a72565b60405180910390a1565b6000546201000090046001600160a01b031633146102745760405162461bcd60e51b81526004016101bf90610bc5565b6001600160a01b0382166000908152600360205260409020805460018114156102d257816000815481106102b857634e487b7160e01b600052603260045260246000fd5b600091825260209091200180546001600160a01b03191690555b60018111156103d5576000805b828110156103d257856001600160a01b031684828154811061031157634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0316146103c05783818154811061034b57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b031684838154811061038957634e487b7160e01b600052603260045260246000fd5b600091825260209091200180546001600160a01b0319166001600160a01b03929092169190911790556103bd600183610be9565b91505b806103ca81610c01565b9150506102df565b50505b7f4135b7aca60a5b6a43f87366115670fb99df685ec911e1f47432e055890247c584844260405161040893929190610a4e565b60405180910390a150505050565b6001600160a01b038116600090815260026020526040902054819060ff1615156001146104555760405162461bcd60e51b81526004016101bf90610b57565b6001600160a01b0383811660009081526003602090815260408083208054600181018255908452919092200180546001600160a01b03191692851692909217909155517fbaa8134d057f38ffff73248ae9edf1012783d074fbae40443077bf53fc57b9ec906104c990859085904290610a4e565b60405180910390a1505050565b6000546201000090046001600160a01b031633146105065760405162461bcd60e51b81526004016101bf90610bc5565b61050f816107db565b50565b600061051c6108e3565b905090565b7f06a2baf25dcc6bde37ee1a8a68478698509d83158827d0d58c698f328ce5bbae90565b60026020526000908152604090205460ff1681565b6000546201000090046001600160a01b031681565b6000546201000090046001600160a01b0316331461059f5760405162461bcd60e51b81526004016101bf90610bc5565b6001600160a01b0381166105c55760405162461bcd60e51b81526004016101bf90610af9565b600180546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab832906106129083904290610a72565b60405180910390a150565b6000546201000090046001600160a01b0316331461064d5760405162461bcd60e51b81526004016101bf90610bc5565b6001600160a01b03821660009081526002602052604090819020805460ff1916831515179055517fe137f3b6dee823500bb35fc88f95fa9a8368b6063540b9256ea9770fd669ffb6906106a39084904290610a72565b60405180910390a15050565b3360009081526003602090815260408083208054825181850281018501909352808352919290919083018282801561071057602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116106f2575b50508351939450505081151590506107295750506107d6565b60005b818110156107d25782818151811061075457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663e0723e3a338888886040518563ffffffff1660e01b815260040161078d9493929190610a24565b600060405180830381600087803b1580156107a757600080fd5b505af11580156107bb573d6000803e3d6000fd5b5050505080806107ca90610c01565b91505061072c565b5050505b505050565b60006107e56108e3565b6001600160a01b0316141561080c5760405162461bcd60e51b81526004016101bf90610b8e565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561084557600080fd5b505afa158015610859573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087d91906109c7565b610885610521565b146108a25760405162461bcd60e51b81526004016101bf90610ab6565b6108ab81610908565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc6108d4610521565b82604051610612929190610a9f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b60006020828403121561093d578081fd5b813561094881610c32565b9392505050565b600080600060608486031215610963578182fd5b833561096e81610c32565b9250602084013561097e81610c32565b929592945050506040919091013590565b600080604083850312156109a1578182fd5b82356109ac81610c32565b915060208301356109bc81610c32565b809150509250929050565b6000602082840312156109d8578081fd5b5051919050565b600080604083850312156109f1578182fd5b82356109fc81610c32565b9150602083013580151581146109bc578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b039485168152928416602084015292166040820152606081019190915260800190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b60208082526019908201527f4f4e4c595f415050524f5645445f4449535452494255544f5200000000000000604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60008219821115610bfc57610bfc610c1c565b500190565b6000600019821415610c1557610c15610c1c565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461050f57600080fdfea2646970667358221220aafa92f2270cd9b959e9c62ea89d9c8d50bece32c99d5a0fa9a253dcbabcdda964736f6c63430008010033";
