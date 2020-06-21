import {INotification} from './notification.model';

export interface INotificationMetaData {
  id?: number;
  name?: string;
  value?: string;
  blobValueContentType?: string;
  blobValue?: any;
  notifications?: INotification[];
}

export class NotificationMetaData implements INotificationMetaData {
  constructor(
    public id?: number,
    public name?: string,
    public value?: string,
    public blobValueContentType?: string,
    public blobValue?: any,
    public notifications?: INotification[]
  ) {}
}
