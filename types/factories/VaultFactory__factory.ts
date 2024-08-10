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
    name: "createUpgradableVault",
    outputs: [
      {
        internalType: "address",
        name: "proxy",
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
    name: "updateVaultLogic",
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
  "0x60a060405234801561001057600080fd5b5060405161083338038061083383398101604081905261002f916100d7565b6001600160a01b03811661005e5760405162461bcd60e51b815260040161005590610130565b60405180910390fd5b6001600160a01b0382166100845760405162461bcd60e51b815260040161005590610109565b60609190911b6001600160601b031916608052600080546001600160a01b0319166001600160a01b03909216919091179055610157565b80516001600160a01b03811681146100d257600080fd5b919050565b600080604083850312156100e9578182fd5b6100f2836100bb565b9150610100602084016100bb565b90509250929050565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b6020808252600d908201526c1253959053125117d590555315609a1b604082015260600190565b60805160601c6106b16101826000396000818160ac0152818161023001526102fa01526106b16000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806321f64958146100515780638648cbc71461007a5780638da5cb5b1461008f578063b078147a14610097575b600080fd5b61006461005f366004610375565b61009f565b60405161007191906103a0565b60405180910390f35b61008d610088366004610354565b610225565b005b6100646102f8565b61006461031c565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146100f25760405162461bcd60e51b81526004016100e9906103f4565b60405180910390fd5b60006040516101009061032b565b604051809103906000f08015801561011c573d6000803e3d6000fd5b50600054604051634a0687ef60e01b81529192506001600160a01b0380841692634a0687ef926101509216906004016103a0565b600060405180830381600087803b15801561016a57600080fd5b505af115801561017e573d6000803e3d6000fd5b50505050809150816001600160a01b031663da35a26f85856040518363ffffffff1660e01b81526004016101b3929190610418565b600060405180830381600087803b1580156101cd57600080fd5b505af11580156101e1573d6000803e3d6000fd5b505050507fd121adb44c5268742cd3af919e1df1437aa697b3306c1e6e133e9c97cc65bfc882426040516102169291906103b4565b60405180910390a15092915050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461026d5760405162461bcd60e51b81526004016100e9906103f4565b6001600160a01b0381166102935760405162461bcd60e51b81526004016100e9906103cd565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383161790556040517ffa4919aba5648c94384952b8039d70ba764ab39a8d0deb9943731ccccebaf331906102ed90839042906103b4565b60405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b031681565b61024c8061043083390190565b80356001600160a01b038116811461034f57600080fd5b919050565b600060208284031215610365578081fd5b61036e82610338565b9392505050565b60008060408385031215610387578081fd5b8235915061039760208401610338565b90509250929050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6020808252600d908201526c1253959053125117d590555315609a1b604082015260600190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b9182526001600160a01b031660208201526040019056fe608060405234801561001057600080fd5b5061022c806100206000396000f3fe6080604052600436106100225760003560e01c80634a0687ef1461003957610031565b366100315761002f610059565b005b61002f610059565b34801561004557600080fd5b5061002f61005436600461015a565b610073565b610061610071565b61007161006c6100de565b6100ed565b565b6001600160a01b0381166100a25760405162461bcd60e51b8152600401610099906101bf565b60405180910390fd5b60006100ac610111565b6001600160a01b0316146100d25760405162461bcd60e51b815260040161009990610188565b6100db81610136565b50565b60006100e8610111565b905090565b3660008037600080366000845af43d6000803e80801561010c573d6000f35b3d6000fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b60006020828403121561016b578081fd5b81356001600160a01b0381168114610181578182fd5b9392505050565b6020808252601e908201527f5555505350726f78793a20616c726561647920696e697469616c697a65640000604082015260600190565b60208082526017908201527f5555505350726f78793a207a65726f206164647265737300000000000000000060408201526060019056fea2646970667358221220aa71d99a9432d5a0d3901c5894a84a38e1098061c2c4880e3077ef5d2abffc2864736f6c63430008010033a2646970667358221220ef36611bf5bdcbe6ed9e09122d12b847dd6d52193320f16bd17571d36b44d28e64736f6c63430008010033";
