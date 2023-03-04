import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface IResponse {
  message: string,
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IResponse {
    return { message: this.appService.getHello() };
  }
}
