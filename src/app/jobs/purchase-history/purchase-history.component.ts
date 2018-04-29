import { Component, OnInit, Input } from '@angular/core';
import { Account, Supply } from '../../domain/index';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../../domain';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  @Input()
  public account: Account;

  public sortedSupplies: Supply[];

  constructor( public supplierRepository: SupplierService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sortedSupplies = [];
    for(let i = 0; i < this.account.jobs.length; i++){
      for(let j = 0; j < this.account.jobs[i].supplies.length; j++){
        if(this.account.jobs[i].supplies[j].supplierId){
          this.activatedRoute.params.subscribe(() => {
            this.supplierRepository.getById(+this.account.jobs[i].supplies[j].supplierId).subscribe(resp => {
              if (resp.status == 200) {
                this.account.jobs[i].supplies[j].supplier = resp.body;
              }
            });
          });
          if(this.account.jobs[i].startDate)
            this.account.jobs[i].supplies[j].date = this.account.jobs[i].startDate;  
          this.sortedSupplies.push(this.account.jobs[i].supplies[j]);
        }
      }
    }
  }

  sortByDate(){
    for(let i = 1; i < this.sortedSupplies.length; i++){
      if(this.sortedSupplies[i].date){
        for(let j = 0; j < this.sortedSupplies.length; j++){
          if(this.sortedSupplies[j].date && this.sortedSupplies[j].date.getFullYear() >= this.sortedSupplies[i].date.getFullYear()){
            if(this.sortedSupplies[j].date.getMonth() >= this.sortedSupplies[i].date.getMonth()){
              if(this.sortedSupplies[j].date.getDate() > this.sortedSupplies[i].date.getDate()){
                let tempSupply = this.sortedSupplies[i];
                this.sortedSupplies[i] = this.sortedSupplies[j];
                this.sortedSupplies[j] = tempSupply;
              }
            }
          } 
        }
      }
    }
  }

  sortByCost(){
    for(let i = 1; i < this.sortedSupplies.length; i++){
      if(this.sortedSupplies[i].cost){
        for(let j = 0; j < this.sortedSupplies.length; j++){
          if(this.sortedSupplies[j].cost && this.sortedSupplies[j].cost > this.sortedSupplies[i].cost){
            let tempSupply = this.sortedSupplies[i];
            this.sortedSupplies[i] = this.sortedSupplies[j];
            this.sortedSupplies[j] = tempSupply;
          }
        }
      }
    }
  }

}
