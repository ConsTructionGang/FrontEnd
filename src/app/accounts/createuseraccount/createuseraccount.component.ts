import { Component, OnInit } from '@angular/core';
import { Account } from '../../domain/models/account';
import { Supply } from '../../domain/models/supply';

@Component({
  selector: 'app-createuseraccount',
  templateUrl: './createuseraccount.component.html',
  styleUrls: ['./createuseraccount.component.css']

})
export class CreateuseraccountComponent implements OnInit {

  public title: string;
  public userAccount: Account;
  public supplies: Supply[];

  constructor() {}


  ngOnInit() {
    this.title = 'User Account';
    this.userAccount = {
      id: 0,
      password: '',
      type: 'user'
    };
    this.supplies = [
      { id: 1, name: 'Steel' },
      { id: 2, name: 'Wood' },
      { id: 3, name: 'Aluminium' }
    ];
  }

  setSupplier(){
    this.userAccount.type = 'supplier';
    console.log(this.userAccount.type);
  }

  setUser(){
    this.userAccount.type = 'user';
    console.log(this.userAccount.type);
  }

}
