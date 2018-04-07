import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AccountsModule } from './accounts/accounts.module';
import { AppRoutingModule } from './/app-routing.module';
import { JobsModule } from './jobs/jobs.module';
import { ReviewsModule } from './reviews/reviews.module';




@NgModule({
  declarations: [ AppComponent,
     ],
  imports: [
    BrowserModule,
    FormsModule,
    AccountsModule,
    AppRoutingModule,
    JobsModule,
    BrowserAnimationsModule,
    ReviewsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
