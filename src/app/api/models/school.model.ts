import {ContentType} from './enumerations/content-type.model';
import {IUserGroup} from './user-group.model';
import {IUser} from './user.model';

export interface ISchool {
  id?: number;
  name?: string;
  featuredImageContentType?: string;
  featuredImage?: any;
  phone?: string;
  email?: string;
  website?: string;
  about?: any;
  aboutType?: ContentType;
  location?: any;
  locationType?: ContentType;
  userGroups?: IUserGroup[];
  users?: IUser[];
}

export class School implements ISchool {
  constructor(
    public id?: number,
    public name?: string,
    public featuredImageContentType?: string,
    public featuredImage?: any,
    public phone?: string,
    public email?: string,
    public website?: string,
    public about?: any,
    public aboutType?: ContentType,
    public location?: any,
    public locationType?: ContentType,
    public userGroups?: IUserGroup[],
    public users?: IUser[]
  ) {}
}
