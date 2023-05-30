import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCurrentRequest, QueryCurrentResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.current = this.current.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lavanet/lava/subscription/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Current items. */
  async current(params: QueryCurrentRequest): Promise<QueryCurrentResponseSDKType> {
    const endpoint = `lavanet/lava/subscription/current/${params.consumer}`;
    return await this.req.get<QueryCurrentResponseSDKType>(endpoint);
  }
}