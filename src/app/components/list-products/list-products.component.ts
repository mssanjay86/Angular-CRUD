import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
constructor(private product:ProductsService){}
productList:any=[];
ngOnInit():void{
  this.product.getAllProducts().subscribe((products)=>{
    console.log(products);
    this.productList=products;
  });


}
}
