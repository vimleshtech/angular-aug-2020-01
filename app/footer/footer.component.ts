import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  message:string
  text:string
  constructor(private objService:CommonService) { }

  ngOnInit(): void {
    this.objService.sharedMessage.subscribe(txt=>this.message=txt);

  }

  setMessage(){
      this.objService.getMessage(this.text)
  }

}
