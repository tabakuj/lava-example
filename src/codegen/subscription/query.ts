import { Params, ParamsSDKType } from "./params";
import { Subscription, SubscriptionSDKType } from "./subscription";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryCurrentRequest {
  consumer: string;
}
export interface QueryCurrentRequestSDKType {
  consumer: string;
}
export interface QueryCurrentResponse {
  sub?: Subscription;
}
export interface QueryCurrentResponseSDKType {
  sub?: SubscriptionSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryCurrentRequest(): QueryCurrentRequest {
  return {
    consumer: ""
  };
}
export const QueryCurrentRequest = {
  encode(message: QueryCurrentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentRequest {
    return {
      consumer: isSet(object.consumer) ? String(object.consumer) : ""
    };
  },
  toJSON(message: QueryCurrentRequest): unknown {
    const obj: any = {};
    message.consumer !== undefined && (obj.consumer = message.consumer);
    return obj;
  },
  fromPartial(object: Partial<QueryCurrentRequest>): QueryCurrentRequest {
    const message = createBaseQueryCurrentRequest();
    message.consumer = object.consumer ?? "";
    return message;
  }
};
function createBaseQueryCurrentResponse(): QueryCurrentResponse {
  return {
    sub: undefined
  };
}
export const QueryCurrentResponse = {
  encode(message: QueryCurrentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sub !== undefined) {
      Subscription.encode(message.sub, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sub = Subscription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentResponse {
    return {
      sub: isSet(object.sub) ? Subscription.fromJSON(object.sub) : undefined
    };
  },
  toJSON(message: QueryCurrentResponse): unknown {
    const obj: any = {};
    message.sub !== undefined && (obj.sub = message.sub ? Subscription.toJSON(message.sub) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCurrentResponse>): QueryCurrentResponse {
    const message = createBaseQueryCurrentResponse();
    message.sub = object.sub !== undefined && object.sub !== null ? Subscription.fromPartial(object.sub) : undefined;
    return message;
  }
};