import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import {ISchoolFeed} from '../models/school-feed.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<ISchoolFeed>;
type EntityArrayResponseType = HttpResponse<ISchoolFeed[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class SchoolFeedService {
  public resourceUrl = SERVER_API_URL + 'api/school-feeds/custom';

  constructor(protected http: HttpClient) {}

  create(schoolFeed: ISchoolFeed): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(schoolFeed);
    return this.http
      .post<ISchoolFeed>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(schoolFeed: ISchoolFeed): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(schoolFeed);
    return this.http
      .put<ISchoolFeed>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ISchoolFeed>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ISchoolFeed[]>(this.resourceUrl, { params: options, observe: 'response' })
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

  protected convertDateFromClient(schoolFeed: ISchoolFeed): ISchoolFeed {
    const copy: ISchoolFeed = Object.assign({}, schoolFeed, {
      postedDate: schoolFeed.postedDate && schoolFeed.postedDate.isValid() ? schoolFeed.postedDate.toJSON() : undefined,
      modifiedDate: schoolFeed.modifiedDate && schoolFeed.modifiedDate.isValid() ? schoolFeed.modifiedDate.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.postedDate = res.body.postedDate ? moment(res.body.postedDate) : undefined;
      res.body.modifiedDate = res.body.modifiedDate ? moment(res.body.modifiedDate) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((schoolFeed: ISchoolFeed) => {
        schoolFeed.postedDate = schoolFeed.postedDate ? moment(schoolFeed.postedDate) : undefined;
        schoolFeed.modifiedDate = schoolFeed.modifiedDate ? moment(schoolFeed.modifiedDate) : undefined;
      });
    }
    return res;
  }
}
