import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class LoginHttpService {

    private endPoint = 'https://809ea74f-a447-4e0b-a845-74177a5243a8.mock.pstmn.io';

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-mock-response-code': '200'        //tells mock DB what kind of response to expect
        }),

        observe: 'response' as 'body'
    };

    constructor(protected httpClient: HttpClient) { }

    public update(account: any): Observable<HttpResponse<any>> {
        return this.httpClient.put(`${this.endPoint}/login`, account, this.httpOptions).pipe(
            catchError(this.handleException)
        );
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(exception);
    }
}