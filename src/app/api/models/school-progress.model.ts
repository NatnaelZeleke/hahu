import {Semester} from './enumerations/semester.model';

export interface ISchoolProgress {
  id?: number;
  year?: number;
  semester?: Semester;
  result?: number;
  userLogin?: string;
  userId?: number;
  userGroupName?: string;
  userGroupId?: number;
  assesmentTypeName?: string;
  assesmentTypeId?: number;
  subjectName?: string;
  subjectId?: number;
}

export class SchoolProgress implements ISchoolProgress {
  constructor(
    public id?: number,
    public year?: number,
    public semester?: Semester,
    public result?: number,
    public userLogin?: string,
    public userId?: number,
    public userGroupName?: string,
    public userGroupId?: number,
    public assesmentTypeName?: string,
    public assesmentTypeId?: number,
    public subjectName?: string,
    public subjectId?: number
  ) {}
}
