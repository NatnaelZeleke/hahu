import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeConRoutingModule} from './home-con-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {HomePageComponent} from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolfeedComponent } from './schoolfeed/schoolfeed.component';
import { SavesComponent } from './saves/saves.component';

@NgModule({
  imports: [
    CommonModule,
    HomeConRoutingModule,
    SharedModule
  ],
  declarations: [HomePageComponent, DashboardComponent, SchoolfeedComponent, SavesComponent]
})
export class HomeConModule {
}
