import { Injectable } from '@nestjs/common';
import { DirectSecp256k1Wallet, OfflineDirectSigner } from '@cosmjs/proto-signing';
import { fromHex } from '@cosmjs/encoding';
import { getSigningLavanetClient } from '@lavanet/lavajs';
import { SigningStargateClient } from '@cosmjs/stargate';

const unInitializedClient = new Error('client uninitialized');
const AdminHex =
    '3a896b41413d66cdff87d3940a54f9dbcd2d1b42e48b6593783a905958093192';

const AdminPublicKey = 'lava@1rysl7yuqjxsj0hkzhy6z55shvw6dml4g9nh9am';
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
    return DirectSecp256k1Wallet.fromKey(fromHex(AdminHex), 'lava@');
  };

  async buySubscription(projectName: string, projectKey: string) {
    const offlineSigner = await this.getAdminSignerFromPriKey();

    const starGateClient = await getSigningLavanetClient({
      rpcEndpoint: LAVA_PUBLIC_RPC,
      signer: offlineSigner,
    });
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
              kinds: 1,
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
