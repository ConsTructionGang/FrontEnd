import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createuseraccount',
  templateUrl: './createuseraccount.component.html',
  styleUrls: ['./createuseraccount.component.css']
})
export class CreateuseraccountComponent implements OnInit {

  public title: string;
  public userAccount: any;

  constructor() {}

  ngOnInit() {
    this.title = 'User Account';
  }
}
