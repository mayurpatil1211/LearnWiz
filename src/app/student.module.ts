import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';


const routes: Routes=[
{ path: 'dashboard', component: StudentDashboardComponent },
{ path: 'profile', component: StudentProfileComponent }
]




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentDashboardComponent, StudentProfileComponent]
})
export class StudentModule { }
