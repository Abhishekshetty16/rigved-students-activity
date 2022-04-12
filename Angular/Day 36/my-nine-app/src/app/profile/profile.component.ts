import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
  }
 profile:FormGroup=this.builder.group({
   firstname:['',Validators.compose([Validators.required,Validators.minLength(5)])],
   lastname:['',Validators.compose([Validators.required,Validators.minLength(5)])],
   address: this.builder.group({
     state:['',Validators.required],
     city:['',Validators.required],
     pin:['',Validators.required]
   }),
 });
 handleSubmit(){
   console.log(this.profile.value);
   this,this.profile.reset({});

 }
}
