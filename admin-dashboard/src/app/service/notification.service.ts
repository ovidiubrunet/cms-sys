import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private matSnackBar: MatSnackBar) { }

  openSuccessAlert(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 5000,
      panelClass: ['alert-box', 'success']
    });
  }

  openErrorAlert(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 5000,
      panelClass: ['alert-box', 'error']
    });
  }
}
