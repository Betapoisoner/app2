import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorPopupComponent } from '../error-popup/error-popup.component';

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
  constructor(
    private productsService: ProductService,
    public dialog: MatDialog
  ) {}
  deleteProduct(productId: number) {
    this.productsService.deleteProduct(productId).subscribe({
      next: () => {
        console.log('Producto Borrado - id: ' + productId);
        this.orderProducts(productId);
      },
      error: (error) => {
        this.showErrorPopup(error);
        console.error(error);
      },
    });
  }
  showErrorPopup(errorMessage: string) {
    this.dialog.open(ErrorPopupComponent, {
      data: { errorMessage },
    });
  }

  getProducts() {
    this.productsService.getProducts().subscribe({
      next: (prods) => (this.products = prods), // Success function
      error: (error) => {
        this.showErrorPopup(error);
        console.error(error);
      }, // Error function (optional)
      complete: () => console.log('Products loaded'), // Finally function (optional)
    });
  }
  orderProducts(id: number) {
    this.products = this.products.filter((product) => id != product.id);
  }
  editProduct(product: Product) {
    this.products.forEach(prod => {
      if (prod.id == product.id) prod = product;
    });
  }
  ngOnInit() {
    this.getProducts();
  }
}
