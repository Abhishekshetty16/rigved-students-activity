import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
userName:string |undefined=undefined;
  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.parent?.params.subscribe((parameter :Params)=>{
      this.userName =parameter['name'];
    });
  }

}
