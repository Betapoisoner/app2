import { Product } from './product';

export interface ResponseProducts {
  products: Product[];
}

export interface ResponseRating {
  rating: number;
}

export interface ResponseProduct {
  product: Product;
}
