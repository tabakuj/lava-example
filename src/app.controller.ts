import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LavaClientService2 } from './lava-service';

@Controller()
export class AppController {
  constructor(private readonly client2: LavaClientService2) {}

  @Get()
  async getHello(): Promise<string> {
    await this.client2.GetGeneralData();
    const result = await this.client2.buySubscription(
      'testing2',
      'lava@1nazmg4xce2632pm27utpgc2xrm4va5kh4sf9ra',
    );
    return 'test';
  }
}
