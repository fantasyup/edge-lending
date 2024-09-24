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
        indexed: false,
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "UpdateEndTimestamp",
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
    inputs: [],
    name: "activated",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
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
        name: "_newEndTimestamp",
        type: "uint256",
      },
    ],
    name: "updateEndTimestamp",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "lastAccRewardTokenPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pendingReward",
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
  "0x60a06040523480156200001157600080fd5b50604051620024473803806200244783398101604081905262000034916200007c565b6001600160a01b038116620000665760405162461bcd60e51b81526004016200005d90620000ac565b60405180910390fd5b60601b6001600160601b031916608052620000d5565b6000602082840312156200008e578081fd5b81516001600160a01b0381168114620000a5578182fd5b9392505050565b6020808252600f908201526e24a72b20a624a22fa6a0a720a3a2a960891b604082015260600190565b60805160601c61234c620000fb600039600081816108170152610ced015261234c6000f3fe608060405234801561001057600080fd5b50600436106101975760003560e01c8063630b5ba1116100e3578063ae79b32f1161008c578063e2949bac11610066578063e2949bac14610326578063e6fd48bc14610339578063f7c618c11461034157610197565b8063ae79b32f146102f8578063b96b8ad914610300578063dc6514a61461031357610197565b806393d6827e116100bd57806393d6827e146102bb57806393f1a40b146102ce578063a85adeab146102f057610197565b8063630b5ba11461028d5780636e1613fb146102955780637eba26b6146102a857610197565b8063186601ca11610145578063441482d31161011f578063441482d31461025f578063452a93201461027257806351eb05a61461027a57610197565b8063186601ca1461022d578063415985c11461024257806342f2d0a81461025757610197565b80631526fe27116101765780631526fe27146101e25780631653fd331461020557806317caf6f11461022557610197565b8062f714ce1461019c57806306fdde03146101b15780630e894127146101cf575b600080fd5b6101af6101aa366004611c51565b610349565b005b6101b9610415565b6040516101c69190611d37565b60405180910390f35b6101af6101dd366004611c75565b6104a3565b6101f56101f0366004611c21565b6105d6565b6040516101c69493929190611d08565b610218610213366004611c51565b610623565b6040516101c69190612190565b610218610806565b61023561080c565b6040516101c69190611cfd565b61024a610815565b6040516101c69190611cd0565b610218610839565b6101af61026d366004611b2b565b61083f565b61024a610a48565b6101af610288366004611c21565b610a57565b6101af610b9b565b6101af6102a3366004611c21565b610bc2565b61024a6102b6366004611c21565b610c5d565b6102186102c9366004611a9f565b610c87565b6102e16102dc366004611c51565b610cac565b6040516101c6939291906121a7565b610218610cd8565b6101af610cde565b6101af61030e366004611bd5565b610e1e565b6101af610321366004611a9f565b61103b565b6101af610334366004611abb565b611180565b6102186111f7565b61024a6111fd565b6001600160a01b0381166103785760405162461bcd60e51b815260040161036f90611eff565b60405180910390fd5b60008281526004602090815260408083203380855292529091209061039e908490611211565b6001810154806103af575050610411565b600060018301556103c083826113a8565b83336001600160a01b0316306001600160a01b03167f919fc3589577d8ba8023ca13d0b64eaeb6af31c331b4b81c0d42d664236030778685604051610406929190611ce4565b60405180910390a450505b5050565b6001805461042290612287565b80601f016020809104026020016040519081016040528092919081815260200182805461044e90612287565b801561049b5780601f106104705761010080835404028352916020019161049b565b820191906000526020600020905b81548152906001019060200180831161047e57829003601f168201915b505050505081565b600a546001600160a01b031633146104cd5760405162461bcd60e51b815260040161036f90611fb7565b80156104db576104db610b9b565b816001600160801b03166003848154811061050657634e487b7160e01b600052603260045260246000fd5b6000918252602090912060036004909202010154600754610530916001600160801b031690612240565b61053a91906121e9565b600781905550816003848154811061056257634e487b7160e01b600052603260045260246000fd5b906000526020600020906004020160030160006101000a8154816001600160801b0302191690836001600160801b03160217905550827fccd694ed2b63929adb27d00583deee0fc53f963ff6d9ee49dbf20c390ad6083a83426040516105c9929190612177565b60405180910390a2505050565b600381815481106105e657600080fd5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b03909216935091906001600160801b031684565b6000806003848154811061064757634e487b7160e01b600052603260045260246000fd5b6000918252602080832060408051608081018252600494850290920180546001600160a01b039081168452600180830154858701526002808401548686019081526003909401546001600160801b03166060808801919091528d8a52888852858a208d85168b528852858a2086519182018752805482529283015481890152910154818501529151845184516318160ddd60e01b8152945195995092979096909592909116936318160ddd93808301939290829003018186803b15801561070d57600080fd5b505afa158015610721573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107459190611c39565b905083602001514211801561075957508015155b1561076b576107688482611475565b91505b83516040516370a0823160e01b81526000916001600160a01b0316906370a082319061079b908a90600401611cd0565b60206040518083038186803b1580156107b357600080fd5b505afa1580156107c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107eb9190611c39565b90506107f881848661150a565b955050505050505b92915050565b60075481565b60025460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600b5481565b600054610100900460ff168061085857506108586115aa565b80610866575060005460ff16155b6108825760405162461bcd60e51b815260040161036f90611f23565b600054610100900460ff161580156108ad576000805460ff1961ff0019909116610100171660011790555b6001600160a01b0386166108d35760405162461bcd60e51b815260040161036f90611da1565b6001600160a01b0382166108f95760405162461bcd60e51b815260040161036f906120f3565b600085116109195760405162461bcd60e51b815260040161036f90611f80565b600084116109395760405162461bcd60e51b815260040161036f9061204c565b600083116109595760405162461bcd60e51b815260040161036f90611d6a565b8383116109785760405162461bcd60e51b815260040161036f90611e91565b610984600189896119ca565b506002805474ffffffffffffffffffffffffffffffffffffffff0019166101006001600160a01b0389811691820292909217909255600b87905560088690556009859055600a805473ffffffffffffffffffffffffffffffffffffffff19169185169190911790556040517fb669701d3b2742b0ba19740af9a2b7faf3b2bf8f0c099d21f46e9689f01bb08590610a2490889088908890889042906121bd565b60405180910390a28015610a3e576000805461ff00191690555b5050505050505050565b600a546001600160a01b031681565b600060038281548110610a7a57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060040201905080600101544211610a9b5750610b98565b8054604080516318160ddd60e01b815290516000926001600160a01b0316916318160ddd916004808301926020929190829003018186803b158015610adf57600080fd5b505afa158015610af3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b179190611c39565b905080610b2b575042600190910155610b98565b6040805160808101825283546001600160a01b031681526001840154602082015260028401549181019190915260038301546001600160801b03166060820152610b759082611475565b60028301556009544211610b895742610b8d565b6009545b826001018190555050505b50565b60035460005b8181101561041157610bb281610a57565b610bbb816122c2565b9050610ba1565b600a546001600160a01b03163314610bec5760405162461bcd60e51b815260040161036f90611fb7565b60095442108015610bfe575060095481115b610c1a5760405162461bcd60e51b815260040161036f90611dc8565b600981905560405130907efbd5c51f2c4079b201a855e3ef64f668e268d27880763fd9ebf9ba81e2b63f90610c529084904290612199565b60405180910390a250565b60058181548110610c6d57600080fd5b6000918252602090912001546001600160a01b0316905081565b6001600160a01b03811660009081526006602052604081205461080090600190612240565b600460209081526000928352604080842090915290825290208054600182015460029092015490919083565b60095481565b60005b600554811015610db6577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635129785d60058381548110610d3b57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546040516001600160e01b031960e084901b168152610d71916001600160a01b031690600401611cd0565b600060405180830381600087803b158015610d8b57600080fd5b505af1158015610d9f573d6000803e3d6000fd5b505050508080610dae906122c2565b915050610ce1565b50610dc360056000611a4e565b60025460ff16610ddb576002805460ff191660011790555b306001600160a01b03167f85c0d052552901f7098a06fade65944f1d3d3f53fc233e22965c4770c37dd9c742604051610e149190612190565b60405180910390a2565b600a546001600160a01b03163314610e485760405162461bcd60e51b815260040161036f90611fb7565b600854428111610e6a5760405162461bcd60e51b815260040161036f90611ec8565b6000610e796020850185611c07565b6001600160801b03161115610f0f57610f0f610e986020850185611c07565b836001600160a01b031663360e303a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ed157600080fd5b505afa158015610ee5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f099190611b0f565b836115b0565b6000610f216040850160208601611c07565b6001600160801b03161115610f7c57610f7c610f436040850160208601611c07565b836001600160a01b031663f8d898986040518163ffffffff1660e01b815260040160206040518083038186803b158015610ed157600080fd5b6000610f8e6060850160408601611c07565b6001600160801b03161115610fe957610fe9610fb06060850160408601611c07565b836001600160a01b031663588785406040518163ffffffff1660e01b815260040160206040518083038186803b158015610ed157600080fd5b306001600160a01b0316826001600160a01b03167fd51d6a296a4547c957d8a56b2414719f7e8f2632cd0f4b2e9ab995d864fbd4dd854260405161102e92919061212a565b60405180910390a3505050565b600a546001600160a01b031633146110655760405162461bcd60e51b815260040161036f90611fb7565b6276a70060095461107691906121e9565b42116110945760405162461bcd60e51b815260040161036f90611fde565b6002546040516370a0823160e01b815260009161010090046001600160a01b0316906370a08231906110ca903090600401611cd0565b60206040518083038186803b1580156110e257600080fd5b505afa1580156110f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111a9190611c39565b6002549091506111399061010090046001600160a01b0316838361179a565b306001600160a01b03167f47034772ef5a4a8198d54e2be48f3b4f8bdac2c5e4d100c6d16216a8228e37a88242604051611174929190612199565b60405180910390a25050565b6001600160a01b0382166111a65760405162461bcd60e51b815260040161036f90611e6b565b60006111b183610c87565b90506111bd8183611211565b80836001600160a01b03167f4c7bb8fbeb9b8e2ec7ea3639ae4cf31d48b2fe0fe81f9f952a2b12fb764297678460405161102e9190611cd0565b60085481565b60025461010090046001600160a01b031681565b60025460ff161580611224575060085442105b1561122e57610411565b61123782610a57565b60006003838154811061125a57634e487b7160e01b600052603260045260246000fd5b600091825260209182902060408051608081018252600490930290910180546001600160a01b039081168452600182015494840194909452600281015491830191909152600301546001600160801b0316606082015291508216156113a35760008381526004602081815260408084206001600160a01b0380881686529252808420855191516370a0823160e01b815290949391909216916370a082319161130491889101611cd0565b60206040518083038186803b15801561131c57600080fd5b505afa158015611330573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113549190611c39565b905061138e81846040015184604051806060016040529081600082015481526020016001820154815260200160028201548152505061150a565b60018301555060408201518155426002909101555b505050565b6002546040516370a0823160e01b815260009161010090046001600160a01b0316906370a08231906113de903090600401611cd0565b60206040518083038186803b1580156113f657600080fd5b505afa15801561140a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142e9190611c39565b905080821115611459576002546114549061010090046001600160a01b0316848361179a565b6113a3565b6002546113a39061010090046001600160a01b0316848461179a565b600060095483602001511061148f57506040820151610800565b600061149f846020015142611805565b9050600060075485606001516001600160801b0316600b54846114c29190612221565b6114cc9190612221565b6114d69190612201565b9050836114e864e8d4a5100083612221565b6114f29190612201565b856040015161150191906121e9565b95945050505050565b60006009548260400151101580611530575062278d0060095461152d91906121e9565b42115b80611539575083155b15611546575060006115a3565b815160009064e8d4a510009061155c9087612221565b6115669190612201565b90508064e8d4a510006115798688612221565b6115839190612201565b61158d9190612240565b915082602001518261159f91906121e9565b9150505b9392505050565b303b1590565b6001600160a01b0382166115d65760405162461bcd60e51b815260040161036f906120cd565b6001600160a01b0382166000908152600660205260409020541561160c5760405162461bcd60e51b815260040161036f90611dff565b826001600160801b031660075461162391906121e9565b600755604080516080810182526001600160a01b03938416808252602080830194855260008385018181526001600160801b0398891660608601908152600380546001808201835582865297517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b6004909202918201805473ffffffffffffffffffffffffffffffffffffffff1990811692909d1691909117905598517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c8a015591517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d890155517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85e90970180546fffffffffffffffffffffffffffffffff1916979099169690961790975593548187526006909452918520929092556005805492830181559093527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180549091169091179055565b6113a38363a9059cbb60e01b84846040516024016117b9929190611ce4565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b031990931692909217909152611821565b60006009548211156118175760095491505b6115a38383612240565b6000611876826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118b09092919063ffffffff16565b8051909150156113a357808060200190518101906118949190611af3565b6113a35760405162461bcd60e51b815260040161036f90612083565b60606118bf84846000856118c7565b949350505050565b6060824710156118e95760405162461bcd60e51b815260040161036f90611e25565b6118f285611987565b61190e5760405162461bcd60e51b815260040161036f90612015565b600080866001600160a01b0316858760405161192a9190611cb4565b60006040518083038185875af1925050503d8060008114611967576040519150601f19603f3d011682016040523d82523d6000602084013e61196c565b606091505b509150915061197c828286611991565b979650505050505050565b803b15155b919050565b606083156119a05750816115a3565b8251156119b05782518084602001fd5b8160405162461bcd60e51b815260040161036f9190611d37565b8280546119d690612287565b90600052602060002090601f0160209004810192826119f85760008555611a3e565b82601f10611a115782800160ff19823516178555611a3e565b82800160010185558215611a3e579182015b82811115611a3e578235825591602001919060010190611a23565b50611a4a929150611a68565b5090565b5080546000825590600052602060002090810190610b9891905b5b80821115611a4a5760008155600101611a69565b803561198c816122f3565b80356001600160801b038116811461198c57600080fd5b600060208284031215611ab0578081fd5b81356115a3816122f3565b60008060408385031215611acd578081fd5b8235611ad8816122f3565b91506020830135611ae8816122f3565b809150509250929050565b600060208284031215611b04578081fd5b81516115a381612308565b600060208284031215611b20578081fd5b81516115a3816122f3565b600080600080600080600060c0888a031215611b45578283fd5b873567ffffffffffffffff80821115611b5c578485fd5b818a0191508a601f830112611b6f578485fd5b813581811115611b7d578586fd5b8b6020828501011115611b8e578586fd5b602092830199509750611ba4918a019050611a7d565b9450604088013593506060880135925060808801359150611bc760a08901611a7d565b905092959891949750929550565b6000808284036080811215611be8578283fd5b6060811215611bf5578283fd5b508291506060830135611ae8816122f3565b600060208284031215611c18578081fd5b6115a382611a88565b600060208284031215611c32578081fd5b5035919050565b600060208284031215611c4a578081fd5b5051919050565b60008060408385031215611c63578182fd5b823591506020830135611ae8816122f3565b600080600060608486031215611c89578283fd5b83359250611c9960208501611a88565b91506040840135611ca981612308565b809150509250925092565b60008251611cc6818460208701612257565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6001600160a01b03949094168452602084019290925260408301526001600160801b0316606082015260800190565b6000602082528251806020840152611d56816040850160208701612257565b601f01601f19169190910160400192915050565b60208082526013908201527f494e56414c49445f54494d455354414d505f3200000000000000000000000000604082015260600190565b6020808252600d908201526c24a72b20a624a22faa27a5a2a760991b604082015260600190565b60208082526011908201527f494e56414c49445f54494d455354414d50000000000000000000000000000000604082015260600190565b6020808252600c908201526b746f6b656e5f65786973747360a01b604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b6020808252600c908201526b24a72b20a624a22fa0a2222960a11b604082015260600190565b60208082526013908201527f494e56414c49445f54494d455354414d505f3300000000000000000000000000604082015260600190565b60208082526014908201527f444953545249425554494f4e5f53544152544544000000000000000000000000604082015260600190565b6020808252600a9082015269494e56414c49445f544f60b01b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60208082526012908201527f494e56414c49445f444953545249425554450000000000000000000000000000604082015260600190565b6020808252600d908201526c27a7262cafa3aaa0a92224a0a760991b604082015260600190565b60208082526014908201527f5245574152445f504552494f445f414354495645000000000000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b60208082526013908201527f494e56414c49445f54494d455354414d505f3100000000000000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252600c908201526b34b73b30b634b22fb0b2323960a11b604082015260600190565b60208082526010908201527f494e56414c49445f475541524449414e00000000000000000000000000000000604082015260600190565b608081016001600160801b038061214086611a88565b1683528061215060208701611a88565b1660208401528061216360408701611a88565b166040840152508260608301529392505050565b6001600160801b03929092168252602082015260400190565b90815260200190565b918252602082015260400190565b9283526020830191909152604082015260600190565b948552602085019390935260408401919091526001600160a01b03166060830152608082015260a00190565b600082198211156121fc576121fc6122dd565b500190565b60008261221c57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561223b5761223b6122dd565b500290565b600082821015612252576122526122dd565b500390565b60005b8381101561227257818101518382015260200161225a565b83811115612281576000848401525b50505050565b60028104600182168061229b57607f821691505b602082108114156122bc57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156122d6576122d66122dd565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610b9857600080fd5b8015158114610b9857600080fdfea264697066735822122079b097531dfe8ed10499aa9b7eb3df40b7f432d8174d6f5a56d768bbcab58a1964736f6c63430008010033";
