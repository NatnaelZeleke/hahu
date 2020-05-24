/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDTO } from '../models/category-dto';

/**
 * Category Resource
 */
@Injectable({
  providedIn: 'root',
})
class CategoryResourceService extends __BaseService {
  static readonly getAllCategoriesUsingGETPath = '/api/categories';
  static readonly createCategoryUsingPOSTPath = '/api/categories';
  static readonly updateCategoryUsingPUTPath = '/api/categories';
  static readonly countCategoriesUsingGETPath = '/api/categories/count';
  static readonly getCategoryUsingGETPath = '/api/categories/{id}';
  static readonly deleteCategoryUsingDELETEPath = '/api/categories/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllCategories
   * @param params The `CategoryResourceService.GetAllCategoriesUsingGETParams` containing the following parameters:
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
   * - `description.specified`:
   *
   * - `description.notEquals`:
   *
   * - `description.in`:
   *
   * - `description.equals`:
   *
   * - `description.doesNotContain`:
   *
   * - `description.contains`:
   *
   * @return OK
   */
  getAllCategoriesUsingGETResponse(params: CategoryResourceService.GetAllCategoriesUsingGETParams): __Observable<__StrictHttpResponse<Array<CategoryDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
    if (params.descriptionSpecified != null) __params = __params.set('description.specified', params.descriptionSpecified.toString());
    if (params.descriptionNotEquals != null) __params = __params.set('description.notEquals', params.descriptionNotEquals.toString());
    (params.descriptionIn || []).forEach(val => {if (val != null) __params = __params.append('description.in', val.toString())});
    if (params.descriptionEquals != null) __params = __params.set('description.equals', params.descriptionEquals.toString());
    if (params.descriptionDoesNotContain != null) __params = __params.set('description.doesNotContain', params.descriptionDoesNotContain.toString());
    if (params.descriptionContains != null) __params = __params.set('description.contains', params.descriptionContains.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDTO>>;
      })
    );
  }
  /**
   * getAllCategories
   * @param params The `CategoryResourceService.GetAllCategoriesUsingGETParams` containing the following parameters:
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
   * - `description.specified`:
   *
   * - `description.notEquals`:
   *
   * - `description.in`:
   *
   * - `description.equals`:
   *
   * - `description.doesNotContain`:
   *
   * - `description.contains`:
   *
   * @return OK
   */
  getAllCategoriesUsingGET(params: CategoryResourceService.GetAllCategoriesUsingGETParams): __Observable<Array<CategoryDTO>> {
    return this.getAllCategoriesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CategoryDTO>)
    );
  }

  /**
   * createCategory
   * @param categoryDTO categoryDTO
   * @return OK
   */
  createCategoryUsingPOSTResponse(categoryDTO: CategoryDTO): __Observable<__StrictHttpResponse<CategoryDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = categoryDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDTO>;
      })
    );
  }
  /**
   * createCategory
   * @param categoryDTO categoryDTO
   * @return OK
   */
  createCategoryUsingPOST(categoryDTO: CategoryDTO): __Observable<CategoryDTO> {
    return this.createCategoryUsingPOSTResponse(categoryDTO).pipe(
      __map(_r => _r.body as CategoryDTO)
    );
  }

  /**
   * updateCategory
   * @param categoryDTO categoryDTO
   * @return OK
   */
  updateCategoryUsingPUTResponse(categoryDTO: CategoryDTO): __Observable<__StrictHttpResponse<CategoryDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = categoryDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDTO>;
      })
    );
  }
  /**
   * updateCategory
   * @param categoryDTO categoryDTO
   * @return OK
   */
  updateCategoryUsingPUT(categoryDTO: CategoryDTO): __Observable<CategoryDTO> {
    return this.updateCategoryUsingPUTResponse(categoryDTO).pipe(
      __map(_r => _r.body as CategoryDTO)
    );
  }

  /**
   * countCategories
   * @param params The `CategoryResourceService.CountCategoriesUsingGETParams` containing the following parameters:
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
   * - `description.specified`:
   *
   * - `description.notEquals`:
   *
   * - `description.in`:
   *
   * - `description.equals`:
   *
   * - `description.doesNotContain`:
   *
   * - `description.contains`:
   *
   * @return OK
   */
  countCategoriesUsingGETResponse(params: CategoryResourceService.CountCategoriesUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
    if (params.descriptionSpecified != null) __params = __params.set('description.specified', params.descriptionSpecified.toString());
    if (params.descriptionNotEquals != null) __params = __params.set('description.notEquals', params.descriptionNotEquals.toString());
    (params.descriptionIn || []).forEach(val => {if (val != null) __params = __params.append('description.in', val.toString())});
    if (params.descriptionEquals != null) __params = __params.set('description.equals', params.descriptionEquals.toString());
    if (params.descriptionDoesNotContain != null) __params = __params.set('description.doesNotContain', params.descriptionDoesNotContain.toString());
    if (params.descriptionContains != null) __params = __params.set('description.contains', params.descriptionContains.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/categories/count`,
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
   * countCategories
   * @param params The `CategoryResourceService.CountCategoriesUsingGETParams` containing the following parameters:
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
   * - `description.specified`:
   *
   * - `description.notEquals`:
   *
   * - `description.in`:
   *
   * - `description.equals`:
   *
   * - `description.doesNotContain`:
   *
   * - `description.contains`:
   *
   * @return OK
   */
  countCategoriesUsingGET(params: CategoryResourceService.CountCategoriesUsingGETParams): __Observable<number> {
    return this.countCategoriesUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getCategory
   * @param id id
   * @return OK
   */
  getCategoryUsingGETResponse(id: number): __Observable<__StrictHttpResponse<CategoryDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/categories/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDTO>;
      })
    );
  }
  /**
   * getCategory
   * @param id id
   * @return OK
   */
  getCategoryUsingGET(id: number): __Observable<CategoryDTO> {
    return this.getCategoryUsingGETResponse(id).pipe(
      __map(_r => _r.body as CategoryDTO)
    );
  }

  /**
   * deleteCategory
   * @param id id
   */
  deleteCategoryUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/categories/${encodeURIComponent(id)}`,
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
   * deleteCategory
   * @param id id
   */
  deleteCategoryUsingDELETE(id: number): __Observable<null> {
    return this.deleteCategoryUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CategoryResourceService {

  /**
   * Parameters for getAllCategoriesUsingGET
   */
  export interface GetAllCategoriesUsingGETParams {

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
    descriptionSpecified?: boolean;
    descriptionNotEquals?: string;
    descriptionIn?: Array<string>;
    descriptionEquals?: string;
    descriptionDoesNotContain?: string;
    descriptionContains?: string;
  }

  /**
   * Parameters for countCategoriesUsingGET
   */
  export interface CountCategoriesUsingGETParams {
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
    descriptionSpecified?: boolean;
    descriptionNotEquals?: string;
    descriptionIn?: Array<string>;
    descriptionEquals?: string;
    descriptionDoesNotContain?: string;
    descriptionContains?: string;
  }
}

export { CategoryResourceService }
