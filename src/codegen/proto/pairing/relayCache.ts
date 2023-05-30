import { RelayRequest, RelayRequestSDKType, RelayReply, RelayReplySDKType } from "../../pairing/relay";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CacheUsage {
  CacheHits: Long;
  CacheMisses: Long;
}
export interface CacheUsageSDKType {
  CacheHits: Long;
  CacheMisses: Long;
}
export interface RelayCacheGet {
  request?: RelayRequest;
  apiInterface: string;
  blockHash: Uint8Array;
  /** Used to differentiate between different chains so each has its own bucket */
  chainID: string;
  finalized: boolean;
}
export interface RelayCacheGetSDKType {
  request?: RelayRequestSDKType;
  apiInterface: string;
  blockHash: Uint8Array;
  chainID: string;
  finalized: boolean;
}
export interface RelayCacheSet {
  request?: RelayRequest;
  apiInterface: string;
  blockHash: Uint8Array;
  /** Used to differentiate between different chains so each has its own bucket */
  chainID: string;
  /** bucketID is used to make sure a big user doesnt flood the cache, on providers this will be consumer address, on portal it will be dappID */
  bucketID: string;
  response?: RelayReply;
  finalized: boolean;
}
export interface RelayCacheSetSDKType {
  request?: RelayRequestSDKType;
  apiInterface: string;
  blockHash: Uint8Array;
  chainID: string;
  bucketID: string;
  response?: RelayReplySDKType;
  finalized: boolean;
}
function createBaseCacheUsage(): CacheUsage {
  return {
    CacheHits: Long.UZERO,
    CacheMisses: Long.UZERO
  };
}
export const CacheUsage = {
  encode(message: CacheUsage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.CacheHits.isZero()) {
      writer.uint32(8).uint64(message.CacheHits);
    }
    if (!message.CacheMisses.isZero()) {
      writer.uint32(16).uint64(message.CacheMisses);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CacheUsage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CacheHits = (reader.uint64() as Long);
          break;
        case 2:
          message.CacheMisses = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CacheUsage>): CacheUsage {
    const message = createBaseCacheUsage();
    message.CacheHits = object.CacheHits !== undefined && object.CacheHits !== null ? Long.fromValue(object.CacheHits) : Long.UZERO;
    message.CacheMisses = object.CacheMisses !== undefined && object.CacheMisses !== null ? Long.fromValue(object.CacheMisses) : Long.UZERO;
    return message;
  }
};
function createBaseRelayCacheGet(): RelayCacheGet {
  return {
    request: undefined,
    apiInterface: "",
    blockHash: new Uint8Array(),
    chainID: "",
    finalized: false
  };
}
export const RelayCacheGet = {
  encode(message: RelayCacheGet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.apiInterface !== "") {
      writer.uint32(18).string(message.apiInterface);
    }
    if (message.blockHash.length !== 0) {
      writer.uint32(26).bytes(message.blockHash);
    }
    if (message.chainID !== "") {
      writer.uint32(34).string(message.chainID);
    }
    if (message.finalized === true) {
      writer.uint32(40).bool(message.finalized);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RelayCacheGet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayCacheGet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = RelayRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.apiInterface = reader.string();
          break;
        case 3:
          message.blockHash = reader.bytes();
          break;
        case 4:
          message.chainID = reader.string();
          break;
        case 5:
          message.finalized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RelayCacheGet>): RelayCacheGet {
    const message = createBaseRelayCacheGet();
    message.request = object.request !== undefined && object.request !== null ? RelayRequest.fromPartial(object.request) : undefined;
    message.apiInterface = object.apiInterface ?? "";
    message.blockHash = object.blockHash ?? new Uint8Array();
    message.chainID = object.chainID ?? "";
    message.finalized = object.finalized ?? false;
    return message;
  }
};
function createBaseRelayCacheSet(): RelayCacheSet {
  return {
    request: undefined,
    apiInterface: "",
    blockHash: new Uint8Array(),
    chainID: "",
    bucketID: "",
    response: undefined,
    finalized: false
  };
}
export const RelayCacheSet = {
  encode(message: RelayCacheSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.apiInterface !== "") {
      writer.uint32(18).string(message.apiInterface);
    }
    if (message.blockHash.length !== 0) {
      writer.uint32(26).bytes(message.blockHash);
    }
    if (message.chainID !== "") {
      writer.uint32(34).string(message.chainID);
    }
    if (message.bucketID !== "") {
      writer.uint32(42).string(message.bucketID);
    }
    if (message.response !== undefined) {
      RelayReply.encode(message.response, writer.uint32(50).fork()).ldelim();
    }
    if (message.finalized === true) {
      writer.uint32(56).bool(message.finalized);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RelayCacheSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayCacheSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = RelayRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.apiInterface = reader.string();
          break;
        case 3:
          message.blockHash = reader.bytes();
          break;
        case 4:
          message.chainID = reader.string();
          break;
        case 5:
          message.bucketID = reader.string();
          break;
        case 6:
          message.response = RelayReply.decode(reader, reader.uint32());
          break;
        case 7:
          message.finalized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RelayCacheSet>): RelayCacheSet {
    const message = createBaseRelayCacheSet();
    message.request = object.request !== undefined && object.request !== null ? RelayRequest.fromPartial(object.request) : undefined;
    message.apiInterface = object.apiInterface ?? "";
    message.blockHash = object.blockHash ?? new Uint8Array();
    message.chainID = object.chainID ?? "";
    message.bucketID = object.bucketID ?? "";
    message.response = object.response !== undefined && object.response !== null ? RelayReply.fromPartial(object.response) : undefined;
    message.finalized = object.finalized ?? false;
    return message;
  }
};