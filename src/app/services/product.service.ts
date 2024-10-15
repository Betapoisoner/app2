import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        desc: 'SSD hard drive',
        avail: '2016-10-03',
        price: 75,
        imageUrl: 'assets/ssd.jpg',
        rating: 5,
      },
      {
        id: 2,
        desc: 'LGA1151 Motherboard',
        avail: '2016-09-15',
        price: 96.95,
        imageUrl: 'assets/motherboard.jpg',
        rating: 4,
      },
    ];
  }
}
