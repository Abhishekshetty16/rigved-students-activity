import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profiledelete',
  templateUrl: './profiledelete.component.html',
  styleUrls: ['./profiledelete.component.css']
})
export class ProfiledeleteComponent implements OnInit {

  constructor(private service: ProfileService , private _router : Router) { }

  ngOnInit(): void {
  }
id:FormControl=new FormControl('');
deleteProfile(){
  this.service.delete(this.id.value);
  this._router.navigate(['userlist'])
}
}
