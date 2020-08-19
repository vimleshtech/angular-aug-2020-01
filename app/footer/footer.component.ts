import { Component, OnInit } from '@angular/core';

import {CommonService} from '../common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  text:string

  names=['jatin','aman']
  constructor(private objService:CommonService) { }

  ngOnInit(): void {

  }

  setMessage(){

      this.objService.getMessage(this.text)
  }

}
