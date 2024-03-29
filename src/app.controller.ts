import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './interfaces/product.model';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('getProducts')
  receivedProducts(): Product[] {
    return this.appService.receivedProducts();
  }
  @Post()
  receivedInfoFromPostRequest(@Body() product: Product[]): void | any[] {
    return this.appService.receivedInfoFromPostRequest(product);
  }
}
