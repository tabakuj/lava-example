import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface EpochPayments {
  index: string;
  providerPaymentStorageKeys: string[];
}
export interface EpochPaymentsSDKType {
  index: string;
  providerPaymentStorageKeys: string[];
}
function createBaseEpochPayments(): EpochPayments {
  return {
    index: "",
    providerPaymentStorageKeys: []
  };
}
export const EpochPayments = {
  encode(message: EpochPayments, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.providerPaymentStorageKeys) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EpochPayments {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochPayments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.providerPaymentStorageKeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EpochPayments>): EpochPayments {
    const message = createBaseEpochPayments();
    message.index = object.index ?? "";
    message.providerPaymentStorageKeys = object.providerPaymentStorageKeys?.map(e => e) || [];
    return message;
  }
};