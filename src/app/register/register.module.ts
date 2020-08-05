import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RegisterRoutingModule } from './register-routing.module';
import { LoginComponent } from './login/login.component';
import {  SnackBarService } from './../services/snackBar/snackbar.service'
import { AuthService } from './../services/auth/auth.service'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    RegisterRoutingModule,
    MatProgressSpinnerModule ,
    FormsModule

  ],
  providers: [
    SnackBarService,
    AuthService
  ],
  exports: [SignupComponent, LoginComponent]
})
export class RegisterModule { }
