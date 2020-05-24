/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ScheduleDTO } from '../models/schedule-dto';

/**
 * Schedule Resource
 */
@Injectable({
  providedIn: 'root',
})
class ScheduleResourceService extends __BaseService {
  static readonly getAllSchedulesUsingGETPath = '/api/schedules';
  static readonly createScheduleUsingPOSTPath = '/api/schedules';
  static readonly updateScheduleUsingPUTPath = '/api/schedules';
  static readonly countSchedulesUsingGETPath = '/api/schedules/count';
  static readonly getScheduleUsingGETPath = '/api/schedules/{id}';
  static readonly deleteScheduleUsingDELETEPath = '/api/schedules/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllSchedules
   * @param params The `ScheduleResourceService.GetAllSchedulesUsingGETParams` containing the following parameters:
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
   * - `title.specified`:
   *
   * - `title.notEquals`:
   *
   * - `title.in`:
   *
   * - `title.equals`:
   *
   * - `title.doesNotContain`:
   *
   * - `title.contains`:
   *
   * - `startTime.specified`:
   *
   * - `startTime.notEquals`:
   *
   * - `startTime.lessThanOrEqual`:
   *
   * - `startTime.lessThan`:
   *
   * - `startTime.in[0].nano`:
   *
   * - `startTime.in[0].epochSecond`:
   *
   * - `startTime.greaterThanOrEqual`:
   *
   * - `startTime.greaterThan`:
   *
   * - `startTime.equals`:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `scheduleTypeId.specified`:
   *
   * - `scheduleTypeId.notEquals`:
   *
   * - `scheduleTypeId.lessThanOrEqual`:
   *
   * - `scheduleTypeId.lessThan`:
   *
   * - `scheduleTypeId.in`:
   *
   * - `scheduleTypeId.greaterThanOrEqual`:
   *
   * - `scheduleTypeId.greaterThan`:
   *
   * - `scheduleTypeId.equals`:
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
   * - `endTime.specified`:
   *
   * - `endTime.notEquals`:
   *
   * - `endTime.lessThanOrEqual`:
   *
   * - `endTime.lessThan`:
   *
   * - `endTime.in[0].nano`:
   *
   * - `endTime.in[0].epochSecond`:
   *
   * - `endTime.greaterThanOrEqual`:
   *
   * - `endTime.greaterThan`:
   *
   * - `endTime.equals`:
   *
   * @return OK
   */
  getAllSchedulesUsingGETResponse(params: ScheduleResourceService.GetAllSchedulesUsingGETParams): __Observable<__StrictHttpResponse<Array<ScheduleDTO>>> {
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
    if (params.userGroupIdSpecified != null) __params = __params.set('userGroupId.specified', params.userGroupIdSpecified.toString());
    if (params.userGroupIdNotEquals != null) __params = __params.set('userGroupId.notEquals', params.userGroupIdNotEquals.toString());
    if (params.userGroupIdLessThanOrEqual != null) __params = __params.set('userGroupId.lessThanOrEqual', params.userGroupIdLessThanOrEqual.toString());
    if (params.userGroupIdLessThan != null) __params = __params.set('userGroupId.lessThan', params.userGroupIdLessThan.toString());
    (params.userGroupIdIn || []).forEach(val => {if (val != null) __params = __params.append('userGroupId.in', val.toString())});
    if (params.userGroupIdGreaterThanOrEqual != null) __params = __params.set('userGroupId.greaterThanOrEqual', params.userGroupIdGreaterThanOrEqual.toString());
    if (params.userGroupIdGreaterThan != null) __params = __params.set('userGroupId.greaterThan', params.userGroupIdGreaterThan.toString());
    if (params.userGroupIdEquals != null) __params = __params.set('userGroupId.equals', params.userGroupIdEquals.toString());
    if (params.titleSpecified != null) __params = __params.set('title.specified', params.titleSpecified.toString());
    if (params.titleNotEquals != null) __params = __params.set('title.notEquals', params.titleNotEquals.toString());
    (params.titleIn || []).forEach(val => {if (val != null) __params = __params.append('title.in', val.toString())});
    if (params.titleEquals != null) __params = __params.set('title.equals', params.titleEquals.toString());
    if (params.titleDoesNotContain != null) __params = __params.set('title.doesNotContain', params.titleDoesNotContain.toString());
    if (params.titleContains != null) __params = __params.set('title.contains', params.titleContains.toString());
    if (params.startTimeSpecified != null) __params = __params.set('startTime.specified', params.startTimeSpecified.toString());
    if (params.startTimeNotEquals != null) __params = __params.set('startTime.notEquals', params.startTimeNotEquals.toString());
    if (params.startTimeLessThanOrEqual != null) __params = __params.set('startTime.lessThanOrEqual', params.startTimeLessThanOrEqual.toString());
    if (params.startTimeLessThan != null) __params = __params.set('startTime.lessThan', params.startTimeLessThan.toString());
    if (params.startTimeIn0Nano != null) __params = __params.set('startTime.in[0].nano', params.startTimeIn0Nano.toString());
    if (params.startTimeIn0EpochSecond != null) __params = __params.set('startTime.in[0].epochSecond', params.startTimeIn0EpochSecond.toString());
    if (params.startTimeGreaterThanOrEqual != null) __params = __params.set('startTime.greaterThanOrEqual', params.startTimeGreaterThanOrEqual.toString());
    if (params.startTimeGreaterThan != null) __params = __params.set('startTime.greaterThan', params.startTimeGreaterThan.toString());
    if (params.startTimeEquals != null) __params = __params.set('startTime.equals', params.startTimeEquals.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.scheduleTypeIdSpecified != null) __params = __params.set('scheduleTypeId.specified', params.scheduleTypeIdSpecified.toString());
    if (params.scheduleTypeIdNotEquals != null) __params = __params.set('scheduleTypeId.notEquals', params.scheduleTypeIdNotEquals.toString());
    if (params.scheduleTypeIdLessThanOrEqual != null) __params = __params.set('scheduleTypeId.lessThanOrEqual', params.scheduleTypeIdLessThanOrEqual.toString());
    if (params.scheduleTypeIdLessThan != null) __params = __params.set('scheduleTypeId.lessThan', params.scheduleTypeIdLessThan.toString());
    (params.scheduleTypeIdIn || []).forEach(val => {if (val != null) __params = __params.append('scheduleTypeId.in', val.toString())});
    if (params.scheduleTypeIdGreaterThanOrEqual != null) __params = __params.set('scheduleTypeId.greaterThanOrEqual', params.scheduleTypeIdGreaterThanOrEqual.toString());
    if (params.scheduleTypeIdGreaterThan != null) __params = __params.set('scheduleTypeId.greaterThan', params.scheduleTypeIdGreaterThan.toString());
    if (params.scheduleTypeIdEquals != null) __params = __params.set('scheduleTypeId.equals', params.scheduleTypeIdEquals.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.endTimeSpecified != null) __params = __params.set('endTime.specified', params.endTimeSpecified.toString());
    if (params.endTimeNotEquals != null) __params = __params.set('endTime.notEquals', params.endTimeNotEquals.toString());
    if (params.endTimeLessThanOrEqual != null) __params = __params.set('endTime.lessThanOrEqual', params.endTimeLessThanOrEqual.toString());
    if (params.endTimeLessThan != null) __params = __params.set('endTime.lessThan', params.endTimeLessThan.toString());
    if (params.endTimeIn0Nano != null) __params = __params.set('endTime.in[0].nano', params.endTimeIn0Nano.toString());
    if (params.endTimeIn0EpochSecond != null) __params = __params.set('endTime.in[0].epochSecond', params.endTimeIn0EpochSecond.toString());
    if (params.endTimeGreaterThanOrEqual != null) __params = __params.set('endTime.greaterThanOrEqual', params.endTimeGreaterThanOrEqual.toString());
    if (params.endTimeGreaterThan != null) __params = __params.set('endTime.greaterThan', params.endTimeGreaterThan.toString());
    if (params.endTimeEquals != null) __params = __params.set('endTime.equals', params.endTimeEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/schedules`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ScheduleDTO>>;
      })
    );
  }
  /**
   * getAllSchedules
   * @param params The `ScheduleResourceService.GetAllSchedulesUsingGETParams` containing the following parameters:
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
   * - `title.specified`:
   *
   * - `title.notEquals`:
   *
   * - `title.in`:
   *
   * - `title.equals`:
   *
   * - `title.doesNotContain`:
   *
   * - `title.contains`:
   *
   * - `startTime.specified`:
   *
   * - `startTime.notEquals`:
   *
   * - `startTime.lessThanOrEqual`:
   *
   * - `startTime.lessThan`:
   *
   * - `startTime.in[0].nano`:
   *
   * - `startTime.in[0].epochSecond`:
   *
   * - `startTime.greaterThanOrEqual`:
   *
   * - `startTime.greaterThan`:
   *
   * - `startTime.equals`:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `scheduleTypeId.specified`:
   *
   * - `scheduleTypeId.notEquals`:
   *
   * - `scheduleTypeId.lessThanOrEqual`:
   *
   * - `scheduleTypeId.lessThan`:
   *
   * - `scheduleTypeId.in`:
   *
   * - `scheduleTypeId.greaterThanOrEqual`:
   *
   * - `scheduleTypeId.greaterThan`:
   *
   * - `scheduleTypeId.equals`:
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
   * - `endTime.specified`:
   *
   * - `endTime.notEquals`:
   *
   * - `endTime.lessThanOrEqual`:
   *
   * - `endTime.lessThan`:
   *
   * - `endTime.in[0].nano`:
   *
   * - `endTime.in[0].epochSecond`:
   *
   * - `endTime.greaterThanOrEqual`:
   *
   * - `endTime.greaterThan`:
   *
   * - `endTime.equals`:
   *
   * @return OK
   */
  getAllSchedulesUsingGET(params: ScheduleResourceService.GetAllSchedulesUsingGETParams): __Observable<Array<ScheduleDTO>> {
    return this.getAllSchedulesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ScheduleDTO>)
    );
  }

  /**
   * createSchedule
   * @param scheduleDTO scheduleDTO
   * @return OK
   */
  createScheduleUsingPOSTResponse(scheduleDTO: ScheduleDTO): __Observable<__StrictHttpResponse<ScheduleDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = scheduleDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/schedules`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ScheduleDTO>;
      })
    );
  }
  /**
   * createSchedule
   * @param scheduleDTO scheduleDTO
   * @return OK
   */
  createScheduleUsingPOST(scheduleDTO: ScheduleDTO): __Observable<ScheduleDTO> {
    return this.createScheduleUsingPOSTResponse(scheduleDTO).pipe(
      __map(_r => _r.body as ScheduleDTO)
    );
  }

  /**
   * updateSchedule
   * @param scheduleDTO scheduleDTO
   * @return OK
   */
  updateScheduleUsingPUTResponse(scheduleDTO: ScheduleDTO): __Observable<__StrictHttpResponse<ScheduleDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = scheduleDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/schedules`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ScheduleDTO>;
      })
    );
  }
  /**
   * updateSchedule
   * @param scheduleDTO scheduleDTO
   * @return OK
   */
  updateScheduleUsingPUT(scheduleDTO: ScheduleDTO): __Observable<ScheduleDTO> {
    return this.updateScheduleUsingPUTResponse(scheduleDTO).pipe(
      __map(_r => _r.body as ScheduleDTO)
    );
  }

  /**
   * countSchedules
   * @param params The `ScheduleResourceService.CountSchedulesUsingGETParams` containing the following parameters:
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
   * - `title.specified`:
   *
   * - `title.notEquals`:
   *
   * - `title.in`:
   *
   * - `title.equals`:
   *
   * - `title.doesNotContain`:
   *
   * - `title.contains`:
   *
   * - `startTime.specified`:
   *
   * - `startTime.notEquals`:
   *
   * - `startTime.lessThanOrEqual`:
   *
   * - `startTime.lessThan`:
   *
   * - `startTime.in[0].nano`:
   *
   * - `startTime.in[0].epochSecond`:
   *
   * - `startTime.greaterThanOrEqual`:
   *
   * - `startTime.greaterThan`:
   *
   * - `startTime.equals`:
   *
   * - `scheduleTypeId.specified`:
   *
   * - `scheduleTypeId.notEquals`:
   *
   * - `scheduleTypeId.lessThanOrEqual`:
   *
   * - `scheduleTypeId.lessThan`:
   *
   * - `scheduleTypeId.in`:
   *
   * - `scheduleTypeId.greaterThanOrEqual`:
   *
   * - `scheduleTypeId.greaterThan`:
   *
   * - `scheduleTypeId.equals`:
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
   * - `endTime.specified`:
   *
   * - `endTime.notEquals`:
   *
   * - `endTime.lessThanOrEqual`:
   *
   * - `endTime.lessThan`:
   *
   * - `endTime.in[0].nano`:
   *
   * - `endTime.in[0].epochSecond`:
   *
   * - `endTime.greaterThanOrEqual`:
   *
   * - `endTime.greaterThan`:
   *
   * - `endTime.equals`:
   *
   * @return OK
   */
  countSchedulesUsingGETResponse(params: ScheduleResourceService.CountSchedulesUsingGETParams): __Observable<__StrictHttpResponse<number>> {
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
    if (params.userGroupIdSpecified != null) __params = __params.set('userGroupId.specified', params.userGroupIdSpecified.toString());
    if (params.userGroupIdNotEquals != null) __params = __params.set('userGroupId.notEquals', params.userGroupIdNotEquals.toString());
    if (params.userGroupIdLessThanOrEqual != null) __params = __params.set('userGroupId.lessThanOrEqual', params.userGroupIdLessThanOrEqual.toString());
    if (params.userGroupIdLessThan != null) __params = __params.set('userGroupId.lessThan', params.userGroupIdLessThan.toString());
    (params.userGroupIdIn || []).forEach(val => {if (val != null) __params = __params.append('userGroupId.in', val.toString())});
    if (params.userGroupIdGreaterThanOrEqual != null) __params = __params.set('userGroupId.greaterThanOrEqual', params.userGroupIdGreaterThanOrEqual.toString());
    if (params.userGroupIdGreaterThan != null) __params = __params.set('userGroupId.greaterThan', params.userGroupIdGreaterThan.toString());
    if (params.userGroupIdEquals != null) __params = __params.set('userGroupId.equals', params.userGroupIdEquals.toString());
    if (params.titleSpecified != null) __params = __params.set('title.specified', params.titleSpecified.toString());
    if (params.titleNotEquals != null) __params = __params.set('title.notEquals', params.titleNotEquals.toString());
    (params.titleIn || []).forEach(val => {if (val != null) __params = __params.append('title.in', val.toString())});
    if (params.titleEquals != null) __params = __params.set('title.equals', params.titleEquals.toString());
    if (params.titleDoesNotContain != null) __params = __params.set('title.doesNotContain', params.titleDoesNotContain.toString());
    if (params.titleContains != null) __params = __params.set('title.contains', params.titleContains.toString());
    if (params.startTimeSpecified != null) __params = __params.set('startTime.specified', params.startTimeSpecified.toString());
    if (params.startTimeNotEquals != null) __params = __params.set('startTime.notEquals', params.startTimeNotEquals.toString());
    if (params.startTimeLessThanOrEqual != null) __params = __params.set('startTime.lessThanOrEqual', params.startTimeLessThanOrEqual.toString());
    if (params.startTimeLessThan != null) __params = __params.set('startTime.lessThan', params.startTimeLessThan.toString());
    if (params.startTimeIn0Nano != null) __params = __params.set('startTime.in[0].nano', params.startTimeIn0Nano.toString());
    if (params.startTimeIn0EpochSecond != null) __params = __params.set('startTime.in[0].epochSecond', params.startTimeIn0EpochSecond.toString());
    if (params.startTimeGreaterThanOrEqual != null) __params = __params.set('startTime.greaterThanOrEqual', params.startTimeGreaterThanOrEqual.toString());
    if (params.startTimeGreaterThan != null) __params = __params.set('startTime.greaterThan', params.startTimeGreaterThan.toString());
    if (params.startTimeEquals != null) __params = __params.set('startTime.equals', params.startTimeEquals.toString());
    if (params.scheduleTypeIdSpecified != null) __params = __params.set('scheduleTypeId.specified', params.scheduleTypeIdSpecified.toString());
    if (params.scheduleTypeIdNotEquals != null) __params = __params.set('scheduleTypeId.notEquals', params.scheduleTypeIdNotEquals.toString());
    if (params.scheduleTypeIdLessThanOrEqual != null) __params = __params.set('scheduleTypeId.lessThanOrEqual', params.scheduleTypeIdLessThanOrEqual.toString());
    if (params.scheduleTypeIdLessThan != null) __params = __params.set('scheduleTypeId.lessThan', params.scheduleTypeIdLessThan.toString());
    (params.scheduleTypeIdIn || []).forEach(val => {if (val != null) __params = __params.append('scheduleTypeId.in', val.toString())});
    if (params.scheduleTypeIdGreaterThanOrEqual != null) __params = __params.set('scheduleTypeId.greaterThanOrEqual', params.scheduleTypeIdGreaterThanOrEqual.toString());
    if (params.scheduleTypeIdGreaterThan != null) __params = __params.set('scheduleTypeId.greaterThan', params.scheduleTypeIdGreaterThan.toString());
    if (params.scheduleTypeIdEquals != null) __params = __params.set('scheduleTypeId.equals', params.scheduleTypeIdEquals.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.endTimeSpecified != null) __params = __params.set('endTime.specified', params.endTimeSpecified.toString());
    if (params.endTimeNotEquals != null) __params = __params.set('endTime.notEquals', params.endTimeNotEquals.toString());
    if (params.endTimeLessThanOrEqual != null) __params = __params.set('endTime.lessThanOrEqual', params.endTimeLessThanOrEqual.toString());
    if (params.endTimeLessThan != null) __params = __params.set('endTime.lessThan', params.endTimeLessThan.toString());
    if (params.endTimeIn0Nano != null) __params = __params.set('endTime.in[0].nano', params.endTimeIn0Nano.toString());
    if (params.endTimeIn0EpochSecond != null) __params = __params.set('endTime.in[0].epochSecond', params.endTimeIn0EpochSecond.toString());
    if (params.endTimeGreaterThanOrEqual != null) __params = __params.set('endTime.greaterThanOrEqual', params.endTimeGreaterThanOrEqual.toString());
    if (params.endTimeGreaterThan != null) __params = __params.set('endTime.greaterThan', params.endTimeGreaterThan.toString());
    if (params.endTimeEquals != null) __params = __params.set('endTime.equals', params.endTimeEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/schedules/count`,
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
   * countSchedules
   * @param params The `ScheduleResourceService.CountSchedulesUsingGETParams` containing the following parameters:
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
   * - `title.specified`:
   *
   * - `title.notEquals`:
   *
   * - `title.in`:
   *
   * - `title.equals`:
   *
   * - `title.doesNotContain`:
   *
   * - `title.contains`:
   *
   * - `startTime.specified`:
   *
   * - `startTime.notEquals`:
   *
   * - `startTime.lessThanOrEqual`:
   *
   * - `startTime.lessThan`:
   *
   * - `startTime.in[0].nano`:
   *
   * - `startTime.in[0].epochSecond`:
   *
   * - `startTime.greaterThanOrEqual`:
   *
   * - `startTime.greaterThan`:
   *
   * - `startTime.equals`:
   *
   * - `scheduleTypeId.specified`:
   *
   * - `scheduleTypeId.notEquals`:
   *
   * - `scheduleTypeId.lessThanOrEqual`:
   *
   * - `scheduleTypeId.lessThan`:
   *
   * - `scheduleTypeId.in`:
   *
   * - `scheduleTypeId.greaterThanOrEqual`:
   *
   * - `scheduleTypeId.greaterThan`:
   *
   * - `scheduleTypeId.equals`:
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
   * - `endTime.specified`:
   *
   * - `endTime.notEquals`:
   *
   * - `endTime.lessThanOrEqual`:
   *
   * - `endTime.lessThan`:
   *
   * - `endTime.in[0].nano`:
   *
   * - `endTime.in[0].epochSecond`:
   *
   * - `endTime.greaterThanOrEqual`:
   *
   * - `endTime.greaterThan`:
   *
   * - `endTime.equals`:
   *
   * @return OK
   */
  countSchedulesUsingGET(params: ScheduleResourceService.CountSchedulesUsingGETParams): __Observable<number> {
    return this.countSchedulesUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getSchedule
   * @param id id
   * @return OK
   */
  getScheduleUsingGETResponse(id: number): __Observable<__StrictHttpResponse<ScheduleDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/schedules/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ScheduleDTO>;
      })
    );
  }
  /**
   * getSchedule
   * @param id id
   * @return OK
   */
  getScheduleUsingGET(id: number): __Observable<ScheduleDTO> {
    return this.getScheduleUsingGETResponse(id).pipe(
      __map(_r => _r.body as ScheduleDTO)
    );
  }

  /**
   * deleteSchedule
   * @param id id
   */
  deleteScheduleUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/schedules/${encodeURIComponent(id)}`,
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
   * deleteSchedule
   * @param id id
   */
  deleteScheduleUsingDELETE(id: number): __Observable<null> {
    return this.deleteScheduleUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ScheduleResourceService {

  /**
   * Parameters for getAllSchedulesUsingGET
   */
  export interface GetAllSchedulesUsingGETParams {
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
    titleSpecified?: boolean;
    titleNotEquals?: string;
    titleIn?: Array<string>;
    titleEquals?: string;
    titleDoesNotContain?: string;
    titleContains?: string;
    startTimeSpecified?: boolean;
    startTimeNotEquals?: string;
    startTimeLessThanOrEqual?: string;
    startTimeLessThan?: string;
    startTimeIn0Nano?: number;
    startTimeIn0EpochSecond?: number;
    startTimeGreaterThanOrEqual?: string;
    startTimeGreaterThan?: string;
    startTimeEquals?: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    scheduleTypeIdSpecified?: boolean;
    scheduleTypeIdNotEquals?: number;
    scheduleTypeIdLessThanOrEqual?: number;
    scheduleTypeIdLessThan?: number;
    scheduleTypeIdIn?: Array<number>;
    scheduleTypeIdGreaterThanOrEqual?: number;
    scheduleTypeIdGreaterThan?: number;
    scheduleTypeIdEquals?: number;

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
    endTimeSpecified?: boolean;
    endTimeNotEquals?: string;
    endTimeLessThanOrEqual?: string;
    endTimeLessThan?: string;
    endTimeIn0Nano?: number;
    endTimeIn0EpochSecond?: number;
    endTimeGreaterThanOrEqual?: string;
    endTimeGreaterThan?: string;
    endTimeEquals?: string;
  }

  /**
   * Parameters for countSchedulesUsingGET
   */
  export interface CountSchedulesUsingGETParams {
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
    titleSpecified?: boolean;
    titleNotEquals?: string;
    titleIn?: Array<string>;
    titleEquals?: string;
    titleDoesNotContain?: string;
    titleContains?: string;
    startTimeSpecified?: boolean;
    startTimeNotEquals?: string;
    startTimeLessThanOrEqual?: string;
    startTimeLessThan?: string;
    startTimeIn0Nano?: number;
    startTimeIn0EpochSecond?: number;
    startTimeGreaterThanOrEqual?: string;
    startTimeGreaterThan?: string;
    startTimeEquals?: string;
    scheduleTypeIdSpecified?: boolean;
    scheduleTypeIdNotEquals?: number;
    scheduleTypeIdLessThanOrEqual?: number;
    scheduleTypeIdLessThan?: number;
    scheduleTypeIdIn?: Array<number>;
    scheduleTypeIdGreaterThanOrEqual?: number;
    scheduleTypeIdGreaterThan?: number;
    scheduleTypeIdEquals?: number;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    endTimeSpecified?: boolean;
    endTimeNotEquals?: string;
    endTimeLessThanOrEqual?: string;
    endTimeLessThan?: string;
    endTimeIn0Nano?: number;
    endTimeIn0EpochSecond?: number;
    endTimeGreaterThanOrEqual?: string;
    endTimeGreaterThan?: string;
    endTimeEquals?: string;
  }
}

export { ScheduleResourceService }
