import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LavaClientService2 } from './lava-service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LavaClientService2],
})
export class AppModule {}
