import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {AuthenticationConfigurationService} from './authentication-configuration.service';
import {UserCredentials} from '../models/user_cridentials';
import {BaseService} from '../api/base-service';
import {map as __map, filter as __filter} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {AuthenticationResponse} from '../api/models/authentication-response';
import {ApiConfiguration} from '../api/api-configuration';
import {StrictHttpResponse} from '../api/strict-http-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {

  constructor(http: HttpClient,
              private router: Router,
              private authenticationConfig: AuthenticationConfigurationService,
              apiConfiguration: ApiConfiguration,
              private authService: AuthService) {
    super(apiConfiguration, http);
  }

  loginResponse(body: UserCredentials): Observable<StrictHttpResponse<AuthenticationResponse>> {
    let _body: any = null;
    const __headers = new HttpHeaders();
    _body = body;

    const req = new HttpRequest<any>(
      'POST',
      this.rootUrl + '/auth',
      _body,
      {
        headers: __headers,
        params: this.newParams(),
        responseType: 'json'
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }

  loginService(body: UserCredentials): Observable<AuthenticationResponse> {
    return this.loginResponse(body)
      .pipe(
        __map(_r => _r.body)
      );
  }

  login(body: UserCredentials): Observable<AuthenticationResponse> {
    return this.loginService(body)
      .pipe(__map((res) => {
        if (res && res.token) {
          // this.authService.setToken(res.token);
          localStorage.setItem(this.authenticationConfig.tokenKey, res.token);
          localStorage.setItem(this.authenticationConfig.roleKey, res.authorities);
        }
        return res;
      }));
  }

  refreshResponse(): Observable<StrictHttpResponse<string>> {
    const __body: any = null;
    const __headers = new HttpHeaders();
    const req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth/refresh`,
      __body,
      {
        headers: __headers,
        params: this.newParams(),
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r.clone({body: null}) as StrictHttpResponse<string>;
      })
    );
  }

  refresh(): Observable<string> {
    return this.refreshResponse().pipe(
      __map(_r => _r.body)
    );
  }


  // this function returns updates the new token
  refreshToken(): Observable<string> {
    return this.refresh()
      .pipe(__map((res) => {
        this.authService.setToken(res);
        return res; // returns the new token
      }));
  }


  logout() {
    localStorage.removeItem(this.authenticationConfig.tokenKey);
    this.router.navigate(['/login/']);
  }


  // checks if the user has a token
  isLoggedIn(): boolean {
    if (localStorage.getItem(this.authenticationConfig.tokenKey) != null) {
      return true;
    } else {
      return false;
    }
  }

  getUserRole(): string {
    return localStorage.getItem(this.authenticationConfig.roleKey);
  }
}
