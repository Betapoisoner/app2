import { Product } from '../interfaces/product';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() showImage!: boolean;

  changeRating(rating: number) {
    this.product.rating = rating;
    }
}
