import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddjobsComponent } from './addjobs/addjobs.component';
import {DpDatePickerModule} from 'ng2-date-picker';



@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, DpDatePickerModule,
  ],
  declarations: [AddjobsComponent],

  exports: [AddjobsComponent]
})

export class JobsModule { }
