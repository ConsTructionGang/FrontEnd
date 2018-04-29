import { Component, OnInit, Input } from '@angular/core';
import { Account, Supply } from "../../domain"
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../../domain';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  @Input()
  public supplier: Account;
  @Input()
  public fromHome: boolean;

  public searchResult: string;
  public searchSupply: Supply;
  public addProductTemp: Supply;

  constructor(
    public supplierRepository: SupplierService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchSupply={
      id: 0,
      name: "Default",
    }
    this.addProductTemp = {
      id: 0,
      name: "Default",
    };
  }

  search(){
    for(var i = 0; i < this.supplier.supply.length; i++){
      if(this.supplier.supply[i].name == this.searchResult){
        this.searchSupply = this.supplier.supply[i];
      }
    }
    console.log(this.searchSupply);
  }
}
