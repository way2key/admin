import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';



//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';

//AppModule
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHolidayComponent } from './admin/admin-holiday/admin-holiday.component';
import { AdminTimeplanComponent } from './admin/admin-timeplan/admin-timeplan.component';
import { AdminBackupComponent } from './admin/admin-backup/admin-backup.component';
import { AdminStudentComponent } from './admin/admin-student/admin-student.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminInfoComponent } from './admin/admin-info/admin-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminMainComponent,
    AdminDashboardComponent,
    AdminHolidayComponent,
    AdminTimeplanComponent,
    AdminBackupComponent,
    AdminStudentComponent,
    AdminLoginComponent,
    AdminInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
