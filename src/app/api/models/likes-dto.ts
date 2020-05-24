/* tslint:disable */

/**
 * The Likes entity contain likes for user, comment, posts.
 * @author A true hailemaryam
 */
export interface LikesDTO {
  commentId?: number;
  id?: number;
  postId?: number;
  registeredTime?: string;
  userId?: number;
  userLogin?: string;
}
