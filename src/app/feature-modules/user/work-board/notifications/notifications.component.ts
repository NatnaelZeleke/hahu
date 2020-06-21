import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../../../api/services/notification.service';
import {AccService} from '../../../../services/acc.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Account} from '../../../../api/models/account.model';
import {INotification} from '../../../../api/models/notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  account: Account;
  notifications: INotification[] = [];
  isNotificationLoaded = false;
  showNew = false;

  constructor(public notifService: NotificationService,
              public accountService: AccService,
              public ngxSpinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.accountService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getNotifications(this.account.id);
      });
  }


  getNotifications(id: number) {
    console.log('called from notification id = ' + id);
    this.ngxSpinner.show('notification');
    this.notifService.query({
      'userId.equals': id
    })
      .subscribe(result => {
        this.isNotificationLoaded = true;
        this.notifications = result.body;
        this.markAllRead(this.notifications);
        this.ngxSpinner.hide('notification');
      }, (err) => {
        this.ngxSpinner.hide('notification');
      });
  }


  markAllRead(allN: INotification[]) {
    for (let n = 0; n < allN.length; n++) {
      if (!allN[n].markAsRead) {
        console.log(allN[n]);
        this.showNew = true;
        const notif: INotification = {
          notificationMetaData: allN[n].notificationMetaData,
          link: allN[n].link,
          id: allN[n].id,
          featuredImageContentType: allN[n].featuredImageContentType,
          contentType: allN[n].contentType,
          content: allN[n].content,
          date: allN[n].date,
          featuredImage: allN[n].featuredImage,
          markAsRead: true,
          userLogin: allN[n].userLogin,
          notifierId: allN[n].notifierId,
          notifierLogin: allN[n].notifierLogin,
          title: allN[n].title,
          userGroupId: allN[n].userGroupId,
          userGroupName: allN[n].userGroupName,
          userId: allN[n].userId
        };
        console.log(notif);
        this.markAsRead(notif);
      }
    }
  }


  markAsRead(notification: INotification) {
    this.notifService.update(notification)
      .subscribe(result => {
      });
  }


}
