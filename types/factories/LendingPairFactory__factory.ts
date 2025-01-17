/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { LendingPairFactory } from "../LendingPairFactory";

export class LendingPairFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owner: string,
    _pairLogic: string,
    _collateralWrapperLogic: string,
    _debtTokenLogic: string,
    _borrowAssetWrapperLogic: string,
    _rewardDistributionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LendingPairFactory> {
    return super.deploy(
      _owner,
      _pairLogic,
      _collateralWrapperLogic,
      _debtTokenLogic,
      _borrowAssetWrapperLogic,
      _rewardDistributionManager,
      overrides || {}
    ) as Promise<LendingPairFactory>;
  }
  getDeployTransaction(
    _owner: string,
    _pairLogic: string,
    _collateralWrapperLogic: string,
    _debtTokenLogic: string,
    _borrowAssetWrapperLogic: string,
    _rewardDistributionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _pairLogic,
      _collateralWrapperLogic,
      _debtTokenLogic,
      _borrowAssetWrapperLogic,
      _rewardDistributionManager,
      overrides || {}
    );
  }
  attach(address: string): LendingPairFactory {
    return super.attach(address) as LendingPairFactory;
  }
  connect(signer: Signer): LendingPairFactory__factory {
    return super.connect(signer) as LendingPairFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPairFactory {
    return new Contract(address, _abi, signerOrProvider) as LendingPairFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pairLogic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralWrapperLogic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_debtTokenLogic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_borrowAssetWrapperLogic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardDistributionManager",
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
        name: "pairLogic",
        type: "address",
      },
    ],
    name: "LogicContractUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ir",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "NewInterestRateModel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "created",
        type: "uint256",
      },
    ],
    name: "NewLendingPair",
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
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allPairs",
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
    name: "borrowAssetWrapperImplementation",
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
    name: "collateralWrapperImplementation",
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
        components: [
          {
            internalType: "uint256",
            name: "baseRatePerYear",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "multiplierPerYear",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jumpMultiplierPerYear",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optimal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowRateMaxMantissa",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blocksPerYear",
            type: "uint256",
          },
        ],
        internalType: "struct LendingPairFactory.NewLendingVaultIRLocalVars",
        name: "_interestRateVars",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_team",
        type: "address",
      },
    ],
    name: "createIR",
    outputs: [
      {
        internalType: "address",
        name: "ir",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_lendingPairName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_lendingPairSymbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_pauseGuardian",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_collateralAsset",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "borrowAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "initialExchangeRateMantissa",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFactorMantissa",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationFee",
            type: "uint256",
          },
          {
            internalType: "contract IInterestRateModel",
            name: "interestRateModel",
            type: "address",
          },
        ],
        internalType: "struct LendingPairFactory.BorrowLocalVars",
        name: "_borrowVars",
        type: "tuple",
      },
    ],
    name: "createLendingPairWithProxy",
    outputs: [
      {
        internalType: "address",
        name: "newLendingPair",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "debtTokenImplementation",
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
        name: "ir",
        type: "address",
      },
    ],
    name: "disableIR",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lendingPairImplementation",
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
    name: "rewardDistributionManager",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newLogicContract",
        type: "address",
      },
    ],
    name: "updateBorrowAssetWrapperImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newLogicContract",
        type: "address",
      },
    ],
    name: "updateCollateralWrapperImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newLogicContract",
        type: "address",
      },
    ],
    name: "updateDebtTokenImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newLogicContract",
        type: "address",
      },
    ],
    name: "updatePairImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newManager",
        type: "address",
      },
    ],
    name: "updateRewardManager",
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
    name: "validInterestRateModels",
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
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002641380380620026418339810160408190526200003491620001da565b6000805460ff191690556001600160a01b038616620000705760405162461bcd60e51b8152600401620000679062000279565b60405180910390fd5b6001600160a01b038516620000995760405162461bcd60e51b815260040162000067906200025a565b6001600160a01b038416620000c25760405162461bcd60e51b8152600401620000679062000298565b6001600160a01b038316620000eb5760405162461bcd60e51b81526004016200006790620002b7565b6001600160a01b038216620001145760405162461bcd60e51b81526004016200006790620002f5565b6001600160a01b0381166200013d5760405162461bcd60e51b81526004016200006790620002d6565b60609590951b6001600160601b03191660805260008054610100600160a81b0319166101006001600160a01b0396871602179055600180546001600160a01b031990811694861694909417905560028054841692851692909217909155600380548316918416919091179055600480549091169190921617905562000314565b80516001600160a01b0381168114620001d557600080fd5b919050565b60008060008060008060c08789031215620001f3578182fd5b620001fe87620001bd565b95506200020e60208801620001bd565b94506200021e60408801620001bd565b93506200022e60608801620001bd565b92506200023e60808801620001bd565b91506200024e60a08801620001bd565b90509295509295509295565b6020808252600590820152641a5b9d97db60da1b604082015260600190565b602080825260059082015264696e765f6f60d81b604082015260600190565b602080825260059082015264696e765f6360d81b604082015260600190565b6020808252600590820152641a5b9d97d960da1b604082015260600190565b60208082526005908201526434b73b2fb960d91b604082015260600190565b60208082526005908201526434b73b2fb160d91b604082015260600190565b60805160601c6122cf62000372600039600081816102b50152818161039e0152818161048a0152818161051701528181610563015281816105900152818161066001528181610733015281816107f401526108a201526122cf6000f3fe60806040523480156200001157600080fd5b50600436106200013c5760003560e01c80638456cb5911620000bd578063a01e047c116200007b578063a01e047c1462000237578063b7e8774f146200024e578063dc1bde231462000265578063f59c79dc146200027c578063f9fcaf7b1462000293576200013c565b80638456cb5914620001eb5780638da5cb5b14620001f55780638f8547f014620001ff57806396807c841462000216578063978724671462000220576200013c565b80633f4ba83a116200010b5780633f4ba83a14620001aa5780633f9daecc14620001b45780635c975abb14620001be578063775c751314620001d75780637fe4964114620001e1576200013c565b8063050eb2eb14620001415780631d3b3574146200015a5780631e171b0c146200017c5780631e3dd18b1462000193575b600080fd5b62000158620001523660046200112e565b620002aa565b005b620001646200037f565b60405162000173919062001320565b60405180910390f35b620001586200018d3660046200112e565b62000393565b62000164620001a436600462001236565b62000454565b620001586200047f565b62000164620004d6565b620001c8620004e5565b604051620001739190620013a4565b62000164620004ee565b62000164620004fd565b620001586200050c565b6200016462000561565b62000158620002103660046200112e565b62000585565b6200016462000646565b62000158620002313660046200112e565b62000655565b62000158620002483660046200112e565b62000728565b620001586200025f3660046200112e565b620007e9565b6200016462000276366004620011fa565b62000895565b620001c86200028d3660046200112e565b620009d0565b62000164620002a436600462001154565b620009e5565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620002fe5760405162461bcd60e51b8152600401620002f590620015f4565b60405180910390fd5b6001600160a01b038116620003275760405162461bcd60e51b8152600401620002f590620015b6565b600480546001600160a01b0319166001600160a01b0383161790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f906200037490839062001320565b60405180910390a150565b60005461010090046001600160a01b031681565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620003de5760405162461bcd60e51b8152600401620002f590620015f4565b6001600160a01b038116620004075760405162461bcd60e51b8152600401620002f590620015b6565b600380546001600160a01b0319166001600160a01b0383161790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f906200037490839062001320565b600581815481106200046557600080fd5b6000918252602090912001546001600160a01b0316905081565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620004ca5760405162461bcd60e51b8152600401620002f590620015f4565b620004d462000dab565b565b6001546001600160a01b031681565b60005460ff1690565b6003546001600160a01b031681565b6002546001600160a01b031681565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620005575760405162461bcd60e51b8152600401620002f590620015f4565b620004d462000e22565b7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620005d05760405162461bcd60e51b8152600401620002f590620015f4565b6001600160a01b038116620005f95760405162461bcd60e51b8152600401620002f590620015b6565b600180546001600160a01b0319166001600160a01b0383161790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f906200037490839062001320565b6004546001600160a01b031681565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620006a05760405162461bcd60e51b8152600401620002f590620015f4565b6001600160a01b038116620006c95760405162461bcd60e51b8152600401620002f590620015b6565b6000805474ffffffffffffffffffffffffffffffffffffffff0019166101006001600160a01b038416021790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f906200037490839062001320565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620007735760405162461bcd60e51b8152600401620002f590620015f4565b6001600160a01b0381166200079c5760405162461bcd60e51b8152600401620002f590620015b6565b600280546001600160a01b0319166001600160a01b0383161790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f906200037490839062001320565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620008345760405162461bcd60e51b8152600401620002f590620015f4565b6001600160a01b03811660009081526006602052604090205460ff161515600114620008745760405162461bcd60e51b8152600401620002f59062001590565b6001600160a01b03166000908152600660205260409020805460ff19169055565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620008e25760405162461bcd60e51b8152600401620002f590620015f4565b6001600160a01b0382166200090b5760405162461bcd60e51b8152600401620002f59062001571565b82600001358360200135846040013585606001358587608001358860a00135604051620009389062001059565b6200094a979695949392919062001637565b604051809103906000f08015801562000967573d6000803e3d6000fd5b506001600160a01b03811660009081526006602052604090819020805460ff19166001179055519091507f918897fd1bc2f5f93459d04688d69fa9309915b7aef0f702c7c8080621aeaaf790620009c290839042906200138b565b60405180910390a192915050565b60066020526000908152604090205460ff1681565b6000620009f1620004e5565b1562000a115760405162461bcd60e51b8152600401620002f5906200153a565b6001600160a01b03841662000a3a5760405162461bcd60e51b8152600401620002f590620015d5565b6001600160a01b03831662000a635760405162461bcd60e51b8152600401620002f590620015b6565b600062000a7460208401846200112e565b6001600160a01b0316141562000a9e5760405162461bcd60e51b8152600401620002f590620014e4565b6006600062000ab460c0850160a086016200112e565b6001600160a01b0316815260208101919091526040016000205460ff16151560011462000af55760405162461bcd60e51b8152600401620002f59062001618565b62000aff62001067565b60055460405160009162000b1a918a918a9160200162001473565b60408051808303601f19018152919052805160209091012060005490915062000b529061010090046001600160a01b03168262000e84565b60035490935062000b9a906001600160a01b03168462000b7660208801886200112e565b8b604051806040016040528060038152602001622127a960e91b8152508662000f14565b6001600160a01b03908116835260015460408051808201909152600381526210d3d360ea1b602082015262000bdb929190911690859088908c908662000f14565b6001600160a01b0390811660208085019190915260025462000c2e921690859062000c09908801886200112e565b8b604051806040016040528060048152602001631111509560e21b8152508662000f14565b6001600160a01b039081166040808501918252805160c08101825260208089018035835289840135918301919091526060808a0135938301939093528651851692820192909252608080890135908201529151831660a083015290918516906362546c40908b908b9062000ca3908a6200112e565b60208801518b90879062000cbe60c08e0160a08f016200112e565b8f6040518963ffffffff1660e01b815260040162000ce4989796959493929190620013af565b600060405180830381600087803b15801562000cff57600080fd5b505af115801562000d14573d6000803e3d6000fd5b5050600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180546001600160a01b0319166001600160a01b03881617905550506040517f569465810a88162d0f22919f03f6666d504b840ebec118a2df6f23ab67638de09062000d9790869042906200138b565b60405180910390a150505095945050505050565b62000db5620004e5565b62000dd45760405162461bcd60e51b8152600401620002f590620014ad565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa62000e0962000f46565b60405162000e18919062001320565b60405180910390a1565b62000e2c620004e5565b1562000e4c5760405162461bcd60e51b8152600401620002f5906200153a565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25862000e0962000f46565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528360601b60148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152826037826000f59150506001600160a01b03811662000f0e5760405162461bcd60e51b8152600401620002f59062001503565b92915050565b600062000f2b6001600160a01b0388168362000e84565b905062000f3c868287878762000f4a565b9695505050505050565b3390565b60008260405160200162000f5f919062001302565b6040516020818303038152906040529050808260405160200162000f85929190620012bd565b604051602081830303815290604052905060008360405160200162000fab919062001302565b6040516020818303038152906040529050818360405160200162000fd19291906200128a565b60408051601f198184030181529082905260048054631b1492e160e11b84529193506001600160a01b03808a169363362925c2936200101c938d938c938a938a939216910162001334565b600060405180830381600087803b1580156200103757600080fd5b505af11580156200104c573d6000803e3d6000fd5b5050505050505050505050565b610bc780620016d383390190565b604080516060810182526000808252602082018190529181019190915290565b600082601f83011262001098578081fd5b813567ffffffffffffffff80821115620010b657620010b6620016a3565b604051601f8301601f19908116603f01168101908282118183101715620010e157620010e1620016a3565b81604052838152866020858801011115620010fa578485fd5b8360208701602083013792830160200193909352509392505050565b600060c0828403121562001128578081fd5b50919050565b60006020828403121562001140578081fd5b81356200114d81620016b9565b9392505050565b600080600080600061014086880312156200116d578081fd5b853567ffffffffffffffff8082111562001185578283fd5b6200119389838a0162001087565b96506020880135915080821115620011a9578283fd5b50620011b88882890162001087565b9450506040860135620011cb81620016b9565b92506060860135620011dd81620016b9565b9150620011ee876080880162001116565b90509295509295909350565b60008060e083850312156200120d578182fd5b62001219848462001116565b915060c08301356200122b81620016b9565b809150509250929050565b60006020828403121562001248578081fd5b5035919050565b6001600160a01b03169052565b600081518084526200127681602086016020860162001670565b601f01601f19169290920160200192915050565b600083516200129e81846020880162001670565b835190830190620012b481836020880162001670565b01949350505050565b60008351620012d181846020880162001670565b652d504149522d60d01b9083019081528351620012f681600684016020880162001670565b01600601949350505050565b600082516200131681846020870162001670565b9190910192915050565b6001600160a01b0391909116815260200190565b60006001600160a01b038088168352808716602084015260a060408401526200136160a08401876200125c565b83810360608501526200137581876200125c565b9250508084166080840152509695505050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b60006101a0808352620013c58184018c6200125c565b90508281036020840152620013db818b6200125c565b9150506001600160a01b038089166040840152808816606084015286516080840152602087015160a0840152604087015160c08401528060608801511660e084015260808701516101008401528060a08801511661012084015250620014466101408301866200124f565b620014566101608301856200124f565b620014666101808301846200124f565b9998505050505050505050565b6000606082526200148860608301866200125c565b82810360208401526200149c81866200125c565b915050826040830152949350505050565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526005908201526424a72b2fa160d91b604082015260600190565b60208082526017908201527f455243313136373a2063726561746532206661696c6564000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600590820152641a5b9d97dd60da1b604082015260600190565b6020808252600c908201526b125497d393d517d1561254d560a21b604082015260600190565b602080825260059082015264494e565f4360d81b604082015260600190565b602080825260059082015264494e565f4760d81b604082015260600190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b602080825260059082015264494e565f4960d81b604082015260600190565b9687526020870195909552604086019390935260608501919091526001600160a01b0316608084015260a083015260c082015260e00190565b60005b838110156200168d57818101518382015260200162001673565b838111156200169d576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114620016cf57600080fd5b5056fe60c06040523480156200001157600080fd5b5060405162000bc738038062000bc7833981016040819052620000349162000216565b60008711620000605760405162461bcd60e51b81526004016200005790620003ab565b60405180910390fd5b60008611620000835760405162461bcd60e51b81526004016200005790620002aa565b60008511620000a65760405162461bcd60e51b815260040162000057906200033f565b60008411620000c95760405162461bcd60e51b8152600401620000579062000284565b6001600160a01b038316620000f25760405162461bcd60e51b8152600401620000579062000318565b60008211620001155760405162461bcd60e51b8152600401620000579062000374565b60008111620001385760405162461bcd60e51b81526004016200005790620002e1565b600080546001600160a01b0319166001600160a01b03851617905560a082905260808190526200016c878787878562000179565b505050505050506200043e565b620001858186620003f1565b60025562000194828262000412565b620001a885670de0b6b3a764000062000412565b620001b49190620003f1565b600155620001c38184620003f1565b600381905560048390556002546001546040517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d93620002079392918790620003d6565b60405180910390a15050505050565b600080600080600080600060e0888a03121562000231578283fd5b8751602089015160408a015160608b015160808c0151939a50919850965094506001600160a01b038116811462000266578384fd5b8093505060a0880151915060c0880151905092959891949750929550565b6020808252600c908201526b696e76616c6964206b696e6b60a01b604082015260600190565b6020808252601b908201527f696e76616c6964206d756c7469706c6965722070657220796561720000000000604082015260600190565b60208082526017908201527f696e76616c696420626c6f636b73207065722079656172000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252818101527f696e76616c6964206a756d70206d756c7469706c696572207065722079656172604082015260600190565b60208082526017908201527f696e76616c696420626f72726f772072617465206d6178000000000000000000604082015260600190565b602080825260119082015270696e76616c69642062617365207261746560781b604082015260600190565b93845260208401929092526040830152606082015260800190565b6000826200040d57634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156200043957634e487b7160e01b81526011600452602481fd5b500290565b60805160a0516107556200047260003960008181610156015261017e01526000818161026b01526102ec01526107556000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a385fb9611610066578063a385fb9614610111578063b816881614610119578063b9f9850a1461012c578063f14039de14610134578063fd2da3391461013c5761009e565b806315f24053146100a35780632037f3e7146100cc5780636e71e2d8146100e15780638726bb89146100f45780638da5cb5b146100fc575b600080fd5b6100b66100b13660046104f8565b610144565b6040516100c39190610677565b60405180910390f35b6100df6100da366004610523565b6101af565b005b6100b66100ef3660046104f8565b610295565b6100b66102d5565b6101046102db565b6040516100c39190610554565b6100b66102ea565b6100b6610127366004610523565b61030e565b6100b661038a565b6100b6610390565b6100b6610396565b60008061015285858561039c565b90507f00000000000000000000000000000000000000000000000000000000000000008111156101a5577f00000000000000000000000000000000000000000000000000000000000000009150506101a8565b90505b9392505050565b6000546001600160a01b031633146101e25760405162461bcd60e51b81526004016101d990610631565b60405180910390fd5b600084116102025760405162461bcd60e51b81526004016101d9906105fa565b600083116102225760405162461bcd60e51b81526004016101d99061058e565b600082116102425760405162461bcd60e51b81526004016101d9906105c5565b600081116102625760405162461bcd60e51b81526004016101d990610568565b61028f848484847f0000000000000000000000000000000000000000000000000000000000000000610467565b50505050565b6000826102a4575060006101a8565b816102af848661069b565b6102b991906106f2565b6102cb84670de0b6b3a76400006106d3565b6101a591906106b3565b60015481565b6000546001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008061032383670de0b6b3a76400006106f2565b9050600061033287878761039c565b90506000670de0b6b3a764000061034984846106d3565b61035391906106b3565b9050670de0b6b3a76400008161036a8a8a8a610295565b61037491906106d3565b61037e91906106b3565b98975050505050505050565b60035481565b60025481565b60045481565b6000806103aa858585610295565b905060045481116103eb57600254670de0b6b3a7640000600154836103cf91906106d3565b6103d991906106b3565b6103e3919061069b565b9150506101a8565b6000600254670de0b6b3a764000060015460045461040991906106d3565b61041391906106b3565b61041d919061069b565b905060006004548361042f91906106f2565b905081670de0b6b3a76400006003548361044991906106d3565b61045391906106b3565b61045d919061069b565b93505050506101a8565b61047181866106b3565b60025561047e82826106d3565b61049085670de0b6b3a76400006106d3565b61049a91906106b3565b6001556104a781846106b3565b600381905560048390556002546001546040517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d936104e99392918790610680565b60405180910390a15050505050565b60008060006060848603121561050c578283fd5b505081359360208301359350604090920135919050565b60008060008060808587031215610538578081fd5b5050823594602084013594506040840135936060013592509050565b6001600160a01b0391909116815260200190565b6020808252600c908201526b696e76616c6964206b696e6b60a01b604082015260600190565b6020808252601b908201527f696e76616c6964206d756c7469706c6965722070657220796561720000000000604082015260600190565b6020808252818101527f696e76616c6964206a756d70206d756c7469706c696572207065722079656172604082015260600190565b60208082526011908201527f696e76616c696420626173652072617465000000000000000000000000000000604082015260600190565b60208082526026908201527f6f6e6c7920746865206f776e6572206d61792063616c6c20746869732066756e60408201526531ba34b7b71760d11b606082015260800190565b90815260200190565b93845260208401929092526040830152606082015260800190565b600082198211156106ae576106ae610709565b500190565b6000826106ce57634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156106ed576106ed610709565b500290565b60008282101561070457610704610709565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220c95f83be8fa657394176f6a2bba046d2991c3c282628b1836630ee29777e30b464736f6c63430008010033a264697066735822122021eef9f14e244b4fc14217f893133dfdba135c86ee13c94bcf6e2a00e516b6dc64736f6c63430008010033";
