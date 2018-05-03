import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginHttpService } from '../../domain';
import { Router } from '@angular/router';
import { Supply, Account } from '../../domain';
import { UserpageHttpService } from '../../domain';
import { ChangePasswordHttpService } from '../../domain';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public account: Account;
  public success: boolean;
  public newpass:string;
  public reenter: string;
  public badPassword: boolean;
  public type: string;

  constructor(
    public userpageRepository: UserpageHttpService,
    public passwordRepository: ChangePasswordHttpService,
    private activatedRoute: ActivatedRoute,
    private logginHttpService: LoginHttpService,
    private router: Router,
    
  ) { }

  ngOnInit() {
    this.badPassword = false;
    this.account = {
      type:"",
      password : ""
    }
    this.newpass = "";
    this.reenter = "";
    this.activatedRoute.params.subscribe((params: any) => {
      this.userpageRepository.getById(+params.userId).subscribe(resp => {
        if (resp.status == 200) {
          this.account = resp.body;
          this.account.password = "";
        }
      });
    });
  }

  public authenticateUser() {
    // can perform form validation here

    this.logginHttpService.update(this.account).subscribe(resp => {
      if(resp.status === 200) {                     
        this.success = true;
        if(this.newpass == this.reenter){
          this.changePassword();
          this.type = resp.body.type; 
        }
      } 
    },
    err =>  this.badPassword = true);

    if(this.success == true){

    }
  }

  public changePassword(){
    this.activatedRoute.params.subscribe((params: any) => {
      this.passwordRepository.changePassword(this.account.email, this.newpass).subscribe(resp => {
        if (resp.status == '200') {
          if(this.type == "User")
            this.router.navigateByUrl(`/userpage/${this.account.id}`);
          else if (this.type == "Supplier")
            this.router.navigateByUrl(`/supplierhome/${this.account.id}`);
        }
      });
    });
  }
}

