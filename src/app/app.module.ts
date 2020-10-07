import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ErrorsComponent } from './errors/errors.component';
import { MystyleDirective } from './mystyle.directive';

import {HttpClientModule} from '@angular/common/http' ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    TermsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductItemComponent,
    ErrorsComponent,
    MystyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ///
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
