import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneNumberPipe } from '../phone-number.pipe';
import { SupplierService } from '../../domain';
import { UserpageHttpService } from '../../domain';
import { Account } from "../../domain/models/account";

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.css']
})
export class ViewSupplierComponent implements OnInit {
  public supplier:Account;
  public user:Account;

  constructor(
    public supplierRepository: SupplierService,
    public userpageRepository: UserpageHttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.supplierRepository.getById(+params.supplierId).subscribe(resp => {
        if (resp.status == 200) {
          this.supplier = resp.body;
          if(!this.supplier.supply){
            this.supplier.supply = [];
          }
          if(!this.supplier.review){
            this.supplier.review = [];
          }
        }
        this.supplier.id = params.supplierId;
      });
    });
    this.activatedRoute.params.subscribe((params: any) => {
      this.userpageRepository.getById(+params.userId).subscribe(resp => {
        if (resp.status == 200) {
          this.user = resp.body;
          this.user.id = params.userId;
        }
      });
    });

  }

}
