import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})

export class AllProductsComponent implements OnInit {


  constructor(private _productService:ProductService) { }

  allProducts: any[] = []
  cateNames:string[] = []
  ngOnInit(): void {
    this._productService.getAllProducts().subscribe((res:any) => {
      console.log(res);
      
      this.allProducts = res
  })

  this._productService.getCategoriesNames().subscribe((res:any) => {

    this.cateNames = res

    console.log(this.cateNames);
    
  })


}

}
