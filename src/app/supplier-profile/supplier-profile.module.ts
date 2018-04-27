import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';
import { RatingComponent } from './rating/rating.component';
import { SupplierReviewsComponent } from './supplier-reviews/supplier-reviews.component';
import { DisplayProductsComponent } from './display-products/display-products.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [SupplierPageComponent, RatingComponent, SupplierReviewsComponent, DisplayProductsComponent],
  exports: [SupplierPageComponent]
})
export class SupplierProfileModule { }
