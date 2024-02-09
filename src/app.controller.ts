import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './interfaces/product.model';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getProducts')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  receivedProducts(): Product[] {
    return this.appService.receivedProducts();
  }
}
