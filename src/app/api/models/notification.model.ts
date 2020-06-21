import { Moment } from 'moment';
import {ContentType} from './enumerations/content-type.model';
import {INotificationMetaData} from './notification-meta-data.model';

export interface INotification {
  id?: number;
  featuredImageContentType?: string;
  featuredImage?: any;
  title?: string;
  content?: any;
  contentType?: ContentType;
  link?: string;
  date?: Moment;
  markAsRead?: boolean;
  notifierLogin?: string;
  notifierId?: number;
  userLogin?: string;
  userId?: number;
  notificationMetaData?: INotificationMetaData[];
  userGroupName?: string;
  userGroupId?: number;
}

export class Notification implements INotification {
  constructor(
    public id?: number,
    public featuredImageContentType?: string,
    public featuredImage?: any,
    public title?: string,
    public content?: any,
    public contentType?: ContentType,
    public link?: string,
    public date?: Moment,
    public markAsRead?: boolean,
    public notifierLogin?: string,
    public notifierId?: number,
    public userLogin?: string,
    public userId?: number,
    public notificationMetaData?: INotificationMetaData[],
    public userGroupName?: string,
    public userGroupId?: number
  ) {
    this.markAsRead = this.markAsRead || false;
  }
}
