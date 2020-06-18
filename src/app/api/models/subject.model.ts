import {ISchoolProgress} from './school-progress.model';

export interface ISubject {
  id?: number;
  name?: string;
  schoolProgresses?: ISchoolProgress[];
}

export class Subject implements ISubject {
  constructor(public id?: number, public name?: string, public schoolProgresses?: ISchoolProgress[]) {}
}
