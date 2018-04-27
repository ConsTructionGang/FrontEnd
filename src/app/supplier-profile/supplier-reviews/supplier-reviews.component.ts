import { Component, OnInit, Input } from "@angular/core";
import { Reviews } from "../../domain/models/reviews";
import { Account } from "../../domain/models/account"

@Component({
  selector: "app-supplier-reviews",
  templateUrl: "./supplier-reviews.component.html",
  styleUrls: ["./supplier-reviews.component.css"]
})
export class SupplierReviewsComponent implements OnInit {
  public newReview: Reviews;
  public pageViewer: Account;
  public reply:string;

  @Input() 
  public supplier: Account; 
  
  constructor() {}

  ngOnInit() {
    this.newReview = {};
  }

  addReview() {
    this.newReview.hideResponse = false;
    this.supplier.review.unshift(this.newReview);
    this.newReview.date = Date.now();
    this.newReview = new Reviews();
  }

  addResponse(i){
    this.supplier.review[i].response = this.reply;
    this.reply="";
  }

  print(i){
    console.log(this.supplier.review);
    console.log(this.supplier.review[i].hideResponse);
  }
}
