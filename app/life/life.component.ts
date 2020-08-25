import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

  name 
  constructor() { }

  ngOnInit(): void {
  }


  getName(event){
        this.name = event.target.value;        
  }
}
