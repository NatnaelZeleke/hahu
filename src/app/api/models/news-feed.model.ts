import { Moment } from 'moment';
import {ContentType} from './enumerations/content-type.model';

export interface INewsFeed {
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
}

export class NewsFeed implements INewsFeed {
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
    public createdById?: number
  ) {}
}
