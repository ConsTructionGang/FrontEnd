import { Component, OnInit } from '@angular/core';
import { Account } from '../../domain/models/account';
import { Supply } from '../../domain/models/supply';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-createuseraccount',
  templateUrl: './createuseraccount.component.html',
  styleUrls: ['./createuseraccount.component.css'],
  animations: [
        trigger('slideColor', [
            state('inactive', style({
                transform: 'translateX(0)',
            })),
            state('active', style({
                transform: 'translateX(60%)',
            })),
            transition('inactive => active', animate('0.2s .7s ease-in')),
            transition('active => inactive', animate('0.2s .7s ease-out'))
        ]),
        trigger('slideChangeState', [
            state('inactive', style({
                transform: 'translateX(0)',
            })),
            state('active', style({
                transform: 'translateX(168%)',
            })),
            transition('inactive => active', animate('0.15s ease-in')),
            transition('active => inactive', animate('0.15s ease-out'))
        ]),
        trigger('slideForm', [
            state('inactive', style({
                transform: 'translateX(0)',
            })),
            state('active', style({
                transform: 'translateX(-80%)',
            })),
            transition('inactive => active', animate('0.15s  ease-in')),
            transition('active => inactive', animate('0.15s  ease-out'))
        ]),
        trigger('fade', [
            state('inactive', style({
                opacity:1,
            })),
            state('active', style({
                opacity:0,
            })),
            transition('inactive => active', animate('0s')),
            transition('active => inactive', animate('.5s'))
        ])

    ]

})
export class CreateuseraccountComponent implements OnInit {

  public title: string;
  public userAccount: Account;
  public supplies: Supply[];
  public changeTypeTitle: string = 'Not a Construction Company?';
  public state: string = 'inactive';
  public fadeState: string = 'inactive';

  constructor() {}


  ngOnInit() {
    this.title = 'Sign Up';
    this.userAccount = {
      id: 0,
      password: '',
      type: 'User',
    };
    this.supplies = [
      { id: 1, name: 'Steel' },
      { id: 2, name: 'Wood' },
      { id: 3, name: 'Aluminium' }
    ];
  }

  setSupplier(){
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    this.fadeState = (this.fadeState === 'inactive' ? 'active' : 'inactive');
    this.userAccount.type = 'Supplier';
    this.changeTypeTitle = 'Not a Supplier?';
  }

  setUser(){
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    this.fadeState = (this.fadeState === 'inactive' ? 'active' : 'inactive');
    this.userAccount.type = 'User';
    this.changeTypeTitle = 'Not a Construction Company?';
  }

  fadeIn(){
    this.fadeState = 'inactive';
  }

}
