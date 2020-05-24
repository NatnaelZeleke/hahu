/* tslint:disable */

/**
 * The Album entity will store images for user by grouping in to albums.
 * There are default album for storing profile pictures.
 * @author A true hailemaryam
 */
export interface AlbumDTO {
  id?: number;
  name?: string;
  userId?: number;
  userLogin?: string;
}
