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
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AccumulateReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "lendingPair",
        type: "address",
      },
      {
        indexed: false,
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
        name: "_vars",
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
        indexed: false,
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
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
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
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
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
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "emergencyWithdraw",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
      {
        internalType: "uint256",
        name: "lastUpdateTimestamp",
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
  "0x60a06040523480156200001157600080fd5b5060405162001c3638038062001c3683398101604081905262000034916200007c565b6001600160a01b038116620000665760405162461bcd60e51b81526004016200005d90620000ac565b60405180910390fd5b60601b6001600160601b031916608052620000d5565b6000602082840312156200008e578081fd5b81516001600160a01b0381168114620000a5578182fd5b9392505050565b6020808252600f908201526e24a72b20a624a22fa6a0a720a3a2a960891b604082015260600190565b60805160601c611b34620001026000396000818161075201528181610d220152610e1d0152611b346000f3fe608060405234801561001057600080fd5b50600436106101615760003560e01c8063630b5ba1116100c85780639e3d87cd1161008c578063e0723e3a11610066578063e0723e3a146102c7578063e6fd48bc146102da578063f7c618c1146102e257610161565b80639e3d87cd146102a4578063a85adeab146102b7578063ae79b32f146102bf57610161565b8063630b5ba1146102405780637eba26b61461024857806386911a711461025b5780638dbb1e3a1461026e57806393f1a40b1461028157610161565b80632f940c701161012a578063452a932011610104578063452a93201461021257806351eb05a61461021a578063628436bd1461022d57610161565b80632f940c70146101e2578063415985c1146101f557806342f2d0a81461020a57610161565b8062f714ce146101665780630e8941271461017b5780631526fe271461018e5780631653fd33146101ba57806317caf6f1146101da575b600080fd5b610179610174366004611699565b6102ea565b005b6101796101893660046116c8565b610433565b6101a161019c366004611669565b61055b565b6040516101b19493929190611804565b60405180910390f35b6101cd6101c8366004611699565b6105a8565b6040516101b191906119f3565b6101cd610746565b6101796101f0366004611699565b61074c565b6101fd610750565b6040516101b1919061171d565b6101cd610774565b6101fd61077a565b610179610228366004611669565b610789565b61017961023b366004611600565b6108b8565b610179610abb565b6101fd610256366004611669565b610ae2565b6101cd610269366004611513565b610b0c565b6101cd61027c3660046116fc565b610b1e565b61029461028f366004611699565b610b31565b6040516101b19493929190611a21565b6101796102b23660046115b7565b610b62565b6101cd610d0d565b610179610d13565b6101796102d536600461152f565b610e12565b6101cd6110b5565b6101fd6110bb565b6001600160a01b0381166103195760405162461bcd60e51b815260040161031090611891565b60405180910390fd5b60006001838154811061033c57634e487b7160e01b600052603260045260246000fd5b6000918252602080832086845260028252604080852033865290925292206004909102909101915061036d84610789565b6000816002015464e8d4a510008460020154846000015461038e9190611a74565b6103989190611a54565b6103a29190611a93565b905060008183600101546103b69190611a3c565b90506103c285826110d0565b6002840154835464e8d4a51000916103d991611a74565b6103e39190611a54565b6002840155600060018401556040517ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b56890610423903390899085906117b0565b60405180910390a1505050505050565b6008546001600160a01b0316331461045d5760405162461bcd60e51b815260040161031090611949565b816001600160801b03166001848154811061048857634e487b7160e01b600052603260045260246000fd5b60009182526020909120600360049092020101546005546104b2916001600160801b031690611a93565b6104bc9190611a3c565b60058190555081600184815481106104e457634e487b7160e01b600052603260045260246000fd5b906000526020600020906004020160030160006101000a8154816001600160801b0302191690836001600160801b031602179055507fdbf8826f955f35a61dc4653bcd92044a5c53564222a205f6d2d3babe80de2c958383844260405161054e94939291906119fc565b60405180910390a1505050565b6001818154811061056b57600080fd5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b03909216935091906001600160801b031684565b600080600184815481106105cc57634e487b7160e01b600052603260045260246000fd5b600091825260208083206040805160808082018352600495860290930180546001600160a01b039081168352600180830154848801526002808401548587019081526003948501546001600160801b03166060808801919091528f8c52828a52878c208f86168d528a52878c208851998a01895280548a5293840154898b015291830154888801529190930154928601929092529051825184516318160ddd60e01b8152945193995094979096909594909116936318160ddd9380830193919290829003018186803b1580156106a157600080fd5b505afa1580156106b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d99190611681565b90508360200151421180156106ed57508015155b156106ff576106fc848261127f565b91505b60208301516040840151845164e8d4a510009061071d908690611a74565b6107279190611a54565b6107319190611a93565b61073b9190611a3c565b979650505050505050565b60055481565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60095481565b6008546001600160a01b031681565b6000600182815481106107ac57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600402019050806001015442116107cd57506108b5565b8054604080516318160ddd60e01b815290516000926001600160a01b0316916318160ddd916004808301926020929190829003018186803b15801561081157600080fd5b505afa158015610825573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108499190611681565b90508061085d5750426001909101556108b5565b6040805160808101825283546001600160a01b031681526001840154602082015260028401549181019190915260038301546001600160801b031660608201526108a7908261127f565b600283015550426001909101555b50565b6008546001600160a01b031633146108e25760405162461bcd60e51b815260040161031090611949565b600060065442116108f5576006546108f7565b425b90506000610908602086018661164f565b6001600160801b0316111561099e5761099e610927602086018661164f565b846001600160a01b031663360e303a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561096057600080fd5b505afa158015610974573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610998919061159b565b836112fb565b60006109b0604086016020870161164f565b6001600160801b03161115610a0b57610a0b6109d2604086016020870161164f565b846001600160a01b031663f8d898986040518163ffffffff1660e01b815260040160206040518083038186803b15801561096057600080fd5b6000610a1d606086016040870161164f565b6001600160801b03161115610a7857610a78610a3f606086016040870161164f565b846001600160a01b031663588785406040518163ffffffff1660e01b815260040160206040518083038186803b15801561096057600080fd5b7fd51d6a296a4547c957d8a56b2414719f7e8f2632cd0f4b2e9ab995d864fbd4dd83308642604051610aad9493929190611731565b60405180910390a150505050565b60015460005b8181101561074c57610ad281610789565b610adb81611aaa565b9050610ac1565b60038181548110610af257600080fd5b6000918252602090912001546001600160a01b0316905081565b60046020526000908152604090205481565b6000610b2a8383611a93565b9392505050565b6002602081815260009384526040808520909152918352912080546001820154928201546003909201549092919084565b600054610100900460ff1680610b7b5750610b7b6114bf565b80610b89575060005460ff16155b610ba55760405162461bcd60e51b8152600401610310906118b5565b600054610100900460ff16158015610bd0576000805460ff1961ff0019909116610100171660011790555b6001600160a01b038516610bf65760405162461bcd60e51b815260040161031090611833565b6001600160a01b038216610c1c5760405162461bcd60e51b8152600401610310906119bc565b60008411610c3c5760405162461bcd60e51b815260040161031090611912565b60008311610c5c5760405162461bcd60e51b81526004016103109061185a565b6000805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b03888116919091029190911790915560098590556006849055600880546001600160a01b0319169184169190911790556040517f9d0f13926a3a9c899df9df9d1ea6eb6c6adf949fad656f6eacf7ef515d3788f890610cec90879087908790879042906117d1565b60405180910390a18015610d06576000805461ff00191690555b5050505050565b60075481565b60005b600354811015610e03577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635129785d60038381548110610d7057634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b168152610dbe916001600160a01b03169060040161171d565b600060405180830381600087803b158015610dd857600080fd5b505af1158015610dec573d6000803e3d6000fd5b505050508080610dfb90611aaa565b915050610d16565b50610e10600360006114c5565b565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e5a5760405162461bcd60e51b815260040161031090611970565b6001600160a01b038416600090815260046020526040902054610e7c81610789565b600060018281548110610e9f57634e487b7160e01b600052603260045260246000fd5b600091825260209182902060408051608081018252600490930290910180546001600160a01b039081168452600182015494840194909452600281015491830191909152600301546001600160801b031660608201529150851615610fc05760008281526002602090815260408083206001600160a01b03891684529091529020805415801590610f31575080548411155b15610fbe5760028101546040830151825464e8d4a5100091610f5291611a74565b610f5c9190611a54565b610f669190611a93565b816001016000828254610f799190611a3c565b9091555050805484908290600090610f92908490611a93565b90915550506040820151815464e8d4a5100091610fae91611a74565b610fb89190611a54565b60028201555b505b6001600160a01b038416156110825760008281526002602090815260408083206001600160a01b038816845290915290208054156110415760028101546040830151825464e8d4a510009161101491611a74565b61101e9190611a54565b6110289190611a93565b81600101600082825461103b9190611a3c565b90915550505b838160000160008282546110559190611a3c565b90915550506040820151815464e8d4a510009161107191611a74565b61107b9190611a54565b6002909101555b7fdccc710aa345c11bb4759ab76e5789c2cec495d685efb53052fcc791ae506be7338385604051610423939291906117b0565b60065481565b6000546201000090046001600160a01b031681565b600080546040516370a0823160e01b8152620100009091046001600160a01b0316906370a082319061110690309060040161171d565b60206040518083038186803b15801561111e57600080fd5b505afa158015611132573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111569190611681565b9050808211156111ef5760005460405163a9059cbb60e01b8152620100009091046001600160a01b03169063a9059cbb906111979086908590600401611797565b602060405180830381600087803b1580156111b157600080fd5b505af11580156111c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e9919061157f565b5061127a565b60005460405163a9059cbb60e01b8152620100009091046001600160a01b03169063a9059cbb906112269086908690600401611797565b602060405180830381600087803b15801561124057600080fd5b505af1158015611254573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611278919061157f565b505b505050565b600080611290846020015142610b1e565b9050600060055485606001516001600160801b0316600954846112b39190611a74565b6112bd9190611a74565b6112c79190611a54565b9050836112d964e8d4a5100083611a74565b6112e39190611a54565b85604001516112f29190611a3c565b95945050505050565b6001600160a01b0382166113215760405162461bcd60e51b815260040161031090611996565b826001600160801b03166005546113389190611a3c565b600555604080516080810182526001600160a01b0384811682526020820184815260009383018481526001600160801b03888116606086019081526001805480820182559781905295517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6600490980297880180546001600160a01b031916919096161790945591517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7860155517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf885015590517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf990930180546fffffffffffffffffffffffffffffffff19169390911692909217909155805461145c9190611a93565b6001600160a01b039092166000818152600460205260408120939093556003805460018101825593527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90920180546001600160a01b0319169092179091555050565b303b1590565b50805460008255906000526020600020908101906108b591905b808211156114f357600081556001016114df565b5090565b80356001600160801b038116811461150e57600080fd5b919050565b600060208284031215611524578081fd5b8135610b2a81611adb565b60008060008060808587031215611544578283fd5b843561154f81611adb565b9350602085013561155f81611adb565b9250604085013561156f81611adb565b9396929550929360600135925050565b600060208284031215611590578081fd5b8151610b2a81611af0565b6000602082840312156115ac578081fd5b8151610b2a81611adb565b600080600080608085870312156115cc578384fd5b84356115d781611adb565b9350602085013592506040850135915060608501356115f581611adb565b939692955090935050565b600080600083850360a0811215611615578384fd5b6060811215611622578384fd5b50839250606084013561163481611adb565b9150608084013561164481611af0565b809150509250925092565b600060208284031215611660578081fd5b610b2a826114f7565b60006020828403121561167a578081fd5b5035919050565b600060208284031215611692578081fd5b5051919050565b600080604083850312156116ab578182fd5b8235915060208301356116bd81611adb565b809150509250929050565b6000806000606084860312156116dc578283fd5b833592506116ec602085016114f7565b9150604084013561164481611af0565b6000806040838503121561170e578182fd5b50508035926020909101359150565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682528416602082015260c081016001600160801b038061175b866114f7565b1660408401528061176e602087016114f7565b16606084015280611781604087016114f7565b166080840152508260a083015295945050505050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039390931683526020830191909152604082015260600190565b6001600160a01b039586168152602081019490945260408401929092529092166060820152608081019190915260a00190565b6001600160a01b03949094168452602084019290925260408301526001600160801b0316606082015260800190565b6020808252600d908201526c24a72b20a624a22faa27a5a2a760991b604082015260600190565b60208082526011908201527f494e56414c49445f54494d455354414d50000000000000000000000000000000604082015260600190565b6020808252600a9082015269494e56414c49445f544f60b01b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526012908201527f494e56414c49445f444953545249425554450000000000000000000000000000604082015260600190565b6020808252600d908201526c27a7262cafa3aaa0a92224a0a760991b604082015260600190565b6020808252600c908201526b27a7262cafa6a0a720a3a2a960a11b604082015260600190565b6020808252600c908201526b34b73b30b634b22fb0b2323960a11b604082015260600190565b60208082526010908201527f494e56414c49445f475541524449414e00000000000000000000000000000000604082015260600190565b90815260200190565b9384526001600160801b03928316602085015291166040830152606082015260800190565b93845260208401929092526040830152606082015260800190565b60008219821115611a4f57611a4f611ac5565b500190565b600082611a6f57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611a8e57611a8e611ac5565b500290565b600082821015611aa557611aa5611ac5565b500390565b6000600019821415611abe57611abe611ac5565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146108b557600080fd5b80151581146108b557600080fdfea26469706673582212206ba6da20832b79dbe2525873abaeb8998eb78f050db1953a39a3cfc5d582dcf864736f6c63430008010033";
