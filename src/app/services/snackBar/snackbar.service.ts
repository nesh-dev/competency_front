import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  private configSucces: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['green-snackbar'],
  };
  private configError: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['red-snackbar'],
  };
  public showSuccessSnackBar(message) {
    this.snackBar.open(message, 'close', this.configSucces);
  }
  public showErrorSnackBar(message) {
    this.snackBar.open(message, 'close', this.configError);
  }
}
