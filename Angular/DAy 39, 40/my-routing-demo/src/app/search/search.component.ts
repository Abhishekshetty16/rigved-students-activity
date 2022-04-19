import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
username:string | undefined=undefined;
  constructor(private _activatedRoute:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((parameter:Params)=>
    this.username=parameter['name']
    )}

}
