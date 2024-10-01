import { Component } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  showImage = true;
  toggleImage() {
    this.showImage = !this.showImage;
  }
  image = 'Image';
  title = "My product's list";
  headers = { desc: 'Product', price: 'Price', avail: 'Available' };
  products: Product[] = [
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
  constructor() {}
}
