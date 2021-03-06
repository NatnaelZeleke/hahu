import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IUserGroup} from '../models/user-group.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<IUserGroup>;
type EntityArrayResponseType = HttpResponse<IUserGroup[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class UserGroupService {
  public resourceUrl = SERVER_API_URL + 'api/user-groups';

  constructor(protected http: HttpClient) {}

  create(userGroup: IUserGroup): Observable<EntityResponseType> {
    return this.http.post<IUserGroup>(this.resourceUrl, userGroup, { observe: 'response' });
  }

  update(userGroup: IUserGroup): Observable<EntityResponseType> {
    return this.http.put<IUserGroup>(this.resourceUrl, userGroup, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IUserGroup>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IUserGroup[]>(this.resourceUrl, { params: options, observe: 'response' });
  }
  queryCount(req?: any): Observable<CountResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<number>(this.resourceUrl + '/count', { params: options, observe: 'response' })
      .pipe();
  }
  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
