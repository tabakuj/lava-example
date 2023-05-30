import { Injectable } from '@nestjs/common';
import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing';
import { OfflineDirectSigner } from '@keplr-wallet/types';
import { fromHex } from '@cosmjs/encoding';
import { SigningStargateClient } from '@cosmjs/stargate';
import { getSigningLavanetClient } from './codegen/lavanet/client';

const unInitializedClient = new Error('client uninitialized');
const AdminHex =
  '755ac36e9457ca8193673aea2341f577b471ad9a3e477a3196e6cfe89dd617c6';

const AdminPublicKey = 'lava@1wp2jerhaddenaytmxl6e77ewk68gj69863mrpg';
const LAVA_TESTNET_CHAIN_ID = 'lava'; //'lava-testnet-1';
const LAVA_PUBLIC_RPC = 'http://127.0.0.1:26657/';
@Injectable()
export class LavaClientService {
  async GetGeneralData() {
    const client = await SigningStargateClient.connect(LAVA_PUBLIC_RPC);
    console.log(
      'With client, chain id:',
      await client.getChainId(),
      ', height:',
      await client.getHeight(),
    );
  }
  getAdminSignerFromPriKey = async (): Promise<OfflineDirectSigner> => {
    // const key= String.fromCharCode.apply(AdminHex, AdminHex);
    return DirectSecp256k1Wallet.fromKey(
        fromHex(AdminHex),
        LAVA_TESTNET_CHAIN_ID,
    )
  };
  async getSignerStargateClient(): Promise<SigningStargateClient | undefined> {
    // try {
    //   await keplr.enable(LAVA_TESTNET_CHAIN_ID);
    // } catch (e) {
    //   console.log('Failed to enable keplr');
    //   return;
    // }
    const offlineSigner = await this.getAdminSignerFromPriKey(); //keplr.getOfflineSigner(LAVA_TESTNET_CHAIN_ID);
    const starGateClient = await getSigningLavanetClient({
      rpcEndpoint: LAVA_PUBLIC_RPC,
      signer: offlineSigner,
    });
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
          description: '',
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
    }
  }
}
