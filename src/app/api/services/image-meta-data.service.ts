import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IImageMetaData} from '../models/image-meta-data.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<IImageMetaData>;
type EntityArrayResponseType = HttpResponse<IImageMetaData[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class ImageMetaDataService {
  public resourceUrl = SERVER_API_URL + 'api/image-meta-data';

  constructor(protected http: HttpClient) {}

  create(imageMetaData: IImageMetaData): Observable<EntityResponseType> {
    return this.http.post<IImageMetaData>(this.resourceUrl, imageMetaData, { observe: 'response' });
  }

  update(imageMetaData: IImageMetaData): Observable<EntityResponseType> {
    return this.http.put<IImageMetaData>(this.resourceUrl, imageMetaData, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IImageMetaData>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IImageMetaData[]>(this.resourceUrl, { params: options, observe: 'response' });
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
