import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Endpoint {
  iPPORT: string;
  useType: string;
  geolocation: Long;
}
export interface EndpointSDKType {
  iPPORT: string;
  useType: string;
  geolocation: Long;
}
function createBaseEndpoint(): Endpoint {
  return {
    iPPORT: "",
    useType: "",
    geolocation: Long.UZERO
  };
}
export const Endpoint = {
  encode(message: Endpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iPPORT !== "") {
      writer.uint32(10).string(message.iPPORT);
    }
    if (message.useType !== "") {
      writer.uint32(18).string(message.useType);
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(24).uint64(message.geolocation);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iPPORT = reader.string();
          break;
        case 2:
          message.useType = reader.string();
          break;
        case 3:
          message.geolocation = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Endpoint>): Endpoint {
    const message = createBaseEndpoint();
    message.iPPORT = object.iPPORT ?? "";
    message.useType = object.useType ?? "";
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? Long.fromValue(object.geolocation) : Long.UZERO;
    return message;
  }
};