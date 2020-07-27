import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';

import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RegisterRoutingModule } from './register-routing.module';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
