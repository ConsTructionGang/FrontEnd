import { SupplierProductsComponent } from './products/supplier-products/supplier-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { CreateuseraccountComponent } from './accounts/createuseraccount/createuseraccount.component';
import { ForgotpasswordComponent } from './accounts/forgotpassword/forgotpassword.component';
import { ChangePasswordComponent } from './accounts/change-password/change-password.component';
import { AddjobsComponent } from './jobs/addjobs/addjobs.component';
import { ViewJobsComponent } from './jobs/view-jobs/view-jobs.component';
import { HomeComponent } from './general/home/home.component';
import { UserPageComponent } from './jobs/user-page/user-page.component';
import { SuppliersComponent } from './products/suppliers/suppliers.component';
import { SupplierPageComponent } from './supplier-profile/supplier-page/supplier-page.component'
import { ViewSupplierComponent } from './supplier-profile/view-supplier/view-supplier.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'password/:type/:userId', component: ChangePasswordComponent },
  { path: 'userpage/:userId', component: UserPageComponent },
  { path: 'supplierhome/:supplierId', component: SupplierPageComponent },
  { path: 'supplierpage/:supplierId/:userId', component: ViewSupplierComponent },
  { path: 'login', component: LoginComponent},
  { path: 'useraccount', component: CreateuseraccountComponent },
  { path: 'addjobs/:userId', component: AddjobsComponent },
  { path: 'products', component: SupplierProductsComponent },
  { path: 'suppliers/:supplyId', component: SuppliersComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
