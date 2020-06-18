import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import {ISchedule} from '../models/schedule.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<ISchedule>;
type EntityArrayResponseType = HttpResponse<ISchedule[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  public resourceUrl = SERVER_API_URL + 'api/schedules';

  constructor(protected http: HttpClient) {}

  create(schedule: ISchedule): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(schedule);
    return this.http
      .post<ISchedule>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(schedule: ISchedule): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(schedule);
    return this.http
      .put<ISchedule>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ISchedule>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  queryToday(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ISchedule[]>(this.resourceUrl + '/today', { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }
  queryTomorrow(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ISchedule[]>(this.resourceUrl + '/tomorrow', { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }
  querySoon(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ISchedule[]>(this.resourceUrl + '/soon', { params: options, observe: 'response' })
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

  protected convertDateFromClient(schedule: ISchedule): ISchedule {
    const copy: ISchedule = Object.assign({}, schedule, {
      startTime: schedule.startTime && schedule.startTime.isValid() ? schedule.startTime.toJSON() : undefined,
      endTime: schedule.endTime && schedule.endTime.isValid() ? schedule.endTime.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.startTime = res.body.startTime ? moment(res.body.startTime) : undefined;
      res.body.endTime = res.body.endTime ? moment(res.body.endTime) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((schedule: ISchedule) => {
        schedule.startTime = schedule.startTime ? moment(schedule.startTime) : undefined;
        schedule.endTime = schedule.endTime ? moment(schedule.endTime) : undefined;
      });
    }
    return res;
  }
}
