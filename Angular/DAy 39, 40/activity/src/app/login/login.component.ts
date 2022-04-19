import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router,private service :ServiceService,private builder:FormBuilder) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }
  userForm:FormGroup=this.builder.group({
    name:['']
  });
  saveForm(){
    this.service.save(this.userForm.value);
  }
name=new FormControl('');
password=new FormControl('');
handleLogin(){
  let name=this.name.value;
  sessionStorage.setItem('un',name);
  this. _router.navigate(["success",name]);
}
}
