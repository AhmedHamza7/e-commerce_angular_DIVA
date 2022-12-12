import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { MinimizeDescPipe } from '../minimize-desc.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
    CarouselComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class ProductsModule { }
