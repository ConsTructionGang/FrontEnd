import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../../domain/models/supplier'
import { Supply, SupplierService, UserpageHttpService, SupplierSuppliesHttpService } from '../../domain/index'
import { ActivatedRoute} from '@angular/router'
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  public allsuppliers: Supplier[];
  public suppliers: Supplier[];
  @Input()
  public account: Account;
  @Input()
  public supply: Supply;
  @Output() onAddSupplier = new EventEmitter<Supplier>();
  public noSuppliers: boolean;
  public ascendingRating: boolean;
  public ascendingCost: boolean;

  constructor(
    public supplierRepository: SupplierService,
    public supplierSupplies: SupplierSuppliesHttpService,
    public userRepository: UserpageHttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ascendingCost = false;
    this.ascendingRating = false;
    this.suppliers=[];
    this.noSuppliers = false;

    if (this.supply.name) {
        this.supplierRepository.getByName(this.supply.name).subscribe(resp => {
          if (resp.status == 200) {
            if (resp.body.results)
            {
              for (let i = 0; i < resp.body.results.length; i++)
              {
                let supplier:Supplier;
                supplier={
                  id:resp.body.results[i].ID,
                  name:resp.body.results[i].Name,
                };
                this.userRepository.getById(resp.body.results[i].ID).subscribe(resp => {
                  if (resp.status == 200) {
                    supplier.rating= resp.body.rating;
                  }
                });
                this.supplierSupplies.getbysupplierid(resp.body.results[i].ID).subscribe(resp => {
                  if (resp.status == 200) {
                    console.log(resp.body);
                    for(let j = 0; j < resp.body.length; j++){
                      if(resp.body[j].supply_id == this.supply.id){
                        supplier.cost = resp.body[j].Price;
                        break;
                      }
                    }
                  }
                });

                this.suppliers.push(supplier);
              }
            }
            else {
              this.suppliers = [];
              this.noSuppliers=true;
            }
          }
        });
    }
  }
  public addSupplier(i){
  this.onAddSupplier.emit(this.suppliers[i]);
}

sortByCost(){
  this.ascendingCost= !this.ascendingCost;
  this.ascendingRating = false;
  if(this.ascendingCost){
    for(let i = 1; i < this.suppliers.length; i++){
      if(this.suppliers[i].cost){
        for(let j = 0; j < this.suppliers.length; j++){
          if(this.suppliers[j].cost && this.suppliers[j].cost > this.suppliers[i].cost){
            let tempSupply = this.suppliers[i];
            this.suppliers[i] = this.suppliers[j];
            this.suppliers[j] = tempSupply;
          }
        }
      }
    }
  } else {
    for(let i = 1; i < this.suppliers.length; i++){
      if(this.suppliers[i].cost){
        for(let j = 0; j < this.suppliers.length; j++){
          if(this.suppliers[j].cost && this.suppliers[j].cost < this.suppliers[i].cost){
            let tempSupply = this.suppliers[i];
            this.suppliers[i] = this.suppliers[j];
            this.suppliers[j] = tempSupply;
          }
        }
      }
    }
  }
  
}

sortByRating(){
  this.ascendingRating = !this.ascendingRating;
  this.ascendingCost = false;
  if(this.ascendingRating){
    for(let i = 1; i < this.suppliers.length; i++){
      if(this.suppliers[i].rating){
        for(let j = 0; j < this.suppliers.length; j++){
          if(this.suppliers[j].rating && this.suppliers[j].rating < this.suppliers[i].rating){
            let tempSupply = this.suppliers[i];
            this.suppliers[i] = this.suppliers[j];
            this.suppliers[j] = tempSupply;
          }
        }
      }
    }
  } else {
    for(let i = 1; i < this.suppliers.length; i++){
      if(this.suppliers[i].rating){
        for(let j = 0; j < this.suppliers.length; j++){
          if(this.suppliers[j].rating && this.suppliers[j].rating > this.suppliers[i].rating){
            let tempSupply = this.suppliers[i];
            this.suppliers[i] = this.suppliers[j];
            this.suppliers[j] = tempSupply;
          }
        }
      }
    }
  }
  
}

}
