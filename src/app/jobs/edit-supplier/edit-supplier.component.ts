import { Component, OnInit, Input } from '@angular/core';
import { Supply} from '../../domain/index'

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  constructor() { }
  @Input()
  public supply: Supply;

  ngOnInit() {
  }

}
