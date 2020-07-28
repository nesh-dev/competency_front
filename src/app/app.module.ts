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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileService } from './services/profile/profile.service';
import { SettingsService } from './services/settings.services';


@NgModule({
  declarations: [
    AppComponent,
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
