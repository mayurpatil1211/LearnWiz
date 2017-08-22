import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';

@Component({
  selector: 'app-student-homework',
  templateUrl: './student-homework.component.html',
  styleUrls: ['./student-homework.component.css']
})
export class StudentHomeworkComponent implements OnInit {
	private req:any;
	topicList: [any];

  constructor(private http: Http) { }

  ngOnInit() {
  	this.req = this.http.get('assets/json/homework.json').subscribe(data=>{
  		this.topicList = data.json() as [any];
  	})

  }



  ngOnDestroy(){
  	this.req.unsubscribe()
  }

}


