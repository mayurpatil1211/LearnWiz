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

	constructor(public router:Router){ 
		router.events.subscribe((val) => { // see also console.log(val instanceof NavigationEnd) 
		console.log(Cookie.get('auth_key'))

			if(Cookie.get('auth_key')&& Cookie.get('user_type')=='teacher'){
				this.isLogin = 1;
				console.log("login")
			}
      else if(Cookie.get('auth_key')&& Cookie.get('user_type')=='student'){
          this.isLogin = 2;
        console.log("login")
      }
		});
	}


  ngOnInit(){
  	console.log("hello")
  }

  logout(){
  	Cookie.deleteAll();
  	this.isLogin = 0;
  	this.router.navigate(['/'])
  }
}
