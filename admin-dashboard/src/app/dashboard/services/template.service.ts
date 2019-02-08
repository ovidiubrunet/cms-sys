import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/_service/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Template } from '../models/template';
import { Observable } from 'rxjs';
import { ApiConstant } from './api.constant';
import { tap, catchError } from 'rxjs/operators';
import { HttpError } from 'src/app/exception/http-error';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private token: string;
  private authorization: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private httpError: HttpError) {
  }

  getHeaders(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authorization', 'Bearer ' + this.token);

    return headers;
  }
  /**
  * token header used for secured resources
  */
  getTokenHeader(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    this.token = this.authService.getToken().access_token;

    headers = headers
      .set('Authorization', 'Bearer ' + this.token);

    return headers;
  }

  /**
   * authorization header used for oauth2 endpoints
   */
  getAuthorizationHeader(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    this.authorization = this.authService.getAuthorization();

    headers = headers
    .set('Authorization',  'Basic ' + this.authorization);

    return headers;
  }

   /**
   *  header with basic and bearer used for oauth2 and resources endpoints
   */
  getAuthorizationAndTokenHeader(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    this.authorization = this.authService.getAuthorization();

    headers = headers
    .set('Authorization',  'Basic ' + this.authService.getAuthorization() + ', ' + 'Bearer ' +  this.authService.getToken().access_token);

    return headers;
  }

  /**
   * return templates
   */
  getTemplates(): Observable<Template[]> {
    const headers = this.getAuthorizationAndTokenHeader();
    return this.http
      .get<Template[]>(ApiConstant.API_BASE_URL + '/secured/templates', {
        headers
      })
      .pipe(
        catchError(this.httpError.handleError)
      );
  }

  getTemplate(name: string): Observable<Template> {
    const headers = this.getAuthorizationAndTokenHeader();
    return this.http
      .get<Template>(ApiConstant.API_BASE_URL + '/secured/templates/' + name,  {headers})
      .pipe(tap(data => console.log('template:' + JSON.stringify(data))));
  }

}
