import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Endpoint, EndpointSDKType } from "../epochstorage/endpoint";
import { RelaySession, RelaySessionSDKType } from "./relay";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgStakeProvider {
  creator: string;
  chainID: string;
  amount?: Coin;
  endpoints: Endpoint[];
  geolocation: Long;
  moniker: string;
}
export interface MsgStakeProviderSDKType {
  creator: string;
  chainID: string;
  amount?: CoinSDKType;
  endpoints: EndpointSDKType[];
  geolocation: Long;
  moniker: string;
}
export interface MsgStakeProviderResponse {}
export interface MsgStakeProviderResponseSDKType {}
export interface MsgStakeClient {
  creator: string;
  chainID: string;
  amount?: Coin;
  geolocation: Long;
}
export interface MsgStakeClientSDKType {
  creator: string;
  chainID: string;
  amount?: CoinSDKType;
  geolocation: Long;
}
export interface MsgStakeClientResponse {}
export interface MsgStakeClientResponseSDKType {}
export interface MsgUnstakeProvider {
  creator: string;
  chainID: string;
}
export interface MsgUnstakeProviderSDKType {
  creator: string;
  chainID: string;
}
export interface MsgUnstakeProviderResponse {}
export interface MsgUnstakeProviderResponseSDKType {}
export interface MsgUnstakeClient {
  creator: string;
  chainID: string;
}
export interface MsgUnstakeClientSDKType {
  creator: string;
  chainID: string;
}
export interface MsgUnstakeClientResponse {}
export interface MsgUnstakeClientResponseSDKType {}
export interface MsgRelayPayment {
  creator: string;
  relays: RelaySession[];
  descriptionString: string;
}
export interface MsgRelayPaymentSDKType {
  creator: string;
  relays: RelaySessionSDKType[];
  descriptionString: string;
}
export interface MsgRelayPaymentResponse {}
export interface MsgRelayPaymentResponseSDKType {}
export interface MsgFreezeProvider {
  creator: string;
  chainIds: string[];
  reason: string;
}
export interface MsgFreezeProviderSDKType {
  creator: string;
  chainIds: string[];
  reason: string;
}
export interface MsgFreezeProviderResponse {}
export interface MsgFreezeProviderResponseSDKType {}
export interface MsgUnfreezeProvider {
  creator: string;
  chainIds: string[];
}
export interface MsgUnfreezeProviderSDKType {
  creator: string;
  chainIds: string[];
}
export interface MsgUnfreezeProviderResponse {}
export interface MsgUnfreezeProviderResponseSDKType {}
function createBaseMsgStakeProvider(): MsgStakeProvider {
  return {
    creator: "",
    chainID: "",
    amount: undefined,
    endpoints: [],
    geolocation: Long.UZERO,
    moniker: ""
  };
}
export const MsgStakeProvider = {
  encode(message: MsgStakeProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(40).uint64(message.geolocation);
    }
    if (message.moniker !== "") {
      writer.uint32(50).string(message.moniker);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 5:
          message.geolocation = (reader.uint64() as Long);
          break;
        case 6:
          message.moniker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakeProvider {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : [],
      geolocation: isSet(object.geolocation) ? Long.fromValue(object.geolocation) : Long.UZERO,
      moniker: isSet(object.moniker) ? String(object.moniker) : ""
    };
  },
  toJSON(message: MsgStakeProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    message.geolocation !== undefined && (obj.geolocation = (message.geolocation || Long.UZERO).toString());
    message.moniker !== undefined && (obj.moniker = message.moniker);
    return obj;
  },
  fromPartial(object: Partial<MsgStakeProvider>): MsgStakeProvider {
    const message = createBaseMsgStakeProvider();
    message.creator = object.creator ?? "";
    message.chainID = object.chainID ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? Long.fromValue(object.geolocation) : Long.UZERO;
    message.moniker = object.moniker ?? "";
    return message;
  }
};
function createBaseMsgStakeProviderResponse(): MsgStakeProviderResponse {
  return {};
}
export const MsgStakeProviderResponse = {
  encode(_: MsgStakeProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeProviderResponse();
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
  fromJSON(_: any): MsgStakeProviderResponse {
    return {};
  },
  toJSON(_: MsgStakeProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgStakeProviderResponse>): MsgStakeProviderResponse {
    const message = createBaseMsgStakeProviderResponse();
    return message;
  }
};
function createBaseMsgStakeClient(): MsgStakeClient {
  return {
    creator: "",
    chainID: "",
    amount: undefined,
    geolocation: Long.UZERO
  };
}
export const MsgStakeClient = {
  encode(message: MsgStakeClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(32).uint64(message.geolocation);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.geolocation = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakeClient {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      geolocation: isSet(object.geolocation) ? Long.fromValue(object.geolocation) : Long.UZERO
    };
  },
  toJSON(message: MsgStakeClient): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.geolocation !== undefined && (obj.geolocation = (message.geolocation || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgStakeClient>): MsgStakeClient {
    const message = createBaseMsgStakeClient();
    message.creator = object.creator ?? "";
    message.chainID = object.chainID ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? Long.fromValue(object.geolocation) : Long.UZERO;
    return message;
  }
};
function createBaseMsgStakeClientResponse(): MsgStakeClientResponse {
  return {};
}
export const MsgStakeClientResponse = {
  encode(_: MsgStakeClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeClientResponse();
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
  fromJSON(_: any): MsgStakeClientResponse {
    return {};
  },
  toJSON(_: MsgStakeClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgStakeClientResponse>): MsgStakeClientResponse {
    const message = createBaseMsgStakeClientResponse();
    return message;
  }
};
function createBaseMsgUnstakeProvider(): MsgUnstakeProvider {
  return {
    creator: "",
    chainID: ""
  };
}
export const MsgUnstakeProvider = {
  encode(message: MsgUnstakeProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstakeProvider {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : ""
    };
  },
  toJSON(message: MsgUnstakeProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    return obj;
  },
  fromPartial(object: Partial<MsgUnstakeProvider>): MsgUnstakeProvider {
    const message = createBaseMsgUnstakeProvider();
    message.creator = object.creator ?? "";
    message.chainID = object.chainID ?? "";
    return message;
  }
};
function createBaseMsgUnstakeProviderResponse(): MsgUnstakeProviderResponse {
  return {};
}
export const MsgUnstakeProviderResponse = {
  encode(_: MsgUnstakeProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeProviderResponse();
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
  fromJSON(_: any): MsgUnstakeProviderResponse {
    return {};
  },
  toJSON(_: MsgUnstakeProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUnstakeProviderResponse>): MsgUnstakeProviderResponse {
    const message = createBaseMsgUnstakeProviderResponse();
    return message;
  }
};
function createBaseMsgUnstakeClient(): MsgUnstakeClient {
  return {
    creator: "",
    chainID: ""
  };
}
export const MsgUnstakeClient = {
  encode(message: MsgUnstakeClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstakeClient {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : ""
    };
  },
  toJSON(message: MsgUnstakeClient): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    return obj;
  },
  fromPartial(object: Partial<MsgUnstakeClient>): MsgUnstakeClient {
    const message = createBaseMsgUnstakeClient();
    message.creator = object.creator ?? "";
    message.chainID = object.chainID ?? "";
    return message;
  }
};
function createBaseMsgUnstakeClientResponse(): MsgUnstakeClientResponse {
  return {};
}
export const MsgUnstakeClientResponse = {
  encode(_: MsgUnstakeClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeClientResponse();
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
  fromJSON(_: any): MsgUnstakeClientResponse {
    return {};
  },
  toJSON(_: MsgUnstakeClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUnstakeClientResponse>): MsgUnstakeClientResponse {
    const message = createBaseMsgUnstakeClientResponse();
    return message;
  }
};
function createBaseMsgRelayPayment(): MsgRelayPayment {
  return {
    creator: "",
    relays: [],
    descriptionString: ""
  };
}
export const MsgRelayPayment = {
  encode(message: MsgRelayPayment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.relays) {
      RelaySession.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.descriptionString !== "") {
      writer.uint32(34).string(message.descriptionString);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayPayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.relays.push(RelaySession.decode(reader, reader.uint32()));
          break;
        case 4:
          message.descriptionString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRelayPayment {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      relays: Array.isArray(object?.relays) ? object.relays.map((e: any) => RelaySession.fromJSON(e)) : [],
      descriptionString: isSet(object.descriptionString) ? String(object.descriptionString) : ""
    };
  },
  toJSON(message: MsgRelayPayment): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.relays) {
      obj.relays = message.relays.map(e => e ? RelaySession.toJSON(e) : undefined);
    } else {
      obj.relays = [];
    }
    message.descriptionString !== undefined && (obj.descriptionString = message.descriptionString);
    return obj;
  },
  fromPartial(object: Partial<MsgRelayPayment>): MsgRelayPayment {
    const message = createBaseMsgRelayPayment();
    message.creator = object.creator ?? "";
    message.relays = object.relays?.map(e => RelaySession.fromPartial(e)) || [];
    message.descriptionString = object.descriptionString ?? "";
    return message;
  }
};
function createBaseMsgRelayPaymentResponse(): MsgRelayPaymentResponse {
  return {};
}
export const MsgRelayPaymentResponse = {
  encode(_: MsgRelayPaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayPaymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPaymentResponse();
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
  fromJSON(_: any): MsgRelayPaymentResponse {
    return {};
  },
  toJSON(_: MsgRelayPaymentResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRelayPaymentResponse>): MsgRelayPaymentResponse {
    const message = createBaseMsgRelayPaymentResponse();
    return message;
  }
};
function createBaseMsgFreezeProvider(): MsgFreezeProvider {
  return {
    creator: "",
    chainIds: [],
    reason: ""
  };
}
export const MsgFreezeProvider = {
  encode(message: MsgFreezeProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.chainIds) {
      writer.uint32(18).string(v!);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFreezeProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainIds.push(reader.string());
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFreezeProvider {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainIds: Array.isArray(object?.chainIds) ? object.chainIds.map((e: any) => String(e)) : [],
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  toJSON(message: MsgFreezeProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.chainIds) {
      obj.chainIds = message.chainIds.map(e => e);
    } else {
      obj.chainIds = [];
    }
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },
  fromPartial(object: Partial<MsgFreezeProvider>): MsgFreezeProvider {
    const message = createBaseMsgFreezeProvider();
    message.creator = object.creator ?? "";
    message.chainIds = object.chainIds?.map(e => e) || [];
    message.reason = object.reason ?? "";
    return message;
  }
};
function createBaseMsgFreezeProviderResponse(): MsgFreezeProviderResponse {
  return {};
}
export const MsgFreezeProviderResponse = {
  encode(_: MsgFreezeProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFreezeProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeProviderResponse();
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
  fromJSON(_: any): MsgFreezeProviderResponse {
    return {};
  },
  toJSON(_: MsgFreezeProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgFreezeProviderResponse>): MsgFreezeProviderResponse {
    const message = createBaseMsgFreezeProviderResponse();
    return message;
  }
};
function createBaseMsgUnfreezeProvider(): MsgUnfreezeProvider {
  return {
    creator: "",
    chainIds: []
  };
}
export const MsgUnfreezeProvider = {
  encode(message: MsgUnfreezeProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.chainIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfreezeProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfreezeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnfreezeProvider {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainIds: Array.isArray(object?.chainIds) ? object.chainIds.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgUnfreezeProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.chainIds) {
      obj.chainIds = message.chainIds.map(e => e);
    } else {
      obj.chainIds = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgUnfreezeProvider>): MsgUnfreezeProvider {
    const message = createBaseMsgUnfreezeProvider();
    message.creator = object.creator ?? "";
    message.chainIds = object.chainIds?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgUnfreezeProviderResponse(): MsgUnfreezeProviderResponse {
  return {};
}
export const MsgUnfreezeProviderResponse = {
  encode(_: MsgUnfreezeProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfreezeProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfreezeProviderResponse();
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
  fromJSON(_: any): MsgUnfreezeProviderResponse {
    return {};
  },
  toJSON(_: MsgUnfreezeProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUnfreezeProviderResponse>): MsgUnfreezeProviderResponse {
    const message = createBaseMsgUnfreezeProviderResponse();
    return message;
  }
};