import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { RegisterModule } from './register/register.module';
import { RouterModule} from '@angular/router';
import {DepartmentModule} from './department/department.module';
import {ManagerModule} from './manager/manager.module';
import {LandingModule} from './landing/landing.module';
import {ReporteeModule} from './reportee/reportee.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SupervisorModule} from './supervisor/supervisor.module';
import {ManagerDashboardModule} from './manager-dash/manager-dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileService } from './services/profile/profile.service';
import { SettingsService } from './services/settings.services';
import { UpdateProfileComponent } from './dashboard/update-profile/update-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    UpdateProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    RegisterModule,
    AppRoutingModule,
    FormsModule,
    DepartmentModule,
    ManagerModule,
    LandingModule,
    ReporteeModule,
    SupervisorModule,
    ManagerDashboardModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    FileUploadModule,
    AppRoutingModule,
    FormsModule,
    DepartmentModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],

  providers: [ProfileService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
