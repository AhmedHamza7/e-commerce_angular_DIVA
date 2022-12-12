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

  addedCart:any[] = []
  isLoading:boolean = false;


  // G  E  T    A L L   P R O D U C T S
  getProducts(){
    this._productService.getAllProducts().subscribe((res:any) => {
      console.log(res);
      
      this.allProducts = res
  })
  }

  // G  E  T    C A T E G O R I E S   N A M E

  getCateName(){
    this._productService.getCategoriesNames().subscribe((res:any) => {
      this.cateNames = res
    })
  }

  // F I L T E R   P R O D U C T S    R E L A T E D  T O      C A T E G O R I E S
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

  // A D D    P R O D U C T S   T O   C A R T S
  addToCart(e:any){
if(this.addedCart.find(item => item.item.id == e.item.id)) {
  alert("You already added this item before")
} else{
  this.addedCart.push(e)
}
    localStorage.setItem('addedToCart', JSON.stringify(this.addedCart))
    
  }
  ngOnInit(): void {
    if(localStorage.getItem('addedToCart') != null) {
      this.addedCart = JSON.parse(localStorage.getItem('addedToCart') || '')

      console.log(this.addedCart);
      
    }

this.getProducts()
this.getCateName()



  

}

}
