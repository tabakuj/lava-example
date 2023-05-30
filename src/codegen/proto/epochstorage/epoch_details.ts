import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EpochDetails {
  startBlock: Long;
  earliestStart: Long;
  deletedEpochs: Long[];
}
export interface EpochDetailsSDKType {
  startBlock: Long;
  earliestStart: Long;
  deletedEpochs: Long[];
}
function createBaseEpochDetails(): EpochDetails {
  return {
    startBlock: Long.UZERO,
    earliestStart: Long.UZERO,
    deletedEpochs: []
  };
}
export const EpochDetails = {
  encode(message: EpochDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startBlock.isZero()) {
      writer.uint32(8).uint64(message.startBlock);
    }
    if (!message.earliestStart.isZero()) {
      writer.uint32(16).uint64(message.earliestStart);
    }
    writer.uint32(26).fork();
    for (const v of message.deletedEpochs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EpochDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlock = (reader.uint64() as Long);
          break;
        case 2:
          message.earliestStart = (reader.uint64() as Long);
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deletedEpochs.push((reader.uint64() as Long));
            }
          } else {
            message.deletedEpochs.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EpochDetails>): EpochDetails {
    const message = createBaseEpochDetails();
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? Long.fromValue(object.startBlock) : Long.UZERO;
    message.earliestStart = object.earliestStart !== undefined && object.earliestStart !== null ? Long.fromValue(object.earliestStart) : Long.UZERO;
    message.deletedEpochs = object.deletedEpochs?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};