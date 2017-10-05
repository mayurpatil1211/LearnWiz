import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'app';
  isLogin: any = 0;
  username: string;

	constructor(public router:Router){ 
		router.events.subscribe((val) => { // see also console.log(val instanceof NavigationEnd) 
		// console.log(Cookie.get('auth_key'))

			if(Cookie.get('auth_token')&& Cookie.get('user_type')=='teacher'){
				this.isLogin = 1;
				// console.log("login")
        this.username = Cookie.get('username')
			}
      else if(Cookie.get('auth_token')&& Cookie.get('user_type')=='student'){
          this.isLogin = 2;
        // console.log("login")
        this.username = Cookie.get('username')
      }
		});
	}


  ngOnInit(){
  	// console.log("hello")
    // this.username = Cookie.get('username');
    // console.log(this.username);
  }

  logout(){
  	Cookie.deleteAll();
  	this.isLogin = 0;
  	this.router.navigate(['/'])
  }
}
