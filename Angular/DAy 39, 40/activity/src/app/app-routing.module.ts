import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { CategoriesComponent } from './categories/categories.component';
import { SuccessfulComponent } from './successful/successful.component';
import { LinkComponent } from './link/link.component';

import { UserslistComponent } from './userslist/userslist.component';
import { DeleteComponent } from './delete/delete.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticGuard } from './authentic.guard';
import { AudioFilesComponent } from './audio-files/audio-files.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:NewuserComponent},
  {path:"success/:name",component:SuccessfulComponent,canActivate:[AuthenticGuard], children:[
    {path:"detail",component:DetailComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"list",component:UserslistComponent},
    
    // {path:"delete",component:DeleteComponent},
    {path:"categories",component:CategoriesComponent, children:[
      {path:"link",component:LinkComponent},
      {path:"audio",component:AudioFilesComponent}
    ]},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
