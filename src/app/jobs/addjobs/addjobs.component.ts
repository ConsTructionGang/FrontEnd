import { Account } from './../../domain/models/account';
import { Component, OnInit } from '@angular/core';
import { Supply } from '../../domain/models/supply';
import { Job } from '../../domain/models/job';
import { Status } from '../../domain';
import { pencil } from 'octicons';



@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrls: ['./addjobs.component.css']
})
export class AddjobsComponent implements OnInit {

  public title: string;
  public supplies: Supply[];
  public account: Account;
  public tempSupply: any;
  public tempJob: Job;
  public indexJob: number;

  constructor() { }

  ngOnInit() {
      this.supplies = [];
      this.supplies=[
        {
          id:1,
          name: 'Wood'
        },
        {
          id:2,
          name: 'Bricks'
        },
        {
          id:3,
          name: 'Cement'
        },
        {
          id:4,
          name: 'Nails'
        }
      ];
      this.title = 'Create A New Job';
      this.account = {
          id: 0,
          password: '',
          type: 'User',
          jobs:[
            {id:0,
              title:'Project 1',
              location:"",
              cost:0,
              startDate: new Date(),
              endDate: new Date(),
              status: new Status(),
              supplies:['wood', 'brick']
            },
            {id:1,
              title:'Project 2',
              location:"",
              cost:0,
              startDate: new Date(),
              endDate: new Date(),
              status: new Status(),
              supplies:['wood', 'brick']
            },
          ]
      };
      this.indexJob=this.account.jobs.length;
      this.tempJob={
        id:this.indexJob,
        title:'',
        location:"",
        cost:0,
        startDate: new Date(),
        endDate: new Date(),
        status: new Status(),
        supplies:[]
      };
  }

  addSupply(){
    this.tempJob.supplies.push(this.supplies[this.tempSupply-1].name);
  }

  addJob(){
    this.account.jobs[this.indexJob]=this.tempJob;
    this.indexJob=this.account.jobs.length;
    this.tempJob={
      id:this.indexJob,
      title:'',
      location:"",
      cost:0,
      startDate: new Date(),
      endDate: new Date(),
      status: new Status(),
      supplies:[]
    };
    this.title = 'Create A New Job';
  }

  editJob(i){
    var r = confirm("Editing " + this.account.jobs[i].title + " will cause you to lose any unsaved changes to the current job. Are you sure you want to continue?");
    if(r==true){
      this.title = 'Edit ' + this.account.jobs[i].title;
      this.tempJob = this.account.jobs[i];
      this.indexJob = i;
    }
  }

  emptyJob(){
    var r = confirm("Creating new job will cause you to lose any unsaved changes to the current job. Are you sure you want to continue?");
    if(r==true){
      this.indexJob=this.account.jobs.length;
      this.tempJob={
        id:this.indexJob,
        title:'',
        location:"",
        cost:0,
        startDate: new Date(),
        endDate: new Date(),
        status: new Status(),
        supplies:[]
      };
      this.title = 'Create A New Job';
    }
  }

  removeSupply(index){
    if (index > -1) {
      this.tempJob.supplies.splice(index, 1);
    }
  }
}

