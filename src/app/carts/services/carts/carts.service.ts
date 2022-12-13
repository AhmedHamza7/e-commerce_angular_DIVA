import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _httpClient:HttpClient) { }


  postCart(model:any){
    return this._httpClient.post('https://fakestoreapi.com/carts', model)
  }

}
