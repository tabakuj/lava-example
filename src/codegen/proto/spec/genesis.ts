import { Params, ParamsSDKType } from "../../spec/params";
import { Spec, SpecSDKType } from "../../spec/spec";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the spec module's genesis state. */
export interface GenesisState {
  params?: Params;
  specList: Spec[];
  specCount: Long;
}
/** GenesisState defines the spec module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  specList: SpecSDKType[];
  specCount: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    specList: [],
    specCount: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.specList) {
      Spec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.specCount.isZero()) {
      writer.uint32(24).uint64(message.specCount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.specList.push(Spec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.specCount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.specList = object.specList?.map(e => Spec.fromPartial(e)) || [];
    message.specCount = object.specCount !== undefined && object.specCount !== null ? Long.fromValue(object.specCount) : Long.UZERO;
    return message;
  }
};