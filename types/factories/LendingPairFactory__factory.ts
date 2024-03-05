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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LendingPairFactory> {
    return super.deploy(overrides || {}) as Promise<LendingPairFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
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
        internalType: "contract IPriceOracle",
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
            name: "borrowRateMaxMantissa",
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
            internalType: "contract IBSWrapperToken",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061175f806100206000396000f3fe60806040523480156200001157600080fd5b50600436106200003a5760003560e01c80631e3dd18b146200003f5780635df2d1451462000075575b600080fd5b6200005d60048036038101906200005791906200053f565b620000ab565b6040516200006c9190620006b6565b60405180910390f35b6200009360048036038101906200008d919062000423565b620000eb565b604051620000a29190620006b6565b60405180910390f35b60008181548110620000bc57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008082600001358360200135846040013585606001358c60405162000111906200033b565b620001219594939291906200077f565b604051809103906000f0801580156200013e573d6000803e3d6000fd5b50905060006040518061010001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001866020013581526020018660400135815260200186606001358152602001866080013581526020018660a0016020810190620001a89190620004e7565b73ffffffffffffffffffffffffffffffffffffffff1681526020018660c0013581526020018660e0016020810190620001e29190620004e7565b73ffffffffffffffffffffffffffffffffffffffff1681525090508a73ffffffffffffffffffffffffffffffffffffffff1663d36cdf1e8b8b8b89600001602081019062000231919062000513565b8c878d6040518863ffffffff1660e01b8152600401620002589796959493929190620006d3565b600060405180830381600087803b1580156200027357600080fd5b505af115801562000288573d6000803e3d6000fd5b505050508a92506000839080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f569465810a88162d0f22919f03f6666d504b840ebec118a2df6f23ab67638de083426040516200032592919062000752565b60405180910390a1505098975050505050505050565b610d2d80620009fd83390190565b6000813590506200035a8162000946565b92915050565b600081359050620003718162000960565b92915050565b60008135905062000388816200097a565b92915050565b6000813590506200039f8162000994565b92915050565b600081359050620003b681620009ae565b92915050565b600081359050620003cd81620009c8565b92915050565b60006101008284031215620003e757600080fd5b81905092915050565b6000608082840312156200040357600080fd5b81905092915050565b6000813590506200041d81620009e2565b92915050565b600080600080600080600080610240898b0312156200044157600080fd5b6000620004518b828c0162000360565b9850506020620004648b828c0162000349565b9750506040620004778b828c01620003bc565b96505060606200048a8b828c0162000377565b95505060806200049d8b828c01620003a5565b94505060a0620004b08b828c016200038e565b93505060c0620004c38b828c01620003d3565b9250506101c0620004d78b828c01620003f0565b9150509295985092959890939650565b600060208284031215620004fa57600080fd5b60006200050a848285016200038e565b91505092915050565b6000602082840312156200052657600080fd5b60006200053684828501620003a5565b91505092915050565b6000602082840312156200055257600080fd5b600062000562848285016200040c565b91505092915050565b6200057681620007dc565b82525050565b62000587816200087e565b82525050565b6200059881620008a6565b82525050565b620005a981620008a6565b82525050565b620005ba81620008ce565b82525050565b620005cb81620008f6565b82525050565b620005dc816200091e565b82525050565b61010082016000820151620005fb6000850182620005c0565b50602082015162000610602085018262000694565b50604082015162000625604085018262000694565b5060608201516200063a606085018262000694565b5060808201516200064f608085018262000694565b5060a08201516200066460a08501826200058d565b5060c08201516200067960c085018262000694565b5060e08201516200068e60e08501826200058d565b50505050565b6200069f8162000874565b82525050565b620006b08162000874565b82525050565b6000602082019050620006cd60008301846200056b565b92915050565b60006101c082019050620006eb600083018a6200056b565b620006fa6020830189620005d1565b6200070960408301886200057c565b620007186060830187620005af565b620007276080830186620005af565b6200073660a0830185620005e2565b620007466101a08301846200059e565b98975050505050505050565b60006040820190506200076960008301856200056b565b620007786020830184620006a5565b9392505050565b600060a082019050620007966000830188620006a5565b620007a56020830187620006a5565b620007b46040830186620006a5565b620007c36060830185620006a5565b620007d260808301846200056b565b9695505050505050565b6000620007e98262000854565b9050919050565b6000620007fd82620007dc565b9050919050565b60006200081182620007dc565b9050919050565b60006200082582620007dc565b9050919050565b60006200083982620007dc565b9050919050565b60006200084d82620007dc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006200088b8262000892565b9050919050565b60006200089f8262000854565b9050919050565b6000620008b382620008ba565b9050919050565b6000620008c78262000854565b9050919050565b6000620008db82620008e2565b9050919050565b6000620008ef8262000854565b9050919050565b600062000903826200090a565b9050919050565b6000620009178262000854565b9050919050565b60006200092b8262000932565b9050919050565b60006200093f8262000854565b9050919050565b6200095181620007dc565b81146200095d57600080fd5b50565b6200096b81620007f0565b81146200097757600080fd5b50565b620009858162000804565b81146200099157600080fd5b50565b6200099f8162000818565b8114620009ab57600080fd5b50565b620009b9816200082c565b8114620009c557600080fd5b50565b620009d38162000840565b8114620009df57600080fd5b50565b620009ed8162000874565b8114620009f957600080fd5b5056fe60806040523480156200001157600080fd5b5060405162000d2d38038062000d2d833981810160405281019062000037919062000189565b8484848484806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200009085858585620000a060201b60201c565b50505050505050505050620003d2565b6220148084620000b1919062000269565b6002819055508062201480620000c89190620002a1565b670de0b6b3a764000084620000de9190620002a1565b620000ea919062000269565b600181905550622014808262000101919062000269565b600381905550806004819055507f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d6002546001546003546004546040516200014d94939291906200021c565b60405180910390a150505050565b6000815190506200016c816200039e565b92915050565b6000815190506200018381620003b8565b92915050565b600080600080600060a08688031215620001a257600080fd5b6000620001b28882890162000172565b9550506020620001c58882890162000172565b9450506040620001d88882890162000172565b9350506060620001eb8882890162000172565b9250506080620001fe888289016200015b565b9150509295509295909350565b620002168162000336565b82525050565b60006080820190506200023360008301876200020b565b6200024260208301866200020b565b6200025160408301856200020b565b6200026060608301846200020b565b95945050505050565b6000620002768262000336565b9150620002838362000336565b9250826200029657620002956200036f565b5b828204905092915050565b6000620002ae8262000336565b9150620002bb8362000336565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620002f757620002f662000340565b5b828202905092915050565b60006200030f8262000316565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b620003a98162000302565b8114620003b557600080fd5b50565b620003c38162000336565b8114620003cf57600080fd5b50565b61094b80620003e26000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a385fb9611610066578063a385fb961461015b578063b816881614610179578063b9f9850a146101a9578063f14039de146101c7578063fd2da339146101e55761009e565b806315f24053146100a35780632037f3e7146100d35780636e71e2d8146100ef5780638726bb891461011f5780638da5cb5b1461013d575b600080fd5b6100bd60048036038101906100b89190610561565b610203565b6040516100ca919061068f565b60405180910390f35b6100ed60048036038101906100e891906105b0565b610219565b005b61010960048036038101906101049190610561565b6102b9565b604051610116919061068f565b60405180910390f35b61012761030b565b604051610134919061068f565b60405180910390f35b610145610311565b6040516101529190610654565b60405180910390f35b610163610335565b604051610170919061068f565b60405180910390f35b610193600480360381019061018e91906105b0565b61033c565b6040516101a0919061068f565b60405180910390f35b6101b16103bd565b6040516101be919061068f565b60405180910390f35b6101cf6103c3565b6040516101dc919061068f565b60405180910390f35b6101ed6103c9565b6040516101fa919061068f565b60405180910390f35b60006102108484846103cf565b90509392505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029e9061066f565b60405180910390fd5b6102b38484848461049d565b50505050565b6000808314156102cc5760009050610304565b8183856102d99190610700565b6102e391906107e1565b670de0b6b3a7640000846102f79190610787565b6103019190610756565b90505b9392505050565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6220148081565b60008082670de0b6b3a764000061035391906107e1565b905060006103628787876103cf565b90506000670de0b6b3a7640000838361037b9190610787565b6103859190610756565b9050670de0b6b3a76400008161039c8a8a8a6102b9565b6103a69190610787565b6103b09190610756565b9350505050949350505050565b60035481565b60025481565b60045481565b6000806103dd8585856102b9565b9050600454811161041e57600254670de0b6b3a7640000600154836104029190610787565b61040c9190610756565b6104169190610700565b915050610496565b6000600254670de0b6b3a764000060015460045461043c9190610787565b6104469190610756565b6104509190610700565b905060006004548361046291906107e1565b905081670de0b6b3a76400006003548361047c9190610787565b6104869190610756565b6104909190610700565b93505050505b9392505050565b62201480846104ac9190610756565b60028190555080622014806104c19190610787565b670de0b6b3a7640000846104d59190610787565b6104df9190610756565b60018190555062201480826104f49190610756565b600381905550806004819055507f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d60025460015460035460045460405161053e94939291906106aa565b60405180910390a150505050565b60008135905061055b816108fe565b92915050565b60008060006060848603121561057657600080fd5b60006105848682870161054c565b93505060206105958682870161054c565b92505060406105a68682870161054c565b9150509250925092565b600080600080608085870312156105c657600080fd5b60006105d48782880161054c565b94505060206105e58782880161054c565b93505060406105f68782880161054c565b92505060606106078782880161054c565b91505092959194509250565b61061c81610815565b82525050565b600061062f6026836106ef565b915061063a826108af565b604082019050919050565b61064e81610847565b82525050565b60006020820190506106696000830184610613565b92915050565b6000602082019050818103600083015261068881610622565b9050919050565b60006020820190506106a46000830184610645565b92915050565b60006080820190506106bf6000830187610645565b6106cc6020830186610645565b6106d96040830185610645565b6106e66060830184610645565b95945050505050565b600082825260208201905092915050565b600061070b82610847565b915061071683610847565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561074b5761074a610851565b5b828201905092915050565b600061076182610847565b915061076c83610847565b92508261077c5761077b610880565b5b828204905092915050565b600061079282610847565b915061079d83610847565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156107d6576107d5610851565b5b828202905092915050565b60006107ec82610847565b91506107f783610847565b92508282101561080a57610809610851565b5b828203905092915050565b600061082082610827565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f6f6e6c7920746865206f776e6572206d61792063616c6c20746869732066756e60008201527f6374696f6e2e0000000000000000000000000000000000000000000000000000602082015250565b61090781610847565b811461091257600080fd5b5056fea2646970667358221220a08e389e6359087d3b48d0870dd6fbbb3ad48d61fb87a97b0e30d2f4133fe6c064736f6c63430008010033a2646970667358221220734fe43d8a3fba8dc31f32757c0df66c692fb20687605db62bef2891cd783f8664736f6c63430008010033";
