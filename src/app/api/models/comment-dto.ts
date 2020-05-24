/* tslint:disable */

/**
 * The Comment entity will contain comments on post, user or comment.
 * @author A true hailemaryam
 */
export interface CommentDTO {
  commentId?: number;
  content?: string;
  id?: number;
  modifiedDate?: string;
  postId?: number;
  postedDate?: string;
}
