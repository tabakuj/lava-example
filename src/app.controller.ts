import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { LavaClientService2 } from './lava-service';

@Controller()
export class AppController {
  constructor(private readonly client2: LavaClientService2) {}

  @Get()
  async getHello(): Promise<string> {
    await this.client2.GetGeneralData();
    return 'test';
  }
  @Post()
  async createProject(@Body() projectBody: ProjectBody): Promise<string> {
    if (!projectBody) return 'bad Request.';
    const result = await this.client2.AddProject(
      projectBody.name,
      projectBody.key,
    );
    return result;
  }
  @Put()
  async UpdateProject(@Body() projectBody: ProjectBody): Promise<string> {
    if (!projectBody) return 'bad Request.';
    const result = await this.client2.UpdateProject(
      projectBody.name,
      projectBody.key,
    );
    return result;
  }
}

export interface ProjectBody {
  name: string;
  key: string;
}
