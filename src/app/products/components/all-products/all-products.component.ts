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

  isLoading:boolean = false;

  filteringProducts(e:any){

    let cate = e.target.value
    this.isLoading = true;
    
    this._productService.filterCategory(cate).subscribe((res:any) =>{

      this.allProducts = res
      this.isLoading = false;


      if(cate == 'all') {
        this._productService.getAllProducts().subscribe((res:any) => {
          console.log(res);
          
          this.allProducts = res
      })
      }
    })
  }
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
