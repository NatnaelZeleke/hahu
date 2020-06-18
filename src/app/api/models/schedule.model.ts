import { Moment } from 'moment';

export interface ISchedule {
  id?: number;
  title?: string;
  startTime?: Moment;
  endTime?: Moment;
  markAsDone?: boolean;
  userLogin?: string;
  userId?: number;
  userGroupName?: string;
  userGroupId?: number;
  scheduleTypeName?: string;
  scheduleTypeId?: number;
}

export class Schedule implements ISchedule {
  constructor(
    public id?: number,
    public title?: string,
    public startTime?: Moment,
    public endTime?: Moment,
    public markAsDone?: boolean,
    public userLogin?: string,
    public userId?: number,
    public userGroupName?: string,
    public userGroupId?: number,
    public scheduleTypeName?: string,
    public scheduleTypeId?: number
  ) {
    this.markAsDone = this.markAsDone || false;
  }
}
