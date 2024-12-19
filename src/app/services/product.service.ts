import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import {
  ResponseRating,
  ResponseProducts,
  ResponseProduct,
} from '../interfaces/responses';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  deleteProduct(productId: number) {
    const api = 'api/tutorial/producte';
    return this.http.delete(`${api}/${productId}/delete`);
  }
  changeRating(productId: number, rating: number): Observable<number> {
    const api = 'api/tutorial/producte';
    return this.http
      .put<ResponseRating>(`${api}/${productId}/update`, {
        rating,
      })
      .pipe(map((resp) => resp.rating));
  }
  getProducts(): Observable<Product[]> {
    const api = 'api/tutorial/producte/getproductes';
    return this.http.get<ResponseProducts>(api).pipe(
      map((response) => response.products),
      catchError((resp: HttpErrorResponse) => {
        return throwError(
          () =>
            new Error(
              `Error obteniendo productos. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`
            )
        );
      })
    );
  }
}
