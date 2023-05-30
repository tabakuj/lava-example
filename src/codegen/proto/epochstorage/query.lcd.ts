import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetStakeStorageRequest, QueryGetStakeStorageResponseSDKType, QueryAllStakeStorageRequest, QueryAllStakeStorageResponseSDKType, QueryGetEpochDetailsRequest, QueryGetEpochDetailsResponseSDKType, QueryGetFixatedParamsRequest, QueryGetFixatedParamsResponseSDKType, QueryAllFixatedParamsRequest, QueryAllFixatedParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.stakeStorage = this.stakeStorage.bind(this);
    this.stakeStorageAll = this.stakeStorageAll.bind(this);
    this.epochDetails = this.epochDetails.bind(this);
    this.fixatedParams = this.fixatedParams.bind(this);
    this.fixatedParamsAll = this.fixatedParamsAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lavanet/lava/epochstorage/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a StakeStorage by index. */
  async stakeStorage(params: QueryGetStakeStorageRequest): Promise<QueryGetStakeStorageResponseSDKType> {
    const endpoint = `lavanet/lava/epochstorage/stake_storage/${params.index}`;
    return await this.req.get<QueryGetStakeStorageResponseSDKType>(endpoint);
  }
  /* Queries a list of StakeStorage items. */
  async stakeStorageAll(params: QueryAllStakeStorageRequest = {
    pagination: undefined
  }): Promise<QueryAllStakeStorageResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/epochstorage/stake_storage`;
    return await this.req.get<QueryAllStakeStorageResponseSDKType>(endpoint, options);
  }
  /* Queries a EpochDetails by index. */
  async epochDetails(_params: QueryGetEpochDetailsRequest = {}): Promise<QueryGetEpochDetailsResponseSDKType> {
    const endpoint = `lavanet/lava/epochstorage/epoch_details`;
    return await this.req.get<QueryGetEpochDetailsResponseSDKType>(endpoint);
  }
  /* Queries a FixatedParams by index. */
  async fixatedParams(params: QueryGetFixatedParamsRequest): Promise<QueryGetFixatedParamsResponseSDKType> {
    const endpoint = `lavanet/lava/epochstorage/fixated_params/${params.index}`;
    return await this.req.get<QueryGetFixatedParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of FixatedParams items. */
  async fixatedParamsAll(params: QueryAllFixatedParamsRequest = {
    pagination: undefined
  }): Promise<QueryAllFixatedParamsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/epochstorage/fixated_params`;
    return await this.req.get<QueryAllFixatedParamsResponseSDKType>(endpoint, options);
  }
}