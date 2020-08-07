import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  //declartion of variable 
  tid=11;
  tname:string  = '8:30 am Angular Session'
  duration:number;
  todods=[]


  setId(event){
    this.tid  = event.target.value;

  }
  setName(event){
    this.tname  = event
  }
  setDate(event){
    this.duration  = event.target.value;
  }
  addTask(){
      console.log('New Task Added')

      this.todods.push({tid:this.tid,tname:this.tname,dur:this.duration})

       console.log(this.todods) 
  }

}
