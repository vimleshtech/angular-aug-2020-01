import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  
  {path: 'home', component: HomeComponent},  //localhost:4200/home
  {path: 'about', component:AboutComponent}, //localhost:4200/about
  {path: 'login', component:LoginComponent},//localhost:4200/login
  {path: 'register', component:RegisterComponent},
  {path: 'product', component:ProductComponent},
  {path: 'terms', component:TermsComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'} //default component / landing page
  //{path: '', component:AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
