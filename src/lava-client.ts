import { Injectable } from '@nestjs/common';
import {
  DirectSecp256k1Wallet,
  OfflineDirectSigner,
} from '@cosmjs/proto-signing';
import { fromHex } from '@cosmjs/encoding';
import { SigningStargateClient } from '@cosmjs/stargate';
import { getSigningLavanetClient } from './codegen/lavanet/client';
import { readFile } from 'fs/promises';
const unInitializedClient = new Error('client uninitialized');
const AdminHex =
  '02ea27b355ba7f93b8a6880cb1954071d8674571ee18c15049366fcbdf32f501';

const AdminPublicKey = 'lava@1g757amc0m0qpcjcet8fedk93e7mwxm2u7zh4kc';
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
    client.disconnect();
  }
  getAdminSignerFromPriKey = async (): Promise<OfflineDirectSigner> => {
    // const key= String.fromCharCode.apply(AdminHex, AdminHex);
    return DirectSecp256k1Wallet.fromKey(fromHex(AdminHex), 'lava@');
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
  getSignerFromPriKey2 = async (): Promise<DirectSecp256k1Wallet> => {
    return await DirectSecp256k1Wallet.fromKey(
      Buffer.from(AdminHex, 'hex'),
      'lava@',
    );
  };

  async getSignerStargateClient(
    offlineSigner: OfflineDirectSigner,
  ): Promise<SigningStargateClient | undefined> {
    const starGateClient = await getSigningLavanetClient({
      rpcEndpoint: LAVA_PUBLIC_RPC,
      signer: offlineSigner,
    });
    //const starGateClient = await SigningStargateClient.connectWithSigner(LAVA_PUBLIC_RPC, offlineSigner)
    return starGateClient;
  }
  async buySubscription(projectName: string, projectKey: string) {
    const offlineSigner = await this.getAdminSignerFromPriKey();
    const starGateClient = await this.getSignerStargateClient(offlineSigner);
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
              kind: 3,
            },
          ],
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
