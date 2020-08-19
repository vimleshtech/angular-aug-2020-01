import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


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

@NgModule({
  declarations: [AppComponent,HeaderComponent,FooterComponent,TaskComponent,AddproductComponent, UserComponent, ParentComponent, ChildComponent, TotalPipe, SortingPipe, MystyleDirective
  ],
  imports: [BrowserModule,AppRoutingModule ,FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
