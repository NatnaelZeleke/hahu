/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ScheduleTypeDTO } from '../models/schedule-type-dto';

/**
 * Schedule Type Resource
 */
@Injectable({
  providedIn: 'root',
})
class ScheduleTypeResourceService extends __BaseService {
  static readonly getAllScheduleTypesUsingGETPath = '/api/schedule-types';
  static readonly createScheduleTypeUsingPOSTPath = '/api/schedule-types';
  static readonly updateScheduleTypeUsingPUTPath = '/api/schedule-types';
  static readonly countScheduleTypesUsingGETPath = '/api/schedule-types/count';
  static readonly getScheduleTypeUsingGETPath = '/api/schedule-types/{id}';
  static readonly deleteScheduleTypeUsingDELETEPath = '/api/schedule-types/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllScheduleTypes
   * @param params The `ScheduleTypeResourceService.GetAllScheduleTypesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `scheduleId.specified`:
   *
   * - `scheduleId.notEquals`:
   *
   * - `scheduleId.lessThanOrEqual`:
   *
   * - `scheduleId.lessThan`:
   *
   * - `scheduleId.in`:
   *
   * - `scheduleId.greaterThanOrEqual`:
   *
   * - `scheduleId.greaterThan`:
   *
   * - `scheduleId.equals`:
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
  getAllScheduleTypesUsingGETResponse(params: ScheduleTypeResourceService.GetAllScheduleTypesUsingGETParams): __Observable<__StrictHttpResponse<Array<ScheduleTypeDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.scheduleIdSpecified != null) __params = __params.set('scheduleId.specified', params.scheduleIdSpecified.toString());
    if (params.scheduleIdNotEquals != null) __params = __params.set('scheduleId.notEquals', params.scheduleIdNotEquals.toString());
    if (params.scheduleIdLessThanOrEqual != null) __params = __params.set('scheduleId.lessThanOrEqual', params.scheduleIdLessThanOrEqual.toString());
    if (params.scheduleIdLessThan != null) __params = __params.set('scheduleId.lessThan', params.scheduleIdLessThan.toString());
    (params.scheduleIdIn || []).forEach(val => {if (val != null) __params = __params.append('scheduleId.in', val.toString())});
    if (params.scheduleIdGreaterThanOrEqual != null) __params = __params.set('scheduleId.greaterThanOrEqual', params.scheduleIdGreaterThanOrEqual.toString());
    if (params.scheduleIdGreaterThan != null) __params = __params.set('scheduleId.greaterThan', params.scheduleIdGreaterThan.toString());
    if (params.scheduleIdEquals != null) __params = __params.set('scheduleId.equals', params.scheduleIdEquals.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
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
      this.rootUrl + `/api/schedule-types`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ScheduleTypeDTO>>;
      })
    );
  }
  /**
   * getAllScheduleTypes
   * @param params The `ScheduleTypeResourceService.GetAllScheduleTypesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `scheduleId.specified`:
   *
   * - `scheduleId.notEquals`:
   *
   * - `scheduleId.lessThanOrEqual`:
   *
   * - `scheduleId.lessThan`:
   *
   * - `scheduleId.in`:
   *
   * - `scheduleId.greaterThanOrEqual`:
   *
   * - `scheduleId.greaterThan`:
   *
   * - `scheduleId.equals`:
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
  getAllScheduleTypesUsingGET(params: ScheduleTypeResourceService.GetAllScheduleTypesUsingGETParams): __Observable<Array<ScheduleTypeDTO>> {
    return this.getAllScheduleTypesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ScheduleTypeDTO>)
    );
  }

  /**
   * createScheduleType
   * @param scheduleTypeDTO scheduleTypeDTO
   * @return OK
   */
  createScheduleTypeUsingPOSTResponse(scheduleTypeDTO: ScheduleTypeDTO): __Observable<__StrictHttpResponse<ScheduleTypeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = scheduleTypeDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/schedule-types`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ScheduleTypeDTO>;
      })
    );
  }
  /**
   * createScheduleType
   * @param scheduleTypeDTO scheduleTypeDTO
   * @return OK
   */
  createScheduleTypeUsingPOST(scheduleTypeDTO: ScheduleTypeDTO): __Observable<ScheduleTypeDTO> {
    return this.createScheduleTypeUsingPOSTResponse(scheduleTypeDTO).pipe(
      __map(_r => _r.body as ScheduleTypeDTO)
    );
  }

  /**
   * updateScheduleType
   * @param scheduleTypeDTO scheduleTypeDTO
   * @return OK
   */
  updateScheduleTypeUsingPUTResponse(scheduleTypeDTO: ScheduleTypeDTO): __Observable<__StrictHttpResponse<ScheduleTypeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = scheduleTypeDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/schedule-types`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ScheduleTypeDTO>;
      })
    );
  }
  /**
   * updateScheduleType
   * @param scheduleTypeDTO scheduleTypeDTO
   * @return OK
   */
  updateScheduleTypeUsingPUT(scheduleTypeDTO: ScheduleTypeDTO): __Observable<ScheduleTypeDTO> {
    return this.updateScheduleTypeUsingPUTResponse(scheduleTypeDTO).pipe(
      __map(_r => _r.body as ScheduleTypeDTO)
    );
  }

  /**
   * countScheduleTypes
   * @param params The `ScheduleTypeResourceService.CountScheduleTypesUsingGETParams` containing the following parameters:
   *
   * - `scheduleId.specified`:
   *
   * - `scheduleId.notEquals`:
   *
   * - `scheduleId.lessThanOrEqual`:
   *
   * - `scheduleId.lessThan`:
   *
   * - `scheduleId.in`:
   *
   * - `scheduleId.greaterThanOrEqual`:
   *
   * - `scheduleId.greaterThan`:
   *
   * - `scheduleId.equals`:
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
  countScheduleTypesUsingGETResponse(params: ScheduleTypeResourceService.CountScheduleTypesUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.scheduleIdSpecified != null) __params = __params.set('scheduleId.specified', params.scheduleIdSpecified.toString());
    if (params.scheduleIdNotEquals != null) __params = __params.set('scheduleId.notEquals', params.scheduleIdNotEquals.toString());
    if (params.scheduleIdLessThanOrEqual != null) __params = __params.set('scheduleId.lessThanOrEqual', params.scheduleIdLessThanOrEqual.toString());
    if (params.scheduleIdLessThan != null) __params = __params.set('scheduleId.lessThan', params.scheduleIdLessThan.toString());
    (params.scheduleIdIn || []).forEach(val => {if (val != null) __params = __params.append('scheduleId.in', val.toString())});
    if (params.scheduleIdGreaterThanOrEqual != null) __params = __params.set('scheduleId.greaterThanOrEqual', params.scheduleIdGreaterThanOrEqual.toString());
    if (params.scheduleIdGreaterThan != null) __params = __params.set('scheduleId.greaterThan', params.scheduleIdGreaterThan.toString());
    if (params.scheduleIdEquals != null) __params = __params.set('scheduleId.equals', params.scheduleIdEquals.toString());
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
      this.rootUrl + `/api/schedule-types/count`,
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
   * countScheduleTypes
   * @param params The `ScheduleTypeResourceService.CountScheduleTypesUsingGETParams` containing the following parameters:
   *
   * - `scheduleId.specified`:
   *
   * - `scheduleId.notEquals`:
   *
   * - `scheduleId.lessThanOrEqual`:
   *
   * - `scheduleId.lessThan`:
   *
   * - `scheduleId.in`:
   *
   * - `scheduleId.greaterThanOrEqual`:
   *
   * - `scheduleId.greaterThan`:
   *
   * - `scheduleId.equals`:
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
  countScheduleTypesUsingGET(params: ScheduleTypeResourceService.CountScheduleTypesUsingGETParams): __Observable<number> {
    return this.countScheduleTypesUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getScheduleType
   * @param id id
   * @return OK
   */
  getScheduleTypeUsingGETResponse(id: number): __Observable<__StrictHttpResponse<ScheduleTypeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/schedule-types/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ScheduleTypeDTO>;
      })
    );
  }
  /**
   * getScheduleType
   * @param id id
   * @return OK
   */
  getScheduleTypeUsingGET(id: number): __Observable<ScheduleTypeDTO> {
    return this.getScheduleTypeUsingGETResponse(id).pipe(
      __map(_r => _r.body as ScheduleTypeDTO)
    );
  }

  /**
   * deleteScheduleType
   * @param id id
   */
  deleteScheduleTypeUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/schedule-types/${encodeURIComponent(id)}`,
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
   * deleteScheduleType
   * @param id id
   */
  deleteScheduleTypeUsingDELETE(id: number): __Observable<null> {
    return this.deleteScheduleTypeUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ScheduleTypeResourceService {

  /**
   * Parameters for getAllScheduleTypesUsingGET
   */
  export interface GetAllScheduleTypesUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    scheduleIdSpecified?: boolean;
    scheduleIdNotEquals?: number;
    scheduleIdLessThanOrEqual?: number;
    scheduleIdLessThan?: number;
    scheduleIdIn?: Array<number>;
    scheduleIdGreaterThanOrEqual?: number;
    scheduleIdGreaterThan?: number;
    scheduleIdEquals?: number;

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
   * Parameters for countScheduleTypesUsingGET
   */
  export interface CountScheduleTypesUsingGETParams {
    scheduleIdSpecified?: boolean;
    scheduleIdNotEquals?: number;
    scheduleIdLessThanOrEqual?: number;
    scheduleIdLessThan?: number;
    scheduleIdIn?: Array<number>;
    scheduleIdGreaterThanOrEqual?: number;
    scheduleIdGreaterThan?: number;
    scheduleIdEquals?: number;
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

export { ScheduleTypeResourceService }
