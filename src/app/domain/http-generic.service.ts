import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

export abstract class HttpGeneric<T> {

    protected abstract endPoint;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'

            //needs to be commented out if trying to hit backend server
            //, 'x-mock-response-code': '200'        //tells mock DB what kind of response to expect
        }),

        observe: 'response' as 'body'
    };

    constructor(protected httpClient: HttpClient) { }

    public get(): Observable<T> {
        return this.httpClient.get(`${this.endPoint}`, this.httpOptions).pipe(
            catchError(this.handleException)
        );
    }

    public getById(id: number): Observable<T> {
        return this.httpClient.get(`${this.endPoint}/${id}`, this.httpOptions).pipe(
            catchError(this.handleException)
        );
    }

    public getByName(name: string): Observable<T> {
        return this.httpClient.get(`${this.endPoint}/supply/${name}`, this.httpOptions).pipe(
            catchError(this.handleException)
        );
    }

    public add(item: T): Observable<T> {
        return this.httpClient.post(`${this.endPoint}`, item, this.httpOptions).pipe(
            catchError(this.handleException)
        );
    }

    public update(item: T): Observable<T> {
        return this.httpClient.put(`${this.endPoint}`, item, this.httpOptions).pipe(
            catchError(this.handleException)
        );
    }

    public updateById(id: number, item: T): Observable<T> {
        return this.httpClient.put(`${this.endPoint}/${id}`, item, this.httpOptions).pipe(
            catchError(this.handleException)
        );
    }

    public delete(id: number): Observable<T> {
        return this.httpClient.delete(`${this.endPoint}/${id}`, this.httpOptions).pipe(
            catchError(this.handleException)
        );
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(exception);
    }
}
