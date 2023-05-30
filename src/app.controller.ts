import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LavaClientService } from './lava-client';

@Controller()
export class AppController {
  constructor(private readonly client: LavaClientService) {}

  @Get()
  async getHello(): Promise<string> {
    await this.client.GetGeneralData();
    const result = await this.client.buySubscription(
      'testing',
      'lava@1npd638yx3h28s2r33z92at7wsqzcrrvuk5e0ze',
    );
    return 'test';
  }
}
