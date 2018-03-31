import { Component, OnInit } from '@angular/core';
import { Account } from '../../domain/models/account';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  public title: string;
  constructor() {

  }

  ngOnInit() {
    this.title = 'Forgot Password';
  }

}
