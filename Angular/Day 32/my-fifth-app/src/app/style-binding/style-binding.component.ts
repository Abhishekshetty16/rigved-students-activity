import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myStyle1={'color':'red'}
  myStyle2={'color':'green'}
}
