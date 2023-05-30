import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
import {Timestamp} from "../../../google/protobuf/timestamp";
export interface MsgSoftwareUpgradeAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgSoftwareUpgrade";
  value: {
    authority: string;
    plan: {
      name: string;
      time: {
        seconds: string;
        nanos: number;
      };
      height: string;
      info: string;
      upgraded_client_state: {
        type_url: string;
        value: Uint8Array;
      };
    };
  };
}
export interface MsgCancelUpgradeAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCancelUpgrade";
  value: {
    authority: string;
  };
}
export const AminoConverter = {
  "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
    aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
    toAmino: ({
      authority,
      plan
    }: MsgSoftwareUpgrade): { authority: string; plan: { name: string; upgraded_client_state: { value: Uint8Array; type_url: string }; time: Timestamp; height: string; info: string } } => {
      return {
        authority,
        plan: {
          name: plan.name,
          time: plan.time,
          height: plan.height.toString(),
          info: plan.info,
          upgraded_client_state: {
            type_url: plan.upgradedClientState.typeUrl,
            value: plan.upgradedClientState.value
          }
        }
      };
    },
    fromAmino: ({
      authority,
      plan
    }: MsgSoftwareUpgradeAminoType["value"]): { authority: string; plan: { name: string; time: { seconds: string; nanos: number }; height: Long.Long; info: string; upgradedClientState: { typeUrl: string; value: Uint8Array } } } => {
      return {
        authority,
        plan: {
          name: plan.name,
          time: plan.time,
          height: Long.fromString(plan.height),
          info: plan.info,
          upgradedClientState: {
            typeUrl: plan.upgraded_client_state.type_url,
            value: plan.upgraded_client_state.value
          }
        }
      };
    }
  },
  "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
    aminoType: "cosmos-sdk/MsgCancelUpgrade",
    toAmino: ({
      authority
    }: MsgCancelUpgrade): MsgCancelUpgradeAminoType["value"] => {
      return {
        authority
      };
    },
    fromAmino: ({
      authority
    }: MsgCancelUpgradeAminoType["value"]): MsgCancelUpgrade => {
      return {
        authority
      };
    }
  }
};