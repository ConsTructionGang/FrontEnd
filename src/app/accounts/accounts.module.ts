import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatesupplieraccountComponent } from './createsupplieraccount/createsupplieraccount.component';
import { CreateuseraccountComponent } from './createuseraccount/createuseraccount.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],

  declarations: [CreatesupplieraccountComponent, CreateuseraccountComponent],

  exports: [
    CreatesupplieraccountComponent, CreateuseraccountComponent
  ]
})

export class AccountsModule {}
