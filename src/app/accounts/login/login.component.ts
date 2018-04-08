import { Status, LoginHttpService } from '../../domain';
import { Component, OnInit } from '@angular/core';
import { Account } from '../../domain/models/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public title: string;
  public account: Account;
  public state: string = 'inactive';

  constructor(
    private logginHttpService: LoginHttpService
  ) { }

  ngOnInit() {
  this.title = 'Sign In';
  this.account = {
      id: 0,
      email: '',
      password: '',
      type: ''
    };
  }

  public authenticateUser() {
    //can perform form validation here

    this.logginHttpService.update(this.account).subscribe(resp => {
      if(resp.status == 200) {
        console.log(resp.body);
        //login succesful
      }
      else {
        //login failed
        //check status code for more info
      }
    });
  }
}
