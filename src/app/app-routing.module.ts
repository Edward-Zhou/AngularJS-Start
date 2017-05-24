import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./app.notfound";
import { AppSubComponent } from "./appsub.component";

const appRoutes:Routes=[
  {path:'sub',component:AppSubComponent},
  {path:'',redirectTo:'/sub',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
