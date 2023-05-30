import { setPaginationParams } from "../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryProvidersRequest, QueryProvidersResponseSDKType, QueryClientsRequest, QueryClientsResponseSDKType, QueryGetPairingRequest, QueryGetPairingResponseSDKType, QueryVerifyPairingRequest, QueryVerifyPairingResponseSDKType, QueryGetUniquePaymentStorageClientProviderRequest, QueryGetUniquePaymentStorageClientProviderResponseSDKType, QueryAllUniquePaymentStorageClientProviderRequest, QueryAllUniquePaymentStorageClientProviderResponseSDKType, QueryGetProviderPaymentStorageRequest, QueryGetProviderPaymentStorageResponseSDKType, QueryAllProviderPaymentStorageRequest, QueryAllProviderPaymentStorageResponseSDKType, QueryGetEpochPaymentsRequest, QueryGetEpochPaymentsResponseSDKType, QueryAllEpochPaymentsRequest, QueryAllEpochPaymentsResponseSDKType, QueryUserEntryRequest, QueryUserEntryResponseSDKType, QueryStaticProvidersListRequest, QueryStaticProvidersListResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.providers = this.providers.bind(this);
    this.clients = this.clients.bind(this);
    this.getPairing = this.getPairing.bind(this);
    this.verifyPairing = this.verifyPairing.bind(this);
    this.uniquePaymentStorageClientProvider = this.uniquePaymentStorageClientProvider.bind(this);
    this.uniquePaymentStorageClientProviderAll = this.uniquePaymentStorageClientProviderAll.bind(this);
    this.providerPaymentStorage = this.providerPaymentStorage.bind(this);
    this.providerPaymentStorageAll = this.providerPaymentStorageAll.bind(this);
    this.epochPayments = this.epochPayments.bind(this);
    this.epochPaymentsAll = this.epochPaymentsAll.bind(this);
    this.userEntry = this.userEntry.bind(this);
    this.staticProvidersList = this.staticProvidersList.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lavanet/lava/pairing/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Providers items. */
  async providers(params: QueryProvidersRequest): Promise<QueryProvidersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.showFrozen !== "undefined") {
      options.params.showFrozen = params.showFrozen;
    }
    const endpoint = `lavanet/lava/pairing/providers/${params.chainID}`;
    return await this.req.get<QueryProvidersResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Clients items. */
  async clients(params: QueryClientsRequest): Promise<QueryClientsResponseSDKType> {
    const endpoint = `lavanet/lava/pairing/clients/${params.chainID}`;
    return await this.req.get<QueryClientsResponseSDKType>(endpoint);
  }
  /* Queries a list of GetPairing items. */
  async getPairing(params: QueryGetPairingRequest): Promise<QueryGetPairingResponseSDKType> {
    const endpoint = `lavanet/lava/pairing/get_pairing/${params.chainID}/${params.client}`;
    return await this.req.get<QueryGetPairingResponseSDKType>(endpoint);
  }
  /* Queries a list of VerifyPairing items. */
  async verifyPairing(params: QueryVerifyPairingRequest): Promise<QueryVerifyPairingResponseSDKType> {
    const endpoint = `lavanet/lava/pairing/verify_pairing/${params.chainID}/${params.client}/${params.provider}/${params.block}`;
    return await this.req.get<QueryVerifyPairingResponseSDKType>(endpoint);
  }
  /* Queries a UniquePaymentStorageClientProvider by index. */
  async uniquePaymentStorageClientProvider(params: QueryGetUniquePaymentStorageClientProviderRequest): Promise<QueryGetUniquePaymentStorageClientProviderResponseSDKType> {
    const endpoint = `lavanet/lava/pairing/unique_payment_storage_client_provider/${params.index}`;
    return await this.req.get<QueryGetUniquePaymentStorageClientProviderResponseSDKType>(endpoint);
  }
  /* Queries a list of UniquePaymentStorageClientProvider items. */
  async uniquePaymentStorageClientProviderAll(params: QueryAllUniquePaymentStorageClientProviderRequest = {
    pagination: undefined
  }): Promise<QueryAllUniquePaymentStorageClientProviderResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/pairing/unique_payment_storage_client_provider`;
    return await this.req.get<QueryAllUniquePaymentStorageClientProviderResponseSDKType>(endpoint, options);
  }
  /* Queries a ProviderPaymentStorage by index. */
  async providerPaymentStorage(params: QueryGetProviderPaymentStorageRequest): Promise<QueryGetProviderPaymentStorageResponseSDKType> {
    const endpoint = `lavanet/lava/pairing/provider_payment_storage/${params.index}`;
    return await this.req.get<QueryGetProviderPaymentStorageResponseSDKType>(endpoint);
  }
  /* Queries a list of ProviderPaymentStorage items. */
  async providerPaymentStorageAll(params: QueryAllProviderPaymentStorageRequest = {
    pagination: undefined
  }): Promise<QueryAllProviderPaymentStorageResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/pairing/provider_payment_storage`;
    return await this.req.get<QueryAllProviderPaymentStorageResponseSDKType>(endpoint, options);
  }
  /* Queries a EpochPayments by index. */
  async epochPayments(params: QueryGetEpochPaymentsRequest): Promise<QueryGetEpochPaymentsResponseSDKType> {
    const endpoint = `lavanet/lava/pairing/epoch_payments/${params.index}`;
    return await this.req.get<QueryGetEpochPaymentsResponseSDKType>(endpoint);
  }
  /* Queries a list of EpochPayments items. */
  async epochPaymentsAll(params: QueryAllEpochPaymentsRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochPaymentsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/pairing/epoch_payments`;
    return await this.req.get<QueryAllEpochPaymentsResponseSDKType>(endpoint, options);
  }
  /* Queries a UserEntry items. */
  async userEntry(params: QueryUserEntryRequest): Promise<QueryUserEntryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.block !== "undefined") {
      options.params.block = params.block;
    }
    const endpoint = `lavanet/lava/pairing/user_entry/${params.address}/${params.chainID}`;
    return await this.req.get<QueryUserEntryResponseSDKType>(endpoint, options);
  }
  /* Queries a list of StaticProvidersList items. */
  async staticProvidersList(params: QueryStaticProvidersListRequest): Promise<QueryStaticProvidersListResponseSDKType> {
    const endpoint = `lavanet/lava/pairing/static_providers_list/${params.chainID}`;
    return await this.req.get<QueryStaticProvidersListResponseSDKType>(endpoint);
  }
}