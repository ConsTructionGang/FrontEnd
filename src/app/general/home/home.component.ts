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
    this.slideTitle='Slide Two';
    this.slideDesc = 'Slide two text.\nSlide Second Line.';
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
      this.slideTitle='Slide One';
      this.slideDesc = 'Slide one text.\nSlide Second Line.';
    } else if(this.slideNum == 1){
      this.slideTitle='Slide Two';
      this.slideDesc = 'Slide two text.\nSlide Second Line.';
    } else if(this.slideNum == 2){
      this.slideTitle='Slide Three';
      this.slideDesc = 'Slide three text.\nSlide Second Line.';
    }
  }

}
