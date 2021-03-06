import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Account, Task } from '../../domain'
import { TasksHttpService } from './../../domain';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input()
  public account: Account;
  public visibleStatus: boolean;
  public completeTasks: number;
  public incompleteTasks: number;
  public visibileTasks: number;
  public viewDelete: boolean;
  public tempTask: Task;
  public deletedTasks: Task[];

  @Input()
  public showHide: boolean;

  constructor(
    private taskHttpService: TasksHttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.deletedTasks = [];
    this.viewDelete = false;
    this.visibleStatus = false;
    this.incompleteTasks = 0;
    this.completeTasks = 0;
    this.countListForStatus();
    this.visibileTasks == this.incompleteTasks;
    this.tempTask = {
      title: '',
      description: '',
      status: false,
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  countListForStatus() {
    for (var i = 0; i < this.account.tasks.length; i++) {
      if (this.account.tasks[i].status == false) {
        this.incompleteTasks++;
      } else {
        this.completeTasks++;
      }
    }
  }

  changeStatus(i) {
    if (this.account.tasks[i].status == true) {
      this.completeTasks--;
      this.incompleteTasks++;
    } else {
      this.completeTasks++;
      this.incompleteTasks--;
    }
    this.account.tasks[i].status = !this.account.tasks[i].status;

    this.activatedRoute.params.subscribe((params: any) => {
      this.taskHttpService.updateById(this.account.tasks[i].id, this.account.tasks[i]).subscribe(resp => {
        if(resp.body.status == 200) {
          this.updateVisibleTasks();
        }
      });
    });
    
  }

  changeVisible() {
    this.visibleStatus = !this.visibleStatus;
    this.updateVisibleTasks();
  }

  updateVisibleTasks() {
    if (this.visibleStatus == false) {
      this.visibileTasks = this.incompleteTasks;
    } else {
      this.visibileTasks = this.completeTasks;
    }
  }

  addTask() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.taskHttpService.addTask(+params.userId, this.tempTask).subscribe(resp => {
        if (resp.status == 200) {
          this.tempTask.status=false;
          this.account.tasks.push(this.tempTask);
          this.tempTask = {
            title: '',
            description: '',
            startDate: new Date(),
            endDate: new Date(),
            status: false
          };
        }
      });
    });

  }

  deleteTask(i) {
    var r = confirm("Are you sure you want to delete " + this.account.tasks[i].title + "? Deleted tasks will be temporarily stored until you leave the page.");
    if (r) {
      this.activatedRoute.params.subscribe((params: any) => {
        this.taskHttpService.deleteTask(this.account.tasks[i].id).subscribe(resp => {
          if (resp.status == 200) {
            if (this.account.tasks[i].status == true) {
              this.completeTasks--;
            } else {
              this.incompleteTasks--;
            }

            this.deletedTasks.push(this.account.tasks[i]);
            this.account.tasks.splice(i, 1);
            this.updateVisibleTasks();
          }
        });
      });
      
    }
  }

  undelete(i) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.taskHttpService.addTask(+params.userId, this.deletedTasks[i]).subscribe(resp => {
        if(resp.status == 200) {
          this.account.tasks.push(this.deletedTasks[i]);
          this.deletedTasks.splice(i, 1);
        }
      });
    });
  }
}
