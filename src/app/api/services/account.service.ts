import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SERVER_API_URL} from '../app.constants';
import {IUser} from '../models/user.model';


@Injectable({ providedIn: 'root' })
export class AccountService {
  public resourceUrl = SERVER_API_URL + 'api/albums';

  constructor(private http: HttpClient) {}

  activate(key: string): Observable<{}> {
    return this.http.get(SERVER_API_URL + 'api/activate', {
      params: new HttpParams().set('key', key),
    });
  }
  register(account: IUser): Observable<{}> {
    return this.http.post(SERVER_API_URL + 'api/register', account);
  }
  changePassword(newPassword: string, currentPassword: string): Observable<{}> {
    return this.http.post(SERVER_API_URL + 'api/account/change-password', { currentPassword, newPassword });
  }

  resetPasswordInit(mail: string): Observable<{}> {
    return this.http.post(SERVER_API_URL + 'api/account/reset-password/init', mail);
  }
  resetPasswordFinish(key: string, newPassword: string): Observable<{}> {
    return this.http.post(SERVER_API_URL + 'api/account/reset-password/finish', { key, newPassword });
  }
}
