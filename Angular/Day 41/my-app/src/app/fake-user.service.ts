import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FakeUserService {

  constructor(private _http:HttpClient) { }
public getFakeUsers():Observable<any>{
  let url="http://jsonplaceholder.tyicode.com/users";
  return this._http.get(url)
}

}

