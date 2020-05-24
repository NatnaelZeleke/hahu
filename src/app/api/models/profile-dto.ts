/* tslint:disable */
import { UserDTO } from './user-dto';
export interface ProfileDTO {
  families?: Array<UserDTO>;
  id?: number;
  phone?: string;
  userId?: number;
  userLogin?: string;
}
