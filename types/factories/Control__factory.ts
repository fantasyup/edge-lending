/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Control } from "../Control";

export class Control__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Control> {
    return super.deploy(overrides || {}) as Promise<Control>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Control {
    return super.attach(address) as Control;
  }
  connect(signer: Signer): Control__factory {
    return super.connect(signer) as Control__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Control {
    return new Contract(address, _abi, signerOrProvider) as Control;
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    name: "blackSmithteam",
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
        internalType: "contract IPriceOracle",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_collateralAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_initialExchangeRateMantissa",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reserveFactorMantissa",
        type: "uint256",
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
        internalType: "struct PairConfigurationBase.NewLendingVaultIRLocalVars",
        name: "_interestRateVars",
        type: "tuple",
      },
      {
        internalType: "contract IBSWrapperToken",
        name: "_wrappedBorrowAsset",
        type: "address",
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
    name: "graceSpace",
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
        internalType: "contract IBSVault",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "contract LendingPairFactory",
        name: "_lendingPairFactory",
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
    name: "lendingPairFactory",
    outputs: [
      {
        internalType: "contract LendingPairFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "newBSControl",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pairs",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newControl",
        type: "address",
      },
    ],
    name: "startUpgradeTimer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBSControl",
        name: "_newControl",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "pairAddr",
        type: "address[]",
      },
    ],
    name: "transferControl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newBSControl",
        type: "address",
      },
    ],
    name: "upgradeControl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract IBSVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "viewNumOfPairs",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060006100216100c460201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506100cc565b600033905090565b6115b7806100db6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063de683d1511610066578063de683d1514610275578063f2fde38b14610293578063fbfa77cf146102af578063fe33b302146102cd57610100565b8063715018a614610215578063794b82691461021f5780637a58dc9f1461023b5780638da5cb5b1461025757610100565b80633728609d116100d35780633728609d1461018d5780633bfac207146101ab578063485cc955146101c95780636f99a44c146101e557610100565b80630a8a4d3f1461010557806312a03e1e146101235780631e3dd18b1461013f5780632e9d09a71461016f575b600080fd5b61010d6102fd565b60405161011a9190611135565b60405180910390f35b61013d60048036038101906101389190610cf3565b610303565b005b61015960048036038101906101549190610e79565b610382565b6040516101669190610fd3565b60405180910390f35b6101776103c1565b6040516101849190610fd3565b60405180910390f35b6101956103e7565b6040516101a29190610fd3565b60405180910390f35b6101b361040d565b6040516101c09190611135565b60405180910390f35b6101e360048036038101906101de9190610d9d565b61041a565b005b6101ff60048036038101906101fa9190610dd9565b6104a0565b60405161020c9190610fd3565b60405180910390f35b61021d610682565b005b61023960048036038101906102349190610d45565b6107bc565b005b61025560048036038101906102509190610cf3565b61085d565b005b61025f610932565b60405161026c9190610fd3565b60405180910390f35b61027d61095b565b60405161028a91906110da565b60405180910390f35b6102ad60048036038101906102a89190610cf3565b610981565b005b6102b7610b2a565b6040516102c491906110bf565b60405180910390f35b6102e760048036038101906102e29190610cf3565b610b50565b6040516102f49190611017565b60405180910390f35b60035481565b61030b610b70565b73ffffffffffffffffffffffffffffffffffffffff16610329610932565b73ffffffffffffffffffffffffffffffffffffffff161461037f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037690611115565b60405180910390fd5b50565b6006818154811061039257600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600680549050905090565b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c34b525e308a600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168b8b8b8b8b8b6040518a63ffffffff1660e01b815260040161052f99989796959493929190611032565b602060405180830381600087803b15801561054957600080fd5b505af115801561055d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105819190610d1c565b90506006819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f569465810a88162d0f22919f03f6666d504b840ebec118a2df6f23ab67638de0814260405161066f929190610fee565b60405180910390a1979650505050505050565b61068a610b70565b73ffffffffffffffffffffffffffffffffffffffff166106a8610932565b73ffffffffffffffffffffffffffffffffffffffff16146106fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f590611115565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6107c4610b70565b73ffffffffffffffffffffffffffffffffffffffff166107e2610932565b73ffffffffffffffffffffffffffffffffffffffff1614610838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082f90611115565b60405180910390fd5b60005b82829050811015610857578061085090611399565b905061083b565b50505050565b610865610b70565b73ffffffffffffffffffffffffffffffffffffffff16610883610932565b73ffffffffffffffffffffffffffffffffffffffff16146108d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d090611115565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506202a300426109299190611186565b60038190555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610989610b70565b73ffffffffffffffffffffffffffffffffffffffff166109a7610932565b73ffffffffffffffffffffffffffffffffffffffff16146109fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f490611115565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a64906110f5565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076020528060005260406000206000915054906101000a900460ff1681565b600033905090565b600081359050610b87816114c9565b92915050565b600081519050610b9c816114c9565b92915050565b60008083601f840112610bb457600080fd5b8235905067ffffffffffffffff811115610bcd57600080fd5b602083019150836020820283011115610be557600080fd5b9250929050565b600081359050610bfb816114e0565b92915050565b600081359050610c10816114f7565b92915050565b600081359050610c258161150e565b92915050565b600081359050610c3a81611525565b92915050565b600081359050610c4f8161153c565b92915050565b600081359050610c6481611553565b92915050565b600060808284031215610c7c57600080fd5b610c866080611150565b90506000610c9684828501610cde565b6000830152506020610caa84828501610cde565b6020830152506040610cbe84828501610cde565b6040830152506060610cd284828501610cde565b60608301525092915050565b600081359050610ced8161156a565b92915050565b600060208284031215610d0557600080fd5b6000610d1384828501610b78565b91505092915050565b600060208284031215610d2e57600080fd5b6000610d3c84828501610b8d565b91505092915050565b600080600060408486031215610d5a57600080fd5b6000610d6886828701610bec565b935050602084013567ffffffffffffffff811115610d8557600080fd5b610d9186828701610ba2565b92509250509250925092565b60008060408385031215610db057600080fd5b6000610dbe85828601610c01565b9250506020610dcf85828601610c55565b9150509250929050565b6000806000806000806000610140888a031215610df557600080fd5b6000610e038a828b01610c40565b9750506020610e148a828b01610c2b565b9650506040610e258a828b01610c2b565b9550506060610e368a828b01610cde565b9450506080610e478a828b01610cde565b93505060a0610e588a828b01610c6a565b925050610120610e6a8a828b01610c16565b91505092959891949750929550565b600060208284031215610e8b57600080fd5b6000610e9984828501610cde565b91505092915050565b610eab816111dc565b82525050565b610eba816111ee565b82525050565b610ec981611290565b82525050565b610ed8816112b4565b82525050565b610ee7816112d8565b82525050565b610ef6816112fc565b82525050565b610f0581611320565b82525050565b610f1481611344565b82525050565b6000610f27602683611175565b9150610f3282611451565b604082019050919050565b6000610f4a602083611175565b9150610f55826114a0565b602082019050919050565b608082016000820151610f766000850182610fb5565b506020820151610f896020850182610fb5565b506040820151610f9c6040850182610fb5565b506060820151610faf6060850182610fb5565b50505050565b610fbe81611286565b82525050565b610fcd81611286565b82525050565b6000602082019050610fe86000830184610ea2565b92915050565b60006040820190506110036000830185610ea2565b6110106020830184610fc4565b9392505050565b600060208201905061102c6000830184610eb1565b92915050565b600061018082019050611048600083018c610ec0565b611055602083018b610efc565b611062604083018a610ecf565b61106f6060830189610eed565b61107c6080830188610eed565b61108960a0830187610fc4565b61109660c0830186610fc4565b6110a360e0830185610f60565b6110b1610160830184610ede565b9a9950505050505050505050565b60006020820190506110d46000830184610ecf565b92915050565b60006020820190506110ef6000830184610f0b565b92915050565b6000602082019050818103600083015261110e81610f1a565b9050919050565b6000602082019050818103600083015261112e81610f3d565b9050919050565b600060208201905061114a6000830184610fc4565b92915050565b600061115a61116b565b90506111668282611368565b919050565b6000604051905090565b600082825260208201905092915050565b600061119182611286565b915061119c83611286565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156111d1576111d06113e2565b5b828201905092915050565b60006111e782611266565b9050919050565b60008115159050919050565b6000611205826111dc565b9050919050565b6000611217826111dc565b9050919050565b6000611229826111dc565b9050919050565b600061123b826111dc565b9050919050565b600061124d826111dc565b9050919050565b600061125f826111dc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061129b826112a2565b9050919050565b60006112ad82611266565b9050919050565b60006112bf826112c6565b9050919050565b60006112d182611266565b9050919050565b60006112e3826112ea565b9050919050565b60006112f582611266565b9050919050565b60006113078261130e565b9050919050565b600061131982611266565b9050919050565b600061132b82611332565b9050919050565b600061133d82611266565b9050919050565b600061134f82611356565b9050919050565b600061136182611266565b9050919050565b61137182611440565b810181811067ffffffffffffffff821117156113905761138f611411565b5b80604052505050565b60006113a482611286565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156113d7576113d66113e2565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6114d2816111dc565b81146114dd57600080fd5b50565b6114e9816111fa565b81146114f457600080fd5b50565b6115008161120c565b811461150b57600080fd5b50565b6115178161121e565b811461152257600080fd5b50565b61152e81611230565b811461153957600080fd5b50565b61154581611242565b811461155057600080fd5b50565b61155c81611254565b811461156757600080fd5b50565b61157381611286565b811461157e57600080fd5b5056fea2646970667358221220efd0592026bcb7b3f08107154e328fc6ce40680b2db443c26408a26494342aae64736f6c63430008010033";
