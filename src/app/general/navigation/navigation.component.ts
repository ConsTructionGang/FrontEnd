import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../domain';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input()
  public account: Account;

  constructor() { }

  ngOnInit() {
  }

}
