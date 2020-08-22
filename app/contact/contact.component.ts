import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup

  constructor() { }

  ngOnInit() {

        this.contactForm = new FormGroup({
            fname: new FormControl(null),
            lname: new FormControl(null),
            email: new FormControl(),
            gender: new FormControl(null)

        });
  }

  onSubmit(){
      console.log(this.contactForm.value);
      
  }
}
