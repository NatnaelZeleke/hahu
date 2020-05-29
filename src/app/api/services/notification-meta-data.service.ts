import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {INotificationMetaData} from '../models/notification-meta-data.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';

type EntityResponseType = HttpResponse<INotificationMetaData>;
type EntityArrayResponseType = HttpResponse<INotificationMetaData[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class NotificationMetaDataService {
  public resourceUrl = SERVER_API_URL + 'api/notification-meta-data';

  constructor(protected http: HttpClient) {}

  create(notificationMetaData: INotificationMetaData): Observable<EntityResponseType> {
    return this.http.post<INotificationMetaData>(this.resourceUrl, notificationMetaData, { observe: 'response' });
  }

  update(notificationMetaData: INotificationMetaData): Observable<EntityResponseType> {
    return this.http.put<INotificationMetaData>(this.resourceUrl, notificationMetaData, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<INotificationMetaData>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<INotificationMetaData[]>(this.resourceUrl, { params: options, observe: 'response' });
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
