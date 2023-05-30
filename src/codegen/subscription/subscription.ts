import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Subscription {
  /** creator pays for the subscription */
  creator: string;
  /** consumer uses the subscription */
  consumer: string;
  /** when the subscription was created */
  block: Long;
  /** index (name) of plan */
  planIndex: string;
  /** when the plan was created */
  planBlock: Long;
  /** total requested duration in months */
  durationTotal: Long;
  /** remaining duration in months */
  durationLeft: Long;
  /** expiry time of current month */
  monthExpiryTime: Long;
  /** when previous month expired */
  prevExpiryBlock: Long;
  /** CU allowance during current month */
  monthCuTotal: Long;
  /** CU remaining during current month */
  monthCuLeft: Long;
  /** CU remaining for previous month */
  prevCuLeft: Long;
}
export interface SubscriptionSDKType {
  creator: string;
  consumer: string;
  block: Long;
  plan_index: string;
  plan_block: Long;
  duration_total: Long;
  duration_left: Long;
  month_expiry_time: Long;
  prev_expiry_block: Long;
  month_cu_total: Long;
  month_cu_left: Long;
  prev_cu_left: Long;
}
function createBaseSubscription(): Subscription {
  return {
    creator: "",
    consumer: "",
    block: Long.UZERO,
    planIndex: "",
    planBlock: Long.UZERO,
    durationTotal: Long.UZERO,
    durationLeft: Long.UZERO,
    monthExpiryTime: Long.UZERO,
    prevExpiryBlock: Long.UZERO,
    monthCuTotal: Long.UZERO,
    monthCuLeft: Long.UZERO,
    prevCuLeft: Long.UZERO
  };
}
export const Subscription = {
  encode(message: Subscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (!message.block.isZero()) {
      writer.uint32(24).uint64(message.block);
    }
    if (message.planIndex !== "") {
      writer.uint32(34).string(message.planIndex);
    }
    if (!message.planBlock.isZero()) {
      writer.uint32(40).uint64(message.planBlock);
    }
    if (!message.durationTotal.isZero()) {
      writer.uint32(48).uint64(message.durationTotal);
    }
    if (!message.durationLeft.isZero()) {
      writer.uint32(56).uint64(message.durationLeft);
    }
    if (!message.monthExpiryTime.isZero()) {
      writer.uint32(64).uint64(message.monthExpiryTime);
    }
    if (!message.prevExpiryBlock.isZero()) {
      writer.uint32(72).uint64(message.prevExpiryBlock);
    }
    if (!message.monthCuTotal.isZero()) {
      writer.uint32(80).uint64(message.monthCuTotal);
    }
    if (!message.monthCuLeft.isZero()) {
      writer.uint32(88).uint64(message.monthCuLeft);
    }
    if (!message.prevCuLeft.isZero()) {
      writer.uint32(96).uint64(message.prevCuLeft);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Subscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumer = reader.string();
          break;
        case 3:
          message.block = (reader.uint64() as Long);
          break;
        case 4:
          message.planIndex = reader.string();
          break;
        case 5:
          message.planBlock = (reader.uint64() as Long);
          break;
        case 6:
          message.durationTotal = (reader.uint64() as Long);
          break;
        case 7:
          message.durationLeft = (reader.uint64() as Long);
          break;
        case 8:
          message.monthExpiryTime = (reader.uint64() as Long);
          break;
        case 9:
          message.prevExpiryBlock = (reader.uint64() as Long);
          break;
        case 10:
          message.monthCuTotal = (reader.uint64() as Long);
          break;
        case 11:
          message.monthCuLeft = (reader.uint64() as Long);
          break;
        case 12:
          message.prevCuLeft = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Subscription>): Subscription {
    const message = createBaseSubscription();
    message.creator = object.creator ?? "";
    message.consumer = object.consumer ?? "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.planIndex = object.planIndex ?? "";
    message.planBlock = object.planBlock !== undefined && object.planBlock !== null ? Long.fromValue(object.planBlock) : Long.UZERO;
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? Long.fromValue(object.durationTotal) : Long.UZERO;
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? Long.fromValue(object.durationLeft) : Long.UZERO;
    message.monthExpiryTime = object.monthExpiryTime !== undefined && object.monthExpiryTime !== null ? Long.fromValue(object.monthExpiryTime) : Long.UZERO;
    message.prevExpiryBlock = object.prevExpiryBlock !== undefined && object.prevExpiryBlock !== null ? Long.fromValue(object.prevExpiryBlock) : Long.UZERO;
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? Long.fromValue(object.monthCuTotal) : Long.UZERO;
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? Long.fromValue(object.monthCuLeft) : Long.UZERO;
    message.prevCuLeft = object.prevCuLeft !== undefined && object.prevCuLeft !== null ? Long.fromValue(object.prevCuLeft) : Long.UZERO;
    return message;
  }
};