import { Moment } from 'moment';
import {ContentType} from './enumerations/content-type.model';

export interface ISchoolFeed {
  id?: number;
  title?: string;
  content?: any;
  contentType?: ContentType;
  featuredImageContentType?: string;
  featuredImage?: any;
  postedDate?: Moment;
  modifiedDate?: Moment;
  createdByLogin?: string;
  createdById?: number;
  userGroupName?: string;
  userGroupId?: number;
}

export class SchoolFeed implements ISchoolFeed {
  constructor(
    public id?: number,
    public title?: string,
    public content?: any,
    public contentType?: ContentType,
    public featuredImageContentType?: string,
    public featuredImage?: any,
    public postedDate?: Moment,
    public modifiedDate?: Moment,
    public createdByLogin?: string,
    public createdById?: number,
    public userGroupName?: string,
    public userGroupId?: number
  ) {}
}
