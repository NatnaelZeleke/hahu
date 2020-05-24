/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PostDTO } from '../models/post-dto';

/**
 * Post Resource
 */
@Injectable({
  providedIn: 'root',
})
class PostResourceService extends __BaseService {
  static readonly getAllPostsUsingGETPath = '/api/posts';
  static readonly createPostUsingPOSTPath = '/api/posts';
  static readonly updatePostUsingPUTPath = '/api/posts';
  static readonly countPostsUsingGETPath = '/api/posts/count';
  static readonly getPostUsingGETPath = '/api/posts/{id}';
  static readonly deletePostUsingDELETEPath = '/api/posts/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllPosts
   * @param params The `PostResourceService.GetAllPostsUsingGETParams` containing the following parameters:
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
   * - `tagId.specified`:
   *
   * - `tagId.notEquals`:
   *
   * - `tagId.lessThanOrEqual`:
   *
   * - `tagId.lessThan`:
   *
   * - `tagId.in`:
   *
   * - `tagId.greaterThanOrEqual`:
   *
   * - `tagId.greaterThan`:
   *
   * - `tagId.equals`:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
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
   * - `postType.specified`:
   *
   * - `postType.notEquals`:
   *
   * - `postType.in`:
   *
   * - `postType.equals`:
   *
   * - `postMetaDataId.specified`:
   *
   * - `postMetaDataId.notEquals`:
   *
   * - `postMetaDataId.lessThanOrEqual`:
   *
   * - `postMetaDataId.lessThan`:
   *
   * - `postMetaDataId.in`:
   *
   * - `postMetaDataId.greaterThanOrEqual`:
   *
   * - `postMetaDataId.greaterThan`:
   *
   * - `postMetaDataId.equals`:
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
   * - `instantPostEndDate.specified`:
   *
   * - `instantPostEndDate.notEquals`:
   *
   * - `instantPostEndDate.lessThanOrEqual`:
   *
   * - `instantPostEndDate.lessThan`:
   *
   * - `instantPostEndDate.in[0].nano`:
   *
   * - `instantPostEndDate.in[0].epochSecond`:
   *
   * - `instantPostEndDate.greaterThanOrEqual`:
   *
   * - `instantPostEndDate.greaterThan`:
   *
   * - `instantPostEndDate.equals`:
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
   * - `contentType.specified`:
   *
   * - `contentType.notEquals`:
   *
   * - `contentType.in`:
   *
   * - `contentType.equals`:
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
   * - `categoryId.specified`:
   *
   * - `categoryId.notEquals`:
   *
   * - `categoryId.lessThanOrEqual`:
   *
   * - `categoryId.lessThan`:
   *
   * - `categoryId.in`:
   *
   * - `categoryId.greaterThanOrEqual`:
   *
   * - `categoryId.greaterThan`:
   *
   * - `categoryId.equals`:
   *
   * @return OK
   */
  getAllPostsUsingGETResponse(params: PostResourceService.GetAllPostsUsingGETParams): __Observable<__StrictHttpResponse<Array<PostDTO>>> {
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
    if (params.titleSpecified != null) __params = __params.set('title.specified', params.titleSpecified.toString());
    if (params.titleNotEquals != null) __params = __params.set('title.notEquals', params.titleNotEquals.toString());
    (params.titleIn || []).forEach(val => {if (val != null) __params = __params.append('title.in', val.toString())});
    if (params.titleEquals != null) __params = __params.set('title.equals', params.titleEquals.toString());
    if (params.titleDoesNotContain != null) __params = __params.set('title.doesNotContain', params.titleDoesNotContain.toString());
    if (params.titleContains != null) __params = __params.set('title.contains', params.titleContains.toString());
    if (params.tagIdSpecified != null) __params = __params.set('tagId.specified', params.tagIdSpecified.toString());
    if (params.tagIdNotEquals != null) __params = __params.set('tagId.notEquals', params.tagIdNotEquals.toString());
    if (params.tagIdLessThanOrEqual != null) __params = __params.set('tagId.lessThanOrEqual', params.tagIdLessThanOrEqual.toString());
    if (params.tagIdLessThan != null) __params = __params.set('tagId.lessThan', params.tagIdLessThan.toString());
    (params.tagIdIn || []).forEach(val => {if (val != null) __params = __params.append('tagId.in', val.toString())});
    if (params.tagIdGreaterThanOrEqual != null) __params = __params.set('tagId.greaterThanOrEqual', params.tagIdGreaterThanOrEqual.toString());
    if (params.tagIdGreaterThan != null) __params = __params.set('tagId.greaterThan', params.tagIdGreaterThan.toString());
    if (params.tagIdEquals != null) __params = __params.set('tagId.equals', params.tagIdEquals.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.postedDateSpecified != null) __params = __params.set('postedDate.specified', params.postedDateSpecified.toString());
    if (params.postedDateNotEquals != null) __params = __params.set('postedDate.notEquals', params.postedDateNotEquals.toString());
    if (params.postedDateLessThanOrEqual != null) __params = __params.set('postedDate.lessThanOrEqual', params.postedDateLessThanOrEqual.toString());
    if (params.postedDateLessThan != null) __params = __params.set('postedDate.lessThan', params.postedDateLessThan.toString());
    if (params.postedDateIn0Nano != null) __params = __params.set('postedDate.in[0].nano', params.postedDateIn0Nano.toString());
    if (params.postedDateIn0EpochSecond != null) __params = __params.set('postedDate.in[0].epochSecond', params.postedDateIn0EpochSecond.toString());
    if (params.postedDateGreaterThanOrEqual != null) __params = __params.set('postedDate.greaterThanOrEqual', params.postedDateGreaterThanOrEqual.toString());
    if (params.postedDateGreaterThan != null) __params = __params.set('postedDate.greaterThan', params.postedDateGreaterThan.toString());
    if (params.postedDateEquals != null) __params = __params.set('postedDate.equals', params.postedDateEquals.toString());
    if (params.postTypeSpecified != null) __params = __params.set('postType.specified', params.postTypeSpecified.toString());
    if (params.postTypeNotEquals != null) __params = __params.set('postType.notEquals', params.postTypeNotEquals.toString());
    (params.postTypeIn || []).forEach(val => {if (val != null) __params = __params.append('postType.in', val.toString())});
    if (params.postTypeEquals != null) __params = __params.set('postType.equals', params.postTypeEquals.toString());
    if (params.postMetaDataIdSpecified != null) __params = __params.set('postMetaDataId.specified', params.postMetaDataIdSpecified.toString());
    if (params.postMetaDataIdNotEquals != null) __params = __params.set('postMetaDataId.notEquals', params.postMetaDataIdNotEquals.toString());
    if (params.postMetaDataIdLessThanOrEqual != null) __params = __params.set('postMetaDataId.lessThanOrEqual', params.postMetaDataIdLessThanOrEqual.toString());
    if (params.postMetaDataIdLessThan != null) __params = __params.set('postMetaDataId.lessThan', params.postMetaDataIdLessThan.toString());
    (params.postMetaDataIdIn || []).forEach(val => {if (val != null) __params = __params.append('postMetaDataId.in', val.toString())});
    if (params.postMetaDataIdGreaterThanOrEqual != null) __params = __params.set('postMetaDataId.greaterThanOrEqual', params.postMetaDataIdGreaterThanOrEqual.toString());
    if (params.postMetaDataIdGreaterThan != null) __params = __params.set('postMetaDataId.greaterThan', params.postMetaDataIdGreaterThan.toString());
    if (params.postMetaDataIdEquals != null) __params = __params.set('postMetaDataId.equals', params.postMetaDataIdEquals.toString());
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
    if (params.instantPostEndDateSpecified != null) __params = __params.set('instantPostEndDate.specified', params.instantPostEndDateSpecified.toString());
    if (params.instantPostEndDateNotEquals != null) __params = __params.set('instantPostEndDate.notEquals', params.instantPostEndDateNotEquals.toString());
    if (params.instantPostEndDateLessThanOrEqual != null) __params = __params.set('instantPostEndDate.lessThanOrEqual', params.instantPostEndDateLessThanOrEqual.toString());
    if (params.instantPostEndDateLessThan != null) __params = __params.set('instantPostEndDate.lessThan', params.instantPostEndDateLessThan.toString());
    if (params.instantPostEndDateIn0Nano != null) __params = __params.set('instantPostEndDate.in[0].nano', params.instantPostEndDateIn0Nano.toString());
    if (params.instantPostEndDateIn0EpochSecond != null) __params = __params.set('instantPostEndDate.in[0].epochSecond', params.instantPostEndDateIn0EpochSecond.toString());
    if (params.instantPostEndDateGreaterThanOrEqual != null) __params = __params.set('instantPostEndDate.greaterThanOrEqual', params.instantPostEndDateGreaterThanOrEqual.toString());
    if (params.instantPostEndDateGreaterThan != null) __params = __params.set('instantPostEndDate.greaterThan', params.instantPostEndDateGreaterThan.toString());
    if (params.instantPostEndDateEquals != null) __params = __params.set('instantPostEndDate.equals', params.instantPostEndDateEquals.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.contentTypeSpecified != null) __params = __params.set('contentType.specified', params.contentTypeSpecified.toString());
    if (params.contentTypeNotEquals != null) __params = __params.set('contentType.notEquals', params.contentTypeNotEquals.toString());
    (params.contentTypeIn || []).forEach(val => {if (val != null) __params = __params.append('contentType.in', val.toString())});
    if (params.contentTypeEquals != null) __params = __params.set('contentType.equals', params.contentTypeEquals.toString());
    if (params.commentIdSpecified != null) __params = __params.set('commentId.specified', params.commentIdSpecified.toString());
    if (params.commentIdNotEquals != null) __params = __params.set('commentId.notEquals', params.commentIdNotEquals.toString());
    if (params.commentIdLessThanOrEqual != null) __params = __params.set('commentId.lessThanOrEqual', params.commentIdLessThanOrEqual.toString());
    if (params.commentIdLessThan != null) __params = __params.set('commentId.lessThan', params.commentIdLessThan.toString());
    (params.commentIdIn || []).forEach(val => {if (val != null) __params = __params.append('commentId.in', val.toString())});
    if (params.commentIdGreaterThanOrEqual != null) __params = __params.set('commentId.greaterThanOrEqual', params.commentIdGreaterThanOrEqual.toString());
    if (params.commentIdGreaterThan != null) __params = __params.set('commentId.greaterThan', params.commentIdGreaterThan.toString());
    if (params.commentIdEquals != null) __params = __params.set('commentId.equals', params.commentIdEquals.toString());
    if (params.categoryIdSpecified != null) __params = __params.set('categoryId.specified', params.categoryIdSpecified.toString());
    if (params.categoryIdNotEquals != null) __params = __params.set('categoryId.notEquals', params.categoryIdNotEquals.toString());
    if (params.categoryIdLessThanOrEqual != null) __params = __params.set('categoryId.lessThanOrEqual', params.categoryIdLessThanOrEqual.toString());
    if (params.categoryIdLessThan != null) __params = __params.set('categoryId.lessThan', params.categoryIdLessThan.toString());
    (params.categoryIdIn || []).forEach(val => {if (val != null) __params = __params.append('categoryId.in', val.toString())});
    if (params.categoryIdGreaterThanOrEqual != null) __params = __params.set('categoryId.greaterThanOrEqual', params.categoryIdGreaterThanOrEqual.toString());
    if (params.categoryIdGreaterThan != null) __params = __params.set('categoryId.greaterThan', params.categoryIdGreaterThan.toString());
    if (params.categoryIdEquals != null) __params = __params.set('categoryId.equals', params.categoryIdEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/posts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PostDTO>>;
      })
    );
  }
  /**
   * getAllPosts
   * @param params The `PostResourceService.GetAllPostsUsingGETParams` containing the following parameters:
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
   * - `tagId.specified`:
   *
   * - `tagId.notEquals`:
   *
   * - `tagId.lessThanOrEqual`:
   *
   * - `tagId.lessThan`:
   *
   * - `tagId.in`:
   *
   * - `tagId.greaterThanOrEqual`:
   *
   * - `tagId.greaterThan`:
   *
   * - `tagId.equals`:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
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
   * - `postType.specified`:
   *
   * - `postType.notEquals`:
   *
   * - `postType.in`:
   *
   * - `postType.equals`:
   *
   * - `postMetaDataId.specified`:
   *
   * - `postMetaDataId.notEquals`:
   *
   * - `postMetaDataId.lessThanOrEqual`:
   *
   * - `postMetaDataId.lessThan`:
   *
   * - `postMetaDataId.in`:
   *
   * - `postMetaDataId.greaterThanOrEqual`:
   *
   * - `postMetaDataId.greaterThan`:
   *
   * - `postMetaDataId.equals`:
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
   * - `instantPostEndDate.specified`:
   *
   * - `instantPostEndDate.notEquals`:
   *
   * - `instantPostEndDate.lessThanOrEqual`:
   *
   * - `instantPostEndDate.lessThan`:
   *
   * - `instantPostEndDate.in[0].nano`:
   *
   * - `instantPostEndDate.in[0].epochSecond`:
   *
   * - `instantPostEndDate.greaterThanOrEqual`:
   *
   * - `instantPostEndDate.greaterThan`:
   *
   * - `instantPostEndDate.equals`:
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
   * - `contentType.specified`:
   *
   * - `contentType.notEquals`:
   *
   * - `contentType.in`:
   *
   * - `contentType.equals`:
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
   * - `categoryId.specified`:
   *
   * - `categoryId.notEquals`:
   *
   * - `categoryId.lessThanOrEqual`:
   *
   * - `categoryId.lessThan`:
   *
   * - `categoryId.in`:
   *
   * - `categoryId.greaterThanOrEqual`:
   *
   * - `categoryId.greaterThan`:
   *
   * - `categoryId.equals`:
   *
   * @return OK
   */
  getAllPostsUsingGET(params: PostResourceService.GetAllPostsUsingGETParams): __Observable<Array<PostDTO>> {
    return this.getAllPostsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<PostDTO>)
    );
  }

  /**
   * createPost
   * @param postDTO postDTO
   * @return OK
   */
  createPostUsingPOSTResponse(postDTO: PostDTO): __Observable<__StrictHttpResponse<PostDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = postDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/posts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostDTO>;
      })
    );
  }
  /**
   * createPost
   * @param postDTO postDTO
   * @return OK
   */
  createPostUsingPOST(postDTO: PostDTO): __Observable<PostDTO> {
    return this.createPostUsingPOSTResponse(postDTO).pipe(
      __map(_r => _r.body as PostDTO)
    );
  }

  /**
   * updatePost
   * @param postDTO postDTO
   * @return OK
   */
  updatePostUsingPUTResponse(postDTO: PostDTO): __Observable<__StrictHttpResponse<PostDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = postDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/posts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostDTO>;
      })
    );
  }
  /**
   * updatePost
   * @param postDTO postDTO
   * @return OK
   */
  updatePostUsingPUT(postDTO: PostDTO): __Observable<PostDTO> {
    return this.updatePostUsingPUTResponse(postDTO).pipe(
      __map(_r => _r.body as PostDTO)
    );
  }

  /**
   * countPosts
   * @param params The `PostResourceService.CountPostsUsingGETParams` containing the following parameters:
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
   * - `tagId.specified`:
   *
   * - `tagId.notEquals`:
   *
   * - `tagId.lessThanOrEqual`:
   *
   * - `tagId.lessThan`:
   *
   * - `tagId.in`:
   *
   * - `tagId.greaterThanOrEqual`:
   *
   * - `tagId.greaterThan`:
   *
   * - `tagId.equals`:
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
   * - `postType.specified`:
   *
   * - `postType.notEquals`:
   *
   * - `postType.in`:
   *
   * - `postType.equals`:
   *
   * - `postMetaDataId.specified`:
   *
   * - `postMetaDataId.notEquals`:
   *
   * - `postMetaDataId.lessThanOrEqual`:
   *
   * - `postMetaDataId.lessThan`:
   *
   * - `postMetaDataId.in`:
   *
   * - `postMetaDataId.greaterThanOrEqual`:
   *
   * - `postMetaDataId.greaterThan`:
   *
   * - `postMetaDataId.equals`:
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
   * - `instantPostEndDate.specified`:
   *
   * - `instantPostEndDate.notEquals`:
   *
   * - `instantPostEndDate.lessThanOrEqual`:
   *
   * - `instantPostEndDate.lessThan`:
   *
   * - `instantPostEndDate.in[0].nano`:
   *
   * - `instantPostEndDate.in[0].epochSecond`:
   *
   * - `instantPostEndDate.greaterThanOrEqual`:
   *
   * - `instantPostEndDate.greaterThan`:
   *
   * - `instantPostEndDate.equals`:
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
   * - `contentType.specified`:
   *
   * - `contentType.notEquals`:
   *
   * - `contentType.in`:
   *
   * - `contentType.equals`:
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
   * - `categoryId.specified`:
   *
   * - `categoryId.notEquals`:
   *
   * - `categoryId.lessThanOrEqual`:
   *
   * - `categoryId.lessThan`:
   *
   * - `categoryId.in`:
   *
   * - `categoryId.greaterThanOrEqual`:
   *
   * - `categoryId.greaterThan`:
   *
   * - `categoryId.equals`:
   *
   * @return OK
   */
  countPostsUsingGETResponse(params: PostResourceService.CountPostsUsingGETParams): __Observable<__StrictHttpResponse<number>> {
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
    if (params.titleSpecified != null) __params = __params.set('title.specified', params.titleSpecified.toString());
    if (params.titleNotEquals != null) __params = __params.set('title.notEquals', params.titleNotEquals.toString());
    (params.titleIn || []).forEach(val => {if (val != null) __params = __params.append('title.in', val.toString())});
    if (params.titleEquals != null) __params = __params.set('title.equals', params.titleEquals.toString());
    if (params.titleDoesNotContain != null) __params = __params.set('title.doesNotContain', params.titleDoesNotContain.toString());
    if (params.titleContains != null) __params = __params.set('title.contains', params.titleContains.toString());
    if (params.tagIdSpecified != null) __params = __params.set('tagId.specified', params.tagIdSpecified.toString());
    if (params.tagIdNotEquals != null) __params = __params.set('tagId.notEquals', params.tagIdNotEquals.toString());
    if (params.tagIdLessThanOrEqual != null) __params = __params.set('tagId.lessThanOrEqual', params.tagIdLessThanOrEqual.toString());
    if (params.tagIdLessThan != null) __params = __params.set('tagId.lessThan', params.tagIdLessThan.toString());
    (params.tagIdIn || []).forEach(val => {if (val != null) __params = __params.append('tagId.in', val.toString())});
    if (params.tagIdGreaterThanOrEqual != null) __params = __params.set('tagId.greaterThanOrEqual', params.tagIdGreaterThanOrEqual.toString());
    if (params.tagIdGreaterThan != null) __params = __params.set('tagId.greaterThan', params.tagIdGreaterThan.toString());
    if (params.tagIdEquals != null) __params = __params.set('tagId.equals', params.tagIdEquals.toString());
    if (params.postedDateSpecified != null) __params = __params.set('postedDate.specified', params.postedDateSpecified.toString());
    if (params.postedDateNotEquals != null) __params = __params.set('postedDate.notEquals', params.postedDateNotEquals.toString());
    if (params.postedDateLessThanOrEqual != null) __params = __params.set('postedDate.lessThanOrEqual', params.postedDateLessThanOrEqual.toString());
    if (params.postedDateLessThan != null) __params = __params.set('postedDate.lessThan', params.postedDateLessThan.toString());
    if (params.postedDateIn0Nano != null) __params = __params.set('postedDate.in[0].nano', params.postedDateIn0Nano.toString());
    if (params.postedDateIn0EpochSecond != null) __params = __params.set('postedDate.in[0].epochSecond', params.postedDateIn0EpochSecond.toString());
    if (params.postedDateGreaterThanOrEqual != null) __params = __params.set('postedDate.greaterThanOrEqual', params.postedDateGreaterThanOrEqual.toString());
    if (params.postedDateGreaterThan != null) __params = __params.set('postedDate.greaterThan', params.postedDateGreaterThan.toString());
    if (params.postedDateEquals != null) __params = __params.set('postedDate.equals', params.postedDateEquals.toString());
    if (params.postTypeSpecified != null) __params = __params.set('postType.specified', params.postTypeSpecified.toString());
    if (params.postTypeNotEquals != null) __params = __params.set('postType.notEquals', params.postTypeNotEquals.toString());
    (params.postTypeIn || []).forEach(val => {if (val != null) __params = __params.append('postType.in', val.toString())});
    if (params.postTypeEquals != null) __params = __params.set('postType.equals', params.postTypeEquals.toString());
    if (params.postMetaDataIdSpecified != null) __params = __params.set('postMetaDataId.specified', params.postMetaDataIdSpecified.toString());
    if (params.postMetaDataIdNotEquals != null) __params = __params.set('postMetaDataId.notEquals', params.postMetaDataIdNotEquals.toString());
    if (params.postMetaDataIdLessThanOrEqual != null) __params = __params.set('postMetaDataId.lessThanOrEqual', params.postMetaDataIdLessThanOrEqual.toString());
    if (params.postMetaDataIdLessThan != null) __params = __params.set('postMetaDataId.lessThan', params.postMetaDataIdLessThan.toString());
    (params.postMetaDataIdIn || []).forEach(val => {if (val != null) __params = __params.append('postMetaDataId.in', val.toString())});
    if (params.postMetaDataIdGreaterThanOrEqual != null) __params = __params.set('postMetaDataId.greaterThanOrEqual', params.postMetaDataIdGreaterThanOrEqual.toString());
    if (params.postMetaDataIdGreaterThan != null) __params = __params.set('postMetaDataId.greaterThan', params.postMetaDataIdGreaterThan.toString());
    if (params.postMetaDataIdEquals != null) __params = __params.set('postMetaDataId.equals', params.postMetaDataIdEquals.toString());
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
    if (params.instantPostEndDateSpecified != null) __params = __params.set('instantPostEndDate.specified', params.instantPostEndDateSpecified.toString());
    if (params.instantPostEndDateNotEquals != null) __params = __params.set('instantPostEndDate.notEquals', params.instantPostEndDateNotEquals.toString());
    if (params.instantPostEndDateLessThanOrEqual != null) __params = __params.set('instantPostEndDate.lessThanOrEqual', params.instantPostEndDateLessThanOrEqual.toString());
    if (params.instantPostEndDateLessThan != null) __params = __params.set('instantPostEndDate.lessThan', params.instantPostEndDateLessThan.toString());
    if (params.instantPostEndDateIn0Nano != null) __params = __params.set('instantPostEndDate.in[0].nano', params.instantPostEndDateIn0Nano.toString());
    if (params.instantPostEndDateIn0EpochSecond != null) __params = __params.set('instantPostEndDate.in[0].epochSecond', params.instantPostEndDateIn0EpochSecond.toString());
    if (params.instantPostEndDateGreaterThanOrEqual != null) __params = __params.set('instantPostEndDate.greaterThanOrEqual', params.instantPostEndDateGreaterThanOrEqual.toString());
    if (params.instantPostEndDateGreaterThan != null) __params = __params.set('instantPostEndDate.greaterThan', params.instantPostEndDateGreaterThan.toString());
    if (params.instantPostEndDateEquals != null) __params = __params.set('instantPostEndDate.equals', params.instantPostEndDateEquals.toString());
    if (params.idSpecified != null) __params = __params.set('id.specified', params.idSpecified.toString());
    if (params.idNotEquals != null) __params = __params.set('id.notEquals', params.idNotEquals.toString());
    if (params.idLessThanOrEqual != null) __params = __params.set('id.lessThanOrEqual', params.idLessThanOrEqual.toString());
    if (params.idLessThan != null) __params = __params.set('id.lessThan', params.idLessThan.toString());
    (params.idIn || []).forEach(val => {if (val != null) __params = __params.append('id.in', val.toString())});
    if (params.idGreaterThanOrEqual != null) __params = __params.set('id.greaterThanOrEqual', params.idGreaterThanOrEqual.toString());
    if (params.idGreaterThan != null) __params = __params.set('id.greaterThan', params.idGreaterThan.toString());
    if (params.idEquals != null) __params = __params.set('id.equals', params.idEquals.toString());
    if (params.contentTypeSpecified != null) __params = __params.set('contentType.specified', params.contentTypeSpecified.toString());
    if (params.contentTypeNotEquals != null) __params = __params.set('contentType.notEquals', params.contentTypeNotEquals.toString());
    (params.contentTypeIn || []).forEach(val => {if (val != null) __params = __params.append('contentType.in', val.toString())});
    if (params.contentTypeEquals != null) __params = __params.set('contentType.equals', params.contentTypeEquals.toString());
    if (params.commentIdSpecified != null) __params = __params.set('commentId.specified', params.commentIdSpecified.toString());
    if (params.commentIdNotEquals != null) __params = __params.set('commentId.notEquals', params.commentIdNotEquals.toString());
    if (params.commentIdLessThanOrEqual != null) __params = __params.set('commentId.lessThanOrEqual', params.commentIdLessThanOrEqual.toString());
    if (params.commentIdLessThan != null) __params = __params.set('commentId.lessThan', params.commentIdLessThan.toString());
    (params.commentIdIn || []).forEach(val => {if (val != null) __params = __params.append('commentId.in', val.toString())});
    if (params.commentIdGreaterThanOrEqual != null) __params = __params.set('commentId.greaterThanOrEqual', params.commentIdGreaterThanOrEqual.toString());
    if (params.commentIdGreaterThan != null) __params = __params.set('commentId.greaterThan', params.commentIdGreaterThan.toString());
    if (params.commentIdEquals != null) __params = __params.set('commentId.equals', params.commentIdEquals.toString());
    if (params.categoryIdSpecified != null) __params = __params.set('categoryId.specified', params.categoryIdSpecified.toString());
    if (params.categoryIdNotEquals != null) __params = __params.set('categoryId.notEquals', params.categoryIdNotEquals.toString());
    if (params.categoryIdLessThanOrEqual != null) __params = __params.set('categoryId.lessThanOrEqual', params.categoryIdLessThanOrEqual.toString());
    if (params.categoryIdLessThan != null) __params = __params.set('categoryId.lessThan', params.categoryIdLessThan.toString());
    (params.categoryIdIn || []).forEach(val => {if (val != null) __params = __params.append('categoryId.in', val.toString())});
    if (params.categoryIdGreaterThanOrEqual != null) __params = __params.set('categoryId.greaterThanOrEqual', params.categoryIdGreaterThanOrEqual.toString());
    if (params.categoryIdGreaterThan != null) __params = __params.set('categoryId.greaterThan', params.categoryIdGreaterThan.toString());
    if (params.categoryIdEquals != null) __params = __params.set('categoryId.equals', params.categoryIdEquals.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/posts/count`,
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
   * countPosts
   * @param params The `PostResourceService.CountPostsUsingGETParams` containing the following parameters:
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
   * - `tagId.specified`:
   *
   * - `tagId.notEquals`:
   *
   * - `tagId.lessThanOrEqual`:
   *
   * - `tagId.lessThan`:
   *
   * - `tagId.in`:
   *
   * - `tagId.greaterThanOrEqual`:
   *
   * - `tagId.greaterThan`:
   *
   * - `tagId.equals`:
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
   * - `postType.specified`:
   *
   * - `postType.notEquals`:
   *
   * - `postType.in`:
   *
   * - `postType.equals`:
   *
   * - `postMetaDataId.specified`:
   *
   * - `postMetaDataId.notEquals`:
   *
   * - `postMetaDataId.lessThanOrEqual`:
   *
   * - `postMetaDataId.lessThan`:
   *
   * - `postMetaDataId.in`:
   *
   * - `postMetaDataId.greaterThanOrEqual`:
   *
   * - `postMetaDataId.greaterThan`:
   *
   * - `postMetaDataId.equals`:
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
   * - `instantPostEndDate.specified`:
   *
   * - `instantPostEndDate.notEquals`:
   *
   * - `instantPostEndDate.lessThanOrEqual`:
   *
   * - `instantPostEndDate.lessThan`:
   *
   * - `instantPostEndDate.in[0].nano`:
   *
   * - `instantPostEndDate.in[0].epochSecond`:
   *
   * - `instantPostEndDate.greaterThanOrEqual`:
   *
   * - `instantPostEndDate.greaterThan`:
   *
   * - `instantPostEndDate.equals`:
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
   * - `contentType.specified`:
   *
   * - `contentType.notEquals`:
   *
   * - `contentType.in`:
   *
   * - `contentType.equals`:
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
   * - `categoryId.specified`:
   *
   * - `categoryId.notEquals`:
   *
   * - `categoryId.lessThanOrEqual`:
   *
   * - `categoryId.lessThan`:
   *
   * - `categoryId.in`:
   *
   * - `categoryId.greaterThanOrEqual`:
   *
   * - `categoryId.greaterThan`:
   *
   * - `categoryId.equals`:
   *
   * @return OK
   */
  countPostsUsingGET(params: PostResourceService.CountPostsUsingGETParams): __Observable<number> {
    return this.countPostsUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getPost
   * @param id id
   * @return OK
   */
  getPostUsingGETResponse(id: number): __Observable<__StrictHttpResponse<PostDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/posts/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostDTO>;
      })
    );
  }
  /**
   * getPost
   * @param id id
   * @return OK
   */
  getPostUsingGET(id: number): __Observable<PostDTO> {
    return this.getPostUsingGETResponse(id).pipe(
      __map(_r => _r.body as PostDTO)
    );
  }

  /**
   * deletePost
   * @param id id
   */
  deletePostUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/posts/${encodeURIComponent(id)}`,
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
   * deletePost
   * @param id id
   */
  deletePostUsingDELETE(id: number): __Observable<null> {
    return this.deletePostUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PostResourceService {

  /**
   * Parameters for getAllPostsUsingGET
   */
  export interface GetAllPostsUsingGETParams {
    userIdSpecified?: boolean;
    userIdNotEquals?: number;
    userIdLessThanOrEqual?: number;
    userIdLessThan?: number;
    userIdIn?: Array<number>;
    userIdGreaterThanOrEqual?: number;
    userIdGreaterThan?: number;
    userIdEquals?: number;
    titleSpecified?: boolean;
    titleNotEquals?: string;
    titleIn?: Array<string>;
    titleEquals?: string;
    titleDoesNotContain?: string;
    titleContains?: string;
    tagIdSpecified?: boolean;
    tagIdNotEquals?: number;
    tagIdLessThanOrEqual?: number;
    tagIdLessThan?: number;
    tagIdIn?: Array<number>;
    tagIdGreaterThanOrEqual?: number;
    tagIdGreaterThan?: number;
    tagIdEquals?: number;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    postedDateSpecified?: boolean;
    postedDateNotEquals?: string;
    postedDateLessThanOrEqual?: string;
    postedDateLessThan?: string;
    postedDateIn0Nano?: number;
    postedDateIn0EpochSecond?: number;
    postedDateGreaterThanOrEqual?: string;
    postedDateGreaterThan?: string;
    postedDateEquals?: string;
    postTypeSpecified?: boolean;
    postTypeNotEquals?: 'PAGE' | 'POST';
    postTypeIn?: Array<'PAGE' | 'POST'>;
    postTypeEquals?: 'PAGE' | 'POST';
    postMetaDataIdSpecified?: boolean;
    postMetaDataIdNotEquals?: number;
    postMetaDataIdLessThanOrEqual?: number;
    postMetaDataIdLessThan?: number;
    postMetaDataIdIn?: Array<number>;
    postMetaDataIdGreaterThanOrEqual?: number;
    postMetaDataIdGreaterThan?: number;
    postMetaDataIdEquals?: number;

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
    instantPostEndDateSpecified?: boolean;
    instantPostEndDateNotEquals?: string;
    instantPostEndDateLessThanOrEqual?: string;
    instantPostEndDateLessThan?: string;
    instantPostEndDateIn0Nano?: number;
    instantPostEndDateIn0EpochSecond?: number;
    instantPostEndDateGreaterThanOrEqual?: string;
    instantPostEndDateGreaterThan?: string;
    instantPostEndDateEquals?: string;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    contentTypeSpecified?: boolean;
    contentTypeNotEquals?: 'TEXT' | 'HTML';
    contentTypeIn?: Array<'TEXT' | 'HTML'>;
    contentTypeEquals?: 'TEXT' | 'HTML';
    commentIdSpecified?: boolean;
    commentIdNotEquals?: number;
    commentIdLessThanOrEqual?: number;
    commentIdLessThan?: number;
    commentIdIn?: Array<number>;
    commentIdGreaterThanOrEqual?: number;
    commentIdGreaterThan?: number;
    commentIdEquals?: number;
    categoryIdSpecified?: boolean;
    categoryIdNotEquals?: number;
    categoryIdLessThanOrEqual?: number;
    categoryIdLessThan?: number;
    categoryIdIn?: Array<number>;
    categoryIdGreaterThanOrEqual?: number;
    categoryIdGreaterThan?: number;
    categoryIdEquals?: number;
  }

  /**
   * Parameters for countPostsUsingGET
   */
  export interface CountPostsUsingGETParams {
    userIdSpecified?: boolean;
    userIdNotEquals?: number;
    userIdLessThanOrEqual?: number;
    userIdLessThan?: number;
    userIdIn?: Array<number>;
    userIdGreaterThanOrEqual?: number;
    userIdGreaterThan?: number;
    userIdEquals?: number;
    titleSpecified?: boolean;
    titleNotEquals?: string;
    titleIn?: Array<string>;
    titleEquals?: string;
    titleDoesNotContain?: string;
    titleContains?: string;
    tagIdSpecified?: boolean;
    tagIdNotEquals?: number;
    tagIdLessThanOrEqual?: number;
    tagIdLessThan?: number;
    tagIdIn?: Array<number>;
    tagIdGreaterThanOrEqual?: number;
    tagIdGreaterThan?: number;
    tagIdEquals?: number;
    postedDateSpecified?: boolean;
    postedDateNotEquals?: string;
    postedDateLessThanOrEqual?: string;
    postedDateLessThan?: string;
    postedDateIn0Nano?: number;
    postedDateIn0EpochSecond?: number;
    postedDateGreaterThanOrEqual?: string;
    postedDateGreaterThan?: string;
    postedDateEquals?: string;
    postTypeSpecified?: boolean;
    postTypeNotEquals?: 'PAGE' | 'POST';
    postTypeIn?: Array<'PAGE' | 'POST'>;
    postTypeEquals?: 'PAGE' | 'POST';
    postMetaDataIdSpecified?: boolean;
    postMetaDataIdNotEquals?: number;
    postMetaDataIdLessThanOrEqual?: number;
    postMetaDataIdLessThan?: number;
    postMetaDataIdIn?: Array<number>;
    postMetaDataIdGreaterThanOrEqual?: number;
    postMetaDataIdGreaterThan?: number;
    postMetaDataIdEquals?: number;
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
    instantPostEndDateSpecified?: boolean;
    instantPostEndDateNotEquals?: string;
    instantPostEndDateLessThanOrEqual?: string;
    instantPostEndDateLessThan?: string;
    instantPostEndDateIn0Nano?: number;
    instantPostEndDateIn0EpochSecond?: number;
    instantPostEndDateGreaterThanOrEqual?: string;
    instantPostEndDateGreaterThan?: string;
    instantPostEndDateEquals?: string;
    idSpecified?: boolean;
    idNotEquals?: number;
    idLessThanOrEqual?: number;
    idLessThan?: number;
    idIn?: Array<number>;
    idGreaterThanOrEqual?: number;
    idGreaterThan?: number;
    idEquals?: number;
    contentTypeSpecified?: boolean;
    contentTypeNotEquals?: 'TEXT' | 'HTML';
    contentTypeIn?: Array<'TEXT' | 'HTML'>;
    contentTypeEquals?: 'TEXT' | 'HTML';
    commentIdSpecified?: boolean;
    commentIdNotEquals?: number;
    commentIdLessThanOrEqual?: number;
    commentIdLessThan?: number;
    commentIdIn?: Array<number>;
    commentIdGreaterThanOrEqual?: number;
    commentIdGreaterThan?: number;
    commentIdEquals?: number;
    categoryIdSpecified?: boolean;
    categoryIdNotEquals?: number;
    categoryIdLessThanOrEqual?: number;
    categoryIdLessThan?: number;
    categoryIdIn?: Array<number>;
    categoryIdGreaterThanOrEqual?: number;
    categoryIdGreaterThan?: number;
    categoryIdEquals?: number;
  }
}

export { PostResourceService }
