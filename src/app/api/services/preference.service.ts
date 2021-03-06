import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IPreference} from '../models/preference.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityBooleanType = HttpResponse<boolean>;
type EntityResponseType = HttpResponse<IPreference>;
type EntityArrayResponseType = HttpResponse<IPreference[]>;

@Injectable({ providedIn: 'root' })
export class PreferenceService {
  public resourceUrl = SERVER_API_URL + 'api/custom/preferences';

  constructor(protected http: HttpClient) {}

  checkIfUserBlocked(userId: number): Observable<EntityBooleanType> {
    return this.http.get<boolean>(this.resourceUrl + '/checkBlockedUser/' + userId, { observe: 'response' });
  }

  create(preference: IPreference): Observable<EntityResponseType> {
    return this.http.post<IPreference>(this.resourceUrl, preference, { observe: 'response' });
  }

  update(preference: IPreference): Observable<EntityResponseType> {
    return this.http.put<IPreference>(this.resourceUrl, preference, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPreference>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPreference[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
