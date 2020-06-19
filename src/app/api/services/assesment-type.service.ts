import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IAssesmentType} from '../models/assesment-type.model';
import {SERVER_API_URL} from '../app.constants';
import {createRequestOption} from '../util/request-util';


type EntityResponseType = HttpResponse<IAssesmentType>;
type EntityArrayResponseType = HttpResponse<IAssesmentType[]>;

@Injectable({ providedIn: 'root' })
export class AssesmentTypeService {
  public resourceUrl = SERVER_API_URL + 'api/assesment-types';

  constructor(protected http: HttpClient) {}

  create(assesmentType: IAssesmentType): Observable<EntityResponseType> {
    return this.http.post<IAssesmentType>(this.resourceUrl, assesmentType, { observe: 'response' });
  }

  update(assesmentType: IAssesmentType): Observable<EntityResponseType> {
    return this.http.put<IAssesmentType>(this.resourceUrl, assesmentType, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAssesmentType>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAssesmentType[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
