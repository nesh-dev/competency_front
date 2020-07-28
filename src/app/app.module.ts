import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegisterModule } from './register/register.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './register/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DepartmentModule} from './department/department.module';
import {ManagerModule} from './manager/manager.module';



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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
