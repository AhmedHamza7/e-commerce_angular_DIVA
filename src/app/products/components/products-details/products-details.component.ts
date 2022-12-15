import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  id:any
  data:any = {}

  isLoading:boolean = false
  constructor(private _activatedRoute:ActivatedRoute, private productService:ProductService) { }


  getTheProduct(){
    this.isLoading = true

    this.productService.getProductById(this.id).subscribe((res)=>{

      this.data = res
      this.isLoading = false
      
      console.log(this.data);
      
    })
  }
  
  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get("id")
    console.log(this.id);

    this.getTheProduct()
  }



}
