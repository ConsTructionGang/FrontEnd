import { Component, OnInit } from '@angular/core';
import { Job } from '../../domain/models/job';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {

  constructor() { }
  public jobs:  Job[];
  ngOnInit() {
    this.jobs =[
      {
        id: 11,
        title: "Expressway Tower",
        location: "North Central Expressway",
        cost :100000,
        startDate: new Date(2017,11,12),
        endDate: new Date(2018,2,4),
        status: {
          statusId: 0, statusString: "In Progress"
        },
        supplies:[]
      },
      {
        id: 12,
        title: "Ulta",
        location: "Mockingbird Lane",
        cost :250000,
        startDate: new Date(2018,8,8),
        endDate: new Date(2020,3,24),
        status: {
          statusId: 0, statusString: "In Progress"
        },
        supplies:[]
      },
      {
        id: 13,
        title: "Elizabeth's Cakes",
        location: "Preston",
        cost :50000,
        startDate: new Date(2018,5,4),
        endDate: new Date(2019,1,13),
        status: {
          statusId: 0, statusString: "In Progress"
        },
        supplies:[]
      }
    ]
  }
  deleteJob(id: number) {
    var i: number;
      for (i = 0; i < this.jobs.length; i++) {
        if (this.jobs[i].id === id) {
          this.jobs.splice(i,1);
          break;
        }
      }
    }
  jobStatus(id: number, statusId: number, statusString:string) {
    var i: number;
      for (i = 0; i < this.jobs.length; i++) {
        if (this.jobs[i].id === id) {
          this.jobs[i].status.statusId = statusId;
          this.jobs[i].status.statusString = statusString;
        }
      }
    }
  compare(a,b) {
    if (a.status < b.last_nom)
      return -1;
    if (a.last_nom > b.last_nom)
      return 1;
    return 0;
    }
  }
