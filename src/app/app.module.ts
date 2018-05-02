import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AccountsModule } from './accounts/accounts.module';
import { AppRoutingModule } from './/app-routing.module';
import { JobsModule } from './jobs/jobs.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ProductsModule } from './products/products.module';
import { GeneralModule } from './general/general.module';
import { SupplierProfileModule } from './supplier-profile/supplier-profile.module';

import { LoginHttpService, 
  CreateAccountHttpService, 
  UserpageHttpService,
  JobsHttpService,
  SupplierService, 
  SupplyListService, 
  SupplierSuppliesHttpService, 
  ChangePasswordHttpService, 
  TasksHttpService, 
  ReviewsHttpService } from './domain';


@NgModule({
  declarations: [ AppComponent,
     ],
  imports: [
    BrowserModule,
    FormsModule,
    AccountsModule,
    AppRoutingModule,
    JobsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReviewsModule,
    ProductsModule,
    GeneralModule,
    SupplierProfileModule,
    ],
  providers: [
    LoginHttpService,
    CreateAccountHttpService,
    UserpageHttpService,
    JobsHttpService,
    TasksHttpService,
    SupplierService,
    SupplyListService,
    SupplierSuppliesHttpService,
    ChangePasswordHttpService,
    ReviewsHttpService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
