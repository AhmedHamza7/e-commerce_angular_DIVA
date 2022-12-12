import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CartsModule { }
