import { keyTypeFromJSON } from "../../projects/project";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgBuy, MsgAddProject } from "./tx";
export interface MsgBuyAminoType extends AminoMsg {
  type: "/lavanet.lava.subscription.MsgBuy";
  value: {
    creator: string;
    consumer: string;
    index: string;
    duration: string;
  };
}
export interface MsgAddProjectAminoType extends AminoMsg {
  type: "/lavanet.lava.subscription.MsgAddProject";
  value: {
    creator: string;
    project_data: {
      name: string;
      description: string;
      enabled: boolean;
      projectKeys: {
        key: string;
        types: {
          types: number;
        }[];
      }[];
      policy: {
        chain_policies: {
          chain_id: string;
          apis: string[];
        }[];
        geolocation_profile: string;
        total_cu_limit: string;
        epoch_cu_limit: string;
        max_providers_to_pair: string;
      };
    };
  };
}
export const AminoConverter = {
  "/lavanet.lava.subscription.MsgBuy": {
    aminoType: "/lavanet.lava.subscription.MsgBuy",
    toAmino: ({
      creator,
      consumer,
      index,
      duration
    }: MsgBuy): MsgBuyAminoType["value"] => {
      return {
        creator,
        consumer,
        index,
        duration: duration.toString()
      };
    },
    fromAmino: ({
      creator,
      consumer,
      index,
      duration
    }: MsgBuyAminoType["value"]): MsgBuy => {
      return {
        creator,
        consumer,
        index,
        duration: Long.fromString(duration)
      };
    }
  },
  "/lavanet.lava.subscription.MsgAddProject": {
    aminoType: "/lavanet.lava.subscription.MsgAddProject",
    toAmino: ({
      creator,
      projectData
    }: MsgAddProject): MsgAddProjectAminoType["value"] => {
      return {
        creator,
        project_data: {
          name: projectData.name,
          description: projectData.description,
          enabled: projectData.enabled,
          projectKeys: projectData.projectKeys.map(el0 => ({
            key: el0.key,
            types: el0.types.map(el1 => ({
              types: el1.types
            }))
          })),
          policy: {
            chain_policies: projectData.policy.chainPolicies.map(el0 => ({
              chain_id: el0.chainId,
              apis: el0.apis
            })),
            geolocation_profile: projectData.policy.geolocationProfile.toString(),
            total_cu_limit: projectData.policy.totalCuLimit.toString(),
            epoch_cu_limit: projectData.policy.epochCuLimit.toString(),
            max_providers_to_pair: projectData.policy.maxProvidersToPair.toString()
          }
        }
      };
    },
    fromAmino: ({
      creator,
      project_data
    }: MsgAddProjectAminoType["value"]): MsgAddProject => {
      return {
        creator,
        projectData: {
          name: project_data.name,
          description: project_data.description,
          enabled: project_data.enabled,
          projectKeys: project_data.projectKeys.map(el1 => ({
            key: el1.key,
            types: el1.types.map(el2 => ({
              types: keyTypeFromJSON(el2.types)
            }))
          })),
          policy: {
            chainPolicies: project_data.policy.chain_policies.map(el2 => ({
              chainId: el2.chain_id,
              apis: el2.apis
            })),
            geolocationProfile: Long.fromString(project_data.policy.geolocation_profile),
            totalCuLimit: Long.fromString(project_data.policy.total_cu_limit),
            epochCuLimit: Long.fromString(project_data.policy.epoch_cu_limit),
            maxProvidersToPair: Long.fromString(project_data.policy.max_providers_to_pair)
          }
        }
      };
    }
  }
};