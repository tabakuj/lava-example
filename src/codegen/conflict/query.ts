import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { ConflictVote, ConflictVoteSDKType } from "./conflict_vote";
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
export interface QueryGetConflictVoteRequest {
  index: string;
}
export interface QueryGetConflictVoteRequestSDKType {
  index: string;
}
export interface QueryGetConflictVoteResponse {
  conflictVote?: ConflictVote;
}
export interface QueryGetConflictVoteResponseSDKType {
  conflictVote?: ConflictVoteSDKType;
}
export interface QueryAllConflictVoteRequest {
  pagination?: PageRequest;
}
export interface QueryAllConflictVoteRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllConflictVoteResponse {
  conflictVote: ConflictVote[];
  pagination?: PageResponse;
}
export interface QueryAllConflictVoteResponseSDKType {
  conflictVote: ConflictVoteSDKType[];
  pagination?: PageResponseSDKType;
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
function createBaseQueryGetConflictVoteRequest(): QueryGetConflictVoteRequest {
  return {
    index: ""
  };
}
export const QueryGetConflictVoteRequest = {
  encode(message: QueryGetConflictVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConflictVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConflictVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetConflictVoteRequest {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: QueryGetConflictVoteRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object: Partial<QueryGetConflictVoteRequest>): QueryGetConflictVoteRequest {
    const message = createBaseQueryGetConflictVoteRequest();
    message.index = object.index ?? "";
    return message;
  }
};
function createBaseQueryGetConflictVoteResponse(): QueryGetConflictVoteResponse {
  return {
    conflictVote: undefined
  };
}
export const QueryGetConflictVoteResponse = {
  encode(message: QueryGetConflictVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conflictVote !== undefined) {
      ConflictVote.encode(message.conflictVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConflictVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConflictVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictVote = ConflictVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetConflictVoteResponse {
    return {
      conflictVote: isSet(object.conflictVote) ? ConflictVote.fromJSON(object.conflictVote) : undefined
    };
  },
  toJSON(message: QueryGetConflictVoteResponse): unknown {
    const obj: any = {};
    message.conflictVote !== undefined && (obj.conflictVote = message.conflictVote ? ConflictVote.toJSON(message.conflictVote) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetConflictVoteResponse>): QueryGetConflictVoteResponse {
    const message = createBaseQueryGetConflictVoteResponse();
    message.conflictVote = object.conflictVote !== undefined && object.conflictVote !== null ? ConflictVote.fromPartial(object.conflictVote) : undefined;
    return message;
  }
};
function createBaseQueryAllConflictVoteRequest(): QueryAllConflictVoteRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllConflictVoteRequest = {
  encode(message: QueryAllConflictVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConflictVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConflictVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllConflictVoteRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllConflictVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllConflictVoteRequest>): QueryAllConflictVoteRequest {
    const message = createBaseQueryAllConflictVoteRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllConflictVoteResponse(): QueryAllConflictVoteResponse {
  return {
    conflictVote: [],
    pagination: undefined
  };
}
export const QueryAllConflictVoteResponse = {
  encode(message: QueryAllConflictVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.conflictVote) {
      ConflictVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConflictVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConflictVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictVote.push(ConflictVote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllConflictVoteResponse {
    return {
      conflictVote: Array.isArray(object?.conflictVote) ? object.conflictVote.map((e: any) => ConflictVote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllConflictVoteResponse): unknown {
    const obj: any = {};
    if (message.conflictVote) {
      obj.conflictVote = message.conflictVote.map(e => e ? ConflictVote.toJSON(e) : undefined);
    } else {
      obj.conflictVote = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllConflictVoteResponse>): QueryAllConflictVoteResponse {
    const message = createBaseQueryAllConflictVoteResponse();
    message.conflictVote = object.conflictVote?.map(e => ConflictVote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};