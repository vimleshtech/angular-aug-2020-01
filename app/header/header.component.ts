import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:string="Raman"


  message:string

  constructor(private objService: CommonService) { }

  setName(){
    this.name  ="test name"
  }
  ngOnInit(): void {

    this.objService.sharedMessage.subscribe(txt => this.message = txt);

  }

}
