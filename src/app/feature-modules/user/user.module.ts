import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { SchoolFeedComponent } from './school-feed/school-feed.component';
import { SavedComponent } from './saved/saved.component';
import {SharedModule} from '../../shared/shared.module';
import {AccService} from '../../services/acc.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [UserComponent, SchoolFeedComponent, SavedComponent],

})
export class UserModule { }
