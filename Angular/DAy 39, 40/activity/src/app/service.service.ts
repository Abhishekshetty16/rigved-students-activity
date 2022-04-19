import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
userArray: any[]=[]
  constructor() { }
  public getUsers(): any[] {
    return this.userArray;
  }
  public save(obj:any): void{
     this.userArray.push(obj);
  }
  // public delete(id:string):void{
  //   for (let i=0;i<this.userArray.length;i++){
  //     let user=this.userArray[i];
  //     if(user.userId==id){
  //       this.userArray.splice(i,1);
  //     }
  //   }
  // }
}
