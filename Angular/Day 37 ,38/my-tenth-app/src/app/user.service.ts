import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userArray : any[]=[
  // {userId:100, name:"Abhi" ,dob : "1998-10-22"},
  // {userId:200,name:"Arun", dob: "1999-04-30"}
]
  constructor() { }
public getUsers() : any[]{
  return this.userArray;
}
public save(obj:any) : void{
  this.userArray.push(obj);
}
public delete(id:number):void{
  for(let i=0;i< this.userArray.length;i++){
    let user=this.userArray[i];
    if(user.userId==id){
  this.userArray.splice(i,1);
    }
  }
}
}
