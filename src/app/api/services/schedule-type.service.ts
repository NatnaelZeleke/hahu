import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IScheduleType} from '../models/schedule-type.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<IScheduleType>;
type EntityArrayResponseType = HttpResponse<IScheduleType[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class ScheduleTypeService {
  public resourceUrl = SERVER_API_URL + 'api/schedule-types';

  constructor(protected http: HttpClient) {}

  create(scheduleType: IScheduleType): Observable<EntityResponseType> {
    return this.http.post<IScheduleType>(this.resourceUrl, scheduleType, { observe: 'response' });
  }

  update(scheduleType: IScheduleType): Observable<EntityResponseType> {
    return this.http.put<IScheduleType>(this.resourceUrl, scheduleType, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IScheduleType>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IScheduleType[]>(this.resourceUrl, { params: options, observe: 'response' });
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
