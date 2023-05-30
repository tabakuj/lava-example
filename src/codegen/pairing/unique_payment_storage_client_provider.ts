import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface UniquePaymentStorageClientProvider {
  index: string;
  block: Long;
  usedCU: Long;
}
export interface UniquePaymentStorageClientProviderSDKType {
  index: string;
  block: Long;
  usedCU: Long;
}
function createBaseUniquePaymentStorageClientProvider(): UniquePaymentStorageClientProvider {
  return {
    index: "",
    block: Long.UZERO,
    usedCU: Long.UZERO
  };
}
export const UniquePaymentStorageClientProvider = {
  encode(message: UniquePaymentStorageClientProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (!message.block.isZero()) {
      writer.uint32(16).uint64(message.block);
    }
    if (!message.usedCU.isZero()) {
      writer.uint32(24).uint64(message.usedCU);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UniquePaymentStorageClientProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniquePaymentStorageClientProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.block = (reader.uint64() as Long);
          break;
        case 3:
          message.usedCU = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UniquePaymentStorageClientProvider>): UniquePaymentStorageClientProvider {
    const message = createBaseUniquePaymentStorageClientProvider();
    message.index = object.index ?? "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.usedCU = object.usedCU !== undefined && object.usedCU !== null ? Long.fromValue(object.usedCU) : Long.UZERO;
    return message;
  }
};