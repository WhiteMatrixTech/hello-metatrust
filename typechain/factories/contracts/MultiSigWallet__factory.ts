/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MultiSigWallet,
  MultiSigWalletInterface,
} from "../../contracts/MultiSigWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[2]",
        name: "_owners",
        type: "address[2]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "getTxHash",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "owners",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes[2]",
        name: "_sigs",
        type: "bytes[2]",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052604051610952380380610952833981016040819052610022916100bf565b61002f6000826002610036565b5050610153565b826002810192821561007e579160200282015b8281111561007e57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190610049565b5061008a92915061008e565b5090565b5b8082111561008a576000815560010161008f565b80516001600160a01b03811681146100ba57600080fd5b919050565b6000604082840312156100d157600080fd5b82601f8301126100e057600080fd5b604080519081016001600160401b038111828210171561011057634e487b7160e01b600052604160045260246000fd5b806040525080604084018581111561012757600080fd5b845b818110156101485761013a816100a3565b835260209283019201610129565b509195945050505050565b6107f0806101626000396000f3fe60806040526004361061003f5760003560e01c8063025e7c27146100445780639a4b740b14610081578063d0e30db0146100af578063ffb485b8146100b1575b600080fd5b34801561005057600080fd5b5061006461005f366004610590565b6100d1565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561008d57600080fd5b506100a161009c3660046105c5565b6100f1565b604051908152602001610078565b005b3480156100bd57600080fd5b506100af6100cc36600461065f565b610139565b600081600281106100e157600080fd5b01546001600160a01b0316905081565b6040516bffffffffffffffffffffffff19606084901b166020820152603481018290526000906054016040516020818303038152906040528051906020012090505b92915050565b600061014584846100f1565b90506101518282610231565b6101905760405162461bcd60e51b815260206004820152600b60248201526a696e76616c69642073696760a81b60448201526064015b60405180910390fd5b6000846001600160a01b03168460405160006040518083038185875af1925050503d80600081146101dd576040519150601f19603f3d011682016040523d82523d6000602084013e6101e2565b606091505b505090508061022a5760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321022ba3432b960611b6044820152606401610187565b5050505050565b60008061028b836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b905060005b600281101561030b5760006102bc8683600281106102b0576102b0610767565b60200201518490610316565b905060008083600281106102d2576102d2610767565b01546001600160a01b038381169116149050806102f6576000945050505050610133565b505080806103039061077d565b915050610290565b506001949350505050565b6000806000610325858561033a565b915091506103328161037f565b509392505050565b60008082516041036103705760208301516040840151606085015160001a610364878285856104cc565b94509450505050610378565b506000905060025b9250929050565b6000816004811115610393576103936107a4565b0361039b5750565b60018160048111156103af576103af6107a4565b036103fc5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610187565b6002816004811115610410576104106107a4565b0361045d5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610187565b6003816004811115610471576104716107a4565b036104c95760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610187565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156105035750600090506003610587565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610557573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661058057600060019250925050610587565b9150600090505b94509492505050565b6000602082840312156105a257600080fd5b5035919050565b80356001600160a01b03811681146105c057600080fd5b919050565b600080604083850312156105d857600080fd5b6105e1836105a9565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610628576106286105ef565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610657576106576105ef565b604052919050565b60008060006060848603121561067457600080fd5b61067d846105a9565b92506020808501359250604085013567ffffffffffffffff808211156106a257600080fd5b8187019150601f88818401126106b757600080fd5b6106bf610605565b80604085018b8111156106d157600080fd5b855b81811015610755578035868111156106eb5760008081fd5b87018581018e136106fc5760008081fd5b80358781111561070e5761070e6105ef565b61071f818801601f19168b0161062e565b8181528f8b8385010111156107345760008081fd5b818b84018c83013760009181018b01919091528552509287019287016106d3565b50508096505050505050509250925092565b634e487b7160e01b600052603260045260246000fd5b60006001820161079d57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052602160045260246000fdfea26469706673582212200dad22fc49b1796e935abe2fd62ddf8296bfa5f393d2311be5d2c77b6da47e5064736f6c63430008110033";

type MultiSigWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiSigWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiSigWallet__factory extends ContractFactory {
  constructor(...args: MultiSigWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owners: [PromiseOrValue<string>, PromiseOrValue<string>],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<MultiSigWallet> {
    return super.deploy(_owners, overrides || {}) as Promise<MultiSigWallet>;
  }
  override getDeployTransaction(
    _owners: [PromiseOrValue<string>, PromiseOrValue<string>],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owners, overrides || {});
  }
  override attach(address: string): MultiSigWallet {
    return super.attach(address) as MultiSigWallet;
  }
  override connect(signer: Signer): MultiSigWallet__factory {
    return super.connect(signer) as MultiSigWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiSigWalletInterface {
    return new utils.Interface(_abi) as MultiSigWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiSigWallet {
    return new Contract(address, _abi, signerOrProvider) as MultiSigWallet;
  }
}
