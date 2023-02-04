import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //This is base url for all services.
  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  //This is a service to get all products.
  getAllProducts() {
    return this.http.get(this.url);
  }
  //This is a service to store product in server.
  saveProduct(product: any) {
    return this.http.post(this.url, product);
  }
  //This is a service to delete product from product list.
  deleteProduct(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  //Service to get product using id.
  getProductById(id: number) {
    return this.http.get(`${this.url}/${id} `);
  }
  //Service to update the product using id and product data.
  updateProduct(id: number, product: any) {
    return this.http.put(`${this.url}/${id} `, product);
  }
}
