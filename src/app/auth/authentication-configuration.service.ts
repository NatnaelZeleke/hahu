import { Injectable } from '@angular/core';
import {ApiConfiguration} from './api-configuration';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationConfigurationService {
  public tokenKey = 'addis_bid_access_token_key';
  public loginLink = '/home';
  public baseUrl = this.apiConfiguration.rootUrl;
  public roleKey = 'addis_bid_role_key';
  constructor(private apiConfiguration: ApiConfiguration) { }
}
