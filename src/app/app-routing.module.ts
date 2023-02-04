import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from './components/add-product/add-product.component';
import {EditProductComponent} from './components/edit-product/edit-product.component';
import {ListProductsComponent} from './components/list-products/list-products.component';

const routes: Routes = [
  {
    path:'add',
    component:AddProductComponent
   },
   {
    path:'edit/:id',
    component:EditProductComponent
   },
   {
    path:'products',
    component:ListProductsComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
