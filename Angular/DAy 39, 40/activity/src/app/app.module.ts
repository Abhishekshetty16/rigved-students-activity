import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewuserComponent } from './newuser/newuser.component';
import { SuccessfulComponent } from './successful/successful.component';
import { LinkComponent } from './link/link.component';
import { DeleteComponent } from './delete/delete.component';
import { UserslistComponent } from './userslist/userslist.component';
import { AudioFilesComponent } from './audio-files/audio-files.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    NewuserComponent,
    SuccessfulComponent,
    LinkComponent,
    DeleteComponent,
    UserslistComponent,
    AudioFilesComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
