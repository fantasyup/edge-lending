/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { FeeWithdrawal } from "../FeeWithdrawal";

export class FeeWithdrawal__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _vault: string,
    _receiver: string,
    _edgeToken: string,
    _wethAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FeeWithdrawal> {
    return super.deploy(
      _vault,
      _receiver,
      _edgeToken,
      _wethAddress,
      overrides || {}
    ) as Promise<FeeWithdrawal>;
  }
  getDeployTransaction(
    _vault: string,
    _receiver: string,
    _edgeToken: string,
    _wethAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _vault,
      _receiver,
      _edgeToken,
      _wethAddress,
      overrides || {}
    );
  }
  attach(address: string): FeeWithdrawal {
    return super.attach(address) as FeeWithdrawal;
  }
  connect(signer: Signer): FeeWithdrawal__factory {
    return super.connect(signer) as FeeWithdrawal__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeWithdrawal {
    return new Contract(address, _abi, signerOrProvider) as FeeWithdrawal;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IBSVault",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_edgeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wethAddress",
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
        internalType: "bytes32",
        name: "uuid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    name: "CodeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
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
    name: "LogRescueFunds",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
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
    name: "LogTransferToReceiver",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LogUpdateAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalEdgeReceived",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LogWithSwap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalWithdrawnFees",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LogWithdrawFees",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
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
    name: "WETH",
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
    inputs: [],
    name: "getCodeAddress",
    outputs: [
      {
        internalType: "address",
        name: "codeAddress",
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
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_uniswapV2Router",
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
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "receiver",
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
        name: "_token",
        type: "address",
      },
    ],
    name: "rescueFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "_assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amountOuts",
        type: "uint256[]",
      },
    ],
    name: "swapFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transferToReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapRouter",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
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
        name: "_newAdmin",
        type: "address",
      },
    ],
    name: "updateAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateCode",
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
    name: "edgeToken",
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
        internalType: "contract IBSLendingPair[]",
        name: "_lendingPairs",
        type: "address[]",
      },
    ],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162001e8338038062001e83833981016040819052620000359162000110565b6001600160a01b038416620000675760405162461bcd60e51b81526004016200005e90620001bb565b60405180910390fd5b6001600160a01b038316620000905760405162461bcd60e51b81526004016200005e90620001e2565b6001600160a01b038216620000b95760405162461bcd60e51b81526004016200005e9062000177565b6001600160a01b038116620000e25760405162461bcd60e51b81526004016200005e906200020c565b6001600160601b0319606092831b811660c05290821b811660e05292811b831660a0521b1660805262000268565b6000806000806080858703121562000126578384fd5b845162000133816200024f565b602086015190945062000146816200024f565b604086015190935062000159816200024f565b60608601519092506200016c816200024f565b939692955090935050565b60208082526024908201527f4665655769746864726177616c3a20696e76616c696420746f6b656e206164646040820152637265737360e01b606082015260800190565b6020808252600d908201526c1253959053125117d590555315609a1b604082015260600190565b60208082526010908201526f24a72b20a624a22fa922a1a2a4ab22a960811b604082015260600190565b60208082526023908201527f4665655769746864726177616c3a20696e76616c69642077657468206164647260408201526265737360e81b606082015260800190565b6001600160a01b03811681146200026557600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c611b88620002fb6000396000818161084301528181610f6d01528181610fc701526110f3015260008181610206015281816102a50152818161054f01528181610a300152818161102901526111550152600081816107500152610c580152600081816102d2015281816103720152610c1f0152611b886000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063ad5c464811610097578063f7260d3e11610066578063f7260d3e146101cc578063f851a440146101d4578063fbfa77cf146101dc578063ffa1ad74146101e457610100565b8063ad5c46481461018b578063e2f273bd14610193578063e53a7e53146101a6578063e53b2017146101b957610100565b806352d1902d116100d357806352d1902d14610153578063735de9f714610168578063841b0ae414610170578063a697b8c71461017857610100565b8063462567e714610105578063469519541461010f578063485cc9551461012257806350d75d2514610135575b600080fd5b61010d6101ec565b005b61010d61011d36600461145b565b6103ad565b61010d610130366004611477565b6103f2565b61013d61050b565b60405161014a9190611687565b60405180910390f35b61015b61051a565b60405161014a91906116ef565b61013d61053e565b61013d61054d565b61010d6101863660046114af565b610571565b61013d610841565b61010d6101a136600461145b565b610865565b61010d6101b43660046114ef565b61091c565b61010d6101c736600461145b565b610b0c565b61013d610c1d565b61013d610c41565b61013d610c56565b61015b610c7a565b6040516370a0823160e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319061023b903090600401611687565b60206040518083038186803b15801561025357600080fd5b505afa158015610267573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028b9190611637565b60405163a9059cbb60e01b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906102fc907f00000000000000000000000000000000000000000000000000000000000000009085906004016116b5565b602060405180830381600087803b15801561031657600080fd5b505af115801561032a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034e9190611617565b507f338457a4684788e79ccbc66c13488a5a07301d376e8a808029530c6ab2bab9ad7f000000000000000000000000000000000000000000000000000000000000000082426040516103a2939291906116ce565b60405180910390a150565b6000546201000090046001600160a01b031633146103e65760405162461bcd60e51b81526004016103dd906118bd565b60405180910390fd5b6103ef81610c7f565b50565b600054610100900460ff168061040b575060005460ff16155b6104275760405162461bcd60e51b81526004016103dd906118e1565b600054610100900460ff16158015610452576000805460ff1961ff0019909116610100171660011790555b6001600160a01b0383166104785760405162461bcd60e51b81526004016103dd90611851565b600080546001600160a01b03808616620100000275ffffffffffffffffffffffffffffffffffffffff0000199092169190911790915582166104cc5760405162461bcd60e51b81526004016103dd90611878565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384161790558015610506576000805461ff00191690555b505050565b6000610515610d87565b905090565b7f07cd270f61933e350865397345bb1b522ae60abef5b82005e0416810bab9dfd890565b6001546001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b3332146105905760405162461bcd60e51b81526004016103dd906117e6565b806105ad5760405162461bcd60e51b81526004016103dd906117af565b6000805b828110156108025760008484838181106105db57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906105f0919061145b565b90506000816001600160a01b03166338d52e0f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561062d57600080fd5b505afa158015610641573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610665919061164f565b90506000826001600160a01b0316638f840ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106a257600080fd5b505afa1580156106b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106da9190611637565b604051635e318e0760e01b81529091506001600160a01b03841690635e318e07906107099084906004016116ef565b600060405180830381600087803b15801561072357600080fd5b505af1158015610737573d6000803e3d6000fd5b5050604051630b620b8160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169250630b620b81915061078d90859030908190879060040161170f565b602060405180830381600087803b1580156107a757600080fd5b505af11580156107bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107df9190611637565b506107ea8186611a9b565b945050505080806107fa90611af6565b9150506105b1565b507f0598d944b0857fdf4e919ca5fdee9a77206558c40cfda7b844e1c5c27529ad298142604051610834929190611a1d565b60405180910390a1505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000546201000090046001600160a01b031633146108955760405162461bcd60e51b81526004016103dd906118bd565b6001600160a01b0381166108bb5760405162461bcd60e51b81526004016103dd90611851565b6000805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b038416021790556040517ff271178f5b511b8855b7c1f1222689141a08b906a85b2f25146e7041d6a739f8906103a290839042906116b5565b6000546201000090046001600160a01b0316331461094c5760405162461bcd60e51b81526004016103dd906118bd565b826109695760405162461bcd60e51b81526004016103dd9061193e565b6000805b84811015610acb57600086868381811061099757634e487b7160e01b600052603260045260246000fd5b90506020020160208101906109ac919061145b565b90506000816001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016109dc9190611687565b60206040518083038186803b1580156109f457600080fd5b505afa158015610a08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2c9190611637565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614610aa957610a988282888887818110610a8c57634e487b7160e01b600052603260045260246000fd5b90506020020135610dac565b610aa29085611a9b565b9350610ab6565b610ab38185611a9b565b93505b50508080610ac390611af6565b91505061096d565b507fa435eed83673f8574e95658b0dbb13941f91b0268806b246755e207a200d3ccc8142604051610afd929190611a1d565b60405180910390a15050505050565b6000546201000090046001600160a01b03163314610b3c5760405162461bcd60e51b81526004016103dd906118bd565b6040516370a0823160e01b81526000906001600160a01b038316906370a0823190610b6b903090600401611687565b60206040518083038186803b158015610b8357600080fd5b505afa158015610b97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbb9190611637565b600054909150610bde906001600160a01b03848116916201000090041683610ec2565b7fc2621a57d424224d81e154ec2a00d959ba416d8464b094d5e38ca1b93b5c801d828242604051610c11939291906116ce565b60405180910390a15050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000546201000090046001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600181565b6000610c89610d87565b6001600160a01b03161415610cb05760405162461bcd60e51b81526004016103dd90611965565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ce957600080fd5b505afa158015610cfd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d219190611637565b610d2961051a565b14610d465760405162461bcd60e51b81526004016103dd9061176c565b610d4f81610f45565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc610d7861051a565b826040516103a29291906116f8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b600080610db885610f69565b600154909150610dd5906001600160a01b038781169116866111bb565b6001546040516338ed173960e01b81526000916001600160a01b0316906338ed173990610e299088908890879030907a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000090600401611a2b565b600060405180830381600087803b158015610e4357600080fd5b505af1158015610e57573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e7f9190810190611558565b90508060018251610e909190611ab3565b81518110610eae57634e487b7160e01b600052603260045260246000fd5b6020026020010151925050505b9392505050565b6105068363a9059cbb60e01b8484604051602401610ee19291906116b5565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261126d565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316141561108e5760408051600280825260608201835290916020830190803683370190505090507f00000000000000000000000000000000000000000000000000000000000000008160008151811061100757634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061106957634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250506111b6565b60408051600380825260808201909252906020820160608036833701905050905081816000815181106110d157634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061113357634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160028151811061119557634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250505b919050565b600081846001600160a01b031663dd62ed3e30866040518363ffffffff1660e01b81526004016111ec92919061169b565b60206040518083038186803b15801561120457600080fd5b505afa158015611218573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123c9190611637565b6112469190611a9b565b90506112678463095ea7b360e01b8584604051602401610ee19291906116b5565b50505050565b60006112c2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112fc9092919063ffffffff16565b80519091501561050657808060200190518101906112e09190611617565b6105065760405162461bcd60e51b81526004016103dd906119d3565b606061130b8484600085611313565b949350505050565b6060824710156113355760405162461bcd60e51b81526004016103dd9061180b565b61133e856113d3565b61135a5760405162461bcd60e51b81526004016103dd9061199c565b600080866001600160a01b03168587604051611376919061166b565b60006040518083038185875af1925050503d80600081146113b3576040519150601f19603f3d011682016040523d82523d6000602084013e6113b8565b606091505b50915091506113c88282866113d9565b979650505050505050565b3b151590565b606083156113e8575081610ebb565b8251156113f85782518084602001fd5b8160405162461bcd60e51b81526004016103dd9190611739565b60008083601f840112611423578081fd5b50813567ffffffffffffffff81111561143a578182fd5b602083019150836020808302850101111561145457600080fd5b9250929050565b60006020828403121561146c578081fd5b8135610ebb81611b3d565b60008060408385031215611489578081fd5b823561149481611b3d565b915060208301356114a481611b3d565b809150509250929050565b600080602083850312156114c1578182fd5b823567ffffffffffffffff8111156114d7578283fd5b6114e385828601611412565b90969095509350505050565b60008060008060408587031215611504578182fd5b843567ffffffffffffffff8082111561151b578384fd5b61152788838901611412565b9096509450602087013591508082111561153f578384fd5b5061154c87828801611412565b95989497509550505050565b6000602080838503121561156a578182fd5b825167ffffffffffffffff80821115611581578384fd5b818501915085601f830112611594578384fd5b8151818111156115a6576115a6611b27565b838102604051601f19603f830116810181811085821117156115ca576115ca611b27565b604052828152858101935084860182860187018a10156115e8578788fd5b8795505b8386101561160a5780518552600195909501949386019386016115ec565b5098975050505050505050565b600060208284031215611628578081fd5b81518015158114610ebb578182fd5b600060208284031215611648578081fd5b5051919050565b600060208284031215611660578081fd5b8151610ebb81611b3d565b6000825161167d818460208701611aca565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039390931683526020830191909152604082015260600190565b90815260200190565b9182526001600160a01b0316602082015260400190565b6001600160a01b039485168152928416602084015292166040820152606081019190915260800190565b6000602082528251806020840152611758816040850160208701611aca565b601f01601f19169190910160400192915050565b60208082526023908201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60408201526267696360e81b606082015260800190565b60208082526013908201527f6c656e64696e6750616972732e6c656e67746800000000000000000000000000604082015260600190565b6020808252600b908201526a4d5553545f42455f454f4160a81b604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b6020808252600d908201526c24a72b20a624a22fa0a226a4a760991b604082015260600190565b60208082526025908201527f4665655769746864726177616c3a20696e76616c696420726f75746572206164604082015264647265737360d81b606082015260800190565b6020808252600a908201526927a7262cafa0a226a4a760b11b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252600d908201526c0c2e6e6cae8e65cd8cadccee8d609b1b604082015260600190565b6020808252601d908201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b918252602082015260400190565b600060a082018783526020878185015260a0604085015281875180845260c0860191508289019350845b81811015611a7a5784516001600160a01b031683529383019391830191600101611a55565b50506001600160a01b03969096166060850152505050608001529392505050565b60008219821115611aae57611aae611b11565b500190565b600082821015611ac557611ac5611b11565b500390565b60005b83811015611ae5578181015183820152602001611acd565b838111156112675750506000910152565b6000600019821415611b0a57611b0a611b11565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146103ef57600080fdfea264697066735822122087bea4289f38b3e22493e2c7bd4d972d4670bd39f7b778c27940bbc218f713b464736f6c63430008010033";
