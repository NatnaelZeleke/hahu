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

    this.scheduleService.queryToday({
      'userId.equals': userId,
    })
      .subscribe(result => {
        this.todaySchedule = result.body;
        this.todayScheduleSubject.next(this.todaySchedule);
      });
  }

  getTomorrowSchedule(userId: number) {
    this.scheduleService.queryTomorrow({
      'userId.equals': userId
    })
      .subscribe(result => {
        this.tomorrowSchedule = result.body;
        this.tomorrowScheduleSubject.next(this.tomorrowSchedule);
      });
  }

  getSoonSchedule(userId: number) {
    this.scheduleService.querySoon({
      'userId.equals': userId
    })
      .subscribe(result => {
        this.soonSchedule = result.body;
        this.soonScheduleSubject.next(this.soonSchedule);
      });
  }

  addSchedule(schedule: ISchedule): Observable<ISchedule> {
    return this.scheduleService.create(schedule)
      .pipe(map(result => {
        if (result.body != null) {
          this.refreshSchedules(result.body.userId);
        }
        return result.body;
      }));
  }

  refreshSchedules(id: number) {
    this.getTodaySchedule(id);
    this.getSoonSchedule(id);
    this.getTomorrowSchedule(id);
  }


  markAsRead(schedule: ISchedule): Observable<ISchedule> {
    return this.scheduleService.update(schedule)
        .pipe(map(result => {
          return result.body;
        }));
  }

}
