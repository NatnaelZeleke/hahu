/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LikesDTO } from '../models/likes-dto';

/**
 * Likes Resource
 */
@Injectable({
  providedIn: 'root',
})
class LikesResourceService extends __BaseService {
  static readonly getAllLikesUsingGETPath = '/api/likes';
  static readonly createLikesUsingPOSTPath = '/api/likes';
  static readonly updateLikesUsingPUTPath = '/api/likes';
  static readonly countLikesUsingGETPath = '/api/likes/count';
  static readonly getLikesUsingGETPath = '/api/likes/{id}';
  static readonly deleteLikesUsingDELETEPath = '/api/likes/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllLikes
   * @param params The `LikesResourceService.GetAllLikesUsingGETParams` containing the following parameters:
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
   * - `postId.specified`:
   *
   * - `postId.notEquals`:
   *
   * - `postId.lessThanOrEqual`:
   *
   * - `postId.lessThan`:
   *
   * - `postId.in`:
   *
   * - `postId.greaterThanOrEqual`:
   *
   * - `postId.greaterThan`:
   *
   * - `postId.equals`:
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
   * - `commentId.specified`:
   *
   * - `commentId.notEquals`:
   *
   * - `commentId.lessThanOrEqual`:
   *
   * - `commentId.lessThan`:
   *
   * - `commentId.in`:
   *
   * - `commentId.greaterThanOrEqual`:
   *
   * - `commentId.greaterThan`:
   *
   * - `commentId.equals`:
   *
   * @return OK
   */
  getAllLikesUsingGETResponse(params: LikesResourceService.GetAllLikesUsingGETParams): __Observable<__StrictHttpResponse<Array<LikesDTO>>> {
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
    if (params.registeredTimeSpecified != null) __params = __params.set('registeredTime.specified', params.registeredTimeSpecified.toString());
    if (params.registeredTimeNotEquals != null) __params = __params.set('registeredTime.notEquals', params.registeredTimeNotEquals.toString());
    if (params.registeredTimeLessThanOrEqual != null) __params = __params.set('registeredTime.lessThanOrEqual', params.registeredTimeLessThanOrEqual.toString());
    if (params.registeredTimeLessThan != null) __params = __params.set('registeredTime.lessThan', params.registeredTimeLessThan.toString());
    if (params.registeredTimeIn0Nano != null) __params = __params.set('registeredTime.in[0].nano', params.registeredTimeIn0Nano.toString());
    if (params.registeredTimeIn0EpochSecond != null) __params = __params.set('registeredTime.in[0].epochSecond', params.registeredTimeIn0EpochSecond.toString());
    if (params.registeredTimeGreaterThanOrEqual != null) __params = __params.set('registeredTime.greaterThanOrEqual', params.registeredTimeGreaterThanOrEqual.toString());
    if (params.registeredTimeGreaterThan != null) __params = __params.set('registeredTime.greaterThan', params.registeredTimeGreaterThan.toString());
    if (params.registeredTimeEquals != null) __params = __params.set('registeredTime.equals', params.registeredTimeEquals.toString());
    if (params.postIdSpecified != null) __params = __params.set('postId.specified', params.postIdSpecified.toString());
    if (params.postIdNotEquals != null) __params = __params.set('postId.notEquals', params.postIdNotEquals.toString());
    if (params.postIdLessThanOrEqual != null) __params = __params.set('postId.lessThanOrEqual', params.postIdLessThanOrEqual.toString());
    if (params.postIdLessThan != null) __params = __params.set('postId.lessThan', params.postIdLessThan.toString());
    (params.postIdIn || []).forEach(val => {if (val != null) __params = __params.append('postId.in', val.toString())});
    if (params.postIdGreaterThanOrEqual != null) __params = __params.set('postId.greaterThanOrEqual', params.postIdGreaterThanOrEqual.toString());
    if (params.postIdGreaterThan != null) __params = __params.set('postId.greaterThan', params.postIdGreaterThan.toString());
    if (params.postIdEquals != null) __params = __params.set('postId.equals', params.postIdEquals.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.commentIdSpecified != null) __params = __params.set('commentId.specified', params.commentIdSpecified.toString());
    if (params.commentIdNotEquals != null) __params = __params.set('commentId.notEquals', params.commentIdNotEquals.toString());
    if (params.commentIdLessThanOrEqual != null) __params = __params.set('commentId.lessThanOrEqual', params.commentIdLessThanOrEqual.toString());
    if (params.commentIdLessThan != null) __params = __params.set('commentId.lessThan', params.commentIdLessThan.toString());
    (params.commentIdIn || []).forEach(val => {if (val != null) __params = __params.append('commentId.in', val.toString())});
    if (params.commentIdGreaterThanOrEqual != null) __params = __params.set('commentId.greaterThanOrEqual', params.commentIdGreaterThanOrEqual.toString());
    if (params.commentIdGreaterThan != null) __params = __params.set('commentId.greaterThan', params.commentIdGreaterThan.toString());
    if (params.commentIdEquals != null) __params = __params.set('commentId.equals', params.commentIdEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/likes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LikesDTO>>;
      })
    );
  }
  /**
   * getAllLikes
   * @param params The `LikesResourceService.GetAllLikesUsingGETParams` containing the following parameters:
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
   * - `postId.specified`:
   *
   * - `postId.notEquals`:
   *
   * - `postId.lessThanOrEqual`:
   *
   * - `postId.lessThan`:
   *
   * - `postId.in`:
   *
   * - `postId.greaterThanOrEqual`:
   *
   * - `postId.greaterThan`:
   *
   * - `postId.equals`:
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
   * - `commentId.specified`:
   *
   * - `commentId.notEquals`:
   *
   * - `commentId.lessThanOrEqual`:
   *
   * - `commentId.lessThan`:
   *
   * - `commentId.in`:
   *
   * - `commentId.greaterThanOrEqual`:
   *
   * - `commentId.greaterThan`:
   *
   * - `commentId.equals`:
   *
   * @return OK
   */
  getAllLikesUsingGET(params: LikesResourceService.GetAllLikesUsingGETParams): __Observable<Array<LikesDTO>> {
    return this.getAllLikesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<LikesDTO>)
    );
  }

  /**
   * createLikes
   * @param likesDTO likesDTO
   * @return OK
   */
  createLikesUsingPOSTResponse(likesDTO: LikesDTO): __Observable<__StrictHttpResponse<LikesDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = likesDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/likes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LikesDTO>;
      })
    );
  }
  /**
   * createLikes
   * @param likesDTO likesDTO
   * @return OK
   */
  createLikesUsingPOST(likesDTO: LikesDTO): __Observable<LikesDTO> {
    return this.createLikesUsingPOSTResponse(likesDTO).pipe(
      __map(_r => _r.body as LikesDTO)
    );
  }

  /**
   * updateLikes
   * @param likesDTO likesDTO
   * @return OK
   */
  updateLikesUsingPUTResponse(likesDTO: LikesDTO): __Observable<__StrictHttpResponse<LikesDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = likesDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/likes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LikesDTO>;
      })
    );
  }
  /**
   * updateLikes
   * @param likesDTO likesDTO
   * @return OK
   */
  updateLikesUsingPUT(likesDTO: LikesDTO): __Observable<LikesDTO> {
    return this.updateLikesUsingPUTResponse(likesDTO).pipe(
      __map(_r => _r.body as LikesDTO)
    );
  }

  /**
   * countLikes
   * @param params The `LikesResourceService.CountLikesUsingGETParams` containing the following parameters:
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
   * - `postId.specified`:
   *
   * - `postId.notEquals`:
   *
   * - `postId.lessThanOrEqual`:
   *
   * - `postId.lessThan`:
   *
   * - `postId.in`:
   *
   * - `postId.greaterThanOrEqual`:
   *
   * - `postId.greaterThan`:
   *
   * - `postId.equals`:
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
   * - `commentId.specified`:
   *
   * - `commentId.notEquals`:
   *
   * - `commentId.lessThanOrEqual`:
   *
   * - `commentId.lessThan`:
   *
   * - `commentId.in`:
   *
   * - `commentId.greaterThanOrEqual`:
   *
   * - `commentId.greaterThan`:
   *
   * - `commentId.equals`:
   *
   * @return OK
   */
  countLikesUsingGETResponse(params: LikesResourceService.CountLikesUsingGETParams): __Observable<__StrictHttpResponse<number>> {
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
    if (params.registeredTimeSpecified != null) __params = __params.set('registeredTime.specified', params.registeredTimeSpecified.toString());
    if (params.registeredTimeNotEquals != null) __params = __params.set('registeredTime.notEquals', params.registeredTimeNotEquals.toString());
    if (params.registeredTimeLessThanOrEqual != null) __params = __params.set('registeredTime.lessThanOrEqual', params.registeredTimeLessThanOrEqual.toString());
    if (params.registeredTimeLessThan != null) __params = __params.set('registeredTime.lessThan', params.registeredTimeLessThan.toString());
    if (params.registeredTimeIn0Nano != null) __params = __params.set('registeredTime.in[0].nano', params.registeredTimeIn0Nano.toString());
    if (params.registeredTimeIn0EpochSecond != null) __params = __params.set('registeredTime.in[0].epochSecond', params.registeredTimeIn0EpochSecond.toString());
    if (params.registeredTimeGreaterThanOrEqual != null) __params = __params.set('registeredTime.greaterThanOrEqual', params.registeredTimeGreaterThanOrEqual.toString());
    if (params.registeredTimeGreaterThan != null) __params = __params.set('registeredTime.greaterThan', params.registeredTimeGreaterThan.toString());
    if (params.registeredTimeEquals != null) __params = __params.set('registeredTime.equals', params.registeredTimeEquals.toString());
    if (params.postIdSpecified != null) __params = __params.set('postId.specified', params.postIdSpecified.toString());
    if (params.postIdNotEquals != null) __params = __params.set('postId.notEquals', params.postIdNotEquals.toString());
    if (params.postIdLessThanOrEqual != null) __params = __params.set('postId.lessThanOrEqual', params.postIdLessThanOrEqual.toString());
    if (params.postIdLessThan != null) __params = __params.set('postId.lessThan', params.postIdLessThan.toString());
    (params.postIdIn || []).forEach(val => {if (val != null) __params = __params.append('postId.in', val.toString())});
    if (params.postIdGreaterThanOrEqual != null) __params = __params.set('postId.greaterThanOrEqual', params.postIdGreaterThanOrEqual.toString());
    if (params.postIdGreaterThan != null) __params = __params.set('postId.greaterThan', params.postIdGreaterThan.toString());
    if (params.postIdEquals != null) __params = __params.set('postId.equals', params.postIdEquals.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.commentIdSpecified != null) __params = __params.set('commentId.specified', params.commentIdSpecified.toString());
    if (params.commentIdNotEquals != null) __params = __params.set('commentId.notEquals', params.commentIdNotEquals.toString());
    if (params.commentIdLessThanOrEqual != null) __params = __params.set('commentId.lessThanOrEqual', params.commentIdLessThanOrEqual.toString());
    if (params.commentIdLessThan != null) __params = __params.set('commentId.lessThan', params.commentIdLessThan.toString());
    (params.commentIdIn || []).forEach(val => {if (val != null) __params = __params.append('commentId.in', val.toString())});
    if (params.commentIdGreaterThanOrEqual != null) __params = __params.set('commentId.greaterThanOrEqual', params.commentIdGreaterThanOrEqual.toString());
    if (params.commentIdGreaterThan != null) __params = __params.set('commentId.greaterThan', params.commentIdGreaterThan.toString());
    if (params.commentIdEquals != null) __params = __params.set('commentId.equals', params.commentIdEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/likes/count`,
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
   * countLikes
   * @param params The `LikesResourceService.CountLikesUsingGETParams` containing the following parameters:
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
   * - `postId.specified`:
   *
   * - `postId.notEquals`:
   *
   * - `postId.lessThanOrEqual`:
   *
   * - `postId.lessThan`:
   *
   * - `postId.in`:
   *
   * - `postId.greaterThanOrEqual`:
   *
   * - `postId.greaterThan`:
   *
   * - `postId.equals`:
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
   * - `commentId.specified`:
   *
   * - `commentId.notEquals`:
   *
   * - `commentId.lessThanOrEqual`:
   *
   * - `commentId.lessThan`:
   *
   * - `commentId.in`:
   *
   * - `commentId.greaterThanOrEqual`:
   *
   * - `commentId.greaterThan`:
   *
   * - `commentId.equals`:
   *
   * @return OK
   */
  countLikesUsingGET(params: LikesResourceService.CountLikesUsingGETParams): __Observable<number> {
    return this.countLikesUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getLikes
   * @param id id
   * @return OK
   */
  getLikesUsingGETResponse(id: number): __Observable<__StrictHttpResponse<LikesDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/likes/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LikesDTO>;
      })
    );
  }
  /**
   * getLikes
   * @param id id
   * @return OK
   */
  getLikesUsingGET(id: number): __Observable<LikesDTO> {
    return this.getLikesUsingGETResponse(id).pipe(
      __map(_r => _r.body as LikesDTO)
    );
  }

  /**
   * deleteLikes
   * @param id id
   */
  deleteLikesUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/likes/${encodeURIComponent(id)}`,
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
   * deleteLikes
   * @param id id
   */
  deleteLikesUsingDELETE(id: number): __Observable<null> {
    return this.deleteLikesUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module LikesResourceService {

  /**
   * Parameters for getAllLikesUsingGET
   */
  export interface GetAllLikesUsingGETParams {
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
    registeredTimeSpecified?: boolean;
    registeredTimeNotEquals?: string;
    registeredTimeLessThanOrEqual?: string;
    registeredTimeLessThan?: string;
    registeredTimeIn0Nano?: number;
    registeredTimeIn0EpochSecond?: number;
    registeredTimeGreaterThanOrEqual?: string;
    registeredTimeGreaterThan?: string;
    registeredTimeEquals?: string;
    postIdSpecified?: boolean;
    postIdNotEquals?: number;
    postIdLessThanOrEqual?: number;
    postIdLessThan?: number;
    postIdIn?: Array<number>;
    postIdGreaterThanOrEqual?: number;
    postIdGreaterThan?: number;
    postIdEquals?: number;

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
    commentIdSpecified?: boolean;
    commentIdNotEquals?: number;
    commentIdLessThanOrEqual?: number;
    commentIdLessThan?: number;
    commentIdIn?: Array<number>;
    commentIdGreaterThanOrEqual?: number;
    commentIdGreaterThan?: number;
    commentIdEquals?: number;
  }

  /**
   * Parameters for countLikesUsingGET
   */
  export interface CountLikesUsingGETParams {
    userIdSpecified?: boolean;
    userIdNotEquals?: number;
    userIdLessThanOrEqual?: number;
    userIdLessThan?: number;
    userIdIn?: Array<number>;
    userIdGreaterThanOrEqual?: number;
    userIdGreaterThan?: number;
    userIdEquals?: number;
    registeredTimeSpecified?: boolean;
    registeredTimeNotEquals?: string;
    registeredTimeLessThanOrEqual?: string;
    registeredTimeLessThan?: string;
    registeredTimeIn0Nano?: number;
    registeredTimeIn0EpochSecond?: number;
    registeredTimeGreaterThanOrEqual?: string;
    registeredTimeGreaterThan?: string;
    registeredTimeEquals?: string;
    postIdSpecified?: boolean;
    postIdNotEquals?: number;
    postIdLessThanOrEqual?: number;
    postIdLessThan?: number;
    postIdIn?: Array<number>;
    postIdGreaterThanOrEqual?: number;
    postIdGreaterThan?: number;
    postIdEquals?: number;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    commentIdSpecified?: boolean;
    commentIdNotEquals?: number;
    commentIdLessThanOrEqual?: number;
    commentIdLessThan?: number;
    commentIdIn?: Array<number>;
    commentIdGreaterThanOrEqual?: number;
    commentIdGreaterThan?: number;
    commentIdEquals?: number;
  }
}

export { LikesResourceService }
