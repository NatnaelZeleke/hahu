import { Moment } from 'moment';

export interface IFeedComment {
  id?: number;
  content?: any;
  postedDate?: Moment;
  modifiedDate?: Moment;
  replies?: IFeedComment[];
  userLogin?: string;
  userId?: number;
  newsFeedId?: number;
  schoolFeedId?: number;
  commentId?: number;
}

export class FeedComment implements IFeedComment {
  constructor(
    public id?: number,
    public content?: any,
    public postedDate?: Moment,
    public modifiedDate?: Moment,
    public replies?: IFeedComment[],
    public userLogin?: string,
    public userId?: number,
    public newsFeedId?: number,
    public schoolFeedId?: number,
    public commentId?: number
  ) {}
}
