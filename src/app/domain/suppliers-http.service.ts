import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpGeneric } from './http-generic.service';

@Injectable()
export class SuppliersHttpService extends HttpGeneric<any> {

    protected endPoint = 'http://ec2-34-227-162-95.compute-1.amazonaws.com/suppliers';

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

}
