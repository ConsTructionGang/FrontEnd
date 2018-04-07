import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierReviewsComponent } from './supplier-reviews/supplier-reviews.component';
import { RouterModule } from '@angular/router';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [SupplierReviewsComponent, RatingComponent]
})
export class ReviewsModule { }
