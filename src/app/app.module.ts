import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { MyService } from './my.service';


import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    EmployeeComponent,
    EmployeesComponent,
    ErrorComponent,
    ContactComponent,
    HomeComponent,
    ProductComponent,
    ProductsComponent,
    LoginComponent,
    FilterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
