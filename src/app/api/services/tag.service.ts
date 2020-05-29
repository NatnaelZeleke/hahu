import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ITag} from '../models/tag.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<ITag>;
type EntityArrayResponseType = HttpResponse<ITag[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class TagService {
  public resourceUrl = SERVER_API_URL + 'api/tags';

  constructor(protected http: HttpClient) {}

  create(tag: ITag): Observable<EntityResponseType> {
    return this.http.post<ITag>(this.resourceUrl, tag, { observe: 'response' });
  }

  update(tag: ITag): Observable<EntityResponseType> {
    return this.http.put<ITag>(this.resourceUrl, tag, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITag>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITag[]>(this.resourceUrl, { params: options, observe: 'response' });
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
