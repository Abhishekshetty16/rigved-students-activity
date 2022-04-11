import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mdf2-demo',
  templateUrl: './mdf2-demo.component.html',
  styleUrls: ['./mdf2-demo.component.css']
})
export class Mdf2DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
firstname =new FormControl("");
lastname = new FormControl("");
}
