/* tslint:disable */
import { CategoryDTO } from './category-dto';
import { TagDTO } from './tag-dto';

/**
 * The Post
 * entity will contain both pages and posts.
 * @author A true hailemaryam
 */
export interface PostDTO {
  categories?: Array<CategoryDTO>;
  content?: string;
  contentType?: 'TEXT' | 'HTML';
  featuredImage?: string;
  featuredImageContentType?: string;
  id?: number;
  instantPostEndDate?: string;
  modifiedDate?: string;
  postType?: 'PAGE' | 'POST';
  postedDate?: string;
  tags?: Array<TagDTO>;
  title?: string;
  userId?: number;
  userLogin?: string;
}
