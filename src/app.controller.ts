import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LavaClientService2 } from './lava-service';
import { LavaClientService } from './lava-client';

@Controller()
export class AppController {
  constructor(private readonly client: LavaClientService,private readonly client2: LavaClientService2) {}

  @Get()
  async getHello(): Promise<string> {
    await this.client.GetGeneralData();
    const result = await this.client.buySubscription(
      'testing',
      'lava@1m42ndcvh7qjhk4fhf35c5058hqs5kcyqf7ef07',
    );
    return 'test';
  }
}
