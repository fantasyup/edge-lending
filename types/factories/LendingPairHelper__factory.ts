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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516107c73803806107c783398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c610730610097600039600081816102ff015261054801526107306000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063b133c29114610046578063c1605f061461006f578063fbfa77cf14610082575b600080fd5b61005961005436600461056a565b610097565b6040516100669190610655565b60405180910390f35b61005961007d36600461056a565b610262565b61008a610546565b6040516100669190610641565b60608267ffffffffffffffff8111156100c057634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156100e9578160200160208202803683370190505b50905060005b8381101561025a57600085858381811061011957634e487b7160e01b600052603260045260246000fd5b905060200201602081019061012e91906105ea565b9050806001600160a01b031663f8d898986040518163ffffffff1660e01b815260040160206040518083038186803b15801561016957600080fd5b505afa15801561017d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a1919061060d565b6001600160a01b03166370a08231856040518263ffffffff1660e01b81526004016101cc9190610641565b60206040518083038186803b1580156101e457600080fd5b505afa1580156101f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021c9190610629565b83838151811061023c57634e487b7160e01b600052603260045260246000fd5b60209081029190910101525080610252816106bb565b9150506100ef565b509392505050565b60608267ffffffffffffffff81111561028b57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156102b4578160200160208202803683370190505b50905060005b8381101561025a5760008585838181106102e457634e487b7160e01b600052603260045260246000fd5b90506020020160208101906102f991906105ea565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635299493b836001600160a01b031663aabaecd66040518163ffffffff1660e01b815260040160206040518083038186803b15801561036557600080fd5b505afa158015610379573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039d919061060d565b60405163f919b4bf60e01b81526001600160a01b0386169063f919b4bf906103c9908b90600401610641565b60206040518083038186803b1580156103e157600080fd5b505afa1580156103f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104199190610629565b6040518363ffffffff1660e01b8152600401610436929190610699565b60206040518083038186803b15801561044e57600080fd5b505afa158015610462573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104869190610629565b6040516376b0397b60e11b81529091506001600160a01b0383169063ed6072f6906104b59084906004016106b2565b60206040518083038186803b1580156104cd57600080fd5b505afa1580156104e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105059190610629565b84848151811061052557634e487b7160e01b600052603260045260246000fd5b6020026020010181815250505050808061053e906106bb565b9150506102ba565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060006040848603121561057e578283fd5b833567ffffffffffffffff80821115610595578485fd5b818601915086601f8301126105a8578485fd5b8135818111156105b6578586fd5b87602080830285010111156105c9578586fd5b602092830195509350508401356105df816106e2565b809150509250925092565b6000602082840312156105fb578081fd5b8135610606816106e2565b9392505050565b60006020828403121561061e578081fd5b8151610606816106e2565b60006020828403121561063a578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b8181101561068d57835183529284019291840191600101610671565b50909695505050505050565b6001600160a01b03929092168252602082015260400190565b90815260200190565b60006000198214156106db57634e487b7160e01b81526011600452602481fd5b5060010190565b6001600160a01b03811681146106f757600080fd5b5056fea264697066735822122068cec6fa77865551fcedbae133dba06d07682e3d4f86af0c2e7cf0f60d6a7f3e64736f6c63430008010033";
