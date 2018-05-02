import { Component, OnInit, Input } from '@angular/core';
import { Account, Supply } from "../../domain"
import { ActivatedRoute } from '@angular/router';
import { SupplyListService } from '../../domain';
import { SupplierSuppliesHttpService } from '../../domain';

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
  public supplyTypes: any[];

  constructor(
    public supplierSuppliesRepository: SupplierSuppliesHttpService,
    public supplyListRepository: SupplyListService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchSupply = {
      id: 0,
      name: "Default",
    }
    this.addProductTemp = {
      id: 0,
      name: "Default",
    };
    this.supplyTypes = [];
    this.activatedRoute.params.subscribe(() => {
      this.supplyListRepository.get().subscribe(resp => {
        if (resp.status == 200) {
          for (let i = 0; i < resp.body.results.length; i++) {
            this.supplyTypes.push(resp.body.results[i])
            let stored = false;
            for (let j = 0; j < this.supplyTypes.length; j++) {
              if (this.supplyTypes[i].Name == resp.body.results[i].Name) {
                stored = true;
                break;
              }
            }
            if (stored == false)
              this.supplyTypes.push(resp.body.results[i]);
          }
        }
      });
    });
  }

  search() {
    for (var i = 0; i < this.supplier.supply.length; i++) {
      if (this.supplier.supply[i].name == this.searchResult) {
        this.searchSupply = this.supplier.supply[i];
      }
    }
  }

  addSupply() {
    this.addProductTemp.supplierId = this.supplier.id;
    for (let i = 0; i < this.supplyTypes.length; i++) {
      if (this.supplyTypes[i].Name == this.addProductTemp.name) {
        this.addProductTemp.id = this.supplyTypes[i].Supply_ID;
      }
    }

    this.activatedRoute.params.subscribe((params: any) => {
      this.supplyListRepository.add(this.addProductTemp).subscribe(resp => {
      
      });
    });
  }
}
