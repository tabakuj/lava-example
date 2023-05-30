import { Spec, SpecSDKType } from "../../spec/spec";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface SpecAddProposal {
  title: string;
  description: string;
  specs: Spec[];
}
export interface SpecAddProposalSDKType {
  title: string;
  description: string;
  specs: SpecSDKType[];
}
function createBaseSpecAddProposal(): SpecAddProposal {
  return {
    title: "",
    description: "",
    specs: []
  };
}
export const SpecAddProposal = {
  encode(message: SpecAddProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.specs) {
      Spec.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SpecAddProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpecAddProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.specs.push(Spec.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SpecAddProposal>): SpecAddProposal {
    const message = createBaseSpecAddProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.specs = object.specs?.map(e => Spec.fromPartial(e)) || [];
    return message;
  }
};