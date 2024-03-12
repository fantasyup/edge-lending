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
    _admin: string,
    _pairLogic: string,
    _collateralWrapperLogic: string,
    _debtTokenLogic: string,
    _borrowAssetWrapperLogic: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LendingPairFactory> {
    return super.deploy(
      _admin,
      _pairLogic,
      _collateralWrapperLogic,
      _debtTokenLogic,
      _borrowAssetWrapperLogic,
      overrides || {}
    ) as Promise<LendingPairFactory>;
  }
  getDeployTransaction(
    _admin: string,
    _pairLogic: string,
    _collateralWrapperLogic: string,
    _debtTokenLogic: string,
    _borrowAssetWrapperLogic: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _admin,
      _pairLogic,
      _collateralWrapperLogic,
      _debtTokenLogic,
      _borrowAssetWrapperLogic,
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
        name: "_admin",
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
    inputs: [],
    name: "admin",
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
        internalType: "address",
        name: "_team",
        type: "address",
      },
      {
        internalType: "contract IPriceOracleAggregator",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "contract IBSVault",
        name: "_vault",
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
        ],
        internalType: "struct LendingPairFactory.BorrowLocalVars",
        name: "_borrowVars",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "interestRateModel",
        type: "address",
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
        name: "implementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetDetails",
        type: "address",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "initWrapperTokensWithProxy",
    outputs: [
      {
        internalType: "address",
        name: "wrapper",
        type: "address",
      },
    ],
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
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001b9838038062001b988339810160408190526200003491620000c6565b6000805460609690961b6001600160601b0319166080526001600160a81b03199095166101006001600160a01b039586160217909455600180546001600160a01b0319908116938516939093179055600280548316918416919091179055600380549091169290911691909117905562000135565b80516001600160a01b0381168114620000c157600080fd5b919050565b600080600080600060a08688031215620000de578081fd5b620000e986620000a9565b9450620000f960208701620000a9565b93506200010960408701620000a9565b92506200011960608701620000a9565b91506200012960808701620000a9565b90509295509295909350565b60805160601c611a1a6200017e6000396000818161026d01528181610344015281816103d10152818161048001528181610518015281816105c201526108e20152611a1a6000f3fe60806040523480156200001157600080fd5b5060043610620001185760003560e01c80638456cb5911620000a5578063a01e047c116200006f578063a01e047c14620001ff578063eaa386f21462000216578063f851a440146200022d578063ff48f02214620002375762000118565b80638456cb5914620001b05780638d55d0f814620001ba5780638f8547f014620001d15780639787246714620001e85762000118565b80633f9daecc11620000e75780633f9daecc14620001795780635c975abb1462000183578063775c7513146200019c5780637fe4964114620001a65762000118565b80631d3b3574146200011d5780631e171b0c146200013f5780631e3dd18b14620001585780633f4ba83a146200016f575b600080fd5b620001276200024e565b60405162000136919062000faf565b60405180910390f35b620001566200015036600462000c97565b62000262565b005b620001276200016936600462000ed0565b6200030e565b6200015662000339565b6200012762000390565b6200018d6200039f565b60405162000136919062001083565b62000127620003a8565b62000127620003b7565b62000156620003c6565b62000127620001cb36600462000e8f565b6200041b565b62000156620001e236600462000c97565b62000475565b62000156620001f936600462000c97565b6200050d565b620001566200021036600462000c97565b620005b7565b620001276200022736600462000d7b565b6200064f565b62000127620008e0565b620001276200024836600462000cbd565b62000904565b60005461010090046001600160a01b031681565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620002b65760405162461bcd60e51b8152600401620002ad9062001180565b60405180910390fd5b600380546001600160a01b0319166001600160a01b0383161790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f906200030390839062000faf565b60405180910390a150565b600481815481106200031f57600080fd5b6000918252602090912001546001600160a01b0316905081565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620003845760405162461bcd60e51b8152600401620002ad9062001180565b6200038e62000929565b565b6001546001600160a01b031681565b60005460ff1690565b6003546001600160a01b031681565b6002546001600160a01b031681565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620004115760405162461bcd60e51b8152600401620002ad9062001180565b6200038e620009a0565b6000826000013583602001358460400135856060013585604051620004409062000c89565b62000450959493929190620011a4565b604051809103906000f0801580156200046d573d6000803e3d6000fd5b509392505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620004c05760405162461bcd60e51b8152600401620002ad9062001180565b600180546001600160a01b0319166001600160a01b0383161790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f906200030390839062000faf565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620005585760405162461bcd60e51b8152600401620002ad9062001180565b6000805474ffffffffffffffffffffffffffffffffffffffff0019166101006001600160a01b038416021790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f906200030390839062000faf565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620006025760405162461bcd60e51b8152600401620002ad9062001180565b600280546001600160a01b0319166001600160a01b0383161790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f906200030390839062000faf565b60006200065b6200039f565b156200067b5760405162461bcd60e51b8152600401620002ad9062001112565b600054620006979061010090046001600160a01b031662000a02565b600354909150600090620006e0906001600160a01b031683620006be602088018862000c97565b604051806040016040528060038152602001622127a960e91b81525062000904565b60015460408051808201909152600381526210d3d360ea1b60208201529192506000916200071c916001600160a01b0316908590899062000904565b60025490915060009062000765906001600160a01b0316856200074360208a018a62000c97565b604051806040016040528060038152602001622222a160e91b81525062000904565b905060006040518060e00160405280876001600160a01b03168152602001886020013581526020018860400135815260200188606001358152602001856001600160a01b0316815260200188608001358152602001836001600160a01b03168152509050846001600160a01b0316631cea3a248c8c8c8b6000016020810190620007f0919062000c97565b868e8a6040518863ffffffff1660e01b815260040162000817979695949392919062000fc3565b600060405180830381600087803b1580156200083257600080fd5b505af115801562000847573d6000803e3d6000fd5b5050600480546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b03891617905550506040517f569465810a88162d0f22919f03f6666d504b840ebec118a2df6f23ab67638de090620008ca90879042906200106a565b60405180910390a1505050509695505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000620009118562000a02565b9050620009218482858562000a90565b949350505050565b620009336200039f565b620009525760405162461bcd60e51b8152600401620002ad90620010db565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6200098762000c85565b60405162000996919062000faf565b60405180910390a1565b620009aa6200039f565b15620009ca5760405162461bcd60e51b8152600401620002ad9062001112565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586200098762000c85565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f09150506001600160a01b03811662000a8b5760405162461bcd60e51b8152600401620002ad9062001149565b919050565b600060405160200162000aa39062000fa0565b60405160208183030381529060405290508082846001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801562000af057600080fd5b505afa15801562000b05573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000b2f919081019062000e13565b60405160200162000b439392919062000f57565b6040516020818303038152906040529050600060405160200162000b679062000fa0565b604051602081830303815290604052905080846001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801562000bb357600080fd5b505afa15801562000bc8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000bf2919081019062000e13565b60405160200162000c0592919062000f24565b60408051601f198184030181529082905263100b506960e11b825291506001600160a01b03861690632016a0d29062000c499089908890879087906004016200108e565b600060405180830381600087803b15801562000c6457600080fd5b505af115801562000c79573d6000803e3d6000fd5b50505050505050505050565b3390565b610753806200129283390190565b60006020828403121562000ca9578081fd5b813562000cb68162001278565b9392505050565b6000806000806080858703121562000cd3578283fd5b843562000ce08162001278565b9350602085013562000cf28162001278565b9250604085013562000d048162001278565b9150606085013567ffffffffffffffff81111562000d20578182fd5b8501601f8101871362000d31578182fd5b803562000d4862000d428262001204565b620011d0565b81815288602083850101111562000d5d578384fd5b81602084016020830137908101602001929092525092959194509250565b60008060008060008086880361014081121562000d96578283fd5b873562000da38162001278565b9650602088013562000db58162001278565b9550604088013562000dc78162001278565b9450606088013562000dd98162001278565b935060a0607f198201121562000ded578283fd5b5060808701915061012087013562000e058162001278565b809150509295509295509295565b60006020828403121562000e25578081fd5b815167ffffffffffffffff81111562000e3c578182fd5b8201601f8101841362000e4d578182fd5b805162000e5e62000d428262001204565b81815285602083850101111562000e73578384fd5b62000e868260208301602086016200122f565b95945050505050565b60008082840360a081121562000ea3578283fd5b608081121562000eb1578283fd5b50829150608083013562000ec58162001278565b809150509250929050565b60006020828403121562000ee2578081fd5b5035919050565b6001600160a01b03169052565b6000815180845262000f108160208601602086016200122f565b601f01601f19169290920160200192915050565b6000835162000f388184602088016200122f565b83519083019062000f4e8183602088016200122f565b01949350505050565b6000845162000f6b8184602089016200122f565b84519083019062000f818183602089016200122f565b845191019062000f968183602088016200122f565b0195945050505050565b6242532d60e81b815260030190565b6001600160a01b0391909116815260200190565b60006101a0820190506001600160a01b03808a168352808916602084015280881660408401528087166060840152808651166080840152602086015160a0840152604086015160c0840152606086015160e08401528060808701511661010084015260a08601516101208401528060c087015116610140840152506200104e61016083018562000ee9565b6200105e61018083018462000ee9565b98975050505050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b60006001600160a01b03808716835280861660208401525060806040830152620010bc608083018562000ef6565b8281036060840152620010d0818562000ef6565b979650505050505050565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b60208082526016908201527f455243313136373a20637265617465206661696c656400000000000000000000604082015260600190565b6020808252600a908201526927a7262cafa0a226a4a760b11b604082015260600190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b604051601f8201601f1916810167ffffffffffffffff81118282101715620011fc57620011fc62001262565b604052919050565b600067ffffffffffffffff82111562001221576200122162001262565b50601f01601f191660200190565b60005b838110156200124c57818101518382015260200162001232565b838111156200125c576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200128e57600080fd5b5056fe608060405234801561001057600080fd5b5060405161075338038061075383398101604081905261002f91610103565b600080546001600160a01b0319166001600160a01b038316179055848484848461005b8585858561006a565b505050505050505050506101c2565b6100776220148085610177565b6002556100878162201480610197565b61009984670de0b6b3a7640000610197565b6100a39190610177565b6001556100b36220148083610177565b600381905560048290556002546001546040517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d936100f5939291869061015c565b60405180910390a150505050565b600080600080600060a0868803121561011a578081fd5b855160208701516040880151606089015160808a0151939850919650945092506001600160a01b038116811461014e578182fd5b809150509295509295909350565b93845260208401929092526040830152606082015260800190565b60008261019257634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156101bd57634e487b7160e01b81526011600452602481fd5b500290565b610582806101d16000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a385fb9611610066578063a385fb9614610111578063b816881614610119578063b9f9850a1461012c578063f14039de14610134578063fd2da3391461013c5761009e565b806315f24053146100a35780632037f3e7146100cc5780636e71e2d8146100e15780638726bb89146100f45780638da5cb5b146100fc575b600080fd5b6100b66100b13660046103ee565b610144565b6040516100c391906104a4565b60405180910390f35b6100df6100da366004610419565b61015b565b005b6100b66100ef3660046103ee565b6101a0565b6100b66101e0565b6101046101e6565b6040516100c3919061044a565b6100b66101f5565b6100b6610127366004610419565b6101fc565b6100b6610278565b6100b661027e565b6100b6610284565b600061015184848461028a565b90505b9392505050565b6000546001600160a01b0316331461018e5760405162461bcd60e51b81526004016101859061045e565b60405180910390fd5b61019a84848484610355565b50505050565b6000826101af57506000610154565b816101ba84866104c8565b6101c4919061051f565b6101d684670de0b6b3a7640000610500565b61015191906104e0565b60015481565b6000546001600160a01b031681565b6220148081565b60008061021183670de0b6b3a764000061051f565b9050600061022087878761028a565b90506000670de0b6b3a76400006102378484610500565b61024191906104e0565b9050670de0b6b3a7640000816102588a8a8a6101a0565b6102629190610500565b61026c91906104e0565b98975050505050505050565b60035481565b60025481565b60045481565b6000806102988585856101a0565b905060045481116102d957600254670de0b6b3a7640000600154836102bd9190610500565b6102c791906104e0565b6102d191906104c8565b915050610154565b6000600254670de0b6b3a76400006001546004546102f79190610500565b61030191906104e0565b61030b91906104c8565b905060006004548361031d919061051f565b905081670de0b6b3a7640000600354836103379190610500565b61034191906104e0565b61034b91906104c8565b9350505050610154565b61036262201480856104e0565b6002556103728162201480610500565b61038484670de0b6b3a7640000610500565b61038e91906104e0565b60015561039e62201480836104e0565b600381905560048290556002546001546040517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d936103e093929186906104ad565b60405180910390a150505050565b600080600060608486031215610402578283fd5b505081359360208301359350604090920135919050565b6000806000806080858703121561042e578081fd5b5050823594602084013594506040840135936060013592509050565b6001600160a01b0391909116815260200190565b60208082526026908201527f6f6e6c7920746865206f776e6572206d61792063616c6c20746869732066756e60408201526531ba34b7b71760d11b606082015260800190565b90815260200190565b93845260208401929092526040830152606082015260800190565b600082198211156104db576104db610536565b500190565b6000826104fb57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561051a5761051a610536565b500290565b60008282101561053157610531610536565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d3e31022f19029f6b10e3b0bc8bf806e45da3b50549fb265d3cfaaa94ac805c664736f6c63430008010033a2646970667358221220b7858768005d2b191b46be27883dc073445120ed98a508ed6ce31e3ca282a46664736f6c63430008010033";
