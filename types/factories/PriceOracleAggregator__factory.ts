/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { PriceOracleAggregator } from "../PriceOracleAggregator";

export class PriceOracleAggregator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PriceOracleAggregator> {
    return super.deploy(
      _admin,
      overrides || {}
    ) as Promise<PriceOracleAggregator>;
  }
  getDeployTransaction(
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_admin, overrides || {});
  }
  attach(address: string): PriceOracleAggregator {
    return super.attach(address) as PriceOracleAggregator;
  }
  connect(signer: Signer): PriceOracleAggregator__factory {
    return super.connect(signer) as PriceOracleAggregator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceOracleAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PriceOracleAggregator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
    ],
    name: "UpdateOracle",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
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
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "assetToOracle",
    outputs: [
      {
        internalType: "contract IOracle",
        name: "",
        type: "address",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "getPriceInUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "contract IERC20",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "contract IOracle",
        name: "_oracle",
        type: "address",
      },
    ],
    name: "updateOracleForAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "viewPriceInUSD",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161082a38038061082a83398101604081905261002f9161005c565b600080546001600160a01b03909216620100000262010000600160b01b031990921691909117905561008a565b60006020828403121561006d578081fd5b81516001600160a01b0381168114610083578182fd5b9392505050565b610791806100996000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806352d1902d1161005b57806352d1902d146100f35780635df52114146100fb578063eb9d14a91461010e578063f851a4401461012157610088565b8063022661471461008d5780632e00d245146100b657806346951954146100d657806350d75d25146100eb575b600080fd5b6100a061009b366004610589565b610129565b6040516100ad9190610610565b60405180910390f35b6100c96100c4366004610589565b6101fa565b6040516100ad91906105fc565b6100e96100e4366004610589565b610215565b005b6100c9610251565b6100a0610260565b6100e96101093660046105c4565b610284565b6100a061011c366004610589565b61037a565b6100c9610418565b6001600160a01b0381811660009081526001602052604081205490911661016b5760405162461bcd60e51b8152600401610162906106d8565b60405180910390fd5b6001600160a01b0380831660009081526001602090815260408083205481516370d5301b60e11b8152915194169363e1aa603693600480840194938390030190829087803b1580156101bc57600080fd5b505af11580156101d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f491906105ac565b92915050565b6001602052600090815260409020546001600160a01b031681565b6000546201000090046001600160a01b031633146102455760405162461bcd60e51b81526004016101629061068d565b61024e8161042d565b50565b600061025b610540565b905090565b7f9059eaa97076fc8fbc19feea426633aeb7a2617add27106a2b81c655a26d222890565b6000546201000090046001600160a01b031633146102b45760405162461bcd60e51b81526004016101629061068d565b6001600160a01b0382166102da5760405162461bcd60e51b8152600401610162906106b1565b6001600160a01b0381166103005760405162461bcd60e51b8152600401610162906106d8565b6001600160a01b0382811660009081526001602052604090819020805473ffffffffffffffffffffffffffffffffffffffff191692841692909217909155517fb1d1442dba579887e297ac433e5716c847abf2dc052ee9de4869b7b1b8f6206d9061036e9084908490610630565b60405180910390a15050565b6001600160a01b038181166000908152600160205260408120549091166103b35760405162461bcd60e51b8152600401610162906106d8565b6001600160a01b0380831660009081526001602090815260409182902054825163f55fa17f60e01b8152925193169263f55fa17f926004808201939291829003018186803b15801561040457600080fd5b505afa1580156101d0573d6000803e3d6000fd5b6000546201000090046001600160a01b031681565b6000610437610540565b6001600160a01b0316141561045e5760405162461bcd60e51b81526004016101629061070f565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561049757600080fd5b505afa1580156104ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104cf91906105ac565b6104d7610260565b146104f45760405162461bcd60e51b81526004016101629061064a565b6104fd81610565565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc610526610260565b82604051610535929190610619565b60405180910390a150565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b60006020828403121561059a578081fd5b81356105a581610746565b9392505050565b6000602082840312156105bd578081fd5b5051919050565b600080604083850312156105d6578081fd5b82356105e181610746565b915060208301356105f181610746565b809150509250929050565b6001600160a01b0391909116815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b6001600160a01b0392831681529116602082015260400190565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b6020808252600a908201526927a7262cafa0a226a4a760b11b604082015260600190565b6020808252600d908201526c1253959053125117d054d4d155609a1b604082015260600190565b6020808252600e908201527f494e56414c49445f4f5241434c45000000000000000000000000000000000000604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6001600160a01b038116811461024e57600080fdfea2646970667358221220a2ce2d594c1e6e3c45b1db85ef7184fcf5fa73165287eba89c02817837d0373d64736f6c63430008010033";
