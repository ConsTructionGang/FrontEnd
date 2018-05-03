import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpGeneric } from './http-generic.service';

import { Task } from '../domain';

@Injectable()
export class TasksHttpService extends HttpGeneric<any> {

    protected endPoint = 'http://ec2-34-227-162-95.compute-1.amazonaws.com/tasks';

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    public addTask(userId: number, item: Task) {
        this.endPoint = `http://ec2-34-227-162-95.compute-1.amazonaws.com/tasks/${userId}`;

        return this.add(item);
    }

    public deleteTask(taskId: number) {
        this.endPoint = `http://ec2-34-227-162-95.compute-1.amazonaws.com/tasks`;

        return this.delete(taskId);
    }

}
