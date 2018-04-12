import { SupplierProductsComponent } from './products/supplier-products/supplier-products.component';
import { SupplierReviewsComponent } from './reviews/supplier-reviews/supplier-reviews.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { CreatesupplieraccountComponent } from './accounts/createsupplieraccount/createsupplieraccount.component';
import { CreateuseraccountComponent } from './accounts/createuseraccount/createuseraccount.component';
import { ForgotpasswordComponent } from './accounts/forgotpassword/forgotpassword.component';
import { AddjobsComponent } from './jobs/addjobs/addjobs.component';
import { ViewJobsComponent } from './jobs/view-jobs/view-jobs.component';
import { HomeComponent } from './general/home/home.component';
import { UserPageComponent } from './jobs/user-page/user-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'userpage', component: UserPageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'supplieraccount', component: CreatesupplieraccountComponent },
  { path: 'useraccount', component: CreateuseraccountComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'addjobs', component: AddjobsComponent },
  { path: 'viewjobs', component: ViewJobsComponent },
  { path: 'reviews', component: SupplierReviewsComponent },
  { path: 'products', component: SupplierProductsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
