import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule ,HttpClient} from '@angular/common/http';
import {ApplicationHttpClient, applicationHttpClientCreator} from './http-client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: ApplicationHttpClient,
    useFactory: applicationHttpClientCreator,
    deps: [HttpClient]
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
