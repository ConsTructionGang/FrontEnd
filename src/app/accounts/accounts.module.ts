import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatesupplieraccountComponent } from './createsupplieraccount/createsupplieraccount.component';
import { CreateuseraccountComponent } from './createuseraccount/createuseraccount.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, FormsModule],

  declarations: [CreatesupplieraccountComponent, CreateuseraccountComponent, LoginComponent],

  exports: [
    CreatesupplieraccountComponent, CreateuseraccountComponent, LoginComponent
  ]
})

export class AccountsModule {}
