import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetSpecRequest, QueryGetSpecResponseSDKType, QueryAllSpecRequest, QueryAllSpecResponseSDKType, QueryShowAllChainsRequest, QueryShowAllChainsResponseSDKType, QueryShowChainInfoRequest, QueryShowChainInfoResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.spec = this.spec.bind(this);
    this.specAll = this.specAll.bind(this);
    this.specRaw = this.specRaw.bind(this);
    this.specAllRaw = this.specAllRaw.bind(this);
    this.showAllChains = this.showAllChains.bind(this);
    this.showChainInfo = this.showChainInfo.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lavanet/lava/spec/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Spec by id. */
  async spec(params: QueryGetSpecRequest): Promise<QueryGetSpecResponseSDKType> {
    const endpoint = `lavanet/lava/spec/spec/${params.ChainID}`;
    return await this.req.get<QueryGetSpecResponseSDKType>(endpoint);
  }
  /* Queries a list of Spec items. */
  async specAll(params: QueryAllSpecRequest = {
    pagination: undefined
  }): Promise<QueryAllSpecResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/spec/spec`;
    return await this.req.get<QueryAllSpecResponseSDKType>(endpoint, options);
  }
  /* Queries a Spec by id (raw form). */
  async specRaw(params: QueryGetSpecRequest): Promise<QueryGetSpecResponseSDKType> {
    const endpoint = `lavanet/lava/spec/spec_raw/${params.ChainID}`;
    return await this.req.get<QueryGetSpecResponseSDKType>(endpoint);
  }
  /* Queries a list of Spec items (raw form). */
  async specAllRaw(params: QueryAllSpecRequest = {
    pagination: undefined
  }): Promise<QueryAllSpecResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/spec/spec_raw`;
    return await this.req.get<QueryAllSpecResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ShowAllChains items. */
  async showAllChains(_params: QueryShowAllChainsRequest = {}): Promise<QueryShowAllChainsResponseSDKType> {
    const endpoint = `lavanet/lava/spec/show_all_chains`;
    return await this.req.get<QueryShowAllChainsResponseSDKType>(endpoint);
  }
  /* Queries a list of ShowChainInfo items. */
  async showChainInfo(params: QueryShowChainInfoRequest): Promise<QueryShowChainInfoResponseSDKType> {
    const endpoint = `lavanet/lava/spec/show_chain_info/${params.chainName}`;
    return await this.req.get<QueryShowChainInfoResponseSDKType>(endpoint);
  }
}