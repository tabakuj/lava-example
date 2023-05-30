import { ProjectKey, ProjectKeySDKType, Policy, PolicySDKType } from "./project";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface MsgAddKeys {
  creator: string;
  project: string;
  projectKeys: ProjectKey[];
}
export interface MsgAddKeysSDKType {
  creator: string;
  project: string;
  project_keys: ProjectKeySDKType[];
}
export interface MsgAddKeysResponse {}
export interface MsgAddKeysResponseSDKType {}
export interface MsgSetPolicy {
  creator: string;
  project: string;
  policy?: Policy;
}
export interface MsgSetPolicySDKType {
  creator: string;
  project: string;
  policy?: PolicySDKType;
}
export interface MsgSetPolicyResponse {}
export interface MsgSetPolicyResponseSDKType {}
export interface MsgSetSubscriptionPolicy {
  creator: string;
  projects: string[];
  policy?: Policy;
}
export interface MsgSetSubscriptionPolicySDKType {
  creator: string;
  projects: string[];
  policy?: PolicySDKType;
}
export interface MsgSetSubscriptionPolicyResponse {}
export interface MsgSetSubscriptionPolicyResponseSDKType {}
function createBaseMsgAddKeys(): MsgAddKeys {
  return {
    creator: "",
    project: "",
    projectKeys: []
  };
}
export const MsgAddKeys = {
  encode(message: MsgAddKeys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddKeys {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddKeys {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      project: isSet(object.project) ? String(object.project) : "",
      projectKeys: Array.isArray(object?.projectKeys) ? object.projectKeys.map((e: any) => ProjectKey.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgAddKeys): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.project !== undefined && (obj.project = message.project);
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(e => e ? ProjectKey.toJSON(e) : undefined);
    } else {
      obj.projectKeys = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgAddKeys>): MsgAddKeys {
    const message = createBaseMsgAddKeys();
    message.creator = object.creator ?? "";
    message.project = object.project ?? "";
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgAddKeysResponse(): MsgAddKeysResponse {
  return {};
}
export const MsgAddKeysResponse = {
  encode(_: MsgAddKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddKeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAddKeysResponse {
    return {};
  },
  toJSON(_: MsgAddKeysResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgAddKeysResponse>): MsgAddKeysResponse {
    const message = createBaseMsgAddKeysResponse();
    return message;
  }
};
function createBaseMsgSetPolicy(): MsgSetPolicy {
  return {
    creator: "",
    project: "",
    policy: undefined
  };
}
export const MsgSetPolicy = {
  encode(message: MsgSetPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPolicy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      project: isSet(object.project) ? String(object.project) : "",
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined
    };
  },
  toJSON(message: MsgSetPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.project !== undefined && (obj.project = message.project);
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetPolicy>): MsgSetPolicy {
    const message = createBaseMsgSetPolicy();
    message.creator = object.creator ?? "";
    message.project = object.project ?? "";
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  }
};
function createBaseMsgSetPolicyResponse(): MsgSetPolicyResponse {
  return {};
}
export const MsgSetPolicyResponse = {
  encode(_: MsgSetPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetPolicyResponse {
    return {};
  },
  toJSON(_: MsgSetPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetPolicyResponse>): MsgSetPolicyResponse {
    const message = createBaseMsgSetPolicyResponse();
    return message;
  }
};
function createBaseMsgSetSubscriptionPolicy(): MsgSetSubscriptionPolicy {
  return {
    creator: "",
    projects: [],
    policy: undefined
  };
}
export const MsgSetSubscriptionPolicy = {
  encode(message: MsgSetSubscriptionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.projects) {
      writer.uint32(18).string(v!);
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSubscriptionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSubscriptionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projects.push(reader.string());
          break;
        case 3:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetSubscriptionPolicy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => String(e)) : [],
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined
    };
  },
  toJSON(message: MsgSetSubscriptionPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.projects) {
      obj.projects = message.projects.map(e => e);
    } else {
      obj.projects = [];
    }
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetSubscriptionPolicy>): MsgSetSubscriptionPolicy {
    const message = createBaseMsgSetSubscriptionPolicy();
    message.creator = object.creator ?? "";
    message.projects = object.projects?.map(e => e) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  }
};
function createBaseMsgSetSubscriptionPolicyResponse(): MsgSetSubscriptionPolicyResponse {
  return {};
}
export const MsgSetSubscriptionPolicyResponse = {
  encode(_: MsgSetSubscriptionPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSubscriptionPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSubscriptionPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetSubscriptionPolicyResponse {
    return {};
  },
  toJSON(_: MsgSetSubscriptionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetSubscriptionPolicyResponse>): MsgSetSubscriptionPolicyResponse {
    const message = createBaseMsgSetSubscriptionPolicyResponse();
    return message;
  }
};