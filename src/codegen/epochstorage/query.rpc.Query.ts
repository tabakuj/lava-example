import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetStakeStorageRequest, QueryGetStakeStorageResponse, QueryAllStakeStorageRequest, QueryAllStakeStorageResponse, QueryGetEpochDetailsRequest, QueryGetEpochDetailsResponse, QueryGetFixatedParamsRequest, QueryGetFixatedParamsResponse, QueryAllFixatedParamsRequest, QueryAllFixatedParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a StakeStorage by index. */
  stakeStorage(request: QueryGetStakeStorageRequest): Promise<QueryGetStakeStorageResponse>;
  /** Queries a list of StakeStorage items. */
  stakeStorageAll(request?: QueryAllStakeStorageRequest): Promise<QueryAllStakeStorageResponse>;
  /** Queries a EpochDetails by index. */
  epochDetails(request?: QueryGetEpochDetailsRequest): Promise<QueryGetEpochDetailsResponse>;
  /** Queries a FixatedParams by index. */
  fixatedParams(request: QueryGetFixatedParamsRequest): Promise<QueryGetFixatedParamsResponse>;
  /** Queries a list of FixatedParams items. */
  fixatedParamsAll(request?: QueryAllFixatedParamsRequest): Promise<QueryAllFixatedParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.stakeStorage = this.stakeStorage.bind(this);
    this.stakeStorageAll = this.stakeStorageAll.bind(this);
    this.epochDetails = this.epochDetails.bind(this);
    this.fixatedParams = this.fixatedParams.bind(this);
    this.fixatedParamsAll = this.fixatedParamsAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  stakeStorage(request: QueryGetStakeStorageRequest): Promise<QueryGetStakeStorageResponse> {
    const data = QueryGetStakeStorageRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "StakeStorage", data);
    return promise.then(data => QueryGetStakeStorageResponse.decode(new _m0.Reader(data)));
  }
  stakeStorageAll(request: QueryAllStakeStorageRequest = {
    pagination: undefined
  }): Promise<QueryAllStakeStorageResponse> {
    const data = QueryAllStakeStorageRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "StakeStorageAll", data);
    return promise.then(data => QueryAllStakeStorageResponse.decode(new _m0.Reader(data)));
  }
  epochDetails(request: QueryGetEpochDetailsRequest = {}): Promise<QueryGetEpochDetailsResponse> {
    const data = QueryGetEpochDetailsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "EpochDetails", data);
    return promise.then(data => QueryGetEpochDetailsResponse.decode(new _m0.Reader(data)));
  }
  fixatedParams(request: QueryGetFixatedParamsRequest): Promise<QueryGetFixatedParamsResponse> {
    const data = QueryGetFixatedParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "FixatedParams", data);
    return promise.then(data => QueryGetFixatedParamsResponse.decode(new _m0.Reader(data)));
  }
  fixatedParamsAll(request: QueryAllFixatedParamsRequest = {
    pagination: undefined
  }): Promise<QueryAllFixatedParamsResponse> {
    const data = QueryAllFixatedParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "FixatedParamsAll", data);
    return promise.then(data => QueryAllFixatedParamsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    stakeStorage(request: QueryGetStakeStorageRequest): Promise<QueryGetStakeStorageResponse> {
      return queryService.stakeStorage(request);
    },
    stakeStorageAll(request?: QueryAllStakeStorageRequest): Promise<QueryAllStakeStorageResponse> {
      return queryService.stakeStorageAll(request);
    },
    epochDetails(request?: QueryGetEpochDetailsRequest): Promise<QueryGetEpochDetailsResponse> {
      return queryService.epochDetails(request);
    },
    fixatedParams(request: QueryGetFixatedParamsRequest): Promise<QueryGetFixatedParamsResponse> {
      return queryService.fixatedParams(request);
    },
    fixatedParamsAll(request?: QueryAllFixatedParamsRequest): Promise<QueryAllFixatedParamsResponse> {
      return queryService.fixatedParamsAll(request);
    }
  };
};