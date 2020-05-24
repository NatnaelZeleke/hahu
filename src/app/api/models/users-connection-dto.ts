/* tslint:disable */

/**
 * The UsersConnection entity will store a user follower and following users.
 * @author A true hailemaryam
 */
export interface UsersConnectionDTO {
  followerId?: number;
  followerLogin?: string;
  followingId?: number;
  followingLogin?: string;
  id?: number;
  registeredTime?: string;
}
