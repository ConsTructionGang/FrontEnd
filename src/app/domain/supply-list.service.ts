import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpGeneric } from './http-generic.service';

@Injectable()
export class SupplyListService extends HttpGeneric<any> {
    //mock db
    // protected endPoint = 'https://809ea74f-a447-4e0b-a845-74177a5243a8.mock.pstmn.io/user';
    //backend server
    protected endPoint = 'http://ec2-34-227-162-95.compute-1.amazonaws.com/supplies';

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

}