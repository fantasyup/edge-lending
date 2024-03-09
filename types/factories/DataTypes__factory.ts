/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { DataTypes } from "../DataTypes";

export class DataTypes__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DataTypes> {
    return super.deploy(overrides || {}) as Promise<DataTypes>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DataTypes {
    return super.attach(address) as DataTypes;
  }
  connect(signer: Signer): DataTypes__factory {
    return super.connect(signer) as DataTypes__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DataTypes {
    return new Contract(address, _abi, signerOrProvider) as DataTypes;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IInterestRateModel",
            name: "interestRate",
            type: "IInterestRateModel",
          },
          {
            internalType: "uint256",
            name: "initialExchangeRateMantissa",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFactorMantissa",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralFactor",
            type: "uint256",
          },
          {
            internalType: "contract IBSWrapperToken",
            name: "wrappedBorrowAsset",
            type: "IBSWrapperToken",
          },
          {
            internalType: "uint256",
            name: "liquidationFee",
            type: "uint256",
          },
          {
            internalType: "contract IDebtToken",
            name: "debtToken",
            type: "IDebtToken",
          },
        ],
        internalType: "struct DataTypes.BorrowAssetConfig",
        name: "self",
        type: "tuple",
      },
      {
        internalType: "contract IBSLendingPair",
        name: "_owner",
        type: "IBSLendingPair",
      },
    ],
    name: "validBorrowAssetConfig",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6104c061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806318ca231b1461003a575b600080fd5b61004d610048366004610333565b61004f565b005b600061005e6020840184610317565b6001600160a01b0316141561008e5760405162461bcd60e51b8152600401610085906103e4565b60405180910390fd5b60008260200135116100b25760405162461bcd60e51b81526004016100859061041e565b60008260400135116100d65760405162461bcd60e51b81526004016100859061043a565b60008260600135116100fa5760405162461bcd60e51b815260040161008590610371565b60008260a001351161011e5760405162461bcd60e51b815260040161008590610456565b600061013060a0840160808501610317565b6001600160a01b031614156101575760405162461bcd60e51b8152600401610085906103aa565b600061016960e0840160c08501610317565b6001600160a01b031614156101905760405162461bcd60e51b8152600401610085906103c7565b6001600160a01b0381166101aa60a0840160808501610317565b6001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101e257600080fd5b505afa1580156101f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021a91906102f4565b6001600160a01b0316146102405760405162461bcd60e51b81526004016100859061038d565b6001600160a01b03811661025a60e0840160c08501610317565b6001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561029257600080fd5b505afa1580156102a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ca91906102f4565b6001600160a01b0316146102f05760405162461bcd60e51b815260040161008590610400565b5050565b600060208284031215610305578081fd5b815161031081610472565b9392505050565b600060208284031215610328578081fd5b813561031081610472565b600080828403610100811215610347578182fd5b60e0811215610354578182fd5b5082915060e083013561036681610472565b809150509250929050565b602080825260029082015261494360f01b604082015260600190565b60208082526003908201526249565760e81b604082015260600190565b60208082526003908201526224aba160e91b604082015260600190565b60208082526003908201526224a22160e91b604082015260600190565b60208082526002908201526124a960f11b604082015260600190565b6020808252600490820152634956445760e01b604082015260600190565b602080825260029082015261494560f01b604082015260600190565b60208082526002908201526124a360f11b604082015260600190565b602080825260029082015261125360f21b604082015260600190565b6001600160a01b038116811461048757600080fd5b5056fea26469706673582212207c932abc64a9d14e8cfd88457311d38c6ad6332a9106bab5ead4124333465c1164736f6c63430008010033";
