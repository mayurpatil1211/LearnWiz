import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LearnwizComponent } from './learnwiz/learnwiz.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes=[
{ path: '', component: IndexComponent },
{ path: 'about', component:AboutComponent },
{ path: 'learnwiz', component: LearnwizComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'login', component: LoginComponent},
]



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, AboutComponent, LearnwizComponent, ContactComponent, LoginComponent]
})
export class HomeModule { }


// https://www.codingforentrepreneurs.com/projects/angular-django/welcome/?play=true&amp;wvideo=2rj456yx09
// https://www.codingforentrepreneurs.com/projects/angular-django/welcome/?play=true&amp;wvideo=2rj456yx09