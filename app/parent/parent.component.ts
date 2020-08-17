import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name
  salary 
  items=[]
  description=''
  constructor() { }

  ngOnInit(): void {
  }
  addItem(){

    this.items.push({name:this.name,salary:this.salary});
    console.log(this.items);

  }
  receoveData(event){
    this.description = event;
    console.log(this.description);
    
  }

}
