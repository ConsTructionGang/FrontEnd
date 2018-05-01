import { Job } from '../domain';

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpGeneric } from './http-generic.service';

@Injectable()
export class JobsHttpService extends HttpGeneric<any> {
    //mock db
    // protected endPoint = 'https://809ea74f-a447-4e0b-a845-74177a5243a8.mock.pstmn.io/user';
    //backend server
    protected endPoint = 'http://ec2-34-227-162-95.compute-1.amazonaws.com/';

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    public addJob(userId: number, item: Job) {
        this.endPoint = `http://ec2-34-227-162-95.compute-1.amazonaws.com/jobs/create/${userId}`;

        return this.add(item);
    }

    public updateJob(jobId: number, item: Job) {
        this.endPoint = `http://ec2-34-227-162-95.compute-1.amazonaws.com/jobs`;

        return this.updateById(jobId, item);
    }

    public deleteJob(jobId: number) {
        this.endPoint = `http://ec2-34-227-162-95.compute-1.amazonaws.com/jobs`;

        return this.delete(jobId);
    }

}
