import { Component, OnInit } from '@angular/core';
import { Account, } from "../../domain";
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../../domain';
import { SupplyListService } from '../../domain';
import { PhoneNumberPipe } from '../phone-number.pipe';


@Component({
  selector: 'app-supplier-page',
  templateUrl: './supplier-page.component.html',
  styleUrls: ['./supplier-page.component.css']
})
export class SupplierPageComponent implements OnInit {
  
  public supplier:Account;
  public tempSupplier:Account;


  constructor(
    public supplierRepository: SupplierService,
    public supplyListRepository: SupplyListService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tempSupplier = {
      name: "",
      id: 0,
      type: "Supplier",
      address: "",
      city: "",
      state: "",
      phonenumber: 0,
      description: "",
    }
   this.activatedRoute.params.subscribe((params: any) => {
      this.supplierRepository.getById(+params.supplierId).subscribe(resp => {
        if (resp.status == 200) {
          this.supplier = resp.body;
          this.supplier.type = "Supplier";
          this.supplier.id = params.supplierId;
          if(!this.supplier.supply){
            this.supplier.supply = [];
          }
          if(!this.supplier.review){
            this.supplier.review = [];
          }
        }
        this.tempSupplier = {
          name: this.supplier.name,
          id: this.supplier.id,
          email: this.supplier.email,
          type: "Supplier",
          address: this.supplier.address,
          city: this.supplier.city,
          state: this.supplier.state,
          phonenumber: this.supplier.phonenumber,
          description: this.supplier.description,
        }
      });
    });

  }
  

}
