import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  username:string="Abhishek";
  birthday:Date=new Date(1998,4,16);
  amount:number=2588700;
  constructor() { }

  ngOnInit(): void {
  }

}
