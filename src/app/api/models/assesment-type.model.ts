import {ISchoolProgress} from './school-progress.model';

export interface IAssesmentType {
  id?: number;
  name?: string;
  schoolProgresses?: ISchoolProgress[];
}

export class AssesmentType implements IAssesmentType {
  constructor(public id?: number, public name?: string, public schoolProgresses?: ISchoolProgress[]) {}
}
