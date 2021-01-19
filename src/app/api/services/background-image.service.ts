import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IImage} from '../models/image.model';
import {SERVER_API_URL} from '../app.constants';


type EntityResponseType = HttpResponse<IImage>;

@Injectable({ providedIn: 'root' })
export class ImageService {
  public resourceUrl = SERVER_API_URL + 'api/images/background';

  constructor(protected http: HttpClient) {}

  create(image: IImage): Observable<EntityResponseType> {
    return this.http.post<IImage>(this.resourceUrl, image, { observe: 'response' });
  }

  update(image: IImage): Observable<EntityResponseType> {
    return this.http.put<IImage>(this.resourceUrl, image, { observe: 'response' });
  }

  find(userId: number): Observable<EntityResponseType> {
    return this.http.get<IImage>(`${this.resourceUrl}/${userId}`, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
