import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentStudyComponent } from './student-study/student-study.component';
import { StudentHomeworkComponent } from './student-homework/student-homework.component';
import { StudentVerifyComponent } from './student-verify/student-verify.component';


const routes: Routes=[
{ path: 'dashboard', component: StudentDashboardComponent },
{ path: 'profile', component: StudentProfileComponent },
{path: 'study', component: StudentStudyComponent},
{ path: 'homework', component: StudentHomeworkComponent},
{ path: 'verify', component: StudentVerifyComponent}
]




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentDashboardComponent, StudentProfileComponent, StudentStudyComponent, StudentHomeworkComponent, StudentVerifyComponent]
})
export class StudentModule { }
