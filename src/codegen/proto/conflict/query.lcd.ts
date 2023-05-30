import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetConflictVoteRequest, QueryGetConflictVoteResponseSDKType, QueryAllConflictVoteRequest, QueryAllConflictVoteResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.conflictVote = this.conflictVote.bind(this);
    this.conflictVoteAll = this.conflictVoteAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lavanet/lava/conflict/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a ConflictVote by index. */
  async conflictVote(params: QueryGetConflictVoteRequest): Promise<QueryGetConflictVoteResponseSDKType> {
    const endpoint = `lavanet/lava/conflict/conflict_vote/${params.index}`;
    return await this.req.get<QueryGetConflictVoteResponseSDKType>(endpoint);
  }
  /* Queries a list of ConflictVote items. */
  async conflictVoteAll(params: QueryAllConflictVoteRequest = {
    pagination: undefined
  }): Promise<QueryAllConflictVoteResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/conflict/conflict_vote`;
    return await this.req.get<QueryAllConflictVoteResponseSDKType>(endpoint, options);
  }
}