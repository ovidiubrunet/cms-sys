import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Injectable({
  providedIn: 'root'
})
export class HttpError {

  constructor(
    private notificationService: NotificationService
  ) { }

  /**
   *
   * @param err is used for throwing errors on the services side and then catching them on components that uses that services
   */
  public handleError(err: HttpErrorResponse) {
    // in real world  app, we may send the server to some remote logging infrastructure
    // instead of logging it to console
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occured. Handle it accordingly
      errorMessage = `An error ocurred : ${err.error.message}`;
    } else {
      // the backed returned an unusuccesfull response code.
      // the response body may contain clues as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.error.messages
        }`;
    }

    return throwError(errorMessage);
  }
}
