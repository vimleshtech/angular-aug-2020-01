import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,Validator} from '@angular/forms';
import { chainedInstruction } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  registerForm : FormGroup;
  submited = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        fname: ['',Validators.required],
        lname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
        email: ['',Validators.email],
        password: ['',Validators.required]
    });
  }

  get f(){
      return this.registerForm.controls;
  }
  onSubmit(){
    this.submited = true;

      
      if(this.registerForm.invalid){
        return;
      }else{

        console.log(this.registerForm.value)
        alert('form is submited');
      }
      

  }
}
