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
import {ReporteeDashModule} from './reportee-dash/reportee-dash.module';
import {ReviewsModule} from './reviews/reviews.module';
import {RolesModule} from './roles/roles.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileService } from './services/profile/profile.service';
import { SettingsService } from './services/settings.services';
import { ServicesModule } from './services/service.module';
import { UpdateProfileComponent } from './dashboard/update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateProfileComponent,

    ],
  imports: [
    RouterModule,
    RegisterModule,
    FormsModule,
    DepartmentModule,
    ManagerModule,
    LandingModule,
    ReporteeModule,
    SupervisorModule,
    ManagerDashboardModule,
    ReporteeDashModule,
    ReviewsModule,
    RolesModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule, 
    FileUploadModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ServicesModule
  ],

  providers: [ProfileService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
