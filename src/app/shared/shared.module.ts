import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'
import { MinimizeDescPipe } from '../minimize-desc.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsModule } from '../products/products.module';
import { CartsModule } from '../carts/carts.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MinimizeDescPipe,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    MinimizeDescPipe,
    SpinnerComponent,
    FormsModule,
    FooterComponent,
  ]
})
export class SharedModule { }
