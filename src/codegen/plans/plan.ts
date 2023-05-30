import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Policy, PolicySDKType } from "../projects/project";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Plan {
  index: string;
  /** the epoch that this plan was created */
  block: Long;
  /** plan price (in ulava) */
  price?: Coin;
  /** allow CU overuse flag */
  allowOveruse: boolean;
  /** price of CU overuse */
  overuseRate: Long;
  /** plan description (for humans) */
  description: string;
  /** plan type */
  type: string;
  /** discount for buying the plan for a year */
  annualDiscountPercentage: Long;
  planPolicy?: Policy;
}
export interface PlanSDKType {
  index: string;
  block: Long;
  price?: CoinSDKType;
  allow_overuse: boolean;
  overuse_rate: Long;
  description: string;
  type: string;
  annual_discount_percentage: Long;
  plan_policy?: PolicySDKType;
}
function createBasePlan(): Plan {
  return {
    index: "",
    block: Long.UZERO,
    price: undefined,
    allowOveruse: false,
    overuseRate: Long.UZERO,
    description: "",
    type: "",
    annualDiscountPercentage: Long.UZERO,
    planPolicy: undefined
  };
}
export const Plan = {
  encode(message: Plan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (!message.block.isZero()) {
      writer.uint32(24).uint64(message.block);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.allowOveruse === true) {
      writer.uint32(64).bool(message.allowOveruse);
    }
    if (!message.overuseRate.isZero()) {
      writer.uint32(72).uint64(message.overuseRate);
    }
    if (message.description !== "") {
      writer.uint32(90).string(message.description);
    }
    if (message.type !== "") {
      writer.uint32(98).string(message.type);
    }
    if (!message.annualDiscountPercentage.isZero()) {
      writer.uint32(104).uint64(message.annualDiscountPercentage);
    }
    if (message.planPolicy !== undefined) {
      Policy.encode(message.planPolicy, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Plan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.block = (reader.uint64() as Long);
          break;
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.allowOveruse = reader.bool();
          break;
        case 9:
          message.overuseRate = (reader.uint64() as Long);
          break;
        case 11:
          message.description = reader.string();
          break;
        case 12:
          message.type = reader.string();
          break;
        case 13:
          message.annualDiscountPercentage = (reader.uint64() as Long);
          break;
        case 14:
          message.planPolicy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Plan {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO,
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
      allowOveruse: isSet(object.allowOveruse) ? Boolean(object.allowOveruse) : false,
      overuseRate: isSet(object.overuseRate) ? Long.fromValue(object.overuseRate) : Long.UZERO,
      description: isSet(object.description) ? String(object.description) : "",
      type: isSet(object.type) ? String(object.type) : "",
      annualDiscountPercentage: isSet(object.annualDiscountPercentage) ? Long.fromValue(object.annualDiscountPercentage) : Long.UZERO,
      planPolicy: isSet(object.planPolicy) ? Policy.fromJSON(object.planPolicy) : undefined
    };
  },
  toJSON(message: Plan): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    message.price !== undefined && (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.allowOveruse !== undefined && (obj.allowOveruse = message.allowOveruse);
    message.overuseRate !== undefined && (obj.overuseRate = (message.overuseRate || Long.UZERO).toString());
    message.description !== undefined && (obj.description = message.description);
    message.type !== undefined && (obj.type = message.type);
    message.annualDiscountPercentage !== undefined && (obj.annualDiscountPercentage = (message.annualDiscountPercentage || Long.UZERO).toString());
    message.planPolicy !== undefined && (obj.planPolicy = message.planPolicy ? Policy.toJSON(message.planPolicy) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Plan>): Plan {
    const message = createBasePlan();
    message.index = object.index ?? "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.allowOveruse = object.allowOveruse ?? false;
    message.overuseRate = object.overuseRate !== undefined && object.overuseRate !== null ? Long.fromValue(object.overuseRate) : Long.UZERO;
    message.description = object.description ?? "";
    message.type = object.type ?? "";
    message.annualDiscountPercentage = object.annualDiscountPercentage !== undefined && object.annualDiscountPercentage !== null ? Long.fromValue(object.annualDiscountPercentage) : Long.UZERO;
    message.planPolicy = object.planPolicy !== undefined && object.planPolicy !== null ? Policy.fromPartial(object.planPolicy) : undefined;
    return message;
  }
};