import {ICategory} from './category.model';
import {IUser} from './user.model';
import {IPost} from './post.model';

export interface IPreference {
  id?: number;
  hasPrefereceSelected?: boolean;
  userLogin?: string;
  userId?: number;
  categories?: ICategory[];
  blockedUsers?: IUser[];
  savedPosts?: IPost[];
}

export class Preference implements IPreference {
  constructor(
    public id?: number,
    public hasPrefereceSelected?: boolean,
    public userLogin?: string,
    public userId?: number,
    public categories?: ICategory[],
    public blockedUsers?: IUser[],
    public savedPosts?: IPost[]
  ) {
    this.hasPrefereceSelected = this.hasPrefereceSelected || false;
  }
}
