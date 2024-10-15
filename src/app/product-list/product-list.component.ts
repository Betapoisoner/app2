import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  showImage = true;
  filterSearch: any;
  filterSearchPrice: any;
  toggleImage() {
    this.showImage = !this.showImage;
  }
  image = 'Image';
  title = "My product's list";
  headers = { desc: 'Product', price: 'Price', avail: 'Available' };
  products: Product[] = [];
  constructor(private productsService: ProductService) {}
  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
