import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Supplier } from '../../domain/models/supplier'
import { Supply } from '../../domain/index'
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
  public supply = Supply;
  @Output() onAddSupplier = new EventEmitter<Supplier>();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.suppliers=[];
    this.allsuppliers = [
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
    ]
    if (this.supply.name) {
      for (let supplier of this.allsuppliers)
      {
        for (let supply of supplier.supplies)
        {
          if (supply.name==this.supply.name)
            this.suppliers.push(supplier);
        }
      }
    }
    console.log(this.suppliers);
  }
  public addSupplier(i){
  this.onAddSupplier.emit(this.suppliers[i]);
}

}
