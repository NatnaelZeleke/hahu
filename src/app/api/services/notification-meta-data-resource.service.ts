/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { NotificationMetaDataDTO } from '../models/notification-meta-data-dto';

/**
 * Notification Meta Data Resource
 */
@Injectable({
  providedIn: 'root',
})
class NotificationMetaDataResourceService extends __BaseService {
  static readonly getAllNotificationMetaDataUsingGETPath = '/api/notification-meta-data';
  static readonly createNotificationMetaDataUsingPOSTPath = '/api/notification-meta-data';
  static readonly updateNotificationMetaDataUsingPUTPath = '/api/notification-meta-data';
  static readonly countNotificationMetaDataUsingGETPath = '/api/notification-meta-data/count';
  static readonly getNotificationMetaDataUsingGETPath = '/api/notification-meta-data/{id}';
  static readonly deleteNotificationMetaDataUsingDELETEPath = '/api/notification-meta-data/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllNotificationMetaData
   * @param params The `NotificationMetaDataResourceService.GetAllNotificationMetaDataUsingGETParams` containing the following parameters:
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
   * - `notificationId.specified`:
   *
   * - `notificationId.notEquals`:
   *
   * - `notificationId.lessThanOrEqual`:
   *
   * - `notificationId.lessThan`:
   *
   * - `notificationId.in`:
   *
   * - `notificationId.greaterThanOrEqual`:
   *
   * - `notificationId.greaterThan`:
   *
   * - `notificationId.equals`:
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
  getAllNotificationMetaDataUsingGETResponse(params: NotificationMetaDataResourceService.GetAllNotificationMetaDataUsingGETParams): __Observable<__StrictHttpResponse<Array<NotificationMetaDataDTO>>> {
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
    if (params.notificationIdSpecified != null) __params = __params.set('notificationId.specified', params.notificationIdSpecified.toString());
    if (params.notificationIdNotEquals != null) __params = __params.set('notificationId.notEquals', params.notificationIdNotEquals.toString());
    if (params.notificationIdLessThanOrEqual != null) __params = __params.set('notificationId.lessThanOrEqual', params.notificationIdLessThanOrEqual.toString());
    if (params.notificationIdLessThan != null) __params = __params.set('notificationId.lessThan', params.notificationIdLessThan.toString());
    (params.notificationIdIn || []).forEach(val => {if (val != null) __params = __params.append('notificationId.in', val.toString())});
    if (params.notificationIdGreaterThanOrEqual != null) __params = __params.set('notificationId.greaterThanOrEqual', params.notificationIdGreaterThanOrEqual.toString());
    if (params.notificationIdGreaterThan != null) __params = __params.set('notificationId.greaterThan', params.notificationIdGreaterThan.toString());
    if (params.notificationIdEquals != null) __params = __params.set('notificationId.equals', params.notificationIdEquals.toString());
    if (params.nameSpecified != null) __params = __params.set('name.specified', params.nameSpecified.toString());
    if (params.nameNotEquals != null) __params = __params.set('name.notEquals', params.nameNotEquals.toString());
    (params.nameIn || []).forEach(val => {if (val != null) __params = __params.append('name.in', val.toString())});
    if (params.nameEquals != null) __params = __params.set('name.equals', params.nameEquals.toString());
    if (params.nameDoesNotContain != null) __params = __params.set('name.doesNotContain', params.nameDoesNotContain.toString());
    if (params.nameContains != null) __params = __params.set('name.contains', params.nameContains.toString());
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
      this.rootUrl + `/api/notification-meta-data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<NotificationMetaDataDTO>>;
      })
    );
  }
  /**
   * getAllNotificationMetaData
   * @param params The `NotificationMetaDataResourceService.GetAllNotificationMetaDataUsingGETParams` containing the following parameters:
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
   * - `notificationId.specified`:
   *
   * - `notificationId.notEquals`:
   *
   * - `notificationId.lessThanOrEqual`:
   *
   * - `notificationId.lessThan`:
   *
   * - `notificationId.in`:
   *
   * - `notificationId.greaterThanOrEqual`:
   *
   * - `notificationId.greaterThan`:
   *
   * - `notificationId.equals`:
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
  getAllNotificationMetaDataUsingGET(params: NotificationMetaDataResourceService.GetAllNotificationMetaDataUsingGETParams): __Observable<Array<NotificationMetaDataDTO>> {
    return this.getAllNotificationMetaDataUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<NotificationMetaDataDTO>)
    );
  }

  /**
   * createNotificationMetaData
   * @param notificationMetaDataDTO notificationMetaDataDTO
   * @return OK
   */
  createNotificationMetaDataUsingPOSTResponse(notificationMetaDataDTO: NotificationMetaDataDTO): __Observable<__StrictHttpResponse<NotificationMetaDataDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = notificationMetaDataDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/notification-meta-data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationMetaDataDTO>;
      })
    );
  }
  /**
   * createNotificationMetaData
   * @param notificationMetaDataDTO notificationMetaDataDTO
   * @return OK
   */
  createNotificationMetaDataUsingPOST(notificationMetaDataDTO: NotificationMetaDataDTO): __Observable<NotificationMetaDataDTO> {
    return this.createNotificationMetaDataUsingPOSTResponse(notificationMetaDataDTO).pipe(
      __map(_r => _r.body as NotificationMetaDataDTO)
    );
  }

  /**
   * updateNotificationMetaData
   * @param notificationMetaDataDTO notificationMetaDataDTO
   * @return OK
   */
  updateNotificationMetaDataUsingPUTResponse(notificationMetaDataDTO: NotificationMetaDataDTO): __Observable<__StrictHttpResponse<NotificationMetaDataDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = notificationMetaDataDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/notification-meta-data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationMetaDataDTO>;
      })
    );
  }
  /**
   * updateNotificationMetaData
   * @param notificationMetaDataDTO notificationMetaDataDTO
   * @return OK
   */
  updateNotificationMetaDataUsingPUT(notificationMetaDataDTO: NotificationMetaDataDTO): __Observable<NotificationMetaDataDTO> {
    return this.updateNotificationMetaDataUsingPUTResponse(notificationMetaDataDTO).pipe(
      __map(_r => _r.body as NotificationMetaDataDTO)
    );
  }

  /**
   * countNotificationMetaData
   * @param params The `NotificationMetaDataResourceService.CountNotificationMetaDataUsingGETParams` containing the following parameters:
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
   * - `notificationId.specified`:
   *
   * - `notificationId.notEquals`:
   *
   * - `notificationId.lessThanOrEqual`:
   *
   * - `notificationId.lessThan`:
   *
   * - `notificationId.in`:
   *
   * - `notificationId.greaterThanOrEqual`:
   *
   * - `notificationId.greaterThan`:
   *
   * - `notificationId.equals`:
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
  countNotificationMetaDataUsingGETResponse(params: NotificationMetaDataResourceService.CountNotificationMetaDataUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.valueSpecified != null) __params = __params.set('value.specified', params.valueSpecified.toString());
    if (params.valueNotEquals != null) __params = __params.set('value.notEquals', params.valueNotEquals.toString());
    (params.valueIn || []).forEach(val => {if (val != null) __params = __params.append('value.in', val.toString())});
    if (params.valueEquals != null) __params = __params.set('value.equals', params.valueEquals.toString());
    if (params.valueDoesNotContain != null) __params = __params.set('value.doesNotContain', params.valueDoesNotContain.toString());
    if (params.valueContains != null) __params = __params.set('value.contains', params.valueContains.toString());
    if (params.notificationIdSpecified != null) __params = __params.set('notificationId.specified', params.notificationIdSpecified.toString());
    if (params.notificationIdNotEquals != null) __params = __params.set('notificationId.notEquals', params.notificationIdNotEquals.toString());
    if (params.notificationIdLessThanOrEqual != null) __params = __params.set('notificationId.lessThanOrEqual', params.notificationIdLessThanOrEqual.toString());
    if (params.notificationIdLessThan != null) __params = __params.set('notificationId.lessThan', params.notificationIdLessThan.toString());
    (params.notificationIdIn || []).forEach(val => {if (val != null) __params = __params.append('notificationId.in', val.toString())});
    if (params.notificationIdGreaterThanOrEqual != null) __params = __params.set('notificationId.greaterThanOrEqual', params.notificationIdGreaterThanOrEqual.toString());
    if (params.notificationIdGreaterThan != null) __params = __params.set('notificationId.greaterThan', params.notificationIdGreaterThan.toString());
    if (params.notificationIdEquals != null) __params = __params.set('notificationId.equals', params.notificationIdEquals.toString());
    if (params.nameSpecified != null) __params = __params.set('name.specified', params.nameSpecified.toString());
    if (params.nameNotEquals != null) __params = __params.set('name.notEquals', params.nameNotEquals.toString());
    (params.nameIn || []).forEach(val => {if (val != null) __params = __params.append('name.in', val.toString())});
    if (params.nameEquals != null) __params = __params.set('name.equals', params.nameEquals.toString());
    if (params.nameDoesNotContain != null) __params = __params.set('name.doesNotContain', params.nameDoesNotContain.toString());
    if (params.nameContains != null) __params = __params.set('name.contains', params.nameContains.toString());
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
      this.rootUrl + `/api/notification-meta-data/count`,
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
   * countNotificationMetaData
   * @param params The `NotificationMetaDataResourceService.CountNotificationMetaDataUsingGETParams` containing the following parameters:
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
   * - `notificationId.specified`:
   *
   * - `notificationId.notEquals`:
   *
   * - `notificationId.lessThanOrEqual`:
   *
   * - `notificationId.lessThan`:
   *
   * - `notificationId.in`:
   *
   * - `notificationId.greaterThanOrEqual`:
   *
   * - `notificationId.greaterThan`:
   *
   * - `notificationId.equals`:
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
  countNotificationMetaDataUsingGET(params: NotificationMetaDataResourceService.CountNotificationMetaDataUsingGETParams): __Observable<number> {
    return this.countNotificationMetaDataUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getNotificationMetaData
   * @param id id
   * @return OK
   */
  getNotificationMetaDataUsingGETResponse(id: number): __Observable<__StrictHttpResponse<NotificationMetaDataDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/notification-meta-data/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationMetaDataDTO>;
      })
    );
  }
  /**
   * getNotificationMetaData
   * @param id id
   * @return OK
   */
  getNotificationMetaDataUsingGET(id: number): __Observable<NotificationMetaDataDTO> {
    return this.getNotificationMetaDataUsingGETResponse(id).pipe(
      __map(_r => _r.body as NotificationMetaDataDTO)
    );
  }

  /**
   * deleteNotificationMetaData
   * @param id id
   */
  deleteNotificationMetaDataUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/notification-meta-data/${encodeURIComponent(id)}`,
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
   * deleteNotificationMetaData
   * @param id id
   */
  deleteNotificationMetaDataUsingDELETE(id: number): __Observable<null> {
    return this.deleteNotificationMetaDataUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module NotificationMetaDataResourceService {

  /**
   * Parameters for getAllNotificationMetaDataUsingGET
   */
  export interface GetAllNotificationMetaDataUsingGETParams {
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
    notificationIdSpecified?: boolean;
    notificationIdNotEquals?: number;
    notificationIdLessThanOrEqual?: number;
    notificationIdLessThan?: number;
    notificationIdIn?: Array<number>;
    notificationIdGreaterThanOrEqual?: number;
    notificationIdGreaterThan?: number;
    notificationIdEquals?: number;
    nameSpecified?: boolean;
    nameNotEquals?: string;
    nameIn?: Array<string>;
    nameEquals?: string;
    nameDoesNotContain?: string;
    nameContains?: string;
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
   * Parameters for countNotificationMetaDataUsingGET
   */
  export interface CountNotificationMetaDataUsingGETParams {
    valueSpecified?: boolean;
    valueNotEquals?: string;
    valueIn?: Array<string>;
    valueEquals?: string;
    valueDoesNotContain?: string;
    valueContains?: string;
    notificationIdSpecified?: boolean;
    notificationIdNotEquals?: number;
    notificationIdLessThanOrEqual?: number;
    notificationIdLessThan?: number;
    notificationIdIn?: Array<number>;
    notificationIdGreaterThanOrEqual?: number;
    notificationIdGreaterThan?: number;
    notificationIdEquals?: number;
    nameSpecified?: boolean;
    nameNotEquals?: string;
    nameIn?: Array<string>;
    nameEquals?: string;
    nameDoesNotContain?: string;
    nameContains?: string;
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

export { NotificationMetaDataResourceService }
