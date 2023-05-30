import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LavaClientService } from './lava-client';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LavaClientService],
})
export class AppModule {}
