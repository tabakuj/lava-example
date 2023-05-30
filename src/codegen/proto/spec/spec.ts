import { ServiceApi, ServiceApiSDKType } from "../../spec/service_api";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum Spec_ProvidersTypes {
  dynamic = 0,
  static = 1,
  UNRECOGNIZED = -1,
}
export const Spec_ProvidersTypesSDKType = Spec_ProvidersTypes;
export function spec_ProvidersTypesFromJSON(object: any): Spec_ProvidersTypes {
  switch (object) {
    case 0:
    case "dynamic":
      return Spec_ProvidersTypes.dynamic;
    case 1:
    case "static":
      return Spec_ProvidersTypes.static;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Spec_ProvidersTypes.UNRECOGNIZED;
  }
}
export function spec_ProvidersTypesToJSON(object: Spec_ProvidersTypes): string {
  switch (object) {
    case Spec_ProvidersTypes.dynamic:
      return "dynamic";
    case Spec_ProvidersTypes.static:
      return "static";
    case Spec_ProvidersTypes.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Spec {
  index: string;
  name: string;
  imports: string[];
  apis: ServiceApi[];
  enabled: boolean;
  reliabilityThreshold: number;
  dataReliabilityEnabled: boolean;
  blockDistanceForFinalizedData: number;
  blocksInFinalizationProof: number;
  averageBlockTime: Long;
  allowedBlockLagForQosSync: Long;
  blockLastUpdated: Long;
  minStakeProvider?: Coin;
  minStakeClient?: Coin;
  providersTypes: Spec_ProvidersTypes;
}
export interface SpecSDKType {
  index: string;
  name: string;
  imports: string[];
  apis: ServiceApiSDKType[];
  enabled: boolean;
  reliability_threshold: number;
  data_reliability_enabled: boolean;
  block_distance_for_finalized_data: number;
  blocks_in_finalization_proof: number;
  average_block_time: Long;
  allowed_block_lag_for_qos_sync: Long;
  block_last_updated: Long;
  min_stake_provider?: CoinSDKType;
  min_stake_client?: CoinSDKType;
  providers_types: Spec_ProvidersTypes;
}
function createBaseSpec(): Spec {
  return {
    index: "",
    name: "",
    imports: [],
    apis: [],
    enabled: false,
    reliabilityThreshold: 0,
    dataReliabilityEnabled: false,
    blockDistanceForFinalizedData: 0,
    blocksInFinalizationProof: 0,
    averageBlockTime: Long.ZERO,
    allowedBlockLagForQosSync: Long.ZERO,
    blockLastUpdated: Long.UZERO,
    minStakeProvider: undefined,
    minStakeClient: undefined,
    providersTypes: 0
  };
}
export const Spec = {
  encode(message: Spec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.imports) {
      writer.uint32(122).string(v!);
    }
    for (const v of message.apis) {
      ServiceApi.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.reliabilityThreshold !== 0) {
      writer.uint32(40).uint32(message.reliabilityThreshold);
    }
    if (message.dataReliabilityEnabled === true) {
      writer.uint32(48).bool(message.dataReliabilityEnabled);
    }
    if (message.blockDistanceForFinalizedData !== 0) {
      writer.uint32(56).uint32(message.blockDistanceForFinalizedData);
    }
    if (message.blocksInFinalizationProof !== 0) {
      writer.uint32(64).uint32(message.blocksInFinalizationProof);
    }
    if (!message.averageBlockTime.isZero()) {
      writer.uint32(72).int64(message.averageBlockTime);
    }
    if (!message.allowedBlockLagForQosSync.isZero()) {
      writer.uint32(80).int64(message.allowedBlockLagForQosSync);
    }
    if (!message.blockLastUpdated.isZero()) {
      writer.uint32(88).uint64(message.blockLastUpdated);
    }
    if (message.minStakeProvider !== undefined) {
      Coin.encode(message.minStakeProvider, writer.uint32(98).fork()).ldelim();
    }
    if (message.minStakeClient !== undefined) {
      Coin.encode(message.minStakeClient, writer.uint32(106).fork()).ldelim();
    }
    if (message.providersTypes !== 0) {
      writer.uint32(112).int32(message.providersTypes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Spec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 15:
          message.imports.push(reader.string());
          break;
        case 3:
          message.apis.push(ServiceApi.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.reliabilityThreshold = reader.uint32();
          break;
        case 6:
          message.dataReliabilityEnabled = reader.bool();
          break;
        case 7:
          message.blockDistanceForFinalizedData = reader.uint32();
          break;
        case 8:
          message.blocksInFinalizationProof = reader.uint32();
          break;
        case 9:
          message.averageBlockTime = (reader.int64() as Long);
          break;
        case 10:
          message.allowedBlockLagForQosSync = (reader.int64() as Long);
          break;
        case 11:
          message.blockLastUpdated = (reader.uint64() as Long);
          break;
        case 12:
          message.minStakeProvider = Coin.decode(reader, reader.uint32());
          break;
        case 13:
          message.minStakeClient = Coin.decode(reader, reader.uint32());
          break;
        case 14:
          message.providersTypes = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Spec>): Spec {
    const message = createBaseSpec();
    message.index = object.index ?? "";
    message.name = object.name ?? "";
    message.imports = object.imports?.map(e => e) || [];
    message.apis = object.apis?.map(e => ServiceApi.fromPartial(e)) || [];
    message.enabled = object.enabled ?? false;
    message.reliabilityThreshold = object.reliabilityThreshold ?? 0;
    message.dataReliabilityEnabled = object.dataReliabilityEnabled ?? false;
    message.blockDistanceForFinalizedData = object.blockDistanceForFinalizedData ?? 0;
    message.blocksInFinalizationProof = object.blocksInFinalizationProof ?? 0;
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? Long.fromValue(object.averageBlockTime) : Long.ZERO;
    message.allowedBlockLagForQosSync = object.allowedBlockLagForQosSync !== undefined && object.allowedBlockLagForQosSync !== null ? Long.fromValue(object.allowedBlockLagForQosSync) : Long.ZERO;
    message.blockLastUpdated = object.blockLastUpdated !== undefined && object.blockLastUpdated !== null ? Long.fromValue(object.blockLastUpdated) : Long.UZERO;
    message.minStakeProvider = object.minStakeProvider !== undefined && object.minStakeProvider !== null ? Coin.fromPartial(object.minStakeProvider) : undefined;
    message.minStakeClient = object.minStakeClient !== undefined && object.minStakeClient !== null ? Coin.fromPartial(object.minStakeClient) : undefined;
    message.providersTypes = object.providersTypes ?? 0;
    return message;
  }
};