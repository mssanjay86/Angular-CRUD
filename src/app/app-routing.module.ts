import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const routes: Routes = [
  {
    //add-product component will be displayed when we navigate to /add.
    path: '',
    component: AddProductComponent,
  },
  {
    //edit-product component will be displayed when we navigate to /edit/id.
    path: 'edit/:id',
    component: EditProductComponent,
  },
  {
    //product list component will be displayed when we navigate to /products.
    path: 'products',
    component: ListProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
