import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// importing ActivatedRoute and Router
import { ActivatedRoute, Router } from '@angular/router';
//Importing services to use different put service.
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  constructor(
    private product: ProductsService,
    private router: ActivatedRoute,
    private toList: Router
  ) {}
  //To get the inputs from the form to update.
  editProduct = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
  });
  ngOnInit(): void {
    //Getting the id of particular product.
    this.product
      .getProductById(this.router.snapshot.params['id'])
      .subscribe((product: any) => {
        //Populating the input values of a product retrieved using id.
        this.editProduct = new FormGroup({
          name: new FormControl(product['name']),
          quantity: new FormControl(product['quantity']),
          price: new FormControl(product['price']),
        });
      });
  }
  //Method to update the product.
  updateProduct() {
    this.product
      .updateProduct(this.router.snapshot.params['id'], this.editProduct.value)
      .subscribe((updatedProduct) => {
        //Success message after updating.
        alert('Product updated successfully.');
        //Navigating to product list.
        this.toList.navigate(['/products']);
      });
  }
  //Navigate to list after clicking cancel button.
  navigateToList() {
    this.toList.navigate(['/products']);
  }
}
