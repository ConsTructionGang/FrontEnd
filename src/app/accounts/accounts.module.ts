import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatesupplieraccountComponent } from './createsupplieraccount/createsupplieraccount.component';
import { CreateuseraccountComponent } from './createuseraccount/createuseraccount.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],

  declarations: [CreatesupplieraccountComponent, CreateuseraccountComponent, LoginComponent],

  exports: [
    CreatesupplieraccountComponent, CreateuseraccountComponent, LoginComponent
  ]
})

export class AccountsModule {}
