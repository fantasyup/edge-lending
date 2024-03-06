/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockToken } from "../MockToken";

export class MockToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockToken> {
    return super.deploy(overrides || {}) as Promise<MockToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockToken {
    return super.attach(address) as MockToken;
  }
  connect(signer: Signer): MockToken__factory {
    return super.connect(signer) as MockToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockToken {
    return new Contract(address, _abi, signerOrProvider) as MockToken;
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setBalanceTo",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600481526020017f4d6f636b000000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d43540000000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620000b8565b508060049080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000168565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b600060028204905060018216806200018157607f821691505b602082108114156200019857620001976200019e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61194b80620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a2b0a1c711610066578063a2b0a1c71461025f578063a457c2d71461027b578063a9059cbb146102ab578063dd62ed3e146102db576100ea565b806370a08231146101f557806395d89b41146102255780639dc29fac14610243576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b57806339509351146101a957806340c10f19146101d9576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f761030b565b6040516101049190611290565b60405180910390f35b61012760048036038101906101229190611075565b61039d565b6040516101349190611275565b60405180910390f35b6101456103bb565b60405161015291906113f2565b60405180910390f35b61017560048036038101906101709190611026565b6103c5565b6040516101829190611275565b60405180910390f35b6101936104c6565b6040516101a0919061140d565b60405180910390f35b6101c360048036038101906101be9190611075565b6104cf565b6040516101d09190611275565b60405180910390f35b6101f360048036038101906101ee9190611075565b61057b565b005b61020f600480360381019061020a9190610fc1565b610589565b60405161021c91906113f2565b60405180910390f35b61022d6105d1565b60405161023a9190611290565b60405180910390f35b61025d60048036038101906102589190611075565b610663565b005b61027960048036038101906102749190611075565b610671565b005b61029560048036038101906102909190611075565b61067f565b6040516102a29190611275565b60405180910390f35b6102c560048036038101906102c09190611075565b610773565b6040516102d29190611275565b60405180910390f35b6102f560048036038101906102f09190610fea565b610791565b60405161030291906113f2565b60405180910390f35b60606003805461031a90611556565b80601f016020809104026020016040519081016040528092919081815260200182805461034690611556565b80156103935780601f1061036857610100808354040283529160200191610393565b820191906000526020600020905b81548152906001019060200180831161037657829003601f168201915b5050505050905090565b60006103b16103aa610818565b8484610820565b6001905092915050565b6000600254905090565b60006103d28484846109eb565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061041d610818565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561049d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049490611332565b60405180910390fd5b6104ba856104a9610818565b85846104b5919061149a565b610820565b60019150509392505050565b60006012905090565b60006105716104dc610818565b8484600160006104ea610818565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461056c9190611444565b610820565b6001905092915050565b6105858282610c6a565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105e090611556565b80601f016020809104026020016040519081016040528092919081815260200182805461060c90611556565b80156106595780601f1061062e57610100808354040283529160200191610659565b820191906000526020600020905b81548152906001019060200180831161063c57829003601f168201915b5050505050905090565b61066d8282610dbe565b5050565b61067b8282610c6a565b5050565b6000806001600061068e610818565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561074b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610742906113b2565b60405180910390fd5b610768610756610818565b858584610763919061149a565b610820565b600191505092915050565b6000610787610780610818565b84846109eb565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610890576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088790611392565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610900576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f7906112f2565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109de91906113f2565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5290611372565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610acb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac2906112b2565b60405180910390fd5b610ad6838383610f92565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5390611312565b60405180910390fd5b8181610b68919061149a565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bf89190611444565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c5c91906113f2565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd1906113d2565b60405180910390fd5b610ce660008383610f92565b8060026000828254610cf89190611444565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d4d9190611444565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610db291906113f2565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2590611352565b60405180910390fd5b610e3a82600083610f92565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ec0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb7906112d2565b60405180910390fd5b8181610ecc919061149a565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610f20919061149a565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f8591906113f2565b60405180910390a3505050565b505050565b600081359050610fa6816118e7565b92915050565b600081359050610fbb816118fe565b92915050565b600060208284031215610fd357600080fd5b6000610fe184828501610f97565b91505092915050565b60008060408385031215610ffd57600080fd5b600061100b85828601610f97565b925050602061101c85828601610f97565b9150509250929050565b60008060006060848603121561103b57600080fd5b600061104986828701610f97565b935050602061105a86828701610f97565b925050604061106b86828701610fac565b9150509250925092565b6000806040838503121561108857600080fd5b600061109685828601610f97565b92505060206110a785828601610fac565b9150509250929050565b6110ba816114e0565b82525050565b60006110cb82611428565b6110d58185611433565b93506110e5818560208601611523565b6110ee816115e6565b840191505092915050565b6000611106602383611433565b9150611111826115f7565b604082019050919050565b6000611129602283611433565b915061113482611646565b604082019050919050565b600061114c602283611433565b915061115782611695565b604082019050919050565b600061116f602683611433565b915061117a826116e4565b604082019050919050565b6000611192602883611433565b915061119d82611733565b604082019050919050565b60006111b5602183611433565b91506111c082611782565b604082019050919050565b60006111d8602583611433565b91506111e3826117d1565b604082019050919050565b60006111fb602483611433565b915061120682611820565b604082019050919050565b600061121e602583611433565b91506112298261186f565b604082019050919050565b6000611241601f83611433565b915061124c826118be565b602082019050919050565b6112608161150c565b82525050565b61126f81611516565b82525050565b600060208201905061128a60008301846110b1565b92915050565b600060208201905081810360008301526112aa81846110c0565b905092915050565b600060208201905081810360008301526112cb816110f9565b9050919050565b600060208201905081810360008301526112eb8161111c565b9050919050565b6000602082019050818103600083015261130b8161113f565b9050919050565b6000602082019050818103600083015261132b81611162565b9050919050565b6000602082019050818103600083015261134b81611185565b9050919050565b6000602082019050818103600083015261136b816111a8565b9050919050565b6000602082019050818103600083015261138b816111cb565b9050919050565b600060208201905081810360008301526113ab816111ee565b9050919050565b600060208201905081810360008301526113cb81611211565b9050919050565b600060208201905081810360008301526113eb81611234565b9050919050565b60006020820190506114076000830184611257565b92915050565b60006020820190506114226000830184611266565b92915050565b600081519050919050565b600082825260208201905092915050565b600061144f8261150c565b915061145a8361150c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561148f5761148e611588565b5b828201905092915050565b60006114a58261150c565b91506114b08361150c565b9250828210156114c3576114c2611588565b5b828203905092915050565b60006114d9826114ec565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611541578082015181840152602081019050611526565b83811115611550576000848401525b50505050565b6000600282049050600182168061156e57607f821691505b60208210811415611582576115816115b7565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6118f0816114ce565b81146118fb57600080fd5b50565b6119078161150c565b811461191257600080fd5b5056fea264697066735822122080d5d391d29d95ad9c4f10de57abaeb803b3938c423d712cbd96722e46cb1e2664736f6c63430008010033";
