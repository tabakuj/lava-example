import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStakeProvider, MsgStakeClient, MsgUnstakeProvider, MsgUnstakeClient, MsgRelayPayment, MsgFreezeProvider, MsgUnfreezeProvider } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lavanet.lava.pairing.MsgStakeProvider", MsgStakeProvider], ["/lavanet.lava.pairing.MsgStakeClient", MsgStakeClient], ["/lavanet.lava.pairing.MsgUnstakeProvider", MsgUnstakeProvider], ["/lavanet.lava.pairing.MsgUnstakeClient", MsgUnstakeClient], ["/lavanet.lava.pairing.MsgRelayPayment", MsgRelayPayment], ["/lavanet.lava.pairing.MsgFreezeProvider", MsgFreezeProvider], ["/lavanet.lava.pairing.MsgUnfreezeProvider", MsgUnfreezeProvider]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    stakeProvider(value: MsgStakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.encode(value).finish()
      };
    },
    stakeClient(value: MsgStakeClient) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeClient",
        value: MsgStakeClient.encode(value).finish()
      };
    },
    unstakeProvider(value: MsgUnstakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.encode(value).finish()
      };
    },
    unstakeClient(value: MsgUnstakeClient) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeClient",
        value: MsgUnstakeClient.encode(value).finish()
      };
    },
    relayPayment(value: MsgRelayPayment) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.encode(value).finish()
      };
    },
    freezeProvider(value: MsgFreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.encode(value).finish()
      };
    },
    unfreezeProvider(value: MsgUnfreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    stakeProvider(value: MsgStakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value
      };
    },
    stakeClient(value: MsgStakeClient) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeClient",
        value
      };
    },
    unstakeProvider(value: MsgUnstakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value
      };
    },
    unstakeClient(value: MsgUnstakeClient) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeClient",
        value
      };
    },
    relayPayment(value: MsgRelayPayment) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value
      };
    },
    freezeProvider(value: MsgFreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value
      };
    },
    unfreezeProvider(value: MsgUnfreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value
      };
    }
  },
  toJSON: {
    stakeProvider(value: MsgStakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.toJSON(value)
      };
    },
    stakeClient(value: MsgStakeClient) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeClient",
        value: MsgStakeClient.toJSON(value)
      };
    },
    unstakeProvider(value: MsgUnstakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.toJSON(value)
      };
    },
    unstakeClient(value: MsgUnstakeClient) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeClient",
        value: MsgUnstakeClient.toJSON(value)
      };
    },
    relayPayment(value: MsgRelayPayment) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.toJSON(value)
      };
    },
    freezeProvider(value: MsgFreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.toJSON(value)
      };
    },
    unfreezeProvider(value: MsgUnfreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.toJSON(value)
      };
    }
  },
  fromJSON: {
    stakeProvider(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.fromJSON(value)
      };
    },
    stakeClient(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeClient",
        value: MsgStakeClient.fromJSON(value)
      };
    },
    unstakeProvider(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.fromJSON(value)
      };
    },
    unstakeClient(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeClient",
        value: MsgUnstakeClient.fromJSON(value)
      };
    },
    relayPayment(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.fromJSON(value)
      };
    },
    freezeProvider(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.fromJSON(value)
      };
    },
    unfreezeProvider(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.fromJSON(value)
      };
    }
  },
  fromPartial: {
    stakeProvider(value: MsgStakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.fromPartial(value)
      };
    },
    stakeClient(value: MsgStakeClient) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeClient",
        value: MsgStakeClient.fromPartial(value)
      };
    },
    unstakeProvider(value: MsgUnstakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.fromPartial(value)
      };
    },
    unstakeClient(value: MsgUnstakeClient) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeClient",
        value: MsgUnstakeClient.fromPartial(value)
      };
    },
    relayPayment(value: MsgRelayPayment) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.fromPartial(value)
      };
    },
    freezeProvider(value: MsgFreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.fromPartial(value)
      };
    },
    unfreezeProvider(value: MsgUnfreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.fromPartial(value)
      };
    }
  }
};