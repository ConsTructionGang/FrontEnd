import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginHttpService {

    private endPoint = '';

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(protected httpClient: HttpClient) { }

    public update(account: any): Observable<any> {
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
