import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SupplierProductsComponent } from './supplier-products/supplier-products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [SupplierProductsComponent, SuppliersComponent]
})
export class ProductsModule { }
