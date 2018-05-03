import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddjobsComponent } from './addjobs/addjobs.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { UserPageComponent } from './user-page/user-page.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { ProductsModule } from '../products/products.module';
import { TasksComponent } from './tasks/tasks.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { GeneralModule } from '../general/general.module';



@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ProductsModule, GeneralModule
  ],
  declarations: [AddjobsComponent, ViewJobsComponent, UserPageComponent, EditSupplierComponent, TasksComponent, PurchaseHistoryComponent],

  exports: [AddjobsComponent, ViewJobsComponent, UserPageComponent]
})

export class JobsModule { }
