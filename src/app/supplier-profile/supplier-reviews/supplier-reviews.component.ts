import { Component, OnInit, Input } from "@angular/core";
import { Reviews } from "../../domain/models/reviews";
import { Account } from "../../domain/models/account";
import { ActivatedRoute } from '@angular/router';
import { ReviewsHttpService, UserpageHttpService } from '../../domain';

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
  @Input()
  public fromHome: boolean; 
  @Input()
  public user:Account;

  public previousReview;
  
  constructor(
    public reviewRepository: ReviewsHttpService,
    public accountRepository: UserpageHttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.newReview = {};
    this.activatedRoute.params.subscribe((params:any) => {
      this.reviewRepository.getReviews(Number(this.supplier.id)).subscribe(resp => {
        if (resp.status == 200) {
          this.supplier.review = [];
          //this.supplier.review=resp.body.results;
          for(let i = 0; i < resp.body.results.length; i++){
            this.supplier.review.push({
              author_id: resp.body.results[i].Author_ID,
              title: resp.body.results[i].Title,
              userName: resp.body.results[i].Name,
              comment: resp.body.results[i].Body,
              rating: resp.body.results[i].Rating,
              dateObject: new Date(resp.body.results[i].Date_Created.replace(/-/g, '\/').replace(/T.+/, '')),
              response: resp.body.results[i].Comment,
              review_id: resp.body.results[i].Review_ID,
            });
            if(resp.body.results[i].Author_ID == this.user.id){
              this.previousReview = true;
            }
          }
        }
      });
    });
  }

  addReview() {
    this.newReview.hideResponse = false;
    this.previousReview = true;
    let item={
      title:this.newReview.title,
      author_id: this.user.id,
      body: this.newReview.comment,
      rating: this.newReview.rating
    }

    

    this.activatedRoute.params.subscribe(() => {
      this.reviewRepository.addreview(this.supplier.id, item).subscribe(resp => {
        if (resp.status == 200) {
          this.newReview.date = Date.now();
          this.newReview = new Reviews();
        }
      });
    });
     
      this.reviewRepository.getReviews(Number(this.supplier.id)).subscribe(resp => {
        if (resp.status == 200) {
          this.supplier.review = [];
          for(let i = 0; i < resp.body.results.length; i++){
            this.supplier.review.push(
              {
                author_id: resp.body.results[i].Author_ID,
                title: resp.body.results[i].Title,
                userName: resp.body.results[i].Name,
                comment: resp.body.results[i].Body,
                rating: resp.body.results[i].Rating,
                dateObject: new Date(resp.body.results[i].Date_Created.replace(/-/g, '\/').replace(/T.+/, '')),
                response: resp.body.results[i].Comment,
              }
            );
          }
          /*this.supplier.review.push({
            author_id: resp.body.results[resp.body.results.length-1].Author_ID,
            title: resp.body.results[resp.body.results.length-1].Title,
            userName: resp.body.results[resp.body.results.length-1].Name,
            comment: resp.body.results[resp.body.results.length-1].Body,
            rating: resp.body.results[resp.body.results.length-1].Rating,
            dateObject: new Date(resp.body.results[resp.body.results.length-1].Date_Created.replace(/-/g, '\/').replace(/T.+/, '')),
            response: resp.body.results[resp.body.results.length-1].Comment,
          });*/
        }
      });

      this.accountRepository.getById(this.supplier.id).subscribe(resp =>{
        let temp = this.supplier.review;
        let tempId = this.supplier.id;
        if(resp.status == 200){
          this.supplier = resp.body;
          this.supplier.review = temp;
          this.supplier.id = tempId;
        }
      });
   
  }

  addResponse(i){
    i = (this.supplier.review.length -1) - i;
    let item={
      comment: this.reply,
      review_id: this.supplier.review[i].review_id
    }
    var num = this.supplier.review[i].author_id;
    this.activatedRoute.params.subscribe((params:any) => {
      this.reviewRepository.disputereview(this.supplier.id, item).subscribe(resp => {
        if (resp.status == 200) {
          this.supplier.review[i].response = this.reply;
          this.reply="";
        }
      });
    });
   
  }

  deleteFromTop(){
    
    for(let i = 0; i <  this.supplier.review.length; i++){
      if(this.supplier.review[i].author_id == this.user.id){
        var r = confirm("Are you sure you want to permanently delete your review?");
        if (r) {
          this.previousReview = false;
          this.activatedRoute.params.subscribe((params:any) => {
            this.reviewRepository.delete(Number(this.user.id)).subscribe(resp => {
              if (resp.status == 200) {
                this.supplier.review.splice(i, 1);
              }
            });
          });
          this.accountRepository.getById(this.supplier.id).subscribe(resp =>{
            let temp = this.supplier.review;
            let tempId = this.supplier.id;
            if(resp.status == 200){
              this.supplier = resp.body;
              this.supplier.review = temp;
              this.supplier.id = tempId;
            }
          }); 
        break;  
      }
    }
  }
}

  delete(i){
    var r = confirm("Are you sure you want to permanently delete your review?");
    i = (this.supplier.review.length -1) - i;
    if (r) {
      this.previousReview = false;
      this.activatedRoute.params.subscribe((params:any) => {
        this.reviewRepository.delete(Number(this.user.id)).subscribe(resp => {
          if (resp.status == 200) {
            this.supplier.review.splice(i, 1);
          }
        });
      });
      this.accountRepository.getById(this.supplier.id).subscribe(resp =>{
        let temp = this.supplier.review;
        let tempId = this.supplier.id;
        if(resp.status == 200){
          this.supplier = resp.body;
          this.supplier.review = temp;
          this.supplier.id = tempId;
        }
      });   
    }
  }
}
