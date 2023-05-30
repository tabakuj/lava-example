import { Long, DeepPartial } from "../../helpers";
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
  fromPartial(object: DeepPartial<ServiceApi>): ServiceApi {
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
  fromPartial(object: DeepPartial<Parsing>): Parsing {
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
  fromPartial(object: DeepPartial<ApiInterface>): ApiInterface {
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
  fromPartial(object: DeepPartial<BlockParser>): BlockParser {
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
  fromPartial(object: DeepPartial<SpecCategory>): SpecCategory {
    const message = createBaseSpecCategory();
    message.deterministic = object.deterministic ?? false;
    message.local = object.local ?? false;
    message.subscription = object.subscription ?? false;
    message.stateful = object.stateful ?? 0;
    message.hangingApi = object.hangingApi ?? false;
    return message;
  }
};