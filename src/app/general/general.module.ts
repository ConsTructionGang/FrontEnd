import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomeComponent, NavigationComponent, ],
  exports: [
    HomeComponent,
    NavigationComponent
  ]
})
export class GeneralModule { }