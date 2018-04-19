import { Component, OnInit, Input } from '@angular/core';
import { Account, Task } from '../../domain/index'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input()
  public account: Account;
  public visibleStatus:boolean;
  public completeTasks: number;
  public incompleteTasks: number;
  public visibileTasks:number;

  public tempTask: Task;

  constructor() { }

  ngOnInit() {
    this.visibleStatus=false;
    this.incompleteTasks = 0;
    this.completeTasks = 0;
    this.countListForStatus();
    this.visibileTasks == this.incompleteTasks;
    this.tempTask={
      title:'',
      description:'',
      status:false
    };
  }

  countListForStatus(){
    for(var i = 0; i < this.account.tasks.length; i++){
      if(this.account.tasks[i].status == false){
        this.incompleteTasks++;
      } else {
        this.completeTasks++;
      }
    }
  }

  changeStatus(i){
    if(this.account.tasks[i].status == true){
      this.completeTasks--;
      this.incompleteTasks++;
    } else {
      this.completeTasks++;
      this.incompleteTasks--;
    }
    this.account.tasks[i].status = !this.account.tasks[i].status;
    this.updateVisibleTasks();
  }

  changeVisible(){
    this.visibleStatus = !this.visibleStatus;
    this.updateVisibleTasks();
  }

  updateVisibleTasks(){
    if(this.visibleStatus == false){
      this.visibileTasks = this.incompleteTasks;
    } else {
      this.visibileTasks = this.completeTasks;
    }
  }

  addTask(){
    this.account.tasks.push(this.tempTask);
    this.tempTask={
      title:'',
      description:'',
      status:false
    };
  }

  deleteTask(i){
    if(this.account.tasks[i].status == true){
      this.completeTasks--;
    } else {
      this.incompleteTasks--;
    }
    this.account.tasks.splice(i, 1);
    this.updateVisibleTasks();
  }
}
