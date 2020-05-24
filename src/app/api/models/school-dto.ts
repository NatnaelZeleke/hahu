/* tslint:disable */
import { UserDTO } from './user-dto';
export interface SchoolDTO {
  about?: string;
  aboutType?: 'TEXT' | 'HTML';
  email?: string;
  featuredImage?: string;
  featuredImageContentType?: string;
  id?: number;
  location?: string;
  locationType?: 'TEXT' | 'HTML';
  name?: string;
  phone?: string;
  users?: Array<UserDTO>;
  website?: string;
}
