/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { DataTypes } from "../DataTypes";

export class DataTypes__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DataTypes> {
    return super.deploy(overrides || {}) as Promise<DataTypes>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DataTypes {
    return super.attach(address) as DataTypes;
  }
  connect(signer: Signer): DataTypes__factory {
    return super.connect(signer) as DataTypes__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DataTypes {
    return new Contract(address, _abi, signerOrProvider) as DataTypes;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IInterestRateModel",
            name: "interestRate",
            type: "IInterestRateModel",
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
            type: "IBSWrapperToken",
          },
          {
            internalType: "uint256",
            name: "liquidationFee",
            type: "uint256",
          },
          {
            internalType: "contract IBSWrapperToken",
            name: "debtToken",
            type: "IBSWrapperToken",
          },
        ],
        internalType: "struct DataTypes.BorrowAssetConfig",
        name: "self",
        type: "tuple",
      },
    ],
    name: "validBorrowAssetConfig",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61077a610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80630b15696b1461003a575b600080fd5b610054600480360381019061004f9190610392565b610056565b005b600073ffffffffffffffffffffffffffffffffffffffff168160000160208101906100819190610369565b73ffffffffffffffffffffffffffffffffffffffff1614156100d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100cf90610510565b60405180910390fd5b600081602001351161011f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011690610530565b60405180910390fd5b6000816040013511610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d90610550565b60405180910390fd5b60008160600135116101ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a4906104b0565b60405180910390fd5b60008160a00135116101f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101eb90610570565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1681608001602081019061021f9190610340565b73ffffffffffffffffffffffffffffffffffffffff161415610276576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026d906104d0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160c00160208101906102a19190610340565b73ffffffffffffffffffffffffffffffffffffffff1614156102f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ef906104f0565b60405180910390fd5b50565b60008135905061030a81610716565b92915050565b60008135905061031f8161072d565b92915050565b600060e0828403121561033757600080fd5b81905092915050565b60006020828403121561035257600080fd5b6000610360848285016102fb565b91505092915050565b60006020828403121561037b57600080fd5b600061038984828501610310565b91505092915050565b600060e082840312156103a457600080fd5b60006103b284828501610325565b91505092915050565b60006103c8600283610590565b91506103d3826105f7565b602082019050919050565b60006103eb600383610590565b91506103f682610620565b602082019050919050565b600061040e600383610590565b915061041982610649565b602082019050919050565b6000610431600283610590565b915061043c82610672565b602082019050919050565b6000610454600283610590565b915061045f8261069b565b602082019050919050565b6000610477600283610590565b9150610482826106c4565b602082019050919050565b600061049a600283610590565b91506104a5826106ed565b602082019050919050565b600060208201905081810360008301526104c9816103bb565b9050919050565b600060208201905081810360008301526104e9816103de565b9050919050565b6000602082019050818103600083015261050981610401565b9050919050565b6000602082019050818103600083015261052981610424565b9050919050565b6000602082019050818103600083015261054981610447565b9050919050565b600060208201905081810360008301526105698161046a565b9050919050565b600060208201905081810360008301526105898161048d565b9050919050565b600082825260208201905092915050565b60006105ac826105d7565b9050919050565b60006105be826105a1565b9050919050565b60006105d0826105a1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f4943000000000000000000000000000000000000000000000000000000000000600082015250565b7f4957420000000000000000000000000000000000000000000000000000000000600082015250565b7f4944420000000000000000000000000000000000000000000000000000000000600082015250565b7f4952000000000000000000000000000000000000000000000000000000000000600082015250565b7f4945000000000000000000000000000000000000000000000000000000000000600082015250565b7f4946000000000000000000000000000000000000000000000000000000000000600082015250565b7f494c000000000000000000000000000000000000000000000000000000000000600082015250565b61071f816105b3565b811461072a57600080fd5b50565b610736816105c5565b811461074157600080fd5b5056fea2646970667358221220ef15cdf814aa2c1ef0d98adca4805833f67a6034637538a4a3d67930371918a764736f6c63430008010033";
