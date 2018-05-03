import { Account, LoginHttpService } from '../../domain';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public title: string;
  public account: Account;
  public state = 'inactive';
  public badLogin: boolean;

  constructor(
    private logginHttpService: LoginHttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.badLogin = false;
  this.title = 'Sign In';
  this.account = {
      id: 0,
      email: '',
      password: '',
      type: ''
    };
  }

  public authenticateUser() {
    // can perform form validation here

    this.logginHttpService.update(this.account).subscribe(resp => {
      if(resp.status === 200) {                    // login succesful
        // print http response body
        this.badLogin = false;

        // change route
        if(resp.body.type=="User")
          this.router.navigateByUrl(`userpage/${resp.body.id}`);
        else if(resp.body.type=="Supplier")
          this.router.navigateByUrl(`supplierhome/${resp.body.id}`);
      } 
    },
    err => {
      this.badLogin = true;
    },);
  }
}
