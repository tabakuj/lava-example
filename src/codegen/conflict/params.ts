import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
  majorityPercent: string;
  voteStartSpan: Long;
  votePeriod: Long;
  Rewards?: Rewards;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  majorityPercent: string;
  voteStartSpan: Long;
  votePeriod: Long;
  Rewards?: RewardsSDKType;
}
export interface Rewards {
  winnerRewardPercent: string;
  clientRewardPercent: string;
  votersRewardPercent: string;
}
export interface RewardsSDKType {
  winnerRewardPercent: string;
  clientRewardPercent: string;
  votersRewardPercent: string;
}
function createBaseParams(): Params {
  return {
    majorityPercent: "",
    voteStartSpan: Long.UZERO,
    votePeriod: Long.UZERO,
    Rewards: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.majorityPercent !== "") {
      writer.uint32(10).string(message.majorityPercent);
    }
    if (!message.voteStartSpan.isZero()) {
      writer.uint32(16).uint64(message.voteStartSpan);
    }
    if (!message.votePeriod.isZero()) {
      writer.uint32(24).uint64(message.votePeriod);
    }
    if (message.Rewards !== undefined) {
      Rewards.encode(message.Rewards, writer.uint32(34).fork()).ldelim();
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
          message.majorityPercent = reader.string();
          break;
        case 2:
          message.voteStartSpan = (reader.uint64() as Long);
          break;
        case 3:
          message.votePeriod = (reader.uint64() as Long);
          break;
        case 4:
          message.Rewards = Rewards.decode(reader, reader.uint32());
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
      majorityPercent: isSet(object.majorityPercent) ? String(object.majorityPercent) : "",
      voteStartSpan: isSet(object.voteStartSpan) ? Long.fromValue(object.voteStartSpan) : Long.UZERO,
      votePeriod: isSet(object.votePeriod) ? Long.fromValue(object.votePeriod) : Long.UZERO,
      Rewards: isSet(object.Rewards) ? Rewards.fromJSON(object.Rewards) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.majorityPercent !== undefined && (obj.majorityPercent = message.majorityPercent);
    message.voteStartSpan !== undefined && (obj.voteStartSpan = (message.voteStartSpan || Long.UZERO).toString());
    message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || Long.UZERO).toString());
    message.Rewards !== undefined && (obj.Rewards = message.Rewards ? Rewards.toJSON(message.Rewards) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.majorityPercent = object.majorityPercent ?? "";
    message.voteStartSpan = object.voteStartSpan !== undefined && object.voteStartSpan !== null ? Long.fromValue(object.voteStartSpan) : Long.UZERO;
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? Long.fromValue(object.votePeriod) : Long.UZERO;
    message.Rewards = object.Rewards !== undefined && object.Rewards !== null ? Rewards.fromPartial(object.Rewards) : undefined;
    return message;
  }
};
function createBaseRewards(): Rewards {
  return {
    winnerRewardPercent: "",
    clientRewardPercent: "",
    votersRewardPercent: ""
  };
}
export const Rewards = {
  encode(message: Rewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.winnerRewardPercent !== "") {
      writer.uint32(10).string(message.winnerRewardPercent);
    }
    if (message.clientRewardPercent !== "") {
      writer.uint32(18).string(message.clientRewardPercent);
    }
    if (message.votersRewardPercent !== "") {
      writer.uint32(26).string(message.votersRewardPercent);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Rewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winnerRewardPercent = reader.string();
          break;
        case 2:
          message.clientRewardPercent = reader.string();
          break;
        case 3:
          message.votersRewardPercent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Rewards {
    return {
      winnerRewardPercent: isSet(object.winnerRewardPercent) ? String(object.winnerRewardPercent) : "",
      clientRewardPercent: isSet(object.clientRewardPercent) ? String(object.clientRewardPercent) : "",
      votersRewardPercent: isSet(object.votersRewardPercent) ? String(object.votersRewardPercent) : ""
    };
  },
  toJSON(message: Rewards): unknown {
    const obj: any = {};
    message.winnerRewardPercent !== undefined && (obj.winnerRewardPercent = message.winnerRewardPercent);
    message.clientRewardPercent !== undefined && (obj.clientRewardPercent = message.clientRewardPercent);
    message.votersRewardPercent !== undefined && (obj.votersRewardPercent = message.votersRewardPercent);
    return obj;
  },
  fromPartial(object: Partial<Rewards>): Rewards {
    const message = createBaseRewards();
    message.winnerRewardPercent = object.winnerRewardPercent ?? "";
    message.clientRewardPercent = object.clientRewardPercent ?? "";
    message.votersRewardPercent = object.votersRewardPercent ?? "";
    return message;
  }
};