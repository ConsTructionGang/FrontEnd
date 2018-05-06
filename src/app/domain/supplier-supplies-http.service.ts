import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpGeneric } from './http-generic.service';
import { Account } from "./models/account";
import { Supply } from "./models/supply";

@Injectable()
export class SupplierSuppliesHttpService extends HttpGeneric<any>{

  //mock db
    // protected endPoint = 'https://809ea74f-a447-4e0b-a845-74177a5243a8.mock.pstmn.io/user';
    //backend server
    protected endPoint = 'http://ec2-34-227-162-95.compute-1.amazonaws.com/suppliers/[userId]/supplies';

    constructor(protected httpClient: HttpClient) {
      super(httpClient);
  }

  public getbysupplierid(id: number) {
    this.endPoint = 'http://ec2-34-227-162-95.compute-1.amazonaws.com/suppliers/' + id + '/supplies';
    return this.get();
  }

  public addtosupplier(id: number, supply: Supply) {
    this.endPoint = this.endPoint.replace("[userId]", id.toString());
    let item = {
      supply_id: supply.id,
      price: supply.cost
    }
    return this.update(item);
  }

  public editSupplyofSupplier(id: number, supply: Supply){
    this.endPoint = this.endPoint.replace("[userId]", id.toString());
    let item = {
      supply_id: supply.id,
      price: supply.cost
    }
    return this.add(item);
  }

  public deleteSupplyofSupplier(id: number, supply: Supply){
    this.endPoint = this.endPoint.replace("[userId]", id.toString());
    this.endPoint = this.endPoint + "/remove"
    let item={
      supply_id: supply.id
    }
    return this.add(item);
  }

}
