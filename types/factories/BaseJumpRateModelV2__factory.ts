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
  "0x60806040523480156200001157600080fd5b5060405162000cd238038062000cd283398181016040528101906200003791906200017f565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200008b858585856200009660201b60201c565b5050505050620003c8565b6220148084620000a791906200025f565b6002819055508062201480620000be919062000297565b670de0b6b3a764000084620000d4919062000297565b620000e091906200025f565b6001819055506220148082620000f791906200025f565b600381905550806004819055507f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d60025460015460035460045460405162000143949392919062000212565b60405180910390a150505050565b600081519050620001628162000394565b92915050565b6000815190506200017981620003ae565b92915050565b600080600080600060a086880312156200019857600080fd5b6000620001a88882890162000168565b9550506020620001bb8882890162000168565b9450506040620001ce8882890162000168565b9350506060620001e18882890162000168565b9250506080620001f48882890162000151565b9150509295509295909350565b6200020c816200032c565b82525050565b600060808201905062000229600083018762000201565b62000238602083018662000201565b62000247604083018562000201565b62000256606083018462000201565b95945050505050565b60006200026c826200032c565b915062000279836200032c565b9250826200028c576200028b62000365565b5b828204905092915050565b6000620002a4826200032c565b9150620002b1836200032c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620002ed57620002ec62000336565b5b828202905092915050565b600062000305826200030c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6200039f81620002f8565b8114620003ab57600080fd5b50565b620003b9816200032c565b8114620003c557600080fd5b50565b6108fa80620003d86000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063a385fb9611610066578063a385fb9614610120578063b81688161461013e578063b9f9850a1461016e578063f14039de1461018c578063fd2da339146101aa57610093565b80632037f3e7146100985780636e71e2d8146100b45780638726bb89146100e45780638da5cb5b14610102575b600080fd5b6100b260048036038101906100ad919061055f565b6101c8565b005b6100ce60048036038101906100c99190610510565b610268565b6040516100db919061063e565b60405180910390f35b6100ec6102ba565b6040516100f9919061063e565b60405180910390f35b61010a6102c0565b6040516101179190610603565b60405180910390f35b6101286102e4565b604051610135919061063e565b60405180910390f35b6101586004803603810190610153919061055f565b6102eb565b604051610165919061063e565b60405180910390f35b61017661036c565b604051610183919061063e565b60405180910390f35b610194610372565b6040516101a1919061063e565b60405180910390f35b6101b2610378565b6040516101bf919061063e565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610256576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024d9061061e565b60405180910390fd5b6102628484848461037e565b50505050565b60008083141561027b57600090506102b3565b81838561028891906106af565b6102929190610790565b670de0b6b3a7640000846102a69190610736565b6102b09190610705565b90505b9392505050565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6220148081565b60008082670de0b6b3a76400006103029190610790565b9050600061031187878761042d565b90506000670de0b6b3a7640000838361032a9190610736565b6103349190610705565b9050670de0b6b3a76400008161034b8a8a8a610268565b6103559190610736565b61035f9190610705565b9350505050949350505050565b60035481565b60025481565b60045481565b622014808461038d9190610705565b60028190555080622014806103a29190610736565b670de0b6b3a7640000846103b69190610736565b6103c09190610705565b60018190555062201480826103d59190610705565b600381905550806004819055507f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d60025460015460035460045460405161041f9493929190610659565b60405180910390a150505050565b60008061043b858585610268565b9050600454811161047c57600254670de0b6b3a7640000600154836104609190610736565b61046a9190610705565b61047491906106af565b9150506104f4565b6000600254670de0b6b3a764000060015460045461049a9190610736565b6104a49190610705565b6104ae91906106af565b90506000600454836104c09190610790565b905081670de0b6b3a7640000600354836104da9190610736565b6104e49190610705565b6104ee91906106af565b93505050505b9392505050565b60008135905061050a816108ad565b92915050565b60008060006060848603121561052557600080fd5b6000610533868287016104fb565b9350506020610544868287016104fb565b9250506040610555868287016104fb565b9150509250925092565b6000806000806080858703121561057557600080fd5b6000610583878288016104fb565b9450506020610594878288016104fb565b93505060406105a5878288016104fb565b92505060606105b6878288016104fb565b91505092959194509250565b6105cb816107c4565b82525050565b60006105de60268361069e565b91506105e98261085e565b604082019050919050565b6105fd816107f6565b82525050565b600060208201905061061860008301846105c2565b92915050565b60006020820190508181036000830152610637816105d1565b9050919050565b600060208201905061065360008301846105f4565b92915050565b600060808201905061066e60008301876105f4565b61067b60208301866105f4565b61068860408301856105f4565b61069560608301846105f4565b95945050505050565b600082825260208201905092915050565b60006106ba826107f6565b91506106c5836107f6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156106fa576106f9610800565b5b828201905092915050565b6000610710826107f6565b915061071b836107f6565b92508261072b5761072a61082f565b5b828204905092915050565b6000610741826107f6565b915061074c836107f6565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561078557610784610800565b5b828202905092915050565b600061079b826107f6565b91506107a6836107f6565b9250828210156107b9576107b8610800565b5b828203905092915050565b60006107cf826107d6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f6f6e6c7920746865206f776e6572206d61792063616c6c20746869732066756e60008201527f6374696f6e2e0000000000000000000000000000000000000000000000000000602082015250565b6108b6816107f6565b81146108c157600080fd5b5056fea2646970667358221220758b76198a8055f6da03045c3d50d4468f64452e57693bb439c479b70231460e64736f6c63430008010033";
