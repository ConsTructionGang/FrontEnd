import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../domain/models/job';
import { Account } from '../../domain/models/account';
import { DataService } from "../data.service";
import { Status } from "../../domain/models/status";


@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {

  constructor() { }
  public jobs:  Job[];
  @Input()
  public account: Account;
  public tempJob: Job;

  ngOnInit() {
    this.tempJob={
      id:0,
      title:'',
      location:"",
      cost:0,
      startDate: new Date(),
      endDate: new Date(),
      status: new Status(),
      supplies:[]
    };
    this.account={
      id: 0,
      password: '',
      type: 'User',
      jobs:[
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
          supplies:['bricks', 'wood']
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
          supplies:['bricks', 'wood']
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
          supplies:['bricks', 'wood']
        }
      ]
    }
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
      for (i = 0; i < this.account.jobs.length; i++) {
        if (this.account.jobs[i].id === id) {
          this.account.jobs[i].status.statusId = statusId;
          this.account.jobs[i].status.statusString = statusString;
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


  fillTempJob(i){
    this.tempJob.title = this.account.jobs[i].title;
    this.tempJob.cost = this.account.jobs[i].cost;
    this.tempJob.endDate = this.account.jobs[i].endDate;
    this.tempJob.id = this.account.jobs[i].id;
    this.tempJob.location = this.account.jobs[i].location;
    this.tempJob.status = this.account.jobs[i].status;
    this.tempJob.startDate = this.account.jobs[i].startDate;
    var j :number;
    this.tempJob.supplies = [];
    for(j = 0; j < this.account.jobs[i].supplies.length; j++){
      this.tempJob.supplies[j] = this.account.jobs[i].supplies[j];
    }
  }

  updateJob(i){
        this.account.jobs[i].title = this.tempJob.title;
        this.account.jobs[i].cost = this.tempJob.cost;
        this.account.jobs[i].endDate = this.tempJob.endDate;
        this.account.jobs[i].id = this.tempJob.id;
        this.account.jobs[i].location = this.tempJob.location;
        this.account.jobs[i].status = this.tempJob.status;
        this.account.jobs[i].startDate = this.tempJob.startDate;
        var j :number;
        this.account.jobs[i].supplies=[];
        for(j = 0; j < this.tempJob.supplies.length; j++){
          this.account.jobs[i].supplies[j] = this.tempJob.supplies[j];
        }
  }
}
