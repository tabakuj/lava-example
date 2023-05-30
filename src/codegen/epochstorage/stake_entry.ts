import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Endpoint, EndpointSDKType } from "./endpoint";
import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface StakeEntry {
  stake?: Coin;
  address: string;
  stakeAppliedBlock: Long;
  endpoints: Endpoint[];
  geolocation: Long;
  chain: string;
  moniker: string;
}
export interface StakeEntrySDKType {
  stake?: CoinSDKType;
  address: string;
  stake_applied_block: Long;
  endpoints: EndpointSDKType[];
  geolocation: Long;
  chain: string;
  moniker: string;
}
function createBaseStakeEntry(): StakeEntry {
  return {
    stake: undefined,
    address: "",
    stakeAppliedBlock: Long.UZERO,
    endpoints: [],
    geolocation: Long.UZERO,
    chain: "",
    moniker: ""
  };
}
export const StakeEntry = {
  encode(message: StakeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (!message.stakeAppliedBlock.isZero()) {
      writer.uint32(24).uint64(message.stakeAppliedBlock);
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(40).uint64(message.geolocation);
    }
    if (message.chain !== "") {
      writer.uint32(50).string(message.chain);
    }
    if (message.moniker !== "") {
      writer.uint32(66).string(message.moniker);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StakeEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.stakeAppliedBlock = (reader.uint64() as Long);
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 5:
          message.geolocation = (reader.uint64() as Long);
          break;
        case 6:
          message.chain = reader.string();
          break;
        case 8:
          message.moniker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StakeEntry>): StakeEntry {
    const message = createBaseStakeEntry();
    message.stake = object.stake !== undefined && object.stake !== null ? Coin.fromPartial(object.stake) : undefined;
    message.address = object.address ?? "";
    message.stakeAppliedBlock = object.stakeAppliedBlock !== undefined && object.stakeAppliedBlock !== null ? Long.fromValue(object.stakeAppliedBlock) : Long.UZERO;
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? Long.fromValue(object.geolocation) : Long.UZERO;
    message.chain = object.chain ?? "";
    message.moniker = object.moniker ?? "";
    return message;
  }
};