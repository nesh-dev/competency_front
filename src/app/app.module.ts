import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from  '@angular/material/input'
import { MatRadioModule } from  '@angular/material/radio'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileService } from './services/profile/profile.service';
import { SettingsService } from './services/settings.services';
import { UpdateProfileComponent } from './dashboard/update-profile/update-profile.component';
import { SidebarComponent } from "./sidebar/sidebar.component";



@NgModule({
  declarations: [
    AppComponent,
    UpdateProfileComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    FileUploadModule,
    MatSidenavModule
  ],
  providers: [ProfileService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
