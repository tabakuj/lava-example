/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lavanet.lava.projects";

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

export interface ProjectKey {
  /** the address of the project key */
  key: string;
  /** the key type, determines the privilages of the key */
  types: ProjectKey_keyType[];
  /** the vrf public key used to calculate data reliability */
  vrfpk: string;
}

/** bitmap, must only be power of 2 */
export enum ProjectKey_keyType {
  NONE = 0,
  ADMIN = 1,
  DEVELOPER = 2,
  UNRECOGNIZED = -1,
}

export function projectKey_keyTypeFromJSON(object: any): ProjectKey_keyType {
  switch (object) {
    case 0:
    case "NONE":
      return ProjectKey_keyType.NONE;
    case 1:
    case "ADMIN":
      return ProjectKey_keyType.ADMIN;
    case 2:
    case "DEVELOPER":
      return ProjectKey_keyType.DEVELOPER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectKey_keyType.UNRECOGNIZED;
  }
}

export function projectKey_keyTypeToJSON(object: ProjectKey_keyType): string {
  switch (object) {
    case ProjectKey_keyType.NONE:
      return "NONE";
    case ProjectKey_keyType.ADMIN:
      return "ADMIN";
    case ProjectKey_keyType.DEVELOPER:
      return "DEVELOPER";
    case ProjectKey_keyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** protobuf expected in YAML format: used "moretags" to simplify parsing */
export interface Policy {
  chainPolicies: ChainPolicy[];
  geolocationProfile: Long;
  totalCuLimit: Long;
  epochCuLimit: Long;
  maxProvidersToPair: Long;
}

export interface ChainPolicy {
  chainId: string;
  apis: string[];
}

export interface ProtoDeveloperData {
  projectID: string;
  vrfpk: string;
}

/** used as a container struct for the subscription module */
export interface ProjectData {
  name: string;
  description: string;
  enabled: boolean;
  projectKeys: ProjectKey[];
  policy?: Policy;
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
    snapshot: Long.UZERO,
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.index = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.subscription = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.adminPolicy = Policy.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.usedCu = reader.uint64() as Long;
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.subscriptionPolicy = Policy.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.snapshot = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Project {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      subscription: isSet(object.subscription) ? String(object.subscription) : "",
      description: isSet(object.description) ? String(object.description) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      projectKeys: Array.isArray(object?.projectKeys) ? object.projectKeys.map((e: any) => ProjectKey.fromJSON(e)) : [],
      adminPolicy: isSet(object.adminPolicy) ? Policy.fromJSON(object.adminPolicy) : undefined,
      usedCu: isSet(object.usedCu) ? Long.fromValue(object.usedCu) : Long.UZERO,
      subscriptionPolicy: isSet(object.subscriptionPolicy) ? Policy.fromJSON(object.subscriptionPolicy) : undefined,
      snapshot: isSet(object.snapshot) ? Long.fromValue(object.snapshot) : Long.UZERO,
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.subscription !== undefined && (obj.subscription = message.subscription);
    message.description !== undefined && (obj.description = message.description);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map((e) => e ? ProjectKey.toJSON(e) : undefined);
    } else {
      obj.projectKeys = [];
    }
    message.adminPolicy !== undefined &&
      (obj.adminPolicy = message.adminPolicy ? Policy.toJSON(message.adminPolicy) : undefined);
    message.usedCu !== undefined && (obj.usedCu = (message.usedCu || Long.UZERO).toString());
    message.subscriptionPolicy !== undefined &&
      (obj.subscriptionPolicy = message.subscriptionPolicy ? Policy.toJSON(message.subscriptionPolicy) : undefined);
    message.snapshot !== undefined && (obj.snapshot = (message.snapshot || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Project>, I>>(base?: I): Project {
    return Project.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Project>, I>>(object: I): Project {
    const message = createBaseProject();
    message.index = object.index ?? "";
    message.subscription = object.subscription ?? "";
    message.description = object.description ?? "";
    message.enabled = object.enabled ?? false;
    message.projectKeys = object.projectKeys?.map((e) => ProjectKey.fromPartial(e)) || [];
    message.adminPolicy = (object.adminPolicy !== undefined && object.adminPolicy !== null)
      ? Policy.fromPartial(object.adminPolicy)
      : undefined;
    message.usedCu = (object.usedCu !== undefined && object.usedCu !== null)
      ? Long.fromValue(object.usedCu)
      : Long.UZERO;
    message.subscriptionPolicy = (object.subscriptionPolicy !== undefined && object.subscriptionPolicy !== null)
      ? Policy.fromPartial(object.subscriptionPolicy)
      : undefined;
    message.snapshot = (object.snapshot !== undefined && object.snapshot !== null)
      ? Long.fromValue(object.snapshot)
      : Long.UZERO;
    return message;
  },
};

function createBaseProjectKey(): ProjectKey {
  return { key: "", types: [], vrfpk: "" };
}

export const ProjectKey = {
  encode(message: ProjectKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    writer.uint32(18).fork();
    for (const v of message.types) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.vrfpk !== "") {
      writer.uint32(26).string(message.vrfpk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag == 16) {
            message.types.push(reader.int32() as any);
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.types.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 3:
          if (tag != 26) {
            break;
          }

          message.vrfpk = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectKey {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      types: Array.isArray(object?.types) ? object.types.map((e: any) => projectKey_keyTypeFromJSON(e)) : [],
      vrfpk: isSet(object.vrfpk) ? String(object.vrfpk) : "",
    };
  },

  toJSON(message: ProjectKey): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    if (message.types) {
      obj.types = message.types.map((e) => projectKey_keyTypeToJSON(e));
    } else {
      obj.types = [];
    }
    message.vrfpk !== undefined && (obj.vrfpk = message.vrfpk);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectKey>, I>>(base?: I): ProjectKey {
    return ProjectKey.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectKey>, I>>(object: I): ProjectKey {
    const message = createBaseProjectKey();
    message.key = object.key ?? "";
    message.types = object.types?.map((e) => e) || [];
    message.vrfpk = object.vrfpk ?? "";
    return message;
  },
};

function createBasePolicy(): Policy {
  return {
    chainPolicies: [],
    geolocationProfile: Long.UZERO,
    totalCuLimit: Long.UZERO,
    epochCuLimit: Long.UZERO,
    maxProvidersToPair: Long.UZERO,
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainPolicies.push(ChainPolicy.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.geolocationProfile = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.totalCuLimit = reader.uint64() as Long;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.epochCuLimit = reader.uint64() as Long;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.maxProvidersToPair = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Policy {
    return {
      chainPolicies: Array.isArray(object?.chainPolicies)
        ? object.chainPolicies.map((e: any) => ChainPolicy.fromJSON(e))
        : [],
      geolocationProfile: isSet(object.geolocationProfile) ? Long.fromValue(object.geolocationProfile) : Long.UZERO,
      totalCuLimit: isSet(object.totalCuLimit) ? Long.fromValue(object.totalCuLimit) : Long.UZERO,
      epochCuLimit: isSet(object.epochCuLimit) ? Long.fromValue(object.epochCuLimit) : Long.UZERO,
      maxProvidersToPair: isSet(object.maxProvidersToPair) ? Long.fromValue(object.maxProvidersToPair) : Long.UZERO,
    };
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    if (message.chainPolicies) {
      obj.chainPolicies = message.chainPolicies.map((e) => e ? ChainPolicy.toJSON(e) : undefined);
    } else {
      obj.chainPolicies = [];
    }
    message.geolocationProfile !== undefined &&
      (obj.geolocationProfile = (message.geolocationProfile || Long.UZERO).toString());
    message.totalCuLimit !== undefined && (obj.totalCuLimit = (message.totalCuLimit || Long.UZERO).toString());
    message.epochCuLimit !== undefined && (obj.epochCuLimit = (message.epochCuLimit || Long.UZERO).toString());
    message.maxProvidersToPair !== undefined &&
      (obj.maxProvidersToPair = (message.maxProvidersToPair || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Policy>, I>>(base?: I): Policy {
    return Policy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Policy>, I>>(object: I): Policy {
    const message = createBasePolicy();
    message.chainPolicies = object.chainPolicies?.map((e) => ChainPolicy.fromPartial(e)) || [];
    message.geolocationProfile = (object.geolocationProfile !== undefined && object.geolocationProfile !== null)
      ? Long.fromValue(object.geolocationProfile)
      : Long.UZERO;
    message.totalCuLimit = (object.totalCuLimit !== undefined && object.totalCuLimit !== null)
      ? Long.fromValue(object.totalCuLimit)
      : Long.UZERO;
    message.epochCuLimit = (object.epochCuLimit !== undefined && object.epochCuLimit !== null)
      ? Long.fromValue(object.epochCuLimit)
      : Long.UZERO;
    message.maxProvidersToPair = (object.maxProvidersToPair !== undefined && object.maxProvidersToPair !== null)
      ? Long.fromValue(object.maxProvidersToPair)
      : Long.UZERO;
    return message;
  },
};

function createBaseChainPolicy(): ChainPolicy {
  return { chainId: "", apis: [] };
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.apis.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChainPolicy {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ChainPolicy): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    if (message.apis) {
      obj.apis = message.apis.map((e) => e);
    } else {
      obj.apis = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChainPolicy>, I>>(base?: I): ChainPolicy {
    return ChainPolicy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChainPolicy>, I>>(object: I): ChainPolicy {
    const message = createBaseChainPolicy();
    message.chainId = object.chainId ?? "";
    message.apis = object.apis?.map((e) => e) || [];
    return message;
  },
};

function createBaseProtoDeveloperData(): ProtoDeveloperData {
  return { projectID: "", vrfpk: "" };
}

export const ProtoDeveloperData = {
  encode(message: ProtoDeveloperData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectID !== "") {
      writer.uint32(10).string(message.projectID);
    }
    if (message.vrfpk !== "") {
      writer.uint32(18).string(message.vrfpk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoDeveloperData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoDeveloperData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.projectID = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.vrfpk = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtoDeveloperData {
    return {
      projectID: isSet(object.projectID) ? String(object.projectID) : "",
      vrfpk: isSet(object.vrfpk) ? String(object.vrfpk) : "",
    };
  },

  toJSON(message: ProtoDeveloperData): unknown {
    const obj: any = {};
    message.projectID !== undefined && (obj.projectID = message.projectID);
    message.vrfpk !== undefined && (obj.vrfpk = message.vrfpk);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtoDeveloperData>, I>>(base?: I): ProtoDeveloperData {
    return ProtoDeveloperData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProtoDeveloperData>, I>>(object: I): ProtoDeveloperData {
    const message = createBaseProtoDeveloperData();
    message.projectID = object.projectID ?? "";
    message.vrfpk = object.vrfpk ?? "";
    return message;
  },
};

function createBaseProjectData(): ProjectData {
  return { name: "", description: "", enabled: false, projectKeys: [], policy: undefined };
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.policy = Policy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectData {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      projectKeys: Array.isArray(object?.projectKeys) ? object.projectKeys.map((e: any) => ProjectKey.fromJSON(e)) : [],
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined,
    };
  },

  toJSON(message: ProjectData): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map((e) => e ? ProjectKey.toJSON(e) : undefined);
    } else {
      obj.projectKeys = [];
    }
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectData>, I>>(base?: I): ProjectData {
    return ProjectData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectData>, I>>(object: I): ProjectData {
    const message = createBaseProjectData();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.enabled = object.enabled ?? false;
    message.projectKeys = object.projectKeys?.map((e) => ProjectKey.fromPartial(e)) || [];
    message.policy = (object.policy !== undefined && object.policy !== null)
      ? Policy.fromPartial(object.policy)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
