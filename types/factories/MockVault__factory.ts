/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockVault } from "../MockVault";

export class MockVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockVault> {
    return super.deploy(overrides || {}) as Promise<MockVault>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockVault {
    return super.attach(address) as MockVault;
  }
  connect(signer: Signer): MockVault__factory {
    return super.connect(signer) as MockVault__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockVault {
    return new Contract(address, _abi, signerOrProvider) as MockVault;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "whitelist",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "AllowContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "allowed",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
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
        internalType: "bytes32",
        name: "uuid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    name: "CodeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
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
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
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
        name: "feeAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "FlashLoan",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "OwnershipAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RegisterProtocol",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newTeam",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "TransferControl",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "UpdateFlashLoanRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
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
        name: "shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_FLASHLOAN_RATE",
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
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract MockToken",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addProfit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "allowContract",
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
    ],
    name: "allowedContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
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
    name: "approveContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
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
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
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
        internalType: "contract IERC3156FlashBorrower",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
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
    name: "flashLoanRate",
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
    name: "getCodeAddress",
    outputs: [
      {
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_flashLoanRate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
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
        name: "_token",
        type: "address",
      },
    ],
    name: "maxFlashLoan",
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
    inputs: [],
    name: "newOwner",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_ceil",
        type: "bool",
      },
    ],
    name: "toShare",
    outputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
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
      {
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
    ],
    name: "toUnderlying",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "totals",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
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
        name: "_shares",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferToNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newRate",
        type: "uint256",
      },
    ],
    name: "updateFlashloanRate",
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
    ],
    name: "userApprovalNonce",
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
    name: "userApprovedContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
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
        name: "_shares",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506000805462ff00001916905560408051808201825260018152603160f81b6020918201528151808301909252600c82526b576172705661756c7420763160a01b9101527fa40fef20e589d79043a3159d07cb3250ae0cc1485bcb2d436b4b7dc47d197c5c60808190527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660a081905290620000d07f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8284620000e9565b60c052620000dd6200012e565b60e052506200015e9050565b6000838383620000f86200012e565b306040516020016200010f95949392919062000132565b6040516020818303038152906040528051906020012090509392505050565b4690565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b60805160a05160c05160e0516126be6200019860003960006115bd015260006115ed015260006116580152600061163701526126be6000f3fe608060405234801561001057600080fd5b50600436106101ef5760003560e01c80635c975abb1161010f578063d4ee1d90116100a2578063da35a26f11610071578063da35a26f146103c3578063da5139ca146103d6578063f18d03cc146103e9578063f7888aec146103fc576101ef565b8063d4ee1d9014610382578063d728e0051461038a578063d78af5f11461039d578063d9d98ce4146103b0576101ef565b806379ba5097116100de57806379ba5097146103625780638456cb591461036a5780638da5cb5b14610372578063c6b45dfa1461037a576101ef565b80635c975abb146103215780635cffe9de14610329578063613255ab1461033c5780637372e9be1461034f576101ef565b80633f4ba83a1161018757806351e0e26b1161015657806351e0e26b146102de5780635299493b146102fe57806352d1902d1461031157806354fd4d5014610319576101ef565b80633f4ba83a1461029b57806346951954146102a35780634ffe34db146102b657806350d75d25146102c9576101ef565b80631583d56c116101c35780631583d56c146102585780631e43a7a11461026d5780631fd1ffde146102755780633f21c1b414610288576101ef565b8062f5ee4d146101f45780630284c3f51461021d57806306fdde03146102305780630b620b8114610245575b600080fd5b610207610202366004611b87565b61040f565b6040516102149190611f58565b60405180910390f35b61020761022b366004611ceb565b610421565b6102386105d2565b6040516102149190611ff6565b610207610253366004611ceb565b6105fa565b61026b610266366004611c7a565b610798565b005b6102076107fc565b61026b610283366004611e16565b610802565b61026b610296366004611bdb565b610893565b61026b610b81565b61026b6102b1366004611b87565b610bb5565b6102076102c4366004611b87565b610beb565b6102d1610bfd565b6040516102149190611e89565b6102f16102ec366004611b87565b610c0d565b6040516102149190611f4d565b61020761030c366004611c7a565b610c22565b610207610ccb565b610238610cef565b6102f1610d0c565b6102f1610337366004611d7c565b610d1b565b61020761034a366004611b87565b610ff1565b61026b61035d366004611b87565b61100c565b61026b6110a9565b61026b611135565b6102d1611167565b610207611176565b6102d1611182565b6102f1610398366004611ba3565b611191565b61026b6103ab366004611c4d565b6111b1565b6102076103be366004611c7a565b611263565b61026b6103d1366004611e2e565b61127c565b6102076103e4366004611d3b565b611362565b61026b6103f7366004611ceb565b61145e565b61020761040a366004611cd9565b6114f2565b60076020526000908152604090205481565b600061042b610d0c565b156104515760405162461bcd60e51b815260040161044890612314565b60405180910390fd5b83336001600160a01b038216148061049157506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b6104ad5760405162461bcd60e51b815260040161044890612372565b6001600160a01b0384166104d35760405162461bcd60e51b815260040161044890612212565b6104df86846000611362565b91506104f66001600160a01b03871686308661150f565b6001600160a01b0380871660009081526004602090815260408083209388168352929052205461052790839061259a565b6001600160a01b038088166000818152600460209081526040808320948a16835293815283822094909455908152600590925290205461056890839061259a565b6001600160a01b03808816600081815260056020526040908190209390935591518682169291881691907f5fe47ed6d4225326d3303476197d782ded5a4e9c14f479dc9ec4992af4e85d59906105c1908890889061258c565b60405180910390a450949350505050565b6040518060400160405280600c81526020016b576172705661756c7420763160a01b81525081565b6000610604610d0c565b156106215760405162461bcd60e51b815260040161044890612314565b83336001600160a01b038216148061066157506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b61067d5760405162461bcd60e51b815260040161044890612372565b6001600160a01b0384166106a35760405162461bcd60e51b815260040161044890612212565b6106ad8684610c22565b6001600160a01b038088166000908152600460209081526040808320938a16835292905220549092506106e19084906125f1565b6001600160a01b038088166000818152600460209081526040808320948b1683529381528382209490945590815260059092529020546107229084906125f1565b6001600160a01b03871660008181526005602052604090209190915561074990858461159a565b836001600160a01b0316856001600160a01b0316876001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db86866040516105c192919061258c565b6040516340c10f1960e01b81526001600160a01b038316906340c10f19906107c69030908590600401611f34565b600060405180830381600087803b1580156107e057600080fd5b505af11580156107f4573d6000803e3d6000fd5b505050505050565b60015481565b6002546001600160a01b0316331461082c5760405162461bcd60e51b8152600401610448906124fa565b67016345785d8a000081106108535760405162461bcd60e51b8152600401610448906123f5565b60018190556040517f351e11b7eebc302a6aa0cf8fb6ed5318359a632eecf29a1cafdf96ee7257be8190610888908390611f58565b60405180910390a150565b6001600160a01b0385166108b95760405162461bcd60e51b81526004016104489061251e565b6001600160a01b0386166108df5760405162461bcd60e51b815260040161044890612280565b60ff83161580156108ee575081155b80156108f8575080155b1561098c573332141561091d5760405162461bcd60e51b81526004016104489061216e565b846001600160a01b0316866001600160a01b0316141561094f5760405162461bcd60e51b8152600401610448906120a3565b6001600160a01b03851660009081526008602052604090205460ff166109875760405162461bcd60e51b815260040161044890612555565b610b0d565b60006109966115b9565b7fe8879d0159a5862e68322a449d14dcfb21ad39e0c3dc66f88aff16b87aa27eae866109e2577f31d77d35dcd597e2453861d123e3d7ee551c84d42d8d97544835a74f1ccb251b610a04565b7f9d3cc82da8126179611840997002f7d09633ad258b9c11d6e1dccc7e1ad477415b6001600160a01b038a16600090815260076020526040812080548c928c928c9291610a2e83612634565b91905055604051602001610a4796959493929190611f78565b60405160208183030381529060405280519060200120604051602001610a6e929190611e6e565b604051602081830303815290604052805190602001209050600060018286868660405160008152602001604052604051610aab9493929190611fd8565b6020604051602081039080840390855afa158015610acd573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b031614610b0a5760405162461bcd60e51b8152600401610448906121db565b50505b6001600160a01b038681166000818152600660209081526040808320948a168084529490915290819020805460ff1916881515179055517f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c590610b71908890611f4d565b60405180910390a3505050505050565b6002546001600160a01b03163314610bab5760405162461bcd60e51b8152600401610448906124fa565b610bb3611683565b565b6002546001600160a01b03163314610bdf5760405162461bcd60e51b8152600401610448906124fa565b610be8816116e9565b50565b60056020526000908152604090205481565b6000610c076117f1565b90505b90565b60086020526000908152604090205460ff1681565b6001600160a01b0382166000818152600560205260408082205490516370a0823160e01b8152919290916370a0823190610c60903090600401611e89565b60206040518083038186803b158015610c7857600080fd5b505afa158015610c8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb09190611cc1565b610cba90846125d2565b610cc491906125b2565b9392505050565b7f789f0daca1cd17baa821e8d7454225d50b9f3e7c22acb67c2b2fff4f686a128290565b604051806040016040528060018152602001603160f81b81525081565b60005462010000900460ff1690565b6001600160a01b038416600090815260056020526040812054841115610d535760405162461bcd60e51b8152600401610448906122a6565b6040516370a0823160e01b815285906000906001600160a01b038316906370a0823190610d84903090600401611e89565b60206040518083038186803b158015610d9c57600080fd5b505afa158015610db0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd49190611cc1565b9050610dea6001600160a01b038316898861159a565b6000610df68888611263565b90507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9896001600160a01b03166323e30c8b338b8b868c8c6040518763ffffffff1660e01b8152600401610e4f96959493929190611ec1565b602060405180830381600087803b158015610e6957600080fd5b505af1158015610e7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea19190611cc1565b14610ebe5760405162461bcd60e51b8152600401610448906120da565b610edf8930610ecd848b61259a565b6001600160a01b03871692919061150f565b600082846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610f0e9190611e89565b60206040518083038186803b158015610f2657600080fd5b505afa158015610f3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5e9190611cc1565b610f6891906125f1565b905081811015610f8a5760405162461bcd60e51b8152600401610448906122dd565b896001600160a01b0316846001600160a01b0316336001600160a01b03167f581cf1fe7a440a4f68b6fdeba82ea38faf67f97ec14d5d9831a450e79a3849028b86604051610fd992919061258c565b60405180910390a45060019998505050505050505050565b6001600160a01b031660009081526005602052604090205490565b6002546001600160a01b031633146110365760405162461bcd60e51b8152600401610448906124fa565b6001600160a01b03811661105c5760405162461bcd60e51b815260040161044890612137565b600380546001600160a01b0319166001600160a01b0383161790556040517f75ec58ed4c3b4778d64c8fb2682d99b9844d486931205289f0c8e9951eaab832906108889083904290611f34565b6003546001600160a01b031633146110d35760405162461bcd60e51b81526004016104489061234b565b60038054600280546001600160a01b03199081166001600160a01b038416179091551690556040517f56a56c31bb3f318488e30872a32d64e9e9092a6a23043f6d9e9d71b2545e71729061112b906000904290611f34565b60405180910390a1565b6002546001600160a01b0316331461115f5760405162461bcd60e51b8152600401610448906124fa565b610bb3611816565b6002546001600160a01b031681565b67016345785d8a000081565b6003546001600160a01b031681565b600660209081526000928352604080842090915290825290205460ff1681565b6002546001600160a01b031633146111db5760405162461bcd60e51b8152600401610448906124fa565b6001600160a01b0382166112015760405162461bcd60e51b815260040161044890612249565b6001600160a01b03821660009081526008602052604090819020805460ff1916831515179055517f868ef4c4efa656ac9fe74e223335211b2da76220bf70e4a05c30c6a857e89e0d906112579084908490611f19565b60405180910390a15050565b6000670de0b6b3a764000060015483610cba91906125d2565b600054610100900460ff1680611295575060005460ff16155b6112b15760405162461bcd60e51b815260040161044890612398565b600054610100900460ff161580156112dc576000805460ff1961ff0019909116610100171660011790555b6001600160a01b0382166113025760405162461bcd60e51b81526004016104489061241b565b67016345785d8a00006001541061132b5760405162461bcd60e51b815260040161044890612111565b6001839055600280546001600160a01b0319166001600160a01b038416179055801561135d576000805461ff00191690555b505050565b6001600160a01b0383166000908152600560205260408120548015611452576040516370a0823160e01b81526000906001600160a01b038716906370a08231906113b0903090600401611e89565b60206040518083038186803b1580156113c857600080fd5b505afa1580156113dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114009190611cc1565b90508061140d83876125d2565b61141791906125b2565b92508380156114395750848261142d83866125d2565b61143791906125b2565b105b1561144c5761144983600161259a565b92505b50611456565b8391505b509392505050565b611466610d0c565b156114835760405162461bcd60e51b815260040161044890612314565b82336001600160a01b03821614806114c357506001600160a01b038116600090815260066020908152604080832033845290915290205460ff1615156001145b6114df5760405162461bcd60e51b815260040161044890612372565b6114eb85858585611875565b5050505050565b600460209081526000928352604080842090915290825290205481565b611594846323b872dd60e01b85858560405160240161153093929190611e9d565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611975565b50505050565b61135d8363a9059cbb60e01b8484604051602401611530929190611f34565b60007f00000000000000000000000000000000000000000000000000000000000000006115e4611a04565b141561161157507f0000000000000000000000000000000000000000000000000000000000000000610c0a565b61167c7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a08565b9050610c0a565b61168b610d0c565b6116a75760405162461bcd60e51b81526004016104489061206c565b6000805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6116dc611a49565b60405161112b9190611e89565b60006116f36117f1565b6001600160a01b0316141561171a5760405162461bcd60e51b815260040161044890612442565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561175357600080fd5b505afa158015611767573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061178b9190611cc1565b611793610ccb565b146117b05760405162461bcd60e51b815260040161044890612029565b6117b981611a4d565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc6117e2610ccb565b82604051610888929190611f61565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b61181e610d0c565b1561183b5760405162461bcd60e51b815260040161044890612314565b6000805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116dc611a49565b6001600160a01b03821661189b5760405162461bcd60e51b815260040161044890612212565b6001600160a01b038085166000908152600460209081526040808320938716835292905220546118cc9082906125f1565b6001600160a01b0385811660009081526004602090815260408083208885168452909152808220939093559084168152205461190990829061259a565b6001600160a01b0380861660008181526004602090815260408083208886168085529252918290209490945551918616917fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f90611967908690611f58565b60405180910390a450505050565b60006119ca826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611a719092919063ffffffff16565b80519091501561135d57808060200190518101906119e89190611ca5565b61135d5760405162461bcd60e51b8152600401610448906124b0565b4690565b6000838383611a15611a04565b30604051602001611a2a959493929190611fac565b6040516020818303038152906040528051906020012090509392505050565b3390565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6060611a808484600085611a88565b949350505050565b606082471015611aaa5760405162461bcd60e51b815260040161044890612195565b611ab385611b48565b611acf5760405162461bcd60e51b815260040161044890612479565b600080866001600160a01b03168587604051611aeb9190611e52565b60006040518083038185875af1925050503d8060008114611b28576040519150601f19603f3d011682016040523d82523d6000602084013e611b2d565b606091505b5091509150611b3d828286611b4e565b979650505050505050565b3b151590565b60608315611b5d575081610cc4565b825115611b6d5782518084602001fd5b8160405162461bcd60e51b81526004016104489190611ff6565b600060208284031215611b98578081fd5b8135610cc481612665565b60008060408385031215611bb5578081fd5b8235611bc081612665565b91506020830135611bd081612665565b809150509250929050565b60008060008060008060c08789031215611bf3578182fd5b8635611bfe81612665565b95506020870135611c0e81612665565b94506040870135611c1e8161267a565b9350606087013560ff81168114611c33578283fd5b9598949750929560808101359460a0909101359350915050565b60008060408385031215611c5f578182fd5b8235611c6a81612665565b91506020830135611bd08161267a565b60008060408385031215611c8c578182fd5b8235611c9781612665565b946020939093013593505050565b600060208284031215611cb6578081fd5b8151610cc48161267a565b600060208284031215611cd2578081fd5b5051919050565b60008060408385031215611bb5578182fd5b60008060008060808587031215611d00578384fd5b8435611d0b81612665565b93506020850135611d1b81612665565b92506040850135611d2b81612665565b9396929550929360600135925050565b600080600060608486031215611d4f578283fd5b8335611d5a81612665565b9250602084013591506040840135611d718161267a565b809150509250925092565b600080600080600060808688031215611d93578283fd5b8535611d9e81612665565b94506020860135611dae81612665565b935060408601359250606086013567ffffffffffffffff80821115611dd1578283fd5b818801915088601f830112611de4578283fd5b813581811115611df2578384fd5b896020828501011115611e03578384fd5b9699959850939650602001949392505050565b600060208284031215611e27578081fd5b5035919050565b60008060408385031215611e40578182fd5b823591506020830135611bd081612665565b60008251611e64818460208701612608565b9190910192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b039290921682521515602082015260400190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b95865260208601949094526001600160a01b039283166040860152911660608401521515608083015260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082528251806020840152612015816040850160208701612608565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b6020808252600f908201527f494e56414c49445f415050524f56450000000000000000000000000000000000604082015260600190565b60208082526019908201527f49455243333135363a2043616c6c6261636b206661696c656400000000000000604082015260600190565b6020808252600c908201526b494e56414c49445f5241544560a01b604082015260600190565b60208082526011908201527f494e56414c49445f4e45575f4f574e4552000000000000000000000000000000604082015260600190565b6020808252600d908201526c13d3931657d0d3d395149050d5609a1b604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526011908201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f544f5f414444524553530000000000000000000000000000604082015260600190565b6020808252600f908201527f696e76616c69645f616464726573730000000000000000000000000000000000604082015260600190565b6020808252600c908201526b24a72b20a624a22faaa9a2a960a11b604082015260600190565b60208082526012908201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604082015260600190565b6020808252600f908201527f6e6f7420656e6f75676820666565730000000000000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252600c908201526b13d3931657d0531313d5d15160a21b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252600c908201526b696e76616c6964207261746560a01b604082015260600190565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60208082526010908201527f494e56414c49445f434f4e545241435400000000000000000000000000000000604082015260600190565b6020808252600f908201527f4e4f545f57484954454c49535445440000000000000000000000000000000000604082015260600190565b918252602082015260400190565b600082198211156125ad576125ad61264f565b500190565b6000826125cd57634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156125ec576125ec61264f565b500290565b6000828210156126035761260361264f565b500390565b60005b8381101561262357818101518382015260200161260b565b838111156115945750506000910152565b60006000198214156126485761264861264f565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610be857600080fd5b8015158114610be857600080fdfea2646970667358221220d085bb4c8974c6c7a7aecc4c1f05ce43ed24639320a877cfe31ae74e81e7a8e264736f6c63430008010033";
