import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url="http://localhost:3000/products";

  constructor(private http:HttpClient) {

   }
   getAllProducts(){

    return this.http.get(this.url);
   }
   saveProduct(product:any){
    console.log(product);
    return this.http.post(this.url,product);
   }
}
