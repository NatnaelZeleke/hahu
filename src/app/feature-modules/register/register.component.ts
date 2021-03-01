import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../api/services/account.service';
import {PasswordValidation} from '../../services/PasswordValidation';
import {HttpErrorResponse} from '@angular/common/http';
import {EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE} from '../../shared/error.constants';
import {ActivatedRoute, Router} from '@angular/router';
import {Login} from '../../api/models/login.model';
import {AuthenticationService} from '../../auth/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login?: ElementRef;
  submitted = false;
  doNotMatch = false;
  error = false;
  errorEmailExists = false;
  errorUserExists = false;
  success = false;

  registerForm = this.fb.group({
    login: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
      ],
    ],
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
  }, {validators: PasswordValidation.MatchPassword});

  constructor(
    private registerService: AccountService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
  ) {
  }

  ngOnInit() {
  }

  check() {
    this.router.navigate(['./user']);
  }


  register(): void {
    this.doNotMatch = false;
    this.error = false;
    this.errorEmailExists = false;
    this.errorUserExists = false;

    const password = this.registerForm.get(['password']).value;
    if (password !== this.registerForm.get(['confirmPassword']).value) {
      this.doNotMatch = true;
    } else {
      const login = this.registerForm.get(['login']).value;
      const email = this.registerForm.get(['email']).value;
      this.registerService.register({login, email, password})
        .subscribe(
          (success) => {
            const credentials: Login = {
              username: this.registerForm.value.login,
              password: this.registerForm.value.password,
              rememberMe: true
            };
            this.authService.login(credentials)
              .subscribe(
                (result) => {
                  this.router.navigate(['/user']);
                },
                (err) => {
                },
                () => {
                });
            // this.router.navigate(['./user']);


          },
          (response) => {
            this.processError(response);
          }
        );


    }
  }


  // openLogin(): void {
  //   this.loginModalService.open();
  // }

  private processError(response: HttpErrorResponse): void {
    if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
      this.errorUserExists = true;
    } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
      this.errorEmailExists = true;
    } else {
      this.error = true;
    }
  }


  get f() {
    return this.registerForm.controls;
  }
}
