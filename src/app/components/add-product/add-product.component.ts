import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {ProductsService} from '../../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private product:ProductsService,private router:Router){}
  addProduct=new FormGroup({
    name:new FormControl(''),
    quantity:new FormControl(''),
    price:new FormControl('')
});
ngOnInit():void{

}
saveProduct(){

  this.product.saveProduct(this.addProduct.value).subscribe((product)=>{
    alert("Product add successfully.");
    this.router.navigate(['/products']);

  })
}
}
