import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import {IUsersConnection} from '../models/users-connection.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<IUsersConnection>;
type EntityArrayResponseType = HttpResponse<IUsersConnection[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class UsersConnectionService {
  public resourceUrl = SERVER_API_URL + 'api/users-connections';

  constructor(protected http: HttpClient) {}

  create(usersConnection: IUsersConnection): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(usersConnection);
    return this.http
      .post<IUsersConnection>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(usersConnection: IUsersConnection): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(usersConnection);
    return this.http
      .put<IUsersConnection>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IUsersConnection>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IUsersConnection[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
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

  protected convertDateFromClient(usersConnection: IUsersConnection): IUsersConnection {
    const copy: IUsersConnection = Object.assign({}, usersConnection, {
      registeredTime:
        usersConnection.registeredTime && usersConnection.registeredTime.isValid() ? usersConnection.registeredTime.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.registeredTime = res.body.registeredTime ? moment(res.body.registeredTime) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((usersConnection: IUsersConnection) => {
        usersConnection.registeredTime = usersConnection.registeredTime ? moment(usersConnection.registeredTime) : undefined;
      });
    }
    return res;
  }
}
