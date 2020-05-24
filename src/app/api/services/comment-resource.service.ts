/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommentDTO } from '../models/comment-dto';

/**
 * Comment Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommentResourceService extends __BaseService {
  static readonly getAllCommentsUsingGETPath = '/api/comments';
  static readonly createCommentUsingPOSTPath = '/api/comments';
  static readonly updateCommentUsingPUTPath = '/api/comments';
  static readonly countCommentsUsingGETPath = '/api/comments/count';
  static readonly getCommentUsingGETPath = '/api/comments/{id}';
  static readonly deleteCommentUsingDELETEPath = '/api/comments/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllComments
   * @param params The `CommentResourceService.GetAllCommentsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `replyId.specified`:
   *
   * - `replyId.notEquals`:
   *
   * - `replyId.lessThanOrEqual`:
   *
   * - `replyId.lessThan`:
   *
   * - `replyId.in`:
   *
   * - `replyId.greaterThanOrEqual`:
   *
   * - `replyId.greaterThan`:
   *
   * - `replyId.equals`:
   *
   * - `postedDate.specified`:
   *
   * - `postedDate.notEquals`:
   *
   * - `postedDate.lessThanOrEqual`:
   *
   * - `postedDate.lessThan`:
   *
   * - `postedDate.in[0].nano`:
   *
   * - `postedDate.in[0].epochSecond`:
   *
   * - `postedDate.greaterThanOrEqual`:
   *
   * - `postedDate.greaterThan`:
   *
   * - `postedDate.equals`:
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
   * - `modifiedDate.specified`:
   *
   * - `modifiedDate.notEquals`:
   *
   * - `modifiedDate.lessThanOrEqual`:
   *
   * - `modifiedDate.lessThan`:
   *
   * - `modifiedDate.in[0].nano`:
   *
   * - `modifiedDate.in[0].epochSecond`:
   *
   * - `modifiedDate.greaterThanOrEqual`:
   *
   * - `modifiedDate.greaterThan`:
   *
   * - `modifiedDate.equals`:
   *
   * - `likeId.specified`:
   *
   * - `likeId.notEquals`:
   *
   * - `likeId.lessThanOrEqual`:
   *
   * - `likeId.lessThan`:
   *
   * - `likeId.in`:
   *
   * - `likeId.greaterThanOrEqual`:
   *
   * - `likeId.greaterThan`:
   *
   * - `likeId.equals`:
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
  getAllCommentsUsingGETResponse(params: CommentResourceService.GetAllCommentsUsingGETParams): __Observable<__StrictHttpResponse<Array<CommentDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.replyIdSpecified != null) __params = __params.set('replyId.specified', params.replyIdSpecified.toString());
    if (params.replyIdNotEquals != null) __params = __params.set('replyId.notEquals', params.replyIdNotEquals.toString());
    if (params.replyIdLessThanOrEqual != null) __params = __params.set('replyId.lessThanOrEqual', params.replyIdLessThanOrEqual.toString());
    if (params.replyIdLessThan != null) __params = __params.set('replyId.lessThan', params.replyIdLessThan.toString());
    (params.replyIdIn || []).forEach(val => {if (val != null) __params = __params.append('replyId.in', val.toString())});
    if (params.replyIdGreaterThanOrEqual != null) __params = __params.set('replyId.greaterThanOrEqual', params.replyIdGreaterThanOrEqual.toString());
    if (params.replyIdGreaterThan != null) __params = __params.set('replyId.greaterThan', params.replyIdGreaterThan.toString());
    if (params.replyIdEquals != null) __params = __params.set('replyId.equals', params.replyIdEquals.toString());
    if (params.postedDateSpecified != null) __params = __params.set('postedDate.specified', params.postedDateSpecified.toString());
    if (params.postedDateNotEquals != null) __params = __params.set('postedDate.notEquals', params.postedDateNotEquals.toString());
    if (params.postedDateLessThanOrEqual != null) __params = __params.set('postedDate.lessThanOrEqual', params.postedDateLessThanOrEqual.toString());
    if (params.postedDateLessThan != null) __params = __params.set('postedDate.lessThan', params.postedDateLessThan.toString());
    if (params.postedDateIn0Nano != null) __params = __params.set('postedDate.in[0].nano', params.postedDateIn0Nano.toString());
    if (params.postedDateIn0EpochSecond != null) __params = __params.set('postedDate.in[0].epochSecond', params.postedDateIn0EpochSecond.toString());
    if (params.postedDateGreaterThanOrEqual != null) __params = __params.set('postedDate.greaterThanOrEqual', params.postedDateGreaterThanOrEqual.toString());
    if (params.postedDateGreaterThan != null) __params = __params.set('postedDate.greaterThan', params.postedDateGreaterThan.toString());
    if (params.postedDateEquals != null) __params = __params.set('postedDate.equals', params.postedDateEquals.toString());
    if (params.postIdSpecified != null) __params = __params.set('postId.specified', params.postIdSpecified.toString());
    if (params.postIdNotEquals != null) __params = __params.set('postId.notEquals', params.postIdNotEquals.toString());
    if (params.postIdLessThanOrEqual != null) __params = __params.set('postId.lessThanOrEqual', params.postIdLessThanOrEqual.toString());
    if (params.postIdLessThan != null) __params = __params.set('postId.lessThan', params.postIdLessThan.toString());
    (params.postIdIn || []).forEach(val => {if (val != null) __params = __params.append('postId.in', val.toString())});
    if (params.postIdGreaterThanOrEqual != null) __params = __params.set('postId.greaterThanOrEqual', params.postIdGreaterThanOrEqual.toString());
    if (params.postIdGreaterThan != null) __params = __params.set('postId.greaterThan', params.postIdGreaterThan.toString());
    if (params.postIdEquals != null) __params = __params.set('postId.equals', params.postIdEquals.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.modifiedDateSpecified != null) __params = __params.set('modifiedDate.specified', params.modifiedDateSpecified.toString());
    if (params.modifiedDateNotEquals != null) __params = __params.set('modifiedDate.notEquals', params.modifiedDateNotEquals.toString());
    if (params.modifiedDateLessThanOrEqual != null) __params = __params.set('modifiedDate.lessThanOrEqual', params.modifiedDateLessThanOrEqual.toString());
    if (params.modifiedDateLessThan != null) __params = __params.set('modifiedDate.lessThan', params.modifiedDateLessThan.toString());
    if (params.modifiedDateIn0Nano != null) __params = __params.set('modifiedDate.in[0].nano', params.modifiedDateIn0Nano.toString());
    if (params.modifiedDateIn0EpochSecond != null) __params = __params.set('modifiedDate.in[0].epochSecond', params.modifiedDateIn0EpochSecond.toString());
    if (params.modifiedDateGreaterThanOrEqual != null) __params = __params.set('modifiedDate.greaterThanOrEqual', params.modifiedDateGreaterThanOrEqual.toString());
    if (params.modifiedDateGreaterThan != null) __params = __params.set('modifiedDate.greaterThan', params.modifiedDateGreaterThan.toString());
    if (params.modifiedDateEquals != null) __params = __params.set('modifiedDate.equals', params.modifiedDateEquals.toString());
    if (params.likeIdSpecified != null) __params = __params.set('likeId.specified', params.likeIdSpecified.toString());
    if (params.likeIdNotEquals != null) __params = __params.set('likeId.notEquals', params.likeIdNotEquals.toString());
    if (params.likeIdLessThanOrEqual != null) __params = __params.set('likeId.lessThanOrEqual', params.likeIdLessThanOrEqual.toString());
    if (params.likeIdLessThan != null) __params = __params.set('likeId.lessThan', params.likeIdLessThan.toString());
    (params.likeIdIn || []).forEach(val => {if (val != null) __params = __params.append('likeId.in', val.toString())});
    if (params.likeIdGreaterThanOrEqual != null) __params = __params.set('likeId.greaterThanOrEqual', params.likeIdGreaterThanOrEqual.toString());
    if (params.likeIdGreaterThan != null) __params = __params.set('likeId.greaterThan', params.likeIdGreaterThan.toString());
    if (params.likeIdEquals != null) __params = __params.set('likeId.equals', params.likeIdEquals.toString());
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
      this.rootUrl + `/api/comments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommentDTO>>;
      })
    );
  }
  /**
   * getAllComments
   * @param params The `CommentResourceService.GetAllCommentsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `replyId.specified`:
   *
   * - `replyId.notEquals`:
   *
   * - `replyId.lessThanOrEqual`:
   *
   * - `replyId.lessThan`:
   *
   * - `replyId.in`:
   *
   * - `replyId.greaterThanOrEqual`:
   *
   * - `replyId.greaterThan`:
   *
   * - `replyId.equals`:
   *
   * - `postedDate.specified`:
   *
   * - `postedDate.notEquals`:
   *
   * - `postedDate.lessThanOrEqual`:
   *
   * - `postedDate.lessThan`:
   *
   * - `postedDate.in[0].nano`:
   *
   * - `postedDate.in[0].epochSecond`:
   *
   * - `postedDate.greaterThanOrEqual`:
   *
   * - `postedDate.greaterThan`:
   *
   * - `postedDate.equals`:
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
   * - `modifiedDate.specified`:
   *
   * - `modifiedDate.notEquals`:
   *
   * - `modifiedDate.lessThanOrEqual`:
   *
   * - `modifiedDate.lessThan`:
   *
   * - `modifiedDate.in[0].nano`:
   *
   * - `modifiedDate.in[0].epochSecond`:
   *
   * - `modifiedDate.greaterThanOrEqual`:
   *
   * - `modifiedDate.greaterThan`:
   *
   * - `modifiedDate.equals`:
   *
   * - `likeId.specified`:
   *
   * - `likeId.notEquals`:
   *
   * - `likeId.lessThanOrEqual`:
   *
   * - `likeId.lessThan`:
   *
   * - `likeId.in`:
   *
   * - `likeId.greaterThanOrEqual`:
   *
   * - `likeId.greaterThan`:
   *
   * - `likeId.equals`:
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
  getAllCommentsUsingGET(params: CommentResourceService.GetAllCommentsUsingGETParams): __Observable<Array<CommentDTO>> {
    return this.getAllCommentsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CommentDTO>)
    );
  }

  /**
   * createComment
   * @param commentDTO commentDTO
   * @return OK
   */
  createCommentUsingPOSTResponse(commentDTO: CommentDTO): __Observable<__StrictHttpResponse<CommentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = commentDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/comments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommentDTO>;
      })
    );
  }
  /**
   * createComment
   * @param commentDTO commentDTO
   * @return OK
   */
  createCommentUsingPOST(commentDTO: CommentDTO): __Observable<CommentDTO> {
    return this.createCommentUsingPOSTResponse(commentDTO).pipe(
      __map(_r => _r.body as CommentDTO)
    );
  }

  /**
   * updateComment
   * @param commentDTO commentDTO
   * @return OK
   */
  updateCommentUsingPUTResponse(commentDTO: CommentDTO): __Observable<__StrictHttpResponse<CommentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = commentDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/comments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommentDTO>;
      })
    );
  }
  /**
   * updateComment
   * @param commentDTO commentDTO
   * @return OK
   */
  updateCommentUsingPUT(commentDTO: CommentDTO): __Observable<CommentDTO> {
    return this.updateCommentUsingPUTResponse(commentDTO).pipe(
      __map(_r => _r.body as CommentDTO)
    );
  }

  /**
   * countComments
   * @param params The `CommentResourceService.CountCommentsUsingGETParams` containing the following parameters:
   *
   * - `replyId.specified`:
   *
   * - `replyId.notEquals`:
   *
   * - `replyId.lessThanOrEqual`:
   *
   * - `replyId.lessThan`:
   *
   * - `replyId.in`:
   *
   * - `replyId.greaterThanOrEqual`:
   *
   * - `replyId.greaterThan`:
   *
   * - `replyId.equals`:
   *
   * - `postedDate.specified`:
   *
   * - `postedDate.notEquals`:
   *
   * - `postedDate.lessThanOrEqual`:
   *
   * - `postedDate.lessThan`:
   *
   * - `postedDate.in[0].nano`:
   *
   * - `postedDate.in[0].epochSecond`:
   *
   * - `postedDate.greaterThanOrEqual`:
   *
   * - `postedDate.greaterThan`:
   *
   * - `postedDate.equals`:
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
   * - `modifiedDate.specified`:
   *
   * - `modifiedDate.notEquals`:
   *
   * - `modifiedDate.lessThanOrEqual`:
   *
   * - `modifiedDate.lessThan`:
   *
   * - `modifiedDate.in[0].nano`:
   *
   * - `modifiedDate.in[0].epochSecond`:
   *
   * - `modifiedDate.greaterThanOrEqual`:
   *
   * - `modifiedDate.greaterThan`:
   *
   * - `modifiedDate.equals`:
   *
   * - `likeId.specified`:
   *
   * - `likeId.notEquals`:
   *
   * - `likeId.lessThanOrEqual`:
   *
   * - `likeId.lessThan`:
   *
   * - `likeId.in`:
   *
   * - `likeId.greaterThanOrEqual`:
   *
   * - `likeId.greaterThan`:
   *
   * - `likeId.equals`:
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
  countCommentsUsingGETResponse(params: CommentResourceService.CountCommentsUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.replyIdSpecified != null) __params = __params.set('replyId.specified', params.replyIdSpecified.toString());
    if (params.replyIdNotEquals != null) __params = __params.set('replyId.notEquals', params.replyIdNotEquals.toString());
    if (params.replyIdLessThanOrEqual != null) __params = __params.set('replyId.lessThanOrEqual', params.replyIdLessThanOrEqual.toString());
    if (params.replyIdLessThan != null) __params = __params.set('replyId.lessThan', params.replyIdLessThan.toString());
    (params.replyIdIn || []).forEach(val => {if (val != null) __params = __params.append('replyId.in', val.toString())});
    if (params.replyIdGreaterThanOrEqual != null) __params = __params.set('replyId.greaterThanOrEqual', params.replyIdGreaterThanOrEqual.toString());
    if (params.replyIdGreaterThan != null) __params = __params.set('replyId.greaterThan', params.replyIdGreaterThan.toString());
    if (params.replyIdEquals != null) __params = __params.set('replyId.equals', params.replyIdEquals.toString());
    if (params.postedDateSpecified != null) __params = __params.set('postedDate.specified', params.postedDateSpecified.toString());
    if (params.postedDateNotEquals != null) __params = __params.set('postedDate.notEquals', params.postedDateNotEquals.toString());
    if (params.postedDateLessThanOrEqual != null) __params = __params.set('postedDate.lessThanOrEqual', params.postedDateLessThanOrEqual.toString());
    if (params.postedDateLessThan != null) __params = __params.set('postedDate.lessThan', params.postedDateLessThan.toString());
    if (params.postedDateIn0Nano != null) __params = __params.set('postedDate.in[0].nano', params.postedDateIn0Nano.toString());
    if (params.postedDateIn0EpochSecond != null) __params = __params.set('postedDate.in[0].epochSecond', params.postedDateIn0EpochSecond.toString());
    if (params.postedDateGreaterThanOrEqual != null) __params = __params.set('postedDate.greaterThanOrEqual', params.postedDateGreaterThanOrEqual.toString());
    if (params.postedDateGreaterThan != null) __params = __params.set('postedDate.greaterThan', params.postedDateGreaterThan.toString());
    if (params.postedDateEquals != null) __params = __params.set('postedDate.equals', params.postedDateEquals.toString());
    if (params.postIdSpecified != null) __params = __params.set('postId.specified', params.postIdSpecified.toString());
    if (params.postIdNotEquals != null) __params = __params.set('postId.notEquals', params.postIdNotEquals.toString());
    if (params.postIdLessThanOrEqual != null) __params = __params.set('postId.lessThanOrEqual', params.postIdLessThanOrEqual.toString());
    if (params.postIdLessThan != null) __params = __params.set('postId.lessThan', params.postIdLessThan.toString());
    (params.postIdIn || []).forEach(val => {if (val != null) __params = __params.append('postId.in', val.toString())});
    if (params.postIdGreaterThanOrEqual != null) __params = __params.set('postId.greaterThanOrEqual', params.postIdGreaterThanOrEqual.toString());
    if (params.postIdGreaterThan != null) __params = __params.set('postId.greaterThan', params.postIdGreaterThan.toString());
    if (params.postIdEquals != null) __params = __params.set('postId.equals', params.postIdEquals.toString());
    if (params.modifiedDateSpecified != null) __params = __params.set('modifiedDate.specified', params.modifiedDateSpecified.toString());
    if (params.modifiedDateNotEquals != null) __params = __params.set('modifiedDate.notEquals', params.modifiedDateNotEquals.toString());
    if (params.modifiedDateLessThanOrEqual != null) __params = __params.set('modifiedDate.lessThanOrEqual', params.modifiedDateLessThanOrEqual.toString());
    if (params.modifiedDateLessThan != null) __params = __params.set('modifiedDate.lessThan', params.modifiedDateLessThan.toString());
    if (params.modifiedDateIn0Nano != null) __params = __params.set('modifiedDate.in[0].nano', params.modifiedDateIn0Nano.toString());
    if (params.modifiedDateIn0EpochSecond != null) __params = __params.set('modifiedDate.in[0].epochSecond', params.modifiedDateIn0EpochSecond.toString());
    if (params.modifiedDateGreaterThanOrEqual != null) __params = __params.set('modifiedDate.greaterThanOrEqual', params.modifiedDateGreaterThanOrEqual.toString());
    if (params.modifiedDateGreaterThan != null) __params = __params.set('modifiedDate.greaterThan', params.modifiedDateGreaterThan.toString());
    if (params.modifiedDateEquals != null) __params = __params.set('modifiedDate.equals', params.modifiedDateEquals.toString());
    if (params.likeIdSpecified != null) __params = __params.set('likeId.specified', params.likeIdSpecified.toString());
    if (params.likeIdNotEquals != null) __params = __params.set('likeId.notEquals', params.likeIdNotEquals.toString());
    if (params.likeIdLessThanOrEqual != null) __params = __params.set('likeId.lessThanOrEqual', params.likeIdLessThanOrEqual.toString());
    if (params.likeIdLessThan != null) __params = __params.set('likeId.lessThan', params.likeIdLessThan.toString());
    (params.likeIdIn || []).forEach(val => {if (val != null) __params = __params.append('likeId.in', val.toString())});
    if (params.likeIdGreaterThanOrEqual != null) __params = __params.set('likeId.greaterThanOrEqual', params.likeIdGreaterThanOrEqual.toString());
    if (params.likeIdGreaterThan != null) __params = __params.set('likeId.greaterThan', params.likeIdGreaterThan.toString());
    if (params.likeIdEquals != null) __params = __params.set('likeId.equals', params.likeIdEquals.toString());
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
      this.rootUrl + `/api/comments/count`,
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
   * countComments
   * @param params The `CommentResourceService.CountCommentsUsingGETParams` containing the following parameters:
   *
   * - `replyId.specified`:
   *
   * - `replyId.notEquals`:
   *
   * - `replyId.lessThanOrEqual`:
   *
   * - `replyId.lessThan`:
   *
   * - `replyId.in`:
   *
   * - `replyId.greaterThanOrEqual`:
   *
   * - `replyId.greaterThan`:
   *
   * - `replyId.equals`:
   *
   * - `postedDate.specified`:
   *
   * - `postedDate.notEquals`:
   *
   * - `postedDate.lessThanOrEqual`:
   *
   * - `postedDate.lessThan`:
   *
   * - `postedDate.in[0].nano`:
   *
   * - `postedDate.in[0].epochSecond`:
   *
   * - `postedDate.greaterThanOrEqual`:
   *
   * - `postedDate.greaterThan`:
   *
   * - `postedDate.equals`:
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
   * - `modifiedDate.specified`:
   *
   * - `modifiedDate.notEquals`:
   *
   * - `modifiedDate.lessThanOrEqual`:
   *
   * - `modifiedDate.lessThan`:
   *
   * - `modifiedDate.in[0].nano`:
   *
   * - `modifiedDate.in[0].epochSecond`:
   *
   * - `modifiedDate.greaterThanOrEqual`:
   *
   * - `modifiedDate.greaterThan`:
   *
   * - `modifiedDate.equals`:
   *
   * - `likeId.specified`:
   *
   * - `likeId.notEquals`:
   *
   * - `likeId.lessThanOrEqual`:
   *
   * - `likeId.lessThan`:
   *
   * - `likeId.in`:
   *
   * - `likeId.greaterThanOrEqual`:
   *
   * - `likeId.greaterThan`:
   *
   * - `likeId.equals`:
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
  countCommentsUsingGET(params: CommentResourceService.CountCommentsUsingGETParams): __Observable<number> {
    return this.countCommentsUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getComment
   * @param id id
   * @return OK
   */
  getCommentUsingGETResponse(id: number): __Observable<__StrictHttpResponse<CommentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/comments/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommentDTO>;
      })
    );
  }
  /**
   * getComment
   * @param id id
   * @return OK
   */
  getCommentUsingGET(id: number): __Observable<CommentDTO> {
    return this.getCommentUsingGETResponse(id).pipe(
      __map(_r => _r.body as CommentDTO)
    );
  }

  /**
   * deleteComment
   * @param id id
   */
  deleteCommentUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/comments/${encodeURIComponent(id)}`,
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
   * deleteComment
   * @param id id
   */
  deleteCommentUsingDELETE(id: number): __Observable<null> {
    return this.deleteCommentUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CommentResourceService {

  /**
   * Parameters for getAllCommentsUsingGET
   */
  export interface GetAllCommentsUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    replyIdSpecified?: boolean;
    replyIdNotEquals?: number;
    replyIdLessThanOrEqual?: number;
    replyIdLessThan?: number;
    replyIdIn?: Array<number>;
    replyIdGreaterThanOrEqual?: number;
    replyIdGreaterThan?: number;
    replyIdEquals?: number;
    postedDateSpecified?: boolean;
    postedDateNotEquals?: string;
    postedDateLessThanOrEqual?: string;
    postedDateLessThan?: string;
    postedDateIn0Nano?: number;
    postedDateIn0EpochSecond?: number;
    postedDateGreaterThanOrEqual?: string;
    postedDateGreaterThan?: string;
    postedDateEquals?: string;
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
    modifiedDateSpecified?: boolean;
    modifiedDateNotEquals?: string;
    modifiedDateLessThanOrEqual?: string;
    modifiedDateLessThan?: string;
    modifiedDateIn0Nano?: number;
    modifiedDateIn0EpochSecond?: number;
    modifiedDateGreaterThanOrEqual?: string;
    modifiedDateGreaterThan?: string;
    modifiedDateEquals?: string;
    likeIdSpecified?: boolean;
    likeIdNotEquals?: number;
    likeIdLessThanOrEqual?: number;
    likeIdLessThan?: number;
    likeIdIn?: Array<number>;
    likeIdGreaterThanOrEqual?: number;
    likeIdGreaterThan?: number;
    likeIdEquals?: number;
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
   * Parameters for countCommentsUsingGET
   */
  export interface CountCommentsUsingGETParams {
    replyIdSpecified?: boolean;
    replyIdNotEquals?: number;
    replyIdLessThanOrEqual?: number;
    replyIdLessThan?: number;
    replyIdIn?: Array<number>;
    replyIdGreaterThanOrEqual?: number;
    replyIdGreaterThan?: number;
    replyIdEquals?: number;
    postedDateSpecified?: boolean;
    postedDateNotEquals?: string;
    postedDateLessThanOrEqual?: string;
    postedDateLessThan?: string;
    postedDateIn0Nano?: number;
    postedDateIn0EpochSecond?: number;
    postedDateGreaterThanOrEqual?: string;
    postedDateGreaterThan?: string;
    postedDateEquals?: string;
    postIdSpecified?: boolean;
    postIdNotEquals?: number;
    postIdLessThanOrEqual?: number;
    postIdLessThan?: number;
    postIdIn?: Array<number>;
    postIdGreaterThanOrEqual?: number;
    postIdGreaterThan?: number;
    postIdEquals?: number;
    modifiedDateSpecified?: boolean;
    modifiedDateNotEquals?: string;
    modifiedDateLessThanOrEqual?: string;
    modifiedDateLessThan?: string;
    modifiedDateIn0Nano?: number;
    modifiedDateIn0EpochSecond?: number;
    modifiedDateGreaterThanOrEqual?: string;
    modifiedDateGreaterThan?: string;
    modifiedDateEquals?: string;
    likeIdSpecified?: boolean;
    likeIdNotEquals?: number;
    likeIdLessThanOrEqual?: number;
    likeIdLessThan?: number;
    likeIdIn?: Array<number>;
    likeIdGreaterThanOrEqual?: number;
    likeIdGreaterThan?: number;
    likeIdEquals?: number;
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

export { CommentResourceService }
