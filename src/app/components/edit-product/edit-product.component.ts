import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  constructor(
    private product: ProductsService,
    private router: ActivatedRoute
  ) {}
  editProduct = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
  });
  ngOnInit(): void {
    this.product
      .getProductById(this.router.snapshot.params['id'])
      .subscribe((product) => {});
  }
  updateProduct() {}
}
