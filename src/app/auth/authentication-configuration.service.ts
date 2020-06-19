import { Injectable } from '@angular/core';
import {ApiConfiguration} from './api-configuration';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationConfigurationService {
  public tokenKey = 'hahu_app_key';
  public loginLink = '/home';
  public baseUrl = this.apiConfiguration.rootUrl;
  public roleKey = 'addis_bid_role_key';
  constructor(private apiConfiguration: ApiConfiguration) { }
}
