import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductComponent }, //anasayfa için  localhost:4200
  { path: 'products', component: ProductComponent }, // localhost:4200/products
  { path: 'products/category/:categoryId', component: ProductComponent },
  { path: 'products/add', component: ProductAddComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
