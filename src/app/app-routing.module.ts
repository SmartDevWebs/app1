import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'' ,component : LoginComponent},
  {path:'home' ,component : HomeComponent},
  {path:'teams' ,component : EmployeesComponent},
  {path:'contact' ,component : ContactComponent},
  {path:'products' ,component : ProductsComponent},
  {path:'login' ,component : LoginComponent},

  {path:'**' ,component : ErrorComponent}



];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
