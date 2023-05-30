import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Plan, PlanSDKType } from "./plan";
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
export interface QueryListRequest {}
export interface QueryListRequestSDKType {}
export interface QueryListResponse {
  plansInfo: ListInfoStruct[];
}
export interface QueryListResponseSDKType {
  plans_info: ListInfoStructSDKType[];
}
export interface ListInfoStruct {
  index: string;
  description: string;
  price?: Coin;
}
export interface ListInfoStructSDKType {
  index: string;
  description: string;
  price?: CoinSDKType;
}
export interface QueryInfoRequest {
  planIndex: string;
}
export interface QueryInfoRequestSDKType {
  plan_index: string;
}
export interface QueryInfoResponse {
  planInfo?: Plan;
}
export interface QueryInfoResponseSDKType {
  plan_info?: PlanSDKType;
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
function createBaseQueryListRequest(): QueryListRequest {
  return {};
}
export const QueryListRequest = {
  encode(_: QueryListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRequest();
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
  fromJSON(_: any): QueryListRequest {
    return {};
  },
  toJSON(_: QueryListRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryListRequest>): QueryListRequest {
    const message = createBaseQueryListRequest();
    return message;
  }
};
function createBaseQueryListResponse(): QueryListResponse {
  return {
    plansInfo: []
  };
}
export const QueryListResponse = {
  encode(message: QueryListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.plansInfo) {
      ListInfoStruct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plansInfo.push(ListInfoStruct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListResponse {
    return {
      plansInfo: Array.isArray(object?.plansInfo) ? object.plansInfo.map((e: any) => ListInfoStruct.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryListResponse): unknown {
    const obj: any = {};
    if (message.plansInfo) {
      obj.plansInfo = message.plansInfo.map(e => e ? ListInfoStruct.toJSON(e) : undefined);
    } else {
      obj.plansInfo = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryListResponse>): QueryListResponse {
    const message = createBaseQueryListResponse();
    message.plansInfo = object.plansInfo?.map(e => ListInfoStruct.fromPartial(e)) || [];
    return message;
  }
};
function createBaseListInfoStruct(): ListInfoStruct {
  return {
    index: "",
    description: "",
    price: undefined
  };
}
export const ListInfoStruct = {
  encode(message: ListInfoStruct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListInfoStruct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInfoStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListInfoStruct {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      description: isSet(object.description) ? String(object.description) : "",
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined
    };
  },
  toJSON(message: ListInfoStruct): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.description !== undefined && (obj.description = message.description);
    message.price !== undefined && (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ListInfoStruct>): ListInfoStruct {
    const message = createBaseListInfoStruct();
    message.index = object.index ?? "";
    message.description = object.description ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    return message;
  }
};
function createBaseQueryInfoRequest(): QueryInfoRequest {
  return {
    planIndex: ""
  };
}
export const QueryInfoRequest = {
  encode(message: QueryInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.planIndex !== "") {
      writer.uint32(10).string(message.planIndex);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInfoRequest {
    return {
      planIndex: isSet(object.planIndex) ? String(object.planIndex) : ""
    };
  },
  toJSON(message: QueryInfoRequest): unknown {
    const obj: any = {};
    message.planIndex !== undefined && (obj.planIndex = message.planIndex);
    return obj;
  },
  fromPartial(object: Partial<QueryInfoRequest>): QueryInfoRequest {
    const message = createBaseQueryInfoRequest();
    message.planIndex = object.planIndex ?? "";
    return message;
  }
};
function createBaseQueryInfoResponse(): QueryInfoResponse {
  return {
    planInfo: undefined
  };
}
export const QueryInfoResponse = {
  encode(message: QueryInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.planInfo !== undefined) {
      Plan.encode(message.planInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planInfo = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInfoResponse {
    return {
      planInfo: isSet(object.planInfo) ? Plan.fromJSON(object.planInfo) : undefined
    };
  },
  toJSON(message: QueryInfoResponse): unknown {
    const obj: any = {};
    message.planInfo !== undefined && (obj.planInfo = message.planInfo ? Plan.toJSON(message.planInfo) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryInfoResponse>): QueryInfoResponse {
    const message = createBaseQueryInfoResponse();
    message.planInfo = object.planInfo !== undefined && object.planInfo !== null ? Plan.fromPartial(object.planInfo) : undefined;
    return message;
  }
};