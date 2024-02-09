import { Injectable } from '@nestjs/common';
import productsData from './assets/products.json';
import { Product } from './interfaces/product.model';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Bitches!';
  }

  receivedProducts(): Product[] {
    return productsData.products;
  }
}
