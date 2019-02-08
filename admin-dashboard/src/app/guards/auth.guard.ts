import { Injectable, Input } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/_service/auth.service';
import { AuthLoginBehaviourInterface,
    AuthInterfaceCheckTokenSuccessEvent } from '../auth/_service/auth.interface';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    @Input() errorMessage: string;
    isTokenValid = false;

    error: AuthLoginBehaviourInterface = {
        message: this.errorMessage || 'Invalid credentials',
        show: false
      };

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.getToken()) {
            // logged in so return true
            this.isTokenValid = true;
            this.authService.checkToken()
            .subscribe((res: AuthInterfaceCheckTokenSuccessEvent) => {
                this.isTokenValid = true;
              }, (error) => {
                this.error.show = true;
                this.errorMessage = error;
                this.isTokenValid = false;

              });
        }

        if (this.isTokenValid === true) {
            return this.isTokenValid;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
