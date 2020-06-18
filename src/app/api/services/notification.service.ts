import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import {INotification} from '../models/notification.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<INotification>;
type EntityArrayResponseType = HttpResponse<INotification[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class NotificationService {
  public resourceUrl = SERVER_API_URL + 'api/notifications';

  constructor(protected http: HttpClient) {}

  create(notification: INotification): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(notification);
    return this.http
      .post<INotification>(this.resourceUrl + '/custom' , copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }
  update(notification: INotification): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(notification);
    return this.http
      .put<INotification>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }
  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<INotification>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }
  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<INotification[]>(this.resourceUrl + '/custom/my', { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }
  queryCount(req?: any): Observable<CountResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<number>(this.resourceUrl + '/count/custom/my' , { params: options, observe: 'response' })
      .pipe();
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(notification: INotification): INotification {
    const copy: INotification = Object.assign({}, notification, {
      date: notification.date && notification.date.isValid() ? notification.date.toJSON() : undefined,
    });
    return copy;
  }
  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.date = res.body.date ? moment(res.body.date) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((notification: INotification) => {
        notification.date = notification.date ? moment(notification.date) : undefined;
      });
    }
    return res;
  }
}
