/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UsersConnectionDTO } from '../models/users-connection-dto';

/**
 * Users Connection Resource
 */
@Injectable({
  providedIn: 'root',
})
class UsersConnectionResourceService extends __BaseService {
  static readonly getAllUsersConnectionsUsingGETPath = '/api/users-connections';
  static readonly createUsersConnectionUsingPOSTPath = '/api/users-connections';
  static readonly updateUsersConnectionUsingPUTPath = '/api/users-connections';
  static readonly countUsersConnectionsUsingGETPath = '/api/users-connections/count';
  static readonly getUsersConnectionUsingGETPath = '/api/users-connections/{id}';
  static readonly deleteUsersConnectionUsingDELETEPath = '/api/users-connections/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllUsersConnections
   * @param params The `UsersConnectionResourceService.GetAllUsersConnectionsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `registeredTime.specified`:
   *
   * - `registeredTime.notEquals`:
   *
   * - `registeredTime.lessThanOrEqual`:
   *
   * - `registeredTime.lessThan`:
   *
   * - `registeredTime.in[0].nano`:
   *
   * - `registeredTime.in[0].epochSecond`:
   *
   * - `registeredTime.greaterThanOrEqual`:
   *
   * - `registeredTime.greaterThan`:
   *
   * - `registeredTime.equals`:
   *
   * - `page`: Page number of the requested page
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
   * - `followingId.specified`:
   *
   * - `followingId.notEquals`:
   *
   * - `followingId.lessThanOrEqual`:
   *
   * - `followingId.lessThan`:
   *
   * - `followingId.in`:
   *
   * - `followingId.greaterThanOrEqual`:
   *
   * - `followingId.greaterThan`:
   *
   * - `followingId.equals`:
   *
   * - `followerId.specified`:
   *
   * - `followerId.notEquals`:
   *
   * - `followerId.lessThanOrEqual`:
   *
   * - `followerId.lessThan`:
   *
   * - `followerId.in`:
   *
   * - `followerId.greaterThanOrEqual`:
   *
   * - `followerId.greaterThan`:
   *
   * - `followerId.equals`:
   *
   * @return OK
   */
  getAllUsersConnectionsUsingGETResponse(params: UsersConnectionResourceService.GetAllUsersConnectionsUsingGETParams): __Observable<__StrictHttpResponse<Array<UsersConnectionDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.registeredTimeSpecified != null) __params = __params.set('registeredTime.specified', params.registeredTimeSpecified.toString());
    if (params.registeredTimeNotEquals != null) __params = __params.set('registeredTime.notEquals', params.registeredTimeNotEquals.toString());
    if (params.registeredTimeLessThanOrEqual != null) __params = __params.set('registeredTime.lessThanOrEqual', params.registeredTimeLessThanOrEqual.toString());
    if (params.registeredTimeLessThan != null) __params = __params.set('registeredTime.lessThan', params.registeredTimeLessThan.toString());
    if (params.registeredTimeIn0Nano != null) __params = __params.set('registeredTime.in[0].nano', params.registeredTimeIn0Nano.toString());
    if (params.registeredTimeIn0EpochSecond != null) __params = __params.set('registeredTime.in[0].epochSecond', params.registeredTimeIn0EpochSecond.toString());
    if (params.registeredTimeGreaterThanOrEqual != null) __params = __params.set('registeredTime.greaterThanOrEqual', params.registeredTimeGreaterThanOrEqual.toString());
    if (params.registeredTimeGreaterThan != null) __params = __params.set('registeredTime.greaterThan', params.registeredTimeGreaterThan.toString());
    if (params.registeredTimeEquals != null) __params = __params.set('registeredTime.equals', params.registeredTimeEquals.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.followingIdSpecified != null) __params = __params.set('followingId.specified', params.followingIdSpecified.toString());
    if (params.followingIdNotEquals != null) __params = __params.set('followingId.notEquals', params.followingIdNotEquals.toString());
    if (params.followingIdLessThanOrEqual != null) __params = __params.set('followingId.lessThanOrEqual', params.followingIdLessThanOrEqual.toString());
    if (params.followingIdLessThan != null) __params = __params.set('followingId.lessThan', params.followingIdLessThan.toString());
    (params.followingIdIn || []).forEach(val => {if (val != null) __params = __params.append('followingId.in', val.toString())});
    if (params.followingIdGreaterThanOrEqual != null) __params = __params.set('followingId.greaterThanOrEqual', params.followingIdGreaterThanOrEqual.toString());
    if (params.followingIdGreaterThan != null) __params = __params.set('followingId.greaterThan', params.followingIdGreaterThan.toString());
    if (params.followingIdEquals != null) __params = __params.set('followingId.equals', params.followingIdEquals.toString());
    if (params.followerIdSpecified != null) __params = __params.set('followerId.specified', params.followerIdSpecified.toString());
    if (params.followerIdNotEquals != null) __params = __params.set('followerId.notEquals', params.followerIdNotEquals.toString());
    if (params.followerIdLessThanOrEqual != null) __params = __params.set('followerId.lessThanOrEqual', params.followerIdLessThanOrEqual.toString());
    if (params.followerIdLessThan != null) __params = __params.set('followerId.lessThan', params.followerIdLessThan.toString());
    (params.followerIdIn || []).forEach(val => {if (val != null) __params = __params.append('followerId.in', val.toString())});
    if (params.followerIdGreaterThanOrEqual != null) __params = __params.set('followerId.greaterThanOrEqual', params.followerIdGreaterThanOrEqual.toString());
    if (params.followerIdGreaterThan != null) __params = __params.set('followerId.greaterThan', params.followerIdGreaterThan.toString());
    if (params.followerIdEquals != null) __params = __params.set('followerId.equals', params.followerIdEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users-connections`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UsersConnectionDTO>>;
      })
    );
  }
  /**
   * getAllUsersConnections
   * @param params The `UsersConnectionResourceService.GetAllUsersConnectionsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `registeredTime.specified`:
   *
   * - `registeredTime.notEquals`:
   *
   * - `registeredTime.lessThanOrEqual`:
   *
   * - `registeredTime.lessThan`:
   *
   * - `registeredTime.in[0].nano`:
   *
   * - `registeredTime.in[0].epochSecond`:
   *
   * - `registeredTime.greaterThanOrEqual`:
   *
   * - `registeredTime.greaterThan`:
   *
   * - `registeredTime.equals`:
   *
   * - `page`: Page number of the requested page
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
   * - `followingId.specified`:
   *
   * - `followingId.notEquals`:
   *
   * - `followingId.lessThanOrEqual`:
   *
   * - `followingId.lessThan`:
   *
   * - `followingId.in`:
   *
   * - `followingId.greaterThanOrEqual`:
   *
   * - `followingId.greaterThan`:
   *
   * - `followingId.equals`:
   *
   * - `followerId.specified`:
   *
   * - `followerId.notEquals`:
   *
   * - `followerId.lessThanOrEqual`:
   *
   * - `followerId.lessThan`:
   *
   * - `followerId.in`:
   *
   * - `followerId.greaterThanOrEqual`:
   *
   * - `followerId.greaterThan`:
   *
   * - `followerId.equals`:
   *
   * @return OK
   */
  getAllUsersConnectionsUsingGET(params: UsersConnectionResourceService.GetAllUsersConnectionsUsingGETParams): __Observable<Array<UsersConnectionDTO>> {
    return this.getAllUsersConnectionsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<UsersConnectionDTO>)
    );
  }

  /**
   * createUsersConnection
   * @param usersConnectionDTO usersConnectionDTO
   * @return OK
   */
  createUsersConnectionUsingPOSTResponse(usersConnectionDTO: UsersConnectionDTO): __Observable<__StrictHttpResponse<UsersConnectionDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = usersConnectionDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/users-connections`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UsersConnectionDTO>;
      })
    );
  }
  /**
   * createUsersConnection
   * @param usersConnectionDTO usersConnectionDTO
   * @return OK
   */
  createUsersConnectionUsingPOST(usersConnectionDTO: UsersConnectionDTO): __Observable<UsersConnectionDTO> {
    return this.createUsersConnectionUsingPOSTResponse(usersConnectionDTO).pipe(
      __map(_r => _r.body as UsersConnectionDTO)
    );
  }

  /**
   * updateUsersConnection
   * @param usersConnectionDTO usersConnectionDTO
   * @return OK
   */
  updateUsersConnectionUsingPUTResponse(usersConnectionDTO: UsersConnectionDTO): __Observable<__StrictHttpResponse<UsersConnectionDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = usersConnectionDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/users-connections`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UsersConnectionDTO>;
      })
    );
  }
  /**
   * updateUsersConnection
   * @param usersConnectionDTO usersConnectionDTO
   * @return OK
   */
  updateUsersConnectionUsingPUT(usersConnectionDTO: UsersConnectionDTO): __Observable<UsersConnectionDTO> {
    return this.updateUsersConnectionUsingPUTResponse(usersConnectionDTO).pipe(
      __map(_r => _r.body as UsersConnectionDTO)
    );
  }

  /**
   * countUsersConnections
   * @param params The `UsersConnectionResourceService.CountUsersConnectionsUsingGETParams` containing the following parameters:
   *
   * - `registeredTime.specified`:
   *
   * - `registeredTime.notEquals`:
   *
   * - `registeredTime.lessThanOrEqual`:
   *
   * - `registeredTime.lessThan`:
   *
   * - `registeredTime.in[0].nano`:
   *
   * - `registeredTime.in[0].epochSecond`:
   *
   * - `registeredTime.greaterThanOrEqual`:
   *
   * - `registeredTime.greaterThan`:
   *
   * - `registeredTime.equals`:
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
   * - `followingId.specified`:
   *
   * - `followingId.notEquals`:
   *
   * - `followingId.lessThanOrEqual`:
   *
   * - `followingId.lessThan`:
   *
   * - `followingId.in`:
   *
   * - `followingId.greaterThanOrEqual`:
   *
   * - `followingId.greaterThan`:
   *
   * - `followingId.equals`:
   *
   * - `followerId.specified`:
   *
   * - `followerId.notEquals`:
   *
   * - `followerId.lessThanOrEqual`:
   *
   * - `followerId.lessThan`:
   *
   * - `followerId.in`:
   *
   * - `followerId.greaterThanOrEqual`:
   *
   * - `followerId.greaterThan`:
   *
   * - `followerId.equals`:
   *
   * @return OK
   */
  countUsersConnectionsUsingGETResponse(params: UsersConnectionResourceService.CountUsersConnectionsUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.registeredTimeSpecified != null) __params = __params.set('registeredTime.specified', params.registeredTimeSpecified.toString());
    if (params.registeredTimeNotEquals != null) __params = __params.set('registeredTime.notEquals', params.registeredTimeNotEquals.toString());
    if (params.registeredTimeLessThanOrEqual != null) __params = __params.set('registeredTime.lessThanOrEqual', params.registeredTimeLessThanOrEqual.toString());
    if (params.registeredTimeLessThan != null) __params = __params.set('registeredTime.lessThan', params.registeredTimeLessThan.toString());
    if (params.registeredTimeIn0Nano != null) __params = __params.set('registeredTime.in[0].nano', params.registeredTimeIn0Nano.toString());
    if (params.registeredTimeIn0EpochSecond != null) __params = __params.set('registeredTime.in[0].epochSecond', params.registeredTimeIn0EpochSecond.toString());
    if (params.registeredTimeGreaterThanOrEqual != null) __params = __params.set('registeredTime.greaterThanOrEqual', params.registeredTimeGreaterThanOrEqual.toString());
    if (params.registeredTimeGreaterThan != null) __params = __params.set('registeredTime.greaterThan', params.registeredTimeGreaterThan.toString());
    if (params.registeredTimeEquals != null) __params = __params.set('registeredTime.equals', params.registeredTimeEquals.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.followingIdSpecified != null) __params = __params.set('followingId.specified', params.followingIdSpecified.toString());
    if (params.followingIdNotEquals != null) __params = __params.set('followingId.notEquals', params.followingIdNotEquals.toString());
    if (params.followingIdLessThanOrEqual != null) __params = __params.set('followingId.lessThanOrEqual', params.followingIdLessThanOrEqual.toString());
    if (params.followingIdLessThan != null) __params = __params.set('followingId.lessThan', params.followingIdLessThan.toString());
    (params.followingIdIn || []).forEach(val => {if (val != null) __params = __params.append('followingId.in', val.toString())});
    if (params.followingIdGreaterThanOrEqual != null) __params = __params.set('followingId.greaterThanOrEqual', params.followingIdGreaterThanOrEqual.toString());
    if (params.followingIdGreaterThan != null) __params = __params.set('followingId.greaterThan', params.followingIdGreaterThan.toString());
    if (params.followingIdEquals != null) __params = __params.set('followingId.equals', params.followingIdEquals.toString());
    if (params.followerIdSpecified != null) __params = __params.set('followerId.specified', params.followerIdSpecified.toString());
    if (params.followerIdNotEquals != null) __params = __params.set('followerId.notEquals', params.followerIdNotEquals.toString());
    if (params.followerIdLessThanOrEqual != null) __params = __params.set('followerId.lessThanOrEqual', params.followerIdLessThanOrEqual.toString());
    if (params.followerIdLessThan != null) __params = __params.set('followerId.lessThan', params.followerIdLessThan.toString());
    (params.followerIdIn || []).forEach(val => {if (val != null) __params = __params.append('followerId.in', val.toString())});
    if (params.followerIdGreaterThanOrEqual != null) __params = __params.set('followerId.greaterThanOrEqual', params.followerIdGreaterThanOrEqual.toString());
    if (params.followerIdGreaterThan != null) __params = __params.set('followerId.greaterThan', params.followerIdGreaterThan.toString());
    if (params.followerIdEquals != null) __params = __params.set('followerId.equals', params.followerIdEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users-connections/count`,
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
   * countUsersConnections
   * @param params The `UsersConnectionResourceService.CountUsersConnectionsUsingGETParams` containing the following parameters:
   *
   * - `registeredTime.specified`:
   *
   * - `registeredTime.notEquals`:
   *
   * - `registeredTime.lessThanOrEqual`:
   *
   * - `registeredTime.lessThan`:
   *
   * - `registeredTime.in[0].nano`:
   *
   * - `registeredTime.in[0].epochSecond`:
   *
   * - `registeredTime.greaterThanOrEqual`:
   *
   * - `registeredTime.greaterThan`:
   *
   * - `registeredTime.equals`:
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
   * - `followingId.specified`:
   *
   * - `followingId.notEquals`:
   *
   * - `followingId.lessThanOrEqual`:
   *
   * - `followingId.lessThan`:
   *
   * - `followingId.in`:
   *
   * - `followingId.greaterThanOrEqual`:
   *
   * - `followingId.greaterThan`:
   *
   * - `followingId.equals`:
   *
   * - `followerId.specified`:
   *
   * - `followerId.notEquals`:
   *
   * - `followerId.lessThanOrEqual`:
   *
   * - `followerId.lessThan`:
   *
   * - `followerId.in`:
   *
   * - `followerId.greaterThanOrEqual`:
   *
   * - `followerId.greaterThan`:
   *
   * - `followerId.equals`:
   *
   * @return OK
   */
  countUsersConnectionsUsingGET(params: UsersConnectionResourceService.CountUsersConnectionsUsingGETParams): __Observable<number> {
    return this.countUsersConnectionsUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getUsersConnection
   * @param id id
   * @return OK
   */
  getUsersConnectionUsingGETResponse(id: number): __Observable<__StrictHttpResponse<UsersConnectionDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users-connections/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UsersConnectionDTO>;
      })
    );
  }
  /**
   * getUsersConnection
   * @param id id
   * @return OK
   */
  getUsersConnectionUsingGET(id: number): __Observable<UsersConnectionDTO> {
    return this.getUsersConnectionUsingGETResponse(id).pipe(
      __map(_r => _r.body as UsersConnectionDTO)
    );
  }

  /**
   * deleteUsersConnection
   * @param id id
   */
  deleteUsersConnectionUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/users-connections/${encodeURIComponent(id)}`,
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
   * deleteUsersConnection
   * @param id id
   */
  deleteUsersConnectionUsingDELETE(id: number): __Observable<null> {
    return this.deleteUsersConnectionUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UsersConnectionResourceService {

  /**
   * Parameters for getAllUsersConnectionsUsingGET
   */
  export interface GetAllUsersConnectionsUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    registeredTimeSpecified?: boolean;
    registeredTimeNotEquals?: string;
    registeredTimeLessThanOrEqual?: string;
    registeredTimeLessThan?: string;
    registeredTimeIn0Nano?: number;
    registeredTimeIn0EpochSecond?: number;
    registeredTimeGreaterThanOrEqual?: string;
    registeredTimeGreaterThan?: string;
    registeredTimeEquals?: string;

    /**
     * Page number of the requested page
     */
    page?: number;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    followingIdSpecified?: boolean;
    followingIdNotEquals?: number;
    followingIdLessThanOrEqual?: number;
    followingIdLessThan?: number;
    followingIdIn?: Array<number>;
    followingIdGreaterThanOrEqual?: number;
    followingIdGreaterThan?: number;
    followingIdEquals?: number;
    followerIdSpecified?: boolean;
    followerIdNotEquals?: number;
    followerIdLessThanOrEqual?: number;
    followerIdLessThan?: number;
    followerIdIn?: Array<number>;
    followerIdGreaterThanOrEqual?: number;
    followerIdGreaterThan?: number;
    followerIdEquals?: number;
  }

  /**
   * Parameters for countUsersConnectionsUsingGET
   */
  export interface CountUsersConnectionsUsingGETParams {
    registeredTimeSpecified?: boolean;
    registeredTimeNotEquals?: string;
    registeredTimeLessThanOrEqual?: string;
    registeredTimeLessThan?: string;
    registeredTimeIn0Nano?: number;
    registeredTimeIn0EpochSecond?: number;
    registeredTimeGreaterThanOrEqual?: string;
    registeredTimeGreaterThan?: string;
    registeredTimeEquals?: string;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    followingIdSpecified?: boolean;
    followingIdNotEquals?: number;
    followingIdLessThanOrEqual?: number;
    followingIdLessThan?: number;
    followingIdIn?: Array<number>;
    followingIdGreaterThanOrEqual?: number;
    followingIdGreaterThan?: number;
    followingIdEquals?: number;
    followerIdSpecified?: boolean;
    followerIdNotEquals?: number;
    followerIdLessThanOrEqual?: number;
    followerIdLessThan?: number;
    followerIdIn?: Array<number>;
    followerIdGreaterThanOrEqual?: number;
    followerIdGreaterThan?: number;
    followerIdEquals?: number;
  }
}

export { UsersConnectionResourceService }
