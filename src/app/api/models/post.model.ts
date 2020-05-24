import { Moment } from 'moment';
import {ContentType} from './enumerations/content-type.model';
import {PostType} from './enumerations/post-type.model';
import {IPostMetaData} from './post-meta-data.model';
import {IComment} from './comment.model';
import {ILikes} from './likes.model';
import {ICategory} from './category.model';
import {ITag} from './tag.model';

export interface IPost {
  id?: number;
  title?: string;
  content?: any;
  contentType?: ContentType;
  postType?: PostType;
  featuredImageContentType?: string;
  featuredImage?: any;
  postedDate?: Moment;
  modifiedDate?: Moment;
  instantPostEndDate?: Moment;
  postMetaData?: IPostMetaData[];
  comments?: IComment[];
  likes?: ILikes[];
  userLogin?: string;
  userId?: number;
  categories?: ICategory[];
  tags?: ITag[];
}

export class Post implements IPost {
  constructor(
    public id?: number,
    public title?: string,
    public content?: any,
    public contentType?: ContentType,
    public postType?: PostType,
    public featuredImageContentType?: string,
    public featuredImage?: any,
    public postedDate?: Moment,
    public modifiedDate?: Moment,
    public instantPostEndDate?: Moment,
    public postMetaData?: IPostMetaData[],
    public comments?: IComment[],
    public likes?: ILikes[],
    public userLogin?: string,
    public userId?: number,
    public categories?: ICategory[],
    public tags?: ITag[]
  ) {}
}
