import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ISchoolProgress} from '../models/school-progress.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<ISchoolProgress>;
type EntityArrayResponseType = HttpResponse<ISchoolProgress[]>;
type CountResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class SchoolProgressService {
  public resourceUrl = SERVER_API_URL + 'api/school-progresses';

  constructor(protected http: HttpClient) {}

  create(schoolProgress: ISchoolProgress): Observable<EntityResponseType> {
    return this.http.post<ISchoolProgress>(this.resourceUrl, schoolProgress, { observe: 'response' });
  }

  update(schoolProgress: ISchoolProgress): Observable<EntityResponseType> {
    return this.http.put<ISchoolProgress>(this.resourceUrl, schoolProgress, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISchoolProgress>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISchoolProgress[]>(this.resourceUrl, { params: options, observe: 'response' });
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
