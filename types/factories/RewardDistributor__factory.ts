/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { RewardDistributor } from "../RewardDistributor";

export class RewardDistributor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rewardDistributorManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardDistributor> {
    return super.deploy(
      _rewardDistributorManager,
      overrides || {}
    ) as Promise<RewardDistributor>;
  }
  getDeployTransaction(
    _rewardDistributorManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardDistributorManager,
      overrides || {}
    );
  }
  attach(address: string): RewardDistributor {
    return super.attach(address) as RewardDistributor;
  }
  connect(signer: Signer): RewardDistributor__factory {
    return super.connect(signer) as RewardDistributor__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardDistributor {
    return new Contract(address, _abi, signerOrProvider) as RewardDistributor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardDistributorManager",
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
        indexed: true,
        internalType: "address",
        name: "receiptToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
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
    ],
    name: "AccumulateReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "lendingPair",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "collateralTokenAllocPoint",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "debtTokenAllocPoint",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "borrowAssetTokenAllocPoint",
            type: "uint128",
          },
        ],
        indexed: false,
        internalType: "struct RewardDistributor.DistributorConfigVars",
        name: "vars",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AddDistribution",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountDistributePerSecond",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_startTimestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_guardian",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldAllocPoint",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAllocPoint",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "UpdateDistribution",
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
        internalType: "uint256",
        name: "poolId",
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
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
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
    ],
    name: "accumulateReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "activatePendingRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "collateralTokenAllocPoint",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "debtTokenAllocPoint",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "borrowAssetTokenAllocPoint",
            type: "uint128",
          },
        ],
        internalType: "struct RewardDistributor.DistributorConfigVars",
        name: "_allocPoints",
        type: "tuple",
      },
      {
        internalType: "contract IBSLendingPair",
        name: "_lendingPair",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "endTimestamp",
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
    name: "guardian",
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
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountDistributePerSecond",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTimestamp",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_guardian",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pendingRewardActivation",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingRewardToken",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "receiptTokenAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lastUpdateTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accRewardTokenPerShare",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "allocPoint",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardAmountDistributePerSecond",
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
    name: "rewardDistributorManager",
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
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "_allocPoint",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTimestamp",
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
    ],
    name: "tokenPoolIDPair",
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
    name: "totalAllocPoint",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pendingReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001c3e38038062001c3e83398101604081905262000034916200007c565b6001600160a01b038116620000665760405162461bcd60e51b81526004016200005d90620000ac565b60405180910390fd5b60601b6001600160601b031916608052620000d5565b6000602082840312156200008e578081fd5b81516001600160a01b0381168114620000a5578182fd5b9392505050565b6020808252600f908201526e24a72b20a624a22fa6a0a720a3a2a960891b604082015260600190565b60805160601c611b43620000fb600039600081816106ef0152610cc50152611b436000f3fe608060405234801561001057600080fd5b506004361061012b5760003560e01c8063630b5ba1116100ad578063a85adeab11610071578063a85adeab1461025a578063ae79b32f14610262578063c36d89861461026a578063e6fd48bc1461027d578063f7c618c1146102855761012b565b8063630b5ba1146101f75780637eba26b6146101ff57806386911a711461021257806393f1a40b146102255780639e3d87cd146102475761012b565b8063415985c1116100f4578063415985c1146101ac57806342f2d0a8146101c1578063452a9320146101c957806351eb05a6146101d1578063628436bd146101e45761012b565b8062f714ce146101305780630e894127146101455780631526fe27146101585780631653fd331461018457806317caf6f1146101a4575b600080fd5b61014361013e3660046116ef565b61028d565b005b61014361015336600461171e565b6103d6565b61016b6101663660046116bf565b61050b565b60405161017b94939291906117cc565b60405180910390f35b6101976101923660046116ef565b610558565b60405161017b9190611a2c565b6101976106e7565b6101b46106ed565b60405161017b9190611752565b610197610711565b6101b4610717565b6101436101df3660046116bf565b610726565b6101436101f2366004611661565b610855565b610143610a76565b6101b461020d3660046116bf565b610aa1565b61019761022036600461157a565b610acb565b6102386102333660046116ef565b610add565b60405161017b93929190611a35565b610143610255366004611618565b610b05565b610197610cb0565b610143610cb6565b610143610278366004611596565b610db5565b610197611109565b6101b461110f565b6001600160a01b0381166102bc5760405162461bcd60e51b81526004016102b39061187f565b60405180910390fd5b6000600183815481106102df57634e487b7160e01b600052603260045260246000fd5b6000918252602080832086845260028252604080852033865290925292206004909102909101915061031084610726565b6000816002015464e8d4a51000846002015484600001546103319190611a83565b61033b9190611a63565b6103459190611aa2565b905060008183600101546103599190611a4b565b90506103658582611124565b6002840154835464e8d4a510009161037c91611a83565b6103869190611a63565b600284015560006001840155604051869033907ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568906103c6908590611a2c565b60405180910390a3505050505050565b6008546001600160a01b031633146104005760405162461bcd60e51b81526004016102b390611937565b801561040e5761040e610a76565b816001600160801b03166001848154811061043957634e487b7160e01b600052603260045260246000fd5b6000918252602090912060036004909202010154600554610463916001600160801b031690611aa2565b61046d9190611a4b565b600581905550816001848154811061049557634e487b7160e01b600052603260045260246000fd5b906000526020600020906004020160030160006101000a8154816001600160801b0302191690836001600160801b03160217905550827fdbf8826f955f35a61dc4653bcd92044a5c53564222a205f6d2d3babe80de2c958384426040516104fe93929190611a08565b60405180910390a2505050565b6001818154811061051b57600080fd5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b03909216935091906001600160801b031684565b6000806001848154811061057c57634e487b7160e01b600052603260045260246000fd5b6000918252602080832060408051608081018252600494850290920180546001600160a01b039081168452600180830154858701526002808401548686019081526003909401546001600160801b03166060808801919091528d8a52818852858a208d85168b528852858a2086519182018752805482529283015481890152910154818501529151845184516318160ddd60e01b8152945195995092979096909592909116936318160ddd93808301939290829003018186803b15801561064257600080fd5b505afa158015610656573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067a91906116d7565b905083602001514211801561068e57508015155b156106a05761069d84826112d3565b91505b60208301516040840151845164e8d4a51000906106be908690611a83565b6106c89190611a63565b6106d29190611aa2565b6106dc9190611a4b565b979650505050505050565b60055481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60095481565b6008546001600160a01b031681565b60006001828154811061074957634e487b7160e01b600052603260045260246000fd5b906000526020600020906004020190508060010154421161076a5750610852565b8054604080516318160ddd60e01b815290516000926001600160a01b0316916318160ddd916004808301926020929190829003018186803b1580156107ae57600080fd5b505afa1580156107c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e691906116d7565b9050806107fa575042600190910155610852565b6040805160808101825283546001600160a01b031681526001840154602082015260028401549181019190915260038301546001600160801b0316606082015261084490826112d3565b600283015550426001909101555b50565b6008546001600160a01b0316331461087f5760405162461bcd60e51b81526004016102b390611937565b801561088d5761088d610a76565b600060065442116108a0576006546108a2565b425b905060006108b360208601866116a5565b6001600160801b03161115610949576109496108d260208601866116a5565b846001600160a01b031663360e303a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561090b57600080fd5b505afa15801561091f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094391906115fc565b8361134f565b600061095b60408601602087016116a5565b6001600160801b031611156109b6576109b661097d60408601602087016116a5565b846001600160a01b031663f8d898986040518163ffffffff1660e01b815260040160206040518083038186803b15801561090b57600080fd5b60006109c860608601604087016116a5565b6001600160801b03161115610a2357610a236109ea60608601604087016116a5565b846001600160a01b031663588785406040518163ffffffff1660e01b815260040160206040518083038186803b15801561090b57600080fd5b306001600160a01b0316836001600160a01b03167fd51d6a296a4547c957d8a56b2414719f7e8f2632cd0f4b2e9ab995d864fbd4dd8642604051610a689291906119bb565b60405180910390a350505050565b60015460005b81811015610a9d57610a8d81610726565b610a9681611ab9565b9050610a7c565b5050565b60038181548110610ab157600080fd5b6000918252602090912001546001600160a01b0316905081565b60046020526000908152604090205481565b6002602081815260009384526040808520909152918352912080546001820154919092015483565b600054610100900460ff1680610b1e5750610b1e611513565b80610b2c575060005460ff16155b610b485760405162461bcd60e51b81526004016102b3906118a3565b600054610100900460ff16158015610b73576000805460ff1961ff0019909116610100171660011790555b6001600160a01b038516610b995760405162461bcd60e51b81526004016102b3906117fb565b6001600160a01b038216610bbf5760405162461bcd60e51b81526004016102b390611984565b60008411610bdf5760405162461bcd60e51b81526004016102b390611900565b60008311610bff5760405162461bcd60e51b81526004016102b390611822565b6000805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b03888116919091029190911790915560098590556006849055600880546001600160a01b0319169184169190911790556040517f9d0f13926a3a9c899df9df9d1ea6eb6c6adf949fad656f6eacf7ef515d3788f890610c8f9087908790879087904290611799565b60405180910390a18015610ca9576000805461ff00191690555b5050505050565b60075481565b60005b600354811015610da6577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635129785d60038381548110610d1357634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b168152610d61916001600160a01b031690600401611752565b600060405180830381600087803b158015610d7b57600080fd5b505af1158015610d8f573d6000803e3d6000fd5b505050508080610d9e90611ab9565b915050610cb9565b50610db36003600061152c565b565b6001600160a01b038316610ddb5760405162461bcd60e51b81526004016102b390611859565b6001600160a01b038316600090815260046020526040902054610dfd81610726565b600060018281548110610e2057634e487b7160e01b600052603260045260246000fd5b600091825260209182902060408051608081018252600490930290910180546001600160a01b039081168452600182015494840194909452600281015491830191909152600301546001600160801b031660608201529150841615610f975760008281526002602090815260408083206001600160a01b03881684529091529020805415610ef15760028101546040830151825464e8d4a5100091610ec491611a83565b610ece9190611a63565b610ed89190611aa2565b816001016000828254610eeb9190611a4b565b90915550505b6040516370a0823160e01b81526001600160a01b038716906370a0823190610f1d908890600401611752565b60206040518083038186803b158015610f3557600080fd5b505afa158015610f49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6d91906116d7565b808255604083015164e8d4a5100091610f869190611a83565b610f909190611a63565b6002909101555b6001600160a01b038316156110be5760008281526002602090815260408083206001600160a01b038716845290915290208054156110185760028101546040830151825464e8d4a5100091610feb91611a83565b610ff59190611a63565b610fff9190611aa2565b8160010160008282546110129190611a4b565b90915550505b6040516370a0823160e01b81526001600160a01b038716906370a0823190611044908790600401611752565b60206040518083038186803b15801561105c57600080fd5b505afa158015611070573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109491906116d7565b808255604083015164e8d4a51000916110ad9190611a83565b6110b79190611a63565b6002909101555b81856001600160a01b03167f06c3ed26f453047f0ec748fb58a383a2bd8ecddbafd6f476225679e4991abf8c86866040516110fa929190611766565b60405180910390a35050505050565b60065481565b6000546201000090046001600160a01b031681565b600080546040516370a0823160e01b8152620100009091046001600160a01b0316906370a082319061115a903090600401611752565b60206040518083038186803b15801561117257600080fd5b505afa158015611186573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111aa91906116d7565b9050808211156112435760005460405163a9059cbb60e01b8152620100009091046001600160a01b03169063a9059cbb906111eb9086908590600401611780565b602060405180830381600087803b15801561120557600080fd5b505af1158015611219573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123d91906115e0565b506112ce565b60005460405163a9059cbb60e01b8152620100009091046001600160a01b03169063a9059cbb9061127a9086908690600401611780565b602060405180830381600087803b15801561129457600080fd5b505af11580156112a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cc91906115e0565b505b505050565b6000806112e4846020015142611519565b9050600060055485606001516001600160801b0316600954846113079190611a83565b6113119190611a83565b61131b9190611a63565b90508361132d64e8d4a5100083611a83565b6113379190611a63565b85604001516113469190611a4b565b95945050505050565b6001600160a01b0382166113755760405162461bcd60e51b81526004016102b39061195e565b826001600160801b031660055461138c9190611a4b565b600555604080516080810182526001600160a01b0384811682526020820184815260009383018481526001600160801b03888116606086019081526001805480820182559781905295517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6600490980297880180546001600160a01b031916919096161790945591517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7860155517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf885015590517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf990930180546fffffffffffffffffffffffffffffffff1916939091169290921790915580546114b09190611aa2565b6001600160a01b039092166000818152600460205260408120939093556003805460018101825593527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90920180546001600160a01b0319169092179091555050565b303b1590565b60006115258383611aa2565b9392505050565b508054600082559060005260206000209081019061085291905b8082111561155a5760008155600101611546565b5090565b80356001600160801b038116811461157557600080fd5b919050565b60006020828403121561158b578081fd5b813561152581611aea565b6000806000606084860312156115aa578182fd5b83356115b581611aea565b925060208401356115c581611aea565b915060408401356115d581611aea565b809150509250925092565b6000602082840312156115f1578081fd5b815161152581611aff565b60006020828403121561160d578081fd5b815161152581611aea565b6000806000806080858703121561162d578081fd5b843561163881611aea565b93506020850135925060408501359150606085013561165681611aea565b939692955090935050565b600080600083850360a0811215611676578384fd5b6060811215611683578384fd5b50839250606084013561169581611aea565b915060808401356115d581611aff565b6000602082840312156116b6578081fd5b6115258261155e565b6000602082840312156116d0578081fd5b5035919050565b6000602082840312156116e8578081fd5b5051919050565b60008060408385031215611701578182fd5b82359150602083013561171381611aea565b809150509250929050565b600080600060608486031215611732578283fd5b833592506117426020850161155e565b915060408401356115d581611aff565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039586168152602081019490945260408401929092529092166060820152608081019190915260a00190565b6001600160a01b03949094168452602084019290925260408301526001600160801b0316606082015260800190565b6020808252600d908201526c24a72b20a624a22faa27a5a2a760991b604082015260600190565b60208082526011908201527f494e56414c49445f54494d455354414d50000000000000000000000000000000604082015260600190565b6020808252600c908201526b24a72b20a624a22fa0a2222960a11b604082015260600190565b6020808252600a9082015269494e56414c49445f544f60b01b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526012908201527f494e56414c49445f444953545249425554450000000000000000000000000000604082015260600190565b6020808252600d908201526c27a7262cafa3aaa0a92224a0a760991b604082015260600190565b6020808252600c908201526b34b73b30b634b22fb0b2323960a11b604082015260600190565b60208082526010908201527f494e56414c49445f475541524449414e00000000000000000000000000000000604082015260600190565b608081016001600160801b03806119d18661155e565b168352806119e16020870161155e565b166020840152806119f46040870161155e565b166040840152508260608301529392505050565b6001600160801b039384168152919092166020820152604081019190915260600190565b90815260200190565b9283526020830191909152604082015260600190565b60008219821115611a5e57611a5e611ad4565b500190565b600082611a7e57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611a9d57611a9d611ad4565b500290565b600082821015611ab457611ab4611ad4565b500390565b6000600019821415611acd57611acd611ad4565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461085257600080fd5b801515811461085257600080fdfea2646970667358221220c9cb49cf3afa603aadc83cc392e0278541a37c0484024027511c198f1930b92564736f6c63430008010033";
