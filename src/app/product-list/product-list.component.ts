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
  headers = { description: 'Product', price: 'Price', avail: 'Available' };
  products: Product[] = [];
  constructor(private productsService: ProductService) {}
  deleteProduct(productId: number) {
    this.productsService.deleteProduct(productId).subscribe({
      next: () =>
        (this.products = this.products.filter(
          (product) => product.id !== productId
        )),
      error: (error) => console.error(error),
      complete: () => console.log('Producto Borrado - id: ' + productId),
    });
  }
  getProducts() {
    this.productsService.getProducts().subscribe({
      next: (prods) => (this.products = prods), // Success function
      error: (error) => console.error(error), // Error function (optional)
      complete: () => console.log('Products loaded'), // Finally function (optional)
    });
  }
  ngOnInit() {
    this.getProducts();
  }
}
