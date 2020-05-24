/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { NotificationDTO } from '../models/notification-dto';

/**
 * Notification Resource
 */
@Injectable({
  providedIn: 'root',
})
class NotificationResourceService extends __BaseService {
  static readonly getAllNotificationsUsingGETPath = '/api/notifications';
  static readonly createNotificationUsingPOSTPath = '/api/notifications';
  static readonly updateNotificationUsingPUTPath = '/api/notifications';
  static readonly countNotificationsUsingGETPath = '/api/notifications/count';
  static readonly getNotificationUsingGETPath = '/api/notifications/{id}';
  static readonly deleteNotificationUsingDELETEPath = '/api/notifications/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllNotifications
   * @param params The `NotificationResourceService.GetAllNotificationsUsingGETParams` containing the following parameters:
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
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * - `notificationMetaDataId.specified`:
   *
   * - `notificationMetaDataId.notEquals`:
   *
   * - `notificationMetaDataId.lessThanOrEqual`:
   *
   * - `notificationMetaDataId.lessThan`:
   *
   * - `notificationMetaDataId.in`:
   *
   * - `notificationMetaDataId.greaterThanOrEqual`:
   *
   * - `notificationMetaDataId.greaterThan`:
   *
   * - `notificationMetaDataId.equals`:
   *
   * - `markAsRead.specified`:
   *
   * - `markAsRead.notEquals`:
   *
   * - `markAsRead.in`:
   *
   * - `markAsRead.equals`:
   *
   * - `link.specified`:
   *
   * - `link.notEquals`:
   *
   * - `link.in`:
   *
   * - `link.equals`:
   *
   * - `link.doesNotContain`:
   *
   * - `link.contains`:
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
   * - `date.specified`:
   *
   * - `date.notEquals`:
   *
   * - `date.lessThanOrEqual`:
   *
   * - `date.lessThan`:
   *
   * - `date.in[0].nano`:
   *
   * - `date.in[0].epochSecond`:
   *
   * - `date.greaterThanOrEqual`:
   *
   * - `date.greaterThan`:
   *
   * - `date.equals`:
   *
   * - `contentType.specified`:
   *
   * - `contentType.notEquals`:
   *
   * - `contentType.in`:
   *
   * - `contentType.equals`:
   *
   * @return OK
   */
  getAllNotificationsUsingGETResponse(params: NotificationResourceService.GetAllNotificationsUsingGETParams): __Observable<__StrictHttpResponse<Array<NotificationDTO>>> {
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
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.notificationMetaDataIdSpecified != null) __params = __params.set('notificationMetaDataId.specified', params.notificationMetaDataIdSpecified.toString());
    if (params.notificationMetaDataIdNotEquals != null) __params = __params.set('notificationMetaDataId.notEquals', params.notificationMetaDataIdNotEquals.toString());
    if (params.notificationMetaDataIdLessThanOrEqual != null) __params = __params.set('notificationMetaDataId.lessThanOrEqual', params.notificationMetaDataIdLessThanOrEqual.toString());
    if (params.notificationMetaDataIdLessThan != null) __params = __params.set('notificationMetaDataId.lessThan', params.notificationMetaDataIdLessThan.toString());
    (params.notificationMetaDataIdIn || []).forEach(val => {if (val != null) __params = __params.append('notificationMetaDataId.in', val.toString())});
    if (params.notificationMetaDataIdGreaterThanOrEqual != null) __params = __params.set('notificationMetaDataId.greaterThanOrEqual', params.notificationMetaDataIdGreaterThanOrEqual.toString());
    if (params.notificationMetaDataIdGreaterThan != null) __params = __params.set('notificationMetaDataId.greaterThan', params.notificationMetaDataIdGreaterThan.toString());
    if (params.notificationMetaDataIdEquals != null) __params = __params.set('notificationMetaDataId.equals', params.notificationMetaDataIdEquals.toString());
    if (params.markAsReadSpecified != null) __params = __params.set('markAsRead.specified', params.markAsReadSpecified.toString());
    if (params.markAsReadNotEquals != null) __params = __params.set('markAsRead.notEquals', params.markAsReadNotEquals.toString());
    (params.markAsReadIn || []).forEach(val => {if (val != null) __params = __params.append('markAsRead.in', val.toString())});
    if (params.markAsReadEquals != null) __params = __params.set('markAsRead.equals', params.markAsReadEquals.toString());
    if (params.linkSpecified != null) __params = __params.set('link.specified', params.linkSpecified.toString());
    if (params.linkNotEquals != null) __params = __params.set('link.notEquals', params.linkNotEquals.toString());
    (params.linkIn || []).forEach(val => {if (val != null) __params = __params.append('link.in', val.toString())});
    if (params.linkEquals != null) __params = __params.set('link.equals', params.linkEquals.toString());
    if (params.linkDoesNotContain != null) __params = __params.set('link.doesNotContain', params.linkDoesNotContain.toString());
    if (params.linkContains != null) __params = __params.set('link.contains', params.linkContains.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.dateSpecified != null) __params = __params.set('date.specified', params.dateSpecified.toString());
    if (params.dateNotEquals != null) __params = __params.set('date.notEquals', params.dateNotEquals.toString());
    if (params.dateLessThanOrEqual != null) __params = __params.set('date.lessThanOrEqual', params.dateLessThanOrEqual.toString());
    if (params.dateLessThan != null) __params = __params.set('date.lessThan', params.dateLessThan.toString());
    if (params.dateIn0Nano != null) __params = __params.set('date.in[0].nano', params.dateIn0Nano.toString());
    if (params.dateIn0EpochSecond != null) __params = __params.set('date.in[0].epochSecond', params.dateIn0EpochSecond.toString());
    if (params.dateGreaterThanOrEqual != null) __params = __params.set('date.greaterThanOrEqual', params.dateGreaterThanOrEqual.toString());
    if (params.dateGreaterThan != null) __params = __params.set('date.greaterThan', params.dateGreaterThan.toString());
    if (params.dateEquals != null) __params = __params.set('date.equals', params.dateEquals.toString());
    if (params.contentTypeSpecified != null) __params = __params.set('contentType.specified', params.contentTypeSpecified.toString());
    if (params.contentTypeNotEquals != null) __params = __params.set('contentType.notEquals', params.contentTypeNotEquals.toString());
    (params.contentTypeIn || []).forEach(val => {if (val != null) __params = __params.append('contentType.in', val.toString())});
    if (params.contentTypeEquals != null) __params = __params.set('contentType.equals', params.contentTypeEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/notifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<NotificationDTO>>;
      })
    );
  }
  /**
   * getAllNotifications
   * @param params The `NotificationResourceService.GetAllNotificationsUsingGETParams` containing the following parameters:
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
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * - `notificationMetaDataId.specified`:
   *
   * - `notificationMetaDataId.notEquals`:
   *
   * - `notificationMetaDataId.lessThanOrEqual`:
   *
   * - `notificationMetaDataId.lessThan`:
   *
   * - `notificationMetaDataId.in`:
   *
   * - `notificationMetaDataId.greaterThanOrEqual`:
   *
   * - `notificationMetaDataId.greaterThan`:
   *
   * - `notificationMetaDataId.equals`:
   *
   * - `markAsRead.specified`:
   *
   * - `markAsRead.notEquals`:
   *
   * - `markAsRead.in`:
   *
   * - `markAsRead.equals`:
   *
   * - `link.specified`:
   *
   * - `link.notEquals`:
   *
   * - `link.in`:
   *
   * - `link.equals`:
   *
   * - `link.doesNotContain`:
   *
   * - `link.contains`:
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
   * - `date.specified`:
   *
   * - `date.notEquals`:
   *
   * - `date.lessThanOrEqual`:
   *
   * - `date.lessThan`:
   *
   * - `date.in[0].nano`:
   *
   * - `date.in[0].epochSecond`:
   *
   * - `date.greaterThanOrEqual`:
   *
   * - `date.greaterThan`:
   *
   * - `date.equals`:
   *
   * - `contentType.specified`:
   *
   * - `contentType.notEquals`:
   *
   * - `contentType.in`:
   *
   * - `contentType.equals`:
   *
   * @return OK
   */
  getAllNotificationsUsingGET(params: NotificationResourceService.GetAllNotificationsUsingGETParams): __Observable<Array<NotificationDTO>> {
    return this.getAllNotificationsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<NotificationDTO>)
    );
  }

  /**
   * createNotification
   * @param notificationDTO notificationDTO
   * @return OK
   */
  createNotificationUsingPOSTResponse(notificationDTO: NotificationDTO): __Observable<__StrictHttpResponse<NotificationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = notificationDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/notifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationDTO>;
      })
    );
  }
  /**
   * createNotification
   * @param notificationDTO notificationDTO
   * @return OK
   */
  createNotificationUsingPOST(notificationDTO: NotificationDTO): __Observable<NotificationDTO> {
    return this.createNotificationUsingPOSTResponse(notificationDTO).pipe(
      __map(_r => _r.body as NotificationDTO)
    );
  }

  /**
   * updateNotification
   * @param notificationDTO notificationDTO
   * @return OK
   */
  updateNotificationUsingPUTResponse(notificationDTO: NotificationDTO): __Observable<__StrictHttpResponse<NotificationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = notificationDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/notifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationDTO>;
      })
    );
  }
  /**
   * updateNotification
   * @param notificationDTO notificationDTO
   * @return OK
   */
  updateNotificationUsingPUT(notificationDTO: NotificationDTO): __Observable<NotificationDTO> {
    return this.updateNotificationUsingPUTResponse(notificationDTO).pipe(
      __map(_r => _r.body as NotificationDTO)
    );
  }

  /**
   * countNotifications
   * @param params The `NotificationResourceService.CountNotificationsUsingGETParams` containing the following parameters:
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
   * - `notificationMetaDataId.specified`:
   *
   * - `notificationMetaDataId.notEquals`:
   *
   * - `notificationMetaDataId.lessThanOrEqual`:
   *
   * - `notificationMetaDataId.lessThan`:
   *
   * - `notificationMetaDataId.in`:
   *
   * - `notificationMetaDataId.greaterThanOrEqual`:
   *
   * - `notificationMetaDataId.greaterThan`:
   *
   * - `notificationMetaDataId.equals`:
   *
   * - `markAsRead.specified`:
   *
   * - `markAsRead.notEquals`:
   *
   * - `markAsRead.in`:
   *
   * - `markAsRead.equals`:
   *
   * - `link.specified`:
   *
   * - `link.notEquals`:
   *
   * - `link.in`:
   *
   * - `link.equals`:
   *
   * - `link.doesNotContain`:
   *
   * - `link.contains`:
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
   * - `date.specified`:
   *
   * - `date.notEquals`:
   *
   * - `date.lessThanOrEqual`:
   *
   * - `date.lessThan`:
   *
   * - `date.in[0].nano`:
   *
   * - `date.in[0].epochSecond`:
   *
   * - `date.greaterThanOrEqual`:
   *
   * - `date.greaterThan`:
   *
   * - `date.equals`:
   *
   * - `contentType.specified`:
   *
   * - `contentType.notEquals`:
   *
   * - `contentType.in`:
   *
   * - `contentType.equals`:
   *
   * @return OK
   */
  countNotificationsUsingGETResponse(params: NotificationResourceService.CountNotificationsUsingGETParams): __Observable<__StrictHttpResponse<number>> {
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
    if (params.notificationMetaDataIdSpecified != null) __params = __params.set('notificationMetaDataId.specified', params.notificationMetaDataIdSpecified.toString());
    if (params.notificationMetaDataIdNotEquals != null) __params = __params.set('notificationMetaDataId.notEquals', params.notificationMetaDataIdNotEquals.toString());
    if (params.notificationMetaDataIdLessThanOrEqual != null) __params = __params.set('notificationMetaDataId.lessThanOrEqual', params.notificationMetaDataIdLessThanOrEqual.toString());
    if (params.notificationMetaDataIdLessThan != null) __params = __params.set('notificationMetaDataId.lessThan', params.notificationMetaDataIdLessThan.toString());
    (params.notificationMetaDataIdIn || []).forEach(val => {if (val != null) __params = __params.append('notificationMetaDataId.in', val.toString())});
    if (params.notificationMetaDataIdGreaterThanOrEqual != null) __params = __params.set('notificationMetaDataId.greaterThanOrEqual', params.notificationMetaDataIdGreaterThanOrEqual.toString());
    if (params.notificationMetaDataIdGreaterThan != null) __params = __params.set('notificationMetaDataId.greaterThan', params.notificationMetaDataIdGreaterThan.toString());
    if (params.notificationMetaDataIdEquals != null) __params = __params.set('notificationMetaDataId.equals', params.notificationMetaDataIdEquals.toString());
    if (params.markAsReadSpecified != null) __params = __params.set('markAsRead.specified', params.markAsReadSpecified.toString());
    if (params.markAsReadNotEquals != null) __params = __params.set('markAsRead.notEquals', params.markAsReadNotEquals.toString());
    (params.markAsReadIn || []).forEach(val => {if (val != null) __params = __params.append('markAsRead.in', val.toString())});
    if (params.markAsReadEquals != null) __params = __params.set('markAsRead.equals', params.markAsReadEquals.toString());
    if (params.linkSpecified != null) __params = __params.set('link.specified', params.linkSpecified.toString());
    if (params.linkNotEquals != null) __params = __params.set('link.notEquals', params.linkNotEquals.toString());
    (params.linkIn || []).forEach(val => {if (val != null) __params = __params.append('link.in', val.toString())});
    if (params.linkEquals != null) __params = __params.set('link.equals', params.linkEquals.toString());
    if (params.linkDoesNotContain != null) __params = __params.set('link.doesNotContain', params.linkDoesNotContain.toString());
    if (params.linkContains != null) __params = __params.set('link.contains', params.linkContains.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.dateSpecified != null) __params = __params.set('date.specified', params.dateSpecified.toString());
    if (params.dateNotEquals != null) __params = __params.set('date.notEquals', params.dateNotEquals.toString());
    if (params.dateLessThanOrEqual != null) __params = __params.set('date.lessThanOrEqual', params.dateLessThanOrEqual.toString());
    if (params.dateLessThan != null) __params = __params.set('date.lessThan', params.dateLessThan.toString());
    if (params.dateIn0Nano != null) __params = __params.set('date.in[0].nano', params.dateIn0Nano.toString());
    if (params.dateIn0EpochSecond != null) __params = __params.set('date.in[0].epochSecond', params.dateIn0EpochSecond.toString());
    if (params.dateGreaterThanOrEqual != null) __params = __params.set('date.greaterThanOrEqual', params.dateGreaterThanOrEqual.toString());
    if (params.dateGreaterThan != null) __params = __params.set('date.greaterThan', params.dateGreaterThan.toString());
    if (params.dateEquals != null) __params = __params.set('date.equals', params.dateEquals.toString());
    if (params.contentTypeSpecified != null) __params = __params.set('contentType.specified', params.contentTypeSpecified.toString());
    if (params.contentTypeNotEquals != null) __params = __params.set('contentType.notEquals', params.contentTypeNotEquals.toString());
    (params.contentTypeIn || []).forEach(val => {if (val != null) __params = __params.append('contentType.in', val.toString())});
    if (params.contentTypeEquals != null) __params = __params.set('contentType.equals', params.contentTypeEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/notifications/count`,
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
   * countNotifications
   * @param params The `NotificationResourceService.CountNotificationsUsingGETParams` containing the following parameters:
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
   * - `notificationMetaDataId.specified`:
   *
   * - `notificationMetaDataId.notEquals`:
   *
   * - `notificationMetaDataId.lessThanOrEqual`:
   *
   * - `notificationMetaDataId.lessThan`:
   *
   * - `notificationMetaDataId.in`:
   *
   * - `notificationMetaDataId.greaterThanOrEqual`:
   *
   * - `notificationMetaDataId.greaterThan`:
   *
   * - `notificationMetaDataId.equals`:
   *
   * - `markAsRead.specified`:
   *
   * - `markAsRead.notEquals`:
   *
   * - `markAsRead.in`:
   *
   * - `markAsRead.equals`:
   *
   * - `link.specified`:
   *
   * - `link.notEquals`:
   *
   * - `link.in`:
   *
   * - `link.equals`:
   *
   * - `link.doesNotContain`:
   *
   * - `link.contains`:
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
   * - `date.specified`:
   *
   * - `date.notEquals`:
   *
   * - `date.lessThanOrEqual`:
   *
   * - `date.lessThan`:
   *
   * - `date.in[0].nano`:
   *
   * - `date.in[0].epochSecond`:
   *
   * - `date.greaterThanOrEqual`:
   *
   * - `date.greaterThan`:
   *
   * - `date.equals`:
   *
   * - `contentType.specified`:
   *
   * - `contentType.notEquals`:
   *
   * - `contentType.in`:
   *
   * - `contentType.equals`:
   *
   * @return OK
   */
  countNotificationsUsingGET(params: NotificationResourceService.CountNotificationsUsingGETParams): __Observable<number> {
    return this.countNotificationsUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getNotification
   * @param id id
   * @return OK
   */
  getNotificationUsingGETResponse(id: number): __Observable<__StrictHttpResponse<NotificationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/notifications/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationDTO>;
      })
    );
  }
  /**
   * getNotification
   * @param id id
   * @return OK
   */
  getNotificationUsingGET(id: number): __Observable<NotificationDTO> {
    return this.getNotificationUsingGETResponse(id).pipe(
      __map(_r => _r.body as NotificationDTO)
    );
  }

  /**
   * deleteNotification
   * @param id id
   */
  deleteNotificationUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/notifications/${encodeURIComponent(id)}`,
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
   * deleteNotification
   * @param id id
   */
  deleteNotificationUsingDELETE(id: number): __Observable<null> {
    return this.deleteNotificationUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module NotificationResourceService {

  /**
   * Parameters for getAllNotificationsUsingGET
   */
  export interface GetAllNotificationsUsingGETParams {
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
    notificationMetaDataIdSpecified?: boolean;
    notificationMetaDataIdNotEquals?: number;
    notificationMetaDataIdLessThanOrEqual?: number;
    notificationMetaDataIdLessThan?: number;
    notificationMetaDataIdIn?: Array<number>;
    notificationMetaDataIdGreaterThanOrEqual?: number;
    notificationMetaDataIdGreaterThan?: number;
    notificationMetaDataIdEquals?: number;
    markAsReadSpecified?: boolean;
    markAsReadNotEquals?: boolean;
    markAsReadIn?: Array<boolean>;
    markAsReadEquals?: boolean;
    linkSpecified?: boolean;
    linkNotEquals?: string;
    linkIn?: Array<string>;
    linkEquals?: string;
    linkDoesNotContain?: string;
    linkContains?: string;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    dateSpecified?: boolean;
    dateNotEquals?: string;
    dateLessThanOrEqual?: string;
    dateLessThan?: string;
    dateIn0Nano?: number;
    dateIn0EpochSecond?: number;
    dateGreaterThanOrEqual?: string;
    dateGreaterThan?: string;
    dateEquals?: string;
    contentTypeSpecified?: boolean;
    contentTypeNotEquals?: 'TEXT' | 'HTML';
    contentTypeIn?: Array<'TEXT' | 'HTML'>;
    contentTypeEquals?: 'TEXT' | 'HTML';
  }

  /**
   * Parameters for countNotificationsUsingGET
   */
  export interface CountNotificationsUsingGETParams {
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
    notificationMetaDataIdSpecified?: boolean;
    notificationMetaDataIdNotEquals?: number;
    notificationMetaDataIdLessThanOrEqual?: number;
    notificationMetaDataIdLessThan?: number;
    notificationMetaDataIdIn?: Array<number>;
    notificationMetaDataIdGreaterThanOrEqual?: number;
    notificationMetaDataIdGreaterThan?: number;
    notificationMetaDataIdEquals?: number;
    markAsReadSpecified?: boolean;
    markAsReadNotEquals?: boolean;
    markAsReadIn?: Array<boolean>;
    markAsReadEquals?: boolean;
    linkSpecified?: boolean;
    linkNotEquals?: string;
    linkIn?: Array<string>;
    linkEquals?: string;
    linkDoesNotContain?: string;
    linkContains?: string;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    dateSpecified?: boolean;
    dateNotEquals?: string;
    dateLessThanOrEqual?: string;
    dateLessThan?: string;
    dateIn0Nano?: number;
    dateIn0EpochSecond?: number;
    dateGreaterThanOrEqual?: string;
    dateGreaterThan?: string;
    dateEquals?: string;
    contentTypeSpecified?: boolean;
    contentTypeNotEquals?: 'TEXT' | 'HTML';
    contentTypeIn?: Array<'TEXT' | 'HTML'>;
    contentTypeEquals?: 'TEXT' | 'HTML';
  }
}

export { NotificationResourceService }
