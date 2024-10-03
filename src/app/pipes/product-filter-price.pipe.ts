import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productFilterPrice',
})
export class ProductFilterPricePipe implements PipeTransform {
  transform(products: Product[], filterBy: number): Product[] {
    const filter = filterBy ? filterBy : null;
    if (filter) {
      return products.filter((prod) => prod.price >= filter);
    }
    return products;
  }
}
