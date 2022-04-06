import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-activity',
  templateUrl: './products-activity.component.html',
  styleUrls: ['./products-activity.component.css']
})
export class ProductsActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
products=[
  {NAME:"MOBILE",brand:["APPLE","VIVO","LENOVO","ONEPLUS"]},
  {NAME:"LAPTOP",brand:["HP","DELL","MAC"]}
];
}
