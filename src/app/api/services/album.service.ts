import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import {SERVER_API_URL} from '../app.constants';
import {IAlbum} from '../models/album.model';
import {createRequestOption} from '../util/request-util';
type EntityResponseType = HttpResponse<IAlbum>;
type EntityArrayResponseType = HttpResponse<IAlbum[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class AlbumService {
  public resourceUrl = SERVER_API_URL + 'api/albums';

  constructor(protected http: HttpClient) {}

  create(album: IAlbum): Observable<EntityResponseType> {
    return this.http.post<IAlbum>(this.resourceUrl, album, { observe: 'response' });
  }

  update(album: IAlbum): Observable<EntityResponseType> {
    return this.http.put<IAlbum>(this.resourceUrl, album, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAlbum>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAlbum[]>(this.resourceUrl, { params: options, observe: 'response' });
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
