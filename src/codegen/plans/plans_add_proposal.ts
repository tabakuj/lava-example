import { Plan, PlanSDKType } from "./plan";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface PlansAddProposal {
  title: string;
  description: string;
  plans: Plan[];
}
export interface PlansAddProposalSDKType {
  title: string;
  description: string;
  plans: PlanSDKType[];
}
function createBasePlansAddProposal(): PlansAddProposal {
  return {
    title: "",
    description: "",
    plans: []
  };
}
export const PlansAddProposal = {
  encode(message: PlansAddProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.plans) {
      Plan.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PlansAddProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlansAddProposal();
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
          message.plans.push(Plan.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PlansAddProposal>): PlansAddProposal {
    const message = createBasePlansAddProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plans = object.plans?.map(e => Plan.fromPartial(e)) || [];
    return message;
  }
};