/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { LendingPairHelper } from "../LendingPairHelper";

export class LendingPairHelper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LendingPairHelper> {
    return super.deploy(_vault, overrides || {}) as Promise<LendingPairHelper>;
  }
  getDeployTransaction(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_vault, overrides || {});
  }
  attach(address: string): LendingPairHelper {
    return super.attach(address) as LendingPairHelper;
  }
  connect(signer: Signer): LendingPairHelper__factory {
    return super.connect(signer) as LendingPairHelper__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPairHelper {
    return new Contract(address, _abi, signerOrProvider) as LendingPairHelper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IBSVault",
        name: "_vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract IBSVault",
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
        internalType: "contract IBSLendingPair[]",
        name: "pairs",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "viewBorrowLimit",
    outputs: [
      {
        internalType: "uint256[]",
        name: "totals",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBSLendingPair[]",
        name: "pairs",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "viewBorrowedValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "totals",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBSLendingPair[]",
        name: "pairs",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "viewBorrowedValueInUSD",
    outputs: [
      {
        internalType: "uint256[]",
        name: "totals",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610ad5380380610ad583398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c610a3e610097600039600081816105e4015261082d0152610a3e6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063b133c29114610051578063b81c1aa61461007a578063c1605f061461008d578063fbfa77cf146100a0575b600080fd5b61006461005f36600461084f565b6100b5565b604051610071919061093a565b60405180910390f35b61006461008836600461084f565b610280565b61006461009b36600461084f565b610547565b6100a861082b565b6040516100719190610926565b60608267ffffffffffffffff8111156100de57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610107578160200160208202803683370190505b50905060005b8381101561027857600085858381811061013757634e487b7160e01b600052603260045260246000fd5b905060200201602081019061014c91906108cf565b9050806001600160a01b031663f8d898986040518163ffffffff1660e01b815260040160206040518083038186803b15801561018757600080fd5b505afa15801561019b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bf91906108f2565b6001600160a01b03166370a08231856040518263ffffffff1660e01b81526004016101ea9190610926565b60206040518083038186803b15801561020257600080fd5b505afa158015610216573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023a919061090e565b83838151811061025a57634e487b7160e01b600052603260045260246000fd5b60209081029190910101525080610270816109bf565b91505061010d565b509392505050565b60608267ffffffffffffffff8111156102a957634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156102d2578160200160208202803683370190505b50905060005b8381101561027857600085858381811061030257634e487b7160e01b600052603260045260246000fd5b905060200201602081019061031791906108cf565b90506000816001600160a01b0316637746efab866040518263ffffffff1660e01b81526004016103479190610926565b60206040518083038186803b15801561035f57600080fd5b505afa158015610373573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610397919061090e565b9050600081836001600160a01b0316637dc0d1d06040518163ffffffff1660e01b815260040160206040518083038186803b1580156103d557600080fd5b505afa1580156103e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040d91906108f2565b6001600160a01b03166302266147856001600160a01b03166338d52e0f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561045457600080fd5b505afa158015610468573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048c91906108f2565b6040518263ffffffff1660e01b81526004016104a89190610926565b60206040518083038186803b1580156104c057600080fd5b505afa1580156104d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f8919061090e565b61050291906109a0565b90508085858151811061052557634e487b7160e01b600052603260045260246000fd5b602002602001018181525050505050808061053f906109bf565b9150506102d8565b60608267ffffffffffffffff81111561057057634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610599578160200160208202803683370190505b50905060005b838110156102785760008585838181106105c957634e487b7160e01b600052603260045260246000fd5b90506020020160208101906105de91906108cf565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635299493b836001600160a01b031663aabaecd66040518163ffffffff1660e01b815260040160206040518083038186803b15801561064a57600080fd5b505afa15801561065e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068291906108f2565b60405163f919b4bf60e01b81526001600160a01b0386169063f919b4bf906106ae908b90600401610926565b60206040518083038186803b1580156106c657600080fd5b505afa1580156106da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fe919061090e565b6040518363ffffffff1660e01b815260040161071b92919061097e565b60206040518083038186803b15801561073357600080fd5b505afa158015610747573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076b919061090e565b6040516376b0397b60e11b81529091506001600160a01b0383169063ed6072f69061079a908490600401610997565b60206040518083038186803b1580156107b257600080fd5b505afa1580156107c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ea919061090e565b84848151811061080a57634e487b7160e01b600052603260045260246000fd5b60200260200101818152505050508080610823906109bf565b91505061059f565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080600060408486031215610863578283fd5b833567ffffffffffffffff8082111561087a578485fd5b818601915086601f83011261088d578485fd5b81358181111561089b578586fd5b87602080830285010111156108ae578586fd5b602092830195509350508401356108c4816109f0565b809150509250925092565b6000602082840312156108e0578081fd5b81356108eb816109f0565b9392505050565b600060208284031215610903578081fd5b81516108eb816109f0565b60006020828403121561091f578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b8181101561097257835183529284019291840191600101610956565b50909695505050505050565b6001600160a01b03929092168252602082015260400190565b90815260200190565b60008160001904831182151516156109ba576109ba6109da565b500290565b60006000198214156109d3576109d36109da565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610a0557600080fd5b5056fea2646970667358221220d15b0d343f7c499be64d7d659d5b5cea17003b78487b31e1de198a7f72e0efcb64736f6c63430008010033";
