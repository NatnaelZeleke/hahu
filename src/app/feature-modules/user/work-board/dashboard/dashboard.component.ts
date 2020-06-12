import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../../../api/services/notification.service';
import {AccService} from '../../../../services/acc.service';
import {Account} from '../../../../api/models/account.model';
import {INotification} from '../../../../api/models/notification.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {ScheduleService} from '../../../../api/services/schedule.service';
import {AppScheduleService} from '../../../../services/app-schedule.service';
import {ISchedule} from '../../../../api/models/schedule.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  account: Account;
  notifications: INotification[] = [];
  todaySchedule: ISchedule[];

  constructor(public notifService: NotificationService,
              public accountService: AccService,
              public ngxSpinner: NgxSpinnerService,
              public scheduleService: AppScheduleService) {
  }

  ngOnInit() {

    this.accountService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getNotifications(this.account.id);
        this.getScheduleService(this.account.id);
      });


  }


  getNotifications(id: number) {
    if (id != null) {
      this.ngxSpinner.show('wNotification');
      this.notifService.query({
        'userId.equals': id
      })
        .subscribe(result => {
          this.notifications = result.body;
          this.ngxSpinner.hide('wNotification');
        }, (err) => {
          this.ngxSpinner.hide('wNotification');
        });
    }
  }

  getScheduleService(id: number) {
    setTimeout(() => {
      this.ngxSpinner.show('scheduleDashboard');
    }, 0);
    this.scheduleService.todayScheduleSubject
      .subscribe(result => {
        this.todaySchedule = result;
        this.ngxSpinner.hide('scheduleDashboard');
      }, (err) => {
        this.ngxSpinner.hide('scheduleDashboard');
      });
    this.scheduleService.getTodaySchedule(id);
  }

}
