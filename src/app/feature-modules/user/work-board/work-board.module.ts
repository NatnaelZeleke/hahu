import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorkBoardRoutingModule} from './work-board-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchoolProgressComponent } from './school-progress/school-progress.component';

@NgModule({
  imports: [
    CommonModule,
    WorkBoardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, NotificationsComponent, ScheduleComponent, SchoolProgressComponent]
})
export class WorkBoardModule {
}
