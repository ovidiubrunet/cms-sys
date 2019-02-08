import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginBehaviourInterface, AuthLoginInterface, AuthInterfaceLoginSuccessEvent } from '../_service/auth.interface';
import { AuthService } from '../_service/auth.service';
import { takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() errorMessage: string;
  @Input() instanceName: string;
  @Input() showPassword: boolean;

  @Output() authLoginStatus: EventEmitter<any> = new EventEmitter<any>();

  error: AuthLoginBehaviourInterface = {
    message: this.errorMessage || 'Invalid credentials',
    show: false
  };

  loading: AuthLoginBehaviourInterface = {
    show: false
  };


  private ngUnsubscribe: Subject<any> = new Subject();

  username: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(): void {

    const credentials: AuthLoginInterface = {
      username: this.username,
      password: this.password
    };

    this.authService.login(credentials)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((res: AuthInterfaceLoginSuccessEvent) => {
      // send over to parent component auth status whatever it may be
      // res.userName = this.username;

      // hide loading status
      this.loading.show = false;
    }, (error) => {
      this.error.show = true;
      this.errorMessage = error;
    });
  }
}
