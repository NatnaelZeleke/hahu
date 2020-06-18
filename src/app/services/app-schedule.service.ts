import {Injectable} from '@angular/core';
import {ScheduleService} from '../api/services/schedule.service';
import {map} from 'rxjs/operators';
import {ISchedule} from '../api/models/schedule.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppScheduleService {

  todaySchedule: ISchedule[];
  tomorrowSchedule: ISchedule[];
  todayScheduleSubject = new Subject<ISchedule[]>();
  tomorrowScheduleSubject = new Subject<ISchedule[]>();
  soonSchedule: ISchedule[];
  soonScheduleSubject = new Subject<ISchedule[]>();

  constructor(public scheduleService: ScheduleService) {
  }


  getTodaySchedule(userId: number) {

    this.scheduleService.query({
      'userId.equals': userId
    })
      .subscribe(result => {
        this.todaySchedule = result.body;
        this.todayScheduleSubject.next(this.todaySchedule);
      });
  }

  getTomorrowSchedule(userId: number) {
    this.scheduleService.query({
      'userId.equals': userId
    })
      .subscribe(result => {
        this.tomorrowSchedule = result.body;
        this.tomorrowScheduleSubject.next(this.tomorrowSchedule);
      });
  }

  getSoonSchedule(userId: number) {
    this.scheduleService.query({
      'userId.equals': userId
    })
      .subscribe(result => {
        this.soonSchedule = result.body;
        this.soonScheduleSubject.next(this.soonSchedule);
      });
  }

  addSchedule(schedule: ISchedule, today: boolean, tomorrow: boolean, soon: boolean): Observable<ISchedule> {
    return this.scheduleService.create(schedule)
      .pipe(map(result => {
        if (result.body != null) {
          if (today) {
            this.todaySchedule.push(result.body);
            this.todayScheduleSubject.next(this.todaySchedule);
          } else if (tomorrow) {
            this.tomorrowSchedule.push(result.body);
            this.tomorrowScheduleSubject.next(this.tomorrowSchedule);
          } else {
            this.soonSchedule.push(result.body);
            this.soonScheduleSubject.next(this.soonSchedule);
          }
        }
        return result.body;
      }));
  }


}
