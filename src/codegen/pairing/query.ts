import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StakeEntry, StakeEntrySDKType } from "../epochstorage/stake_entry";
import { UniquePaymentStorageClientProvider, UniquePaymentStorageClientProviderSDKType } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage, ProviderPaymentStorageSDKType } from "./provider_payment_storage";
import { EpochPayments, EpochPaymentsSDKType } from "./epoch_payments";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
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
export interface QueryProvidersRequest {
  chainID: string;
  showFrozen: boolean;
}
export interface QueryProvidersRequestSDKType {
  chainID: string;
  showFrozen: boolean;
}
export interface QueryProvidersResponse {
  stakeEntry: StakeEntry[];
  output: string;
}
export interface QueryProvidersResponseSDKType {
  stakeEntry: StakeEntrySDKType[];
  output: string;
}
export interface QueryClientsRequest {
  chainID: string;
}
export interface QueryClientsRequestSDKType {
  chainID: string;
}
export interface QueryClientsResponse {
  stakeEntry: StakeEntry[];
  output: string;
}
export interface QueryClientsResponseSDKType {
  stakeEntry: StakeEntrySDKType[];
  output: string;
}
export interface QueryGetPairingRequest {
  chainID: string;
  client: string;
}
export interface QueryGetPairingRequestSDKType {
  chainID: string;
  client: string;
}
export interface QueryGetPairingResponse {
  providers: StakeEntry[];
  currentEpoch: Long;
  timeLeftToNextPairing: Long;
  specLastUpdatedBlock: Long;
  blockOfNextPairing: Long;
}
export interface QueryGetPairingResponseSDKType {
  providers: StakeEntrySDKType[];
  current_epoch: Long;
  time_left_to_next_pairing: Long;
  spec_last_updated_block: Long;
  block_of_next_pairing: Long;
}
export interface QueryVerifyPairingRequest {
  chainID: string;
  client: string;
  provider: string;
  block: Long;
}
export interface QueryVerifyPairingRequestSDKType {
  chainID: string;
  client: string;
  provider: string;
  block: Long;
}
export interface QueryVerifyPairingResponse {
  valid: boolean;
  pairedProviders: Long;
  cuPerEpoch: Long;
}
export interface QueryVerifyPairingResponseSDKType {
  valid: boolean;
  paired_providers: Long;
  cu_per_epoch: Long;
}
export interface QueryGetUniquePaymentStorageClientProviderRequest {
  index: string;
}
export interface QueryGetUniquePaymentStorageClientProviderRequestSDKType {
  index: string;
}
export interface QueryGetUniquePaymentStorageClientProviderResponse {
  uniquePaymentStorageClientProvider?: UniquePaymentStorageClientProvider;
}
export interface QueryGetUniquePaymentStorageClientProviderResponseSDKType {
  uniquePaymentStorageClientProvider?: UniquePaymentStorageClientProviderSDKType;
}
export interface QueryAllUniquePaymentStorageClientProviderRequest {
  pagination?: PageRequest;
}
export interface QueryAllUniquePaymentStorageClientProviderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllUniquePaymentStorageClientProviderResponse {
  uniquePaymentStorageClientProvider: UniquePaymentStorageClientProvider[];
  pagination?: PageResponse;
}
export interface QueryAllUniquePaymentStorageClientProviderResponseSDKType {
  uniquePaymentStorageClientProvider: UniquePaymentStorageClientProviderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetProviderPaymentStorageRequest {
  index: string;
}
export interface QueryGetProviderPaymentStorageRequestSDKType {
  index: string;
}
export interface QueryGetProviderPaymentStorageResponse {
  providerPaymentStorage?: ProviderPaymentStorage;
}
export interface QueryGetProviderPaymentStorageResponseSDKType {
  providerPaymentStorage?: ProviderPaymentStorageSDKType;
}
export interface QueryAllProviderPaymentStorageRequest {
  pagination?: PageRequest;
}
export interface QueryAllProviderPaymentStorageRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllProviderPaymentStorageResponse {
  providerPaymentStorage: ProviderPaymentStorage[];
  pagination?: PageResponse;
}
export interface QueryAllProviderPaymentStorageResponseSDKType {
  providerPaymentStorage: ProviderPaymentStorageSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetEpochPaymentsRequest {
  index: string;
}
export interface QueryGetEpochPaymentsRequestSDKType {
  index: string;
}
export interface QueryGetEpochPaymentsResponse {
  epochPayments?: EpochPayments;
}
export interface QueryGetEpochPaymentsResponseSDKType {
  epochPayments?: EpochPaymentsSDKType;
}
export interface QueryAllEpochPaymentsRequest {
  pagination?: PageRequest;
}
export interface QueryAllEpochPaymentsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllEpochPaymentsResponse {
  epochPayments: EpochPayments[];
  pagination?: PageResponse;
}
export interface QueryAllEpochPaymentsResponseSDKType {
  epochPayments: EpochPaymentsSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryUserEntryRequest {
  address: string;
  chainID: string;
  block: Long;
}
export interface QueryUserEntryRequestSDKType {
  address: string;
  chainID: string;
  block: Long;
}
export interface QueryUserEntryResponse {
  consumer?: StakeEntry;
  maxCU: Long;
}
export interface QueryUserEntryResponseSDKType {
  consumer?: StakeEntrySDKType;
  maxCU: Long;
}
export interface QueryStaticProvidersListRequest {
  chainID: string;
}
export interface QueryStaticProvidersListRequestSDKType {
  chainID: string;
}
export interface QueryStaticProvidersListResponse {
  providers: StakeEntry[];
}
export interface QueryStaticProvidersListResponseSDKType {
  providers: StakeEntrySDKType[];
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
function createBaseQueryProvidersRequest(): QueryProvidersRequest {
  return {
    chainID: "",
    showFrozen: false
  };
}
export const QueryProvidersRequest = {
  encode(message: QueryProvidersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.showFrozen === true) {
      writer.uint32(16).bool(message.showFrozen);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.showFrozen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProvidersRequest {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      showFrozen: isSet(object.showFrozen) ? Boolean(object.showFrozen) : false
    };
  },
  toJSON(message: QueryProvidersRequest): unknown {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.showFrozen !== undefined && (obj.showFrozen = message.showFrozen);
    return obj;
  },
  fromPartial(object: Partial<QueryProvidersRequest>): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    message.chainID = object.chainID ?? "";
    message.showFrozen = object.showFrozen ?? false;
    return message;
  }
};
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    stakeEntry: [],
    output: ""
  };
}
export const QueryProvidersResponse = {
  encode(message: QueryProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakeEntry) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.output !== "") {
      writer.uint32(18).string(message.output);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeEntry.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProvidersResponse {
    return {
      stakeEntry: Array.isArray(object?.stakeEntry) ? object.stakeEntry.map((e: any) => StakeEntry.fromJSON(e)) : [],
      output: isSet(object.output) ? String(object.output) : ""
    };
  },
  toJSON(message: QueryProvidersResponse): unknown {
    const obj: any = {};
    if (message.stakeEntry) {
      obj.stakeEntry = message.stakeEntry.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.stakeEntry = [];
    }
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },
  fromPartial(object: Partial<QueryProvidersResponse>): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.stakeEntry = object.stakeEntry?.map(e => StakeEntry.fromPartial(e)) || [];
    message.output = object.output ?? "";
    return message;
  }
};
function createBaseQueryClientsRequest(): QueryClientsRequest {
  return {
    chainID: ""
  };
}
export const QueryClientsRequest = {
  encode(message: QueryClientsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientsRequest {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : ""
    };
  },
  toJSON(message: QueryClientsRequest): unknown {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    return obj;
  },
  fromPartial(object: Partial<QueryClientsRequest>): QueryClientsRequest {
    const message = createBaseQueryClientsRequest();
    message.chainID = object.chainID ?? "";
    return message;
  }
};
function createBaseQueryClientsResponse(): QueryClientsResponse {
  return {
    stakeEntry: [],
    output: ""
  };
}
export const QueryClientsResponse = {
  encode(message: QueryClientsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakeEntry) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.output !== "") {
      writer.uint32(18).string(message.output);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeEntry.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientsResponse {
    return {
      stakeEntry: Array.isArray(object?.stakeEntry) ? object.stakeEntry.map((e: any) => StakeEntry.fromJSON(e)) : [],
      output: isSet(object.output) ? String(object.output) : ""
    };
  },
  toJSON(message: QueryClientsResponse): unknown {
    const obj: any = {};
    if (message.stakeEntry) {
      obj.stakeEntry = message.stakeEntry.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.stakeEntry = [];
    }
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },
  fromPartial(object: Partial<QueryClientsResponse>): QueryClientsResponse {
    const message = createBaseQueryClientsResponse();
    message.stakeEntry = object.stakeEntry?.map(e => StakeEntry.fromPartial(e)) || [];
    message.output = object.output ?? "";
    return message;
  }
};
function createBaseQueryGetPairingRequest(): QueryGetPairingRequest {
  return {
    chainID: "",
    client: ""
  };
}
export const QueryGetPairingRequest = {
  encode(message: QueryGetPairingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.client !== "") {
      writer.uint32(18).string(message.client);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPairingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPairingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.client = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPairingRequest {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      client: isSet(object.client) ? String(object.client) : ""
    };
  },
  toJSON(message: QueryGetPairingRequest): unknown {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.client !== undefined && (obj.client = message.client);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPairingRequest>): QueryGetPairingRequest {
    const message = createBaseQueryGetPairingRequest();
    message.chainID = object.chainID ?? "";
    message.client = object.client ?? "";
    return message;
  }
};
function createBaseQueryGetPairingResponse(): QueryGetPairingResponse {
  return {
    providers: [],
    currentEpoch: Long.UZERO,
    timeLeftToNextPairing: Long.UZERO,
    specLastUpdatedBlock: Long.UZERO,
    blockOfNextPairing: Long.UZERO
  };
}
export const QueryGetPairingResponse = {
  encode(message: QueryGetPairingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.currentEpoch.isZero()) {
      writer.uint32(16).uint64(message.currentEpoch);
    }
    if (!message.timeLeftToNextPairing.isZero()) {
      writer.uint32(24).uint64(message.timeLeftToNextPairing);
    }
    if (!message.specLastUpdatedBlock.isZero()) {
      writer.uint32(32).uint64(message.specLastUpdatedBlock);
    }
    if (!message.blockOfNextPairing.isZero()) {
      writer.uint32(40).uint64(message.blockOfNextPairing);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPairingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPairingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentEpoch = (reader.uint64() as Long);
          break;
        case 3:
          message.timeLeftToNextPairing = (reader.uint64() as Long);
          break;
        case 4:
          message.specLastUpdatedBlock = (reader.uint64() as Long);
          break;
        case 5:
          message.blockOfNextPairing = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPairingResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => StakeEntry.fromJSON(e)) : [],
      currentEpoch: isSet(object.currentEpoch) ? Long.fromValue(object.currentEpoch) : Long.UZERO,
      timeLeftToNextPairing: isSet(object.timeLeftToNextPairing) ? Long.fromValue(object.timeLeftToNextPairing) : Long.UZERO,
      specLastUpdatedBlock: isSet(object.specLastUpdatedBlock) ? Long.fromValue(object.specLastUpdatedBlock) : Long.UZERO,
      blockOfNextPairing: isSet(object.blockOfNextPairing) ? Long.fromValue(object.blockOfNextPairing) : Long.UZERO
    };
  },
  toJSON(message: QueryGetPairingResponse): unknown {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.UZERO).toString());
    message.timeLeftToNextPairing !== undefined && (obj.timeLeftToNextPairing = (message.timeLeftToNextPairing || Long.UZERO).toString());
    message.specLastUpdatedBlock !== undefined && (obj.specLastUpdatedBlock = (message.specLastUpdatedBlock || Long.UZERO).toString());
    message.blockOfNextPairing !== undefined && (obj.blockOfNextPairing = (message.blockOfNextPairing || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetPairingResponse>): QueryGetPairingResponse {
    const message = createBaseQueryGetPairingResponse();
    message.providers = object.providers?.map(e => StakeEntry.fromPartial(e)) || [];
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.UZERO;
    message.timeLeftToNextPairing = object.timeLeftToNextPairing !== undefined && object.timeLeftToNextPairing !== null ? Long.fromValue(object.timeLeftToNextPairing) : Long.UZERO;
    message.specLastUpdatedBlock = object.specLastUpdatedBlock !== undefined && object.specLastUpdatedBlock !== null ? Long.fromValue(object.specLastUpdatedBlock) : Long.UZERO;
    message.blockOfNextPairing = object.blockOfNextPairing !== undefined && object.blockOfNextPairing !== null ? Long.fromValue(object.blockOfNextPairing) : Long.UZERO;
    return message;
  }
};
function createBaseQueryVerifyPairingRequest(): QueryVerifyPairingRequest {
  return {
    chainID: "",
    client: "",
    provider: "",
    block: Long.UZERO
  };
}
export const QueryVerifyPairingRequest = {
  encode(message: QueryVerifyPairingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.client !== "") {
      writer.uint32(18).string(message.client);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (!message.block.isZero()) {
      writer.uint32(32).uint64(message.block);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyPairingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyPairingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.client = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.block = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVerifyPairingRequest {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      client: isSet(object.client) ? String(object.client) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO
    };
  },
  toJSON(message: QueryVerifyPairingRequest): unknown {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.client !== undefined && (obj.client = message.client);
    message.provider !== undefined && (obj.provider = message.provider);
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryVerifyPairingRequest>): QueryVerifyPairingRequest {
    const message = createBaseQueryVerifyPairingRequest();
    message.chainID = object.chainID ?? "";
    message.client = object.client ?? "";
    message.provider = object.provider ?? "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    return message;
  }
};
function createBaseQueryVerifyPairingResponse(): QueryVerifyPairingResponse {
  return {
    valid: false,
    pairedProviders: Long.UZERO,
    cuPerEpoch: Long.UZERO
  };
}
export const QueryVerifyPairingResponse = {
  encode(message: QueryVerifyPairingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    if (!message.pairedProviders.isZero()) {
      writer.uint32(24).uint64(message.pairedProviders);
    }
    if (!message.cuPerEpoch.isZero()) {
      writer.uint32(32).uint64(message.cuPerEpoch);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyPairingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyPairingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        case 3:
          message.pairedProviders = (reader.uint64() as Long);
          break;
        case 4:
          message.cuPerEpoch = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVerifyPairingResponse {
    return {
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
      pairedProviders: isSet(object.pairedProviders) ? Long.fromValue(object.pairedProviders) : Long.UZERO,
      cuPerEpoch: isSet(object.cuPerEpoch) ? Long.fromValue(object.cuPerEpoch) : Long.UZERO
    };
  },
  toJSON(message: QueryVerifyPairingResponse): unknown {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    message.pairedProviders !== undefined && (obj.pairedProviders = (message.pairedProviders || Long.UZERO).toString());
    message.cuPerEpoch !== undefined && (obj.cuPerEpoch = (message.cuPerEpoch || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryVerifyPairingResponse>): QueryVerifyPairingResponse {
    const message = createBaseQueryVerifyPairingResponse();
    message.valid = object.valid ?? false;
    message.pairedProviders = object.pairedProviders !== undefined && object.pairedProviders !== null ? Long.fromValue(object.pairedProviders) : Long.UZERO;
    message.cuPerEpoch = object.cuPerEpoch !== undefined && object.cuPerEpoch !== null ? Long.fromValue(object.cuPerEpoch) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetUniquePaymentStorageClientProviderRequest(): QueryGetUniquePaymentStorageClientProviderRequest {
  return {
    index: ""
  };
}
export const QueryGetUniquePaymentStorageClientProviderRequest = {
  encode(message: QueryGetUniquePaymentStorageClientProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUniquePaymentStorageClientProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUniquePaymentStorageClientProviderRequest();
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
  fromJSON(object: any): QueryGetUniquePaymentStorageClientProviderRequest {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: QueryGetUniquePaymentStorageClientProviderRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object: Partial<QueryGetUniquePaymentStorageClientProviderRequest>): QueryGetUniquePaymentStorageClientProviderRequest {
    const message = createBaseQueryGetUniquePaymentStorageClientProviderRequest();
    message.index = object.index ?? "";
    return message;
  }
};
function createBaseQueryGetUniquePaymentStorageClientProviderResponse(): QueryGetUniquePaymentStorageClientProviderResponse {
  return {
    uniquePaymentStorageClientProvider: undefined
  };
}
export const QueryGetUniquePaymentStorageClientProviderResponse = {
  encode(message: QueryGetUniquePaymentStorageClientProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniquePaymentStorageClientProvider !== undefined) {
      UniquePaymentStorageClientProvider.encode(message.uniquePaymentStorageClientProvider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUniquePaymentStorageClientProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUniquePaymentStorageClientProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uniquePaymentStorageClientProvider = UniquePaymentStorageClientProvider.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetUniquePaymentStorageClientProviderResponse {
    return {
      uniquePaymentStorageClientProvider: isSet(object.uniquePaymentStorageClientProvider) ? UniquePaymentStorageClientProvider.fromJSON(object.uniquePaymentStorageClientProvider) : undefined
    };
  },
  toJSON(message: QueryGetUniquePaymentStorageClientProviderResponse): unknown {
    const obj: any = {};
    message.uniquePaymentStorageClientProvider !== undefined && (obj.uniquePaymentStorageClientProvider = message.uniquePaymentStorageClientProvider ? UniquePaymentStorageClientProvider.toJSON(message.uniquePaymentStorageClientProvider) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetUniquePaymentStorageClientProviderResponse>): QueryGetUniquePaymentStorageClientProviderResponse {
    const message = createBaseQueryGetUniquePaymentStorageClientProviderResponse();
    message.uniquePaymentStorageClientProvider = object.uniquePaymentStorageClientProvider !== undefined && object.uniquePaymentStorageClientProvider !== null ? UniquePaymentStorageClientProvider.fromPartial(object.uniquePaymentStorageClientProvider) : undefined;
    return message;
  }
};
function createBaseQueryAllUniquePaymentStorageClientProviderRequest(): QueryAllUniquePaymentStorageClientProviderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllUniquePaymentStorageClientProviderRequest = {
  encode(message: QueryAllUniquePaymentStorageClientProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUniquePaymentStorageClientProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUniquePaymentStorageClientProviderRequest();
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
  fromJSON(object: any): QueryAllUniquePaymentStorageClientProviderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllUniquePaymentStorageClientProviderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllUniquePaymentStorageClientProviderRequest>): QueryAllUniquePaymentStorageClientProviderRequest {
    const message = createBaseQueryAllUniquePaymentStorageClientProviderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUniquePaymentStorageClientProviderResponse(): QueryAllUniquePaymentStorageClientProviderResponse {
  return {
    uniquePaymentStorageClientProvider: [],
    pagination: undefined
  };
}
export const QueryAllUniquePaymentStorageClientProviderResponse = {
  encode(message: QueryAllUniquePaymentStorageClientProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.uniquePaymentStorageClientProvider) {
      UniquePaymentStorageClientProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUniquePaymentStorageClientProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUniquePaymentStorageClientProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uniquePaymentStorageClientProvider.push(UniquePaymentStorageClientProvider.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllUniquePaymentStorageClientProviderResponse {
    return {
      uniquePaymentStorageClientProvider: Array.isArray(object?.uniquePaymentStorageClientProvider) ? object.uniquePaymentStorageClientProvider.map((e: any) => UniquePaymentStorageClientProvider.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllUniquePaymentStorageClientProviderResponse): unknown {
    const obj: any = {};
    if (message.uniquePaymentStorageClientProvider) {
      obj.uniquePaymentStorageClientProvider = message.uniquePaymentStorageClientProvider.map(e => e ? UniquePaymentStorageClientProvider.toJSON(e) : undefined);
    } else {
      obj.uniquePaymentStorageClientProvider = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllUniquePaymentStorageClientProviderResponse>): QueryAllUniquePaymentStorageClientProviderResponse {
    const message = createBaseQueryAllUniquePaymentStorageClientProviderResponse();
    message.uniquePaymentStorageClientProvider = object.uniquePaymentStorageClientProvider?.map(e => UniquePaymentStorageClientProvider.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetProviderPaymentStorageRequest(): QueryGetProviderPaymentStorageRequest {
  return {
    index: ""
  };
}
export const QueryGetProviderPaymentStorageRequest = {
  encode(message: QueryGetProviderPaymentStorageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProviderPaymentStorageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProviderPaymentStorageRequest();
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
  fromJSON(object: any): QueryGetProviderPaymentStorageRequest {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: QueryGetProviderPaymentStorageRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProviderPaymentStorageRequest>): QueryGetProviderPaymentStorageRequest {
    const message = createBaseQueryGetProviderPaymentStorageRequest();
    message.index = object.index ?? "";
    return message;
  }
};
function createBaseQueryGetProviderPaymentStorageResponse(): QueryGetProviderPaymentStorageResponse {
  return {
    providerPaymentStorage: undefined
  };
}
export const QueryGetProviderPaymentStorageResponse = {
  encode(message: QueryGetProviderPaymentStorageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.providerPaymentStorage !== undefined) {
      ProviderPaymentStorage.encode(message.providerPaymentStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProviderPaymentStorageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProviderPaymentStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerPaymentStorage = ProviderPaymentStorage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProviderPaymentStorageResponse {
    return {
      providerPaymentStorage: isSet(object.providerPaymentStorage) ? ProviderPaymentStorage.fromJSON(object.providerPaymentStorage) : undefined
    };
  },
  toJSON(message: QueryGetProviderPaymentStorageResponse): unknown {
    const obj: any = {};
    message.providerPaymentStorage !== undefined && (obj.providerPaymentStorage = message.providerPaymentStorage ? ProviderPaymentStorage.toJSON(message.providerPaymentStorage) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProviderPaymentStorageResponse>): QueryGetProviderPaymentStorageResponse {
    const message = createBaseQueryGetProviderPaymentStorageResponse();
    message.providerPaymentStorage = object.providerPaymentStorage !== undefined && object.providerPaymentStorage !== null ? ProviderPaymentStorage.fromPartial(object.providerPaymentStorage) : undefined;
    return message;
  }
};
function createBaseQueryAllProviderPaymentStorageRequest(): QueryAllProviderPaymentStorageRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllProviderPaymentStorageRequest = {
  encode(message: QueryAllProviderPaymentStorageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProviderPaymentStorageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProviderPaymentStorageRequest();
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
  fromJSON(object: any): QueryAllProviderPaymentStorageRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllProviderPaymentStorageRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllProviderPaymentStorageRequest>): QueryAllProviderPaymentStorageRequest {
    const message = createBaseQueryAllProviderPaymentStorageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllProviderPaymentStorageResponse(): QueryAllProviderPaymentStorageResponse {
  return {
    providerPaymentStorage: [],
    pagination: undefined
  };
}
export const QueryAllProviderPaymentStorageResponse = {
  encode(message: QueryAllProviderPaymentStorageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providerPaymentStorage) {
      ProviderPaymentStorage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProviderPaymentStorageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProviderPaymentStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerPaymentStorage.push(ProviderPaymentStorage.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllProviderPaymentStorageResponse {
    return {
      providerPaymentStorage: Array.isArray(object?.providerPaymentStorage) ? object.providerPaymentStorage.map((e: any) => ProviderPaymentStorage.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllProviderPaymentStorageResponse): unknown {
    const obj: any = {};
    if (message.providerPaymentStorage) {
      obj.providerPaymentStorage = message.providerPaymentStorage.map(e => e ? ProviderPaymentStorage.toJSON(e) : undefined);
    } else {
      obj.providerPaymentStorage = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllProviderPaymentStorageResponse>): QueryAllProviderPaymentStorageResponse {
    const message = createBaseQueryAllProviderPaymentStorageResponse();
    message.providerPaymentStorage = object.providerPaymentStorage?.map(e => ProviderPaymentStorage.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetEpochPaymentsRequest(): QueryGetEpochPaymentsRequest {
  return {
    index: ""
  };
}
export const QueryGetEpochPaymentsRequest = {
  encode(message: QueryGetEpochPaymentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochPaymentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochPaymentsRequest();
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
  fromJSON(object: any): QueryGetEpochPaymentsRequest {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: QueryGetEpochPaymentsRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object: Partial<QueryGetEpochPaymentsRequest>): QueryGetEpochPaymentsRequest {
    const message = createBaseQueryGetEpochPaymentsRequest();
    message.index = object.index ?? "";
    return message;
  }
};
function createBaseQueryGetEpochPaymentsResponse(): QueryGetEpochPaymentsResponse {
  return {
    epochPayments: undefined
  };
}
export const QueryGetEpochPaymentsResponse = {
  encode(message: QueryGetEpochPaymentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochPayments !== undefined) {
      EpochPayments.encode(message.epochPayments, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochPaymentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochPaymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochPayments = EpochPayments.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetEpochPaymentsResponse {
    return {
      epochPayments: isSet(object.epochPayments) ? EpochPayments.fromJSON(object.epochPayments) : undefined
    };
  },
  toJSON(message: QueryGetEpochPaymentsResponse): unknown {
    const obj: any = {};
    message.epochPayments !== undefined && (obj.epochPayments = message.epochPayments ? EpochPayments.toJSON(message.epochPayments) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetEpochPaymentsResponse>): QueryGetEpochPaymentsResponse {
    const message = createBaseQueryGetEpochPaymentsResponse();
    message.epochPayments = object.epochPayments !== undefined && object.epochPayments !== null ? EpochPayments.fromPartial(object.epochPayments) : undefined;
    return message;
  }
};
function createBaseQueryAllEpochPaymentsRequest(): QueryAllEpochPaymentsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllEpochPaymentsRequest = {
  encode(message: QueryAllEpochPaymentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochPaymentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochPaymentsRequest();
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
  fromJSON(object: any): QueryAllEpochPaymentsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllEpochPaymentsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllEpochPaymentsRequest>): QueryAllEpochPaymentsRequest {
    const message = createBaseQueryAllEpochPaymentsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllEpochPaymentsResponse(): QueryAllEpochPaymentsResponse {
  return {
    epochPayments: [],
    pagination: undefined
  };
}
export const QueryAllEpochPaymentsResponse = {
  encode(message: QueryAllEpochPaymentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochPayments) {
      EpochPayments.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochPaymentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochPaymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochPayments.push(EpochPayments.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllEpochPaymentsResponse {
    return {
      epochPayments: Array.isArray(object?.epochPayments) ? object.epochPayments.map((e: any) => EpochPayments.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllEpochPaymentsResponse): unknown {
    const obj: any = {};
    if (message.epochPayments) {
      obj.epochPayments = message.epochPayments.map(e => e ? EpochPayments.toJSON(e) : undefined);
    } else {
      obj.epochPayments = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllEpochPaymentsResponse>): QueryAllEpochPaymentsResponse {
    const message = createBaseQueryAllEpochPaymentsResponse();
    message.epochPayments = object.epochPayments?.map(e => EpochPayments.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryUserEntryRequest(): QueryUserEntryRequest {
  return {
    address: "",
    chainID: "",
    block: Long.UZERO
  };
}
export const QueryUserEntryRequest = {
  encode(message: QueryUserEntryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (!message.block.isZero()) {
      writer.uint32(24).uint64(message.block);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserEntryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.block = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserEntryRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO
    };
  },
  toJSON(message: QueryUserEntryRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryUserEntryRequest>): QueryUserEntryRequest {
    const message = createBaseQueryUserEntryRequest();
    message.address = object.address ?? "";
    message.chainID = object.chainID ?? "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    return message;
  }
};
function createBaseQueryUserEntryResponse(): QueryUserEntryResponse {
  return {
    consumer: undefined,
    maxCU: Long.UZERO
  };
}
export const QueryUserEntryResponse = {
  encode(message: QueryUserEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consumer !== undefined) {
      StakeEntry.encode(message.consumer, writer.uint32(10).fork()).ldelim();
    }
    if (!message.maxCU.isZero()) {
      writer.uint32(16).uint64(message.maxCU);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserEntryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = StakeEntry.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxCU = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserEntryResponse {
    return {
      consumer: isSet(object.consumer) ? StakeEntry.fromJSON(object.consumer) : undefined,
      maxCU: isSet(object.maxCU) ? Long.fromValue(object.maxCU) : Long.UZERO
    };
  },
  toJSON(message: QueryUserEntryResponse): unknown {
    const obj: any = {};
    message.consumer !== undefined && (obj.consumer = message.consumer ? StakeEntry.toJSON(message.consumer) : undefined);
    message.maxCU !== undefined && (obj.maxCU = (message.maxCU || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryUserEntryResponse>): QueryUserEntryResponse {
    const message = createBaseQueryUserEntryResponse();
    message.consumer = object.consumer !== undefined && object.consumer !== null ? StakeEntry.fromPartial(object.consumer) : undefined;
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? Long.fromValue(object.maxCU) : Long.UZERO;
    return message;
  }
};
function createBaseQueryStaticProvidersListRequest(): QueryStaticProvidersListRequest {
  return {
    chainID: ""
  };
}
export const QueryStaticProvidersListRequest = {
  encode(message: QueryStaticProvidersListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStaticProvidersListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStaticProvidersListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStaticProvidersListRequest {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : ""
    };
  },
  toJSON(message: QueryStaticProvidersListRequest): unknown {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    return obj;
  },
  fromPartial(object: Partial<QueryStaticProvidersListRequest>): QueryStaticProvidersListRequest {
    const message = createBaseQueryStaticProvidersListRequest();
    message.chainID = object.chainID ?? "";
    return message;
  }
};
function createBaseQueryStaticProvidersListResponse(): QueryStaticProvidersListResponse {
  return {
    providers: []
  };
}
export const QueryStaticProvidersListResponse = {
  encode(message: QueryStaticProvidersListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStaticProvidersListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStaticProvidersListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStaticProvidersListResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => StakeEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryStaticProvidersListResponse): unknown {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryStaticProvidersListResponse>): QueryStaticProvidersListResponse {
    const message = createBaseQueryStaticProvidersListResponse();
    message.providers = object.providers?.map(e => StakeEntry.fromPartial(e)) || [];
    return message;
  }
};