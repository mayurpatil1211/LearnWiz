import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router, NavigationStart } from '@angular/router';

declare var Storages: any;
declare var data: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormBuilder, AuthService]
})
export class LoginComponent implements OnInit {

form: FormGroup;




  constructor(public router: Router, private formBuilder: FormBuilder, private auth: AuthService) {
  	this.form = formBuilder.group({
  		usr_email:['', [Validators.required]],
  		usr_password:['', [Validators.required]]
  	})
  	}

  ngOnInit() {
  }
 
onSubmit = function () {
for (let i in this.form.controls) {
this.form.controls[i].markAsTouched();
}

      if (this.form.valid) {
      this.data = this.form.value;
      console.log(this.data)
      this.response = this.auth.authenticatenow(this.data)
      console.log(this.response);

      if (this.response.responseCode == 1000) {
      // let storage = Storages.localStorage;
      Cookie.set('auth_key', this.response.auth_key);
      Cookie.set('user_name',this.data.userName);
      Cookie.set('user_type', "teacher");
      console.log(this.response);

      this.isAuthenticated = true;
      this.router.navigate(['/teacher/dashboard']);
      }

      else if(this.response.responseCode == 1005){
      Cookie.set('auth_key', this.response.auth_key);
      Cookie.set('user_name',this.data.userName);
      Cookie.set('user_type', "student");
      console.log(this.response);
       this.isAuthenticated = true;
      this.router.navigate(['/student/dashboard']);
}

}
}


}
