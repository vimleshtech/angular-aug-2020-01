import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/*Input : parent to child */
/* Output, EventEmitter: child to parent */

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() userDetails

  @Output() eventEmitter = new EventEmitter<String>()
  desc=''

  constructor() { }

  ngOnInit(): void {
  }

  addDescription(){
    this.eventEmitter.emit(this.desc)
  }
}
