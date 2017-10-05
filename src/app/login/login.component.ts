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
.subscribe((data)=>{
  console.log(data)
  if(data.status == 'success'){
    console.log(data.user_role)
    if(data.user_role == 2){
          Cookie.set('auth_token', data.auth_token);
          Cookie.set('user_role_id',data.user_role);
          Cookie.set('user_type', "teacher");
          Cookie.set('username', data.username)
          this.isAuthenticated = true;
          this.router.navigate(['/teacher/dashboard']);
    }else if(data.user_role == 3){
      Cookie.set('auth_token', data.auth_token);
      Cookie.set('user_role_id', data.user_role);
      Cookie.set('user_type', "student")
      Cookie.set('username', data.username)
      this.isAuthenticated = true;
      this.router.navigate(['/student/dashboard']);
    }else{
      alert("invalid email")
    }
         
  }else if(data.status == 400){
    alert('Invalid Email or Password')
  }
})
console.log(this.response);

}






}


}


    // onSubmit = function () {
    //   for (let i in this.form.controls) {
    //   this.form.controls[i].markAsTouched();
    //   }
      
    //         if (this.form.valid) {
    //         this.data = this.form.value;
    //         console.log(this.data)
    //         this.response = this.auth.authenticatenow(this.data)
    //         .subscribe((data)=>{
    //           if(data.status == 'success'){
    //             console.log(data.auth_token)
    //                   Cookie.set('auth_token', data.auth_token);
    //                   Cookie.set('user_role_id',data.user_role);
    //                   this.isAuthenticated = true;
    //                   this.router.navigate(['dashboards/dashboard']);
    //           }
    //         })
    //         console.log(this.response);
      
    //   }
    //   }

    

//       if (this.response.responseCode == 1000) {
//       // let storage = Storages.localStorage;
//       Cookie.set('auth_key', this.response.auth_key);
//       Cookie.set('user_name',this.data.userName);
//       Cookie.set('user_type', "teacher");
//       console.log(this.response);

//       this.isAuthenticated = true;
//       this.router.navigate(['/teacher/dashboard']);
//       }

//       else if(this.response.responseCode == 1005){
//       Cookie.set('auth_key', this.response.auth_key);
//       Cookie.set('user_name',this.data.userName);
//       Cookie.set('user_type', "student");
//       console.log(this.response);
//        this.isAuthenticated = true;
//       this.router.navigate(['/student/dashboard']);
//     }else if(this.responce.responceCode == 1111){
//       Cookie.set('auth_key', this.responce.auth_key);
//       Cookie.set('user_name', this.data.username);
//       Cookie.set('user_type', "admin");
//      this.isAuthenticated = true;
//      console.log("i am in admin")
//      window.location.href = 'https://learnwiz-admin.herokuapp.com';

// }
