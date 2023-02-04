import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  editProduct = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
  });
  ngOnInit(): void {
    this.product
      .getProductById(this.router.snapshot.params['id'])
      .subscribe((product: any) => {
        this.editProduct = new FormGroup({
          name: new FormControl(product['name']),
          quantity: new FormControl(product['quantity']),
          price: new FormControl(product['price']),
        });
      });
  }
  updateProduct() {
    this.product
      .updateProduct(this.router.snapshot.params['id'], this.editProduct.value)
      .subscribe((updatedProduct) => {
        alert('Product updated successfully.');
        this.toList.navigate(['/products']);
      });
  }
  navigateToList() {
    this.toList.navigate(['/products']);
  }
}
