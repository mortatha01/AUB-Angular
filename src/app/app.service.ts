import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from 'environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class AppService {
    constructor(private httpClient: HttpClient) {
    }

    responseData: any;

    getData() {
        return this.httpClient.get('https://my-json-server.typicode.com/arnaudleray/employee-directory/employees')
            .map(data => {
                return data;
            });
    }

    // getServer(featureName: string, apiName: string, params: any) {
    getServer(username: string, password: string) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        headers.set('Content-Type', 'application/json');
        // headers.set('Access-Control-Allow-Origin', '*');
        // headers.set('Accept', 'application/json');
        // headers.set('Access-Control-Allow-Methods', 'POST');
        // headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type');
        return this.httpClient.post('/cms/v1/Donation/GetDonations?domain_id=1'
            , {headers: null}
            , {headers: headers}).pipe(
            map(res => {
                return res;
            }), catchError((err: any) => {
                return err;
            }));

    }

    logIn(username: string, password: string) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        headers.set('Content-Type', 'application/json');
        const params = new HttpParams().set('username', username);
        return this.httpClient.post<any>( '/cms/v1/framework/Auth/Login'
            , {username: username, password: password}, {headers: headers}
        )
            .map(user => {
               console.log(user.headers.get('X-Session'));
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    post() {
    }
}
