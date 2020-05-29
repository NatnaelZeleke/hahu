import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../auth/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RolesService} from '../../../auth/roles.service';
import {Login} from '../../../api/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  renderPage = false;
  loginForm: FormGroup;
  rememberMe = false;
  authenticationError = false;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              private roleService: RolesService) {
  }


  ngOnInit() {

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/user']);
    }

    this.renderPage = true;
    const message = this.route.snapshot.paramMap.get('message');
    this.error = message;
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
    // reset login status
    // this.authService.logout();
    // get return url from route parameter or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.submitted = true;
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.loading = true;
      const credentials: Login = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
        rememberMe: this.rememberMe
      };
      this.authService.login(credentials)
        .subscribe(
          (result) => {
            if (this.returnUrl.length > 1) {
              this.router.navigate([this.returnUrl]);
            } else {

              // console.log('role' + this.authService.getUserRole());
              // this.handleRouteRedirection(this.authService.getUserRole());
              console.log(result);
              this.router.navigate(['/user']);
            }
          },
          (err) => {
            this.authenticationError = true;
          },
          () => {
            this.loading = false;
          });
    }
  }


  toggleRememberMe() {
    this.rememberMe = !this.rememberMe;
    console.log(this.rememberMe);
  }


  handleRouteRedirection(authorities?: string) {

    console.log('Logging role => ' + authorities);
    if (authorities === this.roleService.SUPER_ADMIN) {
      this.router.navigate(['/admin']);
    } else if (authorities === this.roleService.ADMIN) {
      this.router.navigate(['/company']);
      // TODO redirect to call support
    } else if (authorities === this.roleService.STAFF) {
      this.router.navigate(['/customerservice']);
      // TODO redirect to call support
    }
  }

  get f() {
    return this.loginForm.controls;
  }
}
