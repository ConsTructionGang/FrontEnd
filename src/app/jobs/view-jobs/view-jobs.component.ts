import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../domain/models/job';
import { Account } from '../../domain/models/account';
import { DataService } from "../data.service";


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
  public visibleJobs: string;
  public completeJobs: number;
  public incompleteJobs: number;
  public viewJobs: number;

  ngOnInit() {
    this.visibleJobs = 'In Progress';
    this.viewJobs = 0;
    this.incompleteJobs = 0;
    this.completeJobs = 0;
    this.tempJob={
      id:0,
      title:'',
      location:"",
      cost:0,
      startDate: new Date(),
      endDate: new Date(),
      status: "",
      supplies:[]
    };
    this.countListForStatus();
    this.viewJobs = this.incompleteJobs;
  }

  deleteJob(i: number) {
    var r = confirm("Are you sure you want to delete" + this.account.jobs[i].title + "?");
    if(r){
      if(this.account.jobs[i].status == 'In Progress'){
        this.incompleteJobs--;
      } else {
        this.completeJobs--;
      }
      this.account.jobs.splice(i,1);
      }
    }
  /*jobStatus(id: number, statusId: number, status:string) {
    var i: number;
      for (i = 0; i < this.account.jobs.length; i++) {
        if (this.account.jobs[i].id === id) {
          this.account.jobs[i].status.statusId = statusId;
          this.account.jobs[i].status = status;
        }
      }
    }
  compare(a,b) {
    if (a.status < b.last_nom)
      return -1;
    if (a.last_nom > b.last_nom)
      return 1;
    return 0;
    }*/


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

  clearTempJob() {
    this.tempJob={
      id:0,
      title:'',
      location:"",
      cost:0,
      startDate: new Date(),
      endDate: new Date(),
      status: "",
      supplies:[]
    };
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

  changeStatus(i){
    if(this.account.jobs[i].status == 'In Progress'){
      this.account.jobs[i].status  = 'Complete';
      this.completeJobs++;
      this.incompleteJobs--;
    } else {
      this.account.jobs[i].status  = 'In Progress';
      this.completeJobs--;
      this.incompleteJobs++;
    }
    this.updateVisibleTasks();
  }

  changeVisible(){
    if(this.visibleJobs == 'In Progress'){
      this.visibleJobs = 'Complete';
    } else {
      this.visibleJobs = 'In Progress';
    }
    this.updateVisibleTasks();
  }

  countListForStatus(){
    for(var i = 0; i < this.account.jobs.length; i++){
      if(this.account.jobs[i].status == 'In Progress'){
        this.incompleteJobs++;
      } else {
        this.completeJobs++;
      }
    }
  }

  updateVisibleTasks(){
    if(this.visibleJobs == 'In Progress'){
      this.viewJobs = this.incompleteJobs;
    } else {
      this.viewJobs = this.completeJobs;
    }
  }

}
