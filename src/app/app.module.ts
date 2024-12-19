import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { ProductFilterPricePipe } from './pipes/product-filter-price.pipe';
import { HttpClientModule } from '@angular/common/http';

import localeEs from '@angular/common/locales/es';
import { ProductItemComponent } from './product-item/product-item.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { DialogProductComponent } from './dialog/dialog-product/dialog-product.component';
import { DialogComponent } from './dialog/dialog/dialog.component';
registerLocaleData(localeEs, 'es');
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ProductService } from './services/product.service';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    ProductFilterPricePipe,
    ProductItemComponent,
    StarRatingComponent,
    PopupComponent,
    ErrorPopupComponent,
    DialogProductComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
      },{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
    }
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
