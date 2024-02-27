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

  receivedInfoFromPostRequest(product: Product[]) {
    console.log(product, ' this was received from the client');
    const listOfProductsToBuy = product.map((prod) => {
      return {
        product: prod.name,
        price: prod.price * prod.quantityToBuy,
        quantity: prod.quantityToBuy,
      };
    });
    return listOfProductsToBuy;
  }
}
