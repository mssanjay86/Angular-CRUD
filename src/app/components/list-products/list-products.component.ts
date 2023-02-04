import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
constructor(private product:ProductsService,private router: Router){}
productList:any=[];
ngOnInit():void{
  this.product.getAllProducts().subscribe((products)=>{

    this.productList=products;
  });


}
addBtn(){
  this.router.navigate(['/add']);
}
deleteProduct(productId:any){
  this.product.deleteProduct(productId).subscribe((deletedProduct)=>{
    this.ngOnInit();
  });
}
editProduct(productId:any){
  console.log(productId);
  this.router.navigate(['/edit/'+productId]);
  }
}
