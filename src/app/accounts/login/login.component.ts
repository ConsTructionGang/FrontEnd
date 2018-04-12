import { Account, Status, LoginHttpService } from '../../domain';
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
  public state: string = 'inactive';

  constructor(
    private logginHttpService: LoginHttpService,
    private router: Router
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
      if(resp.status == 200) {                    //login succesful
        //print http response body
        console.log(resp.body);

        //change route
        // this.router.navigateByUrl('viewjobs');

        //maybe reroute back to sign up page for them to create account if they dont have one
         this.router.navigateByUrl("useraccount");
      }
      else {                                      //login failed
        //check http status code for more info
      }
    });
  }
}
