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



@NgModule({
  declarations: [
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    RegisterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DepartmentModule,
    ManagerModule,
    LandingModule,
    ReporteeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
