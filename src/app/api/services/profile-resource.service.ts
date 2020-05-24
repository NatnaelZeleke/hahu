/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProfileDTO } from '../models/profile-dto';

/**
 * Profile Resource
 */
@Injectable({
  providedIn: 'root',
})
class ProfileResourceService extends __BaseService {
  static readonly getAllProfilesUsingGETPath = '/api/profiles';
  static readonly createProfileUsingPOSTPath = '/api/profiles';
  static readonly updateProfileUsingPUTPath = '/api/profiles';
  static readonly countProfilesUsingGETPath = '/api/profiles/count';
  static readonly getProfileUsingGETPath = '/api/profiles/{id}';
  static readonly deleteProfileUsingDELETEPath = '/api/profiles/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllProfiles
   * @param params The `ProfileResourceService.GetAllProfilesUsingGETParams` containing the following parameters:
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
   * - `phone.specified`:
   *
   * - `phone.notEquals`:
   *
   * - `phone.in`:
   *
   * - `phone.equals`:
   *
   * - `phone.doesNotContain`:
   *
   * - `phone.contains`:
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
   * - `familyId.specified`:
   *
   * - `familyId.notEquals`:
   *
   * - `familyId.lessThanOrEqual`:
   *
   * - `familyId.lessThan`:
   *
   * - `familyId.in`:
   *
   * - `familyId.greaterThanOrEqual`:
   *
   * - `familyId.greaterThan`:
   *
   * - `familyId.equals`:
   *
   * @return OK
   */
  getAllProfilesUsingGETResponse(params: ProfileResourceService.GetAllProfilesUsingGETParams): __Observable<__StrictHttpResponse<Array<ProfileDTO>>> {
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
    if (params.phoneSpecified != null) __params = __params.set('phone.specified', params.phoneSpecified.toString());
    if (params.phoneNotEquals != null) __params = __params.set('phone.notEquals', params.phoneNotEquals.toString());
    (params.phoneIn || []).forEach(val => {if (val != null) __params = __params.append('phone.in', val.toString())});
    if (params.phoneEquals != null) __params = __params.set('phone.equals', params.phoneEquals.toString());
    if (params.phoneDoesNotContain != null) __params = __params.set('phone.doesNotContain', params.phoneDoesNotContain.toString());
    if (params.phoneContains != null) __params = __params.set('phone.contains', params.phoneContains.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.familyIdSpecified != null) __params = __params.set('familyId.specified', params.familyIdSpecified.toString());
    if (params.familyIdNotEquals != null) __params = __params.set('familyId.notEquals', params.familyIdNotEquals.toString());
    if (params.familyIdLessThanOrEqual != null) __params = __params.set('familyId.lessThanOrEqual', params.familyIdLessThanOrEqual.toString());
    if (params.familyIdLessThan != null) __params = __params.set('familyId.lessThan', params.familyIdLessThan.toString());
    (params.familyIdIn || []).forEach(val => {if (val != null) __params = __params.append('familyId.in', val.toString())});
    if (params.familyIdGreaterThanOrEqual != null) __params = __params.set('familyId.greaterThanOrEqual', params.familyIdGreaterThanOrEqual.toString());
    if (params.familyIdGreaterThan != null) __params = __params.set('familyId.greaterThan', params.familyIdGreaterThan.toString());
    if (params.familyIdEquals != null) __params = __params.set('familyId.equals', params.familyIdEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/profiles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProfileDTO>>;
      })
    );
  }
  /**
   * getAllProfiles
   * @param params The `ProfileResourceService.GetAllProfilesUsingGETParams` containing the following parameters:
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
   * - `phone.specified`:
   *
   * - `phone.notEquals`:
   *
   * - `phone.in`:
   *
   * - `phone.equals`:
   *
   * - `phone.doesNotContain`:
   *
   * - `phone.contains`:
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
   * - `familyId.specified`:
   *
   * - `familyId.notEquals`:
   *
   * - `familyId.lessThanOrEqual`:
   *
   * - `familyId.lessThan`:
   *
   * - `familyId.in`:
   *
   * - `familyId.greaterThanOrEqual`:
   *
   * - `familyId.greaterThan`:
   *
   * - `familyId.equals`:
   *
   * @return OK
   */
  getAllProfilesUsingGET(params: ProfileResourceService.GetAllProfilesUsingGETParams): __Observable<Array<ProfileDTO>> {
    return this.getAllProfilesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ProfileDTO>)
    );
  }

  /**
   * createProfile
   * @param profileDTO profileDTO
   * @return OK
   */
  createProfileUsingPOSTResponse(profileDTO: ProfileDTO): __Observable<__StrictHttpResponse<ProfileDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = profileDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/profiles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProfileDTO>;
      })
    );
  }
  /**
   * createProfile
   * @param profileDTO profileDTO
   * @return OK
   */
  createProfileUsingPOST(profileDTO: ProfileDTO): __Observable<ProfileDTO> {
    return this.createProfileUsingPOSTResponse(profileDTO).pipe(
      __map(_r => _r.body as ProfileDTO)
    );
  }

  /**
   * updateProfile
   * @param profileDTO profileDTO
   * @return OK
   */
  updateProfileUsingPUTResponse(profileDTO: ProfileDTO): __Observable<__StrictHttpResponse<ProfileDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = profileDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/profiles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProfileDTO>;
      })
    );
  }
  /**
   * updateProfile
   * @param profileDTO profileDTO
   * @return OK
   */
  updateProfileUsingPUT(profileDTO: ProfileDTO): __Observable<ProfileDTO> {
    return this.updateProfileUsingPUTResponse(profileDTO).pipe(
      __map(_r => _r.body as ProfileDTO)
    );
  }

  /**
   * countProfiles
   * @param params The `ProfileResourceService.CountProfilesUsingGETParams` containing the following parameters:
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
   * - `phone.specified`:
   *
   * - `phone.notEquals`:
   *
   * - `phone.in`:
   *
   * - `phone.equals`:
   *
   * - `phone.doesNotContain`:
   *
   * - `phone.contains`:
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
   * - `familyId.specified`:
   *
   * - `familyId.notEquals`:
   *
   * - `familyId.lessThanOrEqual`:
   *
   * - `familyId.lessThan`:
   *
   * - `familyId.in`:
   *
   * - `familyId.greaterThanOrEqual`:
   *
   * - `familyId.greaterThan`:
   *
   * - `familyId.equals`:
   *
   * @return OK
   */
  countProfilesUsingGETResponse(params: ProfileResourceService.CountProfilesUsingGETParams): __Observable<__StrictHttpResponse<number>> {
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
    if (params.phoneSpecified != null) __params = __params.set('phone.specified', params.phoneSpecified.toString());
    if (params.phoneNotEquals != null) __params = __params.set('phone.notEquals', params.phoneNotEquals.toString());
    (params.phoneIn || []).forEach(val => {if (val != null) __params = __params.append('phone.in', val.toString())});
    if (params.phoneEquals != null) __params = __params.set('phone.equals', params.phoneEquals.toString());
    if (params.phoneDoesNotContain != null) __params = __params.set('phone.doesNotContain', params.phoneDoesNotContain.toString());
    if (params.phoneContains != null) __params = __params.set('phone.contains', params.phoneContains.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.familyIdSpecified != null) __params = __params.set('familyId.specified', params.familyIdSpecified.toString());
    if (params.familyIdNotEquals != null) __params = __params.set('familyId.notEquals', params.familyIdNotEquals.toString());
    if (params.familyIdLessThanOrEqual != null) __params = __params.set('familyId.lessThanOrEqual', params.familyIdLessThanOrEqual.toString());
    if (params.familyIdLessThan != null) __params = __params.set('familyId.lessThan', params.familyIdLessThan.toString());
    (params.familyIdIn || []).forEach(val => {if (val != null) __params = __params.append('familyId.in', val.toString())});
    if (params.familyIdGreaterThanOrEqual != null) __params = __params.set('familyId.greaterThanOrEqual', params.familyIdGreaterThanOrEqual.toString());
    if (params.familyIdGreaterThan != null) __params = __params.set('familyId.greaterThan', params.familyIdGreaterThan.toString());
    if (params.familyIdEquals != null) __params = __params.set('familyId.equals', params.familyIdEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/profiles/count`,
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
   * countProfiles
   * @param params The `ProfileResourceService.CountProfilesUsingGETParams` containing the following parameters:
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
   * - `phone.specified`:
   *
   * - `phone.notEquals`:
   *
   * - `phone.in`:
   *
   * - `phone.equals`:
   *
   * - `phone.doesNotContain`:
   *
   * - `phone.contains`:
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
   * - `familyId.specified`:
   *
   * - `familyId.notEquals`:
   *
   * - `familyId.lessThanOrEqual`:
   *
   * - `familyId.lessThan`:
   *
   * - `familyId.in`:
   *
   * - `familyId.greaterThanOrEqual`:
   *
   * - `familyId.greaterThan`:
   *
   * - `familyId.equals`:
   *
   * @return OK
   */
  countProfilesUsingGET(params: ProfileResourceService.CountProfilesUsingGETParams): __Observable<number> {
    return this.countProfilesUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getProfile
   * @param id id
   * @return OK
   */
  getProfileUsingGETResponse(id: number): __Observable<__StrictHttpResponse<ProfileDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/profiles/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProfileDTO>;
      })
    );
  }
  /**
   * getProfile
   * @param id id
   * @return OK
   */
  getProfileUsingGET(id: number): __Observable<ProfileDTO> {
    return this.getProfileUsingGETResponse(id).pipe(
      __map(_r => _r.body as ProfileDTO)
    );
  }

  /**
   * deleteProfile
   * @param id id
   */
  deleteProfileUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/profiles/${encodeURIComponent(id)}`,
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
   * deleteProfile
   * @param id id
   */
  deleteProfileUsingDELETE(id: number): __Observable<null> {
    return this.deleteProfileUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ProfileResourceService {

  /**
   * Parameters for getAllProfilesUsingGET
   */
  export interface GetAllProfilesUsingGETParams {
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
    phoneSpecified?: boolean;
    phoneNotEquals?: string;
    phoneIn?: Array<string>;
    phoneEquals?: string;
    phoneDoesNotContain?: string;
    phoneContains?: string;

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
    familyIdSpecified?: boolean;
    familyIdNotEquals?: number;
    familyIdLessThanOrEqual?: number;
    familyIdLessThan?: number;
    familyIdIn?: Array<number>;
    familyIdGreaterThanOrEqual?: number;
    familyIdGreaterThan?: number;
    familyIdEquals?: number;
  }

  /**
   * Parameters for countProfilesUsingGET
   */
  export interface CountProfilesUsingGETParams {
    userIdSpecified?: boolean;
    userIdNotEquals?: number;
    userIdLessThanOrEqual?: number;
    userIdLessThan?: number;
    userIdIn?: Array<number>;
    userIdGreaterThanOrEqual?: number;
    userIdGreaterThan?: number;
    userIdEquals?: number;
    phoneSpecified?: boolean;
    phoneNotEquals?: string;
    phoneIn?: Array<string>;
    phoneEquals?: string;
    phoneDoesNotContain?: string;
    phoneContains?: string;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    familyIdSpecified?: boolean;
    familyIdNotEquals?: number;
    familyIdLessThanOrEqual?: number;
    familyIdLessThan?: number;
    familyIdIn?: Array<number>;
    familyIdGreaterThanOrEqual?: number;
    familyIdGreaterThan?: number;
    familyIdEquals?: number;
  }
}

export { ProfileResourceService }
