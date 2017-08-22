import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';


@Component({
  selector: 'app-student-study',
  templateUrl: './student-study.component.html',
  styleUrls: ['./student-study.component.css']
})
export class StudentStudyComponent implements OnInit {
	private req:any;
	topicList: [any];

  constructor(private http: Http) { }

  ngOnInit() {
  	this.req = this.http.get('assets/json/homework.json').subscribe(data=>{
  		this.topicList = data.json() as [any];
  		console.log(this.topicList)
  	})

  }

  ngOnDestroy(){
  	this.req.unsubscribe()
  }

}
