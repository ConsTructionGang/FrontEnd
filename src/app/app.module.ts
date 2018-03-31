import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountsModule } from './accounts/accounts.module';
import { AppRoutingModule } from './/app-routing.module';
import { JobsModule } from './jobs/jobs.module';
import { DpDatePickerModule } from 'ng2-date-picker';



@NgModule({
  declarations: [ AppComponent,
     ],
  imports: [
    BrowserModule,
    FormsModule,
    AccountsModule,
    AppRoutingModule,
    JobsModule,
     DpDatePickerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
