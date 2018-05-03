import { Component, OnInit, Input } from '@angular/core';
import { Account, Supply, Job } from "../../domain"
import { ActivatedRoute } from '@angular/router';
import { SupplyListService } from '../../domain';
import { SupplierSuppliesHttpService } from '../../domain';
import { JobsHttpService } from '../../domain';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  @Input()
  public supplier: Account;
  @Input()
  public user: Account;
  @Input()
  public fromHome: boolean;

  public tempJob: Job;
  public searchResult: string;
  public addProductTemp: Supply;
  public tempProduct: Supply;
  public editIndex: number;
  public supplyTypes: any[];

  constructor(
    public supplierSuppliesRepository: SupplierSuppliesHttpService,
    public supplyListRepository: SupplyListService,
    private jobsHttpService: JobsHttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.addProductTemp = {
      id: 0,
      name: "Default",
    };
    this.tempProduct = {
      id: 0,
      name: "Default",
    };
    this.supplyTypes = [];
    this.activatedRoute.params.subscribe((params: any) => {
      this.supplierSuppliesRepository.getbysupplierid(+params.supplierId).subscribe(resp => {
        if (resp.status == 200) {
          for(let i = 0; i < resp.body.length; i++){
            this.supplier.supply.push(
              {
                id: resp.body[i].supply_id,
                name: resp.body[i].product_name,
                cost: resp.body[i].Price
              }
            );
          }
        }
      });
    });
    
    this.activatedRoute.params.subscribe(() => {
      this.supplyListRepository.get().subscribe(resp => {
        if (resp.status == 200) {
          for(let i = 0; i < resp.body.results.length; i++){
            this.supplyTypes.push(resp.body.results[i])
            let stored = false;
            for(let j = 0; j < this.supplyTypes.length; j++){
              if(this.supplyTypes[i].Name == resp.body.results[i].Name){
                stored = true;
                break;
              }
            }
            if(stored == false)
              this.supplyTypes.push(resp.body.results[i]);
          }
        }
      });
    });
  }

  addSupply(){
    //first add supply id
    this.addProductTemp.cost = Number(this.addProductTemp.cost);
    for(let i = 0; i < this.supplyTypes.length; i++){
      if(this.addProductTemp.name == this.supplyTypes[i].Name){
        this.addProductTemp.id = this.supplyTypes[i].Supply_ID;
        break;
      }
    }

    this.activatedRoute.params.subscribe((params: any) => {
      this.supplierSuppliesRepository.addtosupplier(+params.userId, this.addProductTemp).subscribe(resp => {
        if (resp.status == 200) {
          this.addProductTemp = {
            id: 0,
            name: "Default",
          };
          this.activatedRoute.params.subscribe((params: any) => {
            this.supplierSuppliesRepository.getbysupplierid(+params.userId).subscribe(resp => {
              if (resp.status == 200) {
                for(let i = 0; i < resp.body.length; i++){
                  if(i == resp.body.length-1){
                    this.supplier.supply.push(
                    {
                      id: resp.body[i].supply_id,
                      name: resp.body[i].product_name,
                      cost: resp.body[i].Price
                    });
                  }
                }
              }
            });
          });
        }
      });
    });
  }

  fillTemp(i){
    this.tempProduct.name = this.supplier.supply[i].name;
    this.tempProduct.cost = this.supplier.supply[i].cost;
    this.editIndex = i;
  }

  editSupply(){
    this.tempProduct.cost = Number(this.tempProduct.cost);
    for(let i = 0; i < this.supplyTypes.length; i++){
      if(this.tempProduct.name == this.supplyTypes[i].Name){
        this.tempProduct.id = this.supplyTypes[i].Supply_ID;
        break;
      }
    }
    this.activatedRoute.params.subscribe((params: any) => {
      this.supplierSuppliesRepository.editSupplyofSupplier(+params.userId, this.tempProduct).subscribe(resp => {
        if (resp.status == 200) {
          this.activatedRoute.params.subscribe((params: any) => {
            this.supplierSuppliesRepository.getbysupplierid(+params.userId).subscribe(resp => {
              if (resp.status == 200) {
                this.supplier.supply[this.editIndex]={
                  id: resp.body[this.editIndex].supply_id,
                  name: resp.body[this.editIndex].product_name,
                  cost: resp.body[this.editIndex].Price
                }
              }
            });
          });
        }
      });
    });
  }

  search(){
    let index = 0;
    for(var i = 0; i < this.supplier.supply.length; i++){
      if(this.supplier.supply[i].name == this.searchResult){
        index = i;
        break;
      }
    }
    this.fillTemp(index);
  }

  delete(i){
    this.activatedRoute.params.subscribe((params: any) => {
      this.supplierSuppliesRepository.deleteSupplyofSupplier(+params.userId, this.supplier.supply[i]).subscribe(resp => {
        if (resp.status == 200) {
          this.supplier.supply.splice(i,1); 
        }
      });
    });
  }

  addToJob() {
    let idStr;
    for(let i = 0; i < this.supplyTypes.length; i++){
      if(this.tempProduct.name == this.supplyTypes[i].Name){
        this.tempProduct.id = this.supplyTypes[i].Supply_ID;
        break;
      }
    }
    this.tempProduct.supplierId= this.supplier.id;

    this.tempJob.supplies.push(this.tempProduct);
    console.log(this.tempJob);
    this.activatedRoute.params.subscribe((params: any) => {
      this.jobsHttpService.updateJob(this.tempJob.id, this.tempJob).subscribe(resp => {
        if (resp.status == 200) {
          console.log("added");
        }
      });
    });
  }
}