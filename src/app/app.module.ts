import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegisterModule } from './register/register.module';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DepartmentModule} from './department/department.module';
import {ManagerModule} from './manager/manager.module';
import {LandingModule} from './landing/landing.module';
import {ReporteeModule} from './reportee/reportee.module'
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ProfileService } from './services/profile/profile.service';
import { UpdateProfileComponent } from './dashboard/update-profile/update-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
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
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
