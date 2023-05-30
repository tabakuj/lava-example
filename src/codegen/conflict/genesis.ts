import { Params, ParamsSDKType } from "./params";
import { ConflictVote, ConflictVoteSDKType } from "./conflict_vote";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** GenesisState defines the conflict module's genesis state. */
export interface GenesisState {
  params?: Params;
  conflictVoteList: ConflictVote[];
}
/** GenesisState defines the conflict module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  conflictVoteList: ConflictVoteSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    conflictVoteList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.conflictVoteList) {
      ConflictVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.conflictVoteList.push(ConflictVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      conflictVoteList: Array.isArray(object?.conflictVoteList) ? object.conflictVoteList.map((e: any) => ConflictVote.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.conflictVoteList) {
      obj.conflictVoteList = message.conflictVoteList.map(e => e ? ConflictVote.toJSON(e) : undefined);
    } else {
      obj.conflictVoteList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.conflictVoteList = object.conflictVoteList?.map(e => ConflictVote.fromPartial(e)) || [];
    return message;
  }
};