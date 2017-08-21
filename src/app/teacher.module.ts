import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TreeModule } from 'angular-tree-component';

import { PrepareListComponent } from './prepare-list/prepare-list.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherTestComponent } from './teacher-test/teacher-test.component';
import { TeacherHomeworkComponent } from './teacher-homework/teacher-homework.component';
import { TeacherTeachComponent } from './teacher-teach/teacher-teach.component';



const routes: Routes=[
{ path: 'prepareList', component:PrepareListComponent },
{ path:'dashboard', component:TeacherDashboardComponent },
{ path: 'profile', component: TeacherProfileComponent},
{ path: 'test', component:TeacherTestComponent },
{ path: 'homework', component:TeacherHomeworkComponent },
{ path: 'teach', component: TeacherTeachComponent},

];



@NgModule({
  imports: [
    CommonModule,
    TreeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrepareListComponent, TeacherDashboardComponent, TeacherProfileComponent, TeacherTestComponent, TeacherHomeworkComponent, TeacherTeachComponent]
})
export class TeacherModule { }
