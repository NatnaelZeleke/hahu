/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserGroupDTO } from '../models/user-group-dto';

/**
 * User Group Resource
 */
@Injectable({
  providedIn: 'root',
})
class UserGroupResourceService extends __BaseService {
  static readonly getAllUserGroupsUsingGETPath = '/api/user-groups';
  static readonly createUserGroupUsingPOSTPath = '/api/user-groups';
  static readonly updateUserGroupUsingPUTPath = '/api/user-groups';
  static readonly countUserGroupsUsingGETPath = '/api/user-groups/count';
  static readonly getUserGroupUsingGETPath = '/api/user-groups/{id}';
  static readonly deleteUserGroupUsingDELETEPath = '/api/user-groups/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllUserGroups
   * @param params The `UserGroupResourceService.GetAllUserGroupsUsingGETParams` containing the following parameters:
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
   * - `schoolId.specified`:
   *
   * - `schoolId.notEquals`:
   *
   * - `schoolId.lessThanOrEqual`:
   *
   * - `schoolId.lessThan`:
   *
   * - `schoolId.in`:
   *
   * - `schoolId.greaterThanOrEqual`:
   *
   * - `schoolId.greaterThan`:
   *
   * - `schoolId.equals`:
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
   * - `ownerId.specified`:
   *
   * - `ownerId.notEquals`:
   *
   * - `ownerId.lessThanOrEqual`:
   *
   * - `ownerId.lessThan`:
   *
   * - `ownerId.in`:
   *
   * - `ownerId.greaterThanOrEqual`:
   *
   * - `ownerId.greaterThan`:
   *
   * - `ownerId.equals`:
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
   * - `groupType.specified`:
   *
   * - `groupType.notEquals`:
   *
   * - `groupType.in`:
   *
   * - `groupType.equals`:
   *
   * @return OK
   */
  getAllUserGroupsUsingGETResponse(params: UserGroupResourceService.GetAllUserGroupsUsingGETParams): __Observable<__StrictHttpResponse<Array<UserGroupDTO>>> {
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
    if (params.schoolIdSpecified != null) __params = __params.set('schoolId.specified', params.schoolIdSpecified.toString());
    if (params.schoolIdNotEquals != null) __params = __params.set('schoolId.notEquals', params.schoolIdNotEquals.toString());
    if (params.schoolIdLessThanOrEqual != null) __params = __params.set('schoolId.lessThanOrEqual', params.schoolIdLessThanOrEqual.toString());
    if (params.schoolIdLessThan != null) __params = __params.set('schoolId.lessThan', params.schoolIdLessThan.toString());
    (params.schoolIdIn || []).forEach(val => {if (val != null) __params = __params.append('schoolId.in', val.toString())});
    if (params.schoolIdGreaterThanOrEqual != null) __params = __params.set('schoolId.greaterThanOrEqual', params.schoolIdGreaterThanOrEqual.toString());
    if (params.schoolIdGreaterThan != null) __params = __params.set('schoolId.greaterThan', params.schoolIdGreaterThan.toString());
    if (params.schoolIdEquals != null) __params = __params.set('schoolId.equals', params.schoolIdEquals.toString());
    if (params.scheduleIdSpecified != null) __params = __params.set('scheduleId.specified', params.scheduleIdSpecified.toString());
    if (params.scheduleIdNotEquals != null) __params = __params.set('scheduleId.notEquals', params.scheduleIdNotEquals.toString());
    if (params.scheduleIdLessThanOrEqual != null) __params = __params.set('scheduleId.lessThanOrEqual', params.scheduleIdLessThanOrEqual.toString());
    if (params.scheduleIdLessThan != null) __params = __params.set('scheduleId.lessThan', params.scheduleIdLessThan.toString());
    (params.scheduleIdIn || []).forEach(val => {if (val != null) __params = __params.append('scheduleId.in', val.toString())});
    if (params.scheduleIdGreaterThanOrEqual != null) __params = __params.set('scheduleId.greaterThanOrEqual', params.scheduleIdGreaterThanOrEqual.toString());
    if (params.scheduleIdGreaterThan != null) __params = __params.set('scheduleId.greaterThan', params.scheduleIdGreaterThan.toString());
    if (params.scheduleIdEquals != null) __params = __params.set('scheduleId.equals', params.scheduleIdEquals.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.ownerIdSpecified != null) __params = __params.set('ownerId.specified', params.ownerIdSpecified.toString());
    if (params.ownerIdNotEquals != null) __params = __params.set('ownerId.notEquals', params.ownerIdNotEquals.toString());
    if (params.ownerIdLessThanOrEqual != null) __params = __params.set('ownerId.lessThanOrEqual', params.ownerIdLessThanOrEqual.toString());
    if (params.ownerIdLessThan != null) __params = __params.set('ownerId.lessThan', params.ownerIdLessThan.toString());
    (params.ownerIdIn || []).forEach(val => {if (val != null) __params = __params.append('ownerId.in', val.toString())});
    if (params.ownerIdGreaterThanOrEqual != null) __params = __params.set('ownerId.greaterThanOrEqual', params.ownerIdGreaterThanOrEqual.toString());
    if (params.ownerIdGreaterThan != null) __params = __params.set('ownerId.greaterThan', params.ownerIdGreaterThan.toString());
    if (params.ownerIdEquals != null) __params = __params.set('ownerId.equals', params.ownerIdEquals.toString());
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
    if (params.groupTypeSpecified != null) __params = __params.set('groupType.specified', params.groupTypeSpecified.toString());
    if (params.groupTypeNotEquals != null) __params = __params.set('groupType.notEquals', params.groupTypeNotEquals.toString());
    (params.groupTypeIn || []).forEach(val => {if (val != null) __params = __params.append('groupType.in', val.toString())});
    if (params.groupTypeEquals != null) __params = __params.set('groupType.equals', params.groupTypeEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/user-groups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserGroupDTO>>;
      })
    );
  }
  /**
   * getAllUserGroups
   * @param params The `UserGroupResourceService.GetAllUserGroupsUsingGETParams` containing the following parameters:
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
   * - `schoolId.specified`:
   *
   * - `schoolId.notEquals`:
   *
   * - `schoolId.lessThanOrEqual`:
   *
   * - `schoolId.lessThan`:
   *
   * - `schoolId.in`:
   *
   * - `schoolId.greaterThanOrEqual`:
   *
   * - `schoolId.greaterThan`:
   *
   * - `schoolId.equals`:
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
   * - `ownerId.specified`:
   *
   * - `ownerId.notEquals`:
   *
   * - `ownerId.lessThanOrEqual`:
   *
   * - `ownerId.lessThan`:
   *
   * - `ownerId.in`:
   *
   * - `ownerId.greaterThanOrEqual`:
   *
   * - `ownerId.greaterThan`:
   *
   * - `ownerId.equals`:
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
   * - `groupType.specified`:
   *
   * - `groupType.notEquals`:
   *
   * - `groupType.in`:
   *
   * - `groupType.equals`:
   *
   * @return OK
   */
  getAllUserGroupsUsingGET(params: UserGroupResourceService.GetAllUserGroupsUsingGETParams): __Observable<Array<UserGroupDTO>> {
    return this.getAllUserGroupsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<UserGroupDTO>)
    );
  }

  /**
   * createUserGroup
   * @param userGroupDTO userGroupDTO
   * @return OK
   */
  createUserGroupUsingPOSTResponse(userGroupDTO: UserGroupDTO): __Observable<__StrictHttpResponse<UserGroupDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userGroupDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/user-groups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserGroupDTO>;
      })
    );
  }
  /**
   * createUserGroup
   * @param userGroupDTO userGroupDTO
   * @return OK
   */
  createUserGroupUsingPOST(userGroupDTO: UserGroupDTO): __Observable<UserGroupDTO> {
    return this.createUserGroupUsingPOSTResponse(userGroupDTO).pipe(
      __map(_r => _r.body as UserGroupDTO)
    );
  }

  /**
   * updateUserGroup
   * @param userGroupDTO userGroupDTO
   * @return OK
   */
  updateUserGroupUsingPUTResponse(userGroupDTO: UserGroupDTO): __Observable<__StrictHttpResponse<UserGroupDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userGroupDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/user-groups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserGroupDTO>;
      })
    );
  }
  /**
   * updateUserGroup
   * @param userGroupDTO userGroupDTO
   * @return OK
   */
  updateUserGroupUsingPUT(userGroupDTO: UserGroupDTO): __Observable<UserGroupDTO> {
    return this.updateUserGroupUsingPUTResponse(userGroupDTO).pipe(
      __map(_r => _r.body as UserGroupDTO)
    );
  }

  /**
   * countUserGroups
   * @param params The `UserGroupResourceService.CountUserGroupsUsingGETParams` containing the following parameters:
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
   * - `schoolId.specified`:
   *
   * - `schoolId.notEquals`:
   *
   * - `schoolId.lessThanOrEqual`:
   *
   * - `schoolId.lessThan`:
   *
   * - `schoolId.in`:
   *
   * - `schoolId.greaterThanOrEqual`:
   *
   * - `schoolId.greaterThan`:
   *
   * - `schoolId.equals`:
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
   * - `ownerId.specified`:
   *
   * - `ownerId.notEquals`:
   *
   * - `ownerId.lessThanOrEqual`:
   *
   * - `ownerId.lessThan`:
   *
   * - `ownerId.in`:
   *
   * - `ownerId.greaterThanOrEqual`:
   *
   * - `ownerId.greaterThan`:
   *
   * - `ownerId.equals`:
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
   * - `groupType.specified`:
   *
   * - `groupType.notEquals`:
   *
   * - `groupType.in`:
   *
   * - `groupType.equals`:
   *
   * @return OK
   */
  countUserGroupsUsingGETResponse(params: UserGroupResourceService.CountUserGroupsUsingGETParams): __Observable<__StrictHttpResponse<number>> {
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
    if (params.schoolIdSpecified != null) __params = __params.set('schoolId.specified', params.schoolIdSpecified.toString());
    if (params.schoolIdNotEquals != null) __params = __params.set('schoolId.notEquals', params.schoolIdNotEquals.toString());
    if (params.schoolIdLessThanOrEqual != null) __params = __params.set('schoolId.lessThanOrEqual', params.schoolIdLessThanOrEqual.toString());
    if (params.schoolIdLessThan != null) __params = __params.set('schoolId.lessThan', params.schoolIdLessThan.toString());
    (params.schoolIdIn || []).forEach(val => {if (val != null) __params = __params.append('schoolId.in', val.toString())});
    if (params.schoolIdGreaterThanOrEqual != null) __params = __params.set('schoolId.greaterThanOrEqual', params.schoolIdGreaterThanOrEqual.toString());
    if (params.schoolIdGreaterThan != null) __params = __params.set('schoolId.greaterThan', params.schoolIdGreaterThan.toString());
    if (params.schoolIdEquals != null) __params = __params.set('schoolId.equals', params.schoolIdEquals.toString());
    if (params.scheduleIdSpecified != null) __params = __params.set('scheduleId.specified', params.scheduleIdSpecified.toString());
    if (params.scheduleIdNotEquals != null) __params = __params.set('scheduleId.notEquals', params.scheduleIdNotEquals.toString());
    if (params.scheduleIdLessThanOrEqual != null) __params = __params.set('scheduleId.lessThanOrEqual', params.scheduleIdLessThanOrEqual.toString());
    if (params.scheduleIdLessThan != null) __params = __params.set('scheduleId.lessThan', params.scheduleIdLessThan.toString());
    (params.scheduleIdIn || []).forEach(val => {if (val != null) __params = __params.append('scheduleId.in', val.toString())});
    if (params.scheduleIdGreaterThanOrEqual != null) __params = __params.set('scheduleId.greaterThanOrEqual', params.scheduleIdGreaterThanOrEqual.toString());
    if (params.scheduleIdGreaterThan != null) __params = __params.set('scheduleId.greaterThan', params.scheduleIdGreaterThan.toString());
    if (params.scheduleIdEquals != null) __params = __params.set('scheduleId.equals', params.scheduleIdEquals.toString());
    if (params.ownerIdSpecified != null) __params = __params.set('ownerId.specified', params.ownerIdSpecified.toString());
    if (params.ownerIdNotEquals != null) __params = __params.set('ownerId.notEquals', params.ownerIdNotEquals.toString());
    if (params.ownerIdLessThanOrEqual != null) __params = __params.set('ownerId.lessThanOrEqual', params.ownerIdLessThanOrEqual.toString());
    if (params.ownerIdLessThan != null) __params = __params.set('ownerId.lessThan', params.ownerIdLessThan.toString());
    (params.ownerIdIn || []).forEach(val => {if (val != null) __params = __params.append('ownerId.in', val.toString())});
    if (params.ownerIdGreaterThanOrEqual != null) __params = __params.set('ownerId.greaterThanOrEqual', params.ownerIdGreaterThanOrEqual.toString());
    if (params.ownerIdGreaterThan != null) __params = __params.set('ownerId.greaterThan', params.ownerIdGreaterThan.toString());
    if (params.ownerIdEquals != null) __params = __params.set('ownerId.equals', params.ownerIdEquals.toString());
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
    if (params.groupTypeSpecified != null) __params = __params.set('groupType.specified', params.groupTypeSpecified.toString());
    if (params.groupTypeNotEquals != null) __params = __params.set('groupType.notEquals', params.groupTypeNotEquals.toString());
    (params.groupTypeIn || []).forEach(val => {if (val != null) __params = __params.append('groupType.in', val.toString())});
    if (params.groupTypeEquals != null) __params = __params.set('groupType.equals', params.groupTypeEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/user-groups/count`,
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
   * countUserGroups
   * @param params The `UserGroupResourceService.CountUserGroupsUsingGETParams` containing the following parameters:
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
   * - `schoolId.specified`:
   *
   * - `schoolId.notEquals`:
   *
   * - `schoolId.lessThanOrEqual`:
   *
   * - `schoolId.lessThan`:
   *
   * - `schoolId.in`:
   *
   * - `schoolId.greaterThanOrEqual`:
   *
   * - `schoolId.greaterThan`:
   *
   * - `schoolId.equals`:
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
   * - `ownerId.specified`:
   *
   * - `ownerId.notEquals`:
   *
   * - `ownerId.lessThanOrEqual`:
   *
   * - `ownerId.lessThan`:
   *
   * - `ownerId.in`:
   *
   * - `ownerId.greaterThanOrEqual`:
   *
   * - `ownerId.greaterThan`:
   *
   * - `ownerId.equals`:
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
   * - `groupType.specified`:
   *
   * - `groupType.notEquals`:
   *
   * - `groupType.in`:
   *
   * - `groupType.equals`:
   *
   * @return OK
   */
  countUserGroupsUsingGET(params: UserGroupResourceService.CountUserGroupsUsingGETParams): __Observable<number> {
    return this.countUserGroupsUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getUserGroup
   * @param id id
   * @return OK
   */
  getUserGroupUsingGETResponse(id: number): __Observable<__StrictHttpResponse<UserGroupDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/user-groups/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserGroupDTO>;
      })
    );
  }
  /**
   * getUserGroup
   * @param id id
   * @return OK
   */
  getUserGroupUsingGET(id: number): __Observable<UserGroupDTO> {
    return this.getUserGroupUsingGETResponse(id).pipe(
      __map(_r => _r.body as UserGroupDTO)
    );
  }

  /**
   * deleteUserGroup
   * @param id id
   */
  deleteUserGroupUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/user-groups/${encodeURIComponent(id)}`,
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
   * deleteUserGroup
   * @param id id
   */
  deleteUserGroupUsingDELETE(id: number): __Observable<null> {
    return this.deleteUserGroupUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserGroupResourceService {

  /**
   * Parameters for getAllUserGroupsUsingGET
   */
  export interface GetAllUserGroupsUsingGETParams {
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
    schoolIdSpecified?: boolean;
    schoolIdNotEquals?: number;
    schoolIdLessThanOrEqual?: number;
    schoolIdLessThan?: number;
    schoolIdIn?: Array<number>;
    schoolIdGreaterThanOrEqual?: number;
    schoolIdGreaterThan?: number;
    schoolIdEquals?: number;
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
    ownerIdSpecified?: boolean;
    ownerIdNotEquals?: number;
    ownerIdLessThanOrEqual?: number;
    ownerIdLessThan?: number;
    ownerIdIn?: Array<number>;
    ownerIdGreaterThanOrEqual?: number;
    ownerIdGreaterThan?: number;
    ownerIdEquals?: number;
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
    groupTypeSpecified?: boolean;
    groupTypeNotEquals?: 'PUBLIC' | 'PRIVATE';
    groupTypeIn?: Array<'PUBLIC' | 'PRIVATE'>;
    groupTypeEquals?: 'PUBLIC' | 'PRIVATE';
  }

  /**
   * Parameters for countUserGroupsUsingGET
   */
  export interface CountUserGroupsUsingGETParams {
    userIdSpecified?: boolean;
    userIdNotEquals?: number;
    userIdLessThanOrEqual?: number;
    userIdLessThan?: number;
    userIdIn?: Array<number>;
    userIdGreaterThanOrEqual?: number;
    userIdGreaterThan?: number;
    userIdEquals?: number;
    schoolIdSpecified?: boolean;
    schoolIdNotEquals?: number;
    schoolIdLessThanOrEqual?: number;
    schoolIdLessThan?: number;
    schoolIdIn?: Array<number>;
    schoolIdGreaterThanOrEqual?: number;
    schoolIdGreaterThan?: number;
    schoolIdEquals?: number;
    scheduleIdSpecified?: boolean;
    scheduleIdNotEquals?: number;
    scheduleIdLessThanOrEqual?: number;
    scheduleIdLessThan?: number;
    scheduleIdIn?: Array<number>;
    scheduleIdGreaterThanOrEqual?: number;
    scheduleIdGreaterThan?: number;
    scheduleIdEquals?: number;
    ownerIdSpecified?: boolean;
    ownerIdNotEquals?: number;
    ownerIdLessThanOrEqual?: number;
    ownerIdLessThan?: number;
    ownerIdIn?: Array<number>;
    ownerIdGreaterThanOrEqual?: number;
    ownerIdGreaterThan?: number;
    ownerIdEquals?: number;
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
    groupTypeSpecified?: boolean;
    groupTypeNotEquals?: 'PUBLIC' | 'PRIVATE';
    groupTypeIn?: Array<'PUBLIC' | 'PRIVATE'>;
    groupTypeEquals?: 'PUBLIC' | 'PRIVATE';
  }
}

export { UserGroupResourceService }
