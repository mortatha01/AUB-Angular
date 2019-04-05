import { Component } from '@angular/core';
import {ApplicationHttpClient} from './http-client';
import {HttpResponse, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aub-app';
  constructor(private appServices: ApplicationHttpClient) {
}
public users = [];

getUsers() {
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observe: 'response' as 'response'
};
    this.appServices.Get('users')
        .subscribe(
            (res: HttpResponse<any>) => {
              this.users=res['data']
              debugger

            },
            error => {
            });
}

ngOnInit() {
}

}
