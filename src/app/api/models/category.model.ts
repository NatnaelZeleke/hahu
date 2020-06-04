import {IPost} from './post.model';
import {IPreference} from './preference.model';

export interface ICategory {
  id?: number;
  name?: string;
  description?: string;
  recomendationCategory?: boolean;
  posts?: IPost[];
  preferences?: IPreference[];
}

export class Category implements ICategory {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public recomendationCategory?: boolean,
    public posts?: IPost[],
    public preferences?: IPreference[]
  ) {
    this.recomendationCategory = this.recomendationCategory || false;
  }
}
