import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreatesupplieraccountComponent } from './createsupplieraccount/createsupplieraccount.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatesupplieraccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
