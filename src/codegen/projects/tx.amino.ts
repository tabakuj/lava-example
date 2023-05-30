import { keyTypeFromJSON } from "./project";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import { MsgAddKeys, MsgSetPolicy, MsgSetSubscriptionPolicy } from "./tx";
export interface MsgAddKeysAminoType extends AminoMsg {
  type: "/lavanet.lava.projects.MsgAddKeys";
  value: {
    creator: string;
    project: string;
    project_keys: {
      key: string;
      types: {
        types: number;
      }[];
    }[];
  };
}
export interface MsgSetPolicyAminoType extends AminoMsg {
  type: "/lavanet.lava.projects.MsgSetPolicy";
  value: {
    creator: string;
    project: string;
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
}
export interface MsgSetSubscriptionPolicyAminoType extends AminoMsg {
  type: "/lavanet.lava.projects.MsgSetSubscriptionPolicy";
  value: {
    creator: string;
    projects: string[];
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
}
export const AminoConverter = {
  "/lavanet.lava.projects.MsgAddKeys": {
    aminoType: "/lavanet.lava.projects.MsgAddKeys",
    toAmino: ({
      creator,
      project,
      projectKeys
    }: MsgAddKeys): MsgAddKeysAminoType["value"] => {
      return {
        creator,
        project,
        project_keys: projectKeys.map(el0 => ({
          key: el0.key,
          types: el0.types.map(el1 => ({
            types: el1.types
          }))
        }))
      };
    },
    fromAmino: ({
      creator,
      project,
      project_keys
    }: MsgAddKeysAminoType["value"]): MsgAddKeys => {
      return {
        creator,
        project,
        projectKeys: project_keys.map(el0 => ({
          key: el0.key,
          types: el0.types.map(el1 => ({
            types: keyTypeFromJSON(el1.types)
          }))
        }))
      };
    }
  },
  "/lavanet.lava.projects.MsgSetPolicy": {
    aminoType: "/lavanet.lava.projects.MsgSetPolicy",
    toAmino: ({
      creator,
      project,
      policy
    }: MsgSetPolicy): MsgSetPolicyAminoType["value"] => {
      return {
        creator,
        project,
        policy: {
          chain_policies: policy.chainPolicies.map(el0 => ({
            chain_id: el0.chainId,
            apis: el0.apis
          })),
          geolocation_profile: policy.geolocationProfile.toString(),
          total_cu_limit: policy.totalCuLimit.toString(),
          epoch_cu_limit: policy.epochCuLimit.toString(),
          max_providers_to_pair: policy.maxProvidersToPair.toString()
        }
      };
    },
    fromAmino: ({
      creator,
      project,
      policy
    }: MsgSetPolicyAminoType["value"]): MsgSetPolicy => {
      return {
        creator,
        project,
        policy: {
          chainPolicies: policy.chain_policies.map(el1 => ({
            chainId: el1.chain_id,
            apis: el1.apis
          })),
          geolocationProfile: Long.fromString(policy.geolocation_profile),
          totalCuLimit: Long.fromString(policy.total_cu_limit),
          epochCuLimit: Long.fromString(policy.epoch_cu_limit),
          maxProvidersToPair: Long.fromString(policy.max_providers_to_pair)
        }
      };
    }
  },
  "/lavanet.lava.projects.MsgSetSubscriptionPolicy": {
    aminoType: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
    toAmino: ({
      creator,
      projects,
      policy
    }: MsgSetSubscriptionPolicy): MsgSetSubscriptionPolicyAminoType["value"] => {
      return {
        creator,
        projects,
        policy: {
          chain_policies: policy.chainPolicies.map(el0 => ({
            chain_id: el0.chainId,
            apis: el0.apis
          })),
          geolocation_profile: policy.geolocationProfile.toString(),
          total_cu_limit: policy.totalCuLimit.toString(),
          epoch_cu_limit: policy.epochCuLimit.toString(),
          max_providers_to_pair: policy.maxProvidersToPair.toString()
        }
      };
    },
    fromAmino: ({
      creator,
      projects,
      policy
    }: MsgSetSubscriptionPolicyAminoType["value"]): MsgSetSubscriptionPolicy => {
      return {
        creator,
        projects,
        policy: {
          chainPolicies: policy.chain_policies.map(el1 => ({
            chainId: el1.chain_id,
            apis: el1.apis
          })),
          geolocationProfile: Long.fromString(policy.geolocation_profile),
          totalCuLimit: Long.fromString(policy.total_cu_limit),
          epochCuLimit: Long.fromString(policy.epoch_cu_limit),
          maxProvidersToPair: Long.fromString(policy.max_providers_to_pair)
        }
      };
    }
  }
};