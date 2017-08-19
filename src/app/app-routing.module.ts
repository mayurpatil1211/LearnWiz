import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthManager } from './authmanager'



const routes: Routes = [
  {
  	path: '',
  	loadChildren : './home.module#HomeModule'
  },
  {
    path: 'teacher',
    loadChildren: './teacher.module#TeacherModule',
    canActivate: [AuthManager]
  },
  {
    path: 'student',
    loadChildren: './student.module#StudentModule',
    canActivate: [AuthManager]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
