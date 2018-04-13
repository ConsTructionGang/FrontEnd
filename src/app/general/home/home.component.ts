import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = 'HoneyScape';
  public slideNum: number;
  public slideTitle: string;
  public slideDesc: string;

  constructor() { }

  ngOnInit() {
    this.slideNum = 1;
    this.slideTitle = "Welcome to HoneyScape";
    this.slideDesc = "If you do not have an account, Please sign up.\nAlready have an account? log in";
  }

  goRight(){
    this.slideNum++;
    this.updateSlide();
  }

  goLeft(){
    this.slideNum--;
    this.updateSlide();
  }

  updateSlide(){
    if(this.slideNum == 0){
      this.slideTitle='Welcome to HoneyScape';
      this.slideDesc = 'If you do not have an account, Please sign up.\nAlready have an account? log in';
    } else if(this.slideNum == 1){
      this.slideTitle='HoneyScape';
      this.slideDesc = "Your image is part of your reputation";
    } else if(this.slideNum == 2){
      this.slideTitle='HoneyScape';
      this.slideDesc = "Building the future..Restoring the past";
    }
  }

}
