import { GeneratedType, Registry, OfflineSigner } from '@cosmjs/proto-signing';
import {
  defaultRegistryTypes,
  AminoTypes,
  SigningStargateClient,
} from '@cosmjs/stargate';
import { HttpEndpoint } from '@cosmjs/tendermint-rpc';
import * as conflictTxRegistry from '../conflict/tx.registry';
import * as pairingTxRegistry from '../pairing/tx.registry';
import * as projectsTxRegistry from '../projects/tx.registry';
import * as subscriptionTxRegistry from '../subscription/tx.registry';
import * as conflictTxAmino from '../conflict/tx.amino';
import * as pairingTxAmino from '../pairing/tx.amino';
import * as projectsTxAmino from '../projects/tx.amino';
import * as subscriptionTxAmino from '../subscription/tx.amino';
export const lavanetAminoConverters = {
  ...conflictTxAmino.AminoConverter,
  ...pairingTxAmino.AminoConverter,
  ...projectsTxAmino.AminoConverter,
  ...subscriptionTxAmino.AminoConverter,
};
export const lavanetProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...conflictTxRegistry.registry,
  ...pairingTxRegistry.registry,
  ...projectsTxRegistry.registry,
  ...subscriptionTxRegistry.registry,
];
export const getSigningLavanetClientOptions = ({
  defaultTypes = defaultRegistryTypes,
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...lavanetProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...lavanetAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningLavanetClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getSigningLavanetClientOptions({
    defaultTypes,
  });
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry,
      aminoTypes,
    },
  );
  return client;
};
