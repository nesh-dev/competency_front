import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegisterModule } from './register/register.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './register/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule,
    BrowserAnimationsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
