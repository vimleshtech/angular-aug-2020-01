import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items = [{id:1,name:'nitin',gender:"male"},
          {id:2,name:'monika',gender:"female"},
          {id:3,name:'rahul',gender:"male"},
          {id:10,name:'raman ',gender:"male"}
        ]
  constructor() { }

  ngOnInit(): void {
  }

}
