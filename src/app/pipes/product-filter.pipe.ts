import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product'; // No olvides el import
@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], filterBy: string): Product[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    if (filter) {
      return products.filter((prod) =>
        prod.desc.toLocaleLowerCase().includes(filter)
      );
    }
    return products;
  }
}
