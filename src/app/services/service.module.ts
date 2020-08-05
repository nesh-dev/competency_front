import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './snackBar/snackbar.service';
import { AuthService } from './auth/auth.service';
import {ManagereporteeService} from './auth/managereportee.service';
import { AuthInterceptor } from './interceptors/auth.interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
    imports: [MatSnackBarModule],
    providers: [
        SnackBarService,
        AuthService, 
        ManagereporteeService, {
            provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,   multi: true,
        },
    ],
})

export class ServicesModule { }
