import {Component, OnInit} from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {ScheduleService} from '../../../../api/services/schedule.service';
import {AccService} from '../../../../services/acc.service';
import {Account} from '../../../../api/models/account.model';
import {ISchedule} from '../../../../api/models/schedule.model';
import {BsModalService} from 'ngx-bootstrap/modal';
import {AddScheduleComponent} from './add-schedule/add-schedule.component';
import {AppScheduleService} from '../../../../services/app-schedule.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  account: Account;
  bsInlineValue = new Date();
  bsConfig: Partial<BsDatepickerConfig>;
  todaySchedule: ISchedule[];
  tomorrowSchedule: ISchedule[];
  soonSchedules: ISchedule[];

  constructor(public scheduleService: ScheduleService,
              public accountService: AccService,
              public spinner: NgxSpinnerService,
              public modalService: BsModalService,
              public appScheduleService: AppScheduleService) {
  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, {containerClass: 'theme-default'});
    this.accountService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getSchedules();
      });


  }

  getSchedules() {
    this.spinner.show('todaySchedule');
    setTimeout(() => {
      this.spinner.show('tomorrowSchedule');
    }, 0);
    setTimeout(() => {
      this.spinner.show('soonSchedule');
    }, 0);
    this.appScheduleService.todayScheduleSubject
      .subscribe(result => {
        this.spinner.hide('todaySchedule');
        this.todaySchedule = result;
      });
    this.appScheduleService.tomorrowScheduleSubject
      .subscribe(result => {
        this.spinner.hide('tomorrowSchedule');
        this.tomorrowSchedule = result;
      });
    this.appScheduleService.soonScheduleSubject
      .subscribe(result => {
        this.spinner.hide('soonSchedule');
        this.soonSchedules = result;
      });

    this.appScheduleService.getTodaySchedule(this.account.id);
    this.appScheduleService.getTomorrowSchedule(this.account.id);
    this.appScheduleService.getSoonSchedule(this.account.id);

  }


  addSchedule(isToday: boolean, isTomorrow: boolean, isSoon: boolean, title: string) {
    const initialState = {
      title: title,
      message: '',
      today: isToday,
      tomorrow: isTomorrow,
      soon: isSoon,
      account: this.account
    };
    this.modalService.show(AddScheduleComponent, {
      initialState: initialState,
      animated: false
    });
  }

  changeStatus() {

  }


}
