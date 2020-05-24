/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PostMetaDataDTO } from '../models/post-meta-data-dto';

/**
 * Post Meta Data Resource
 */
@Injectable({
  providedIn: 'root',
})
class PostMetaDataResourceService extends __BaseService {
  static readonly getAllPostMetaDataUsingGETPath = '/api/post-meta-data';
  static readonly createPostMetaDataUsingPOSTPath = '/api/post-meta-data';
  static readonly updatePostMetaDataUsingPUTPath = '/api/post-meta-data';
  static readonly countPostMetaDataUsingGETPath = '/api/post-meta-data/count';
  static readonly getPostMetaDataUsingGETPath = '/api/post-meta-data/{id}';
  static readonly deletePostMetaDataUsingDELETEPath = '/api/post-meta-data/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllPostMetaData
   * @param params The `PostMetaDataResourceService.GetAllPostMetaDataUsingGETParams` containing the following parameters:
   *
   * - `value.specified`:
   *
   * - `value.notEquals`:
   *
   * - `value.in`:
   *
   * - `value.equals`:
   *
   * - `value.doesNotContain`:
   *
   * - `value.contains`:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
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
  getAllPostMetaDataUsingGETResponse(params: PostMetaDataResourceService.GetAllPostMetaDataUsingGETParams): __Observable<__StrictHttpResponse<Array<PostMetaDataDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.valueSpecified != null) __params = __params.set('value.specified', params.valueSpecified.toString());
    if (params.valueNotEquals != null) __params = __params.set('value.notEquals', params.valueNotEquals.toString());
    (params.valueIn || []).forEach(val => {if (val != null) __params = __params.append('value.in', val.toString())});
    if (params.valueEquals != null) __params = __params.set('value.equals', params.valueEquals.toString());
    if (params.valueDoesNotContain != null) __params = __params.set('value.doesNotContain', params.valueDoesNotContain.toString());
    if (params.valueContains != null) __params = __params.set('value.contains', params.valueContains.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.postIdSpecified != null) __params = __params.set('postId.specified', params.postIdSpecified.toString());
    if (params.postIdNotEquals != null) __params = __params.set('postId.notEquals', params.postIdNotEquals.toString());
    if (params.postIdLessThanOrEqual != null) __params = __params.set('postId.lessThanOrEqual', params.postIdLessThanOrEqual.toString());
    if (params.postIdLessThan != null) __params = __params.set('postId.lessThan', params.postIdLessThan.toString());
    (params.postIdIn || []).forEach(val => {if (val != null) __params = __params.append('postId.in', val.toString())});
    if (params.postIdGreaterThanOrEqual != null) __params = __params.set('postId.greaterThanOrEqual', params.postIdGreaterThanOrEqual.toString());
    if (params.postIdGreaterThan != null) __params = __params.set('postId.greaterThan', params.postIdGreaterThan.toString());
    if (params.postIdEquals != null) __params = __params.set('postId.equals', params.postIdEquals.toString());
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
      this.rootUrl + `/api/post-meta-data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PostMetaDataDTO>>;
      })
    );
  }
  /**
   * getAllPostMetaData
   * @param params The `PostMetaDataResourceService.GetAllPostMetaDataUsingGETParams` containing the following parameters:
   *
   * - `value.specified`:
   *
   * - `value.notEquals`:
   *
   * - `value.in`:
   *
   * - `value.equals`:
   *
   * - `value.doesNotContain`:
   *
   * - `value.contains`:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
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
  getAllPostMetaDataUsingGET(params: PostMetaDataResourceService.GetAllPostMetaDataUsingGETParams): __Observable<Array<PostMetaDataDTO>> {
    return this.getAllPostMetaDataUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<PostMetaDataDTO>)
    );
  }

  /**
   * createPostMetaData
   * @param postMetaDataDTO postMetaDataDTO
   * @return OK
   */
  createPostMetaDataUsingPOSTResponse(postMetaDataDTO: PostMetaDataDTO): __Observable<__StrictHttpResponse<PostMetaDataDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = postMetaDataDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/post-meta-data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostMetaDataDTO>;
      })
    );
  }
  /**
   * createPostMetaData
   * @param postMetaDataDTO postMetaDataDTO
   * @return OK
   */
  createPostMetaDataUsingPOST(postMetaDataDTO: PostMetaDataDTO): __Observable<PostMetaDataDTO> {
    return this.createPostMetaDataUsingPOSTResponse(postMetaDataDTO).pipe(
      __map(_r => _r.body as PostMetaDataDTO)
    );
  }

  /**
   * updatePostMetaData
   * @param postMetaDataDTO postMetaDataDTO
   * @return OK
   */
  updatePostMetaDataUsingPUTResponse(postMetaDataDTO: PostMetaDataDTO): __Observable<__StrictHttpResponse<PostMetaDataDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = postMetaDataDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/post-meta-data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostMetaDataDTO>;
      })
    );
  }
  /**
   * updatePostMetaData
   * @param postMetaDataDTO postMetaDataDTO
   * @return OK
   */
  updatePostMetaDataUsingPUT(postMetaDataDTO: PostMetaDataDTO): __Observable<PostMetaDataDTO> {
    return this.updatePostMetaDataUsingPUTResponse(postMetaDataDTO).pipe(
      __map(_r => _r.body as PostMetaDataDTO)
    );
  }

  /**
   * countPostMetaData
   * @param params The `PostMetaDataResourceService.CountPostMetaDataUsingGETParams` containing the following parameters:
   *
   * - `value.specified`:
   *
   * - `value.notEquals`:
   *
   * - `value.in`:
   *
   * - `value.equals`:
   *
   * - `value.doesNotContain`:
   *
   * - `value.contains`:
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
  countPostMetaDataUsingGETResponse(params: PostMetaDataResourceService.CountPostMetaDataUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.valueSpecified != null) __params = __params.set('value.specified', params.valueSpecified.toString());
    if (params.valueNotEquals != null) __params = __params.set('value.notEquals', params.valueNotEquals.toString());
    (params.valueIn || []).forEach(val => {if (val != null) __params = __params.append('value.in', val.toString())});
    if (params.valueEquals != null) __params = __params.set('value.equals', params.valueEquals.toString());
    if (params.valueDoesNotContain != null) __params = __params.set('value.doesNotContain', params.valueDoesNotContain.toString());
    if (params.valueContains != null) __params = __params.set('value.contains', params.valueContains.toString());
    if (params.postIdSpecified != null) __params = __params.set('postId.specified', params.postIdSpecified.toString());
    if (params.postIdNotEquals != null) __params = __params.set('postId.notEquals', params.postIdNotEquals.toString());
    if (params.postIdLessThanOrEqual != null) __params = __params.set('postId.lessThanOrEqual', params.postIdLessThanOrEqual.toString());
    if (params.postIdLessThan != null) __params = __params.set('postId.lessThan', params.postIdLessThan.toString());
    (params.postIdIn || []).forEach(val => {if (val != null) __params = __params.append('postId.in', val.toString())});
    if (params.postIdGreaterThanOrEqual != null) __params = __params.set('postId.greaterThanOrEqual', params.postIdGreaterThanOrEqual.toString());
    if (params.postIdGreaterThan != null) __params = __params.set('postId.greaterThan', params.postIdGreaterThan.toString());
    if (params.postIdEquals != null) __params = __params.set('postId.equals', params.postIdEquals.toString());
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
      this.rootUrl + `/api/post-meta-data/count`,
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
   * countPostMetaData
   * @param params The `PostMetaDataResourceService.CountPostMetaDataUsingGETParams` containing the following parameters:
   *
   * - `value.specified`:
   *
   * - `value.notEquals`:
   *
   * - `value.in`:
   *
   * - `value.equals`:
   *
   * - `value.doesNotContain`:
   *
   * - `value.contains`:
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
  countPostMetaDataUsingGET(params: PostMetaDataResourceService.CountPostMetaDataUsingGETParams): __Observable<number> {
    return this.countPostMetaDataUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getPostMetaData
   * @param id id
   * @return OK
   */
  getPostMetaDataUsingGETResponse(id: number): __Observable<__StrictHttpResponse<PostMetaDataDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/post-meta-data/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostMetaDataDTO>;
      })
    );
  }
  /**
   * getPostMetaData
   * @param id id
   * @return OK
   */
  getPostMetaDataUsingGET(id: number): __Observable<PostMetaDataDTO> {
    return this.getPostMetaDataUsingGETResponse(id).pipe(
      __map(_r => _r.body as PostMetaDataDTO)
    );
  }

  /**
   * deletePostMetaData
   * @param id id
   */
  deletePostMetaDataUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/post-meta-data/${encodeURIComponent(id)}`,
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
   * deletePostMetaData
   * @param id id
   */
  deletePostMetaDataUsingDELETE(id: number): __Observable<null> {
    return this.deletePostMetaDataUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PostMetaDataResourceService {

  /**
   * Parameters for getAllPostMetaDataUsingGET
   */
  export interface GetAllPostMetaDataUsingGETParams {
    valueSpecified?: boolean;
    valueNotEquals?: string;
    valueIn?: Array<string>;
    valueEquals?: string;
    valueDoesNotContain?: string;
    valueContains?: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
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
   * Parameters for countPostMetaDataUsingGET
   */
  export interface CountPostMetaDataUsingGETParams {
    valueSpecified?: boolean;
    valueNotEquals?: string;
    valueIn?: Array<string>;
    valueEquals?: string;
    valueDoesNotContain?: string;
    valueContains?: string;
    postIdSpecified?: boolean;
    postIdNotEquals?: number;
    postIdLessThanOrEqual?: number;
    postIdLessThan?: number;
    postIdIn?: Array<number>;
    postIdGreaterThanOrEqual?: number;
    postIdGreaterThan?: number;
    postIdEquals?: number;
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

export { PostMetaDataResourceService }
