import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profilelist',
  templateUrl: './profilelist.component.html',
  styleUrls: ['./profilelist.component.css']
})
export class ProfilelistComponent implements OnInit {
items : undefined | any[]=undefined;
  constructor(public service:ProfileService) { }

  ngOnInit(): void {
    this.items=this.service.getUsers();
  }

}
