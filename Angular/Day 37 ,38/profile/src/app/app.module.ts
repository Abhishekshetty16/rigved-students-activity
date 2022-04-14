import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfilelistComponent } from './profilelist/profilelist.component';
import { ProfilestoreComponent } from './profilestore/profilestore.component';
import { ProfiledeleteComponent } from './profiledelete/profiledelete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { Routes , RouterModule } from '@angular/router';
import { RegisterSuccessComponent } from './register-success/register-success.component';

let route : Routes=[
  {path: '',component:ProfilestoreComponent},
  {path: 'store',component:ProfilestoreComponent},
  {path: 'userlist',component:ProfilelistComponent},
  {path: 'delete',component:ProfiledeleteComponent},
  {path: 'update',component:ProfileupdateComponent},
  {path: 'success/:na',component:RegisterSuccessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProfilelistComponent,
    ProfilestoreComponent,
    ProfiledeleteComponent,
    ProfileupdateComponent,
    RegisterSuccessComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
