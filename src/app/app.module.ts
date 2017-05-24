import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from "./app.notfound";
import { AppRoutingModule } from "./app-routing.module";
import { AppSubComponent } from "./appsub.component";



@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ],
  declarations: [ AppComponent,AppSubComponent,PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
   constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
