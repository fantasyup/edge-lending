/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { BaseJumpRateModelV2 } from "../BaseJumpRateModelV2";

export class BaseJumpRateModelV2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    jumpMultiplierPerYear: BigNumberish,
    kink_: BigNumberish,
    owner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseJumpRateModelV2> {
    return super.deploy(
      baseRatePerYear,
      multiplierPerYear,
      jumpMultiplierPerYear,
      kink_,
      owner_,
      overrides || {}
    ) as Promise<BaseJumpRateModelV2>;
  }
  getDeployTransaction(
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    jumpMultiplierPerYear: BigNumberish,
    kink_: BigNumberish,
    owner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      baseRatePerYear,
      multiplierPerYear,
      jumpMultiplierPerYear,
      kink_,
      owner_,
      overrides || {}
    );
  }
  attach(address: string): BaseJumpRateModelV2 {
    return super.attach(address) as BaseJumpRateModelV2;
  }
  connect(signer: Signer): BaseJumpRateModelV2__factory {
    return super.connect(signer) as BaseJumpRateModelV2__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseJumpRateModelV2 {
    return new Contract(address, _abi, signerOrProvider) as BaseJumpRateModelV2;
  }
}

const _abi = [
  {
    inputs: [
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
        name: "kink_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner_",
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
        internalType: "uint256",
        name: "baseRatePerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "multiplierPerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "jumpMultiplierPerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "kink",
        type: "uint256",
      },
    ],
    name: "NewInterestParams",
    type: "event",
  },
  {
    inputs: [],
    name: "baseRatePerBlock",
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
    name: "blocksPerYear",
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
        internalType: "bytes32",
        name: "c__0xbd9cfc2e",
        type: "bytes32",
      },
    ],
    name: "c_0xbd9cfc2e",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveFactorMantissa",
        type: "uint256",
      },
    ],
    name: "getSupplyRate",
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
    name: "jumpMultiplierPerBlock",
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
    name: "kink",
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
    name: "multiplierPerBlock",
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
    inputs: [
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
        name: "kink_",
        type: "uint256",
      },
    ],
    name: "updateJumpRateModel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
    ],
    name: "utilizationRate",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001965380380620019658339818101604052810190620000379190620004c2565b6200006b7fb4d234b2ff13cf6ddef1b00ed761d495deba68850fbbf24344954e900bc775be60001b6200019a60201b60201c565b6200009f7fc60d3320a7ed795bd811207e81285b62e10f9fa70f17b23302932ff5f0d7a2f960001b6200019a60201b60201c565b620000d37f2b583f31a8d40a5995d2eacbeb82d7c73240519ebd37bc003e828063b28039f660001b6200019a60201b60201c565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001477fa65bb72ff52b6c651ed6eb455247f52fc3e7758ad0e62b2713712733f3a8d23c60001b6200019a60201b60201c565b6200017b7f6014ab4916281c64486e49e6a7652d2908c41a49106844df707110e62a7a25db60001b6200019a60201b60201c565b6200018f858585856200019d60201b60201c565b50505050506200070b565b50565b620001d17fbe11ae9862812a24abcedc98aea4b9972b022483cca29804871e07d00602352a60001b6200019a60201b60201c565b620002057f0bc7ebd5532c4d1e4c62a9bbdfcb59b13ec865ad78b128ac82c664711d7438c960001b6200019a60201b60201c565b620002397fff2fc637b481937b008331f8ce1e8cc1be6cbc442a9d4377d15b2877545152f960001b6200019a60201b60201c565b62201480846200024a9190620005a2565b600281905550620002847f2a97ce402cabf68a73776ea2990743efc677e3f7a458a6afb173526d35e9a54160001b6200019a60201b60201c565b620002b87f3262bbe5518118204ce989df26b3d2f5dcef19320f14bb68a1a115e0c6620d1f60001b6200019a60201b60201c565b8062201480620002c99190620005da565b670de0b6b3a764000084620002df9190620005da565b620002eb9190620005a2565b600181905550620003257fe3b8c4a20cbff4b79081e71d9103ece0ea41941409c09925899b07cf17e4f7eb60001b6200019a60201b60201c565b620003597f75075361d04ea0861c38e89129d93bb2c6a29c3b875f00b1f9c5525f3baf1abb60001b6200019a60201b60201c565b62201480826200036a9190620005a2565b600381905550620003a47f4c1e932dd831c71d791c09425217bd088f7a9396a3596b544f10a55e486a28de60001b6200019a60201b60201c565b620003d87f59def1f2d63451f5e4fd7a7d18e9b45ca570f02121445056e17b61cc4f69ae2e60001b6200019a60201b60201c565b80600481905550620004137fd20a38f3981ed1c67cc59f57c9cc8d72207f59fb9d2fb979b71fa2dc066fa65e60001b6200019a60201b60201c565b620004477fc932da2c4ba60c7f41793a39bc6ebb0fe63270642780c768251320f417964d7460001b6200019a60201b60201c565b7f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d60025460015460035460045460405162000486949392919062000555565b60405180910390a150505050565b600081519050620004a581620006d7565b92915050565b600081519050620004bc81620006f1565b92915050565b600080600080600060a08688031215620004db57600080fd5b6000620004eb88828901620004ab565b9550506020620004fe88828901620004ab565b94505060406200051188828901620004ab565b93505060606200052488828901620004ab565b9250506080620005378882890162000494565b9150509295509295909350565b6200054f816200066f565b82525050565b60006080820190506200056c600083018762000544565b6200057b602083018662000544565b6200058a604083018562000544565b62000599606083018462000544565b95945050505050565b6000620005af826200066f565b9150620005bc836200066f565b925082620005cf57620005ce620006a8565b5b828204905092915050565b6000620005e7826200066f565b9150620005f4836200066f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000630576200062f62000679565b5b828202905092915050565b600062000648826200064f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b620006e2816200063b565b8114620006ee57600080fd5b50565b620006fc816200066f565b81146200070857600080fd5b50565b61124a806200071b6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a385fb9611610066578063a385fb9614610147578063b816881614610165578063b9f9850a14610195578063f14039de146101b3578063fd2da339146101d15761009e565b806319cdbd88146100a35780632037f3e7146100bf5780636e71e2d8146100db5780638726bb891461010b5780638da5cb5b14610129575b600080fd5b6100bd60048036038101906100b89190610e16565b6101ef565b005b6100d960048036038101906100d49190610e8e565b6101f2565b005b6100f560048036038101906100f09190610e3f565b6103c6565b6040516101029190610f6d565b60405180910390f35b6101136105a5565b6040516101209190610f6d565b60405180910390f35b6101316105ab565b60405161013e9190610f32565b60405180910390f35b61014f6105cf565b60405161015c9190610f6d565b60405180910390f35b61017f600480360381019061017a9190610e8e565b6105d6565b60405161018c9190610f6d565b60405180910390f35b61019d6107e4565b6040516101aa9190610f6d565b60405180910390f35b6101bb6107ea565b6040516101c89190610f6d565b60405180910390f35b6101d96107f0565b6040516101e69190610f6d565b60405180910390f35b50565b61021e7f2abf71d10480d21891e9bff46a84b85e43c367583541b2d6171b4bd066a406d560001b6101ef565b61024a7f3a863e0455bb6baa7a955de4971a0d0185d83bc76c0c31cc42e1c8cd38b980ad60001b6101ef565b6102767feaff5b75ac1690b94f35e50987f612bb7c5fb374c94f8b181adb6fc89a9f607a60001b6101ef565b6102a27f086d0024729d44e84038c8f6e93c8577f173418d842b4b2fbe4357bf6697ceca60001b6101ef565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610330576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032790610f4d565b60405180910390fd5b61035c7f13aa976b3b1f3842cfcf8a8864dfc1f6750bfa41875f720755d2187377c529ad60001b6101ef565b6103887fd869c2aa6908abca3580661a15b077fc00a7d91e041c209a85df3b16f30d9c6d60001b6101ef565b6103b47f27d4f6d7199cc5d24f45800b0ad3d367cbfced69770c4e9e84bc41b3686e5c0d60001b6101ef565b6103c0848484846107f6565b50505050565b60006103f47fb78e47f0e71d0be77d280d65203b6dd9b347622432396f5a7e01349d9164985e60001b6101ef565b6104207f03b329eecb03c7a27abefd1efbbb79655d8c2c83a8caefcae0b27c2e71d0410760001b6101ef565b61044c7f9d94060ee4fb7a3cf5dbf5d77e6aa191ad8312c385a7f8655c77a36c793a630260001b6101ef565b60008314156104e2576104817fad58efe8ae1b3a91ef28cefea8339d5536bb8461a78bc3c9a13b6d9ad0d013fb60001b6101ef565b6104ad7fe6eac6e796ffbae6ec57589cd647612f4b2daab81275e018408fc59a82c70ad260001b6101ef565b6104d97fbc704362ab59a5d77471bc8991fe03851ee53016a8942492c4a72ef9ced8a8bc60001b6101ef565b6000905061059e565b61050e7f703b5a64bdf2e3446cf6d567ab64cf7599dab09837dd48b00fa9498c1e3bdbd560001b6101ef565b61053a7f0edd8315d6a1d9729ddfb261915be6fdc334fe465e0e97fa0149b06a9543ef3d60001b6101ef565b6105667fd36a04341428bf98c5bd366e8f9df2e1834d01722d6219be37583219dfcb1b3860001b6101ef565b8183856105739190610fde565b61057d91906110bf565b670de0b6b3a7640000846105919190611065565b61059b9190611034565b90505b9392505050565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6220148081565b60006106047f47c7ab02d3bd11805ea6e7a8181184b7cbefe3c490516c9cd0a4432df47ee08b60001b6101ef565b6106307f3a556a281764029e3a8da89a5657f8d77b527e128f06cea5720044cab2f5086b60001b6101ef565b61065c7f95961fdfb669599b8cfb1659c51852904db73d875e636937096cad78f20e9e7860001b6101ef565b600082670de0b6b3a764000061067291906110bf565b90506106a07f9daf33b9bdfa4f9a3fa3186b6bcc48e500012c0e64aa8726cde4163a2a809f1360001b6101ef565b6106cc7f83d88780c022b20395215997471999e4f719d8562060fcfca23fa0b95f96841360001b6101ef565b60006106d9878787610a89565b90506107077f1f2ab7f1ecc91e367df2ede344c05af5b9d6d7f39bf34af273c291a5c225896f60001b6101ef565b6107337f28582363243a6b3c88d41f28928f008c45fc16423f81f0490ecb4f622dc1d2b860001b6101ef565b6000670de0b6b3a7640000838361074a9190611065565b6107549190611034565b90506107827f1116336313219044dcaa04e58869531b41ca81e5d24182fb26333aeff9a76b2560001b6101ef565b6107ae7fe4c22a1f387f0fbda0ba7afc07229face6caea33f0fecab5bfe60a4128e0f68060001b6101ef565b670de0b6b3a7640000816107c38a8a8a6103c6565b6107cd9190611065565b6107d79190611034565b9350505050949350505050565b60035481565b60025481565b60045481565b6108227fbe11ae9862812a24abcedc98aea4b9972b022483cca29804871e07d00602352a60001b6101ef565b61084e7f0bc7ebd5532c4d1e4c62a9bbdfcb59b13ec865ad78b128ac82c664711d7438c960001b6101ef565b61087a7fff2fc637b481937b008331f8ce1e8cc1be6cbc442a9d4377d15b2877545152f960001b6101ef565b62201480846108899190611034565b6002819055506108bb7f2a97ce402cabf68a73776ea2990743efc677e3f7a458a6afb173526d35e9a54160001b6101ef565b6108e77f3262bbe5518118204ce989df26b3d2f5dcef19320f14bb68a1a115e0c6620d1f60001b6101ef565b80622014806108f69190611065565b670de0b6b3a76400008461090a9190611065565b6109149190611034565b6001819055506109467fe3b8c4a20cbff4b79081e71d9103ece0ea41941409c09925899b07cf17e4f7eb60001b6101ef565b6109727f75075361d04ea0861c38e89129d93bb2c6a29c3b875f00b1f9c5525f3baf1abb60001b6101ef565b62201480826109819190611034565b6003819055506109b37f4c1e932dd831c71d791c09425217bd088f7a9396a3596b544f10a55e486a28de60001b6101ef565b6109df7f59def1f2d63451f5e4fd7a7d18e9b45ca570f02121445056e17b61cc4f69ae2e60001b6101ef565b80600481905550610a127fd20a38f3981ed1c67cc59f57c9cc8d72207f59fb9d2fb979b71fa2dc066fa65e60001b6101ef565b610a3e7fc932da2c4ba60c7f41793a39bc6ebb0fe63270642780c768251320f417964d7460001b6101ef565b7f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d600254600154600354600454604051610a7b9493929190610f88565b60405180910390a150505050565b6000610ab77f132b598d7e1bb94ac92721dae599d725df9701d71600612d9b8242537ba6116460001b6101ef565b610ae37f60b699136484e3d7a067e96a2eaafe3dfcf2cde7fa2077cc93d3b23b1e2356cf60001b6101ef565b610b0f7f749d563828f28b2d82cc0449c43f8efb6046544522d85f2ea5187ddd63793a8d60001b6101ef565b6000610b1c8585856103c6565b9050610b4a7f222427326104388ada315fe1d2cc2ebe60924f7c78dacf892a3829ecc82ec86f60001b6101ef565b610b767f9ad86415a5b14410548bfd12246c537da44db4f1f58087d3c32591d5f6511cb960001b6101ef565b6004548111610c3957610bab7ff2a90b79c68994d559ac341f23d6c65c2b1cde63f47d8db255a1453ffa1bc94960001b6101ef565b610bd77f144a511ba63b217f5b9d3f1ee36ff2d8ecdc8a5614dd6f74ccab50ecb431047260001b6101ef565b610c037f28185c38b2e885b49cefcfe09900b5720f4ce04623161ff0ebbfe257996831ce60001b6101ef565b600254670de0b6b3a764000060015483610c1d9190611065565b610c279190611034565b610c319190610fde565b915050610de5565b610c657f61918d35986a17cbefcd0e9906689d7204342f76f14467df7c1c8c3bd9e1e35a60001b6101ef565b610c917f651789ad23c85ca60223f72e023975595400d57f55bc9769591e7214207d8cd760001b6101ef565b610cbd7feef65c2116d518433a48dea720e341dd65f39e33266a3b1bba07be914c0aa05560001b6101ef565b6000600254670de0b6b3a7640000600154600454610cdb9190611065565b610ce59190611034565b610cef9190610fde565b9050610d1d7f9ca9184ec6e43f6f6a0ccd13420b7729499bc9e9ac4542d6b39cca61bef0b04660001b6101ef565b610d497f2d978668778b023e7dff26ccf9234ef0f3af9f59b90a87e5953d5f39195e505660001b6101ef565b600060045483610d5991906110bf565b9050610d877f0e357eccedc3166c11a5108ea4b3d912c4bff63baaf5ae5a0d9f0df1196a984060001b6101ef565b610db37fc98821325f3c1e5fd04936fcdefb79825a0d11dde7d428174cf5e319c24cd9c260001b6101ef565b81670de0b6b3a764000060035483610dcb9190611065565b610dd59190611034565b610ddf9190610fde565b93505050505b9392505050565b600081359050610dfb816111e6565b92915050565b600081359050610e10816111fd565b92915050565b600060208284031215610e2857600080fd5b6000610e3684828501610dec565b91505092915050565b600080600060608486031215610e5457600080fd5b6000610e6286828701610e01565b9350506020610e7386828701610e01565b9250506040610e8486828701610e01565b9150509250925092565b60008060008060808587031215610ea457600080fd5b6000610eb287828801610e01565b9450506020610ec387828801610e01565b9350506040610ed487828801610e01565b9250506060610ee587828801610e01565b91505092959194509250565b610efa816110f3565b82525050565b6000610f0d602683610fcd565b9150610f1882611197565b604082019050919050565b610f2c8161112f565b82525050565b6000602082019050610f476000830184610ef1565b92915050565b60006020820190508181036000830152610f6681610f00565b9050919050565b6000602082019050610f826000830184610f23565b92915050565b6000608082019050610f9d6000830187610f23565b610faa6020830186610f23565b610fb76040830185610f23565b610fc46060830184610f23565b95945050505050565b600082825260208201905092915050565b6000610fe98261112f565b9150610ff48361112f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561102957611028611139565b5b828201905092915050565b600061103f8261112f565b915061104a8361112f565b92508261105a57611059611168565b5b828204905092915050565b60006110708261112f565b915061107b8361112f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156110b4576110b3611139565b5b828202905092915050565b60006110ca8261112f565b91506110d58361112f565b9250828210156110e8576110e7611139565b5b828203905092915050565b60006110fe8261110f565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f6f6e6c7920746865206f776e6572206d61792063616c6c20746869732066756e60008201527f6374696f6e2e0000000000000000000000000000000000000000000000000000602082015250565b6111ef81611105565b81146111fa57600080fd5b50565b6112068161112f565b811461121157600080fd5b5056fea264697066735822122096bba40877f43b77383dc01ad23b1388fa0ac66c68a84a470ccaf07fa7b3c24964736f6c63430008010033";
