import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddjobsComponent } from './addjobs/addjobs.component';



@NgModule({
  imports: [CommonModule, RouterModule, FormsModule,
  ],
  declarations: [AddjobsComponent],

  exports: [AddjobsComponent]
})

export class JobsModule { }
