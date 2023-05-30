import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgStakeProvider, MsgStakeClient, MsgUnstakeProvider, MsgUnstakeClient, MsgRelayPayment, MsgFreezeProvider, MsgUnfreezeProvider } from "./tx";
export interface MsgStakeProviderAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgStakeProvider";
  value: {
    creator: string;
    chainID: string;
    amount: {
      denom: string;
      amount: string;
    };
    endpoints: {
      iPPORT: string;
      useType: string;
      geolocation: string;
    }[];
    geolocation: string;
    moniker: string;
  };
}
export interface MsgStakeClientAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgStakeClient";
  value: {
    creator: string;
    chainID: string;
    amount: {
      denom: string;
      amount: string;
    };
    geolocation: string;
  };
}
export interface MsgUnstakeProviderAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgUnstakeProvider";
  value: {
    creator: string;
    chainID: string;
  };
}
export interface MsgUnstakeClientAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgUnstakeClient";
  value: {
    creator: string;
    chainID: string;
  };
}
export interface MsgRelayPaymentAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgRelayPayment";
  value: {
    creator: string;
    relays: {
      spec_id: string;
      content_hash: Uint8Array;
      session_id: string;
      cu_sum: string;
      provider: string;
      relay_num: string;
      qos_report: {
        latency: string;
        availability: string;
        sync: string;
      };
      epoch: string;
      unresponsive_providers: Uint8Array;
      lava_chain_id: string;
      sig: Uint8Array;
      badge: {
        cu_allocation: string;
        epoch: string;
        address: string;
        lava_chain_id: string;
        project_sig: Uint8Array;
      };
    }[];
    descriptionString: string;
  };
}
export interface MsgFreezeProviderAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgFreezeProvider";
  value: {
    creator: string;
    chainIds: string[];
    reason: string;
  };
}
export interface MsgUnfreezeProviderAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgUnfreezeProvider";
  value: {
    creator: string;
    chainIds: string[];
  };
}
export const AminoConverter = {
  "/lavanet.lava.pairing.MsgStakeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgStakeProvider",
    toAmino: ({
      creator,
      chainID,
      amount,
      endpoints,
      geolocation,
      moniker
    }: MsgStakeProvider): MsgStakeProviderAminoType["value"] => {
      return {
        creator,
        chainID,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        endpoints: endpoints.map(el0 => ({
          iPPORT: el0.iPPORT,
          useType: el0.useType,
          geolocation: el0.geolocation.toString()
        })),
        geolocation: geolocation.toString(),
        moniker
      };
    },
    fromAmino: ({
      creator,
      chainID,
      amount,
      endpoints,
      geolocation,
      moniker
    }: MsgStakeProviderAminoType["value"]): MsgStakeProvider => {
      return {
        creator,
        chainID,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        endpoints: endpoints.map(el0 => ({
          iPPORT: el0.iPPORT,
          useType: el0.useType,
          geolocation: Long.fromString(el0.geolocation)
        })),
        geolocation: Long.fromString(geolocation),
        moniker
      };
    }
  },
  "/lavanet.lava.pairing.MsgStakeClient": {
    aminoType: "/lavanet.lava.pairing.MsgStakeClient",
    toAmino: ({
      creator,
      chainID,
      amount,
      geolocation
    }: MsgStakeClient): MsgStakeClientAminoType["value"] => {
      return {
        creator,
        chainID,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        geolocation: geolocation.toString()
      };
    },
    fromAmino: ({
      creator,
      chainID,
      amount,
      geolocation
    }: MsgStakeClientAminoType["value"]): MsgStakeClient => {
      return {
        creator,
        chainID,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        geolocation: Long.fromString(geolocation)
      };
    }
  },
  "/lavanet.lava.pairing.MsgUnstakeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgUnstakeProvider",
    toAmino: ({
      creator,
      chainID
    }: MsgUnstakeProvider): MsgUnstakeProviderAminoType["value"] => {
      return {
        creator,
        chainID
      };
    },
    fromAmino: ({
      creator,
      chainID
    }: MsgUnstakeProviderAminoType["value"]): MsgUnstakeProvider => {
      return {
        creator,
        chainID
      };
    }
  },
  "/lavanet.lava.pairing.MsgUnstakeClient": {
    aminoType: "/lavanet.lava.pairing.MsgUnstakeClient",
    toAmino: ({
      creator,
      chainID
    }: MsgUnstakeClient): MsgUnstakeClientAminoType["value"] => {
      return {
        creator,
        chainID
      };
    },
    fromAmino: ({
      creator,
      chainID
    }: MsgUnstakeClientAminoType["value"]): MsgUnstakeClient => {
      return {
        creator,
        chainID
      };
    }
  },
  "/lavanet.lava.pairing.MsgRelayPayment": {
    aminoType: "/lavanet.lava.pairing.MsgRelayPayment",
    toAmino: ({
      creator,
      relays,
      descriptionString
    }: MsgRelayPayment): MsgRelayPaymentAminoType["value"] => {
      return {
        creator,
        relays: relays.map(el0 => ({
          spec_id: el0.specId,
          content_hash: el0.contentHash,
          session_id: el0.sessionId.toString(),
          cu_sum: el0.cuSum.toString(),
          provider: el0.provider,
          relay_num: el0.relayNum.toString(),
          qos_report: {
            latency: el0.qosReport.latency,
            availability: el0.qosReport.availability,
            sync: el0.qosReport.sync
          },
          epoch: el0.epoch.toString(),
          unresponsive_providers: el0.unresponsiveProviders,
          lava_chain_id: el0.lavaChainId,
          sig: el0.sig,
          badge: {
            cu_allocation: el0.badge.cuAllocation.toString(),
            epoch: el0.badge.epoch.toString(),
            address: el0.badge.address,
            lava_chain_id: el0.badge.lavaChainId,
            project_sig: el0.badge.projectSig
          }
        })),
        descriptionString
      };
    },
    fromAmino: ({
      creator,
      relays,
      descriptionString
    }: MsgRelayPaymentAminoType["value"]): MsgRelayPayment => {
      return {
        creator,
        relays: relays.map(el0 => ({
          specId: el0.spec_id,
          contentHash: el0.content_hash,
          sessionId: Long.fromString(el0.session_id),
          cuSum: Long.fromString(el0.cu_sum),
          provider: el0.provider,
          relayNum: Long.fromString(el0.relay_num),
          qosReport: {
            latency: el0.qos_report.latency,
            availability: el0.qos_report.availability,
            sync: el0.qos_report.sync
          },
          epoch: Long.fromString(el0.epoch),
          unresponsiveProviders: el0.unresponsive_providers,
          lavaChainId: el0.lava_chain_id,
          sig: el0.sig,
          badge: {
            cuAllocation: Long.fromString(el0.badge.cu_allocation),
            epoch: Long.fromString(el0.badge.epoch),
            address: el0.badge.address,
            lavaChainId: el0.badge.lava_chain_id,
            projectSig: el0.badge.project_sig
          }
        })),
        descriptionString
      };
    }
  },
  "/lavanet.lava.pairing.MsgFreezeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgFreezeProvider",
    toAmino: ({
      creator,
      chainIds,
      reason
    }: MsgFreezeProvider): MsgFreezeProviderAminoType["value"] => {
      return {
        creator,
        chainIds,
        reason
      };
    },
    fromAmino: ({
      creator,
      chainIds,
      reason
    }: MsgFreezeProviderAminoType["value"]): MsgFreezeProvider => {
      return {
        creator,
        chainIds,
        reason
      };
    }
  },
  "/lavanet.lava.pairing.MsgUnfreezeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgUnfreezeProvider",
    toAmino: ({
      creator,
      chainIds
    }: MsgUnfreezeProvider): MsgUnfreezeProviderAminoType["value"] => {
      return {
        creator,
        chainIds
      };
    },
    fromAmino: ({
      creator,
      chainIds
    }: MsgUnfreezeProviderAminoType["value"]): MsgUnfreezeProvider => {
      return {
        creator,
        chainIds
      };
    }
  }
};