import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../../../api/services/notification.service';
import {AccService} from '../../../../services/acc.service';
import {Account} from '../../../../api/models/account.model';
import {INotification} from '../../../../api/models/notification.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {ScheduleService} from '../../../../api/services/schedule.service';
import {AppScheduleService} from '../../../../services/app-schedule.service';
import {ISchedule} from '../../../../api/models/schedule.model';
import {SchoolProgressService} from '../../../../api/services/school-progress.service';
import {ISchoolProgress} from '../../../../api/models/school-progress.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  account: Account;
  notifications: INotification[] = [];
  isNotificationLoaded = false;
  todaySchedule: ISchedule[];
  isScheduleLoaded = false;
  results = [];
  acr = 0;
  showResult = false;

  constructor(public notifService: NotificationService,
              public accountService: AccService,
              public ngxSpinner: NgxSpinnerService,
              public scheduleService: AppScheduleService,
              public schoolProgress: SchoolProgressService) {
  }

  ngOnInit() {
    this.accountService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getNotifications(this.account.id);
        this.getScheduleService(this.account.id);
        this.getSchoolProgress(this.account.id);
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
          this.isNotificationLoaded = true;
        }, (err) => {
          this.ngxSpinner.hide('wNotification');
          this.isNotificationLoaded = true;
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
        this.isScheduleLoaded = true;
      }, (err) => {
        this.ngxSpinner.hide('scheduleDashboard');
        this.isScheduleLoaded = true;
      });
    this.scheduleService.getTodaySchedule(id);
  }

  getSchoolProgress(userId: number) {
    this.schoolProgress.query({'userId.equals': userId})
      .subscribe(result => {
        this.filterResult(result.body);
      });
  }

  filterResult(result: ISchoolProgress[]) {

    for (let i = 0; i < result.length; i++) {
      this.results.push(result[i].result);
    }
    this.calculateAverageResult(this.results);
  }

  calculateAverageResult(result: number[]) {
    for (let i = 0; i < result.length; i++) {
      this.acr = this.acr + result[i];
    }
    if (result.length > 0) {
      this.acr = this.acr / result.length;
    } else {
      this.acr = 0;
    }
    this.showResult = true;
  }


}
