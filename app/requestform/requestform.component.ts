import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.css']
})
export class RequestformComponent implements OnInit {

  contactForm: FormGroup
  counteries = ["India","US","UK"]
  cities =["Delhi","Pune","Bang","Landon"]
  requestTypes = ["User","Agent"]

  constructor() { 
    this.contactForm = new FormGroup({
      personalData: new FormGroup({
          name: new FormControl(),
          email: new FormControl(),
          phone: new FormControl(),
          country: new FormControl(), 
          city: new FormControl()
      }),
      requestType: new FormControl(),
      comments: new FormControl()
    });
  }

  ngOnInit(): void {

  }

}
