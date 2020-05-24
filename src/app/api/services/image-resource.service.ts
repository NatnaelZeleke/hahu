/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ImageDTO } from '../models/image-dto';

/**
 * Image Resource
 */
@Injectable({
  providedIn: 'root',
})
class ImageResourceService extends __BaseService {
  static readonly getAllImagesUsingGETPath = '/api/images';
  static readonly createImageUsingPOSTPath = '/api/images';
  static readonly updateImageUsingPUTPath = '/api/images';
  static readonly countImagesUsingGETPath = '/api/images/count';
  static readonly getImageUsingGETPath = '/api/images/{id}';
  static readonly deleteImageUsingDELETEPath = '/api/images/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllImages
   * @param params The `ImageResourceService.GetAllImagesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * - `imageMetaDataId.specified`:
   *
   * - `imageMetaDataId.notEquals`:
   *
   * - `imageMetaDataId.lessThanOrEqual`:
   *
   * - `imageMetaDataId.lessThan`:
   *
   * - `imageMetaDataId.in`:
   *
   * - `imageMetaDataId.greaterThanOrEqual`:
   *
   * - `imageMetaDataId.greaterThan`:
   *
   * - `imageMetaDataId.equals`:
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
   * - `albumId.specified`:
   *
   * - `albumId.notEquals`:
   *
   * - `albumId.lessThanOrEqual`:
   *
   * - `albumId.lessThan`:
   *
   * - `albumId.in`:
   *
   * - `albumId.greaterThanOrEqual`:
   *
   * - `albumId.greaterThan`:
   *
   * - `albumId.equals`:
   *
   * @return OK
   */
  getAllImagesUsingGETResponse(params: ImageResourceService.GetAllImagesUsingGETParams): __Observable<__StrictHttpResponse<Array<ImageDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.imageMetaDataIdSpecified != null) __params = __params.set('imageMetaDataId.specified', params.imageMetaDataIdSpecified.toString());
    if (params.imageMetaDataIdNotEquals != null) __params = __params.set('imageMetaDataId.notEquals', params.imageMetaDataIdNotEquals.toString());
    if (params.imageMetaDataIdLessThanOrEqual != null) __params = __params.set('imageMetaDataId.lessThanOrEqual', params.imageMetaDataIdLessThanOrEqual.toString());
    if (params.imageMetaDataIdLessThan != null) __params = __params.set('imageMetaDataId.lessThan', params.imageMetaDataIdLessThan.toString());
    (params.imageMetaDataIdIn || []).forEach(val => {if (val != null) __params = __params.append('imageMetaDataId.in', val.toString())});
    if (params.imageMetaDataIdGreaterThanOrEqual != null) __params = __params.set('imageMetaDataId.greaterThanOrEqual', params.imageMetaDataIdGreaterThanOrEqual.toString());
    if (params.imageMetaDataIdGreaterThan != null) __params = __params.set('imageMetaDataId.greaterThan', params.imageMetaDataIdGreaterThan.toString());
    if (params.imageMetaDataIdEquals != null) __params = __params.set('imageMetaDataId.equals', params.imageMetaDataIdEquals.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.albumIdSpecified != null) __params = __params.set('albumId.specified', params.albumIdSpecified.toString());
    if (params.albumIdNotEquals != null) __params = __params.set('albumId.notEquals', params.albumIdNotEquals.toString());
    if (params.albumIdLessThanOrEqual != null) __params = __params.set('albumId.lessThanOrEqual', params.albumIdLessThanOrEqual.toString());
    if (params.albumIdLessThan != null) __params = __params.set('albumId.lessThan', params.albumIdLessThan.toString());
    (params.albumIdIn || []).forEach(val => {if (val != null) __params = __params.append('albumId.in', val.toString())});
    if (params.albumIdGreaterThanOrEqual != null) __params = __params.set('albumId.greaterThanOrEqual', params.albumIdGreaterThanOrEqual.toString());
    if (params.albumIdGreaterThan != null) __params = __params.set('albumId.greaterThan', params.albumIdGreaterThan.toString());
    if (params.albumIdEquals != null) __params = __params.set('albumId.equals', params.albumIdEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/images`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ImageDTO>>;
      })
    );
  }
  /**
   * getAllImages
   * @param params The `ImageResourceService.GetAllImagesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * - `imageMetaDataId.specified`:
   *
   * - `imageMetaDataId.notEquals`:
   *
   * - `imageMetaDataId.lessThanOrEqual`:
   *
   * - `imageMetaDataId.lessThan`:
   *
   * - `imageMetaDataId.in`:
   *
   * - `imageMetaDataId.greaterThanOrEqual`:
   *
   * - `imageMetaDataId.greaterThan`:
   *
   * - `imageMetaDataId.equals`:
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
   * - `albumId.specified`:
   *
   * - `albumId.notEquals`:
   *
   * - `albumId.lessThanOrEqual`:
   *
   * - `albumId.lessThan`:
   *
   * - `albumId.in`:
   *
   * - `albumId.greaterThanOrEqual`:
   *
   * - `albumId.greaterThan`:
   *
   * - `albumId.equals`:
   *
   * @return OK
   */
  getAllImagesUsingGET(params: ImageResourceService.GetAllImagesUsingGETParams): __Observable<Array<ImageDTO>> {
    return this.getAllImagesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ImageDTO>)
    );
  }

  /**
   * createImage
   * @param imageDTO imageDTO
   * @return OK
   */
  createImageUsingPOSTResponse(imageDTO: ImageDTO): __Observable<__StrictHttpResponse<ImageDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = imageDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/images`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImageDTO>;
      })
    );
  }
  /**
   * createImage
   * @param imageDTO imageDTO
   * @return OK
   */
  createImageUsingPOST(imageDTO: ImageDTO): __Observable<ImageDTO> {
    return this.createImageUsingPOSTResponse(imageDTO).pipe(
      __map(_r => _r.body as ImageDTO)
    );
  }

  /**
   * updateImage
   * @param imageDTO imageDTO
   * @return OK
   */
  updateImageUsingPUTResponse(imageDTO: ImageDTO): __Observable<__StrictHttpResponse<ImageDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = imageDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/images`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImageDTO>;
      })
    );
  }
  /**
   * updateImage
   * @param imageDTO imageDTO
   * @return OK
   */
  updateImageUsingPUT(imageDTO: ImageDTO): __Observable<ImageDTO> {
    return this.updateImageUsingPUTResponse(imageDTO).pipe(
      __map(_r => _r.body as ImageDTO)
    );
  }

  /**
   * countImages
   * @param params The `ImageResourceService.CountImagesUsingGETParams` containing the following parameters:
   *
   * - `imageMetaDataId.specified`:
   *
   * - `imageMetaDataId.notEquals`:
   *
   * - `imageMetaDataId.lessThanOrEqual`:
   *
   * - `imageMetaDataId.lessThan`:
   *
   * - `imageMetaDataId.in`:
   *
   * - `imageMetaDataId.greaterThanOrEqual`:
   *
   * - `imageMetaDataId.greaterThan`:
   *
   * - `imageMetaDataId.equals`:
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
   * - `albumId.specified`:
   *
   * - `albumId.notEquals`:
   *
   * - `albumId.lessThanOrEqual`:
   *
   * - `albumId.lessThan`:
   *
   * - `albumId.in`:
   *
   * - `albumId.greaterThanOrEqual`:
   *
   * - `albumId.greaterThan`:
   *
   * - `albumId.equals`:
   *
   * @return OK
   */
  countImagesUsingGETResponse(params: ImageResourceService.CountImagesUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.imageMetaDataIdSpecified != null) __params = __params.set('imageMetaDataId.specified', params.imageMetaDataIdSpecified.toString());
    if (params.imageMetaDataIdNotEquals != null) __params = __params.set('imageMetaDataId.notEquals', params.imageMetaDataIdNotEquals.toString());
    if (params.imageMetaDataIdLessThanOrEqual != null) __params = __params.set('imageMetaDataId.lessThanOrEqual', params.imageMetaDataIdLessThanOrEqual.toString());
    if (params.imageMetaDataIdLessThan != null) __params = __params.set('imageMetaDataId.lessThan', params.imageMetaDataIdLessThan.toString());
    (params.imageMetaDataIdIn || []).forEach(val => {if (val != null) __params = __params.append('imageMetaDataId.in', val.toString())});
    if (params.imageMetaDataIdGreaterThanOrEqual != null) __params = __params.set('imageMetaDataId.greaterThanOrEqual', params.imageMetaDataIdGreaterThanOrEqual.toString());
    if (params.imageMetaDataIdGreaterThan != null) __params = __params.set('imageMetaDataId.greaterThan', params.imageMetaDataIdGreaterThan.toString());
    if (params.imageMetaDataIdEquals != null) __params = __params.set('imageMetaDataId.equals', params.imageMetaDataIdEquals.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.albumIdSpecified != null) __params = __params.set('albumId.specified', params.albumIdSpecified.toString());
    if (params.albumIdNotEquals != null) __params = __params.set('albumId.notEquals', params.albumIdNotEquals.toString());
    if (params.albumIdLessThanOrEqual != null) __params = __params.set('albumId.lessThanOrEqual', params.albumIdLessThanOrEqual.toString());
    if (params.albumIdLessThan != null) __params = __params.set('albumId.lessThan', params.albumIdLessThan.toString());
    (params.albumIdIn || []).forEach(val => {if (val != null) __params = __params.append('albumId.in', val.toString())});
    if (params.albumIdGreaterThanOrEqual != null) __params = __params.set('albumId.greaterThanOrEqual', params.albumIdGreaterThanOrEqual.toString());
    if (params.albumIdGreaterThan != null) __params = __params.set('albumId.greaterThan', params.albumIdGreaterThan.toString());
    if (params.albumIdEquals != null) __params = __params.set('albumId.equals', params.albumIdEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/images/count`,
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
   * countImages
   * @param params The `ImageResourceService.CountImagesUsingGETParams` containing the following parameters:
   *
   * - `imageMetaDataId.specified`:
   *
   * - `imageMetaDataId.notEquals`:
   *
   * - `imageMetaDataId.lessThanOrEqual`:
   *
   * - `imageMetaDataId.lessThan`:
   *
   * - `imageMetaDataId.in`:
   *
   * - `imageMetaDataId.greaterThanOrEqual`:
   *
   * - `imageMetaDataId.greaterThan`:
   *
   * - `imageMetaDataId.equals`:
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
   * - `albumId.specified`:
   *
   * - `albumId.notEquals`:
   *
   * - `albumId.lessThanOrEqual`:
   *
   * - `albumId.lessThan`:
   *
   * - `albumId.in`:
   *
   * - `albumId.greaterThanOrEqual`:
   *
   * - `albumId.greaterThan`:
   *
   * - `albumId.equals`:
   *
   * @return OK
   */
  countImagesUsingGET(params: ImageResourceService.CountImagesUsingGETParams): __Observable<number> {
    return this.countImagesUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getImage
   * @param id id
   * @return OK
   */
  getImageUsingGETResponse(id: number): __Observable<__StrictHttpResponse<ImageDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/images/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImageDTO>;
      })
    );
  }
  /**
   * getImage
   * @param id id
   * @return OK
   */
  getImageUsingGET(id: number): __Observable<ImageDTO> {
    return this.getImageUsingGETResponse(id).pipe(
      __map(_r => _r.body as ImageDTO)
    );
  }

  /**
   * deleteImage
   * @param id id
   */
  deleteImageUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/images/${encodeURIComponent(id)}`,
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
   * deleteImage
   * @param id id
   */
  deleteImageUsingDELETE(id: number): __Observable<null> {
    return this.deleteImageUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ImageResourceService {

  /**
   * Parameters for getAllImagesUsingGET
   */
  export interface GetAllImagesUsingGETParams {

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
    imageMetaDataIdSpecified?: boolean;
    imageMetaDataIdNotEquals?: number;
    imageMetaDataIdLessThanOrEqual?: number;
    imageMetaDataIdLessThan?: number;
    imageMetaDataIdIn?: Array<number>;
    imageMetaDataIdGreaterThanOrEqual?: number;
    imageMetaDataIdGreaterThan?: number;
    imageMetaDataIdEquals?: number;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    albumIdSpecified?: boolean;
    albumIdNotEquals?: number;
    albumIdLessThanOrEqual?: number;
    albumIdLessThan?: number;
    albumIdIn?: Array<number>;
    albumIdGreaterThanOrEqual?: number;
    albumIdGreaterThan?: number;
    albumIdEquals?: number;
  }

  /**
   * Parameters for countImagesUsingGET
   */
  export interface CountImagesUsingGETParams {
    imageMetaDataIdSpecified?: boolean;
    imageMetaDataIdNotEquals?: number;
    imageMetaDataIdLessThanOrEqual?: number;
    imageMetaDataIdLessThan?: number;
    imageMetaDataIdIn?: Array<number>;
    imageMetaDataIdGreaterThanOrEqual?: number;
    imageMetaDataIdGreaterThan?: number;
    imageMetaDataIdEquals?: number;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    albumIdSpecified?: boolean;
    albumIdNotEquals?: number;
    albumIdLessThanOrEqual?: number;
    albumIdLessThan?: number;
    albumIdIn?: Array<number>;
    albumIdGreaterThanOrEqual?: number;
    albumIdGreaterThan?: number;
    albumIdEquals?: number;
  }
}

export { ImageResourceService }
