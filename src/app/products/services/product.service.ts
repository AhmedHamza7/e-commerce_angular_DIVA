import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }

  getAllProducts():Observable<any>{
    return this._httpClient.get(environment.baseApi + 'products')
  }

  getCategoriesNames():Observable<any>{
    return this._httpClient.get(environment.baseApi + 'products/categories')
  }

  filterCategory(cate:string):Observable<any>{
    return this._httpClient.get(environment.baseApi + `products/category/${cate}`)
  }

  getProductById(id:any):Observable<any>{
    return this._httpClient.get(environment.baseApi + `products/${id}`)
  }
}
