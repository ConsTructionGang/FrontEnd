import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';
import { RatingComponent } from './rating/rating.component';
import { SupplierReviewsComponent } from './supplier-reviews/supplier-reviews.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { PhoneNumberPipe } from './phone-number.pipe';
import { GeneralModule } from '../general/general.module'

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule, GeneralModule
  ],
  declarations: [SupplierPageComponent, RatingComponent, SupplierReviewsComponent, DisplayProductsComponent, ViewSupplierComponent, PhoneNumberPipe,],
  exports: [SupplierPageComponent, ViewSupplierComponent]
})
export class SupplierProfileModule { }
