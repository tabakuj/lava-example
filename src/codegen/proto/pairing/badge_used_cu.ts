import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BadgeUsedCu {
  badgeUsedCuKey: Uint8Array;
  usedCu: Long;
}
export interface BadgeUsedCuSDKType {
  badgeUsedCuKey: Uint8Array;
  usedCu: Long;
}
function createBaseBadgeUsedCu(): BadgeUsedCu {
  return {
    badgeUsedCuKey: new Uint8Array(),
    usedCu: Long.UZERO
  };
}
export const BadgeUsedCu = {
  encode(message: BadgeUsedCu, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.badgeUsedCuKey.length !== 0) {
      writer.uint32(10).bytes(message.badgeUsedCuKey);
    }
    if (!message.usedCu.isZero()) {
      writer.uint32(16).uint64(message.usedCu);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BadgeUsedCu {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadgeUsedCu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badgeUsedCuKey = reader.bytes();
          break;
        case 2:
          message.usedCu = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BadgeUsedCu>): BadgeUsedCu {
    const message = createBaseBadgeUsedCu();
    message.badgeUsedCuKey = object.badgeUsedCuKey ?? new Uint8Array();
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? Long.fromValue(object.usedCu) : Long.UZERO;
    return message;
  }
};