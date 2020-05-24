import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationConfigurationService} from './authentication-configuration.service';
import {BaseService} from '../api/base-service';
import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {ApiConfiguration} from '../api/api-configuration';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  public authTokenStale = 'Stale Auth token';
  public authTokenNew = 'new Auth token';
  public currentToken: string;


  constructor(private authenticationConfig: AuthenticationConfigurationService,
              apiConfiguration: ApiConfiguration,
              http: HttpClient) {
    super(apiConfiguration, http);
    this.currentToken = this.authTokenStale;

  }

  getAuthToken() {
    return this.currentToken;
  }



  setToken(token: string) {
    localStorage.setItem(this.authenticationConfig.tokenKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.authenticationConfig.tokenKey);
  }
}
