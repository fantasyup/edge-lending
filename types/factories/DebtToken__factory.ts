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
        name: "balance",
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
        internalType: "contract IBSLendingPair",
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
];

const _bytecode =
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561003457600080fd5b506080516115e761005060003960006107da01526115e76000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80636f307dc3116100ad5780639dc29fac116100715780639dc29fac1461024d578063a457c2d7146101dc578063a9059cbb14610260578063d505accf1461026e578063dd62ed3e146102815761012c565b80636f307dc31461020257806370a08231146102175780637ecebe001461022a5780638da5cb5b1461023d57806395d89b41146102455761012c565b806323b872dd116100f457806323b872dd146101ac578063313ce567146101bf5780633644e515146101d457806339509351146101dc57806340c10f19146101ef5761012c565b806306fdde0314610131578063095ea7b31461014f578063146fac451461016f57806318160ddd146101845780632016a0d214610199575b600080fd5b61013961028f565b6040516101469190611107565b60405180910390f35b61016261015d366004610f65565b61031d565b6040516101469190611075565b61018261017d366004611016565b610340565b005b61018c61037e565b6040516101469190611080565b6101826101a7366004610f90565b610385565b6101626101ba366004610eb0565b61049e565b6101c76104b8565b604051610146919061149e565b61018c6104c1565b6101626101ea366004610f65565b6104d0565b6101826101fd366004610f65565b6104ea565b61020a610522565b6040516101469190611061565b61018c610225366004610e55565b610537565b61018c610238366004610e55565b61068c565b61020a6106a7565b6101396106b6565b61018261025b366004610f65565b6106c3565b6101626101ba366004610f65565b61018261027c366004610ef0565b610796565b61018c6101ea366004610e78565b6003805461029c9061151a565b80601f01602080910402602001604051908101604052809291908181526020018280546102c89061151a565b80156103155780601f106102ea57610100808354040283529160200191610315565b820191906000526020600020905b8154815290600101906020018083116102f857829003601f168201915b505050505081565b600060405162461bcd60e51b815260040161033790611430565b60405180910390fd5b600d546001600160a01b0316331461036a5760405162461bcd60e51b8152600401610337906113b7565b8060025461037891906114ac565b60025550565b6002545b90565b600c54610100900460ff168061039e575061039e6108af565b806103ac5750600c5460ff16155b6103c85760405162461bcd60e51b8152600401610337906112aa565b600c54610100900460ff161580156103f357600c805460ff1961ff0019909116610100171660011790555b6001600160a01b0385166104195760405162461bcd60e51b815260040161033790611283565b600d805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03871617905561044d838360126108b5565b610456836108f5565b600c805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b03871602179055801561049757600c805461ff00191690555b5050505050565b600060405162461bcd60e51b81526004016103379061120a565b60045460ff1681565b60006104cb61091b565b905090565b600060405162461bcd60e51b815260040161033790611307565b600d546001600160a01b031633146105145760405162461bcd60e51b8152600401610337906113b7565b61051e828261094f565b5050565b600c546201000090046001600160a01b031681565b6001600160a01b03811660009081526020819052604081205481908061056257600092505050610687565b600d546040516364cc85f160e01b81526000916001600160a01b0316906364cc85f190610593908890600401611061565b60206040518083038186803b1580156105ab57600080fd5b505afa1580156105bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e3919061102e565b9050600d60009054906101000a90046001600160a01b03166001600160a01b031663aa5af0fd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561063357600080fd5b505afa158015610647573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066b919061102e565b61067590836114e4565b925061068181846114c4565b93505050505b919050565b6001600160a01b03166000908152600b602052604090205490565b600d546001600160a01b031690565b6005805461029c9061151a565b600d546001600160a01b031633146106ed5760405162461bcd60e51b8152600401610337906113b7565b6107196040518060400160405280600b81526020016a746f74616c537570706c7960a81b815250610a05565b610724600254610a48565b61072d81610a48565b8061073783610537565b6107419190611503565b6001600160a01b038316600090815260208190526040902055600254610768908290611503565b60025560408051808201909152600b81526a746f74616c537570706c7960a81b602082015261051e90610a05565b834211156107b65760405162461bcd60e51b8152600401610337906111d3565b6001600160a01b0387166000908152600b60209081526040808320549051610809927f0000000000000000000000000000000000000000000000000000000000000000928c928c928c92918c9101611089565b604051602081830303815290604052805190602001209050600061082c82610a8b565b9050600061083c82878787610ac4565b9050896001600160a01b0316816001600160a01b03161461086f5760405162461bcd60e51b815260040161033790611380565b6001600160a01b038a166000908152600b6020526040812080549161089383611555565b91905055506108a38a8a8a610bba565b50505050505050505050565b303b1590565b82516108c8906003906020860190610d35565b5081516108dc906005906020850190610d35565b506004805460ff191660ff929092169190911790555050565b61091881604051806040016040528060018152602001603160f81b815250610c6e565b50565b6000600754610928610ccf565b14156109375750600654610382565b610948600a54600854600954610cd3565b9050610382565b6001600160a01b0382166109755760405162461bcd60e51b815260040161033790611467565b8060025461098391906114ac565b6002556001600160a01b0382166000908152602081905260409020546109aa9082906114ac565b6001600160a01b0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906109f9908590611080565b60405180910390a35050565b61091881604051602401610a199190611107565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052610d14565b61091881604051602401610a5c9190611080565b60408051601f198184030181529190526020810180516001600160e01b031663f5b1bba960e01b179052610d14565b6000610a9561091b565b82604051602001610aa7929190611046565b604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610b065760405162461bcd60e51b815260040161033790611241565b8360ff16601b1480610b1b57508360ff16601c145b610b375760405162461bcd60e51b81526004016103379061133e565b600060018686868660405160008152602001604052604051610b5c94939291906110e9565b6020604051602081039080840390855afa158015610b7e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610bb15760405162461bcd60e51b81526004016103379061115a565b95945050505050565b6001600160a01b038316610be05760405162461bcd60e51b8152600401610337906113ec565b6001600160a01b038216610c065760405162461bcd60e51b815260040161033790611191565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610c61908590611080565b60405180910390a3505050565b8151602080840191909120825191830191909120600882905560098190557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610cb5610ccf565b600755610cc3818484610cd3565b600655600a5550505050565b4690565b6000838383610ce0610ccf565b30604051602001610cf59594939291906110bd565b6040516020818303038152906040528051906020012090509392505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b828054610d419061151a565b90600052602060002090601f016020900481019282610d635760008555610da9565b82601f10610d7c57805160ff1916838001178555610da9565b82800160010185558215610da9579182015b82811115610da9578251825591602001919060010190610d8e565b50610db5929150610db9565b5090565b5b80821115610db55760008155600101610dba565b600082601f830112610dde578081fd5b813567ffffffffffffffff80821115610df957610df9611586565b604051601f8301601f19908116603f01168101908282118183101715610e2157610e21611586565b81604052838152866020858801011115610e39578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610e66578081fd5b8135610e718161159c565b9392505050565b60008060408385031215610e8a578081fd5b8235610e958161159c565b91506020830135610ea58161159c565b809150509250929050565b600080600060608486031215610ec4578081fd5b8335610ecf8161159c565b92506020840135610edf8161159c565b929592945050506040919091013590565b600080600080600080600060e0888a031215610f0a578283fd5b8735610f158161159c565b96506020880135610f258161159c565b95506040880135945060608801359350608088013560ff81168114610f48578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610f77578182fd5b8235610f828161159c565b946020939093013593505050565b60008060008060808587031215610fa5578384fd5b8435610fb08161159c565b93506020850135610fc08161159c565b9250604085013567ffffffffffffffff80821115610fdc578384fd5b610fe888838901610dce565b93506060870135915080821115610ffd578283fd5b5061100a87828801610dce565b91505092959194509250565b600060208284031215611027578081fd5b5035919050565b60006020828403121561103f578081fd5b5051919050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b8181101561113357858101830151858201604001528201611117565b818111156111445783604083870101525b50601f01601f1916929092016040019392505050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b60208082526016908201527f5452414e534645525f4e4f545f535550504f5254454400000000000000000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526017908201527f414c4c4f57414e43455f4e4f545f535550504f52544544000000000000000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526016908201527f415050524f56414c5f4e4f545f535550504f5254454400000000000000000000604082015260600190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b600082198211156114bf576114bf611570565b500190565b6000826114df57634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156114fe576114fe611570565b500290565b60008282101561151557611515611570565b500390565b60028104600182168061152e57607f821691505b6020821081141561154f57634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561156957611569611570565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461091857600080fdfea2646970667358221220e40cdd984b26ab1968768d73bdfac160cb7b60120597c8d7c376ade3d3d60b9064736f6c63430008010033";
