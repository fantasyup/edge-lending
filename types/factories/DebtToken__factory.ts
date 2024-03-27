/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { DebtToken } from "../DebtToken";

export class DebtToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DebtToken> {
    return super.deploy(overrides || {}) as Promise<DebtToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DebtToken {
    return super.attach(address) as DebtToken;
  }
  connect(signer: Signer): DebtToken__factory {
    return super.connect(signer) as DebtToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DebtToken {
    return new Contract(address, _abi, signerOrProvider) as DebtToken;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "DelegateBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "borrowAllowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
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
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "delegateBorrow",
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
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBorrowWithSignedMessage",
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
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "increaseTotalDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "__owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_debtOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "principal",
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
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlying",
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
        name: "",
        type: "address",
      },
    ],
    name: "userBorrowAllowanceNonce",
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
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561003457600080fd5b5060805161161661004d600039600050506116166000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80636f307dc3116100f9578063a457c2d711610097578063d505accf11610071578063d505accf1461035a578063dd62ed3e1461036d578063ecd267271461037b578063ffa1ad741461038e576101b9565b8063a457c2d71461028f578063a9059cbb14610339578063c6c3bbe614610347576101b9565b80638da5cb5b116100d35780638da5cb5b1461030357806395d89b411461030b578063999af068146103135780639dc29fac14610326576101b9565b80636f307dc3146102c857806370a08231146102dd5780637ecebe00146102f0576101b9565b806323b872dd116101665780633644e515116101405780633644e51514610287578063395093511461028f57806340c10f19146102a25780636bd76d24146102b5576101b9565b806323b872dd1461024c5780632ce0f9d61461025f578063313ce56714610272576101b9565b8063146fac4511610197578063146fac451461021157806318160ddd146102245780632016a0d214610239576101b9565b806306fdde03146101be578063095ea7b3146101dc578063139cace5146101fc575b600080fd5b6101c6610396565b6040516101d3919061125f565b60405180910390f35b6101ef6101ea366004611102565b610424565b6040516101d391906111cf565b61020f61020a3660046110a2565b610447565b005b61020f61021f36600461112b565b610631565b61022c61066f565b6040516101d391906111da565b61020f610247366004610f79565b610676565b6101ef61025a366004610ffb565b6107f3565b61022c61026d366004610f26565b61080d565b61027a61082c565b6040516101d39190611512565b61022c610835565b6101ef61029d366004611102565b610844565b61020f6102b0366004611102565b61085e565b61022c6102c3366004610f47565b610896565b6102d06108c1565b6040516101d39190611192565b61022c6102eb366004610f26565b6108d6565b61022c6102fe366004610f26565b61095d565b6102d0610978565b6101c6610987565b61022c610321366004610f26565b610994565b61020f610334366004611102565b6109a6565b6101ef61025a366004611102565b61020f610355366004610ffb565b610a2c565b61020f610368366004611036565b610aaf565b61022c61029d366004610f47565b61020f610389366004611102565b610ac7565b61022c610b53565b600380546103a39061154f565b80601f01602080910402602001604051908101604052809291908181526020018280546103cf9061154f565b801561041c5780601f106103f15761010080835404028352916020019161041c565b820191906000526020600020905b8154815290600101906020018083116103ff57829003601f168201915b505050505081565b600060405162461bcd60e51b815260040161043e9061146d565b60405180910390fd5b6001600160a01b03851661046d5760405162461bcd60e51b815260040161043e90611357565b6000610477610b58565b6001600160a01b0388166000908152600f6020526040812080547fd7dff63fb02bf41922cf0ba55585a097a8e6314efac85062e744b1b846ef0d82927f4dbcfb5165b0222661b65bf3148c2d16a4036a909a3e8c9f9436d5b8439a1866928c928c928c92906104e58361158a565b919050556040516020016104fe969594939291906111e3565b60405160208183030381529060405280519060200120604051602001610525929190611177565b6040516020818303038152906040528051906020012090506000600182868686604051600081526020016040526040516105629493929190611241565b6020604051602081039080840390855afa158015610584573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b0316146105c15760405162461bcd60e51b815260040161043e90611320565b6001600160a01b038089166000908152600e60209081526040808320938b168352929052819020879055517f8af24aec445699c4c2d8918aa7fd258691a51df1e6e7b0cb07888072c752fcc89061061f908a908a908a9042906111a6565b60405180910390a15050505050505050565b600d546001600160a01b0316331461065b5760405162461bcd60e51b815260040161043e906112b2565b806002546106699190611520565b60025550565b6002545b90565b600c54610100900460ff168061068f575061068f610b8c565b8061069d5750600c5460ff16155b6106b95760405162461bcd60e51b815260040161043e9061137b565b600c54610100900460ff161580156106e457600c805460ff1961ff0019909116610100171660011790555b6001600160a01b03851661070a5760405162461bcd60e51b815260040161043e90611446565b84600d60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000846001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561076c57600080fd5b505afa158015610780573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a4919061115b565b90506107b1848483610b92565b6107ba84610bd2565b50600c805475ffffffffffffffffffffffffffffffffffffffff00001916905580156107ec57600c805461ff00191690555b5050505050565b600060405162461bcd60e51b815260040161043e906112e9565b6001600160a01b0381166000908152602081905260409020545b919050565b60045460ff1681565b600061083f610b58565b905090565b600060405162461bcd60e51b815260040161043e906113d8565b600d546001600160a01b031633146108885760405162461bcd60e51b815260040161043e906112b2565b6108928282610bf8565b5050565b6001600160a01b039182166000908152600e6020908152604080832093909416825291909152205490565b600c546201000090046001600160a01b031681565b600d54604051637746efab60e01b81526000916001600160a01b031690637746efab90610907908590600401611192565b60206040518083038186803b15801561091f57600080fd5b505afa158015610933573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109579190611143565b92915050565b6001600160a01b03166000908152600b602052604090205490565b600d546001600160a01b031690565b600580546103a39061154f565b600f6020526000908152604090205481565b600d546001600160a01b031633146109d05760405162461bcd60e51b815260040161043e906112b2565b806109da836108d6565b6109e49190611538565b6001600160a01b038316600090815260208190526040902055600254811115610a11576000600255610892565b8060026000828254610a239190611538565b90915550505050565b600d546001600160a01b03163314610a565760405162461bcd60e51b815260040161043e906112b2565b6001600160a01b038316610a7c5760405162461bcd60e51b815260040161043e9061140f565b816001600160a01b0316836001600160a01b031614610aa057610aa0838383610cac565b610aaa8382610bf8565b505050565b60405162461bcd60e51b815260040161043e906114a4565b6001600160a01b038216610aed5760405162461bcd60e51b815260040161043e90611357565b336000818152600e602090815260408083206001600160a01b038716845290915290819020839055517f8af24aec445699c4c2d8918aa7fd258691a51df1e6e7b0cb07888072c752fcc891610b47918590859042906111a6565b60405180910390a15050565b600181565b6000600754610b65610d49565b1415610b745750600654610673565b610b85600a54600854600954610d4d565b9050610673565b303b1590565b8251610ba5906003906020860190610def565b508151610bb9906005906020850190610def565b506004805460ff191660ff929092169190911790555050565b610bf581604051806040016040528060018152602001603160f81b815250610d8e565b50565b6001600160a01b038216610c1e5760405162461bcd60e51b815260040161043e906114db565b8060026000828254610c309190611520565b90915550506001600160a01b03821660009081526020819052604081208054839290610c5d908490611520565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610ca09085906111da565b60405180910390a35050565b6001600160a01b038084166000908152600e6020908152604080832093861683529290522054610cdd908290611538565b6001600160a01b038085166000908152600e60209081526040808320938716835292905281902091909155517f8af24aec445699c4c2d8918aa7fd258691a51df1e6e7b0cb07888072c752fcc890610d3c9085908590859042906111a6565b60405180910390a1505050565b4690565b6000838383610d5a610d49565b30604051602001610d6f959493929190611215565b6040516020818303038152906040528051906020012090509392505050565b8151602080840191909120825191830191909120600882905560098190557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610dd5610d49565b600755610de3818484610d4d565b600655600a5550505050565b828054610dfb9061154f565b90600052602060002090601f016020900481019282610e1d5760008555610e63565b82601f10610e3657805160ff1916838001178555610e63565b82800160010185558215610e63579182015b82811115610e63578251825591602001919060010190610e48565b50610e6f929150610e73565b5090565b5b80821115610e6f5760008155600101610e74565b80356001600160a01b038116811461082757600080fd5b600082601f830112610eaf578081fd5b813567ffffffffffffffff80821115610eca57610eca6115bb565b604051601f8301601f19908116603f01168101908282118183101715610ef257610ef26115bb565b81604052838152866020858801011115610f0a578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610f37578081fd5b610f4082610e88565b9392505050565b60008060408385031215610f59578081fd5b610f6283610e88565b9150610f7060208401610e88565b90509250929050565b60008060008060808587031215610f8e578182fd5b610f9785610e88565b9350610fa560208601610e88565b9250604085013567ffffffffffffffff80821115610fc1578384fd5b610fcd88838901610e9f565b93506060870135915080821115610fe2578283fd5b50610fef87828801610e9f565b91505092959194509250565b60008060006060848603121561100f578283fd5b61101884610e88565b925061102660208501610e88565b9150604084013590509250925092565b600080600080600080600060e0888a031215611050578283fd5b61105988610e88565b965061106760208901610e88565b955060408801359450606088013593506080880135611085816115d1565b9699959850939692959460a0840135945060c09093013592915050565b60008060008060008060c087890312156110ba578182fd5b6110c387610e88565b95506110d160208801610e88565b94506040870135935060608701356110e8816115d1565b9598949750929560808101359460a0909101359350915050565b60008060408385031215611114578182fd5b61111d83610e88565b946020939093013593505050565b60006020828403121561113c578081fd5b5035919050565b600060208284031215611154578081fd5b5051919050565b60006020828403121561116c578081fd5b8151610f40816115d1565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b901515815260200190565b90815260200190565b95865260208601949094526001600160a01b03928316604086015291166060840152608083015260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b8181101561128b5785810183015185820160400152820161126f565b8181111561129c5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526011908201527f4f4e4c595f4c454e44494e475f50414952000000000000000000000000000000604082015260600190565b60208082526016908201527f5452414e534645525f4e4f545f535550504f5254454400000000000000000000604082015260600190565b60208082526011908201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604082015260600190565b6020808252600a9082015269494e56414c49445f544f60b01b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526017908201527f414c4c4f57414e43455f4e4f545f535550504f52544544000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f444542545f4f574e45520000000000000000000000000000604082015260600190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b60208082526016908201527f415050524f56414c5f4e4f545f535550504f5254454400000000000000000000604082015260600190565b60208082526014908201527f5045524d49545f4e4f545f535550504f52544544000000000000000000000000604082015260600190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b60008219821115611533576115336115a5565b500190565b60008282101561154a5761154a6115a5565b500390565b60028104600182168061156357607f821691505b6020821081141561158457634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561159e5761159e6115a5565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60ff81168114610bf557600080fdfea26469706673582212205d915c4331c2f11579702889f7e4c32aec849d148f13679eef53656be6b3a3ea64736f6c63430008010033";
