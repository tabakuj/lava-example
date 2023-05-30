import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum ProjectKey_Type {
  NONE = 0,
  ADMIN = 1,
  DEVELOPER = 2,
  UNRECOGNIZED = -1,
}
export const ProjectKey_TypeSDKType = ProjectKey_Type;
export function projectKey_TypeFromJSON(object: any): ProjectKey_Type {
  switch (object) {
    case 0:
    case "NONE":
      return ProjectKey_Type.NONE;
    case 1:
    case "ADMIN":
      return ProjectKey_Type.ADMIN;
    case 2:
    case "DEVELOPER":
      return ProjectKey_Type.DEVELOPER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectKey_Type.UNRECOGNIZED;
  }
}
export function projectKey_TypeToJSON(object: ProjectKey_Type): string {
  switch (object) {
    case ProjectKey_Type.NONE:
      return "NONE";
    case ProjectKey_Type.ADMIN:
      return "ADMIN";
    case ProjectKey_Type.DEVELOPER:
      return "DEVELOPER";
    case ProjectKey_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Project {
  /** unique id that will be the combination of subscription address and project name, cannot be changed once created */
  index: string;
  /** the subscription address that owns the project */
  subscription: string;
  /** the description of the project for the users convinient */
  description: string;
  /** enabled flag */
  enabled: boolean;
  /** list of the projects keys */
  projectKeys: ProjectKey[];
  adminPolicy?: Policy;
  usedCu: Long;
  subscriptionPolicy?: Policy;
  /** snapshot id to uniquely identify snapshots */
  snapshot: Long;
}
export interface ProjectSDKType {
  index: string;
  subscription: string;
  description: string;
  enabled: boolean;
  project_keys: ProjectKeySDKType[];
  admin_policy?: PolicySDKType;
  used_cu: Long;
  subscription_policy?: PolicySDKType;
  snapshot: Long;
}
export interface ProjectKey {
  /** the address of the project key */
  key: string;
  kinds: number;
}
export interface ProjectKeySDKType {
  key: string;
  kinds: number;
}
/** protobuf expected in YAML format: used "moretags" to simplify parsing */
export interface Policy {
  chainPolicies: ChainPolicy[];
  geolocationProfile: Long;
  totalCuLimit: Long;
  epochCuLimit: Long;
  maxProvidersToPair: Long;
}
/** protobuf expected in YAML format: used "moretags" to simplify parsing */
export interface PolicySDKType {
  chain_policies: ChainPolicySDKType[];
  geolocation_profile: Long;
  total_cu_limit: Long;
  epoch_cu_limit: Long;
  max_providers_to_pair: Long;
}
export interface ChainPolicy {
  chainId: string;
  apis: string[];
}
export interface ChainPolicySDKType {
  chain_id: string;
  apis: string[];
}
export interface ProtoDeveloperData {
  projectID: string;
}
export interface ProtoDeveloperDataSDKType {
  projectID: string;
}
/** used as a container struct for the subscription module */
export interface ProjectData {
  name: string;
  description: string;
  enabled: boolean;
  projectKeys: ProjectKey[];
  policy?: Policy;
}
/** used as a container struct for the subscription module */
export interface ProjectDataSDKType {
  name: string;
  description: string;
  enabled: boolean;
  projectKeys: ProjectKeySDKType[];
  policy?: PolicySDKType;
}
function createBaseProject(): Project {
  return {
    index: "",
    subscription: "",
    description: "",
    enabled: false,
    projectKeys: [],
    adminPolicy: undefined,
    usedCu: Long.UZERO,
    subscriptionPolicy: undefined,
    snapshot: Long.UZERO
  };
}
export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.subscription !== "") {
      writer.uint32(18).string(message.subscription);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.adminPolicy !== undefined) {
      Policy.encode(message.adminPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (!message.usedCu.isZero()) {
      writer.uint32(56).uint64(message.usedCu);
    }
    if (message.subscriptionPolicy !== undefined) {
      Policy.encode(message.subscriptionPolicy, writer.uint32(66).fork()).ldelim();
    }
    if (!message.snapshot.isZero()) {
      writer.uint32(72).uint64(message.snapshot);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.subscription = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        case 6:
          message.adminPolicy = Policy.decode(reader, reader.uint32());
          break;
        case 7:
          message.usedCu = (reader.uint64() as Long);
          break;
        case 8:
          message.subscriptionPolicy = Policy.decode(reader, reader.uint32());
          break;
        case 9:
          message.snapshot = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Project>): Project {
    const message = createBaseProject();
    message.index = object.index ?? "";
    message.subscription = object.subscription ?? "";
    message.description = object.description ?? "";
    message.enabled = object.enabled ?? false;
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromPartial(e)) || [];
    message.adminPolicy = object.adminPolicy !== undefined && object.adminPolicy !== null ? Policy.fromPartial(object.adminPolicy) : undefined;
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? Long.fromValue(object.usedCu) : Long.UZERO;
    message.subscriptionPolicy = object.subscriptionPolicy !== undefined && object.subscriptionPolicy !== null ? Policy.fromPartial(object.subscriptionPolicy) : undefined;
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Long.fromValue(object.snapshot) : Long.UZERO;
    return message;
  }
};
function createBaseProjectKey(): ProjectKey {
  return {
    key: "",
    kinds: 0
  };
}
export const ProjectKey = {
  encode(message: ProjectKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.kinds !== 0) {
      writer.uint32(32).uint32(message.kinds);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 4:
          message.kinds = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProjectKey>): ProjectKey {
    const message = createBaseProjectKey();
    message.key = object.key ?? "";
    message.kinds = object.kinds ?? 0;
    return message;
  }
};
function createBasePolicy(): Policy {
  return {
    chainPolicies: [],
    geolocationProfile: Long.UZERO,
    totalCuLimit: Long.UZERO,
    epochCuLimit: Long.UZERO,
    maxProvidersToPair: Long.UZERO
  };
}
export const Policy = {
  encode(message: Policy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chainPolicies) {
      ChainPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.geolocationProfile.isZero()) {
      writer.uint32(16).uint64(message.geolocationProfile);
    }
    if (!message.totalCuLimit.isZero()) {
      writer.uint32(24).uint64(message.totalCuLimit);
    }
    if (!message.epochCuLimit.isZero()) {
      writer.uint32(32).uint64(message.epochCuLimit);
    }
    if (!message.maxProvidersToPair.isZero()) {
      writer.uint32(40).uint64(message.maxProvidersToPair);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Policy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainPolicies.push(ChainPolicy.decode(reader, reader.uint32()));
          break;
        case 2:
          message.geolocationProfile = (reader.uint64() as Long);
          break;
        case 3:
          message.totalCuLimit = (reader.uint64() as Long);
          break;
        case 4:
          message.epochCuLimit = (reader.uint64() as Long);
          break;
        case 5:
          message.maxProvidersToPair = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Policy>): Policy {
    const message = createBasePolicy();
    message.chainPolicies = object.chainPolicies?.map(e => ChainPolicy.fromPartial(e)) || [];
    message.geolocationProfile = object.geolocationProfile !== undefined && object.geolocationProfile !== null ? Long.fromValue(object.geolocationProfile) : Long.UZERO;
    message.totalCuLimit = object.totalCuLimit !== undefined && object.totalCuLimit !== null ? Long.fromValue(object.totalCuLimit) : Long.UZERO;
    message.epochCuLimit = object.epochCuLimit !== undefined && object.epochCuLimit !== null ? Long.fromValue(object.epochCuLimit) : Long.UZERO;
    message.maxProvidersToPair = object.maxProvidersToPair !== undefined && object.maxProvidersToPair !== null ? Long.fromValue(object.maxProvidersToPair) : Long.UZERO;
    return message;
  }
};
function createBaseChainPolicy(): ChainPolicy {
  return {
    chainId: "",
    apis: []
  };
}
export const ChainPolicy = {
  encode(message: ChainPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    for (const v of message.apis) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ChainPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.apis.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ChainPolicy>): ChainPolicy {
    const message = createBaseChainPolicy();
    message.chainId = object.chainId ?? "";
    message.apis = object.apis?.map(e => e) || [];
    return message;
  }
};
function createBaseProtoDeveloperData(): ProtoDeveloperData {
  return {
    projectID: ""
  };
}
export const ProtoDeveloperData = {
  encode(message: ProtoDeveloperData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectID !== "") {
      writer.uint32(10).string(message.projectID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoDeveloperData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoDeveloperData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProtoDeveloperData>): ProtoDeveloperData {
    const message = createBaseProtoDeveloperData();
    message.projectID = object.projectID ?? "";
    return message;
  }
};
function createBaseProjectData(): ProjectData {
  return {
    name: "",
    description: "",
    enabled: false,
    projectKeys: [],
    policy: undefined
  };
}
export const ProjectData = {
  encode(message: ProjectData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        case 5:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProjectData>): ProjectData {
    const message = createBaseProjectData();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.enabled = object.enabled ?? false;
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromPartial(e)) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  }
};