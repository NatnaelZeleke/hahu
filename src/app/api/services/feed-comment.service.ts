import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import {IFeedComment} from '../models/feed-comment.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';

type EntityResponseType = HttpResponse<IFeedComment>;
type EntityArrayResponseType = HttpResponse<IFeedComment[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class FeedCommentService {
  public resourceUrl = SERVER_API_URL + 'api/feed-comments/custom';

  constructor(protected http: HttpClient) {}

  create(feedComment: IFeedComment): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(feedComment);
    return this.http
      .post<IFeedComment>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(feedComment: IFeedComment): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(feedComment);
    return this.http
      .put<IFeedComment>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IFeedComment>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IFeedComment[]>(this.resourceUrl, { params: options, observe: 'response' })
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

  protected convertDateFromClient(feedComment: IFeedComment): IFeedComment {
    const copy: IFeedComment = Object.assign({}, feedComment, {
      postedDate: feedComment.postedDate && feedComment.postedDate.isValid() ? feedComment.postedDate.toJSON() : undefined,
      modifiedDate: feedComment.modifiedDate && feedComment.modifiedDate.isValid() ? feedComment.modifiedDate.toJSON() : undefined,
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
      res.body.forEach((feedComment: IFeedComment) => {
        feedComment.postedDate = feedComment.postedDate ? moment(feedComment.postedDate) : undefined;
        feedComment.modifiedDate = feedComment.modifiedDate ? moment(feedComment.modifiedDate) : undefined;
      });
    }
    return res;
  }
}
