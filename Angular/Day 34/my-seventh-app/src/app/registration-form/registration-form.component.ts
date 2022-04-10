import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fname:string="";
  lname:string="";
  gender:string="";
  qualification:string="";
  skills:string="";
  address:string="";
handleSubmit(formValue:any) :void{
  console.log(formValue);
  this.fname=formValue.fn;
  this.lname=formValue.ls;
  this.gender=formValue.gn;
  this.skills=formValue.sk;
  this.qualification=formValue.qu;
  this.address=formValue.add;
}
}
