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
  public allReview: Reviews[];
  public supplier: Account;
  public pageViewer: Account;
  public reply:string;

  @Input() public review: Reviews[] = [];
  constructor() {}

  ngOnInit() {
    this.newReview = {};
    this.allReview = [];
    this.supplier={
      id: 0,
      password: "",
      type: "Supplier",
      name: "Supplier Co.",
      supply: "Wood",
      review: []
    };
    this.pageViewer={
      id: 2,
      password: "",
      type: "User",
      name: "Bob the Builder",

    };
  }

  addReview() {
    this.newReview.hideResponse = false;
    this.supplier.review.unshift(this.newReview);
    this.newReview.date = Date.now();
    this.newReview = new Reviews();
  }

  changeUser(){
    if(this.pageViewer.type=="User"){
      this.pageViewer={
        id: 0,
        password: "",
        type: "Supplier",
        name: "Supplier Co.",
        supply: "Wood",
        review: []
      };
    } else if (this.pageViewer.type=="Supplier"){
      this.pageViewer= {
          id: 2,
          password: "",
          type: "User",
          name: "Bob the Builder",
      }

    }
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
