import { Moment } from 'moment';
import {ContentType} from './enumerations/content-type.model';
import {PostType} from './enumerations/post-type.model';
import {IComment} from './comment.model';
import {ILikes} from './likes.model';
import {IViews} from './views.model';
import {IShares} from './shares.model';
import {IPostMetaData} from './post-meta-data.model';
import {ICategory} from './category.model';
import {ITag} from './tag.model';
import {IPreference} from './preference.model';

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
  popularityIndex?: number;
  trendingIndex?: number;
  comments?: IComment[];
  likes?: ILikes[];
  views?: IViews[];
  shares?: IShares[];
  posts?: IPost[];
  userLogin?: string;
  userId?: number;
  postMetaData?: IPostMetaData[];
  categories?: ICategory[];
  tags?: ITag[];
  pageId?: number;
  preferences?: IPreference[];
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
    public popularityIndex?: number,
    public trendingIndex?: number,
    public comments?: IComment[],
    public likes?: ILikes[],
    public views?: IViews[],
    public shares?: IShares[],
    public posts?: IPost[],
    public userLogin?: string,
    public userId?: number,
    public postMetaData?: IPostMetaData[],
    public categories?: ICategory[],
    public tags?: ITag[],
    public pageId?: number,
    public preferences?: IPreference[]
  ) {}
}
