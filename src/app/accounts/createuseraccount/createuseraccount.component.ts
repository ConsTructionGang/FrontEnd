import { Component, OnInit } from '@angular/core';
import { Account } from '../../domain/models/account';

@Component({
  selector: 'app-createuseraccount',
  templateUrl: './createuseraccount.component.html',
  styleUrls: ['./createuseraccount.component.css']
})
export class CreateuseraccountComponent implements OnInit {

  public title: string;
  public userAccount: Account;

  constructor() {}

  ngOnInit() {
    this.title = 'User Account';
    this.userAccount = {
      id: 0,
      username: '',
      password: ''
    };
  }
}
