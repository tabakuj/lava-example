import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface FixatedParams {
  index: string;
  parameter: Uint8Array;
  fixationBlock: Long;
}
export interface FixatedParamsSDKType {
  index: string;
  parameter: Uint8Array;
  fixationBlock: Long;
}
function createBaseFixatedParams(): FixatedParams {
  return {
    index: "",
    parameter: new Uint8Array(),
    fixationBlock: Long.UZERO
  };
}
export const FixatedParams = {
  encode(message: FixatedParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.parameter.length !== 0) {
      writer.uint32(18).bytes(message.parameter);
    }
    if (!message.fixationBlock.isZero()) {
      writer.uint32(24).uint64(message.fixationBlock);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FixatedParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixatedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.parameter = reader.bytes();
          break;
        case 3:
          message.fixationBlock = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FixatedParams>): FixatedParams {
    const message = createBaseFixatedParams();
    message.index = object.index ?? "";
    message.parameter = object.parameter ?? new Uint8Array();
    message.fixationBlock = object.fixationBlock !== undefined && object.fixationBlock !== null ? Long.fromValue(object.fixationBlock) : Long.UZERO;
    return message;
  }
};