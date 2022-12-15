import { Component, OnInit, Output } from '@angular/core';
import { CartsService } from '../../services/carts/carts.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems:any[] = []
  
  success:boolean = false
  constructor(private _cartService:CartsService) { }

  addAmount(i:any) {
    this.cartItems[i].quantity++;
    this.getTotalPrice()

    localStorage.setItem('addedToCart',JSON.stringify(this.cartItems))

  }

  minusAmount(i:any) {
    if (this.cartItems[i].quantity != 1) {
      this.cartItems[i].quantity--
    }
    this.getTotalPrice()
    localStorage.setItem('addedToCart',JSON.stringify(this.cartItems))
  }

  deleteItem(i:any){
    this.cartItems.splice(i, 1)

    this.getTotalPrice()
    localStorage.setItem('addedToCart',JSON.stringify(this.cartItems))
  }

  clearAllData() {
    this.cartItems = []

    this.getTotalPrice()
    localStorage.setItem('addedToCart',JSON.stringify(this.cartItems))
  }
  total:any = 0
  getTotalPrice(){
    this.total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
    this.total += this.cartItems[i].item.price * this.cartItems[i].quantity
    }
  }

  updateOnChange() {
    this.getTotalPrice()
    localStorage.setItem('addedToCart',JSON.stringify(this.cartItems))
  }

   pushCart(){
    let productsDetails = this.cartItems.map(x => {
      return {productId:x.item.id, quantity:x.quantity }
    })
    
    let pushModel = {
      userId:5,
      date:new Date(),
      products:productsDetails
    }

    this._cartService.postCart(pushModel).subscribe(res => {
      this.success = true
    })
   }
  ngOnInit(): void {


    
    // Get added products from localstorage
    if(localStorage.getItem('addedToCart') != null) {
      this.cartItems = JSON.parse(localStorage.getItem('addedToCart') || '')
    }
    console.log(this.cartItems.length);

    this.getTotalPrice()
  }

}
