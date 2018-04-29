import { Component, OnInit } from '@angular/core';
import { Account } from "../../domain/models/account";
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../../domain';
import { PhoneNumberPipe } from '../phone-number.pipe';


@Component({
  selector: 'app-supplier-page',
  templateUrl: './supplier-page.component.html',
  styleUrls: ['./supplier-page.component.css']
})
export class SupplierPageComponent implements OnInit {
  
  public supplier:Account;

  constructor(
    public supplierRepository: SupplierService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
   this.activatedRoute.params.subscribe((params: any) => {
      this.supplierRepository.getById(+params.userId).subscribe(resp => {
        if (resp.status == 200) {
          this.supplier = resp.body;
          if(!this.supplier.supply){
            this.supplier.supply = [];
          }
          if(!this.supplier.review){
            this.supplier.review = [];
          }
          this.supplier.phonenumber = 13334444;
        }
      });
    });

    /*this.supplier={
      id: 0,
      password: "",
      email:"example@email.com",
      type: "Supplier",
      name: "Bob",
      address: "333 Rainbow Ln",
      city: "Austin",
      state: "Texas",
      companyname: "Supplier Co.",
      supply:[
        {
        id: 1,
        name: "Cherry Wood, 50 grain",
        type: "wood",
        cost: 5.99
        },
        {
          id: 1,
          name: "Cherry Wood, 50 grain",
          type: "wood",
          cost: 5.99
        },
        {
          id: 1,
          name: "Cherry Wood, 50 grain",
          type: "wood",
          cost: 5.99
        },
        {
          id: 1,
          name: "Cherry Wood, 50 grain",
          type: "wood",
          cost: 5.99
        },
        {
          id: 1,
          name: "Cherry Wood, 50 grain",
          type: "wood",
          cost: 5.99
        },
      ],
      review: [{
        userName: "Bob the Builder",
        rating: 4,
        date: Date.now(),
        comment: "Awesome products"
      }]
    };*/
  }

}
