import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor(private _builder:FormBuilder,private _router:Router,public service :ServiceService) { }
  ngOnInit(): void {
  }
  userForm=this._builder.group({
    name:[''],password:['']
  });
  handleRegister(){
    this.service.save(this.userForm.value);
    this._router.navigate(["/login"]);
    alert("name registerd is  :" +this.userForm.value.name);
  }

}
  
// userId:[''], 

  
