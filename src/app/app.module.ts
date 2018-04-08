import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginHttpService } from './domain';
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
    HttpClientModule,
    ReviewsModule
    ],
  providers: [LoginHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
