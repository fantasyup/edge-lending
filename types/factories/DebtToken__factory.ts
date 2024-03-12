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
];

const _bytecode =
  "0x60a06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561003457600080fd5b506080516114b9610050600039600061076c01526114b96000f3fe608060405234801561001057600080fd5b50600436106101475760003560e01c806340c10f19116100c857806395d89b411161008c578063a9059cbb11610066578063a9059cbb1461028e578063d505accf1461029c578063dd62ed3e146102af57610147565b806395d89b41146102735780639dc29fac1461027b578063a457c2d71461020a57610147565b806340c10f191461021d5780636f307dc31461023057806370a08231146102455780637ecebe00146102585780638da5cb5b1461026b57610147565b806323b872dd1161010f57806323b872dd146101c75780632ce0f9d6146101da578063313ce567146101ed5780633644e51514610202578063395093511461020a57610147565b806306fdde031461014c578063095ea7b31461016a578063146fac451461018a57806318160ddd1461019f5780632016a0d2146101b4575b600080fd5b6101546102bd565b6040516101619190611007565b60405180910390f35b61017d610178366004610e49565b61034b565b6040516101619190610f75565b61019d610198366004610efa565b61036e565b005b6101a76103ac565b6040516101619190610f80565b61019d6101c2366004610e74565b6103b3565b61017d6101d5366004610d99565b610530565b6101a76101e8366004610d3e565b61054a565b6101f5610565565b60405161016191906113a0565b6101a761056e565b61017d610218366004610e49565b61057d565b61019d61022b366004610e49565b610597565b6102386105cf565b6040516101619190610f61565b6101a7610253366004610d3e565b6105e4565b6101a7610266366004610d3e565b61066b565b610238610686565b610154610695565b61019d610289366004610e49565b6106a2565b61017d6101d5366004610e49565b61019d6102aa366004610dd9565b610728565b6101a7610218366004610d61565b600380546102ca906113dd565b80601f01602080910402602001604051908101604052809291908181526020018280546102f6906113dd565b80156103435780601f1061031857610100808354040283529160200191610343565b820191906000526020600020905b81548152906001019060200180831161032657829003601f168201915b505050505081565b600060405162461bcd60e51b815260040161036590611332565b60405180910390fd5b600d546001600160a01b031633146103985760405162461bcd60e51b8152600401610365906110d3565b806002546103a691906113ae565b60025550565b6002545b90565b600c54610100900460ff16806103cc57506103cc610841565b806103da5750600c5460ff16155b6103f65760405162461bcd60e51b8152600401610365906111e1565b600c54610100900460ff1615801561042157600c805460ff1961ff0019909116610100171660011790555b6001600160a01b0385166104475760405162461bcd60e51b8152600401610365906111ba565b84600d60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000846001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156104a957600080fd5b505afa1580156104bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e19190610f2a565b90506104ee848483610847565b6104f784610887565b50600c805475ffffffffffffffffffffffffffffffffffffffff000019169055801561052957600c805461ff00191690555b5050505050565b600060405162461bcd60e51b815260040161036590611141565b6001600160a01b031660009081526020819052604090205490565b60045460ff1681565b60006105786108ad565b905090565b600060405162461bcd60e51b81526004016103659061123e565b600d546001600160a01b031633146105c15760405162461bcd60e51b8152600401610365906110d3565b6105cb82826108e1565b5050565b600c546201000090046001600160a01b031681565b600d54604051637746efab60e01b81526000916001600160a01b031690637746efab90610615908590600401610f61565b60206040518083038186803b15801561062d57600080fd5b505afa158015610641573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106659190610f12565b92915050565b6001600160a01b03166000908152600b602052604090205490565b600d546001600160a01b031690565b600580546102ca906113dd565b600d546001600160a01b031633146106cc5760405162461bcd60e51b8152600401610365906110d3565b806106d6836105e4565b6106e091906113c6565b6001600160a01b03831660009081526020819052604090205560025481111561070d5760006002556105cb565b806002600082825461071f91906113c6565b90915550505050565b834211156107485760405162461bcd60e51b81526004016103659061110a565b6001600160a01b0387166000908152600b6020908152604080832054905161079b927f0000000000000000000000000000000000000000000000000000000000000000928c928c928c92918c9101610f89565b60405160208183030381529060405280519060200120905060006107be82610995565b905060006107ce828787876109ce565b9050896001600160a01b0316816001600160a01b0316146108015760405162461bcd60e51b8152600401610365906112b7565b6001600160a01b038a166000908152600b6020526040812080549161082583611418565b91905055506108358a8a8a610ac4565b50505050505050505050565b303b1590565b825161085a906003906020860190610c1e565b50815161086e906005906020850190610c1e565b506004805460ff191660ff929092169190911790555050565b6108aa81604051806040016040528060018152602001603160f81b815250610b78565b50565b60006007546108ba610bd9565b14156108c957506006546103b0565b6108da600a54600854600954610bdd565b90506103b0565b6001600160a01b0382166109075760405162461bcd60e51b815260040161036590611369565b806002600082825461091991906113ae565b90915550506001600160a01b038216600090815260208190526040812080548392906109469084906113ae565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610989908590610f80565b60405180910390a35050565b600061099f6108ad565b826040516020016109b1929190610f46565b604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610a105760405162461bcd60e51b815260040161036590611178565b8360ff16601b1480610a2557508360ff16601c145b610a415760405162461bcd60e51b815260040161036590611275565b600060018686868660405160008152602001604052604051610a669493929190610fe9565b6020604051602081039080840390855afa158015610a88573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610abb5760405162461bcd60e51b81526004016103659061105a565b95945050505050565b6001600160a01b038316610aea5760405162461bcd60e51b8152600401610365906112ee565b6001600160a01b038216610b105760405162461bcd60e51b815260040161036590611091565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610b6b908590610f80565b60405180910390a3505050565b8151602080840191909120825191830191909120600882905560098190557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610bbf610bd9565b600755610bcd818484610bdd565b600655600a5550505050565b4690565b6000838383610bea610bd9565b30604051602001610bff959493929190610fbd565b6040516020818303038152906040528051906020012090509392505050565b828054610c2a906113dd565b90600052602060002090601f016020900481019282610c4c5760008555610c92565b82601f10610c6557805160ff1916838001178555610c92565b82800160010185558215610c92579182015b82811115610c92578251825591602001919060010190610c77565b50610c9e929150610ca2565b5090565b5b80821115610c9e5760008155600101610ca3565b600082601f830112610cc7578081fd5b813567ffffffffffffffff80821115610ce257610ce2611449565b604051601f8301601f19908116603f01168101908282118183101715610d0a57610d0a611449565b81604052838152866020858801011115610d22578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610d4f578081fd5b8135610d5a8161145f565b9392505050565b60008060408385031215610d73578081fd5b8235610d7e8161145f565b91506020830135610d8e8161145f565b809150509250929050565b600080600060608486031215610dad578081fd5b8335610db88161145f565b92506020840135610dc88161145f565b929592945050506040919091013590565b600080600080600080600060e0888a031215610df3578283fd5b8735610dfe8161145f565b96506020880135610e0e8161145f565b955060408801359450606088013593506080880135610e2c81611474565b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610e5b578182fd5b8235610e668161145f565b946020939093013593505050565b60008060008060808587031215610e89578384fd5b8435610e948161145f565b93506020850135610ea48161145f565b9250604085013567ffffffffffffffff80821115610ec0578384fd5b610ecc88838901610cb7565b93506060870135915080821115610ee1578283fd5b50610eee87828801610cb7565b91505092959194509250565b600060208284031215610f0b578081fd5b5035919050565b600060208284031215610f23578081fd5b5051919050565b600060208284031215610f3b578081fd5b8151610d5a81611474565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b8181101561103357858101830151858201604001528201611017565b818111156110445783604083870101525b50601f01601f1916929092016040019392505050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526011908201527f4f4e4c595f4c454e44494e475f50414952000000000000000000000000000000604082015260600190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b60208082526016908201527f5452414e534645525f4e4f545f535550504f5254454400000000000000000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526017908201527f414c4c4f57414e43455f4e4f545f535550504f52544544000000000000000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526016908201527f415050524f56414c5f4e4f545f535550504f5254454400000000000000000000604082015260600190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b600082198211156113c1576113c1611433565b500190565b6000828210156113d8576113d8611433565b500390565b6002810460018216806113f157607f821691505b6020821081141561141257634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561142c5761142c611433565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146108aa57600080fd5b60ff811681146108aa57600080fdfea2646970667358221220d78bba8f69e8af5a8dddd71c7fb310011938326b23d58cee3b62a8710d31861664736f6c63430008010033";
