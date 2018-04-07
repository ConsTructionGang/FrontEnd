import { Component, OnInit, Input } from "@angular/core";
import { Reviews } from "../../domain/models/reviews";

@Component({
  selector: "app-supplier-reviews",
  templateUrl: "./supplier-reviews.component.html",
  styleUrls: ["./supplier-reviews.component.css"]
})
export class SupplierReviewsComponent implements OnInit {
  public newReview: Reviews;
  public allReview: Reviews[];

  @Input() public review: Reviews[] = [];
  constructor() {}

  ngOnInit() {
    this.newReview = {};
    this.allReview = [];
  }

  addReview() {
    this.allReview.push(this.newReview);
    this.newReview.date = Date.now();
    this.newReview = new Reviews();
  }
}
