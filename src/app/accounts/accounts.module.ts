import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatesupplieraccountComponent } from './createsupplieraccount/createsupplieraccount.component';
import { CreateuseraccountComponent } from './createuseraccount/createuseraccount.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],

  declarations: [CreatesupplieraccountComponent, CreateuseraccountComponent, LoginComponent, ForgotpasswordComponent],

  exports: [
    CreatesupplieraccountComponent, CreateuseraccountComponent, LoginComponent, ForgotpasswordComponent
  ]
})

export class AccountsModule {}
