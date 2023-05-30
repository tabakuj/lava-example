import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export enum PARSER_FUNC {
  EMPTY = 0,
  /** PARSE_BY_ARG - means parameters are ordered and flat expected arguments are: [param index] (example: PARAMS: [<#BlockNum>,"banana"]) args: 0 */
  PARSE_BY_ARG = 1,
  /** PARSE_CANONICAL - means parameters are ordered and one of them has named properties, expected arguments are: [param index to object,prop_name in object] (example: PARAMS: ["banana",{prop_name:<#BlockNum>}]) need to configure args: 1,"prop_name" */
  PARSE_CANONICAL = 2,
  /** PARSE_DICTIONARY - means parameters are named, expected arguments are [prop_name,separator] (example: PARAMS: {prop_name:<#BlockNum>,prop2:"banana"}) args: "prop_name" */
  PARSE_DICTIONARY = 3,
  /**
   * PARSE_DICTIONARY_OR_ORDERED - means parameters are named expected arguments are [prop_name,separator,parameter order if not found] for input of: block=15&address=abc OR ?abc,15 we will do args: block,=,1
   * reserved
   */
  PARSE_DICTIONARY_OR_ORDERED = 4,
  /** DEFAULT - means parameters are non related to block, and should fetch latest block args: "latest" */
  DEFAULT = 6,
  UNRECOGNIZED = -1,
}
export const PARSER_FUNCSDKType = PARSER_FUNC;
export function pARSER_FUNCFromJSON(object: any): PARSER_FUNC {
  switch (object) {
    case 0:
    case "EMPTY":
      return PARSER_FUNC.EMPTY;
    case 1:
    case "PARSE_BY_ARG":
      return PARSER_FUNC.PARSE_BY_ARG;
    case 2:
    case "PARSE_CANONICAL":
      return PARSER_FUNC.PARSE_CANONICAL;
    case 3:
    case "PARSE_DICTIONARY":
      return PARSER_FUNC.PARSE_DICTIONARY;
    case 4:
    case "PARSE_DICTIONARY_OR_ORDERED":
      return PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED;
    case 6:
    case "DEFAULT":
      return PARSER_FUNC.DEFAULT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PARSER_FUNC.UNRECOGNIZED;
  }
}
export function pARSER_FUNCToJSON(object: PARSER_FUNC): string {
  switch (object) {
    case PARSER_FUNC.EMPTY:
      return "EMPTY";
    case PARSER_FUNC.PARSE_BY_ARG:
      return "PARSE_BY_ARG";
    case PARSER_FUNC.PARSE_CANONICAL:
      return "PARSE_CANONICAL";
    case PARSER_FUNC.PARSE_DICTIONARY:
      return "PARSE_DICTIONARY";
    case PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED:
      return "PARSE_DICTIONARY_OR_ORDERED";
    case PARSER_FUNC.DEFAULT:
      return "DEFAULT";
    case PARSER_FUNC.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ServiceApi {
  name: string;
  blockParsing?: BlockParser;
  computeUnits: Long;
  enabled: boolean;
  apiInterfaces: ApiInterface[];
  reserved?: SpecCategory;
  parsing?: Parsing;
  internalPath: string;
}
export interface ServiceApiSDKType {
  name: string;
  block_parsing?: BlockParserSDKType;
  compute_units: Long;
  enabled: boolean;
  api_interfaces: ApiInterfaceSDKType[];
  reserved?: SpecCategorySDKType;
  parsing?: ParsingSDKType;
  internal_path: string;
}
export interface Parsing {
  functionTag: string;
  functionTemplate: string;
  resultParsing?: BlockParser;
}
export interface ParsingSDKType {
  function_tag: string;
  function_template: string;
  result_parsing?: BlockParserSDKType;
}
export interface ApiInterface {
  interface: string;
  type: string;
  extraComputeUnits: Long;
  category?: SpecCategory;
  overwriteBlockParsing?: BlockParser;
}
export interface ApiInterfaceSDKType {
  interface: string;
  type: string;
  extra_compute_units: Long;
  category?: SpecCategorySDKType;
  overwrite_block_parsing?: BlockParserSDKType;
}
export interface BlockParser {
  parserArg: string[];
  parserFunc: PARSER_FUNC;
  /** default value when set allows parsing failures to assume the default value */
  defaultValue: string;
  /** used to parse byte responses: base64,hex,bech32 */
  encoding: string;
}
export interface BlockParserSDKType {
  parser_arg: string[];
  parser_func: PARSER_FUNC;
  default_value: string;
  encoding: string;
}
export interface SpecCategory {
  deterministic: boolean;
  local: boolean;
  subscription: boolean;
  stateful: number;
  hangingApi: boolean;
}
export interface SpecCategorySDKType {
  deterministic: boolean;
  local: boolean;
  subscription: boolean;
  stateful: number;
  hanging_api: boolean;
}
function createBaseServiceApi(): ServiceApi {
  return {
    name: "",
    blockParsing: undefined,
    computeUnits: Long.UZERO,
    enabled: false,
    apiInterfaces: [],
    reserved: undefined,
    parsing: undefined,
    internalPath: ""
  };
}
export const ServiceApi = {
  encode(message: ServiceApi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.blockParsing !== undefined) {
      BlockParser.encode(message.blockParsing, writer.uint32(18).fork()).ldelim();
    }
    if (!message.computeUnits.isZero()) {
      writer.uint32(24).uint64(message.computeUnits);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    for (const v of message.apiInterfaces) {
      ApiInterface.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.reserved !== undefined) {
      SpecCategory.encode(message.reserved, writer.uint32(50).fork()).ldelim();
    }
    if (message.parsing !== undefined) {
      Parsing.encode(message.parsing, writer.uint32(58).fork()).ldelim();
    }
    if (message.internalPath !== "") {
      writer.uint32(66).string(message.internalPath);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceApi {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceApi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.blockParsing = BlockParser.decode(reader, reader.uint32());
          break;
        case 3:
          message.computeUnits = (reader.uint64() as Long);
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.apiInterfaces.push(ApiInterface.decode(reader, reader.uint32()));
          break;
        case 6:
          message.reserved = SpecCategory.decode(reader, reader.uint32());
          break;
        case 7:
          message.parsing = Parsing.decode(reader, reader.uint32());
          break;
        case 8:
          message.internalPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceApi {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      blockParsing: isSet(object.blockParsing) ? BlockParser.fromJSON(object.blockParsing) : undefined,
      computeUnits: isSet(object.computeUnits) ? Long.fromValue(object.computeUnits) : Long.UZERO,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      apiInterfaces: Array.isArray(object?.apiInterfaces) ? object.apiInterfaces.map((e: any) => ApiInterface.fromJSON(e)) : [],
      reserved: isSet(object.reserved) ? SpecCategory.fromJSON(object.reserved) : undefined,
      parsing: isSet(object.parsing) ? Parsing.fromJSON(object.parsing) : undefined,
      internalPath: isSet(object.internalPath) ? String(object.internalPath) : ""
    };
  },
  toJSON(message: ServiceApi): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.blockParsing !== undefined && (obj.blockParsing = message.blockParsing ? BlockParser.toJSON(message.blockParsing) : undefined);
    message.computeUnits !== undefined && (obj.computeUnits = (message.computeUnits || Long.UZERO).toString());
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.apiInterfaces) {
      obj.apiInterfaces = message.apiInterfaces.map(e => e ? ApiInterface.toJSON(e) : undefined);
    } else {
      obj.apiInterfaces = [];
    }
    message.reserved !== undefined && (obj.reserved = message.reserved ? SpecCategory.toJSON(message.reserved) : undefined);
    message.parsing !== undefined && (obj.parsing = message.parsing ? Parsing.toJSON(message.parsing) : undefined);
    message.internalPath !== undefined && (obj.internalPath = message.internalPath);
    return obj;
  },
  fromPartial(object: Partial<ServiceApi>): ServiceApi {
    const message = createBaseServiceApi();
    message.name = object.name ?? "";
    message.blockParsing = object.blockParsing !== undefined && object.blockParsing !== null ? BlockParser.fromPartial(object.blockParsing) : undefined;
    message.computeUnits = object.computeUnits !== undefined && object.computeUnits !== null ? Long.fromValue(object.computeUnits) : Long.UZERO;
    message.enabled = object.enabled ?? false;
    message.apiInterfaces = object.apiInterfaces?.map(e => ApiInterface.fromPartial(e)) || [];
    message.reserved = object.reserved !== undefined && object.reserved !== null ? SpecCategory.fromPartial(object.reserved) : undefined;
    message.parsing = object.parsing !== undefined && object.parsing !== null ? Parsing.fromPartial(object.parsing) : undefined;
    message.internalPath = object.internalPath ?? "";
    return message;
  }
};
function createBaseParsing(): Parsing {
  return {
    functionTag: "",
    functionTemplate: "",
    resultParsing: undefined
  };
}
export const Parsing = {
  encode(message: Parsing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionTag !== "") {
      writer.uint32(10).string(message.functionTag);
    }
    if (message.functionTemplate !== "") {
      writer.uint32(18).string(message.functionTemplate);
    }
    if (message.resultParsing !== undefined) {
      BlockParser.encode(message.resultParsing, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Parsing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParsing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionTag = reader.string();
          break;
        case 2:
          message.functionTemplate = reader.string();
          break;
        case 3:
          message.resultParsing = BlockParser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Parsing {
    return {
      functionTag: isSet(object.functionTag) ? String(object.functionTag) : "",
      functionTemplate: isSet(object.functionTemplate) ? String(object.functionTemplate) : "",
      resultParsing: isSet(object.resultParsing) ? BlockParser.fromJSON(object.resultParsing) : undefined
    };
  },
  toJSON(message: Parsing): unknown {
    const obj: any = {};
    message.functionTag !== undefined && (obj.functionTag = message.functionTag);
    message.functionTemplate !== undefined && (obj.functionTemplate = message.functionTemplate);
    message.resultParsing !== undefined && (obj.resultParsing = message.resultParsing ? BlockParser.toJSON(message.resultParsing) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Parsing>): Parsing {
    const message = createBaseParsing();
    message.functionTag = object.functionTag ?? "";
    message.functionTemplate = object.functionTemplate ?? "";
    message.resultParsing = object.resultParsing !== undefined && object.resultParsing !== null ? BlockParser.fromPartial(object.resultParsing) : undefined;
    return message;
  }
};
function createBaseApiInterface(): ApiInterface {
  return {
    interface: "",
    type: "",
    extraComputeUnits: Long.UZERO,
    category: undefined,
    overwriteBlockParsing: undefined
  };
}
export const ApiInterface = {
  encode(message: ApiInterface, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interface !== "") {
      writer.uint32(10).string(message.interface);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (!message.extraComputeUnits.isZero()) {
      writer.uint32(24).uint64(message.extraComputeUnits);
    }
    if (message.category !== undefined) {
      SpecCategory.encode(message.category, writer.uint32(34).fork()).ldelim();
    }
    if (message.overwriteBlockParsing !== undefined) {
      BlockParser.encode(message.overwriteBlockParsing, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ApiInterface {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiInterface();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interface = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.extraComputeUnits = (reader.uint64() as Long);
          break;
        case 4:
          message.category = SpecCategory.decode(reader, reader.uint32());
          break;
        case 5:
          message.overwriteBlockParsing = BlockParser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ApiInterface {
    return {
      interface: isSet(object.interface) ? String(object.interface) : "",
      type: isSet(object.type) ? String(object.type) : "",
      extraComputeUnits: isSet(object.extraComputeUnits) ? Long.fromValue(object.extraComputeUnits) : Long.UZERO,
      category: isSet(object.category) ? SpecCategory.fromJSON(object.category) : undefined,
      overwriteBlockParsing: isSet(object.overwriteBlockParsing) ? BlockParser.fromJSON(object.overwriteBlockParsing) : undefined
    };
  },
  toJSON(message: ApiInterface): unknown {
    const obj: any = {};
    message.interface !== undefined && (obj.interface = message.interface);
    message.type !== undefined && (obj.type = message.type);
    message.extraComputeUnits !== undefined && (obj.extraComputeUnits = (message.extraComputeUnits || Long.UZERO).toString());
    message.category !== undefined && (obj.category = message.category ? SpecCategory.toJSON(message.category) : undefined);
    message.overwriteBlockParsing !== undefined && (obj.overwriteBlockParsing = message.overwriteBlockParsing ? BlockParser.toJSON(message.overwriteBlockParsing) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ApiInterface>): ApiInterface {
    const message = createBaseApiInterface();
    message.interface = object.interface ?? "";
    message.type = object.type ?? "";
    message.extraComputeUnits = object.extraComputeUnits !== undefined && object.extraComputeUnits !== null ? Long.fromValue(object.extraComputeUnits) : Long.UZERO;
    message.category = object.category !== undefined && object.category !== null ? SpecCategory.fromPartial(object.category) : undefined;
    message.overwriteBlockParsing = object.overwriteBlockParsing !== undefined && object.overwriteBlockParsing !== null ? BlockParser.fromPartial(object.overwriteBlockParsing) : undefined;
    return message;
  }
};
function createBaseBlockParser(): BlockParser {
  return {
    parserArg: [],
    parserFunc: 0,
    defaultValue: "",
    encoding: ""
  };
}
export const BlockParser = {
  encode(message: BlockParser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.parserArg) {
      writer.uint32(10).string(v!);
    }
    if (message.parserFunc !== 0) {
      writer.uint32(16).int32(message.parserFunc);
    }
    if (message.defaultValue !== "") {
      writer.uint32(26).string(message.defaultValue);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockParser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parserArg.push(reader.string());
          break;
        case 2:
          message.parserFunc = (reader.int32() as any);
          break;
        case 3:
          message.defaultValue = reader.string();
          break;
        case 4:
          message.encoding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockParser {
    return {
      parserArg: Array.isArray(object?.parserArg) ? object.parserArg.map((e: any) => String(e)) : [],
      parserFunc: isSet(object.parserFunc) ? pARSER_FUNCFromJSON(object.parserFunc) : 0,
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
      encoding: isSet(object.encoding) ? String(object.encoding) : ""
    };
  },
  toJSON(message: BlockParser): unknown {
    const obj: any = {};
    if (message.parserArg) {
      obj.parserArg = message.parserArg.map(e => e);
    } else {
      obj.parserArg = [];
    }
    message.parserFunc !== undefined && (obj.parserFunc = pARSER_FUNCToJSON(message.parserFunc));
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    return obj;
  },
  fromPartial(object: Partial<BlockParser>): BlockParser {
    const message = createBaseBlockParser();
    message.parserArg = object.parserArg?.map(e => e) || [];
    message.parserFunc = object.parserFunc ?? 0;
    message.defaultValue = object.defaultValue ?? "";
    message.encoding = object.encoding ?? "";
    return message;
  }
};
function createBaseSpecCategory(): SpecCategory {
  return {
    deterministic: false,
    local: false,
    subscription: false,
    stateful: 0,
    hangingApi: false
  };
}
export const SpecCategory = {
  encode(message: SpecCategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deterministic === true) {
      writer.uint32(8).bool(message.deterministic);
    }
    if (message.local === true) {
      writer.uint32(16).bool(message.local);
    }
    if (message.subscription === true) {
      writer.uint32(24).bool(message.subscription);
    }
    if (message.stateful !== 0) {
      writer.uint32(32).uint32(message.stateful);
    }
    if (message.hangingApi === true) {
      writer.uint32(40).bool(message.hangingApi);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SpecCategory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpecCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deterministic = reader.bool();
          break;
        case 2:
          message.local = reader.bool();
          break;
        case 3:
          message.subscription = reader.bool();
          break;
        case 4:
          message.stateful = reader.uint32();
          break;
        case 5:
          message.hangingApi = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SpecCategory {
    return {
      deterministic: isSet(object.deterministic) ? Boolean(object.deterministic) : false,
      local: isSet(object.local) ? Boolean(object.local) : false,
      subscription: isSet(object.subscription) ? Boolean(object.subscription) : false,
      stateful: isSet(object.stateful) ? Number(object.stateful) : 0,
      hangingApi: isSet(object.hangingApi) ? Boolean(object.hangingApi) : false
    };
  },
  toJSON(message: SpecCategory): unknown {
    const obj: any = {};
    message.deterministic !== undefined && (obj.deterministic = message.deterministic);
    message.local !== undefined && (obj.local = message.local);
    message.subscription !== undefined && (obj.subscription = message.subscription);
    message.stateful !== undefined && (obj.stateful = Math.round(message.stateful));
    message.hangingApi !== undefined && (obj.hangingApi = message.hangingApi);
    return obj;
  },
  fromPartial(object: Partial<SpecCategory>): SpecCategory {
    const message = createBaseSpecCategory();
    message.deterministic = object.deterministic ?? false;
    message.local = object.local ?? false;
    message.subscription = object.subscription ?? false;
    message.stateful = object.stateful ?? 0;
    message.hangingApi = object.hangingApi ?? false;
    return message;
  }
};