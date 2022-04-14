import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
userArray : any[]=[];
  constructor() { }

public getUsers():any[]{
  return this.userArray;
}
public save(obj:any):void{
  let b=this.userArray.length;
  let a=b+1
  let object={profileId:a,name:obj.name,gender:obj.gender,phoneno:obj.phoneno,emailId:obj.emailId,
  address:{state:obj.address.state,city:obj.address.city,pincode:obj.address.pincode}}
  this.userArray.push(object);
}
public delete(id:number) :void{
  for(let i=0;i<this.userArray.length;i++){
    let user =this.userArray[i];
  if(user.profileId== id){
  this.userArray.splice(i,1);
}
}
}

public update(id:number):any{
  for(let i=0; i< this.userArray.length; i++){
    let user=this.userArray[i];
    if(user.profileId==id){
      return this.userArray[i];
    }
  }
}
public updateform(obj:any):void{
  for(let i=0; i< this.userArray.length; i++){
    let user=this.userArray[i];
    if(user.profileId==obj.id){
      user.name=obj.name;
      user.gender=obj.gender;
      user.phoneno=obj.phoneno;
      user.emailId=obj.emailId;
      user.address.state=obj.address.state;
      user.address.city=obj.address.city;
      user.address.pincode=obj.address.pincode;
     
    }
  }
}
}
