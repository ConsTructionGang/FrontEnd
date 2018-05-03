import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateuseraccountComponent } from './createuseraccount/createuseraccount.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GeneralModule } from '../general/general.module'

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, GeneralModule],

  declarations: [ CreateuseraccountComponent, LoginComponent, ForgotpasswordComponent, ChangePasswordComponent],

  exports: [
   CreateuseraccountComponent, LoginComponent, ForgotpasswordComponent, ChangePasswordComponent
  ]
})

export class AccountsModule {}
