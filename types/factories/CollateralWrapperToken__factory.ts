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
      {
        internalType: "contract IRewardDistributorManager",
        name: "_manager",
        type: "address",
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
    name: "rewardManager",
    outputs: [
      {
        internalType: "contract IRewardDistributorManager",
        name: "",
        type: "address",
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
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561003457600080fd5b506080516118ef610050600039600061088a01526118ef6000f3fe608060405234801561001057600080fd5b50600436106101475760003560e01c80636f307dc3116100c85780639dc29fac1161008c578063d505accf11610066578063d505accf14610296578063dd62ed3e146102a9578063ffa1ad74146102bc57610147565b80639dc29fac1461025d578063a457c2d714610270578063a9059cbb1461028357610147565b80636f307dc31461021f57806370a08231146102275780637ecebe001461023a5780638da5cb5b1461024d57806395d89b411461025557610147565b8063313ce5671161010f578063313ce567146101c7578063362925c2146101dc5780633644e515146101f157806339509351146101f957806340c10f191461020c57610147565b806306fdde031461014c578063095ea7b31461016a5780630f4ef8a61461018a57806318160ddd1461019f57806323b872dd146101b4575b600080fd5b6101546102c4565b60405161016191906113ab565b60405180910390f35b61017d610178366004611271565b610352565b6040516101619190611319565b610192610368565b60405161016191906112eb565b6101a761037d565b6040516101619190611324565b61017d6101c23660046111c1565b610384565b6101cf6103d6565b60405161016191906117d6565b6101ef6101ea366004611126565b6103df565b005b6101a76105c8565b61017d610207366004611271565b6105d7565b6101ef61021a366004611271565b61060e565b610192610651565b6101a76102353660046110af565b610660565b6101a76102483660046110af565b61067b565b610192610696565b6101546106a5565b6101ef61026b366004611271565b6106b2565b61017d61027e366004611271565b6106f1565b61017d610291366004611271565b610728565b6101ef6102a4366004611201565b610846565b6101a76102b73660046110ee565b61095f565b6101a761098a565b600380546102d190611813565b80601f01602080910402602001604051908101604052809291908181526020018280546102fd90611813565b801561034a5780601f1061031f5761010080835404028352916020019161034a565b820191906000526020600020905b81548152906001019060200180831161032d57829003601f168201915b505050505081565b600061035f33848461098f565b50600192915050565b600c546201000090046001600160a01b031681565b6002545b90565b6000610391848484610a43565b6001600160a01b0384166000908152600160209081526040808320338085529252909120546103cc9186916103c79086906117fc565b61098f565b5060019392505050565b60045460ff1681565b600c54610100900460ff16806103f857506103f8610a5d565b806104065750600c5460ff16155b61042b5760405162461bcd60e51b8152600401610422906115c8565b60405180910390fd5b600c54610100900460ff1615801561045657600c805460ff1961ff0019909116610100171660011790555b6001600160a01b03861661047c5760405162461bcd60e51b8152600401610422906115a1565b6001600160a01b0385166104a25760405162461bcd60e51b815260040161042290611528565b85600e60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000856001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561050457600080fd5b505afa158015610518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053c91906112b4565b9050610549858583610a63565b61055285610aa3565b50600d805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0387811691909117909155600c805475ffffffffffffffffffffffffffffffffffffffff00001916620100009285169290920291909117905580156105c057600c805461ff00191690555b505050505050565b60006105d2610ac9565b905090565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161035f9185906103c79086906117e4565b600e546001600160a01b031633146106385760405162461bcd60e51b8152600401610422906114ba565b610643600083610afd565b61064d8282610b62565b5050565b600d546001600160a01b031681565b6001600160a01b031660009081526020819052604090205490565b6001600160a01b03166000908152600b602052604090205490565b600e546001600160a01b031690565b600580546102d190611813565b600e546001600160a01b031633146106dc5760405162461bcd60e51b8152600401610422906114ba565b6106e7826000610afd565b61064d8282610c16565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161035f9185906103c79086906117fc565b600080306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561076457600080fd5b505afa158015610778573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079c91906110d2565b6001600160a01b0316636f427d82336040518263ffffffff1660e01b81526004016107c791906112eb565b602060405180830381600087803b1580156107e157600080fd5b505af11580156107f5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610819919061129c565b90508083111561083b5760405162461bcd60e51b815260040161042290611724565b6103cc338585610a43565b834211156108665760405162461bcd60e51b8152600401610422906114f1565b6001600160a01b0387166000908152600b602090815260408083205490516108b9927f0000000000000000000000000000000000000000000000000000000000000000928c928c928c92918c910161132d565b60405160208183030381529060405280519060200120905060006108dc82610cc8565b905060006108ec82878787610d01565b9050896001600160a01b0316816001600160a01b03161461091f5760405162461bcd60e51b815260040161042290611667565b6001600160a01b038a166000908152600b602052604081208054916109438361184e565b91905055506109538a8a8a61098f565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600181565b6001600160a01b0383166109b55760405162461bcd60e51b81526004016104229061175b565b6001600160a01b0382166109db5760405162461bcd60e51b815260040161042290611478565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610a36908590611324565b60405180910390a3505050565b610a4d8383610afd565b610a58838383610df7565b505050565b303b1590565b8251610a76906003906020860190610f8f565b508151610a8a906005906020850190610f8f565b506004805460ff191660ff929092169190911790555050565b610ac681604051806040016040528060018152602001603160f81b815250610ee9565b50565b6000600754610ad6610f4a565b1415610ae55750600654610381565b610af6600a54600854600954610f4e565b9050610381565b600c54604051633b4198ef60e21b8152620100009091046001600160a01b03169063ed0663bc90610b3490859085906004016112ff565b600060405180830381600087803b158015610b4e57600080fd5b505af11580156105c0573d6000803e3d6000fd5b6001600160a01b038216610b885760405162461bcd60e51b81526004016104229061179f565b8060026000828254610b9a91906117e4565b90915550506001600160a01b03821660009081526020819052604081208054839290610bc79084906117e4565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610c0a908590611324565b60405180910390a35050565b6001600160a01b038216610c3c5760405162461bcd60e51b81526004016104229061169e565b6001600160a01b038216600090815260208190526040902054610c609082906117fc565b6001600160a01b038316600090815260208190526040902055600254610c879082906117fc565b6002556040516000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610c0a908590611324565b6000610cd2610ac9565b82604051602001610ce49291906112d0565b604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610d435760405162461bcd60e51b81526004016104229061155f565b8360ff16601b1480610d5857508360ff16601c145b610d745760405162461bcd60e51b815260040161042290611625565b600060018686868660405160008152602001604052604051610d99949392919061138d565b6020604051602081039080840390855afa158015610dbb573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610dee5760405162461bcd60e51b8152600401610422906113fe565b95945050505050565b6001600160a01b038316610e1d5760405162461bcd60e51b8152600401610422906116df565b6001600160a01b038216610e435760405162461bcd60e51b815260040161042290611435565b6001600160a01b038316600090815260208190526040902054610e679082906117fc565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610e979082906117e4565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610a36908590611324565b8151602080840191909120825191830191909120600882905560098190557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610f30610f4a565b600755610f3e818484610f4e565b600655600a5550505050565b4690565b6000838383610f5b610f4a565b30604051602001610f70959493929190611361565b6040516020818303038152906040528051906020012090509392505050565b828054610f9b90611813565b90600052602060002090601f016020900481019282610fbd5760008555611003565b82601f10610fd657805160ff1916838001178555611003565b82800160010185558215611003579182015b82811115611003578251825591602001919060010190610fe8565b5061100f929150611013565b5090565b5b8082111561100f5760008155600101611014565b600082601f830112611038578081fd5b813567ffffffffffffffff808211156110535761105361187f565b604051601f8301601f19908116603f0116810190828211818310171561107b5761107b61187f565b81604052838152866020858801011115611093578485fd5b8360208701602083013792830160200193909352509392505050565b6000602082840312156110c0578081fd5b81356110cb81611895565b9392505050565b6000602082840312156110e3578081fd5b81516110cb81611895565b60008060408385031215611100578081fd5b823561110b81611895565b9150602083013561111b81611895565b809150509250929050565b600080600080600060a0868803121561113d578081fd5b853561114881611895565b9450602086013561115881611895565b9350604086013567ffffffffffffffff80821115611174578283fd5b61118089838a01611028565b94506060880135915080821115611195578283fd5b506111a288828901611028565b92505060808601356111b381611895565b809150509295509295909350565b6000806000606084860312156111d5578283fd5b83356111e081611895565b925060208401356111f081611895565b929592945050506040919091013590565b600080600080600080600060e0888a03121561121b578182fd5b873561122681611895565b9650602088013561123681611895565b955060408801359450606088013593506080880135611254816118aa565b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611283578182fd5b823561128e81611895565b946020939093013593505050565b6000602082840312156112ad578081fd5b5051919050565b6000602082840312156112c5578081fd5b81516110cb816118aa565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b818110156113d7578581018301518582016040015282016113bb565b818111156113e85783604083870101525b50601f01601f1916929092016040019392505050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526011908201527f4f4e4c595f4c454e44494e475f50414952000000000000000000000000000000604082015260600190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b60208082526012908201527f696e76616c696420756e6465726c79696e670000000000000000000000000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252600f908201527f455843454544535f414c4c4f5745440000000000000000000000000000000000604082015260600190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b600082198211156117f7576117f7611869565b500190565b60008282101561180e5761180e611869565b500390565b60028104600182168061182757607f821691505b6020821081141561184857634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561186257611862611869565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610ac657600080fd5b60ff81168114610ac657600080fdfea26469706673582212200cccaee39f1bec3eb719ded1132974397ceb8938240ca39016afaa480815668664736f6c63430008010033";
