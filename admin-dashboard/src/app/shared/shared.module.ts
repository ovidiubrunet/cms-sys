import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpError } from '../exception/http-error';
import { MatSnackBarModule } from '@angular/material';
import { NotificationService } from '../service/notification.service';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SafePipe
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    SafePipe
  ],
  providers: [
    HttpError,
    NotificationService
  ]
})
export class SharedModule { }
