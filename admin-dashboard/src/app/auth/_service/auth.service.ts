import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginInterface, AuthInterfaceLoginSuccessEvent, AuthInterfaceCheckTokenSuccessEvent } from './auth.interface';
import { AuthConstant } from './auth.constant';
import { of } from 'rxjs/internal/observable/of';
import { catchError, tap, map, } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken: string;
  expiresAt: Number;
  authentication: string;
  // basic authorization header
  authorization =  btoa(
    `${AuthConstant.LOGIN.PROJECT_KEY}:${AuthConstant.LOGIN.PROJECT_AUTH_TYPE}`
  );

  constructor(private http: HttpClient, public router: Router, private cookieService: CookieService) { }

  login(credentials: AuthLoginInterface): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    let bodyData: HttpParams = new HttpParams();

    headers = headers
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', 'Basic ' + this.authorization);

    bodyData = bodyData
    .set('grant_type', AuthConstant.LOGIN.GRANT_TYPE)
    .set('username', credentials.username)
    .set('password', credentials.password);

    return this.http
    .post( AuthConstant.LOGIN.API_URL, bodyData, { headers })
    .pipe(
      catchError(error => {
        console.log(AuthConstant.SERVICE_STATUS_MESSAGES.ERROR, error);
        alert(JSON.stringify(error.error.error_description));
        return of(error);
      }),
      map((data: AuthInterfaceLoginSuccessEvent) => {
        // check token
        if (data.access_token) {
          // set user data
          this.expiresAt = (data.expires_in * 1000) + new Date().getTime();


          this.cookieService.set('authentication', JSON.stringify(data));

          // localStorage.setItem('currentUser',  JSON.stringify(data));
          // navigate to secured
          this.router.navigate(['/secured']);
        }
      })
    );
  }

  /**
   * Logout
   */
  public logout(): void {
    // Remove tokens and expiry time from localStorage
    this.accessToken = null;
    this.expiresAt = null;

    this.cookieService.delete('authentication');

    // Go back to the home route
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    return new Date().getTime() < this.expiresAt;
  }

  /**
   * Check token from oauth2 server /oauth/check_token
   */
  public checkToken(): Observable<any> {

    let headers: HttpHeaders = new HttpHeaders();
    let bodyData: HttpParams = new HttpParams();

    headers = headers
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', 'Basic ' + this.authorization);

    bodyData = bodyData
    .set('token', this.getToken().access_token);

    return this.http
    .post( AuthConstant.LOGIN.CHECK_TOKEN, bodyData, { headers })
    .pipe(
      catchError(error => {
        console.log(AuthConstant.SERVICE_STATUS_MESSAGES.ERROR, error);
        alert(JSON.stringify(error.error.error_description));
        this.router.navigate(['/login']);
        return of(error);
      }),
      map((data: AuthInterfaceCheckTokenSuccessEvent) => {
        // check token
        if (data.active) {
          // console.log(data);
        }
      })
    );
  }

  public getToken(): AuthInterfaceLoginSuccessEvent {
     this.authentication = this.cookieService.get('authentication');
     if  (this.authentication) {
      return JSON.parse(this.authentication);
     }
     return null;
  }

  public getAuthorization(): string {
    return this.authorization;
 }
}
