import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { CreatesupplieraccountComponent } from './accounts/createsupplieraccount/createsupplieraccount.component';
import { CreateuseraccountComponent } from './accounts/createuseraccount/createuseraccount.component';
import { ForgotpasswordComponent } from './accounts/forgotpassword/forgotpassword.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'supplieraccount', component: CreatesupplieraccountComponent },
  { path: 'useraccount', component: CreateuseraccountComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
