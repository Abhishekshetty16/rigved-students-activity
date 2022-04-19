import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  constructor(private service:ServiceService,private _router:Router) { }

  ngOnInit(): void {
  }
id:FormControl=new FormControl("");
deleteUser(){
  // this.service.delete(this.id.value);
  this._router.navigate(['userList'])
}
}
