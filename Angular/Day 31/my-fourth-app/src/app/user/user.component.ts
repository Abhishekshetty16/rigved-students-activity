import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user: any =[
    {name:"Abhi",gender:"Male",address:{state:"KA",city:"MLR"}},
    {name:"Arun",gender:"Male",address:{state:"KE",city:"KC"}},
    {name:"Akanasha",gender:"Female",address:{state:"MH",city:"MBI"}},
    {name:"Sneha",gender:"Female",address:{state:"RJ",city:"HR"}},
    {name:"Ajit",gender:"Male",address:{state:"SR",city:"GU"}}
  ]}
