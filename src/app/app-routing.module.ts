import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHolidayComponent } from './admin/admin-holiday/admin-holiday.component';
import { AdminStudentComponent } from './admin/admin-student/admin-student.component';
import { AdminTimeplanComponent } from './admin/admin-timeplan/admin-timeplan.component';
import { AdminBackupComponent } from './admin/admin-backup/admin-backup.component';
import { AdminInfoComponent } from './admin/admin-info/admin-info.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAuthGuard } from './admin/admin-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/admin/login', pathMatch: 'full'},
  { path: 'admin', children:[
    { path: '', component: AdminMainComponent, canActivate: [AdminAuthGuard],
    children:[
      {path:"dashboard" , component: AdminDashboardComponent},
      {path:"holiday" , component: AdminHolidayComponent},
      {path:"student" , component: AdminStudentComponent},
      {path:"timeplan" , component: AdminTimeplanComponent},
      {path:"backup" , component: AdminBackupComponent},
      {path:"info" , component: AdminInfoComponent},
    ]},
    {path: 'login', component: AdminLoginComponent,},
  ]},
  { path: '**', redirectTo: '/admin/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
