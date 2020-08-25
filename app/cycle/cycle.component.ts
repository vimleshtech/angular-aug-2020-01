import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {

  @Input() mydata:any 

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(){
      this.mydata ="Hello, data is modified";
  }
  ngOnChanges(change: SimpleChange){
      console.log(change)
  }
}
