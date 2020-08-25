import { Component, OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit,OnDestroy } from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnChanges,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit,OnDestroy {

  contactForm: FormGroup

  constructor() {
    console.log('Hey, this is inside constructor')

   }

  ngOnInit() {

    console.log('Hey, this is inside ngOnIt')
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

  ngOnChanges(){
    console.log('Hey, this is inside ngOnChanges')
  }

  // ngDoCheck(){
  //   console.log('Hey, this is inside ngDoCheck')
  // }
  ngAfterContentChecked(){
    console.log('Hey, this is inside ngAfterContentChecked')
  }
  ngAfterViewChecked(){
    console.log('Hey, this is inside ngAfterVieChecked')
  }

  ngAfterContentInit(){
    console.log('Hey, this is inside ngContentInIt')
  }
  ngAfterViewInit(){
    console.log('Hey, this is inside ngAfterViewInIt')
  }

  ngOnDestroy(){
    console.log('Hey, this is insidengOnDestory')
  }
}
