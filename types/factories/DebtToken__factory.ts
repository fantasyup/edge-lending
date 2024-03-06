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
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "account",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
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
    inputs: [],
    name: "pair",
    outputs: [
      {
        internalType: "contract IBSLendingPair",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
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
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
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
];

const _bytecode =
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960809081525034801561003757600080fd5b506080516129f96100536000396000610b4501526129f96000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80637ecebe00116100b8578063a457c2d71161007c578063a457c2d714610367578063a8aa1b3114610397578063a9059cbb146103b5578063d505accf146103e5578063dd62ed3e14610401578063f2fde38b1461043157610142565b80637ecebe00146102c35780638da5cb5b146102f3578063906571471461031157806395d89b411461032d5780639dc29fac1461034b57610142565b80633644e5151161010a5780633644e51514610201578063395093511461021f57806340c10f191461024f5780636f307dc31461026b57806370a0823114610289578063715018a6146102b957610142565b806306fdde0314610147578063095ea7b31461016557806318160ddd1461019557806323b872dd146101b3578063313ce567146101e3575b600080fd5b61014f61044d565b60405161015c9190612075565b60405180910390f35b61017f600480360381019061017a9190611bc3565b6104db565b60405161018c9190611f2b565b60405180910390f35b61019d610518565b6040516101aa9190612277565b60405180910390f35b6101cd60048036038101906101c89190611a57565b610522565b6040516101da9190611f2b565b60405180910390f35b6101eb61055f565b6040516101f89190612292565b60405180910390f35b610209610572565b6040516102169190611f46565b60405180910390f35b61023960048036038101906102349190611bc3565b610581565b6040516102469190611f2b565b60405180910390f35b61026960048036038101906102649190611bc3565b6105be565b005b61027361065c565b6040516102809190611f10565b60405180910390f35b6102a3600480360381019061029e91906119f2565b610682565b6040516102b09190612277565b60405180910390f35b6102c16106ca565b005b6102dd60048036038101906102d891906119f2565b61081b565b6040516102ea9190612277565b60405180910390f35b6102fb610864565b6040516103089190611f10565b60405180910390f35b61032b60048036038101906103269190611b44565b61088e565b005b610335610932565b6040516103429190612075565b60405180910390f35b61036560048036038101906103609190611bc3565b6109c0565b005b610381600480360381019061037c9190611bc3565b610a5e565b60405161038e9190611f2b565b60405180910390f35b61039f610a9b565b6040516103ac919061205a565b60405180910390f35b6103cf60048036038101906103ca9190611bc3565b610ac1565b6040516103dc9190611f2b565b60405180910390f35b6103ff60048036038101906103fa9190611aa6565b610afe565b005b61041b60048036038101906104169190611a1b565b610ccc565b6040516104289190612277565b60405180910390f35b61044b600480360381019061044691906119f2565b610d09565b005b6003805461045a90612479565b80601f016020809104026020016040519081016040528092919081815260200182805461048690612479565b80156104d35780601f106104a8576101008083540402835291602001916104d3565b820191906000526020600020905b8154815290600101906020018083116104b657829003601f168201915b505050505081565b60006040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050f90612237565b60405180910390fd5b6000600254905090565b60006040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055690612117565b60405180910390fd5b600460009054906101000a900460ff1681565b600061057c610ec9565b905090565b60006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590612177565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600c60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461064e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610645906121d7565b60405180910390fd5b6106588282610efd565b5050565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600c60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461075a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610751906121d7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600c60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600c60026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600c60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610896611077565b6108a282826012611222565b6108ab82611270565b82600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600e60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6005805461093f90612479565b80601f016020809104026020016040519081016040528092919081815260200182805461096b90612479565b80156109b85780601f1061098d576101008083540402835291602001916109b8565b820191906000526020600020905b81548152906001019060200180831161099b57829003601f168201915b505050505081565b3373ffffffffffffffffffffffffffffffffffffffff16600c60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a47906121d7565b60405180910390fd5b610a5a82826112b2565b5050565b60006040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9290612177565b60405180910390fd5b600e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af590612117565b60405180910390fd5b83421115610b41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b38906120f7565b60405180910390fd5b60007f0000000000000000000000000000000000000000000000000000000000000000888888600b60008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205489604051602001610bbd96959493929190611f61565b6040516020818303038152906040528051906020012090506000610be08261142c565b90506000610bf082878787611465565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c57906121b7565b60405180910390fd5b600b60008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610cb0906124dc565b9190505550610cc08a8a8a6115f0565b50505050505050505050565b60006040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0090612177565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600c60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d90906121d7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e00906120b7565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600c60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600c60026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600754610ed66117bb565b1415610ee6576006549050610efa565b610ef7600a546008546009546117c3565b90505b90565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6490612257565b60405180910390fd5b80600254610f7b919061232a565b600281905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fcb919061232a565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161106b9190612277565b60405180910390a35050565b600c60019054906101000a900460ff16806110965750611095611804565b5b806110ae5750600c60009054906101000a900460ff16155b6110ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e490612157565b60405180910390fd5b6000600c60019054906101000a900460ff16159050801561113f576001600c60016101000a81548160ff0219169083151502179055506001600c60006101000a81548160ff0219169083151502179055505b33600c60026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600c60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3801561121f576000600c60016101000a81548160ff0219169083151502179055505b50565b8260039080519060200190611238929190611893565b50816005908051906020019061124f929190611893565b5080600460006101000a81548160ff021916908360ff160217905550505050565b6112af816040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525061181b565b50565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611322576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611319906121f7565b60405180910390fd5b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461136c9190612380565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806002546113bc9190612380565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516114209190612277565b60405180910390a35050565b6000611436610ec9565b82604051602001611448929190611ed9565b604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c11156114cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c490612137565b60405180910390fd5b601b8460ff1614806114e25750601c8460ff16145b611521576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151890612197565b60405180910390fd5b6000600186868686604051600081526020016040526040516115469493929190612015565b6020604051602081039080840390855afa158015611568573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156115e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115db90612097565b60405180910390fd5b80915050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611660576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165790612217565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c7906120d7565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516117ae9190612277565b60405180910390a3505050565b600046905090565b60008383836117d06117bb565b306040516020016117e5959493929190611fc2565b6040516020818303038152906040528051906020012090509392505050565b6000803090506000813b9050600081149250505090565b60008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f9050826008819055508160098190555061186e6117bb565b60078190555061187f8184846117c3565b60068190555080600a819055505050505050565b82805461189f90612479565b90600052602060002090601f0160209004810192826118c15760008555611908565b82601f106118da57805160ff1916838001178555611908565b82800160010185558215611908579182015b828111156119075782518255916020019190600101906118ec565b5b5090506119159190611919565b5090565b5b8082111561193257600081600090555060010161191a565b5090565b6000611949611944846122d2565b6122ad565b90508281526020810184848401111561196157600080fd5b61196c848285612437565b509392505050565b60008135905061198381612967565b92915050565b6000813590506119988161297e565b92915050565b600082601f8301126119af57600080fd5b81356119bf848260208601611936565b91505092915050565b6000813590506119d781612995565b92915050565b6000813590506119ec816129ac565b92915050565b600060208284031215611a0457600080fd5b6000611a1284828501611974565b91505092915050565b60008060408385031215611a2e57600080fd5b6000611a3c85828601611974565b9250506020611a4d85828601611974565b9150509250929050565b600080600060608486031215611a6c57600080fd5b6000611a7a86828701611974565b9350506020611a8b86828701611974565b9250506040611a9c868287016119c8565b9150509250925092565b600080600080600080600060e0888a031215611ac157600080fd5b6000611acf8a828b01611974565b9750506020611ae08a828b01611974565b9650506040611af18a828b016119c8565b9550506060611b028a828b016119c8565b9450506080611b138a828b016119dd565b93505060a0611b248a828b01611989565b92505060c0611b358a828b01611989565b91505092959891949750929550565b600080600060608486031215611b5957600080fd5b6000611b6786828701611974565b935050602084013567ffffffffffffffff811115611b8457600080fd5b611b908682870161199e565b925050604084013567ffffffffffffffff811115611bad57600080fd5b611bb98682870161199e565b9150509250925092565b60008060408385031215611bd657600080fd5b6000611be485828601611974565b9250506020611bf5858286016119c8565b9150509250929050565b611c08816123b4565b82525050565b611c17816123c6565b82525050565b611c26816123d2565b82525050565b611c3d611c38826123d2565b612525565b82525050565b611c4c81612413565b82525050565b6000611c5d82612303565b611c67818561230e565b9350611c77818560208601612446565b611c80816125bc565b840191505092915050565b6000611c9860188361230e565b9150611ca3826125cd565b602082019050919050565b6000611cbb60268361230e565b9150611cc6826125f6565b604082019050919050565b6000611cde60228361230e565b9150611ce982612645565b604082019050919050565b6000611d0160028361231f565b9150611d0c82612694565b600282019050919050565b6000611d24601d8361230e565b9150611d2f826126bd565b602082019050919050565b6000611d4760168361230e565b9150611d52826126e6565b602082019050919050565b6000611d6a60228361230e565b9150611d758261270f565b604082019050919050565b6000611d8d602e8361230e565b9150611d988261275e565b604082019050919050565b6000611db060178361230e565b9150611dbb826127ad565b602082019050919050565b6000611dd360228361230e565b9150611dde826127d6565b604082019050919050565b6000611df6601e8361230e565b9150611e0182612825565b602082019050919050565b6000611e1960208361230e565b9150611e248261284e565b602082019050919050565b6000611e3c60218361230e565b9150611e4782612877565b604082019050919050565b6000611e5f60248361230e565b9150611e6a826128c6565b604082019050919050565b6000611e8260168361230e565b9150611e8d82612915565b602082019050919050565b6000611ea5601f8361230e565b9150611eb08261293e565b602082019050919050565b611ec4816123fc565b82525050565b611ed381612406565b82525050565b6000611ee482611cf4565b9150611ef08285611c2c565b602082019150611f008284611c2c565b6020820191508190509392505050565b6000602082019050611f256000830184611bff565b92915050565b6000602082019050611f406000830184611c0e565b92915050565b6000602082019050611f5b6000830184611c1d565b92915050565b600060c082019050611f766000830189611c1d565b611f836020830188611bff565b611f906040830187611bff565b611f9d6060830186611ebb565b611faa6080830185611ebb565b611fb760a0830184611ebb565b979650505050505050565b600060a082019050611fd76000830188611c1d565b611fe46020830187611c1d565b611ff16040830186611c1d565b611ffe6060830185611ebb565b61200b6080830184611bff565b9695505050505050565b600060808201905061202a6000830187611c1d565b6120376020830186611eca565b6120446040830185611c1d565b6120516060830184611c1d565b95945050505050565b600060208201905061206f6000830184611c43565b92915050565b6000602082019050818103600083015261208f8184611c52565b905092915050565b600060208201905081810360008301526120b081611c8b565b9050919050565b600060208201905081810360008301526120d081611cae565b9050919050565b600060208201905081810360008301526120f081611cd1565b9050919050565b6000602082019050818103600083015261211081611d17565b9050919050565b6000602082019050818103600083015261213081611d3a565b9050919050565b6000602082019050818103600083015261215081611d5d565b9050919050565b6000602082019050818103600083015261217081611d80565b9050919050565b6000602082019050818103600083015261219081611da3565b9050919050565b600060208201905081810360008301526121b081611dc6565b9050919050565b600060208201905081810360008301526121d081611de9565b9050919050565b600060208201905081810360008301526121f081611e0c565b9050919050565b6000602082019050818103600083015261221081611e2f565b9050919050565b6000602082019050818103600083015261223081611e52565b9050919050565b6000602082019050818103600083015261225081611e75565b9050919050565b6000602082019050818103600083015261227081611e98565b9050919050565b600060208201905061228c6000830184611ebb565b92915050565b60006020820190506122a76000830184611eca565b92915050565b60006122b76122c8565b90506122c382826124ab565b919050565b6000604051905090565b600067ffffffffffffffff8211156122ed576122ec61258d565b5b6122f6826125bc565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000612335826123fc565b9150612340836123fc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156123755761237461252f565b5b828201905092915050565b600061238b826123fc565b9150612396836123fc565b9250828210156123a9576123a861252f565b5b828203905092915050565b60006123bf826123dc565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061241e82612425565b9050919050565b6000612430826123dc565b9050919050565b82818337600083830152505050565b60005b83811015612464578082015181840152602081019050612449565b83811115612473576000848401525b50505050565b6000600282049050600182168061249157607f821691505b602082108114156124a5576124a461255e565b5b50919050565b6124b4826125bc565b810181811067ffffffffffffffff821117156124d3576124d261258d565b5b80604052505050565b60006124e7826123fc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561251a5761251961252f565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b7f45524332305065726d69743a206578706972656420646561646c696e65000000600082015250565b7f5452414e534645525f4e4f545f535550504f5254454400000000000000000000600082015250565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f414c4c4f57414e43455f4e4f545f535550504f52544544000000000000000000600082015250565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332305065726d69743a20696e76616c6964207369676e61747572650000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f415050524f56414c5f4e4f545f535550504f5254454400000000000000000000600082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b612970816123b4565b811461297b57600080fd5b50565b612987816123d2565b811461299257600080fd5b50565b61299e816123fc565b81146129a957600080fd5b50565b6129b581612406565b81146129c057600080fd5b5056fea26469706673582212203526273cff6e6ab091b74608bd0e4c1670dafce4e6f8004d079229507e31f0fd64736f6c63430008010033";
