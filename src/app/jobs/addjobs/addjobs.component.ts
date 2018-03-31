import { Account } from './../../domain/models/account';
import { Component, OnInit } from '@angular/core';
import { Supply } from '../../domain/models/supply';
import {DpDatePickerModule} from 'ng2-date-picker';



@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrls: ['./addjobs.component.css']
})
export class AddjobsComponent implements OnInit {

  public title: string;
   public supplies: Supply[];
   public account: Account;

  constructor() { }

  ngOnInit() {
      this.title = 'Add Jobs';


  }

}