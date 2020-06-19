import {IPost} from './post.model';

export interface IPostMetaData {
  id?: number;
  name?: string;
  value?: string;
  blobValueContentType?: string;
  blobValue?: any;
  posts?: IPost[];
}

export class PostMetaData implements IPostMetaData {
  constructor(
    public id?: number,
    public name?: string,
    public value?: string,
    public blobValueContentType?: string,
    public blobValue?: any,
    public posts?: IPost[]
  ) {}
}
