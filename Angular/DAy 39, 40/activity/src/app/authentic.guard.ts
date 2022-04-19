import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticGuard implements CanActivate {
constructor(private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   let input=sessionStorage.getItem('un');
   let params=route.paramMap.get("name");
   if (params === input){
     return true;
   }else{
     alert("login again");
     this._router.navigate(['/login']);
     return false;
   }
  }
}
