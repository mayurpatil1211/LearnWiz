import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prepare-list',
  templateUrl: './prepare-list.component.html',
  styleUrls: ['./prepare-list.component.css']
})
export class PrepareListComponent implements OnInit {
	isLogin: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
