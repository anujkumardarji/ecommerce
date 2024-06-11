import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './no-auth/login/login.component';
import { SignupComponent } from './no-auth/signup/signup.component';
import { ProductsComponent } from './auth/products/products.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
    pathMatch: 'full',
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'signup',
    component : SignupComponent
  },
  {
    path : 'products',
    component : ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
