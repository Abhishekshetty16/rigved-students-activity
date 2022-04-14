import { Component, OnInit } from '@angular/core';
import { FormControl ,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {
object:any | undefined=undefined
  constructor(private service: ProfileService,private builder:FormBuilder) { }


  id:FormControl=new FormControl('')
  

  userForm: FormGroup = this.builder.group({
    id:['',Validators.required],
    name:['', Validators.required],
    gender:['', Validators.required],
    phoneno:['',Validators.compose([Validators.minLength(10),Validators.required,Validators.maxLength(10)])],
    emailId:['', Validators.required],
    address:this.builder.group({
      state:['', Validators.required],
      city:['', Validators.required],
      pincode:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(6)])]
    })
  })

  setProfileValue(){
    this.userForm.controls['id'].setValue(this.object.profileId);
    this.userForm.controls['name'].setValue(this.object.name);
    this.userForm.controls['gender'].setValue(this.object.gender);
    this.userForm.controls['phoneno'].setValue(this.object.phoneno);
    this.userForm.controls['emailId'].setValue(this.object.emailId);
    this.userForm.controls['address'].get('state')?.setValue(this.object.address.state);
    this.userForm.controls['address'].get('city')?.setValue(this.object.address.city);
    this.userForm.controls['address'].get('pincode')?.setValue(this.object.address.pincode);
  }
  
  
  
  
  updateForm(){
    console.log(this.userForm.value)
    this.service.updateform(this.userForm.value)
  }

  getInfo(){
    this.object=this.service.update(this.id.value)
    console.log(this.object)
  }

  ngOnInit(): void {
  }

}
