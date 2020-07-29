import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from  '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from  '@angular/material/radio'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { UpdateProfileRoutingModule } from './update.profile.routing.module'
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { ProfileService } from '../update-profile/profile.service';
import { UpdateProfileComponent } from '../update-profile/update-profile/update-profile.component';



@NgModule({
  declarations: [UpdateProfileComponent],
  imports: [
    UpdateProfileRoutingModule,
CommonModule,
BrowserModule,

    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class UpdateProfileModule { }
