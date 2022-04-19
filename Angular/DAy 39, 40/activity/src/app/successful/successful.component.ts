import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent implements OnInit {
username : string | undefined =undefined;
  constructor(private _activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parameter:Params)=>
{
  this.username=parameter['name'];
});
  }

}
