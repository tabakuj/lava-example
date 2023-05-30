import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ProviderPaymentStorage {
  index: string;
  epoch: Long;
  uniquePaymentStorageClientProviderKeys: string[];
  /** total CU that were supposed to be served by the provider but didn't because he was unavailable (so consumers complained about him) */
  complainersTotalCu: Long;
}
export interface ProviderPaymentStorageSDKType {
  index: string;
  epoch: Long;
  uniquePaymentStorageClientProviderKeys: string[];
  complainersTotalCu: Long;
}
function createBaseProviderPaymentStorage(): ProviderPaymentStorage {
  return {
    index: "",
    epoch: Long.UZERO,
    uniquePaymentStorageClientProviderKeys: [],
    complainersTotalCu: Long.UZERO
  };
}
export const ProviderPaymentStorage = {
  encode(message: ProviderPaymentStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(24).uint64(message.epoch);
    }
    for (const v of message.uniquePaymentStorageClientProviderKeys) {
      writer.uint32(42).string(v!);
    }
    if (!message.complainersTotalCu.isZero()) {
      writer.uint32(48).uint64(message.complainersTotalCu);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderPaymentStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderPaymentStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.epoch = (reader.uint64() as Long);
          break;
        case 5:
          message.uniquePaymentStorageClientProviderKeys.push(reader.string());
          break;
        case 6:
          message.complainersTotalCu = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProviderPaymentStorage>): ProviderPaymentStorage {
    const message = createBaseProviderPaymentStorage();
    message.index = object.index ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.uniquePaymentStorageClientProviderKeys = object.uniquePaymentStorageClientProviderKeys?.map(e => e) || [];
    message.complainersTotalCu = object.complainersTotalCu !== undefined && object.complainersTotalCu !== null ? Long.fromValue(object.complainersTotalCu) : Long.UZERO;
    return message;
  }
};