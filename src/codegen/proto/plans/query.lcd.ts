import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryListRequest, QueryListResponseSDKType, QueryInfoRequest, QueryInfoResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.list = this.list.bind(this);
    this.info = this.info.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lavanet/lava/plans/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of List items. */
  async list(_params: QueryListRequest = {}): Promise<QueryListResponseSDKType> {
    const endpoint = `lavanet/lava/plans/list`;
    return await this.req.get<QueryListResponseSDKType>(endpoint);
  }
  /* Queries an Info item. */
  async info(params: QueryInfoRequest): Promise<QueryInfoResponseSDKType> {
    const endpoint = `lavanet/lava/plans/info/${params.planIndex}`;
    return await this.req.get<QueryInfoResponseSDKType>(endpoint);
  }
}