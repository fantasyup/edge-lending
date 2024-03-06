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
    _blackSmithTeam: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PriceOracleAggregator> {
    return super.deploy(
      _blackSmithTeam,
      overrides || {}
    ) as Promise<PriceOracleAggregator>;
  }
  getDeployTransaction(
    _blackSmithTeam: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_blackSmithTeam, overrides || {});
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
        name: "_blackSmithTeam",
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
    name: "blackSmithTeam",
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
  "0x608060405234801561001057600080fd5b50604051610a9b380380610a9b8339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100ff565b600081519050610087816100e8565b92915050565b60006020828403121561009f57600080fd5b60006100ad84828501610078565b91505092915050565b60006100c1826100c8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f1816100b6565b81146100fc57600080fd5b50565b61098d8061010e6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063022661471461005c5780632e00d2451461008c5780635b643561146100bc5780635df52114146100da578063eb9d14a9146100f6575b600080fd5b610076600480360381019061007191906106a9565b610126565b6040516100839190610815565b60405180910390f35b6100a660048036038101906100a191906106a9565b6102dc565b6040516100b391906107da565b60405180910390f35b6100c461030f565b6040516100d19190610796565b60405180910390f35b6100f460048036038101906100ef91906106d2565b610333565b005b610110600480360381019061010b91906106a9565b6104b6565b60405161011d9190610815565b60405180910390f35b60008073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156101f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ed906107f5565b60405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1aa60366040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561029d57600080fd5b505af11580156102b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d5919061070e565b9050919050565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461038b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f2906107f5565b60405180910390fd5b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fb1d1442dba579887e297ac433e5716c847abf2dc052ee9de4869b7b1b8f6206d82826040516104aa9291906107b1565b60405180910390a15050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610586576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057d906107f5565b60405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f55fa17f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561062b57600080fd5b505afa15801561063f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610663919061070e565b9050919050565b60008135905061067981610912565b92915050565b60008135905061068e81610929565b92915050565b6000815190506106a381610940565b92915050565b6000602082840312156106bb57600080fd5b60006106c98482850161066a565b91505092915050565b600080604083850312156106e557600080fd5b60006106f38582860161066a565b92505060206107048582860161067f565b9150509250929050565b60006020828403121561072057600080fd5b600061072e84828501610694565b91505092915050565b61074081610841565b82525050565b61074f816108a1565b82525050565b61075e816108c5565b82525050565b6000610771600e83610830565b915061077c826108e9565b602082019050919050565b61079081610897565b82525050565b60006020820190506107ab6000830184610737565b92915050565b60006040820190506107c66000830185610746565b6107d36020830184610755565b9392505050565b60006020820190506107ef6000830184610755565b92915050565b6000602082019050818103600083015261080e81610764565b9050919050565b600060208201905061082a6000830184610787565b92915050565b600082825260208201905092915050565b600061084c82610877565b9050919050565b600061085e82610841565b9050919050565b600061087082610841565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006108ac826108b3565b9050919050565b60006108be82610877565b9050919050565b60006108d0826108d7565b9050919050565b60006108e282610877565b9050919050565b7f494e56414c49445f4f5241434c45000000000000000000000000000000000000600082015250565b61091b81610853565b811461092657600080fd5b50565b61093281610865565b811461093d57600080fd5b50565b61094981610897565b811461095457600080fd5b5056fea2646970667358221220683a6f187bdf5a20f5f903f6a31cecfedd59fbf47729ef1bf93d51555b5f3ffb64736f6c63430008010033";
