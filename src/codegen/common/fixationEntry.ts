import { Long, isSet, bytesFromBase64, base64FromBytes } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Entry {
  /** unique entry index (i.e. list key) */
  index: string;
  /** block when the entry was created */
  block: Long;
  /** block when the entry becomes stale */
  staleAt: Long;
  /** reference count */
  refcount: Long;
  /** the data saved in the entry */
  data: Uint8Array;
}
export interface EntrySDKType {
  index: string;
  block: Long;
  stale_at: Long;
  refcount: Long;
  data: Uint8Array;
}
function createBaseEntry(): Entry {
  return {
    index: "",
    block: Long.UZERO,
    staleAt: Long.UZERO,
    refcount: Long.UZERO,
    data: new Uint8Array()
  };
}
export const Entry = {
  encode(message: Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (!message.block.isZero()) {
      writer.uint32(16).uint64(message.block);
    }
    if (!message.staleAt.isZero()) {
      writer.uint32(24).uint64(message.staleAt);
    }
    if (!message.refcount.isZero()) {
      writer.uint32(32).uint64(message.refcount);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
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
          message.staleAt = (reader.uint64() as Long);
          break;
        case 4:
          message.refcount = (reader.uint64() as Long);
          break;
        case 5:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Entry {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO,
      staleAt: isSet(object.staleAt) ? Long.fromValue(object.staleAt) : Long.UZERO,
      refcount: isSet(object.refcount) ? Long.fromValue(object.refcount) : Long.UZERO,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: Entry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    message.staleAt !== undefined && (obj.staleAt = (message.staleAt || Long.UZERO).toString());
    message.refcount !== undefined && (obj.refcount = (message.refcount || Long.UZERO).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<Entry>): Entry {
    const message = createBaseEntry();
    message.index = object.index ?? "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.staleAt = object.staleAt !== undefined && object.staleAt !== null ? Long.fromValue(object.staleAt) : Long.UZERO;
    message.refcount = object.refcount !== undefined && object.refcount !== null ? Long.fromValue(object.refcount) : Long.UZERO;
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};