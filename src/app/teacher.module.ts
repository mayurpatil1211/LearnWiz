import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PrepareListComponent } from './prepare-list/prepare-list.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherTestComponent } from './teacher-test/teacher-test.component';



const routes: Routes=[
{ path: 'prepareList', component:PrepareListComponent },
{ path:'dashboard', component:TeacherDashboardComponent },
{ path: 'profile', component: TeacherProfileComponent},
{ path: 'test', component:TeacherTestComponent },

];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrepareListComponent, TeacherDashboardComponent, TeacherProfileComponent, TeacherTestComponent]
})
export class TeacherModule { }
