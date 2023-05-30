import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryInfoRequest, QueryInfoResponseSDKType, QueryDeveloperRequest, QueryDeveloperResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.info = this.info.bind(this);
    this.developer = this.developer.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lavanet/lava/projects/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of ShowProject items. */
  async info(params: QueryInfoRequest): Promise<QueryInfoResponseSDKType> {
    const endpoint = `lavanet/lava/projects/info/${params.project}`;
    return await this.req.get<QueryInfoResponseSDKType>(endpoint);
  }
  /* Queries a list of ShowDevelopersProject items. */
  async developer(params: QueryDeveloperRequest): Promise<QueryDeveloperResponseSDKType> {
    const endpoint = `lavanet/lava/projects/developer/${params.developer}`;
    return await this.req.get<QueryDeveloperResponseSDKType>(endpoint);
  }
}