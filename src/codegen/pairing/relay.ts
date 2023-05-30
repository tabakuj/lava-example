import { Long, isSet, bytesFromBase64, base64FromBytes } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface RelaySession {
  specId: string;
  contentHash: Uint8Array;
  sessionId: Long;
  /** total compute unit used including this relay */
  cuSum: Long;
  provider: string;
  relayNum: Long;
  qosReport?: QualityOfServiceReport;
  epoch: Long;
  unresponsiveProviders: Uint8Array;
  lavaChainId: string;
  sig: Uint8Array;
  badge?: Badge;
}
export interface RelaySessionSDKType {
  spec_id: string;
  content_hash: Uint8Array;
  session_id: Long;
  cu_sum: Long;
  provider: string;
  relay_num: Long;
  qos_report?: QualityOfServiceReportSDKType;
  epoch: Long;
  unresponsive_providers: Uint8Array;
  lava_chain_id: string;
  sig: Uint8Array;
  badge?: BadgeSDKType;
}
export interface RelayPrivateData {
  connectionType: string;
  /** some relays have associated urls that are filled with params ('/block/{height}') */
  apiUrl: string;
  data: Uint8Array;
  requestBlock: Long;
  apiInterface: string;
  salt: Uint8Array;
}
export interface RelayPrivateDataSDKType {
  connection_type: string;
  api_url: string;
  data: Uint8Array;
  request_block: Long;
  api_interface: string;
  salt: Uint8Array;
}
export interface RelayRequest {
  relaySession?: RelaySession;
  relayData?: RelayPrivateData;
}
export interface RelayRequestSDKType {
  relay_session?: RelaySessionSDKType;
  relay_data?: RelayPrivateDataSDKType;
}
export interface Badge {
  cuAllocation: Long;
  epoch: Long;
  address: string;
  lavaChainId: string;
  projectSig: Uint8Array;
}
export interface BadgeSDKType {
  cu_allocation: Long;
  epoch: Long;
  address: string;
  lava_chain_id: string;
  project_sig: Uint8Array;
}
export interface RelayReply {
  data: Uint8Array;
  /** sign the data hash+query hash+nonce */
  sig: Uint8Array;
  nonce: number;
  latestBlock: Long;
  finalizedBlocksHashes: Uint8Array;
  /** sign latest_block+finalized_blocks_hashes+session_id+block_height+relay_num */
  sigBlocks: Uint8Array;
}
export interface RelayReplySDKType {
  data: Uint8Array;
  sig: Uint8Array;
  nonce: number;
  latest_block: Long;
  finalized_blocks_hashes: Uint8Array;
  sig_blocks: Uint8Array;
}
export interface QualityOfServiceReport {
  latency: string;
  availability: string;
  sync: string;
}
export interface QualityOfServiceReportSDKType {
  latency: string;
  availability: string;
  sync: string;
}
function createBaseRelaySession(): RelaySession {
  return {
    specId: "",
    contentHash: new Uint8Array(),
    sessionId: Long.UZERO,
    cuSum: Long.UZERO,
    provider: "",
    relayNum: Long.UZERO,
    qosReport: undefined,
    epoch: Long.ZERO,
    unresponsiveProviders: new Uint8Array(),
    lavaChainId: "",
    sig: new Uint8Array(),
    badge: undefined
  };
}
export const RelaySession = {
  encode(message: RelaySession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.specId !== "") {
      writer.uint32(10).string(message.specId);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(18).bytes(message.contentHash);
    }
    if (!message.sessionId.isZero()) {
      writer.uint32(24).uint64(message.sessionId);
    }
    if (!message.cuSum.isZero()) {
      writer.uint32(32).uint64(message.cuSum);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (!message.relayNum.isZero()) {
      writer.uint32(48).uint64(message.relayNum);
    }
    if (message.qosReport !== undefined) {
      QualityOfServiceReport.encode(message.qosReport, writer.uint32(58).fork()).ldelim();
    }
    if (!message.epoch.isZero()) {
      writer.uint32(64).int64(message.epoch);
    }
    if (message.unresponsiveProviders.length !== 0) {
      writer.uint32(74).bytes(message.unresponsiveProviders);
    }
    if (message.lavaChainId !== "") {
      writer.uint32(82).string(message.lavaChainId);
    }
    if (message.sig.length !== 0) {
      writer.uint32(90).bytes(message.sig);
    }
    if (message.badge !== undefined) {
      Badge.encode(message.badge, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RelaySession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelaySession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.specId = reader.string();
          break;
        case 2:
          message.contentHash = reader.bytes();
          break;
        case 3:
          message.sessionId = (reader.uint64() as Long);
          break;
        case 4:
          message.cuSum = (reader.uint64() as Long);
          break;
        case 5:
          message.provider = reader.string();
          break;
        case 6:
          message.relayNum = (reader.uint64() as Long);
          break;
        case 7:
          message.qosReport = QualityOfServiceReport.decode(reader, reader.uint32());
          break;
        case 8:
          message.epoch = (reader.int64() as Long);
          break;
        case 9:
          message.unresponsiveProviders = reader.bytes();
          break;
        case 10:
          message.lavaChainId = reader.string();
          break;
        case 11:
          message.sig = reader.bytes();
          break;
        case 12:
          message.badge = Badge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RelaySession {
    return {
      specId: isSet(object.specId) ? String(object.specId) : "",
      contentHash: isSet(object.contentHash) ? bytesFromBase64(object.contentHash) : new Uint8Array(),
      sessionId: isSet(object.sessionId) ? Long.fromValue(object.sessionId) : Long.UZERO,
      cuSum: isSet(object.cuSum) ? Long.fromValue(object.cuSum) : Long.UZERO,
      provider: isSet(object.provider) ? String(object.provider) : "",
      relayNum: isSet(object.relayNum) ? Long.fromValue(object.relayNum) : Long.UZERO,
      qosReport: isSet(object.qosReport) ? QualityOfServiceReport.fromJSON(object.qosReport) : undefined,
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.ZERO,
      unresponsiveProviders: isSet(object.unresponsiveProviders) ? bytesFromBase64(object.unresponsiveProviders) : new Uint8Array(),
      lavaChainId: isSet(object.lavaChainId) ? String(object.lavaChainId) : "",
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
      badge: isSet(object.badge) ? Badge.fromJSON(object.badge) : undefined
    };
  },
  toJSON(message: RelaySession): unknown {
    const obj: any = {};
    message.specId !== undefined && (obj.specId = message.specId);
    message.contentHash !== undefined && (obj.contentHash = base64FromBytes(message.contentHash !== undefined ? message.contentHash : new Uint8Array()));
    message.sessionId !== undefined && (obj.sessionId = (message.sessionId || Long.UZERO).toString());
    message.cuSum !== undefined && (obj.cuSum = (message.cuSum || Long.UZERO).toString());
    message.provider !== undefined && (obj.provider = message.provider);
    message.relayNum !== undefined && (obj.relayNum = (message.relayNum || Long.UZERO).toString());
    message.qosReport !== undefined && (obj.qosReport = message.qosReport ? QualityOfServiceReport.toJSON(message.qosReport) : undefined);
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.ZERO).toString());
    message.unresponsiveProviders !== undefined && (obj.unresponsiveProviders = base64FromBytes(message.unresponsiveProviders !== undefined ? message.unresponsiveProviders : new Uint8Array()));
    message.lavaChainId !== undefined && (obj.lavaChainId = message.lavaChainId);
    message.sig !== undefined && (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
    message.badge !== undefined && (obj.badge = message.badge ? Badge.toJSON(message.badge) : undefined);
    return obj;
  },
  fromPartial(object: Partial<RelaySession>): RelaySession {
    const message = createBaseRelaySession();
    message.specId = object.specId ?? "";
    message.contentHash = object.contentHash ?? new Uint8Array();
    message.sessionId = object.sessionId !== undefined && object.sessionId !== null ? Long.fromValue(object.sessionId) : Long.UZERO;
    message.cuSum = object.cuSum !== undefined && object.cuSum !== null ? Long.fromValue(object.cuSum) : Long.UZERO;
    message.provider = object.provider ?? "";
    message.relayNum = object.relayNum !== undefined && object.relayNum !== null ? Long.fromValue(object.relayNum) : Long.UZERO;
    message.qosReport = object.qosReport !== undefined && object.qosReport !== null ? QualityOfServiceReport.fromPartial(object.qosReport) : undefined;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.ZERO;
    message.unresponsiveProviders = object.unresponsiveProviders ?? new Uint8Array();
    message.lavaChainId = object.lavaChainId ?? "";
    message.sig = object.sig ?? new Uint8Array();
    message.badge = object.badge !== undefined && object.badge !== null ? Badge.fromPartial(object.badge) : undefined;
    return message;
  }
};
function createBaseRelayPrivateData(): RelayPrivateData {
  return {
    connectionType: "",
    apiUrl: "",
    data: new Uint8Array(),
    requestBlock: Long.ZERO,
    apiInterface: "",
    salt: new Uint8Array()
  };
}
export const RelayPrivateData = {
  encode(message: RelayPrivateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionType !== "") {
      writer.uint32(10).string(message.connectionType);
    }
    if (message.apiUrl !== "") {
      writer.uint32(18).string(message.apiUrl);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (!message.requestBlock.isZero()) {
      writer.uint32(32).int64(message.requestBlock);
    }
    if (message.apiInterface !== "") {
      writer.uint32(42).string(message.apiInterface);
    }
    if (message.salt.length !== 0) {
      writer.uint32(50).bytes(message.salt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RelayPrivateData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayPrivateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionType = reader.string();
          break;
        case 2:
          message.apiUrl = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.requestBlock = (reader.int64() as Long);
          break;
        case 5:
          message.apiInterface = reader.string();
          break;
        case 6:
          message.salt = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RelayPrivateData {
    return {
      connectionType: isSet(object.connectionType) ? String(object.connectionType) : "",
      apiUrl: isSet(object.apiUrl) ? String(object.apiUrl) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      requestBlock: isSet(object.requestBlock) ? Long.fromValue(object.requestBlock) : Long.ZERO,
      apiInterface: isSet(object.apiInterface) ? String(object.apiInterface) : "",
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array()
    };
  },
  toJSON(message: RelayPrivateData): unknown {
    const obj: any = {};
    message.connectionType !== undefined && (obj.connectionType = message.connectionType);
    message.apiUrl !== undefined && (obj.apiUrl = message.apiUrl);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.requestBlock !== undefined && (obj.requestBlock = (message.requestBlock || Long.ZERO).toString());
    message.apiInterface !== undefined && (obj.apiInterface = message.apiInterface);
    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<RelayPrivateData>): RelayPrivateData {
    const message = createBaseRelayPrivateData();
    message.connectionType = object.connectionType ?? "";
    message.apiUrl = object.apiUrl ?? "";
    message.data = object.data ?? new Uint8Array();
    message.requestBlock = object.requestBlock !== undefined && object.requestBlock !== null ? Long.fromValue(object.requestBlock) : Long.ZERO;
    message.apiInterface = object.apiInterface ?? "";
    message.salt = object.salt ?? new Uint8Array();
    return message;
  }
};
function createBaseRelayRequest(): RelayRequest {
  return {
    relaySession: undefined,
    relayData: undefined
  };
}
export const RelayRequest = {
  encode(message: RelayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relaySession !== undefined) {
      RelaySession.encode(message.relaySession, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayData !== undefined) {
      RelayPrivateData.encode(message.relayData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RelayRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relaySession = RelaySession.decode(reader, reader.uint32());
          break;
        case 2:
          message.relayData = RelayPrivateData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RelayRequest {
    return {
      relaySession: isSet(object.relaySession) ? RelaySession.fromJSON(object.relaySession) : undefined,
      relayData: isSet(object.relayData) ? RelayPrivateData.fromJSON(object.relayData) : undefined
    };
  },
  toJSON(message: RelayRequest): unknown {
    const obj: any = {};
    message.relaySession !== undefined && (obj.relaySession = message.relaySession ? RelaySession.toJSON(message.relaySession) : undefined);
    message.relayData !== undefined && (obj.relayData = message.relayData ? RelayPrivateData.toJSON(message.relayData) : undefined);
    return obj;
  },
  fromPartial(object: Partial<RelayRequest>): RelayRequest {
    const message = createBaseRelayRequest();
    message.relaySession = object.relaySession !== undefined && object.relaySession !== null ? RelaySession.fromPartial(object.relaySession) : undefined;
    message.relayData = object.relayData !== undefined && object.relayData !== null ? RelayPrivateData.fromPartial(object.relayData) : undefined;
    return message;
  }
};
function createBaseBadge(): Badge {
  return {
    cuAllocation: Long.UZERO,
    epoch: Long.UZERO,
    address: "",
    lavaChainId: "",
    projectSig: new Uint8Array()
  };
}
export const Badge = {
  encode(message: Badge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.cuAllocation.isZero()) {
      writer.uint32(8).uint64(message.cuAllocation);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.lavaChainId !== "") {
      writer.uint32(34).string(message.lavaChainId);
    }
    if (message.projectSig.length !== 0) {
      writer.uint32(42).bytes(message.projectSig);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Badge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cuAllocation = (reader.uint64() as Long);
          break;
        case 2:
          message.epoch = (reader.uint64() as Long);
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.lavaChainId = reader.string();
          break;
        case 5:
          message.projectSig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Badge {
    return {
      cuAllocation: isSet(object.cuAllocation) ? Long.fromValue(object.cuAllocation) : Long.UZERO,
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      lavaChainId: isSet(object.lavaChainId) ? String(object.lavaChainId) : "",
      projectSig: isSet(object.projectSig) ? bytesFromBase64(object.projectSig) : new Uint8Array()
    };
  },
  toJSON(message: Badge): unknown {
    const obj: any = {};
    message.cuAllocation !== undefined && (obj.cuAllocation = (message.cuAllocation || Long.UZERO).toString());
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.lavaChainId !== undefined && (obj.lavaChainId = message.lavaChainId);
    message.projectSig !== undefined && (obj.projectSig = base64FromBytes(message.projectSig !== undefined ? message.projectSig : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<Badge>): Badge {
    const message = createBaseBadge();
    message.cuAllocation = object.cuAllocation !== undefined && object.cuAllocation !== null ? Long.fromValue(object.cuAllocation) : Long.UZERO;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.address = object.address ?? "";
    message.lavaChainId = object.lavaChainId ?? "";
    message.projectSig = object.projectSig ?? new Uint8Array();
    return message;
  }
};
function createBaseRelayReply(): RelayReply {
  return {
    data: new Uint8Array(),
    sig: new Uint8Array(),
    nonce: 0,
    latestBlock: Long.ZERO,
    finalizedBlocksHashes: new Uint8Array(),
    sigBlocks: new Uint8Array()
  };
}
export const RelayReply = {
  encode(message: RelayReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    if (message.nonce !== 0) {
      writer.uint32(24).uint32(message.nonce);
    }
    if (!message.latestBlock.isZero()) {
      writer.uint32(32).int64(message.latestBlock);
    }
    if (message.finalizedBlocksHashes.length !== 0) {
      writer.uint32(42).bytes(message.finalizedBlocksHashes);
    }
    if (message.sigBlocks.length !== 0) {
      writer.uint32(50).bytes(message.sigBlocks);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RelayReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.sig = reader.bytes();
          break;
        case 3:
          message.nonce = reader.uint32();
          break;
        case 4:
          message.latestBlock = (reader.int64() as Long);
          break;
        case 5:
          message.finalizedBlocksHashes = reader.bytes();
          break;
        case 6:
          message.sigBlocks = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RelayReply {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      latestBlock: isSet(object.latestBlock) ? Long.fromValue(object.latestBlock) : Long.ZERO,
      finalizedBlocksHashes: isSet(object.finalizedBlocksHashes) ? bytesFromBase64(object.finalizedBlocksHashes) : new Uint8Array(),
      sigBlocks: isSet(object.sigBlocks) ? bytesFromBase64(object.sigBlocks) : new Uint8Array()
    };
  },
  toJSON(message: RelayReply): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.sig !== undefined && (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.latestBlock !== undefined && (obj.latestBlock = (message.latestBlock || Long.ZERO).toString());
    message.finalizedBlocksHashes !== undefined && (obj.finalizedBlocksHashes = base64FromBytes(message.finalizedBlocksHashes !== undefined ? message.finalizedBlocksHashes : new Uint8Array()));
    message.sigBlocks !== undefined && (obj.sigBlocks = base64FromBytes(message.sigBlocks !== undefined ? message.sigBlocks : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<RelayReply>): RelayReply {
    const message = createBaseRelayReply();
    message.data = object.data ?? new Uint8Array();
    message.sig = object.sig ?? new Uint8Array();
    message.nonce = object.nonce ?? 0;
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? Long.fromValue(object.latestBlock) : Long.ZERO;
    message.finalizedBlocksHashes = object.finalizedBlocksHashes ?? new Uint8Array();
    message.sigBlocks = object.sigBlocks ?? new Uint8Array();
    return message;
  }
};
function createBaseQualityOfServiceReport(): QualityOfServiceReport {
  return {
    latency: "",
    availability: "",
    sync: ""
  };
}
export const QualityOfServiceReport = {
  encode(message: QualityOfServiceReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latency !== "") {
      writer.uint32(10).string(message.latency);
    }
    if (message.availability !== "") {
      writer.uint32(18).string(message.availability);
    }
    if (message.sync !== "") {
      writer.uint32(26).string(message.sync);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QualityOfServiceReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQualityOfServiceReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latency = reader.string();
          break;
        case 2:
          message.availability = reader.string();
          break;
        case 3:
          message.sync = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QualityOfServiceReport {
    return {
      latency: isSet(object.latency) ? String(object.latency) : "",
      availability: isSet(object.availability) ? String(object.availability) : "",
      sync: isSet(object.sync) ? String(object.sync) : ""
    };
  },
  toJSON(message: QualityOfServiceReport): unknown {
    const obj: any = {};
    message.latency !== undefined && (obj.latency = message.latency);
    message.availability !== undefined && (obj.availability = message.availability);
    message.sync !== undefined && (obj.sync = message.sync);
    return obj;
  },
  fromPartial(object: Partial<QualityOfServiceReport>): QualityOfServiceReport {
    const message = createBaseQualityOfServiceReport();
    message.latency = object.latency ?? "";
    message.availability = object.availability ?? "";
    message.sync = object.sync ?? "";
    return message;
  }
};