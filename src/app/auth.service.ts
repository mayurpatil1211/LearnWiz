
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
declare var Storages: any;
@Injectable()
export class AuthService {
  data = <any>{};
isAuthenticated: boolean = false;
  constructor( private router: Router) {}

authenticatenow(usercreds) :Observable<any>{
  console.log(usercreds);
  if(usercreds.usr_email == 'teacher@learnwiz.com' && usercreds.usr_password == 'teacher'){
    this.data['responseCode'] = 1000;
    this.data['auth_key'] = "dasdjkdha88jnknkj";
    this.data['user_type'] = "teacher";
  }else if(usercreds.usr_email == 'student@learnwiz.com' && usercreds.usr_password == 'student'){
      this.data['responseCode'] = 1005;
      this.data['auth_key'] = "dasdjkdha88jnknk";
      this.data['user_type'] = "student";
  }
   else{
    this.data['responseCode'] = 1105;
    this.data['message'] = "Invalid Credentials";
  }
return this.data;
//  return this.http.post('http://13.228.49.155/trzapi/index.php/TourizAPI/checkLogin', usercreds)
//  .map((response:Response)=> response.json());

}

}
