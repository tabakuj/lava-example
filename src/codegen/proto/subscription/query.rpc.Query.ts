import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentRequest, QueryCurrentResponse, QueryListProjectsRequest, QueryListProjectsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Current items. */
  current(request: QueryCurrentRequest): Promise<QueryCurrentResponse>;
  /** Queries a list of ListProjects items. */
  listProjects(request: QueryListProjectsRequest): Promise<QueryListProjectsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.current = this.current.bind(this);
    this.listProjects = this.listProjects.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  current(request: QueryCurrentRequest): Promise<QueryCurrentResponse> {
    const data = QueryCurrentRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "Current", data);
    return promise.then(data => QueryCurrentResponse.decode(new _m0.Reader(data)));
  }
  listProjects(request: QueryListProjectsRequest): Promise<QueryListProjectsResponse> {
    const data = QueryListProjectsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "ListProjects", data);
    return promise.then(data => QueryListProjectsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    current(request: QueryCurrentRequest): Promise<QueryCurrentResponse> {
      return queryService.current(request);
    },
    listProjects(request: QueryListProjectsRequest): Promise<QueryListProjectsResponse> {
      return queryService.listProjects(request);
    }
  };
};