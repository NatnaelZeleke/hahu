/* tslint:disable */

/**
 * The Notification entity contains notificationfor user.
 * @author A true hailemaryam
 */
export interface NotificationDTO {
  content?: string;
  contentType?: 'TEXT' | 'HTML';
  date?: string;
  featuredImage?: string;
  featuredImageContentType?: string;
  id?: number;
  link?: string;
  markAsRead?: boolean;
  title?: string;
  userGroupId?: number;
  userGroupName?: string;
  userId?: number;
  userLogin?: string;
}
