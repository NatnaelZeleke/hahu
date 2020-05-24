/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SchoolProgressDTO } from '../models/school-progress-dto';

/**
 * School Progress Resource
 */
@Injectable({
  providedIn: 'root',
})
class SchoolProgressResourceService extends __BaseService {
  static readonly getAllSchoolProgressesUsingGETPath = '/api/school-progresses';
  static readonly createSchoolProgressUsingPOSTPath = '/api/school-progresses';
  static readonly updateSchoolProgressUsingPUTPath = '/api/school-progresses';
  static readonly countSchoolProgressesUsingGETPath = '/api/school-progresses/count';
  static readonly getSchoolProgressUsingGETPath = '/api/school-progresses/{id}';
  static readonly deleteSchoolProgressUsingDELETEPath = '/api/school-progresses/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllSchoolProgresses
   * @param params The `SchoolProgressResourceService.GetAllSchoolProgressesUsingGETParams` containing the following parameters:
   *
   * - `year.specified`:
   *
   * - `year.notEquals`:
   *
   * - `year.lessThanOrEqual`:
   *
   * - `year.lessThan`:
   *
   * - `year.in`:
   *
   * - `year.greaterThanOrEqual`:
   *
   * - `year.greaterThan`:
   *
   * - `year.equals`:
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
   * - `subject.specified`:
   *
   * - `subject.notEquals`:
   *
   * - `subject.in`:
   *
   * - `subject.equals`:
   *
   * - `subject.doesNotContain`:
   *
   * - `subject.contains`:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `semester.specified`:
   *
   * - `semester.notEquals`:
   *
   * - `semester.in`:
   *
   * - `semester.equals`:
   *
   * - `semester.doesNotContain`:
   *
   * - `semester.contains`:
   *
   * - `result.specified`:
   *
   * - `result.notEquals`:
   *
   * - `result.lessThanOrEqual`:
   *
   * - `result.lessThan`:
   *
   * - `result.in`:
   *
   * - `result.greaterThanOrEqual`:
   *
   * - `result.greaterThan`:
   *
   * - `result.equals`:
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
   * @return OK
   */
  getAllSchoolProgressesUsingGETResponse(params: SchoolProgressResourceService.GetAllSchoolProgressesUsingGETParams): __Observable<__StrictHttpResponse<Array<SchoolProgressDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.yearSpecified != null) __params = __params.set('year.specified', params.yearSpecified.toString());
    if (params.yearNotEquals != null) __params = __params.set('year.notEquals', params.yearNotEquals.toString());
    if (params.yearLessThanOrEqual != null) __params = __params.set('year.lessThanOrEqual', params.yearLessThanOrEqual.toString());
    if (params.yearLessThan != null) __params = __params.set('year.lessThan', params.yearLessThan.toString());
    (params.yearIn || []).forEach(val => {if (val != null) __params = __params.append('year.in', val.toString())});
    if (params.yearGreaterThanOrEqual != null) __params = __params.set('year.greaterThanOrEqual', params.yearGreaterThanOrEqual.toString());
    if (params.yearGreaterThan != null) __params = __params.set('year.greaterThan', params.yearGreaterThan.toString());
    if (params.yearEquals != null) __params = __params.set('year.equals', params.yearEquals.toString());
    if (params.userIdSpecified != null) __params = __params.set('userId.specified', params.userIdSpecified.toString());
    if (params.userIdNotEquals != null) __params = __params.set('userId.notEquals', params.userIdNotEquals.toString());
    if (params.userIdLessThanOrEqual != null) __params = __params.set('userId.lessThanOrEqual', params.userIdLessThanOrEqual.toString());
    if (params.userIdLessThan != null) __params = __params.set('userId.lessThan', params.userIdLessThan.toString());
    (params.userIdIn || []).forEach(val => {if (val != null) __params = __params.append('userId.in', val.toString())});
    if (params.userIdGreaterThanOrEqual != null) __params = __params.set('userId.greaterThanOrEqual', params.userIdGreaterThanOrEqual.toString());
    if (params.userIdGreaterThan != null) __params = __params.set('userId.greaterThan', params.userIdGreaterThan.toString());
    if (params.userIdEquals != null) __params = __params.set('userId.equals', params.userIdEquals.toString());
    if (params.subjectSpecified != null) __params = __params.set('subject.specified', params.subjectSpecified.toString());
    if (params.subjectNotEquals != null) __params = __params.set('subject.notEquals', params.subjectNotEquals.toString());
    (params.subjectIn || []).forEach(val => {if (val != null) __params = __params.append('subject.in', val.toString())});
    if (params.subjectEquals != null) __params = __params.set('subject.equals', params.subjectEquals.toString());
    if (params.subjectDoesNotContain != null) __params = __params.set('subject.doesNotContain', params.subjectDoesNotContain.toString());
    if (params.subjectContains != null) __params = __params.set('subject.contains', params.subjectContains.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.semesterSpecified != null) __params = __params.set('semester.specified', params.semesterSpecified.toString());
    if (params.semesterNotEquals != null) __params = __params.set('semester.notEquals', params.semesterNotEquals.toString());
    (params.semesterIn || []).forEach(val => {if (val != null) __params = __params.append('semester.in', val.toString())});
    if (params.semesterEquals != null) __params = __params.set('semester.equals', params.semesterEquals.toString());
    if (params.semesterDoesNotContain != null) __params = __params.set('semester.doesNotContain', params.semesterDoesNotContain.toString());
    if (params.semesterContains != null) __params = __params.set('semester.contains', params.semesterContains.toString());
    if (params.resultSpecified != null) __params = __params.set('result.specified', params.resultSpecified.toString());
    if (params.resultNotEquals != null) __params = __params.set('result.notEquals', params.resultNotEquals.toString());
    if (params.resultLessThanOrEqual != null) __params = __params.set('result.lessThanOrEqual', params.resultLessThanOrEqual.toString());
    if (params.resultLessThan != null) __params = __params.set('result.lessThan', params.resultLessThan.toString());
    (params.resultIn || []).forEach(val => {if (val != null) __params = __params.append('result.in', val.toString())});
    if (params.resultGreaterThanOrEqual != null) __params = __params.set('result.greaterThanOrEqual', params.resultGreaterThanOrEqual.toString());
    if (params.resultGreaterThan != null) __params = __params.set('result.greaterThan', params.resultGreaterThan.toString());
    if (params.resultEquals != null) __params = __params.set('result.equals', params.resultEquals.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
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
      this.rootUrl + `/api/school-progresses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SchoolProgressDTO>>;
      })
    );
  }
  /**
   * getAllSchoolProgresses
   * @param params The `SchoolProgressResourceService.GetAllSchoolProgressesUsingGETParams` containing the following parameters:
   *
   * - `year.specified`:
   *
   * - `year.notEquals`:
   *
   * - `year.lessThanOrEqual`:
   *
   * - `year.lessThan`:
   *
   * - `year.in`:
   *
   * - `year.greaterThanOrEqual`:
   *
   * - `year.greaterThan`:
   *
   * - `year.equals`:
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
   * - `subject.specified`:
   *
   * - `subject.notEquals`:
   *
   * - `subject.in`:
   *
   * - `subject.equals`:
   *
   * - `subject.doesNotContain`:
   *
   * - `subject.contains`:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `semester.specified`:
   *
   * - `semester.notEquals`:
   *
   * - `semester.in`:
   *
   * - `semester.equals`:
   *
   * - `semester.doesNotContain`:
   *
   * - `semester.contains`:
   *
   * - `result.specified`:
   *
   * - `result.notEquals`:
   *
   * - `result.lessThanOrEqual`:
   *
   * - `result.lessThan`:
   *
   * - `result.in`:
   *
   * - `result.greaterThanOrEqual`:
   *
   * - `result.greaterThan`:
   *
   * - `result.equals`:
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
   * @return OK
   */
  getAllSchoolProgressesUsingGET(params: SchoolProgressResourceService.GetAllSchoolProgressesUsingGETParams): __Observable<Array<SchoolProgressDTO>> {
    return this.getAllSchoolProgressesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<SchoolProgressDTO>)
    );
  }

  /**
   * createSchoolProgress
   * @param schoolProgressDTO schoolProgressDTO
   * @return OK
   */
  createSchoolProgressUsingPOSTResponse(schoolProgressDTO: SchoolProgressDTO): __Observable<__StrictHttpResponse<SchoolProgressDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = schoolProgressDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/school-progresses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SchoolProgressDTO>;
      })
    );
  }
  /**
   * createSchoolProgress
   * @param schoolProgressDTO schoolProgressDTO
   * @return OK
   */
  createSchoolProgressUsingPOST(schoolProgressDTO: SchoolProgressDTO): __Observable<SchoolProgressDTO> {
    return this.createSchoolProgressUsingPOSTResponse(schoolProgressDTO).pipe(
      __map(_r => _r.body as SchoolProgressDTO)
    );
  }

  /**
   * updateSchoolProgress
   * @param schoolProgressDTO schoolProgressDTO
   * @return OK
   */
  updateSchoolProgressUsingPUTResponse(schoolProgressDTO: SchoolProgressDTO): __Observable<__StrictHttpResponse<SchoolProgressDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = schoolProgressDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/school-progresses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SchoolProgressDTO>;
      })
    );
  }
  /**
   * updateSchoolProgress
   * @param schoolProgressDTO schoolProgressDTO
   * @return OK
   */
  updateSchoolProgressUsingPUT(schoolProgressDTO: SchoolProgressDTO): __Observable<SchoolProgressDTO> {
    return this.updateSchoolProgressUsingPUTResponse(schoolProgressDTO).pipe(
      __map(_r => _r.body as SchoolProgressDTO)
    );
  }

  /**
   * countSchoolProgresses
   * @param params The `SchoolProgressResourceService.CountSchoolProgressesUsingGETParams` containing the following parameters:
   *
   * - `year.specified`:
   *
   * - `year.notEquals`:
   *
   * - `year.lessThanOrEqual`:
   *
   * - `year.lessThan`:
   *
   * - `year.in`:
   *
   * - `year.greaterThanOrEqual`:
   *
   * - `year.greaterThan`:
   *
   * - `year.equals`:
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
   * - `subject.specified`:
   *
   * - `subject.notEquals`:
   *
   * - `subject.in`:
   *
   * - `subject.equals`:
   *
   * - `subject.doesNotContain`:
   *
   * - `subject.contains`:
   *
   * - `semester.specified`:
   *
   * - `semester.notEquals`:
   *
   * - `semester.in`:
   *
   * - `semester.equals`:
   *
   * - `semester.doesNotContain`:
   *
   * - `semester.contains`:
   *
   * - `result.specified`:
   *
   * - `result.notEquals`:
   *
   * - `result.lessThanOrEqual`:
   *
   * - `result.lessThan`:
   *
   * - `result.in`:
   *
   * - `result.greaterThanOrEqual`:
   *
   * - `result.greaterThan`:
   *
   * - `result.equals`:
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
  countSchoolProgressesUsingGETResponse(params: SchoolProgressResourceService.CountSchoolProgressesUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.yearSpecified != null) __params = __params.set('year.specified', params.yearSpecified.toString());
    if (params.yearNotEquals != null) __params = __params.set('year.notEquals', params.yearNotEquals.toString());
    if (params.yearLessThanOrEqual != null) __params = __params.set('year.lessThanOrEqual', params.yearLessThanOrEqual.toString());
    if (params.yearLessThan != null) __params = __params.set('year.lessThan', params.yearLessThan.toString());
    (params.yearIn || []).forEach(val => {if (val != null) __params = __params.append('year.in', val.toString())});
    if (params.yearGreaterThanOrEqual != null) __params = __params.set('year.greaterThanOrEqual', params.yearGreaterThanOrEqual.toString());
    if (params.yearGreaterThan != null) __params = __params.set('year.greaterThan', params.yearGreaterThan.toString());
    if (params.yearEquals != null) __params = __params.set('year.equals', params.yearEquals.toString());
    if (params.userIdSpecified != null) __params = __params.set('userId.specified', params.userIdSpecified.toString());
    if (params.userIdNotEquals != null) __params = __params.set('userId.notEquals', params.userIdNotEquals.toString());
    if (params.userIdLessThanOrEqual != null) __params = __params.set('userId.lessThanOrEqual', params.userIdLessThanOrEqual.toString());
    if (params.userIdLessThan != null) __params = __params.set('userId.lessThan', params.userIdLessThan.toString());
    (params.userIdIn || []).forEach(val => {if (val != null) __params = __params.append('userId.in', val.toString())});
    if (params.userIdGreaterThanOrEqual != null) __params = __params.set('userId.greaterThanOrEqual', params.userIdGreaterThanOrEqual.toString());
    if (params.userIdGreaterThan != null) __params = __params.set('userId.greaterThan', params.userIdGreaterThan.toString());
    if (params.userIdEquals != null) __params = __params.set('userId.equals', params.userIdEquals.toString());
    if (params.subjectSpecified != null) __params = __params.set('subject.specified', params.subjectSpecified.toString());
    if (params.subjectNotEquals != null) __params = __params.set('subject.notEquals', params.subjectNotEquals.toString());
    (params.subjectIn || []).forEach(val => {if (val != null) __params = __params.append('subject.in', val.toString())});
    if (params.subjectEquals != null) __params = __params.set('subject.equals', params.subjectEquals.toString());
    if (params.subjectDoesNotContain != null) __params = __params.set('subject.doesNotContain', params.subjectDoesNotContain.toString());
    if (params.subjectContains != null) __params = __params.set('subject.contains', params.subjectContains.toString());
    if (params.semesterSpecified != null) __params = __params.set('semester.specified', params.semesterSpecified.toString());
    if (params.semesterNotEquals != null) __params = __params.set('semester.notEquals', params.semesterNotEquals.toString());
    (params.semesterIn || []).forEach(val => {if (val != null) __params = __params.append('semester.in', val.toString())});
    if (params.semesterEquals != null) __params = __params.set('semester.equals', params.semesterEquals.toString());
    if (params.semesterDoesNotContain != null) __params = __params.set('semester.doesNotContain', params.semesterDoesNotContain.toString());
    if (params.semesterContains != null) __params = __params.set('semester.contains', params.semesterContains.toString());
    if (params.resultSpecified != null) __params = __params.set('result.specified', params.resultSpecified.toString());
    if (params.resultNotEquals != null) __params = __params.set('result.notEquals', params.resultNotEquals.toString());
    if (params.resultLessThanOrEqual != null) __params = __params.set('result.lessThanOrEqual', params.resultLessThanOrEqual.toString());
    if (params.resultLessThan != null) __params = __params.set('result.lessThan', params.resultLessThan.toString());
    (params.resultIn || []).forEach(val => {if (val != null) __params = __params.append('result.in', val.toString())});
    if (params.resultGreaterThanOrEqual != null) __params = __params.set('result.greaterThanOrEqual', params.resultGreaterThanOrEqual.toString());
    if (params.resultGreaterThan != null) __params = __params.set('result.greaterThan', params.resultGreaterThan.toString());
    if (params.resultEquals != null) __params = __params.set('result.equals', params.resultEquals.toString());
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
      this.rootUrl + `/api/school-progresses/count`,
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
   * countSchoolProgresses
   * @param params The `SchoolProgressResourceService.CountSchoolProgressesUsingGETParams` containing the following parameters:
   *
   * - `year.specified`:
   *
   * - `year.notEquals`:
   *
   * - `year.lessThanOrEqual`:
   *
   * - `year.lessThan`:
   *
   * - `year.in`:
   *
   * - `year.greaterThanOrEqual`:
   *
   * - `year.greaterThan`:
   *
   * - `year.equals`:
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
   * - `subject.specified`:
   *
   * - `subject.notEquals`:
   *
   * - `subject.in`:
   *
   * - `subject.equals`:
   *
   * - `subject.doesNotContain`:
   *
   * - `subject.contains`:
   *
   * - `semester.specified`:
   *
   * - `semester.notEquals`:
   *
   * - `semester.in`:
   *
   * - `semester.equals`:
   *
   * - `semester.doesNotContain`:
   *
   * - `semester.contains`:
   *
   * - `result.specified`:
   *
   * - `result.notEquals`:
   *
   * - `result.lessThanOrEqual`:
   *
   * - `result.lessThan`:
   *
   * - `result.in`:
   *
   * - `result.greaterThanOrEqual`:
   *
   * - `result.greaterThan`:
   *
   * - `result.equals`:
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
  countSchoolProgressesUsingGET(params: SchoolProgressResourceService.CountSchoolProgressesUsingGETParams): __Observable<number> {
    return this.countSchoolProgressesUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * getSchoolProgress
   * @param id id
   * @return OK
   */
  getSchoolProgressUsingGETResponse(id: number): __Observable<__StrictHttpResponse<SchoolProgressDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/school-progresses/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SchoolProgressDTO>;
      })
    );
  }
  /**
   * getSchoolProgress
   * @param id id
   * @return OK
   */
  getSchoolProgressUsingGET(id: number): __Observable<SchoolProgressDTO> {
    return this.getSchoolProgressUsingGETResponse(id).pipe(
      __map(_r => _r.body as SchoolProgressDTO)
    );
  }

  /**
   * deleteSchoolProgress
   * @param id id
   */
  deleteSchoolProgressUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/school-progresses/${encodeURIComponent(id)}`,
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
   * deleteSchoolProgress
   * @param id id
   */
  deleteSchoolProgressUsingDELETE(id: number): __Observable<null> {
    return this.deleteSchoolProgressUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module SchoolProgressResourceService {

  /**
   * Parameters for getAllSchoolProgressesUsingGET
   */
  export interface GetAllSchoolProgressesUsingGETParams {
    yearSpecified?: boolean;
    yearNotEquals?: number;
    yearLessThanOrEqual?: number;
    yearLessThan?: number;
    yearIn?: Array<number>;
    yearGreaterThanOrEqual?: number;
    yearGreaterThan?: number;
    yearEquals?: number;
    userIdSpecified?: boolean;
    userIdNotEquals?: number;
    userIdLessThanOrEqual?: number;
    userIdLessThan?: number;
    userIdIn?: Array<number>;
    userIdGreaterThanOrEqual?: number;
    userIdGreaterThan?: number;
    userIdEquals?: number;
    subjectSpecified?: boolean;
    subjectNotEquals?: string;
    subjectIn?: Array<string>;
    subjectEquals?: string;
    subjectDoesNotContain?: string;
    subjectContains?: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    semesterSpecified?: boolean;
    semesterNotEquals?: string;
    semesterIn?: Array<string>;
    semesterEquals?: string;
    semesterDoesNotContain?: string;
    semesterContains?: string;
    resultSpecified?: boolean;
    resultNotEquals?: number;
    resultLessThanOrEqual?: number;
    resultLessThan?: number;
    resultIn?: Array<number>;
    resultGreaterThanOrEqual?: number;
    resultGreaterThan?: number;
    resultEquals?: number;

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
  }

  /**
   * Parameters for countSchoolProgressesUsingGET
   */
  export interface CountSchoolProgressesUsingGETParams {
    yearSpecified?: boolean;
    yearNotEquals?: number;
    yearLessThanOrEqual?: number;
    yearLessThan?: number;
    yearIn?: Array<number>;
    yearGreaterThanOrEqual?: number;
    yearGreaterThan?: number;
    yearEquals?: number;
    userIdSpecified?: boolean;
    userIdNotEquals?: number;
    userIdLessThanOrEqual?: number;
    userIdLessThan?: number;
    userIdIn?: Array<number>;
    userIdGreaterThanOrEqual?: number;
    userIdGreaterThan?: number;
    userIdEquals?: number;
    subjectSpecified?: boolean;
    subjectNotEquals?: string;
    subjectIn?: Array<string>;
    subjectEquals?: string;
    subjectDoesNotContain?: string;
    subjectContains?: string;
    semesterSpecified?: boolean;
    semesterNotEquals?: string;
    semesterIn?: Array<string>;
    semesterEquals?: string;
    semesterDoesNotContain?: string;
    semesterContains?: string;
    resultSpecified?: boolean;
    resultNotEquals?: number;
    resultLessThanOrEqual?: number;
    resultLessThan?: number;
    resultIn?: Array<number>;
    resultGreaterThanOrEqual?: number;
    resultGreaterThan?: number;
    resultEquals?: number;
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

export { SchoolProgressResourceService }
