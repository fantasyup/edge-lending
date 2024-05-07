/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { CollateralWrapperToken } from "../CollateralWrapperToken";

export class CollateralWrapperToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CollateralWrapperToken> {
    return super.deploy(overrides || {}) as Promise<CollateralWrapperToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CollateralWrapperToken {
    return super.attach(address) as CollateralWrapperToken;
  }
  connect(signer: Signer): CollateralWrapperToken__factory {
    return super.connect(signer) as CollateralWrapperToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CollateralWrapperToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CollateralWrapperToken;
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
    stateMutability: "nonpayable",
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
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561003457600080fd5b506080516117cc610050600039600061081501526117cc6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063a457c2d711610071578063a457c2d71461024d578063a9059cbb14610260578063d505accf14610273578063dd62ed3e14610286578063ffa1ad74146102995761012c565b806370a08231146102045780637ecebe00146102175780638da5cb5b1461022a57806395d89b41146102325780639dc29fac1461023a5761012c565b8063313ce567116100f4578063313ce567146101ac5780633644e515146101c157806339509351146101c957806340c10f19146101dc5780636f307dc3146101ef5761012c565b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461016f5780632016a0d21461018457806323b872dd14610199575b600080fd5b6101396102a1565b6040516101469190611288565b60405180910390f35b61016261015d366004611168565b61032f565b60405161014691906111f6565b610177610345565b6040516101469190611201565b610197610192366004611032565b61034c565b005b6101626101a73660046110b8565b610508565b6101b461055a565b60405161014691906116b3565b610177610563565b6101626101d7366004611168565b610572565b6101976101ea366004611168565b6105a9565b6101f76105e1565b60405161014691906111e2565b610177610212366004610fbb565b6105f6565b610177610225366004610fbb565b610611565b6101f761062c565b61013961063b565b610197610248366004611168565b610648565b61016261025b366004611168565b61067c565b61016261026e366004611168565b6106b3565b6101976102813660046110f8565b6107d1565b610177610294366004610ffa565b6108ea565b610177610915565b600380546102ae906116f0565b80601f01602080910402602001604051908101604052809291908181526020018280546102da906116f0565b80156103275780601f106102fc57610100808354040283529160200191610327565b820191906000526020600020905b81548152906001019060200180831161030a57829003601f168201915b505050505081565b600061033c33848461091a565b50600192915050565b6002545b90565b600c54610100900460ff168061036557506103656109ce565b806103735750600c5460ff16155b6103985760405162461bcd60e51b815260040161038f906114a5565b60405180910390fd5b600c54610100900460ff161580156103c357600c805460ff1961ff0019909116610100171660011790555b6001600160a01b0385166103e95760405162461bcd60e51b815260040161038f9061147e565b6001600160a01b03841661040f5760405162461bcd60e51b815260040161038f90611405565b84600d60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000846001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561047157600080fd5b505afa158015610485573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a991906111ab565b90506104b68484836109d4565b6104bf84610a14565b50600c805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b03871602179055801561050157600c805461ff00191690555b5050505050565b6000610515848484610a3a565b6001600160a01b03841660009081526001602090815260408083203380855292529091205461055091869161054b9086906116d9565b61091a565b5060019392505050565b60045460ff1681565b600061056d610b2c565b905090565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161033c91859061054b9086906116c1565b600d546001600160a01b031633146105d35760405162461bcd60e51b815260040161038f90611397565b6105dd8282610b60565b5050565b600c546201000090046001600160a01b031681565b6001600160a01b031660009081526020819052604090205490565b6001600160a01b03166000908152600b602052604090205490565b600d546001600160a01b031690565b600580546102ae906116f0565b600d546001600160a01b031633146106725760405162461bcd60e51b815260040161038f90611397565b6105dd8282610c14565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161033c91859061054b9086906116d9565b600080306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106ef57600080fd5b505afa158015610703573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107279190610fde565b6001600160a01b0316636f427d82336040518263ffffffff1660e01b815260040161075291906111e2565b602060405180830381600087803b15801561076c57600080fd5b505af1158015610780573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a49190611193565b9050808311156107c65760405162461bcd60e51b815260040161038f90611601565b610550338585610a3a565b834211156107f15760405162461bcd60e51b815260040161038f906113ce565b6001600160a01b0387166000908152600b60209081526040808320549051610844927f0000000000000000000000000000000000000000000000000000000000000000928c928c928c92918c910161120a565b604051602081830303815290604052805190602001209050600061086782610cc6565b9050600061087782878787610cff565b9050896001600160a01b0316816001600160a01b0316146108aa5760405162461bcd60e51b815260040161038f90611544565b6001600160a01b038a166000908152600b602052604081208054916108ce8361172b565b91905055506108de8a8a8a61091a565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600181565b6001600160a01b0383166109405760405162461bcd60e51b815260040161038f90611638565b6001600160a01b0382166109665760405162461bcd60e51b815260040161038f90611355565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109c1908590611201565b60405180910390a3505050565b303b1590565b82516109e7906003906020860190610e9b565b5081516109fb906005906020850190610e9b565b506004805460ff191660ff929092169190911790555050565b610a3781604051806040016040528060018152602001603160f81b815250610df5565b50565b6001600160a01b038316610a605760405162461bcd60e51b815260040161038f906115bc565b6001600160a01b038216610a865760405162461bcd60e51b815260040161038f90611312565b6001600160a01b038316600090815260208190526040902054610aaa9082906116d9565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610ada9082906116c1565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906109c1908590611201565b6000600754610b39610e56565b1415610b485750600654610349565b610b59600a54600854600954610e5a565b9050610349565b6001600160a01b038216610b865760405162461bcd60e51b815260040161038f9061167c565b8060026000828254610b9891906116c1565b90915550506001600160a01b03821660009081526020819052604081208054839290610bc59084906116c1565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610c08908590611201565b60405180910390a35050565b6001600160a01b038216610c3a5760405162461bcd60e51b815260040161038f9061157b565b6001600160a01b038216600090815260208190526040902054610c5e9082906116d9565b6001600160a01b038316600090815260208190526040902055600254610c859082906116d9565b6002556040516000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610c08908590611201565b6000610cd0610b2c565b82604051602001610ce29291906111c7565b604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610d415760405162461bcd60e51b815260040161038f9061143c565b8360ff16601b1480610d5657508360ff16601c145b610d725760405162461bcd60e51b815260040161038f90611502565b600060018686868660405160008152602001604052604051610d97949392919061126a565b6020604051602081039080840390855afa158015610db9573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610dec5760405162461bcd60e51b815260040161038f906112db565b95945050505050565b8151602080840191909120825191830191909120600882905560098190557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610e3c610e56565b600755610e4a818484610e5a565b600655600a5550505050565b4690565b6000838383610e67610e56565b30604051602001610e7c95949392919061123e565b6040516020818303038152906040528051906020012090509392505050565b828054610ea7906116f0565b90600052602060002090601f016020900481019282610ec95760008555610f0f565b82601f10610ee257805160ff1916838001178555610f0f565b82800160010185558215610f0f579182015b82811115610f0f578251825591602001919060010190610ef4565b50610f1b929150610f1f565b5090565b5b80821115610f1b5760008155600101610f20565b600082601f830112610f44578081fd5b813567ffffffffffffffff80821115610f5f57610f5f61175c565b604051601f8301601f19908116603f01168101908282118183101715610f8757610f8761175c565b81604052838152866020858801011115610f9f578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610fcc578081fd5b8135610fd781611772565b9392505050565b600060208284031215610fef578081fd5b8151610fd781611772565b6000806040838503121561100c578081fd5b823561101781611772565b9150602083013561102781611772565b809150509250929050565b60008060008060808587031215611047578182fd5b843561105281611772565b9350602085013561106281611772565b9250604085013567ffffffffffffffff8082111561107e578384fd5b61108a88838901610f34565b9350606087013591508082111561109f578283fd5b506110ac87828801610f34565b91505092959194509250565b6000806000606084860312156110cc578283fd5b83356110d781611772565b925060208401356110e781611772565b929592945050506040919091013590565b600080600080600080600060e0888a031215611112578283fd5b873561111d81611772565b9650602088013561112d81611772565b95506040880135945060608801359350608088013561114b81611787565b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561117a578182fd5b823561118581611772565b946020939093013593505050565b6000602082840312156111a4578081fd5b5051919050565b6000602082840312156111bc578081fd5b8151610fd781611787565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b818110156112b457858101830151858201604001528201611298565b818111156112c55783604083870101525b50601f01601f1916929092016040019392505050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526011908201527f4f4e4c595f4c454e44494e475f50414952000000000000000000000000000000604082015260600190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b60208082526012908201527f696e76616c696420756e6465726c79696e670000000000000000000000000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252600f908201527f455843454544535f414c4c4f5745440000000000000000000000000000000000604082015260600190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b600082198211156116d4576116d4611746565b500190565b6000828210156116eb576116eb611746565b500390565b60028104600182168061170457607f821691505b6020821081141561172557634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561173f5761173f611746565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610a3757600080fd5b60ff81168114610a3757600080fdfea26469706673582212205e85489f4af2e5f78e107762e5710be1dbf9f9748c51a207527dc7938c8b0c2b64736f6c63430008010033";
