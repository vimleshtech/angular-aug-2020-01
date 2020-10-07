import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ErrorsComponent } from './errors/errors.component';


const routes: Routes = [  

  {path: 'home', component:HomeComponent},
  {path: 'dashboard', component:DashboardComponent},  
  
  {path:'product-item/:id', component:ProductItemComponent},

  //{path:'product-item/:id/:name?', component:ProductItemComponent},
  //home.jsp?id=val&name=
  // {path: 'dashboard', component:DashboardComponent,
  //   children: [
  //     {path:'product-item/:id', component:ProductItemComponent},
  //   ]
  // },  

  {path:  'login',component:  LoginComponent,
    children: [{path:  'about',     //login/about
    component:  AboutComponent
    },
    {
    path:  'product',
    component:  ProductComponent
    },
    {path:  'terms',component:  TermsComponent}
    ]
    },
    
    {path: 'register', component:RegisterComponent},
    {path: '**', component:ErrorsComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
