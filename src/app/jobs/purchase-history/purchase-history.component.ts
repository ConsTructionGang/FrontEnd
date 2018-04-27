import { Component, OnInit, Input } from '@angular/core';
import { Account, Job } from '../../domain/index';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  @Input()
  public account: Account;

  constructor() { }

  ngOnInit() {
  }

}
