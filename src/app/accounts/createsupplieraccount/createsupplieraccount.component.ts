import { Component, OnInit } from '@angular/core';
import { Supply } from '../../domain/models/supply';
import { Account } from '../../domain/models/account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-createsupplieraccount',
  templateUrl: './createsupplieraccount.component.html',
  styleUrls: ['./createsupplieraccount.component.css']
})
export class CreatesupplieraccountComponent implements OnInit {

  public title: string;
  public userAccount: Account;
  public supplies: Supply[];

  constructor() { }

  ngOnInit() {
    this.title = 'Supplier Account';
    this.userAccount = {
      id: 0,
      password: '',
      type: 'supplier'
    };
    this.supplies = [
      { id: 1, name: 'Steel' },
      { id: 2, name: 'Wood' },
      { id: 3, name: 'Aluminium' }
    ];
  }


}
