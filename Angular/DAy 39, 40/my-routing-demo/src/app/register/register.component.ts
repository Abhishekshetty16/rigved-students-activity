import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _builder :FormBuilder,private _router:Router) { }

  ngOnInit(): void {
  }
profileForm=this._builder.group({
  name:[],password:[],phone:[]
});
handleRegister(){
  this._router.navigate(["/login"]);
  alert('name registerd is ' +this.profileForm.value.name);
}
}
