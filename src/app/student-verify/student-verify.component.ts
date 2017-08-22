import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-student-verify',
  templateUrl: './student-verify.component.html',
  styleUrls: ['./student-verify.component.css']
})
export class StudentVerifyComponent implements OnInit {
	private req: any
	topicList: [any];

  constructor(private http: Http) { }

  ngOnInit() {
  	this.req = this.http.get('assets/json/homework.json').subscribe(data=>{
  		this.topicList = data.json() as [any];
  		console.log(this.topicList)
  	})
  }

}
