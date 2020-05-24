import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {SchoolProgressComponent} from './school-progress/school-progress.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'schoolprogress',
    component: SchoolProgressComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkBoardRoutingModule {
}
