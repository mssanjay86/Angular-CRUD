import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
//Importing product service to use the post service.
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(private product: ProductsService, private router: Router) {}

  //This is inputs from the form stored as object.
  addProduct = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
  });
  ngOnInit(): void {}
  //Method to store the newly added product.
  saveProduct() {
    this.product.saveProduct(this.addProduct.value).subscribe((product) => {
      //Success message after successfully submitting the form.
      alert('Product added successfully.');
      //Navigating after submitting the form.
      this.router.navigate(['/products']);
    });
  }
}
