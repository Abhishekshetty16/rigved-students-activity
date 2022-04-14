import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserstoreComponent } from './userstore/userstore.component';
import { UserdeleteComponent } from './userdelete/userdelete.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes , RouterModule } from '@angular/router';
import { RegisterSuccessComponent } from './register-success/register-success.component';

let route : Routes=[
  {path:'',component:UserstoreComponent},
  {path:'store',component:UserstoreComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'delete',component:UserdeleteComponent},
  {path:'success/:uid',component:RegisterSuccessComponent},
  
]


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserstoreComponent,
    UserdeleteComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
