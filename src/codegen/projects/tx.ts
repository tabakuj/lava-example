import { ProjectKey, ProjectKeySDKType, Policy, PolicySDKType } from "./project";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
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
  fromPartial(object: DeepPartial<MsgAddKeys>): MsgAddKeys {
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
  fromPartial(_: DeepPartial<MsgAddKeysResponse>): MsgAddKeysResponse {
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
  fromPartial(object: DeepPartial<MsgSetPolicy>): MsgSetPolicy {
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
  fromPartial(_: DeepPartial<MsgSetPolicyResponse>): MsgSetPolicyResponse {
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
  fromPartial(object: DeepPartial<MsgSetSubscriptionPolicy>): MsgSetSubscriptionPolicy {
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
  fromPartial(_: DeepPartial<MsgSetSubscriptionPolicyResponse>): MsgSetSubscriptionPolicyResponse {
    const message = createBaseMsgSetSubscriptionPolicyResponse();
    return message;
  }
};