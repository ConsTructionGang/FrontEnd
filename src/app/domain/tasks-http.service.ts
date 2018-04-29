import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpGeneric } from './http-generic.service';

import { Task } from '../domain';

@Injectable()
export class TasksHttpService extends HttpGeneric<any> {
    //mock db
    // protected endPoint = 'https://809ea74f-a447-4e0b-a845-74177a5243a8.mock.pstmn.io/user';
    //backend server
    protected endPoint = 'http://ec2-34-227-162-95.compute-1.amazonaws.com/';

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    public addTask(userId: number, item: Task) {
        this.endPoint = `http://ec2-34-227-162-95.compute-1.amazonaws.com/tasks/${userId}`;

        return this.add(item);
    }

    // public updateJob(jobId: number, item: Job) {
    //     this.endPoint = `http://ec2-34-227-162-95.compute-1.amazonaws.com/jobs`;

    //     return this.updateById(jobId, item);
    // }

    // public deleteJob(jobId: number) {
    //     this.endPoint = `http://ec2-34-227-162-95.compute-1.amazonaws.com/jobs`;

    //     return this.delete(jobId);
    // }

}
