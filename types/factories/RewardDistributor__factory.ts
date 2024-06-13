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
        name: "user",
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
        name: "distributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "ActivateReward",
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
        indexed: true,
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
        internalType: "uint256",
        name: "_endTimestamp",
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
        name: "distributor",
        type: "address",
      },
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
        internalType: "address",
        name: "_to",
        type: "address",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
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
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "WithdrawUnclaimedReward",
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
        name: "_user",
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
    inputs: [
      {
        internalType: "address",
        name: "_receiptTokenAddr",
        type: "address",
      },
    ],
    name: "getTokenPoolID",
    outputs: [
      {
        internalType: "uint256",
        name: "poolId",
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
        internalType: "uint256",
        name: "_endTimestamp",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdrawUnclaimedRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001f4a38038062001f4a83398101604081905262000034916200007c565b6001600160a01b038116620000665760405162461bcd60e51b81526004016200005d90620000ac565b60405180910390fd5b60601b6001600160601b031916608052620000d5565b6000602082840312156200008e578081fd5b81516001600160a01b0381168114620000a5578182fd5b9392505050565b6020808252600f908201526e24a72b20a624a22fa6a0a720a3a2a960891b604082015260600190565b60805160601c611e4f620000fb600039600081816106910152610ce50152611e4f6000f3fe608060405234801561001057600080fd5b50600436106101465760003560e01c8063630b5ba1116100c8578063a85adeab1161008c578063e2949bac11610066578063e2949bac14610299578063e6fd48bc146102ac578063f7c618c1146102b457610146565b8063a85adeab14610276578063ae79b32f1461027e578063dc6514a61461028657610146565b8063630b5ba1146102125780636c28e3491461021a5780637eba26b61461022d57806393d6827e1461024057806393f1a40b1461025357610146565b8063415985c11161010f578063415985c1146101c757806342f2d0a8146101dc578063452a9320146101e457806351eb05a6146101ec578063628436bd146101ff57610146565b8062f714ce1461014b5780630e894127146101605780631526fe27146101735780631653fd331461019f57806317caf6f1146101bf575b600080fd5b61015e610159366004611954565b6102bc565b005b61015e61016e366004611978565b610388565b610186610181366004611924565b6104bb565b60405161019694939291906119d9565b60405180910390f35b6101b26101ad366004611954565b610508565b6040516101969190611cf9565b6101b2610689565b6101cf61068f565b60405161019691906119ac565b6101b26106b3565b6101cf6106b9565b61015e6101fa366004611924565b6106c8565b61015e61020d3660046118bb565b61080c565b61015e610a2d565b61015e610228366004611866565b610a54565b6101cf61023b366004611924565b610c50565b6101b261024e3660046117da565b610c7a565b610266610261366004611954565b610c9f565b6040516101969493929190611d3c565b6101b2610cd0565b61015e610cd6565b61015e6102943660046117da565b610e16565b61015e6102a73660046117f6565b610fc8565b6101b261104c565b6101cf611052565b6001600160a01b0381166102eb5760405162461bcd60e51b81526004016102e290611ae9565b60405180910390fd5b600082815260026020908152604080832033808552925290912090610311908490611067565b600181015480610322575050610384565b600060018301556103338382611230565b83336001600160a01b0316306001600160a01b03167f919fc3589577d8ba8023ca13d0b64eaeb6af31c331b4b81c0d42d6642360307786856040516103799291906119c0565b60405180910390a450505b5050565b6008546001600160a01b031633146103b25760405162461bcd60e51b81526004016102e290611ba1565b80156103c0576103c0610a2d565b816001600160801b0316600184815481106103eb57634e487b7160e01b600052603260045260246000fd5b6000918252602090912060036004909202010154600554610415916001600160801b031690611dae565b61041f9190611d57565b600581905550816001848154811061044757634e487b7160e01b600052603260045260246000fd5b906000526020600020906004020160030160006101000a8154816001600160801b0302191690836001600160801b03160217905550827fccd694ed2b63929adb27d00583deee0fc53f963ff6d9ee49dbf20c390ad6083a83426040516104ae929190611ce0565b60405180910390a2505050565b600181815481106104cb57600080fd5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b03909216935091906001600160801b031684565b6000806001848154811061052c57634e487b7160e01b600052603260045260246000fd5b600091825260208083206040805160808082018352600495860290930180546001600160a01b039081168352600180830154848801526002808401548587019081526003948501546001600160801b03166060808801919091528f8c52828a52878c208f86168d528a52878c208851998a01895280548a5293840154898b015291830154888801529190930154928601929092529051825184516318160ddd60e01b8152945193995094979096909594909116936318160ddd9380830193919290829003018186803b15801561060157600080fd5b505afa158015610615573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610639919061193c565b905083602001514211801561064d57508015155b1561065f5761065c84826113de565b91505b602083015184516106729084868a611473565b61067c9190611d57565b9450505050505b92915050565b60055481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60095481565b6008546001600160a01b031681565b6000600182815481106106eb57634e487b7160e01b600052603260045260246000fd5b906000526020600020906004020190508060010154421161070c5750610809565b8054604080516318160ddd60e01b815290516000926001600160a01b0316916318160ddd916004808301926020929190829003018186803b15801561075057600080fd5b505afa158015610764573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610788919061193c565b90508061079c575042600190910155610809565b6040805160808101825283546001600160a01b031681526001840154602082015260028401549181019190915260038301546001600160801b031660608201526107e690826113de565b600283015560075442116107fa57426107fe565b6007545b826001018190555050505b50565b6008546001600160a01b031633146108365760405162461bcd60e51b81526004016102e290611ba1565b801561084457610844610a2d565b6000600654421161085757600654610859565b425b9050600061086a602086018661190a565b6001600160801b0316111561090057610900610889602086018661190a565b846001600160a01b031663360e303a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108c257600080fd5b505afa1580156108d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fa919061184a565b8361157f565b6000610912604086016020870161190a565b6001600160801b0316111561096d5761096d610934604086016020870161190a565b846001600160a01b031663f8d898986040518163ffffffff1660e01b815260040160206040518083038186803b1580156108c257600080fd5b600061097f606086016040870161190a565b6001600160801b031611156109da576109da6109a1606086016040870161190a565b846001600160a01b031663588785406040518163ffffffff1660e01b815260040160206040518083038186803b1580156108c257600080fd5b306001600160a01b0316836001600160a01b03167fd51d6a296a4547c957d8a56b2414719f7e8f2632cd0f4b2e9ab995d864fbd4dd8642604051610a1f929190611c93565b60405180910390a350505050565b60015460005b8181101561038457610a44816106c8565b610a4d81611dc5565b9050610a33565b600054610100900460ff1680610a6d5750610a6d611763565b80610a7b575060005460ff16155b610a975760405162461bcd60e51b81526004016102e290611b0d565b600054610100900460ff16158015610ac2576000805460ff1961ff0019909116610100171660011790555b6001600160a01b038616610ae85760405162461bcd60e51b81526004016102e290611a3f565b6001600160a01b038216610b0e5760405162461bcd60e51b81526004016102e290611c5c565b60008511610b2e5760405162461bcd60e51b81526004016102e290611b6a565b60008411610b4e5760405162461bcd60e51b81526004016102e290611bff565b60008311610b6e5760405162461bcd60e51b81526004016102e290611a08565b838311610b8d5760405162461bcd60e51b81526004016102e290611ab2565b6000805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b03898116918202929092179092556009879055600686905560078590556008805473ffffffffffffffffffffffffffffffffffffffff19169185169190911790556040517fb669701d3b2742b0ba19740af9a2b7faf3b2bf8f0c099d21f46e9689f01bb08590610c2e9088908890889088904290611d10565b60405180910390a28015610c48576000805461ff00191690555b505050505050565b60038181548110610c6057600080fd5b6000918252602090912001546001600160a01b0316905081565b6001600160a01b03811660009081526004602052604081205461068390600190611dae565b6002602081815260009384526040808520909152918352912080546001820154928201546003909201549092919084565b60075481565b60005b600354811015610dc6577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635129785d60038381548110610d3357634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b168152610d81916001600160a01b0316906004016119ac565b600060405180830381600087803b158015610d9b57600080fd5b505af1158015610daf573d6000803e3d6000fd5b505050508080610dbe90611dc5565b915050610cd9565b50610dd36003600061178c565b306001600160a01b03167f85c0d052552901f7098a06fade65944f1d3d3f53fc233e22965c4770c37dd9c742604051610e0c9190611cf9565b60405180910390a2565b6008546001600160a01b03163314610e405760405162461bcd60e51b81526004016102e290611ba1565b6276a700600754610e519190611d57565b4211610e6f5760405162461bcd60e51b81526004016102e290611bc8565b600080546040516370a0823160e01b8152620100009091046001600160a01b0316906370a0823190610ea59030906004016119ac565b60206040518083038186803b158015610ebd57600080fd5b505afa158015610ed1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef5919061193c565b60005460405163a9059cbb60e01b81529192506201000090046001600160a01b03169063a9059cbb90610f2e90859085906004016119c0565b602060405180830381600087803b158015610f4857600080fd5b505af1158015610f5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f80919061182e565b50306001600160a01b03167f47034772ef5a4a8198d54e2be48f3b4f8bdac2c5e4d100c6d16216a8228e37a88242604051610fbc929190611d02565b60405180910390a25050565b6001600160a01b038216610fee5760405162461bcd60e51b81526004016102e290611a8c565b6000610ff983610c7a565b90506110058183611067565b80836001600160a01b03167f4c7bb8fbeb9b8e2ec7ea3639ae4cf31d48b2fe0fe81f9f952a2b12fb764297678460405161103f91906119ac565b60405180910390a3505050565b60065481565b6000546201000090046001600160a01b031681565b60065442101561107657610384565b61107f826106c8565b6000600183815481106110a257634e487b7160e01b600052603260045260246000fd5b600091825260209182902060408051608081018252600490930290910180546001600160a01b039081168452600182015494840194909452600281015491830191909152600301546001600160801b03166060820152915082161561122b5760008381526002602081815260408084206001600160a01b03871685528252928390208451858501518551608081018752835481526001840154948101949094529382015494830194909452600381015460608301529261116492909186611473565b8160010160008282546111779190611d57565b909155505081516040516370a0823160e01b81526001600160a01b03909116906370a08231906111ab9086906004016119ac565b60206040518083038186803b1580156111c357600080fd5b505afa1580156111d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111fb919061193c565b808255604083015164e8d4a51000916112149190611d8f565b61121e9190611d6f565b6002820155426003909101555b505050565b600080546040516370a0823160e01b8152620100009091046001600160a01b0316906370a08231906112669030906004016119ac565b60206040518083038186803b15801561127e57600080fd5b505afa158015611292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b6919061193c565b90508082111561134f5760005460405163a9059cbb60e01b8152620100009091046001600160a01b03169063a9059cbb906112f790869085906004016119c0565b602060405180830381600087803b15801561131157600080fd5b505af1158015611325573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611349919061182e565b5061122b565b60005460405163a9059cbb60e01b8152620100009091046001600160a01b03169063a9059cbb9061138690869086906004016119c0565b602060405180830381600087803b1580156113a057600080fd5b505af11580156113b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d8919061182e565b50505050565b60006007548360200151106113f857506040820151610683565b6000611408846020015142611769565b9050600060055485606001516001600160801b03166009548461142b9190611d8f565b6114359190611d8f565b61143f9190611d6f565b90508361145164e8d4a5100083611d8f565b61145b9190611d6f565b856040015161146a9190611d57565b95945050505050565b60006007548360600151111561148b57506000611577565b82518015801561149d57506020840151155b80156114ab57506040840151155b80156114c6575062278d006007546114c39190611d57565b42105b1561154a576040516370a0823160e01b81526001600160a01b038716906370a08231906114f79086906004016119ac565b60206040518083038186803b15801561150f57600080fd5b505afa158015611523573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611547919061193c565b90505b604084015164e8d4a5100061155f8784611d8f565b6115699190611d6f565b6115739190611dae565b9150505b949350505050565b6001600160a01b0382166115a55760405162461bcd60e51b81526004016102e290611c36565b6001600160a01b038216600090815260046020526040902054156115db5760405162461bcd60e51b81526004016102e290611a66565b826001600160801b03166005546115f29190611d57565b600555604080516080810182526001600160a01b03938416808252602080830194855260008385018181526001600160801b0398891660608601908152600180548082018255818552965160049788027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf68101805492909c1673ffffffffffffffffffffffffffffffffffffffff1992831617909b5598517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf78b015591517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf88a0155517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf99098018054989099166fffffffffffffffffffffffffffffffff19909816979097179097558554828852929052918520556003805493840181559093527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90910180549091169091179055565b303b1590565b600060075482111561177b5760075491505b6117858383611dae565b9392505050565b508054600082559060005260206000209081019061080991905b808211156117ba57600081556001016117a6565b5090565b80356001600160801b03811681146117d557600080fd5b919050565b6000602082840312156117eb578081fd5b813561178581611df6565b60008060408385031215611808578081fd5b823561181381611df6565b9150602083013561182381611df6565b809150509250929050565b60006020828403121561183f578081fd5b815161178581611e0b565b60006020828403121561185b578081fd5b815161178581611df6565b600080600080600060a0868803121561187d578081fd5b853561188881611df6565b945060208601359350604086013592506060860135915060808601356118ad81611df6565b809150509295509295909350565b600080600083850360a08112156118d0578384fd5b60608112156118dd578384fd5b5083925060608401356118ef81611df6565b915060808401356118ff81611e0b565b809150509250925092565b60006020828403121561191b578081fd5b611785826117be565b600060208284031215611935578081fd5b5035919050565b60006020828403121561194d578081fd5b5051919050565b60008060408385031215611966578182fd5b82359150602083013561182381611df6565b60008060006060848603121561198c578283fd5b8335925061199c602085016117be565b915060408401356118ff81611e0b565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03949094168452602084019290925260408301526001600160801b0316606082015260800190565b60208082526013908201527f494e56414c49445f54494d455354414d505f3200000000000000000000000000604082015260600190565b6020808252600d908201526c24a72b20a624a22faa27a5a2a760991b604082015260600190565b6020808252600c908201526b746f6b656e5f65786973747360a01b604082015260600190565b6020808252600c908201526b24a72b20a624a22fa0a2222960a11b604082015260600190565b60208082526013908201527f494e56414c49445f54494d455354414d505f3300000000000000000000000000604082015260600190565b6020808252600a9082015269494e56414c49445f544f60b01b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526012908201527f494e56414c49445f444953545249425554450000000000000000000000000000604082015260600190565b6020808252600d908201526c27a7262cafa3aaa0a92224a0a760991b604082015260600190565b60208082526014908201527f5245574152445f504552494f445f414354495645000000000000000000000000604082015260600190565b60208082526013908201527f494e56414c49445f54494d455354414d505f3100000000000000000000000000604082015260600190565b6020808252600c908201526b34b73b30b634b22fb0b2323960a11b604082015260600190565b60208082526010908201527f494e56414c49445f475541524449414e00000000000000000000000000000000604082015260600190565b608081016001600160801b0380611ca9866117be565b16835280611cb9602087016117be565b16602084015280611ccc604087016117be565b166040840152508260608301529392505050565b6001600160801b03929092168252602082015260400190565b90815260200190565b918252602082015260400190565b948552602085019390935260408401919091526001600160a01b03166060830152608082015260a00190565b93845260208401929092526040830152606082015260800190565b60008219821115611d6a57611d6a611de0565b500190565b600082611d8a57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611da957611da9611de0565b500290565b600082821015611dc057611dc0611de0565b500390565b6000600019821415611dd957611dd9611de0565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461080957600080fd5b801515811461080957600080fdfea2646970667358221220adb5bf16ccffc3f7f43cd23f522d45fd28c2c9bc3a706520ee6a80c54999465864736f6c63430008010033";
