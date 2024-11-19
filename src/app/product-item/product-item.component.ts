import { Product } from '../interfaces/product';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() showImage!: boolean;
  @Output() delete = new EventEmitter<number>();
  constructor(private productsService: ProductService) {}
  changeRating(rating: number) {
    this.productsService.changeRating(this.product.id, rating).subscribe({
      next: (rating) => (this.product.rating = rating),
      error: (error) => console.error(error),
      complete: () => console.log('Product updated'),
    });
  }
  deleteProduct() {
    this.delete.emit(this.product.id)
  }
}