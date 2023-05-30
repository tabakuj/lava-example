import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBuy, MsgAddProject } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lavanet.lava.subscription.MsgBuy", MsgBuy], ["/lavanet.lava.subscription.MsgAddProject", MsgAddProject]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    buy(value: MsgBuy) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: MsgBuy.encode(value).finish()
      };
    },
    addProject(value: MsgAddProject) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: MsgAddProject.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    buy(value: MsgBuy) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value
      };
    },
    addProject(value: MsgAddProject) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value
      };
    }
  },
  fromPartial: {
    buy(value: MsgBuy) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: MsgBuy.fromPartial(value)
      };
    },
    addProject(value: MsgAddProject) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: MsgAddProject.fromPartial(value)
      };
    }
  }
};