import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
items:undefined|any[]=undefined;
  constructor(public service :ServiceService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this._activatedRoute.parent?.params.subscribe((parameter:Params)=>{
    //   this.items=parameter['items']
    this.items=this.service.getUsers();
  }
    
   

}
