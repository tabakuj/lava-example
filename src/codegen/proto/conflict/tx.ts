import { FinalizationConflict, FinalizationConflictSDKType, ResponseConflict, ResponseConflictSDKType } from "../../conflict/conflict_data";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** TODO:: change coin type to another proto (define proto in another file int this directory) */
export interface MsgDetection {
  creator: string;
  finalizationConflict?: FinalizationConflict;
  responseConflict?: ResponseConflict;
  sameProviderConflict?: FinalizationConflict;
}
/** TODO:: change coin type to another proto (define proto in another file int this directory) */
export interface MsgDetectionSDKType {
  creator: string;
  finalizationConflict?: FinalizationConflictSDKType;
  responseConflict?: ResponseConflictSDKType;
  sameProviderConflict?: FinalizationConflictSDKType;
}
export interface MsgDetectionResponse {}
export interface MsgDetectionResponseSDKType {}
export interface MsgConflictVoteCommit {
  creator: string;
  voteID: string;
  hash: Uint8Array;
}
export interface MsgConflictVoteCommitSDKType {
  creator: string;
  voteID: string;
  hash: Uint8Array;
}
export interface MsgConflictVoteCommitResponse {}
export interface MsgConflictVoteCommitResponseSDKType {}
export interface MsgConflictVoteReveal {
  creator: string;
  voteID: string;
  nonce: Long;
  hash: Uint8Array;
}
export interface MsgConflictVoteRevealSDKType {
  creator: string;
  voteID: string;
  nonce: Long;
  hash: Uint8Array;
}
export interface MsgConflictVoteRevealResponse {}
export interface MsgConflictVoteRevealResponseSDKType {}
function createBaseMsgDetection(): MsgDetection {
  return {
    creator: "",
    finalizationConflict: undefined,
    responseConflict: undefined,
    sameProviderConflict: undefined
  };
}
export const MsgDetection = {
  encode(message: MsgDetection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.finalizationConflict !== undefined) {
      FinalizationConflict.encode(message.finalizationConflict, writer.uint32(18).fork()).ldelim();
    }
    if (message.responseConflict !== undefined) {
      ResponseConflict.encode(message.responseConflict, writer.uint32(26).fork()).ldelim();
    }
    if (message.sameProviderConflict !== undefined) {
      FinalizationConflict.encode(message.sameProviderConflict, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDetection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.finalizationConflict = FinalizationConflict.decode(reader, reader.uint32());
          break;
        case 3:
          message.responseConflict = ResponseConflict.decode(reader, reader.uint32());
          break;
        case 4:
          message.sameProviderConflict = FinalizationConflict.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDetection>): MsgDetection {
    const message = createBaseMsgDetection();
    message.creator = object.creator ?? "";
    message.finalizationConflict = object.finalizationConflict !== undefined && object.finalizationConflict !== null ? FinalizationConflict.fromPartial(object.finalizationConflict) : undefined;
    message.responseConflict = object.responseConflict !== undefined && object.responseConflict !== null ? ResponseConflict.fromPartial(object.responseConflict) : undefined;
    message.sameProviderConflict = object.sameProviderConflict !== undefined && object.sameProviderConflict !== null ? FinalizationConflict.fromPartial(object.sameProviderConflict) : undefined;
    return message;
  }
};
function createBaseMsgDetectionResponse(): MsgDetectionResponse {
  return {};
}
export const MsgDetectionResponse = {
  encode(_: MsgDetectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDetectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgDetectionResponse>): MsgDetectionResponse {
    const message = createBaseMsgDetectionResponse();
    return message;
  }
};
function createBaseMsgConflictVoteCommit(): MsgConflictVoteCommit {
  return {
    creator: "",
    voteID: "",
    hash: new Uint8Array()
  };
}
export const MsgConflictVoteCommit = {
  encode(message: MsgConflictVoteCommit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.voteID !== "") {
      writer.uint32(18).string(message.voteID);
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConflictVoteCommit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConflictVoteCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.voteID = reader.string();
          break;
        case 3:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConflictVoteCommit>): MsgConflictVoteCommit {
    const message = createBaseMsgConflictVoteCommit();
    message.creator = object.creator ?? "";
    message.voteID = object.voteID ?? "";
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgConflictVoteCommitResponse(): MsgConflictVoteCommitResponse {
  return {};
}
export const MsgConflictVoteCommitResponse = {
  encode(_: MsgConflictVoteCommitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConflictVoteCommitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConflictVoteCommitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgConflictVoteCommitResponse>): MsgConflictVoteCommitResponse {
    const message = createBaseMsgConflictVoteCommitResponse();
    return message;
  }
};
function createBaseMsgConflictVoteReveal(): MsgConflictVoteReveal {
  return {
    creator: "",
    voteID: "",
    nonce: Long.ZERO,
    hash: new Uint8Array()
  };
}
export const MsgConflictVoteReveal = {
  encode(message: MsgConflictVoteReveal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.voteID !== "") {
      writer.uint32(18).string(message.voteID);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).int64(message.nonce);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConflictVoteReveal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConflictVoteReveal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.voteID = reader.string();
          break;
        case 3:
          message.nonce = (reader.int64() as Long);
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConflictVoteReveal>): MsgConflictVoteReveal {
    const message = createBaseMsgConflictVoteReveal();
    message.creator = object.creator ?? "";
    message.voteID = object.voteID ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.ZERO;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgConflictVoteRevealResponse(): MsgConflictVoteRevealResponse {
  return {};
}
export const MsgConflictVoteRevealResponse = {
  encode(_: MsgConflictVoteRevealResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConflictVoteRevealResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConflictVoteRevealResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgConflictVoteRevealResponse>): MsgConflictVoteRevealResponse {
    const message = createBaseMsgConflictVoteRevealResponse();
    return message;
  }
};