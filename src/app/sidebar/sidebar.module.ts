/*import { BrowserModule } from '@angular/platform-browser';*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from  '@angular/material/input'
import { MatRadioModule } from  '@angular/material/radio'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SidebarRoutingModule } from './sidebar.routing.module'
import { SidebarService } from '../sidebar/sidebar.services';
import { SidebarComponent } from "../sidebar/sidebar/sidebar.component";



@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [SidebarService],
  bootstrap: []
})
export class SidebarModule { }
