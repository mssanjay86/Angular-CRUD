import { Component, OnInit } from '@angular/core';
// Importing service to use GET service
import { ProductsService } from '../../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  constructor(private product: ProductsService, private router: Router) {}
  //Passing empty string to achieve filteration.
  searchProduct: string = '';
  sortByOrder: string = '';
  isDescOrder: boolean = true;
  //Storing form data in array.
  productList: any = [];
  ngOnInit(): void {
    //Getting all the products
    this.product.getAllProducts().subscribe((products) => {
      this.productList = products;
    });
  }
  //Add button functionality and navigate to add product component.
  addBtn() {
    this.router.navigate(['/add']);
  }
  //Deleting the product based on id.
  deleteProduct(productId: any) {
    this.product.deleteProduct(productId).subscribe((deletedProduct) => {
      //Refreshing page after deleting.
      this.ngOnInit();
    });
  }
  //Edit functionality performed using id.
  editProduct(productId: any) {
    //Navigate to update component by taking id of product.
    this.router.navigate(['/edit/' + productId]);
  }

  //Method to sort.
  sort(productDetails: any) {
    this.isDescOrder = !this.isDescOrder;
    this.sortByOrder = productDetails;
  }
}
