/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SchoolDTO } from '../models/school-dto';

/**
 * School Resource
 */
@Injectable({
  providedIn: 'root',
})
class SchoolResourceService extends __BaseService {
  static readonly getAllSchoolsUsingGETPath = '/api/schools';
  static readonly createSchoolUsingPOSTPath = '/api/schools';
  static readonly updateSchoolUsingPUTPath = '/api/schools';
  static readonly countSchoolsUsingGETPath = '/api/schools/count';
  static readonly getSchoolUsingGETPath = '/api/schools/{id}';
  static readonly deleteSchoolUsingDELETEPath = '/api/schools/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllSchools
   * @param params The `SchoolResourceService.GetAllSchoolsUsingGETParams` containing the following parameters:
   *
   * - `website.specified`:
   *
   * - `website.notEquals`:
   *
   * - `website.in`:
   *
   * - `website.equals`:
   *
   * - `website.doesNotContain`:
   *
   * - `website.contains`:
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
   * - `userGroupId.specified`:
   *
   * - `userGroupId.notEquals`:
   *
   * - `userGroupId.lessThanOrEqual`:
   *
   * - `userGroupId.lessThan`:
   *
   * - `userGroupId.in`:
   *
   * - `userGroupId.greaterThanOrEqual`:
   *
   * - `userGroupId.greaterThan`:
   *
   * - `userGroupId.equals`:
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
   * - `locationType.specified`:
   *
   * - `locationType.notEquals`:
   *
   * - `locationType.in`:
   *
   * - `locationType.equals`:
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
   * - `email.specified`:
   *
   * - `email.notEquals`:
   *
   * - `email.in`:
   *
   * - `email.equals`:
   *
   * - `email.doesNotContain`:
   *
   * - `email.contains`:
   *
   * - `aboutType.specified`:
   *
   * - `aboutType.notEquals`:
   *
   * - `aboutType.in`:
   *
   * - `aboutType.equals`:
   *
   * @return OK
   */
  getAllSchoolsUsingGETResponse(params: SchoolResourceService.GetAllSchoolsUsingGETParams): __Observable<__StrictHttpResponse<Array<SchoolDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.websiteSpecified != null) __params = __params.set('website.specified', params.websiteSpecified.toString());
    if (params.websiteNotEquals != null) __params = __params.set('website.notEquals', params.websiteNotEquals.toString());
    (params.websiteIn || []).forEach(val => {if (val != null) __params = __params.append('website.in', val.toString())});
    if (params.websiteEquals != null) __params = __params.set('website.equals', params.websiteEquals.toString());
    if (params.websiteDoesNotContain != null) __params = __params.set('website.doesNotContain', params.websiteDoesNotContain.toString());
    if (params.websiteContains != null) __params = __params.set('website.contains', params.websiteContains.toString());
    if (params.userIdSpecified != null) __params = __params.set('userId.specified', params.userIdSpecified.toString());
    if (params.userIdNotEquals != null) __params = __params.set('userId.notEquals', params.userIdNotEquals.toString());
    if (params.userIdLessThanOrEqual != null) __params = __params.set('userId.lessThanOrEqual', params.userIdLessThanOrEqual.toString());
    if (params.userIdLessThan != null) __params = __params.set('userId.lessThan', params.userIdLessThan.toString());
    (params.userIdIn || []).forEach(val => {if (val != null) __params = __params.append('userId.in', val.toString())});
    if (params.userIdGreaterThanOrEqual != null) __params = __params.set('userId.greaterThanOrEqual', params.userIdGreaterThanOrEqual.toString());
    if (params.userIdGreaterThan != null) __params = __params.set('userId.greaterThan', params.userIdGreaterThan.toString());
    if (params.userIdEquals != null) __params = __params.set('userId.equals', params.userIdEquals.toString());
    if (params.userGroupIdSpecified != null) __params = __params.set('userGroupId.specified', params.userGroupIdSpecified.toString());
    if (params.userGroupIdNotEquals != null) __params = __params.set('userGroupId.notEquals', params.userGroupIdNotEquals.toString());
    if (params.userGroupIdLessThanOrEqual != null) __params = __params.set('userGroupId.lessThanOrEqual', params.userGroupIdLessThanOrEqual.toString());
    if (params.userGroupIdLessThan != null) __params = __params.set('userGroupId.lessThan', params.userGroupIdLessThan.toString());
    (params.userGroupIdIn || []).forEach(val => {if (val != null) __params = __params.append('userGroupId.in', val.toString())});
    if (params.userGroupIdGreaterThanOrEqual != null) __params = __params.set('userGroupId.greaterThanOrEqual', params.userGroupIdGreaterThanOrEqual.toString());
    if (params.userGroupIdGreaterThan != null) __params = __params.set('userGroupId.greaterThan', params.userGroupIdGreaterThan.toString());
    if (params.userGroupIdEquals != null) __params = __params.set('userGroupId.equals', params.userGroupIdEquals.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.phoneSpecified != null) __params = __params.set('phone.specified', params.phoneSpecified.toString());
    if (params.phoneNotEquals != null) __params = __params.set('phone.notEquals', params.phoneNotEquals.toString());
    (params.phoneIn || []).forEach(val => {if (val != null) __params = __params.append('phone.in', val.toString())});
    if (params.phoneEquals != null) __params = __params.set('phone.equals', params.phoneEquals.toString());
    if (params.phoneDoesNotContain != null) __params = __params.set('phone.doesNotContain', params.phoneDoesNotContain.toString());
    if (params.phoneContains != null) __params = __params.set('phone.contains', params.phoneContains.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.nameSpecified != null) __params = __params.set('name.specified', params.nameSpecified.toString());
    if (params.nameNotEquals != null) __params = __params.set('name.notEquals', params.nameNotEquals.toString());
    (params.nameIn || []).forEach(val => {if (val != null) __params = __params.append('name.in', val.toString())});
    if (params.nameEquals != null) __params = __params.set('name.equals', params.nameEquals.toString());
    if (params.nameDoesNotContain != null) __params = __params.set('name.doesNotContain', params.nameDoesNotContain.toString());
    if (params.nameContains != null) __params = __params.set('name.contains', params.nameContains.toString());
    if (params.locationTypeSpecified != null) __params = __params.set('locationType.specified', params.locationTypeSpecified.toString());
    if (params.locationTypeNotEquals != null) __params = __params.set('locationType.notEquals', params.locationTypeNotEquals.toString());
    (params.locationTypeIn || []).forEach(val => {if (val != null) __params = __params.append('locationType.in', val.toString())});
    if (params.locationTypeEquals != null) __params = __params.set('locationType.equals', params.locationTypeEquals.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.emailSpecified != null) __params = __params.set('email.specified', params.emailSpecified.toString());
    if (params.emailNotEquals != null) __params = __params.set('email.notEquals', params.emailNotEquals.toString());
    (params.emailIn || []).forEach(val => {if (val != null) __params = __params.append('email.in', val.toString())});
    if (params.emailEquals != null) __params = __params.set('email.equals', params.emailEquals.toString());
    if (params.emailDoesNotContain != null) __params = __params.set('email.doesNotContain', params.emailDoesNotContain.toString());
    if (params.emailContains != null) __params = __params.set('email.contains', params.emailContains.toString());
    if (params.aboutTypeSpecified != null) __params = __params.set('aboutType.specified', params.aboutTypeSpecified.toString());
    if (params.aboutTypeNotEquals != null) __params = __params.set('aboutType.notEquals', params.aboutTypeNotEquals.toString());
    (params.aboutTypeIn || []).forEach(val => {if (val != null) __params = __params.append('aboutType.in', val.toString())});
    if (params.aboutTypeEquals != null) __params = __params.set('aboutType.equals', params.aboutTypeEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/schools`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SchoolDTO>>;
      })
    );
  }
  /**
   * getAllSchools
   * @param params The `SchoolResourceService.GetAllSchoolsUsingGETParams` containing the following parameters:
   *
   * - `website.specified`:
   *
   * - `website.notEquals`:
   *
   * - `website.in`:
   *
   * - `website.equals`:
   *
   * - `website.doesNotContain`:
   *
   * - `website.contains`:
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
   * - `userGroupId.specified`:
   *
   * - `userGroupId.notEquals`:
   *
   * - `userGroupId.lessThanOrEqual`:
   *
   * - `userGroupId.lessThan`:
   *
   * - `userGroupId.in`:
   *
   * - `userGroupId.greaterThanOrEqual`:
   *
   * - `userGroupId.greaterThan`:
   *
   * - `userGroupId.equals`:
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
   * - `locationType.specified`:
   *
   * - `locationType.notEquals`:
   *
   * - `locationType.in`:
   *
   * - `locationType.equals`:
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
   * - `email.specified`:
   *
   * - `email.notEquals`:
   *
   * - `email.in`:
   *
   * - `email.equals`:
   *
   * - `email.doesNotContain`:
   *
   * - `email.contains`:
   *
   * - `aboutType.specified`:
   *
   * - `aboutType.notEquals`:
   *
   * - `aboutType.in`:
   *
   * - `aboutType.equals`:
   *
   * @return OK
   */
  getAllSchoolsUsingGET(params: SchoolResourceService.GetAllSchoolsUsingGETParams): __Observable<Array<SchoolDTO>> {
    return this.getAllSchoolsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<SchoolDTO>)
    );
  }

  /**
   * createSchool
   * @param schoolDTO schoolDTO
   * @return OK
   */
  createSchoolUsingPOSTResponse(schoolDTO: SchoolDTO): __Observable<__StrictHttpResponse<SchoolDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = schoolDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/schools`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SchoolDTO>;
      })
    );
  }
  /**
   * createSchool
   * @param schoolDTO schoolDTO
   * @return OK
   */
  createSchoolUsingPOST(schoolDTO: SchoolDTO): __Observable<SchoolDTO> {
    return this.createSchoolUsingPOSTResponse(schoolDTO).pipe(
      __map(_r => _r.body as SchoolDTO)
    );
  }

  /**
   * updateSchool
   * @param schoolDTO schoolDTO
   * @return OK
   */
  updateSchoolUsingPUTResponse(schoolDTO: SchoolDTO): __Observable<__StrictHttpResponse<SchoolDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = schoolDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/schools`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SchoolDTO>;
      })
    );
  }
  /**
   * updateSchool
   * @param schoolDTO schoolDTO
   * @return OK
   */
  updateSchoolUsingPUT(schoolDTO: SchoolDTO): __Observable<SchoolDTO> {
    return this.updateSchoolUsingPUTResponse(schoolDTO).pipe(
      __map(_r => _r.body as SchoolDTO)
    );
  }

  /**
   * countSchools
   * @param params The `SchoolResourceService.CountSchoolsUsingGETParams` containing the following parameters:
   *
   * - `website.specified`:
   *
   * - `website.notEquals`:
   *
   * - `website.in`:
   *
   * - `website.equals`:
   *
   * - `website.doesNotContain`:
   *
   * - `website.contains`:
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
   * - `userGroupId.specified`:
   *
   * - `userGroupId.notEquals`:
   *
   * - `userGroupId.lessThanOrEqual`:
   *
   * - `userGroupId.lessThan`:
   *
   * - `userGroupId.in`:
   *
   * - `userGroupId.greaterThanOrEqual`:
   *
   * - `userGroupId.greaterThan`:
   *
   * - `userGroupId.equals`:
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
   * - `locationType.specified`:
   *
   * - `locationType.notEquals`:
   *
   * - `locationType.in`:
   *
   * - `locationType.equals`:
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
   * - `email.specified`:
   *
   * - `email.notEquals`:
   *
   * - `email.in`:
   *
   * - `email.equals`:
   *
   * - `email.doesNotContain`:
   *
   * - `email.contains`:
   *
   * - `aboutType.specified`:
   *
   * - `aboutType.notEquals`:
   *
   * - `aboutType.in`:
   *
   * - `aboutType.equals`:
   *
   * @return OK
   */
  countSchoolsUsingGETResponse(params: SchoolResourceService.CountSchoolsUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.websiteSpecified != null) __params = __params.set('website.specified', params.websiteSpecified.toString());
    if (params.websiteNotEquals != null) __params = __params.set('website.notEquals', params.websiteNotEquals.toString());
    (params.websiteIn || []).forEach(val => {if (val != null) __params = __params.append('website.in', val.toString())});
    if (params.websiteEquals != null) __params = __params.set('website.equals', params.websiteEquals.toString());
    if (params.websiteDoesNotContain != null) __params = __params.set('website.doesNotContain', params.websiteDoesNotContain.toString());
    if (params.websiteContains != null) __params = __params.set('website.contains', params.websiteContains.toString());
    if (params.userIdSpecified != null) __params = __params.set('userId.specified', params.userIdSpecified.toString());
    if (params.userIdNotEquals != null) __params = __params.set('userId.notEquals', params.userIdNotEquals.toString());
    if (params.userIdLessThanOrEqual != null) __params = __params.set('userId.lessThanOrEqual', params.userIdLessThanOrEqual.toString());
    if (params.userIdLessThan != null) __params = __params.set('userId.lessThan', params.userIdLessThan.toString());
    (params.userIdIn || []).forEach(val => {if (val != null) __params = __params.append('userId.in', val.toString())});
    if (params.userIdGreaterThanOrEqual != null) __params = __params.set('userId.greaterThanOrEqual', params.userIdGreaterThanOrEqual.toString());
    if (params.userIdGreaterThan != null) __params = __params.set('userId.greaterThan', params.userIdGreaterThan.toString());
    if (params.userIdEquals != null) __params = __params.set('userId.equals', params.userIdEquals.toString());
    if (params.userGroupIdSpecified != null) __params = __params.set('userGroupId.specified', params.userGroupIdSpecified.toString());
    if (params.userGroupIdNotEquals != null) __params = __params.set('userGroupId.notEquals', params.userGroupIdNotEquals.toString());
    if (params.userGroupIdLessThanOrEqual != null) __params = __params.set('userGroupId.lessThanOrEqual', params.userGroupIdLessThanOrEqual.toString());
    if (params.userGroupIdLessThan != null) __params = __params.set('userGroupId.lessThan', params.userGroupIdLessThan.toString());
    (params.userGroupIdIn || []).forEach(val => {if (val != null) __params = __params.append('userGroupId.in', val.toString())});
    if (params.userGroupIdGreaterThanOrEqual != null) __params = __params.set('userGroupId.greaterThanOrEqual', params.userGroupIdGreaterThanOrEqual.toString());
    if (params.userGroupIdGreaterThan != null) __params = __params.set('userGroupId.greaterThan', params.userGroupIdGreaterThan.toString());
    if (params.userGroupIdEquals != null) __params = __params.set('userGroupId.equals', params.userGroupIdEquals.toString());
    if (params.phoneSpecified != null) __params = __params.set('phone.specified', params.phoneSpecified.toString());
    if (params.phoneNotEquals != null) __params = __params.set('phone.notEquals', params.phoneNotEquals.toString());
    (params.phoneIn || []).forEach(val => {if (val != null) __params = __params.append('phone.in', val.toString())});
    if (params.phoneEquals != null) __params = __params.set('phone.equals', params.phoneEquals.toString());
    if (params.phoneDoesNotContain != null) __params = __params.set('phone.doesNotContain', params.phoneDoesNotContain.toString());
    if (params.phoneContains != null) __params = __params.set('phone.contains', params.phoneContains.toString());
    if (params.nameSpecified != null) __params = __params.set('name.specified', params.nameSpecified.toString());
    if (params.nameNotEquals != null) __params = __params.set('name.notEquals', params.nameNotEquals.toString());
    (params.nameIn || []).forEach(val => {if (val != null) __params = __params.append('name.in', val.toString())});
    if (params.nameEquals != null) __params = __params.set('name.equals', params.nameEquals.toString());
    if (params.nameDoesNotContain != null) __params = __params.set('name.doesNotContain', params.nameDoesNotContain.toString());
    if (params.nameContains != null) __params = __params.set('name.contains', params.nameContains.toString());
    if (params.locationTypeSpecified != null) __params = __params.set('locationType.specified', params.locationTypeSpecified.toString());
    if (params.locationTypeNotEquals != null) __params = __params.set('locationType.notEquals', params.locationTypeNotEquals.toString());
    (params.locationTypeIn || []).forEach(val => {if (val != null) __params = __params.append('locationType.in', val.toString())});
    if (params.locationTypeEquals != null) __params = __params.set('locationType.equals', params.locationTypeEquals.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.emailSpecified != null) __params = __params.set('email.specified', params.emailSpecified.toString());
    if (params.emailNotEquals != null) __params = __params.set('email.notEquals', params.emailNotEquals.toString());
    (params.emailIn || []).forEach(val => {if (val != null) __params = __params.append('email.in', val.toString())});
    if (params.emailEquals != null) __params = __params.set('email.equals', params.emailEquals.toString());
    if (params.emailDoesNotContain != null) __params = __params.set('email.doesNotContain', params.emailDoesNotContain.toString());
    if (params.emailContains != null) __params = __params.set('email.contains', params.emailContains.toString());
    if (params.aboutTypeSpecified != null) __params = __params.set('aboutType.specified', params.aboutTypeSpecified.toString());
    if (params.aboutTypeNotEquals != null) __params = __params.set('aboutType.notEquals', params.aboutTypeNotEquals.toString());
    (params.aboutTypeIn || []).forEach(val => {if (val != null) __params = __params.append('aboutType.in', val.toString())});
    if (params.aboutTypeEquals != null) __params = __params.set('aboutType.equals', params.aboutTypeEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/schools/count`,
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
   * countSchools
   * @param params The `SchoolResourceService.CountSchoolsUsingGETParams` containing the following parameters:
   *
   * - `website.specified`:
   *
   * - `website.notEquals`:
   *
   * - `website.in`:
   *
   * - `website.equals`:
   *
   * - `website.doesNotContain`:
   *
   * - `website.contains`:
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
   * - `userGroupId.specified`:
   *
   * - `userGroupId.notEquals`:
   *
   * - `userGroupId.lessThanOrEqual`:
   *
   * - `userGroupId.lessThan`:
   *
   * - `userGroupId.in`:
   *
   * - `userGroupId.greaterThanOrEqual`:
   *
   * - `userGroupId.greaterThan`:
   *
   * - `userGroupId.equals`:
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
   * - `locationType.specified`:
   *
   * - `locationType.notEquals`:
   *
   * - `locationType.in`:
   *
   * - `locationType.equals`:
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
   * - `email.specified`:
   *
   * - `email.notEquals`:
   *
   * - `email.in`:
   *
   * - `email.equals`:
   *
   * - `email.doesNotContain`:
   *
   * - `email.contains`:
   *
   * - `aboutType.specified`:
   *
   * - `aboutType.notEquals`:
   *
   * - `aboutType.in`:
   *
   * - `aboutType.equals`:
   *
   * @return OK
   */
  countSchoolsUsingGET(params: SchoolResourceService.CountSchoolsUsingGETParams): __Observable<number> {
    return this.countSchoolsUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getSchool
   * @param id id
   * @return OK
   */
  getSchoolUsingGETResponse(id: number): __Observable<__StrictHttpResponse<SchoolDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/schools/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SchoolDTO>;
      })
    );
  }
  /**
   * getSchool
   * @param id id
   * @return OK
   */
  getSchoolUsingGET(id: number): __Observable<SchoolDTO> {
    return this.getSchoolUsingGETResponse(id).pipe(
      __map(_r => _r.body as SchoolDTO)
    );
  }

  /**
   * deleteSchool
   * @param id id
   */
  deleteSchoolUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/schools/${encodeURIComponent(id)}`,
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
   * deleteSchool
   * @param id id
   */
  deleteSchoolUsingDELETE(id: number): __Observable<null> {
    return this.deleteSchoolUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module SchoolResourceService {

  /**
   * Parameters for getAllSchoolsUsingGET
   */
  export interface GetAllSchoolsUsingGETParams {
    websiteSpecified?: boolean;
    websiteNotEquals?: string;
    websiteIn?: Array<string>;
    websiteEquals?: string;
    websiteDoesNotContain?: string;
    websiteContains?: string;
    userIdSpecified?: boolean;
    userIdNotEquals?: number;
    userIdLessThanOrEqual?: number;
    userIdLessThan?: number;
    userIdIn?: Array<number>;
    userIdGreaterThanOrEqual?: number;
    userIdGreaterThan?: number;
    userIdEquals?: number;
    userGroupIdSpecified?: boolean;
    userGroupIdNotEquals?: number;
    userGroupIdLessThanOrEqual?: number;
    userGroupIdLessThan?: number;
    userGroupIdIn?: Array<number>;
    userGroupIdGreaterThanOrEqual?: number;
    userGroupIdGreaterThan?: number;
    userGroupIdEquals?: number;

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
    nameSpecified?: boolean;
    nameNotEquals?: string;
    nameIn?: Array<string>;
    nameEquals?: string;
    nameDoesNotContain?: string;
    nameContains?: string;
    locationTypeSpecified?: boolean;
    locationTypeNotEquals?: 'TEXT' | 'HTML';
    locationTypeIn?: Array<'TEXT' | 'HTML'>;
    locationTypeEquals?: 'TEXT' | 'HTML';
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    emailSpecified?: boolean;
    emailNotEquals?: string;
    emailIn?: Array<string>;
    emailEquals?: string;
    emailDoesNotContain?: string;
    emailContains?: string;
    aboutTypeSpecified?: boolean;
    aboutTypeNotEquals?: 'TEXT' | 'HTML';
    aboutTypeIn?: Array<'TEXT' | 'HTML'>;
    aboutTypeEquals?: 'TEXT' | 'HTML';
  }

  /**
   * Parameters for countSchoolsUsingGET
   */
  export interface CountSchoolsUsingGETParams {
    websiteSpecified?: boolean;
    websiteNotEquals?: string;
    websiteIn?: Array<string>;
    websiteEquals?: string;
    websiteDoesNotContain?: string;
    websiteContains?: string;
    userIdSpecified?: boolean;
    userIdNotEquals?: number;
    userIdLessThanOrEqual?: number;
    userIdLessThan?: number;
    userIdIn?: Array<number>;
    userIdGreaterThanOrEqual?: number;
    userIdGreaterThan?: number;
    userIdEquals?: number;
    userGroupIdSpecified?: boolean;
    userGroupIdNotEquals?: number;
    userGroupIdLessThanOrEqual?: number;
    userGroupIdLessThan?: number;
    userGroupIdIn?: Array<number>;
    userGroupIdGreaterThanOrEqual?: number;
    userGroupIdGreaterThan?: number;
    userGroupIdEquals?: number;
    phoneSpecified?: boolean;
    phoneNotEquals?: string;
    phoneIn?: Array<string>;
    phoneEquals?: string;
    phoneDoesNotContain?: string;
    phoneContains?: string;
    nameSpecified?: boolean;
    nameNotEquals?: string;
    nameIn?: Array<string>;
    nameEquals?: string;
    nameDoesNotContain?: string;
    nameContains?: string;
    locationTypeSpecified?: boolean;
    locationTypeNotEquals?: 'TEXT' | 'HTML';
    locationTypeIn?: Array<'TEXT' | 'HTML'>;
    locationTypeEquals?: 'TEXT' | 'HTML';
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    emailSpecified?: boolean;
    emailNotEquals?: string;
    emailIn?: Array<string>;
    emailEquals?: string;
    emailDoesNotContain?: string;
    emailContains?: string;
    aboutTypeSpecified?: boolean;
    aboutTypeNotEquals?: 'TEXT' | 'HTML';
    aboutTypeIn?: Array<'TEXT' | 'HTML'>;
    aboutTypeEquals?: 'TEXT' | 'HTML';
  }
}

export { SchoolResourceService }
