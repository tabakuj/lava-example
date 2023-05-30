import { Injectable } from '@nestjs/common';
import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing';
import { OfflineDirectSigner } from '@keplr-wallet/types';
import { fromHex } from '@cosmjs/encoding';
import { SigningStargateClient } from '@cosmjs/stargate';
import { readFile } from 'fs/promises';
import { getSigninglavaClient } from '@lavanet/lavajs';

const unInitializedClient = new Error('client uninitialized');
const AdminHex =
  '755ac36e9457ca8193673aea2341f577b471ad9a3e477a3196e6cfe89dd617c6';

const AdminPublicKey = 'lava@1wp2jerhaddenaytmxl6e77ewk68gj69863mrpg';
const LAVA_TESTNET_CHAIN_ID = 'lava'; //'lava-testnet-1';
const LAVA_PUBLIC_RPC = 'http://127.0.0.1:26657/';
@Injectable()
export class LavaClientService2 {
  async GetGeneralData() {
    const client = await SigningStargateClient.connect(LAVA_PUBLIC_RPC);
    console.log(
      'With client, chain id:',
      await client.getChainId(),
      ', height:',
      await client.getHeight(),
    );
    client.disconnect();
  }
  getAdminSignerFromPriKey = async (): Promise<OfflineDirectSigner> => {
    // const key= String.fromCharCode.apply(AdminHex, AdminHex);
    return DirectSecp256k1Wallet.fromKey(fromHex(AdminHex), 'lava');
  };
  getAliceSignerFromPriKey = async (): Promise<OfflineDirectSigner> => {
    return DirectSecp256k1Wallet.fromKey(
      fromHex(
        (
          await readFile(
            '/Users/user/projects/pocs/lava-poc/src/simd.alice.private.key',
          )
        ).toString(),
      ),
      'lava',
    );
  };
  getSignerFromPriKey2 = async (): Promise<OfflineDirectSigner> => {
    return await DirectSecp256k1Wallet.fromKey(Buffer.from(AdminHex, 'hex'));
  };

  async getSignerStargateClient(): Promise<SigningStargateClient | undefined> {
    const offlineSigner = await this.getSignerFromPriKey2();
    //const { createRPCQueryClient } = lava.ClientFactory;

    const starGateClient = await getSigninglavaClient({
      rpcEndpoint: LAVA_PUBLIC_RPC,
      signer: offlineSigner,
    });
    //const starGateClient = await SigningStargateClient.connectWithSigner(LAVA_PUBLIC_RPC, offlineSigner)
    return starGateClient;
  }
  async buySubscription(projectName: string, projectKey: string) {
    const starGateClient = await this.getSignerStargateClient();
    if (!starGateClient) {
      return 'Failed to get stargate Client';
    }
    const msg = {
      typeUrl: '/lavanet.lava.subscription.MsgAddProject',
      value: {
        creator: AdminPublicKey,
        projectData: {
          name: projectName,
          description: 'testing purposes',
          enabled: true,
          projectKeys: [
            {
              key: projectKey,
              types: 1,
            },
          ],
          policy: null,
        },
      },
    };
    const fee = {
      amount: [{ amount: '1', denom: 'ulava' }], // Replace with the desired fee amount and token denomination
      gas: '50000000', // Replace with the desired gas limit
    };
    const memo = `Adding new project with name ${projectName}`;

    try {
      const response = await starGateClient.signAndBroadcast(
        AdminPublicKey,
        [msg],
        fee,
        memo,
      );
      console.log(response);
    } catch (ex) {
      console.error(ex);
    } finally {
      starGateClient.disconnect();
    }
  }
}
