import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICategory} from '../models/category.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<ICategory>;
type EntityArrayResponseType = HttpResponse<ICategory[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class CategoryService {
  public resourceUrl = SERVER_API_URL + 'api/categories';

  constructor(protected http: HttpClient) {}

  create(category: ICategory): Observable<EntityResponseType> {
    return this.http.post<ICategory>(this.resourceUrl, category, { observe: 'response' });
  }

  update(category: ICategory): Observable<EntityResponseType> {
    return this.http.put<ICategory>(this.resourceUrl, category, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICategory>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICategory[]>(this.resourceUrl, { params: options, observe: 'response' });
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
