/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockRewardDistributorManager } from "../MockRewardDistributorManager";

export class MockRewardDistributorManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockRewardDistributorManager> {
    return super.deploy(
      overrides || {}
    ) as Promise<MockRewardDistributorManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockRewardDistributorManager {
    return super.attach(address) as MockRewardDistributorManager;
  }
  connect(signer: Signer): MockRewardDistributorManager__factory {
    return super.connect(signer) as MockRewardDistributorManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockRewardDistributorManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockRewardDistributorManager;
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
    ],
    name: "activateReward",
    outputs: [],
    stateMutability: "pure",
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
    stateMutability: "pure",
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
  "0x608060405234801561001057600080fd5b50610451806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80635129785d116100505780635129785d146100bd57806352d1902d146100d0578063ec4aa8ef146100e557610072565b8063165d21c914610077578063469519541461008c57806350d75d251461009f575b600080fd5b61008a610085366004610308565b6100f8565b005b61008a61009a3660046102a5565b6100fc565b6100a7610108565b6040516100b49190610358565b60405180910390f35b61008a6100cb3660046102a5565b610105565b6100d8610117565b6040516100b4919061036c565b61008a6100f33660046102c8565b61013b565b5050565b61010581610140565b50565b600061011261025c565b905090565b7f06a2baf25dcc6bde37ee1a8a68478698509d83158827d0d58c698f328ce5bbae90565b505050565b600061014a61025c565b6001600160a01b0316141561017a5760405162461bcd60e51b8152600401610171906103cf565b60405180910390fd5b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101b357600080fd5b505afa1580156101c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101eb9190610340565b6101f3610117565b146102105760405162461bcd60e51b81526004016101719061038c565b61021981610281565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc610242610117565b82604051610251929190610375565b60405180910390a150565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6000602082840312156102b6578081fd5b81356102c181610406565b9392505050565b6000806000606084860312156102dc578182fd5b83356102e781610406565b925060208401356102f781610406565b929592945050506040919091013590565b6000806040838503121561031a578182fd5b823561032581610406565b9150602083013561033581610406565b809150509250929050565b600060208284031215610351578081fd5b5051919050565b6001600160a01b0391909116815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6001600160a01b038116811461010557600080fdfea26469706673582212206df5e85b917f3ce6fcae50196f724fee7d8d5ae0dc8b141cdce359fcd227399c64736f6c63430008010033";
