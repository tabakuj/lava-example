import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async createProject(): Promise<void> {
    const adminSecret =
      'dee8b5a1ad11e201ed1d0f9fc58183704ecf1c576cafb8afa254c75920c7d89c';
  }
}
