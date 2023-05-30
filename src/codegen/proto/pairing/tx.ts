import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Endpoint, EndpointSDKType } from "../../epochstorage/endpoint";
import { RelaySession, RelaySessionSDKType } from "../../pairing/relay";
import { Long, DeepPartial } from "../../helpers";
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
  fromPartial(object: DeepPartial<MsgStakeProvider>): MsgStakeProvider {
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
  fromPartial(_: DeepPartial<MsgStakeProviderResponse>): MsgStakeProviderResponse {
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
  fromPartial(object: DeepPartial<MsgStakeClient>): MsgStakeClient {
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
  fromPartial(_: DeepPartial<MsgStakeClientResponse>): MsgStakeClientResponse {
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
  fromPartial(object: DeepPartial<MsgUnstakeProvider>): MsgUnstakeProvider {
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
  fromPartial(_: DeepPartial<MsgUnstakeProviderResponse>): MsgUnstakeProviderResponse {
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
  fromPartial(object: DeepPartial<MsgUnstakeClient>): MsgUnstakeClient {
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
  fromPartial(_: DeepPartial<MsgUnstakeClientResponse>): MsgUnstakeClientResponse {
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
  fromPartial(object: DeepPartial<MsgRelayPayment>): MsgRelayPayment {
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
  fromPartial(_: DeepPartial<MsgRelayPaymentResponse>): MsgRelayPaymentResponse {
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
  fromPartial(object: DeepPartial<MsgFreezeProvider>): MsgFreezeProvider {
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
  fromPartial(_: DeepPartial<MsgFreezeProviderResponse>): MsgFreezeProviderResponse {
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
  fromPartial(object: DeepPartial<MsgUnfreezeProvider>): MsgUnfreezeProvider {
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
  fromPartial(_: DeepPartial<MsgUnfreezeProviderResponse>): MsgUnfreezeProviderResponse {
    const message = createBaseMsgUnfreezeProviderResponse();
    return message;
  }
};