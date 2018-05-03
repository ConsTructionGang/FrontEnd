import { Job } from '../domain';

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpGeneric } from './http-generic.service';

@Injectable()
export class JobsHttpService extends HttpGeneric<any> {

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
