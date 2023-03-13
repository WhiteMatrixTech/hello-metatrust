/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface TargetInterface extends utils.Interface {
  functions: {
    "isContract(address)": FunctionFragment;
    "protected()": FunctionFragment;
    "pwned()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "isContract" | "protected" | "pwned"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isContract",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "protected", values?: undefined): string;
  encodeFunctionData(functionFragment: "pwned", values?: undefined): string;

  decodeFunctionResult(functionFragment: "isContract", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "protected", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pwned", data: BytesLike): Result;

  events: {};
}

export interface Target extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TargetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isContract(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    protected(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pwned(overrides?: CallOverrides): Promise<[boolean]>;
  };

  isContract(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  protected(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pwned(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    isContract(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    protected(overrides?: CallOverrides): Promise<void>;

    pwned(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    isContract(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protected(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pwned(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    isContract(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protected(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pwned(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
