import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../../domain/models/supplier'
import { Supply, SupplierService } from '../../domain/index'
import { ActivatedRoute} from '@angular/router'


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
  public supply = Supply;
  @Output() onAddSupplier = new EventEmitter<Supplier>();
  public noSuppliers: boolean;

  constructor(
    public supplierRepository: SupplierService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.suppliers=[];
    this.noSuppliers = false;
    /*this.allsuppliers = [
      {id: 1, name: "Joe Schmo and Bros",
      supplies: [{id: 1, name: 'Bricks'}, {id: 2, name: 'Wood'}]
    },
    {id: 2, name: "The Sue Lew Crew",
    supplies: [{id: 1, name: 'Bricks'}, {id: 3, name: 'Cement'}]
    },
    {id: 3, name: "Murali-bars",
    supplies: [{id: 2, name: 'Wood'}, {id: 4, name: 'Steel'}]
    },
    {id: 4, name: "Stewart Stiffler Supplies",
    supplies: [{id: 1, name: 'Bricks'}, {id: 4, name: 'Steel'}]
    }
  ]*/
    if (this.supply.name) {
        this.supplierRepository.getByName(this.supply.name).subscribe(resp => {
          if (resp.status == 200) {
            if (resp.body.results)
            {
              for (let result of resp.body.results)
              {
                this.suppliers.push({id: result.ID, name: result.Name});
              }
            }
            else {
              this.suppliers = [];
              this.noSuppliers=true;
            }
          }
        });
    }
    //console.log(this.suppliers);
  }
  public addSupplier(i){
  this.onAddSupplier.emit(this.suppliers[i]);
}

}
