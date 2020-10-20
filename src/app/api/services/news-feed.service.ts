import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import {INewsFeed} from '../models/news-feed.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<INewsFeed>;
type EntityArrayResponseType = HttpResponse<INewsFeed[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class NewsFeedService {
  public resourceUrl = SERVER_API_URL + 'api/news-feeds/custom';

  constructor(protected http: HttpClient) {}

  create(newsFeed: INewsFeed): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(newsFeed);
    return this.http
      .post<INewsFeed>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(newsFeed: INewsFeed): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(newsFeed);
    return this.http
      .put<INewsFeed>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<INewsFeed>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<INewsFeed[]>(this.resourceUrl, { params: options, observe: 'response' })
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

  protected convertDateFromClient(newsFeed: INewsFeed): INewsFeed {
    const copy: INewsFeed = Object.assign({}, newsFeed, {
      postedDate: newsFeed.postedDate && newsFeed.postedDate.isValid() ? newsFeed.postedDate.toJSON() : undefined,
      modifiedDate: newsFeed.modifiedDate && newsFeed.modifiedDate.isValid() ? newsFeed.modifiedDate.toJSON() : undefined,
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
      res.body.forEach((newsFeed: INewsFeed) => {
        newsFeed.postedDate = newsFeed.postedDate ? moment(newsFeed.postedDate) : undefined;
        newsFeed.modifiedDate = newsFeed.modifiedDate ? moment(newsFeed.modifiedDate) : undefined;
      });
    }
    return res;
  }
}
