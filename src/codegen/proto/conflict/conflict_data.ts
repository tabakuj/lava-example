import { RelayRequest, RelayRequestSDKType, RelayReply, RelayReplySDKType } from "../../pairing/relay";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface ResponseConflict {
  conflictRelayData0?: ConflictRelayData;
  conflictRelayData1?: ConflictRelayData;
}
export interface ResponseConflictSDKType {
  conflictRelayData0?: ConflictRelayDataSDKType;
  conflictRelayData1?: ConflictRelayDataSDKType;
}
export interface ConflictRelayData {
  request?: RelayRequest;
  reply?: RelayReply;
}
export interface ConflictRelayDataSDKType {
  request?: RelayRequestSDKType;
  reply?: RelayReplySDKType;
}
export interface FinalizationConflict {
  relayReply0?: RelayReply;
  relayReply1?: RelayReply;
}
export interface FinalizationConflictSDKType {
  relayReply0?: RelayReplySDKType;
  relayReply1?: RelayReplySDKType;
}
function createBaseResponseConflict(): ResponseConflict {
  return {
    conflictRelayData0: undefined,
    conflictRelayData1: undefined
  };
}
export const ResponseConflict = {
  encode(message: ResponseConflict, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conflictRelayData0 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData0, writer.uint32(10).fork()).ldelim();
    }
    if (message.conflictRelayData1 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseConflict {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseConflict();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictRelayData0 = ConflictRelayData.decode(reader, reader.uint32());
          break;
        case 2:
          message.conflictRelayData1 = ConflictRelayData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseConflict>): ResponseConflict {
    const message = createBaseResponseConflict();
    message.conflictRelayData0 = object.conflictRelayData0 !== undefined && object.conflictRelayData0 !== null ? ConflictRelayData.fromPartial(object.conflictRelayData0) : undefined;
    message.conflictRelayData1 = object.conflictRelayData1 !== undefined && object.conflictRelayData1 !== null ? ConflictRelayData.fromPartial(object.conflictRelayData1) : undefined;
    return message;
  }
};
function createBaseConflictRelayData(): ConflictRelayData {
  return {
    request: undefined,
    reply: undefined
  };
}
export const ConflictRelayData = {
  encode(message: ConflictRelayData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.reply !== undefined) {
      RelayReply.encode(message.reply, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConflictRelayData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConflictRelayData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = RelayRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.reply = RelayReply.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConflictRelayData>): ConflictRelayData {
    const message = createBaseConflictRelayData();
    message.request = object.request !== undefined && object.request !== null ? RelayRequest.fromPartial(object.request) : undefined;
    message.reply = object.reply !== undefined && object.reply !== null ? RelayReply.fromPartial(object.reply) : undefined;
    return message;
  }
};
function createBaseFinalizationConflict(): FinalizationConflict {
  return {
    relayReply0: undefined,
    relayReply1: undefined
  };
}
export const FinalizationConflict = {
  encode(message: FinalizationConflict, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayReply0 !== undefined) {
      RelayReply.encode(message.relayReply0, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayReply1 !== undefined) {
      RelayReply.encode(message.relayReply1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FinalizationConflict {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizationConflict();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayReply0 = RelayReply.decode(reader, reader.uint32());
          break;
        case 2:
          message.relayReply1 = RelayReply.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FinalizationConflict>): FinalizationConflict {
    const message = createBaseFinalizationConflict();
    message.relayReply0 = object.relayReply0 !== undefined && object.relayReply0 !== null ? RelayReply.fromPartial(object.relayReply0) : undefined;
    message.relayReply1 = object.relayReply1 !== undefined && object.relayReply1 !== null ? RelayReply.fromPartial(object.relayReply1) : undefined;
    return message;
  }
};