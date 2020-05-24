/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AlbumDTO } from '../models/album-dto';

/**
 * Album Resource
 */
@Injectable({
  providedIn: 'root',
})
class AlbumResourceService extends __BaseService {
  static readonly getAllAlbumsUsingGETPath = '/api/albums';
  static readonly createAlbumUsingPOSTPath = '/api/albums';
  static readonly updateAlbumUsingPUTPath = '/api/albums';
  static readonly countAlbumsUsingGETPath = '/api/albums/count';
  static readonly getAlbumUsingGETPath = '/api/albums/{id}';
  static readonly deleteAlbumUsingDELETEPath = '/api/albums/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllAlbums
   * @param params The `AlbumResourceService.GetAllAlbumsUsingGETParams` containing the following parameters:
   *
   * - `userId.specified`:
   *
   * - `userId.notEquals`:
   *
   * - `userId.lessThanOrEqual`:
   *
   * - `userId.lessThan`:
   *
   * - `userId.in`:
   *
   * - `userId.greaterThanOrEqual`:
   *
   * - `userId.greaterThan`:
   *
   * - `userId.equals`:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * - `name.specified`:
   *
   * - `name.notEquals`:
   *
   * - `name.in`:
   *
   * - `name.equals`:
   *
   * - `name.doesNotContain`:
   *
   * - `name.contains`:
   *
   * - `imageId.specified`:
   *
   * - `imageId.notEquals`:
   *
   * - `imageId.lessThanOrEqual`:
   *
   * - `imageId.lessThan`:
   *
   * - `imageId.in`:
   *
   * - `imageId.greaterThanOrEqual`:
   *
   * - `imageId.greaterThan`:
   *
   * - `imageId.equals`:
   *
   * - `id.specified`:
   *
   * - `id.notEquals`:
   *
   * - `id.lessThanOrEqual`:
   *
   * - `id.lessThan`:
   *
   * - `id.in`:
   *
   * - `id.greaterThanOrEqual`:
   *
   * - `id.greaterThan`:
   *
   * - `id.equals`:
   *
   * @return OK
   */
  getAllAlbumsUsingGETResponse(params: AlbumResourceService.GetAllAlbumsUsingGETParams): __Observable<__StrictHttpResponse<Array<AlbumDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIdSpecified != null) __params = __params.set('userId.specified', params.userIdSpecified.toString());
    if (params.userIdNotEquals != null) __params = __params.set('userId.notEquals', params.userIdNotEquals.toString());
    if (params.userIdLessThanOrEqual != null) __params = __params.set('userId.lessThanOrEqual', params.userIdLessThanOrEqual.toString());
    if (params.userIdLessThan != null) __params = __params.set('userId.lessThan', params.userIdLessThan.toString());
    (params.userIdIn || []).forEach(val => {if (val != null) __params = __params.append('userId.in', val.toString())});
    if (params.userIdGreaterThanOrEqual != null) __params = __params.set('userId.greaterThanOrEqual', params.userIdGreaterThanOrEqual.toString());
    if (params.userIdGreaterThan != null) __params = __params.set('userId.greaterThan', params.userIdGreaterThan.toString());
    if (params.userIdEquals != null) __params = __params.set('userId.equals', params.userIdEquals.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.nameSpecified != null) __params = __params.set('name.specified', params.nameSpecified.toString());
    if (params.nameNotEquals != null) __params = __params.set('name.notEquals', params.nameNotEquals.toString());
    (params.nameIn || []).forEach(val => {if (val != null) __params = __params.append('name.in', val.toString())});
    if (params.nameEquals != null) __params = __params.set('name.equals', params.nameEquals.toString());
    if (params.nameDoesNotContain != null) __params = __params.set('name.doesNotContain', params.nameDoesNotContain.toString());
    if (params.nameContains != null) __params = __params.set('name.contains', params.nameContains.toString());
    if (params.imageIdSpecified != null) __params = __params.set('imageId.specified', params.imageIdSpecified.toString());
    if (params.imageIdNotEquals != null) __params = __params.set('imageId.notEquals', params.imageIdNotEquals.toString());
    if (params.imageIdLessThanOrEqual != null) __params = __params.set('imageId.lessThanOrEqual', params.imageIdLessThanOrEqual.toString());
    if (params.imageIdLessThan != null) __params = __params.set('imageId.lessThan', params.imageIdLessThan.toString());
    (params.imageIdIn || []).forEach(val => {if (val != null) __params = __params.append('imageId.in', val.toString())});
    if (params.imageIdGreaterThanOrEqual != null) __params = __params.set('imageId.greaterThanOrEqual', params.imageIdGreaterThanOrEqual.toString());
    if (params.imageIdGreaterThan != null) __params = __params.set('imageId.greaterThan', params.imageIdGreaterThan.toString());
    if (params.imageIdEquals != null) __params = __params.set('imageId.equals', params.imageIdEquals.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/albums`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AlbumDTO>>;
      })
    );
  }
  /**
   * getAllAlbums
   * @param params The `AlbumResourceService.GetAllAlbumsUsingGETParams` containing the following parameters:
   *
   * - `userId.specified`:
   *
   * - `userId.notEquals`:
   *
   * - `userId.lessThanOrEqual`:
   *
   * - `userId.lessThan`:
   *
   * - `userId.in`:
   *
   * - `userId.greaterThanOrEqual`:
   *
   * - `userId.greaterThan`:
   *
   * - `userId.equals`:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * - `name.specified`:
   *
   * - `name.notEquals`:
   *
   * - `name.in`:
   *
   * - `name.equals`:
   *
   * - `name.doesNotContain`:
   *
   * - `name.contains`:
   *
   * - `imageId.specified`:
   *
   * - `imageId.notEquals`:
   *
   * - `imageId.lessThanOrEqual`:
   *
   * - `imageId.lessThan`:
   *
   * - `imageId.in`:
   *
   * - `imageId.greaterThanOrEqual`:
   *
   * - `imageId.greaterThan`:
   *
   * - `imageId.equals`:
   *
   * - `id.specified`:
   *
   * - `id.notEquals`:
   *
   * - `id.lessThanOrEqual`:
   *
   * - `id.lessThan`:
   *
   * - `id.in`:
   *
   * - `id.greaterThanOrEqual`:
   *
   * - `id.greaterThan`:
   *
   * - `id.equals`:
   *
   * @return OK
   */
  getAllAlbumsUsingGET(params: AlbumResourceService.GetAllAlbumsUsingGETParams): __Observable<Array<AlbumDTO>> {
    return this.getAllAlbumsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<AlbumDTO>)
    );
  }

  /**
   * createAlbum
   * @param albumDTO albumDTO
   * @return OK
   */
  createAlbumUsingPOSTResponse(albumDTO: AlbumDTO): __Observable<__StrictHttpResponse<AlbumDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = albumDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/albums`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AlbumDTO>;
      })
    );
  }
  /**
   * createAlbum
   * @param albumDTO albumDTO
   * @return OK
   */
  createAlbumUsingPOST(albumDTO: AlbumDTO): __Observable<AlbumDTO> {
    return this.createAlbumUsingPOSTResponse(albumDTO).pipe(
      __map(_r => _r.body as AlbumDTO)
    );
  }

  /**
   * updateAlbum
   * @param albumDTO albumDTO
   * @return OK
   */
  updateAlbumUsingPUTResponse(albumDTO: AlbumDTO): __Observable<__StrictHttpResponse<AlbumDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = albumDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/albums`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AlbumDTO>;
      })
    );
  }
  /**
   * updateAlbum
   * @param albumDTO albumDTO
   * @return OK
   */
  updateAlbumUsingPUT(albumDTO: AlbumDTO): __Observable<AlbumDTO> {
    return this.updateAlbumUsingPUTResponse(albumDTO).pipe(
      __map(_r => _r.body as AlbumDTO)
    );
  }

  /**
   * countAlbums
   * @param params The `AlbumResourceService.CountAlbumsUsingGETParams` containing the following parameters:
   *
   * - `userId.specified`:
   *
   * - `userId.notEquals`:
   *
   * - `userId.lessThanOrEqual`:
   *
   * - `userId.lessThan`:
   *
   * - `userId.in`:
   *
   * - `userId.greaterThanOrEqual`:
   *
   * - `userId.greaterThan`:
   *
   * - `userId.equals`:
   *
   * - `name.specified`:
   *
   * - `name.notEquals`:
   *
   * - `name.in`:
   *
   * - `name.equals`:
   *
   * - `name.doesNotContain`:
   *
   * - `name.contains`:
   *
   * - `imageId.specified`:
   *
   * - `imageId.notEquals`:
   *
   * - `imageId.lessThanOrEqual`:
   *
   * - `imageId.lessThan`:
   *
   * - `imageId.in`:
   *
   * - `imageId.greaterThanOrEqual`:
   *
   * - `imageId.greaterThan`:
   *
   * - `imageId.equals`:
   *
   * - `id.specified`:
   *
   * - `id.notEquals`:
   *
   * - `id.lessThanOrEqual`:
   *
   * - `id.lessThan`:
   *
   * - `id.in`:
   *
   * - `id.greaterThanOrEqual`:
   *
   * - `id.greaterThan`:
   *
   * - `id.equals`:
   *
   * @return OK
   */
  countAlbumsUsingGETResponse(params: AlbumResourceService.CountAlbumsUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userIdSpecified != null) __params = __params.set('userId.specified', params.userIdSpecified.toString());
    if (params.userIdNotEquals != null) __params = __params.set('userId.notEquals', params.userIdNotEquals.toString());
    if (params.userIdLessThanOrEqual != null) __params = __params.set('userId.lessThanOrEqual', params.userIdLessThanOrEqual.toString());
    if (params.userIdLessThan != null) __params = __params.set('userId.lessThan', params.userIdLessThan.toString());
    (params.userIdIn || []).forEach(val => {if (val != null) __params = __params.append('userId.in', val.toString())});
    if (params.userIdGreaterThanOrEqual != null) __params = __params.set('userId.greaterThanOrEqual', params.userIdGreaterThanOrEqual.toString());
    if (params.userIdGreaterThan != null) __params = __params.set('userId.greaterThan', params.userIdGreaterThan.toString());
    if (params.userIdEquals != null) __params = __params.set('userId.equals', params.userIdEquals.toString());
    if (params.nameSpecified != null) __params = __params.set('name.specified', params.nameSpecified.toString());
    if (params.nameNotEquals != null) __params = __params.set('name.notEquals', params.nameNotEquals.toString());
    (params.nameIn || []).forEach(val => {if (val != null) __params = __params.append('name.in', val.toString())});
    if (params.nameEquals != null) __params = __params.set('name.equals', params.nameEquals.toString());
    if (params.nameDoesNotContain != null) __params = __params.set('name.doesNotContain', params.nameDoesNotContain.toString());
    if (params.nameContains != null) __params = __params.set('name.contains', params.nameContains.toString());
    if (params.imageIdSpecified != null) __params = __params.set('imageId.specified', params.imageIdSpecified.toString());
    if (params.imageIdNotEquals != null) __params = __params.set('imageId.notEquals', params.imageIdNotEquals.toString());
    if (params.imageIdLessThanOrEqual != null) __params = __params.set('imageId.lessThanOrEqual', params.imageIdLessThanOrEqual.toString());
    if (params.imageIdLessThan != null) __params = __params.set('imageId.lessThan', params.imageIdLessThan.toString());
    (params.imageIdIn || []).forEach(val => {if (val != null) __params = __params.append('imageId.in', val.toString())});
    if (params.imageIdGreaterThanOrEqual != null) __params = __params.set('imageId.greaterThanOrEqual', params.imageIdGreaterThanOrEqual.toString());
    if (params.imageIdGreaterThan != null) __params = __params.set('imageId.greaterThan', params.imageIdGreaterThan.toString());
    if (params.imageIdEquals != null) __params = __params.set('imageId.equals', params.imageIdEquals.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/albums/count`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * countAlbums
   * @param params The `AlbumResourceService.CountAlbumsUsingGETParams` containing the following parameters:
   *
   * - `userId.specified`:
   *
   * - `userId.notEquals`:
   *
   * - `userId.lessThanOrEqual`:
   *
   * - `userId.lessThan`:
   *
   * - `userId.in`:
   *
   * - `userId.greaterThanOrEqual`:
   *
   * - `userId.greaterThan`:
   *
   * - `userId.equals`:
   *
   * - `name.specified`:
   *
   * - `name.notEquals`:
   *
   * - `name.in`:
   *
   * - `name.equals`:
   *
   * - `name.doesNotContain`:
   *
   * - `name.contains`:
   *
   * - `imageId.specified`:
   *
   * - `imageId.notEquals`:
   *
   * - `imageId.lessThanOrEqual`:
   *
   * - `imageId.lessThan`:
   *
   * - `imageId.in`:
   *
   * - `imageId.greaterThanOrEqual`:
   *
   * - `imageId.greaterThan`:
   *
   * - `imageId.equals`:
   *
   * - `id.specified`:
   *
   * - `id.notEquals`:
   *
   * - `id.lessThanOrEqual`:
   *
   * - `id.lessThan`:
   *
   * - `id.in`:
   *
   * - `id.greaterThanOrEqual`:
   *
   * - `id.greaterThan`:
   *
   * - `id.equals`:
   *
   * @return OK
   */
  countAlbumsUsingGET(params: AlbumResourceService.CountAlbumsUsingGETParams): __Observable<number> {
    return this.countAlbumsUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getAlbum
   * @param id id
   * @return OK
   */
  getAlbumUsingGETResponse(id: number): __Observable<__StrictHttpResponse<AlbumDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/albums/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AlbumDTO>;
      })
    );
  }
  /**
   * getAlbum
   * @param id id
   * @return OK
   */
  getAlbumUsingGET(id: number): __Observable<AlbumDTO> {
    return this.getAlbumUsingGETResponse(id).pipe(
      __map(_r => _r.body as AlbumDTO)
    );
  }

  /**
   * deleteAlbum
   * @param id id
   */
  deleteAlbumUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/albums/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * deleteAlbum
   * @param id id
   */
  deleteAlbumUsingDELETE(id: number): __Observable<null> {
    return this.deleteAlbumUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AlbumResourceService {

  /**
   * Parameters for getAllAlbumsUsingGET
   */
  export interface GetAllAlbumsUsingGETParams {
    userIdSpecified?: boolean;
    userIdNotEquals?: number;
    userIdLessThanOrEqual?: number;
    userIdLessThan?: number;
    userIdIn?: Array<number>;
    userIdGreaterThanOrEqual?: number;
    userIdGreaterThan?: number;
    userIdEquals?: number;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
    nameSpecified?: boolean;
    nameNotEquals?: string;
    nameIn?: Array<string>;
    nameEquals?: string;
    nameDoesNotContain?: string;
    nameContains?: string;
    imageIdSpecified?: boolean;
    imageIdNotEquals?: number;
    imageIdLessThanOrEqual?: number;
    imageIdLessThan?: number;
    imageIdIn?: Array<number>;
    imageIdGreaterThanOrEqual?: number;
    imageIdGreaterThan?: number;
    imageIdEquals?: number;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
  }

  /**
   * Parameters for countAlbumsUsingGET
   */
  export interface CountAlbumsUsingGETParams {
    userIdSpecified?: boolean;
    userIdNotEquals?: number;
    userIdLessThanOrEqual?: number;
    userIdLessThan?: number;
    userIdIn?: Array<number>;
    userIdGreaterThanOrEqual?: number;
    userIdGreaterThan?: number;
    userIdEquals?: number;
    nameSpecified?: boolean;
    nameNotEquals?: string;
    nameIn?: Array<string>;
    nameEquals?: string;
    nameDoesNotContain?: string;
    nameContains?: string;
    imageIdSpecified?: boolean;
    imageIdNotEquals?: number;
    imageIdLessThanOrEqual?: number;
    imageIdLessThan?: number;
    imageIdIn?: Array<number>;
    imageIdGreaterThanOrEqual?: number;
    imageIdGreaterThan?: number;
    imageIdEquals?: number;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
  }
}

export { AlbumResourceService }
