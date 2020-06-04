import {GroupType} from './enumerations/group-type.model';
import {INotification} from './notification.model';
import {ISchedule} from './schedule.model';
import {IUser} from './user.model';
import {ISchoolProgress} from './school-progress.model';

export interface IUserGroup {
  id?: number;
  name?: string;
  detail?: any;
  profilePicContentType?: string;
  profilePic?: any;
  groupType?: GroupType;
  notifications?: INotification[];
  schedules?: ISchedule[];
  schoolProgresses?: ISchoolProgress[];
  users?: IUser[];
  owners?: IUser[];
  schoolName?: string;
  schoolId?: number;
}

export class UserGroup implements IUserGroup {
  constructor(
    public id?: number,
    public name?: string,
    public detail?: any,
    public profilePicContentType?: string,
    public profilePic?: any,
    public groupType?: GroupType,
    public notifications?: INotification[],
    public schedules?: ISchedule[],
    public schoolProgresses?: ISchoolProgress[],
    public users?: IUser[],
    public owners?: IUser[],
    public schoolName?: string,
    public schoolId?: number
  ) {}
}
