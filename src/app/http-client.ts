import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {catchError} from 'rxjs/operators';


export interface IRequestOptions {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    body?: any;
}

export function applicationHttpClientCreator(http: HttpClient) {
    return new ApplicationHttpClient(http);
}

@Injectable()
export class ApplicationHttpClient {

    private api = 'https://reqres.in/api/';

    menus: any[] = [];
    user: any;
    userRole: any;
    languages: any;
    CMSConfiguration: any;
    domains: any;

    // Extending the HttpClient through the Angular DI.
    public constructor(public http: HttpClient) {
        // If you don't want to use the extended versions in some cases you can access the public property and use the original one.
        // for ex. this.httpClient.http.get(...)
    }

    /**
     * GET request
     * @param {string} endPoint it doesn't need / in front of the end point
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Get<T>(endPoint: string, options?: IRequestOptions): Observable<any> {
        return this.http.get<any>(this.api + endPoint, options).pipe(
            map(res => {
                return res;
            }), catchError((err: any) => {
                return err;
            }));
    }

    checkAuth(res) {
        console.log('PIPE');
        console.log(res);

        return res;
    }

    /**
     * POST request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Post<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<any> {
        const body = params;
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('X-device', 'application/json; charset=utf-8');

        console.log(body);
        console.log(headers);

        return this.http.post<T>(this.api + endPoint, body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json; charset=utf-8')
                .set('X-device', 'application/json; charset=utf-8')
        }).pipe(
            map(res => {
                return res;
            }), catchError((err: any) => {
                return err;
            }));
    }

    /**
     * PUT request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Put<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        return this.http.put<T>(this.api + endPoint, params, options);
    }

    /**
     * DELETE request
     * @param {string} endPoint end point of the api
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.delete<T>(this.api + endPoint, options);
    }
}
