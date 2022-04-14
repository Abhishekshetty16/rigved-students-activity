import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilestore',
  templateUrl: './profilestore.component.html',
  styleUrls: ['./profilestore.component.css']
})
export class ProfilestoreComponent implements OnInit {

  constructor(private builder: FormBuilder,private service : ProfileService ,private _router :Router) { }

  ngOnInit(): void {
  }
  userForm :FormGroup=this.builder.group({
    name:['',Validators.required],
    gender:['',Validators.required],
    phoneno:['',Validators.compose([Validators.maxLength(10),Validators.minLength(10)])],
    emailId:['',Validators.required],
    address:this.builder.group(
      {state:['',Validators.required],
      city:['',Validators.required],
      pincode:['',Validators.compose([Validators.required,Validators.maxLength(6),Validators.minLength(6)])]
    })
  });
  saveForm(){
    this.service.save(this.userForm.value);
    this._router.navigate(['success',this.userForm.value.name])
  }

}
//