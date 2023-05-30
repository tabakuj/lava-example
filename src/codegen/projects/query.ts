import { Params, ParamsSDKType } from "./params";
import { Project, ProjectSDKType } from "./project";
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
export interface QueryInfoRequest {
  project: string;
}
export interface QueryInfoRequestSDKType {
  project: string;
}
export interface QueryInfoResponse {
  project?: Project;
}
export interface QueryInfoResponseSDKType {
  project?: ProjectSDKType;
}
export interface QueryDeveloperRequest {
  developer: string;
}
export interface QueryDeveloperRequestSDKType {
  developer: string;
}
export interface QueryDeveloperResponse {
  project?: Project;
}
export interface QueryDeveloperResponseSDKType {
  project?: ProjectSDKType;
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
function createBaseQueryInfoRequest(): QueryInfoRequest {
  return {
    project: ""
  };
}
export const QueryInfoRequest = {
  encode(message: QueryInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.project !== "") {
      writer.uint32(10).string(message.project);
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
          message.project = reader.string();
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
      project: isSet(object.project) ? String(object.project) : ""
    };
  },
  toJSON(message: QueryInfoRequest): unknown {
    const obj: any = {};
    message.project !== undefined && (obj.project = message.project);
    return obj;
  },
  fromPartial(object: Partial<QueryInfoRequest>): QueryInfoRequest {
    const message = createBaseQueryInfoRequest();
    message.project = object.project ?? "";
    return message;
  }
};
function createBaseQueryInfoResponse(): QueryInfoResponse {
  return {
    project: undefined
  };
}
export const QueryInfoResponse = {
  encode(message: QueryInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
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
          message.project = Project.decode(reader, reader.uint32());
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
      project: isSet(object.project) ? Project.fromJSON(object.project) : undefined
    };
  },
  toJSON(message: QueryInfoResponse): unknown {
    const obj: any = {};
    message.project !== undefined && (obj.project = message.project ? Project.toJSON(message.project) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryInfoResponse>): QueryInfoResponse {
    const message = createBaseQueryInfoResponse();
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    return message;
  }
};
function createBaseQueryDeveloperRequest(): QueryDeveloperRequest {
  return {
    developer: ""
  };
}
export const QueryDeveloperRequest = {
  encode(message: QueryDeveloperRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.developer !== "") {
      writer.uint32(10).string(message.developer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeveloperRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeveloperRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.developer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeveloperRequest {
    return {
      developer: isSet(object.developer) ? String(object.developer) : ""
    };
  },
  toJSON(message: QueryDeveloperRequest): unknown {
    const obj: any = {};
    message.developer !== undefined && (obj.developer = message.developer);
    return obj;
  },
  fromPartial(object: Partial<QueryDeveloperRequest>): QueryDeveloperRequest {
    const message = createBaseQueryDeveloperRequest();
    message.developer = object.developer ?? "";
    return message;
  }
};
function createBaseQueryDeveloperResponse(): QueryDeveloperResponse {
  return {
    project: undefined
  };
}
export const QueryDeveloperResponse = {
  encode(message: QueryDeveloperResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeveloperResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeveloperResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeveloperResponse {
    return {
      project: isSet(object.project) ? Project.fromJSON(object.project) : undefined
    };
  },
  toJSON(message: QueryDeveloperResponse): unknown {
    const obj: any = {};
    message.project !== undefined && (obj.project = message.project ? Project.toJSON(message.project) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDeveloperResponse>): QueryDeveloperResponse {
    const message = createBaseQueryDeveloperResponse();
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    return message;
  }
};