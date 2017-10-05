
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
declare var Storages: any;
@Injectable()
export class AuthService {
  data = <any>{};
isAuthenticated: boolean = false;
  constructor(private http: Http, private router: Router) {}

authenticatenow(usercreds) :Observable<any>{
  console.log(usercreds)
return this.http.post('https://learnwiz-back.herokuapp.com/auth/login', usercreds)
.map((responce:Response)=>responce.json());

}

}
