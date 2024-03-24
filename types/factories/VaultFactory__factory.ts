/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { VaultFactory } from "../VaultFactory";

export class VaultFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owner: string,
    _vaultLogic: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VaultFactory> {
    return super.deploy(
      _owner,
      _vaultLogic,
      overrides || {}
    ) as Promise<VaultFactory>;
  }
  getDeployTransaction(
    _owner: string,
    _vaultLogic: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _vaultLogic, overrides || {});
  }
  attach(address: string): VaultFactory {
    return super.attach(address) as VaultFactory;
  }
  connect(signer: Signer): VaultFactory__factory {
    return super.connect(signer) as VaultFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VaultFactory {
    return new Contract(address, _abi, signerOrProvider) as VaultFactory;
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
      {
        internalType: "address",
        name: "_vaultLogic",
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
        name: "vault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "created",
        type: "uint256",
      },
    ],
    name: "NewVault",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "vault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "created",
        type: "uint256",
      },
    ],
    name: "VaultUpdated",
    type: "event",
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
        name: "_vaultOwner",
        type: "address",
      },
    ],
    name: "createVaultWithProxy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
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
    inputs: [
      {
        internalType: "address",
        name: "_newVault",
        type: "address",
      },
    ],
    name: "updateVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultLogic",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161079238038061079283398101604081905261002f916100b1565b6001600160a01b03811661005e5760405162461bcd60e51b8152600401610055906100e3565b60405180910390fd5b60609190911b6001600160601b031916608052600080546001600160a01b0319166001600160a01b0390921691909117905561010a565b80516001600160a01b03811681146100ac57600080fd5b919050565b600080604083850312156100c3578182fd5b6100cc83610095565b91506100da60208401610095565b90509250929050565b6020808252600d908201526c1a5b9d985b1a59081d985d5b1d609a1b604082015260600190565b60805160601c61066561012d6000396000818160a1015260dd01526106656000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80638da5cb5b14610051578063b078147a1461006f578063e7563f3f14610077578063eee655321461008c575b600080fd5b61005961009f565b6040516100669190610354565b60405180910390f35b6100596100c3565b61008a610085366004610308565b6100d2565b005b61005961009a366004610329565b6101ae565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b031681565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101235760405162461bcd60e51b815260040161011a906103a8565b60405180910390fd5b6001600160a01b0381166101495760405162461bcd60e51b815260040161011a90610381565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383161790556040517ffa4919aba5648c94384952b8039d70ba764ab39a8d0deb9943731ccccebaf331906101a39083904290610368565b60405180910390a150565b6000806040516101bd906102df565b604051809103906000f0801580156101d9573d6000803e3d6000fd5b50600054604051634a0687ef60e01b81529192506001600160a01b0380841692634a0687ef9261020d921690600401610354565b600060405180830381600087803b15801561022757600080fd5b505af115801561023b573d6000803e3d6000fd5b505060405163da35a26f60e01b81526001600160a01b038416925063da35a26f915061026d90879087906004016103cc565b600060405180830381600087803b15801561028757600080fd5b505af115801561029b573d6000803e3d6000fd5b505050507fd121adb44c5268742cd3af919e1df1437aa697b3306c1e6e133e9c97cc65bfc881426040516102d0929190610368565b60405180910390a19392505050565b61024c806103e483390190565b80356001600160a01b038116811461030357600080fd5b919050565b600060208284031215610319578081fd5b610322826102ec565b9392505050565b6000806040838503121561033b578081fd5b8235915061034b602084016102ec565b90509250929050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6020808252600d908201526c1a5b9d985b1a59081d985d5b1d609a1b604082015260600190565b6020808252600a908201526927a7262cafa0a226a4a760b11b604082015260600190565b9182526001600160a01b031660208201526040019056fe608060405234801561001057600080fd5b5061022c806100206000396000f3fe6080604052600436106100225760003560e01c80634a0687ef1461003957610031565b366100315761002f610059565b005b61002f610059565b34801561004557600080fd5b5061002f61005436600461015a565b610073565b610061610071565b61007161006c6100de565b6100ed565b565b6001600160a01b0381166100a25760405162461bcd60e51b8152600401610099906101bf565b60405180910390fd5b60006100ac610111565b6001600160a01b0316146100d25760405162461bcd60e51b815260040161009990610188565b6100db81610136565b50565b60006100e8610111565b905090565b3660008037600080366000845af43d6000803e80801561010c573d6000f35b3d6000fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b60006020828403121561016b578081fd5b81356001600160a01b0381168114610181578182fd5b9392505050565b6020808252601e908201527f5555505350726f78793a20616c726561647920696e697469616c697a65640000604082015260600190565b60208082526017908201527f5555505350726f78793a207a65726f206164647265737300000000000000000060408201526060019056fea2646970667358221220c8dae29c41782c6dee4b409c0fc7ce41f93f8054f7ff5aa0320e5c35ec44ac1364736f6c63430008010033a2646970667358221220177d99ee52e2db0dab01a734e98bcf1521da6af13a194399b39dd321973e9e2964736f6c63430008010033";
