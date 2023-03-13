/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  EtherStore,
  EtherStoreInterface,
} from "../../contracts/EtherStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610225806100206000396000f3fe60806040526004361061003f5760003560e01c806312065fe01461004457806327e235e3146100655780633ccfd60b14610092578063d0e30db0146100a9575b600080fd5b34801561005057600080fd5b50475b60405190815260200160405180910390f35b34801561007157600080fd5b50610053610080366004610198565b60006020819052908152604090205481565b34801561009e57600080fd5b506100a76100b1565b005b6100a7610172565b33600090815260208190526040902054806100cb57600080fd5b604051600090339083908381818185875af1925050503d806000811461010d576040519150601f19603f3d011682016040523d82523d6000602084013e610112565b606091505b505090508061015e5760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321022ba3432b960611b604482015260640160405180910390fd5b505033600090815260208190526040812055565b33600090815260208190526040812080543492906101919084906101c8565b9091555050565b6000602082840312156101aa57600080fd5b81356001600160a01b03811681146101c157600080fd5b9392505050565b808201808211156101e957634e487b7160e01b600052601160045260246000fd5b9291505056fea2646970667358221220f0bcddc4c24bb897a942009d9d49917eb8570c257616c0a28e1899823230a1f564736f6c63430008110033";

type EtherStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EtherStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EtherStore__factory extends ContractFactory {
  constructor(...args: EtherStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EtherStore> {
    return super.deploy(overrides || {}) as Promise<EtherStore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EtherStore {
    return super.attach(address) as EtherStore;
  }
  override connect(signer: Signer): EtherStore__factory {
    return super.connect(signer) as EtherStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EtherStoreInterface {
    return new utils.Interface(_abi) as EtherStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EtherStore {
    return new Contract(address, _abi, signerOrProvider) as EtherStore;
  }
}