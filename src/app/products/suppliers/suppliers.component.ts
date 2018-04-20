import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../domain/models/supplier'
import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  public allsuppliers: Supplier[];
  public suppliers: Supplier[];
  public supplyId = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.suppliers = [];
    this.activatedRoute.params.subscribe((params: any) => {
    if(params.supplyId) {
      this.supplyId = params.supplyId;
    }
    console.log(params);
    });
    this.allsuppliers = [
      {id: 1, name: "Joe Schmo and Bros",
      supplies: [{id: 1, name: 'bricks'}, {id: 2, name: 'wood'}]
    },
    {id: 2, name: "The Sue Lew Crew",
    supplies: [{id: 1, name: 'bricks'}, {id: 3, name: 'cement'}]
    },
    {id: 3, name: "Murali-bars",
    supplies: [{id: 2, name: 'wood'}, {id: 4, name: 'steel'}]
    },
    {id: 4, name: "Stewart Stiffler Supplies",
    supplies: [{id: 1, name: 'bricks'}, {id: 4, name: 'steel'}]
    }
    ]
    if (this.supplyId) {
      for (let supplier of this.allsuppliers)
      {
        for (let supply of supplier.supplies)
        {
          if (supply.id==this.supplyId)
            this.suppliers.push(supplier);
        }
      }
    }
  }

}
