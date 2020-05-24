/* tslint:disable */
import { UserDTO } from './user-dto';

/**
 * The UserGroup entity will store user groups.
 * @author A true hailemaryam
 */
export interface UserGroupDTO {
  detail?: string;
  groupType?: 'PUBLIC' | 'PRIVATE';
  id?: number;
  name?: string;
  owners?: Array<UserDTO>;
  profilePic?: string;
  profilePicContentType?: string;
  schoolId?: number;
  schoolName?: string;
  users?: Array<UserDTO>;
}
