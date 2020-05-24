/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ImageMetaDataDTO } from '../models/image-meta-data-dto';

/**
 * Image Meta Data Resource
 */
@Injectable({
  providedIn: 'root',
})
class ImageMetaDataResourceService extends __BaseService {
  static readonly getAllImageMetaDataUsingGETPath = '/api/image-meta-data';
  static readonly createImageMetaDataUsingPOSTPath = '/api/image-meta-data';
  static readonly updateImageMetaDataUsingPUTPath = '/api/image-meta-data';
  static readonly countImageMetaDataUsingGETPath = '/api/image-meta-data/count';
  static readonly getImageMetaDataUsingGETPath = '/api/image-meta-data/{id}';
  static readonly deleteImageMetaDataUsingDELETEPath = '/api/image-meta-data/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllImageMetaData
   * @param params The `ImageMetaDataResourceService.GetAllImageMetaDataUsingGETParams` containing the following parameters:
   *
   * - `value.specified`:
   *
   * - `value.notEquals`:
   *
   * - `value.in`:
   *
   * - `value.equals`:
   *
   * - `value.doesNotContain`:
   *
   * - `value.contains`:
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
  getAllImageMetaDataUsingGETResponse(params: ImageMetaDataResourceService.GetAllImageMetaDataUsingGETParams): __Observable<__StrictHttpResponse<Array<ImageMetaDataDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.valueSpecified != null) __params = __params.set('value.specified', params.valueSpecified.toString());
    if (params.valueNotEquals != null) __params = __params.set('value.notEquals', params.valueNotEquals.toString());
    (params.valueIn || []).forEach(val => {if (val != null) __params = __params.append('value.in', val.toString())});
    if (params.valueEquals != null) __params = __params.set('value.equals', params.valueEquals.toString());
    if (params.valueDoesNotContain != null) __params = __params.set('value.doesNotContain', params.valueDoesNotContain.toString());
    if (params.valueContains != null) __params = __params.set('value.contains', params.valueContains.toString());
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
      this.rootUrl + `/api/image-meta-data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ImageMetaDataDTO>>;
      })
    );
  }
  /**
   * getAllImageMetaData
   * @param params The `ImageMetaDataResourceService.GetAllImageMetaDataUsingGETParams` containing the following parameters:
   *
   * - `value.specified`:
   *
   * - `value.notEquals`:
   *
   * - `value.in`:
   *
   * - `value.equals`:
   *
   * - `value.doesNotContain`:
   *
   * - `value.contains`:
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
  getAllImageMetaDataUsingGET(params: ImageMetaDataResourceService.GetAllImageMetaDataUsingGETParams): __Observable<Array<ImageMetaDataDTO>> {
    return this.getAllImageMetaDataUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ImageMetaDataDTO>)
    );
  }

  /**
   * createImageMetaData
   * @param imageMetaDataDTO imageMetaDataDTO
   * @return OK
   */
  createImageMetaDataUsingPOSTResponse(imageMetaDataDTO: ImageMetaDataDTO): __Observable<__StrictHttpResponse<ImageMetaDataDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = imageMetaDataDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/image-meta-data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImageMetaDataDTO>;
      })
    );
  }
  /**
   * createImageMetaData
   * @param imageMetaDataDTO imageMetaDataDTO
   * @return OK
   */
  createImageMetaDataUsingPOST(imageMetaDataDTO: ImageMetaDataDTO): __Observable<ImageMetaDataDTO> {
    return this.createImageMetaDataUsingPOSTResponse(imageMetaDataDTO).pipe(
      __map(_r => _r.body as ImageMetaDataDTO)
    );
  }

  /**
   * updateImageMetaData
   * @param imageMetaDataDTO imageMetaDataDTO
   * @return OK
   */
  updateImageMetaDataUsingPUTResponse(imageMetaDataDTO: ImageMetaDataDTO): __Observable<__StrictHttpResponse<ImageMetaDataDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = imageMetaDataDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/image-meta-data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImageMetaDataDTO>;
      })
    );
  }
  /**
   * updateImageMetaData
   * @param imageMetaDataDTO imageMetaDataDTO
   * @return OK
   */
  updateImageMetaDataUsingPUT(imageMetaDataDTO: ImageMetaDataDTO): __Observable<ImageMetaDataDTO> {
    return this.updateImageMetaDataUsingPUTResponse(imageMetaDataDTO).pipe(
      __map(_r => _r.body as ImageMetaDataDTO)
    );
  }

  /**
   * countImageMetaData
   * @param params The `ImageMetaDataResourceService.CountImageMetaDataUsingGETParams` containing the following parameters:
   *
   * - `value.specified`:
   *
   * - `value.notEquals`:
   *
   * - `value.in`:
   *
   * - `value.equals`:
   *
   * - `value.doesNotContain`:
   *
   * - `value.contains`:
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
  countImageMetaDataUsingGETResponse(params: ImageMetaDataResourceService.CountImageMetaDataUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.valueSpecified != null) __params = __params.set('value.specified', params.valueSpecified.toString());
    if (params.valueNotEquals != null) __params = __params.set('value.notEquals', params.valueNotEquals.toString());
    (params.valueIn || []).forEach(val => {if (val != null) __params = __params.append('value.in', val.toString())});
    if (params.valueEquals != null) __params = __params.set('value.equals', params.valueEquals.toString());
    if (params.valueDoesNotContain != null) __params = __params.set('value.doesNotContain', params.valueDoesNotContain.toString());
    if (params.valueContains != null) __params = __params.set('value.contains', params.valueContains.toString());
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
      this.rootUrl + `/api/image-meta-data/count`,
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
   * countImageMetaData
   * @param params The `ImageMetaDataResourceService.CountImageMetaDataUsingGETParams` containing the following parameters:
   *
   * - `value.specified`:
   *
   * - `value.notEquals`:
   *
   * - `value.in`:
   *
   * - `value.equals`:
   *
   * - `value.doesNotContain`:
   *
   * - `value.contains`:
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
  countImageMetaDataUsingGET(params: ImageMetaDataResourceService.CountImageMetaDataUsingGETParams): __Observable<number> {
    return this.countImageMetaDataUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getImageMetaData
   * @param id id
   * @return OK
   */
  getImageMetaDataUsingGETResponse(id: number): __Observable<__StrictHttpResponse<ImageMetaDataDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/image-meta-data/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImageMetaDataDTO>;
      })
    );
  }
  /**
   * getImageMetaData
   * @param id id
   * @return OK
   */
  getImageMetaDataUsingGET(id: number): __Observable<ImageMetaDataDTO> {
    return this.getImageMetaDataUsingGETResponse(id).pipe(
      __map(_r => _r.body as ImageMetaDataDTO)
    );
  }

  /**
   * deleteImageMetaData
   * @param id id
   */
  deleteImageMetaDataUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/image-meta-data/${encodeURIComponent(id)}`,
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
   * deleteImageMetaData
   * @param id id
   */
  deleteImageMetaDataUsingDELETE(id: number): __Observable<null> {
    return this.deleteImageMetaDataUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ImageMetaDataResourceService {

  /**
   * Parameters for getAllImageMetaDataUsingGET
   */
  export interface GetAllImageMetaDataUsingGETParams {
    valueSpecified?: boolean;
    valueNotEquals?: string;
    valueIn?: Array<string>;
    valueEquals?: string;
    valueDoesNotContain?: string;
    valueContains?: string;

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
   * Parameters for countImageMetaDataUsingGET
   */
  export interface CountImageMetaDataUsingGETParams {
    valueSpecified?: boolean;
    valueNotEquals?: string;
    valueIn?: Array<string>;
    valueEquals?: string;
    valueDoesNotContain?: string;
    valueContains?: string;
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

export { ImageMetaDataResourceService }
