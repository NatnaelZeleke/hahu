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
        this.notifications = result.body;
        this.ngxSpinner.hide('notification');
      }, (err) => {
        this.ngxSpinner.hide('notification');
      });

  }


}
