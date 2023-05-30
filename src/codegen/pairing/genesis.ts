import { Params, ParamsSDKType } from "./params";
import { UniquePaymentStorageClientProvider, UniquePaymentStorageClientProviderSDKType } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage, ProviderPaymentStorageSDKType } from "./provider_payment_storage";
import { EpochPayments, EpochPaymentsSDKType } from "./epoch_payments";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** GenesisState defines the pairing module's genesis state. */
export interface GenesisState {
  params?: Params;
  uniquePaymentStorageClientProviderList: UniquePaymentStorageClientProvider[];
  providerPaymentStorageList: ProviderPaymentStorage[];
  epochPaymentsList: EpochPayments[];
}
/** GenesisState defines the pairing module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  uniquePaymentStorageClientProviderList: UniquePaymentStorageClientProviderSDKType[];
  providerPaymentStorageList: ProviderPaymentStorageSDKType[];
  epochPaymentsList: EpochPaymentsSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    uniquePaymentStorageClientProviderList: [],
    providerPaymentStorageList: [],
    epochPaymentsList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uniquePaymentStorageClientProviderList) {
      UniquePaymentStorageClientProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.providerPaymentStorageList) {
      ProviderPaymentStorage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.epochPaymentsList) {
      EpochPayments.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.uniquePaymentStorageClientProviderList.push(UniquePaymentStorageClientProvider.decode(reader, reader.uint32()));
          break;
        case 3:
          message.providerPaymentStorageList.push(ProviderPaymentStorage.decode(reader, reader.uint32()));
          break;
        case 4:
          message.epochPaymentsList.push(EpochPayments.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.uniquePaymentStorageClientProviderList = object.uniquePaymentStorageClientProviderList?.map(e => UniquePaymentStorageClientProvider.fromPartial(e)) || [];
    message.providerPaymentStorageList = object.providerPaymentStorageList?.map(e => ProviderPaymentStorage.fromPartial(e)) || [];
    message.epochPaymentsList = object.epochPaymentsList?.map(e => EpochPayments.fromPartial(e)) || [];
    return message;
  }
};