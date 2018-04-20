import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'HoneyScape';
  public slideNum: number;
  public slideTitle: string;
  public slideDesc: string;

  constructor() { }

  ngOnInit() {
    this.slideNum = 1;
    this.slideTitle = "Welcome to HoneyScape";
    this.slideDesc = "A place for suppliers and construcion companies to connect. \n If you do not have an account, Please sign up.\nAlready have an account? log in";
  }

  goRight() {
    if(this.slideNum != 2)
      this.slideNum++;
    else
      this.slideNum = 0;
    this.updateSlide();
  }

  goLeft() {
    if(this.slideNum != 0)
      this.slideNum--;
    else
      this.slideNum = 2;
    this.updateSlide();
  }

  updateSlide() {
   if (this.slideNum === 0) {
      this.slideTitle = 'HoneyScape';
      this.slideDesc = "For all your construction project needs. \n Plan projects, organize tasks, and order supplies \n all in one place!";
    } else if (this.slideNum === 1) {
      this.slideTitle = "Welcome to HoneyScape";
      this.slideDesc = "A place for suppliers and construcion companies to connect. \n If you do not have an account, Please sign up.\nAlready have an account? log in";
    } else if (this.slideNum === 2) {
      this.slideTitle = "HoneyScape";
      this.slideDesc = "Want to sell to construction companies! \n Make your supplies available to your buyers here!";
    }
  }

}
