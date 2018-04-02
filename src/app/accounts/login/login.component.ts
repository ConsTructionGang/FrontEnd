import { Component, OnInit } from '@angular/core';
import { Account } from '../../domain/models/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: string;
  public account: Account;

  constructor() { }

  ngOnInit() {
  this.title = 'Sign In';
  this.account = {
      id: 0,
      email: '',
      password: '',
      type: ''
    };
  }

}
