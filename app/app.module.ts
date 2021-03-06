import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TaskComponent } from './task/task.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TotalPipe } from './total.pipe';
import { SortingPipe } from './sorting.pipe';
import { MystyleDirective } from './mystyle.directive';

import {ProductModel} from './models/product.model';

import { ModelexComponent } from './modelex/modelex.component';

import { ContactComponent } from './contact/contact.component';
import { RequestformComponent } from './requestform/requestform.component';
import { LifeComponent } from './life/life.component';
import { CycleComponent } from './cycle/cycle.component';
import { ValidationComponent } from './validation/validation.component';


/*
declarations: Component, Pipe, Directive 
imports: modules / library/ class
providers: services, model 
bootstrap:  landing component/ first component 
*/

@NgModule({
  declarations: [AppComponent,HeaderComponent,FooterComponent,TaskComponent,AddproductComponent, UserComponent, ParentComponent, ChildComponent, TotalPipe, SortingPipe, MystyleDirective, ModelexComponent,
    ContactComponent,
    RequestformComponent,
    LifeComponent,
    CycleComponent,
    ValidationComponent
  ],
  imports: [BrowserModule,AppRoutingModule ,FormsModule  ,ReactiveFormsModule],
  providers: [ProductModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
