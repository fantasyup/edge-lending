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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LendingPairFactory> {
    return super.deploy(_admin, overrides || {}) as Promise<LendingPairFactory>;
  }
  getDeployTransaction(
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_admin, overrides || {});
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
    inputs: [
      {
        internalType: "contract IBSLendingPair",
        name: "pair",
        type: "address",
      },
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
        internalType: "contract IBSWrapperToken",
        name: "_wrappedCollateralAsset",
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
            internalType: "contract IBSWrapperToken",
            name: "wrappedBorrowAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "liquidationFee",
            type: "uint256",
          },
          {
            internalType: "contract IDebtToken",
            name: "debtToken",
            type: "address",
          },
        ],
        internalType: "struct LendingPairFactory.BorrowLocalVars",
        name: "_borrowVars",
        type: "tuple",
      },
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
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "newPairAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516114b33803806114b383398101604081905261002f9161004e565b6000805460ff1916905560601b6001600160601b03191660805261007c565b60006020828403121561005f578081fd5b81516001600160a01b0381168114610075578182fd5b9392505050565b60805160601c61140b6100a8600039600081816101360152818161019f01526104bd015261140b6000f3fe60806040523480156200001157600080fd5b50600436106200007c5760003560e01c80638456cb5911620000575780638456cb5914620000d55780639c5d2e6414620000df578063f851a44014620000f6576200007c565b80631e3dd18b14620000815780633f4ba83a14620000b05780635c975abb14620000bc575b600080fd5b620000986200009236600462000962565b62000100565b604051620000a7919062000a41565b60405180910390f35b620000ba6200012b565b005b620000c66200018b565b604051620000a7919062000b15565b620000ba62000194565b62000098620000f0366004620007c0565b620001e9565b62000098620004bb565b600181815481106200011157600080fd5b6000918252602090912001546001600160a01b0316905081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146200017f5760405162461bcd60e51b8152600401620001769062000bd0565b60405180910390fd5b62000189620004df565b565b60005460ff1690565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620001df5760405162461bcd60e51b8152600401620001769062000bd0565b6200018962000556565b6000620001f56200018b565b15620002155760405162461bcd60e51b8152600401620001769062000b99565b600082600001358360200135846040013585606001358c6040516200023a90620007b2565b6200024a95949392919062000bf4565b604051809103906000f08015801562000267573d6000803e3d6000fd5b50905060006040518060e00160405280836001600160a01b03168152602001866020013581526020018660400135815260200186606001358152602001866080016020810190620002b9919062000887565b6001600160a01b0316815260a08701356020820152604001620002e360e0880160c0890162000887565b6001600160a01b0316905260808101519091506200033e908c906200030c602089018962000887565b6040805180820190915260038152622127a960e91b60208083019190915262000338908b018b62000887565b620005b8565b620003688b87896040518060400160405280600381526020016210d3d360ea1b8152508b620005b8565b6200039b8b8260c001518360800151604051806040016040528060038152602001622222a160e91b8152506000620005b8565b6001600160a01b038b16631cea3a248b8b8b620003bc60208b018b62000887565b868d8d6040518863ffffffff1660e01b8152600401620003e3979695949392919062000a55565b600060405180830381600087803b158015620003fe57600080fd5b505af115801562000413573d6000803e3d6000fd5b50506001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038f1617905550506040518b93507f569465810a88162d0f22919f03f6666d504b840ebec118a2df6f23ab67638de090620004a5908590429062000afc565b60405180910390a1505098975050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b620004e96200018b565b620005085760405162461bcd60e51b8152600401620001769062000b62565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6200053d620007ae565b6040516200054c919062000a41565b60405180910390a1565b620005606200018b565b15620005805760405162461bcd60e51b8152600401620001769062000b99565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586200053d620007ae565b6000604051602001620005cb9062000a32565b60405160208183030381529060405290508083856001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156200061857600080fd5b505afa1580156200062d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620006579190810190620008ad565b6040516020016200066b93929190620009e9565b604051602081830303815290604052905060006040516020016200068f9062000a32565b604051602081830303815290604052905080856001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015620006db57600080fd5b505afa158015620006f0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200071a9190810190620008ad565b6040516020016200072d929190620009b6565b60408051601f198184030181529082905263100b506960e11b825291506001600160a01b03871690632016a0d29062000771908a9087908790879060040162000b20565b600060405180830381600087803b1580156200078c57600080fd5b505af1158015620007a1573d6000803e3d6000fd5b5050505050505050505050565b3390565b6107538062000c8383390190565b600080600080600080600080888a03610220811215620007de578485fd5b8935620007eb8162000c69565b985060208a0135620007fd8162000c69565b975060408a01356200080f8162000c69565b965060608a0135620008218162000c69565b955060808a0135620008338162000c69565b945060a08a0135620008458162000c69565b935060e060bf198201121562000859578283fd5b60c08a019250608061019f198201121562000872578182fd5b506101a0890190509295985092959890939650565b60006020828403121562000899578081fd5b8135620008a68162000c69565b9392505050565b600060208284031215620008bf578081fd5b815167ffffffffffffffff80821115620008d7578283fd5b818401915084601f830112620008eb578283fd5b81518181111562000900576200090062000c53565b604051601f8201601f19908116603f011681019083821181831017156200092b576200092b62000c53565b8160405282815287602084870101111562000944578586fd5b6200095783602083016020880162000c20565b979650505050505050565b60006020828403121562000974578081fd5b5035919050565b6001600160a01b03169052565b60008151808452620009a281602086016020860162000c20565b601f01601f19169290920160200192915050565b60008351620009ca81846020880162000c20565b835190830190620009e081836020880162000c20565b01949350505050565b60008451620009fd81846020890162000c20565b84519083019062000a1381836020890162000c20565b845191019062000a2881836020880162000c20565b0195945050505050565b6242532d60e81b815260030190565b6001600160a01b0391909116815260200190565b60006101a0820190506001600160a01b03808a168352808916602084015280881660408401528087166060840152808651166080840152602086015160a0840152604086015160c0840152606086015160e08401528060808701511661010084015260a08601516101208401528060c0870151166101408401525062000ae06101608301856200097b565b62000af06101808301846200097b565b98975050505050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b60006001600160a01b0380871683528086166020840152506080604083015262000b4e608083018562000988565b828103606084015262000957818562000988565b60208082526014908201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604082015260600190565b60208082526010908201527f5061757361626c653a2070617573656400000000000000000000000000000000604082015260600190565b6020808252600a908201526927a7262cafa0a226a4a760b11b604082015260600190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b60005b8381101562000c3d57818101518382015260200162000c23565b8381111562000c4d576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811462000c7f57600080fd5b5056fe608060405234801561001057600080fd5b5060405161075338038061075383398101604081905261002f91610103565b600080546001600160a01b0319166001600160a01b038316179055848484848461005b8585858561006a565b505050505050505050506101c2565b6100776220148085610177565b6002556100878162201480610197565b61009984670de0b6b3a7640000610197565b6100a39190610177565b6001556100b36220148083610177565b600381905560048290556002546001546040517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d936100f5939291869061015c565b60405180910390a150505050565b600080600080600060a0868803121561011a578081fd5b855160208701516040880151606089015160808a0151939850919650945092506001600160a01b038116811461014e578182fd5b809150509295509295909350565b93845260208401929092526040830152606082015260800190565b60008261019257634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156101bd57634e487b7160e01b81526011600452602481fd5b500290565b610582806101d16000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a385fb9611610066578063a385fb9614610111578063b816881614610119578063b9f9850a1461012c578063f14039de14610134578063fd2da3391461013c5761009e565b806315f24053146100a35780632037f3e7146100cc5780636e71e2d8146100e15780638726bb89146100f45780638da5cb5b146100fc575b600080fd5b6100b66100b13660046103ee565b610144565b6040516100c391906104a4565b60405180910390f35b6100df6100da366004610419565b61015b565b005b6100b66100ef3660046103ee565b6101a0565b6100b66101e0565b6101046101e6565b6040516100c3919061044a565b6100b66101f5565b6100b6610127366004610419565b6101fc565b6100b6610278565b6100b661027e565b6100b6610284565b600061015184848461028a565b90505b9392505050565b6000546001600160a01b0316331461018e5760405162461bcd60e51b81526004016101859061045e565b60405180910390fd5b61019a84848484610355565b50505050565b6000826101af57506000610154565b816101ba84866104c8565b6101c4919061051f565b6101d684670de0b6b3a7640000610500565b61015191906104e0565b60015481565b6000546001600160a01b031681565b6220148081565b60008061021183670de0b6b3a764000061051f565b9050600061022087878761028a565b90506000670de0b6b3a76400006102378484610500565b61024191906104e0565b9050670de0b6b3a7640000816102588a8a8a6101a0565b6102629190610500565b61026c91906104e0565b98975050505050505050565b60035481565b60025481565b60045481565b6000806102988585856101a0565b905060045481116102d957600254670de0b6b3a7640000600154836102bd9190610500565b6102c791906104e0565b6102d191906104c8565b915050610154565b6000600254670de0b6b3a76400006001546004546102f79190610500565b61030191906104e0565b61030b91906104c8565b905060006004548361031d919061051f565b905081670de0b6b3a7640000600354836103379190610500565b61034191906104e0565b61034b91906104c8565b9350505050610154565b61036262201480856104e0565b6002556103728162201480610500565b61038484670de0b6b3a7640000610500565b61038e91906104e0565b60015561039e62201480836104e0565b600381905560048290556002546001546040517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d936103e093929186906104ad565b60405180910390a150505050565b600080600060608486031215610402578283fd5b505081359360208301359350604090920135919050565b6000806000806080858703121561042e578081fd5b5050823594602084013594506040840135936060013592509050565b6001600160a01b0391909116815260200190565b60208082526026908201527f6f6e6c7920746865206f776e6572206d61792063616c6c20746869732066756e60408201526531ba34b7b71760d11b606082015260800190565b90815260200190565b93845260208401929092526040830152606082015260800190565b600082198211156104db576104db610536565b500190565b6000826104fb57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561051a5761051a610536565b500290565b60008282101561053157610531610536565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d3e31022f19029f6b10e3b0bc8bf806e45da3b50549fb265d3cfaaa94ac805c664736f6c63430008010033a2646970667358221220907dd80ce00080855728b5aee26ca9e49fbe9cc633b57d3b593d48c4980d16f064736f6c63430008010033";
