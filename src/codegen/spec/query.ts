import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Spec, SpecSDKType } from "./spec";
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
export interface QueryGetSpecRequest {
  ChainID: string;
}
export interface QueryGetSpecRequestSDKType {
  ChainID: string;
}
export interface QueryGetSpecResponse {
  Spec?: Spec;
}
export interface QueryGetSpecResponseSDKType {
  Spec?: SpecSDKType;
}
export interface QueryAllSpecRequest {
  pagination?: PageRequest;
}
export interface QueryAllSpecRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllSpecResponse {
  Spec: Spec[];
  pagination?: PageResponse;
}
export interface QueryAllSpecResponseSDKType {
  Spec: SpecSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryShowAllChainsRequest {}
export interface QueryShowAllChainsRequestSDKType {}
export interface QueryShowAllChainsResponse {
  chainInfoList: ShowAllChainsInfoStruct[];
}
export interface QueryShowAllChainsResponseSDKType {
  chainInfoList: ShowAllChainsInfoStructSDKType[];
}
export interface ShowAllChainsInfoStruct {
  chainName: string;
  chainID: string;
  enabledApiInterfaces: string[];
}
export interface ShowAllChainsInfoStructSDKType {
  chainName: string;
  chainID: string;
  enabledApiInterfaces: string[];
}
export interface QueryShowChainInfoRequest {
  chainName: string;
}
export interface QueryShowChainInfoRequestSDKType {
  chainName: string;
}
export interface ApiList {
  interface: string;
  supportedApis: string[];
}
export interface ApiListSDKType {
  interface: string;
  supportedApis: string[];
}
export interface QueryShowChainInfoResponse {
  chainID: string;
  interfaces: string[];
  supportedApisInterfaceList: ApiList[];
}
export interface QueryShowChainInfoResponseSDKType {
  chainID: string;
  interfaces: string[];
  supportedApisInterfaceList: ApiListSDKType[];
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
function createBaseQueryGetSpecRequest(): QueryGetSpecRequest {
  return {
    ChainID: ""
  };
}
export const QueryGetSpecRequest = {
  encode(message: QueryGetSpecRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ChainID !== "") {
      writer.uint32(10).string(message.ChainID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSpecRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSpecRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ChainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetSpecRequest {
    return {
      ChainID: isSet(object.ChainID) ? String(object.ChainID) : ""
    };
  },
  toJSON(message: QueryGetSpecRequest): unknown {
    const obj: any = {};
    message.ChainID !== undefined && (obj.ChainID = message.ChainID);
    return obj;
  },
  fromPartial(object: Partial<QueryGetSpecRequest>): QueryGetSpecRequest {
    const message = createBaseQueryGetSpecRequest();
    message.ChainID = object.ChainID ?? "";
    return message;
  }
};
function createBaseQueryGetSpecResponse(): QueryGetSpecResponse {
  return {
    Spec: undefined
  };
}
export const QueryGetSpecResponse = {
  encode(message: QueryGetSpecResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Spec !== undefined) {
      Spec.encode(message.Spec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSpecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSpecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Spec = Spec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetSpecResponse {
    return {
      Spec: isSet(object.Spec) ? Spec.fromJSON(object.Spec) : undefined
    };
  },
  toJSON(message: QueryGetSpecResponse): unknown {
    const obj: any = {};
    message.Spec !== undefined && (obj.Spec = message.Spec ? Spec.toJSON(message.Spec) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetSpecResponse>): QueryGetSpecResponse {
    const message = createBaseQueryGetSpecResponse();
    message.Spec = object.Spec !== undefined && object.Spec !== null ? Spec.fromPartial(object.Spec) : undefined;
    return message;
  }
};
function createBaseQueryAllSpecRequest(): QueryAllSpecRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllSpecRequest = {
  encode(message: QueryAllSpecRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSpecRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSpecRequest();
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
  fromJSON(object: any): QueryAllSpecRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllSpecRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllSpecRequest>): QueryAllSpecRequest {
    const message = createBaseQueryAllSpecRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllSpecResponse(): QueryAllSpecResponse {
  return {
    Spec: [],
    pagination: undefined
  };
}
export const QueryAllSpecResponse = {
  encode(message: QueryAllSpecResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Spec) {
      Spec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSpecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSpecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Spec.push(Spec.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllSpecResponse {
    return {
      Spec: Array.isArray(object?.Spec) ? object.Spec.map((e: any) => Spec.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllSpecResponse): unknown {
    const obj: any = {};
    if (message.Spec) {
      obj.Spec = message.Spec.map(e => e ? Spec.toJSON(e) : undefined);
    } else {
      obj.Spec = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllSpecResponse>): QueryAllSpecResponse {
    const message = createBaseQueryAllSpecResponse();
    message.Spec = object.Spec?.map(e => Spec.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryShowAllChainsRequest(): QueryShowAllChainsRequest {
  return {};
}
export const QueryShowAllChainsRequest = {
  encode(_: QueryShowAllChainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowAllChainsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowAllChainsRequest();
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
  fromJSON(_: any): QueryShowAllChainsRequest {
    return {};
  },
  toJSON(_: QueryShowAllChainsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryShowAllChainsRequest>): QueryShowAllChainsRequest {
    const message = createBaseQueryShowAllChainsRequest();
    return message;
  }
};
function createBaseQueryShowAllChainsResponse(): QueryShowAllChainsResponse {
  return {
    chainInfoList: []
  };
}
export const QueryShowAllChainsResponse = {
  encode(message: QueryShowAllChainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chainInfoList) {
      ShowAllChainsInfoStruct.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowAllChainsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowAllChainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.chainInfoList.push(ShowAllChainsInfoStruct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryShowAllChainsResponse {
    return {
      chainInfoList: Array.isArray(object?.chainInfoList) ? object.chainInfoList.map((e: any) => ShowAllChainsInfoStruct.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryShowAllChainsResponse): unknown {
    const obj: any = {};
    if (message.chainInfoList) {
      obj.chainInfoList = message.chainInfoList.map(e => e ? ShowAllChainsInfoStruct.toJSON(e) : undefined);
    } else {
      obj.chainInfoList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryShowAllChainsResponse>): QueryShowAllChainsResponse {
    const message = createBaseQueryShowAllChainsResponse();
    message.chainInfoList = object.chainInfoList?.map(e => ShowAllChainsInfoStruct.fromPartial(e)) || [];
    return message;
  }
};
function createBaseShowAllChainsInfoStruct(): ShowAllChainsInfoStruct {
  return {
    chainName: "",
    chainID: "",
    enabledApiInterfaces: []
  };
}
export const ShowAllChainsInfoStruct = {
  encode(message: ShowAllChainsInfoStruct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    for (const v of message.enabledApiInterfaces) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ShowAllChainsInfoStruct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowAllChainsInfoStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.enabledApiInterfaces.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ShowAllChainsInfoStruct {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      enabledApiInterfaces: Array.isArray(object?.enabledApiInterfaces) ? object.enabledApiInterfaces.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: ShowAllChainsInfoStruct): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    if (message.enabledApiInterfaces) {
      obj.enabledApiInterfaces = message.enabledApiInterfaces.map(e => e);
    } else {
      obj.enabledApiInterfaces = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ShowAllChainsInfoStruct>): ShowAllChainsInfoStruct {
    const message = createBaseShowAllChainsInfoStruct();
    message.chainName = object.chainName ?? "";
    message.chainID = object.chainID ?? "";
    message.enabledApiInterfaces = object.enabledApiInterfaces?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryShowChainInfoRequest(): QueryShowChainInfoRequest {
  return {
    chainName: ""
  };
}
export const QueryShowChainInfoRequest = {
  encode(message: QueryShowChainInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowChainInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowChainInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryShowChainInfoRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : ""
    };
  },
  toJSON(message: QueryShowChainInfoRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },
  fromPartial(object: Partial<QueryShowChainInfoRequest>): QueryShowChainInfoRequest {
    const message = createBaseQueryShowChainInfoRequest();
    message.chainName = object.chainName ?? "";
    return message;
  }
};
function createBaseApiList(): ApiList {
  return {
    interface: "",
    supportedApis: []
  };
}
export const ApiList = {
  encode(message: ApiList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interface !== "") {
      writer.uint32(34).string(message.interface);
    }
    for (const v of message.supportedApis) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ApiList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.interface = reader.string();
          break;
        case 5:
          message.supportedApis.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ApiList {
    return {
      interface: isSet(object.interface) ? String(object.interface) : "",
      supportedApis: Array.isArray(object?.supportedApis) ? object.supportedApis.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: ApiList): unknown {
    const obj: any = {};
    message.interface !== undefined && (obj.interface = message.interface);
    if (message.supportedApis) {
      obj.supportedApis = message.supportedApis.map(e => e);
    } else {
      obj.supportedApis = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ApiList>): ApiList {
    const message = createBaseApiList();
    message.interface = object.interface ?? "";
    message.supportedApis = object.supportedApis?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryShowChainInfoResponse(): QueryShowChainInfoResponse {
  return {
    chainID: "",
    interfaces: [],
    supportedApisInterfaceList: []
  };
}
export const QueryShowChainInfoResponse = {
  encode(message: QueryShowChainInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    for (const v of message.interfaces) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.supportedApisInterfaceList) {
      ApiList.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowChainInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowChainInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.interfaces.push(reader.string());
          break;
        case 3:
          message.supportedApisInterfaceList.push(ApiList.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryShowChainInfoResponse {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e: any) => String(e)) : [],
      supportedApisInterfaceList: Array.isArray(object?.supportedApisInterfaceList) ? object.supportedApisInterfaceList.map((e: any) => ApiList.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryShowChainInfoResponse): unknown {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(e => e);
    } else {
      obj.interfaces = [];
    }
    if (message.supportedApisInterfaceList) {
      obj.supportedApisInterfaceList = message.supportedApisInterfaceList.map(e => e ? ApiList.toJSON(e) : undefined);
    } else {
      obj.supportedApisInterfaceList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryShowChainInfoResponse>): QueryShowChainInfoResponse {
    const message = createBaseQueryShowChainInfoResponse();
    message.chainID = object.chainID ?? "";
    message.interfaces = object.interfaces?.map(e => e) || [];
    message.supportedApisInterfaceList = object.supportedApisInterfaceList?.map(e => ApiList.fromPartial(e)) || [];
    return message;
  }
};