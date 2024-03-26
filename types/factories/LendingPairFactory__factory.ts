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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LendingPairFactory> {
    return super.deploy(
      _owner,
      _pairLogic,
      _collateralWrapperLogic,
      _debtTokenLogic,
      _borrowAssetWrapperLogic,
      overrides || {}
    ) as Promise<LendingPairFactory>;
  }
  getDeployTransaction(
    _owner: string,
    _pairLogic: string,
    _collateralWrapperLogic: string,
    _debtTokenLogic: string,
    _borrowAssetWrapperLogic: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
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
  "0x60a06040523480156200001157600080fd5b5060405162002343380380620023438339810160408190526200003491620001a1565b6000805460ff191690556001600160a01b038516620000705760405162461bcd60e51b815260040162000067906200023c565b60405180910390fd5b6001600160a01b038416620000995760405162461bcd60e51b8152600401620000679062000210565b6001600160a01b038316620000c25760405162461bcd60e51b815260040162000067906200028f565b6001600160a01b038216620000eb5760405162461bcd60e51b8152600401620000679062000263565b6001600160a01b038116620001145760405162461bcd60e51b81526004016200006790620002c4565b60609490941b6001600160601b03191660805260008054610100600160a81b0319166101006001600160a01b0395861602179055600180546001600160a01b03199081169385169390931790556002805483169184169190911790556003805490911691909216179055620002fb565b80516001600160a01b03811681146200019c57600080fd5b919050565b600080600080600060a08688031215620001b9578081fd5b620001c48662000184565b9450620001d46020870162000184565b9350620001e46040870162000184565b9250620001f46060870162000184565b9150620002046080870162000184565b90509295509295909350565b602080825260129082015271696e76616c69642070616972206c6f67696360701b604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b602080825260129082015271696e76616c69642064656274206c6f67696360701b604082015260600190565b6020808252818101527f696e76616c696420636f6c6c61746572616c2077726170706572206c6f676963604082015260600190565b6020808252601a908201527f696e76616c696420626f72726f77206173736574206c6f676963000000000000604082015260600190565b60805160601c611fff620003446000396000818161051b015281816106120152818161069f015281816106eb01528181610718015281816107d901526108ac0152611fff6000f3fe60806040523480156200001157600080fd5b50600436106200010c5760003560e01c8063775c751311620000a55780638f8547f0116200006f5780638f8547f014620001cf5780639787246714620001e6578063a01e047c14620001fd578063dc1bde231462000214576200010c565b8063775c751314620001a75780637fe4964114620001b15780638456cb5914620001bb5780638da5cb5b14620001c5576200010c565b80631e3dd18b11620000e75780631e3dd18b14620001635780633f4ba83a146200017a5780633f9daecc14620001845780635c975abb146200018e576200010c565b80630b147f3d14620001115780631d3b357414620001405780631e171b0c146200014a575b600080fd5b620001286200012236600462000ea1565b6200022b565b60405162000137919062001070565b60405180910390f35b62000128620004fc565b620001616200015b36600462000e08565b62000510565b005b620001286200017436600462000f91565b620005dc565b6200016162000607565b620001286200065e565b620001986200066d565b604051620001379190620010ea565b6200012862000676565b6200012862000685565b6200016162000694565b62000128620006e9565b62000161620001e036600462000e08565b6200070d565b62000161620001f736600462000e08565b620007ce565b620001616200020e36600462000e08565b620008a1565b620001286200022536600462000f50565b62000962565b6000620002376200066d565b15620002605760405162461bcd60e51b8152600401620002579062001250565b60405180910390fd5b6200026a62000d83565b60045460405160009162000285918a918a91602001620011a8565b60408051808303601f190181529190528051602090910120600054909150620002bd9061010090046001600160a01b031682620009f1565b60035490935062000304906001600160a01b031684620002e1602088018862000e08565b604051806040016040528060038152602001622127a960e91b8152508562000a81565b6001600160a01b03908116835260015460408051808201909152600381526210d3d360ea1b602082015262000343929190911690859088908562000a81565b6001600160a01b03908116602080850191909152600254620003949216908590620003719088018862000e08565b604051806040016040528060038152602001622222a160e91b8152508562000a81565b6001600160a01b039081166040808501918252805160c08101825260208089018035835289840135918301919091526060808a0135938301939093528651851692820192909252608080890135908201529151831660a08301529091851690638a49b04c908b908b9062000409908a62000e08565b8a8689602001518e6040518863ffffffff1660e01b8152600401620004359796959493929190620010f5565b600060405180830381600087803b1580156200045057600080fd5b505af115801562000465573d6000803e3d6000fd5b5050600480546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b03881617905550506040517f569465810a88162d0f22919f03f6666d504b840ebec118a2df6f23ab67638de090620004e89086904290620010d1565b60405180910390a150505095945050505050565b60005461010090046001600160a01b031681565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146200055b5760405162461bcd60e51b81526004016200025790620012ad565b6001600160a01b038116620005845760405162461bcd60e51b81526004016200025790620012d1565b600380546001600160a01b0319166001600160a01b0383161790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f90620005d190839062001070565b60405180910390a150565b60048181548110620005ed57600080fd5b6000918252602090912001546001600160a01b0316905081565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620006525760405162461bcd60e51b81526004016200025790620012ad565b6200065c62000ab1565b565b6001546001600160a01b031681565b60005460ff1690565b6003546001600160a01b031681565b6002546001600160a01b031681565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620006df5760405162461bcd60e51b81526004016200025790620012ad565b6200065c62000b28565b7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620007585760405162461bcd60e51b81526004016200025790620012ad565b6001600160a01b038116620007815760405162461bcd60e51b81526004016200025790620012d1565b600180546001600160a01b0319166001600160a01b0383161790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f90620005d190839062001070565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620008195760405162461bcd60e51b81526004016200025790620012ad565b6001600160a01b038116620008425760405162461bcd60e51b81526004016200025790620012d1565b6000805474ffffffffffffffffffffffffffffffffffffffff0019166101006001600160a01b038416021790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f90620005d190839062001070565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620008ec5760405162461bcd60e51b81526004016200025790620012ad565b6001600160a01b038116620009155760405162461bcd60e51b81526004016200025790620012d1565b600280546001600160a01b0319166001600160a01b0383161790556040517f8df748e91aa1ee28349ed8a7ff354a3717a778db8d9fbefd53bb60f5ac649e4f90620005d190839062001070565b60006001600160a01b0382166200098d5760405162461bcd60e51b8152600401620002579062001287565b82600001358360200135846040013585606001358587608001358860a00135604051620009ba9062000da3565b620009cc979695949392919062001308565b604051809103906000f080158015620009e9573d6000803e3d6000fd5b509392505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528360601b60148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152826037826000f59150506001600160a01b03811662000a7b5760405162461bcd60e51b8152600401620002579062001219565b92915050565b600062000a986001600160a01b03871683620009f1565b905062000aa88582868662000b8a565b95945050505050565b62000abb6200066d565b62000ada5760405162461bcd60e51b81526004016200025790620011e2565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa62000b0f62000d7f565b60405162000b1e919062001070565b60405180910390a1565b62000b326200066d565b1562000b525760405162461bcd60e51b8152600401620002579062001250565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25862000b0f62000d7f565b600060405160200162000b9d9062001061565b60405160208183030381529060405290508082846001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801562000bea57600080fd5b505afa15801562000bff573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000c29919081019062000e2e565b60405160200162000c3d9392919062001018565b6040516020818303038152906040529050600060405160200162000c619062001061565b604051602081830303815290604052905080846001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801562000cad57600080fd5b505afa15801562000cc2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000cec919081019062000e2e565b60405160200162000cff92919062000fe5565b60408051601f198184030181529082905263100b506960e11b825291506001600160a01b03861690632016a0d29062000d4390899088908790879060040162001084565b600060405180830381600087803b15801562000d5e57600080fd5b505af115801562000d73573d6000803e3d6000fd5b50505050505050505050565b3390565b604080516060810182526000808252602082018190529181019190915290565b610bc7806200140383390190565b600082601f83011262000dc2578081fd5b813562000dd962000dd38262001375565b62001341565b81815284602083860101111562000dee578283fd5b816020850160208301379081016020019190915292915050565b60006020828403121562000e1a578081fd5b813562000e2781620013e9565b9392505050565b60006020828403121562000e40578081fd5b815167ffffffffffffffff81111562000e57578182fd5b8201601f8101841362000e68578182fd5b805162000e7962000dd38262001375565b81815285602083850101111562000e8e578384fd5b62000aa8826020830160208601620013a0565b600080600080600085870361012081121562000ebb578182fd5b863567ffffffffffffffff8082111562000ed3578384fd5b62000ee18a838b0162000db1565b9750602089013591508082111562000ef7578384fd5b5062000f0689828a0162000db1565b955050604087013562000f1981620013e9565b9350606087013562000f2b81620013e9565b925060a0607f198201121562000f3f578182fd5b506080860190509295509295909350565b60008082840360e081121562000f64578283fd5b60c081121562000f72578283fd5b5082915060c083013562000f8681620013e9565b809150509250929050565b60006020828403121562000fa3578081fd5b5035919050565b6001600160a01b03169052565b6000815180845262000fd1816020860160208601620013a0565b601f01601f19169290920160200192915050565b6000835162000ff9818460208801620013a0565b8351908301906200100f818360208801620013a0565b01949350505050565b600084516200102c818460208901620013a0565b84519083019062001042818360208901620013a0565b845191019062001057818360208801620013a0565b0195945050505050565b6242532d60e81b815260030190565b6001600160a01b0391909116815260200190565b60006001600160a01b03808716835280861660208401525060806040830152620010b2608083018562000fb7565b8281036060840152620010c6818562000fb7565b979650505050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b60006101808083526200110b8184018b62000fb7565b9050828103602084015262001121818a62000fb7565b9150506001600160a01b038088166040840152808716606084015285516080840152602086015160a0840152604086015160c08401528060608701511660e084015260808601516101008401528060a087015116610120840152506200118c61014083018562000faa565b6200119c61016083018462000faa565b98975050505050505050565b600060608252620011bd606083018662000fb7565b8281036020840152620011d1818662000fb7565b915050826040830152949350505050565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526017908201527f455243313136373a2063726561746532206661696c6564000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600c908201526b696e76616c6964207465616d60a01b604082015260600190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b60208082526010908201527f494e56414c49445f434f4e545241435400000000000000000000000000000000604082015260600190565b9687526020870195909552604086019390935260608501919091526001600160a01b0316608084015260a083015260c082015260e00190565b604051601f8201601f1916810167ffffffffffffffff811182821017156200136d576200136d620013d3565b604052919050565b600067ffffffffffffffff821115620013925762001392620013d3565b50601f01601f191660200190565b60005b83811015620013bd578181015183820152602001620013a3565b83811115620013cd576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114620013ff57600080fd5b5056fe60c06040523480156200001157600080fd5b5060405162000bc738038062000bc7833981016040819052620000349162000216565b60008711620000605760405162461bcd60e51b81526004016200005790620003ab565b60405180910390fd5b60008611620000835760405162461bcd60e51b81526004016200005790620002aa565b60008511620000a65760405162461bcd60e51b815260040162000057906200033f565b60008411620000c95760405162461bcd60e51b8152600401620000579062000284565b6001600160a01b038316620000f25760405162461bcd60e51b8152600401620000579062000318565b60008211620001155760405162461bcd60e51b8152600401620000579062000374565b60008111620001385760405162461bcd60e51b81526004016200005790620002e1565b600080546001600160a01b0319166001600160a01b03851617905560a082905260808190526200016c878787878562000179565b505050505050506200043e565b620001858186620003f1565b60025562000194828262000412565b620001a885670de0b6b3a764000062000412565b620001b49190620003f1565b600155620001c38184620003f1565b600381905560048390556002546001546040517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d93620002079392918790620003d6565b60405180910390a15050505050565b600080600080600080600060e0888a03121562000231578283fd5b8751602089015160408a015160608b015160808c0151939a50919850965094506001600160a01b038116811462000266578384fd5b8093505060a0880151915060c0880151905092959891949750929550565b6020808252600c908201526b696e76616c6964206b696e6b60a01b604082015260600190565b6020808252601b908201527f696e76616c6964206d756c7469706c6965722070657220796561720000000000604082015260600190565b60208082526017908201527f696e76616c696420626c6f636b73207065722079656172000000000000000000604082015260600190565b6020808252600d908201526c34b73b30b634b21037bbb732b960991b604082015260600190565b6020808252818101527f696e76616c6964206a756d70206d756c7469706c696572207065722079656172604082015260600190565b60208082526017908201527f696e76616c696420626f72726f772072617465206d6178000000000000000000604082015260600190565b602080825260119082015270696e76616c69642062617365207261746560781b604082015260600190565b93845260208401929092526040830152606082015260800190565b6000826200040d57634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156200043957634e487b7160e01b81526011600452602481fd5b500290565b60805160a0516107556200047260003960008181610156015261017e01526000818161026b01526102ec01526107556000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a385fb9611610066578063a385fb9614610111578063b816881614610119578063b9f9850a1461012c578063f14039de14610134578063fd2da3391461013c5761009e565b806315f24053146100a35780632037f3e7146100cc5780636e71e2d8146100e15780638726bb89146100f45780638da5cb5b146100fc575b600080fd5b6100b66100b13660046104f8565b610144565b6040516100c39190610677565b60405180910390f35b6100df6100da366004610523565b6101af565b005b6100b66100ef3660046104f8565b610295565b6100b66102d5565b6101046102db565b6040516100c39190610554565b6100b66102ea565b6100b6610127366004610523565b61030e565b6100b661038a565b6100b6610390565b6100b6610396565b60008061015285858561039c565b90507f00000000000000000000000000000000000000000000000000000000000000008111156101a5577f00000000000000000000000000000000000000000000000000000000000000009150506101a8565b90505b9392505050565b6000546001600160a01b031633146101e25760405162461bcd60e51b81526004016101d990610631565b60405180910390fd5b600084116102025760405162461bcd60e51b81526004016101d9906105fa565b600083116102225760405162461bcd60e51b81526004016101d99061058e565b600082116102425760405162461bcd60e51b81526004016101d9906105c5565b600081116102625760405162461bcd60e51b81526004016101d990610568565b61028f848484847f0000000000000000000000000000000000000000000000000000000000000000610467565b50505050565b6000826102a4575060006101a8565b816102af848661069b565b6102b991906106f2565b6102cb84670de0b6b3a76400006106d3565b6101a591906106b3565b60015481565b6000546001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008061032383670de0b6b3a76400006106f2565b9050600061033287878761039c565b90506000670de0b6b3a764000061034984846106d3565b61035391906106b3565b9050670de0b6b3a76400008161036a8a8a8a610295565b61037491906106d3565b61037e91906106b3565b98975050505050505050565b60035481565b60025481565b60045481565b6000806103aa858585610295565b905060045481116103eb57600254670de0b6b3a7640000600154836103cf91906106d3565b6103d991906106b3565b6103e3919061069b565b9150506101a8565b6000600254670de0b6b3a764000060015460045461040991906106d3565b61041391906106b3565b61041d919061069b565b905060006004548361042f91906106f2565b905081670de0b6b3a76400006003548361044991906106d3565b61045391906106b3565b61045d919061069b565b93505050506101a8565b61047181866106b3565b60025561047e82826106d3565b61049085670de0b6b3a76400006106d3565b61049a91906106b3565b6001556104a781846106b3565b600381905560048390556002546001546040517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d936104e99392918790610680565b60405180910390a15050505050565b60008060006060848603121561050c578283fd5b505081359360208301359350604090920135919050565b60008060008060808587031215610538578081fd5b5050823594602084013594506040840135936060013592509050565b6001600160a01b0391909116815260200190565b6020808252600c908201526b696e76616c6964206b696e6b60a01b604082015260600190565b6020808252601b908201527f696e76616c6964206d756c7469706c6965722070657220796561720000000000604082015260600190565b6020808252818101527f696e76616c6964206a756d70206d756c7469706c696572207065722079656172604082015260600190565b60208082526011908201527f696e76616c696420626173652072617465000000000000000000000000000000604082015260600190565b60208082526026908201527f6f6e6c7920746865206f776e6572206d61792063616c6c20746869732066756e60408201526531ba34b7b71760d11b606082015260800190565b90815260200190565b93845260208401929092526040830152606082015260800190565b600082198211156106ae576106ae610709565b500190565b6000826106ce57634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156106ed576106ed610709565b500290565b60008282101561070457610704610709565b500390565b634e487b7160e01b600052601160045260246000fdfea26469706673582212205c6300e6892794c5b73a142e037cd3bfe585c04391a737476a149683bb7f9a4764736f6c63430008010033a2646970667358221220ff3589865dbb9d3fec722da216c599c537e342190a85f14413f649fbb1ef240764736f6c63430008010033";
