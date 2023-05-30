import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
  geolocationCount: Long;
  maxCU: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  geolocationCount: Long;
  maxCU: Long;
}
function createBaseParams(): Params {
  return {
    geolocationCount: Long.UZERO,
    maxCU: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.geolocationCount.isZero()) {
      writer.uint32(8).uint64(message.geolocationCount);
    }
    if (!message.maxCU.isZero()) {
      writer.uint32(16).uint64(message.maxCU);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.geolocationCount = (reader.uint64() as Long);
          break;
        case 2:
          message.maxCU = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      geolocationCount: isSet(object.geolocationCount) ? Long.fromValue(object.geolocationCount) : Long.UZERO,
      maxCU: isSet(object.maxCU) ? Long.fromValue(object.maxCU) : Long.UZERO
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.geolocationCount !== undefined && (obj.geolocationCount = (message.geolocationCount || Long.UZERO).toString());
    message.maxCU !== undefined && (obj.maxCU = (message.maxCU || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.geolocationCount = object.geolocationCount !== undefined && object.geolocationCount !== null ? Long.fromValue(object.geolocationCount) : Long.UZERO;
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? Long.fromValue(object.maxCU) : Long.UZERO;
    return message;
  }
};