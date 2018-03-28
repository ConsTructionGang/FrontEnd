import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createsupplieraccount',
  templateUrl: './createsupplieraccount.component.html',
  styleUrls: ['./createsupplieraccount.component.css']
})
export class CreatesupplieraccountComponent implements OnInit {

  public title: string;
  public userAccount: any;

  constructor() { }

  ngOnInit() {
    this.title = 'Supplier Account';
  }

}
