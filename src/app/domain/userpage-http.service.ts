import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpGeneric } from './http-generic.service';

@Injectable()
export class UserpageHttpService extends HttpGeneric<any> {

    protected endPoint = 'http://ec2-34-227-162-95.compute-1.amazonaws.com/userpage';

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

}