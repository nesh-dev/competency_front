import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from  '@angular/material/input'
import { MatRadioModule } from  '@angular/material/radio'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileService } from './update-profile/profile.service';
import { UpdateProfileModule } from './update-profile/update-profile.module';


@NgModule({
  declarations: [AppComponent],
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
    UpdateProfileModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
