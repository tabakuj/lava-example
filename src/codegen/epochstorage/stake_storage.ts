import { StakeEntry, StakeEntrySDKType } from "./stake_entry";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface StakeStorage {
  index: string;
  stakeEntries: StakeEntry[];
  epochBlockHash: Uint8Array;
}
export interface StakeStorageSDKType {
  index: string;
  stakeEntries: StakeEntrySDKType[];
  epochBlockHash: Uint8Array;
}
function createBaseStakeStorage(): StakeStorage {
  return {
    index: "",
    stakeEntries: [],
    epochBlockHash: new Uint8Array()
  };
}
export const StakeStorage = {
  encode(message: StakeStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.stakeEntries) {
      StakeEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochBlockHash.length !== 0) {
      writer.uint32(26).bytes(message.epochBlockHash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StakeStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.stakeEntries.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.epochBlockHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StakeStorage>): StakeStorage {
    const message = createBaseStakeStorage();
    message.index = object.index ?? "";
    message.stakeEntries = object.stakeEntries?.map(e => StakeEntry.fromPartial(e)) || [];
    message.epochBlockHash = object.epochBlockHash ?? new Uint8Array();
    return message;
  }
};