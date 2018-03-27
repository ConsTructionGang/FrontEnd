import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatesupplieraccountComponent } from './createsupplieraccount/createsupplieraccount.component';
import { CreateuseraccountComponent } from './createuseraccount/createuseraccount.component';


@NgModule({
  declarations: [ AppComponent,
     CreatesupplieraccountComponent,
     CreateuseraccountComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
