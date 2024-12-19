import { Product } from '../interfaces/product';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() showImage!: boolean;
  @Output() delete = new EventEmitter<number>();

  constructor(
    private productsService: ProductService,
    public dialog: MatDialog
  ) {}
  changeRating(rating: number) {
    this.productsService.changeRating(this.product.id, rating).subscribe({
      next: (rating) => (this.product.rating = rating),
      error: (error) => console.error(error),
      complete: () => console.log('Product updated'),
    });
  }
  deleteProduct() {
    this.delete.emit(this.product.id);
  }

  openConfirmationPopup() {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        message: 'Vas ha borrar ' + this.product.description,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteProduct();
        console.log('El usuario Borro el producto');
      } else {
        // User canceled, do nothing or handle cancellation
        console.log('El usuario cancelo la eliminacion');
      }
    });
  }
}
